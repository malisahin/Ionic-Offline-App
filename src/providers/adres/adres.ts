/**
 * @author malisahin
 * @since 2018-04-14
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {Constants} from '../../entities/Constants';
import {AdresDao} from '../adres-dao/adres-dao';
import {LoggerProvider} from '../logger/logger';
import {Sehir} from "../../entities/Sehir";
import {Ilce} from "../../entities/Ilce";
import {Mahalle} from "../../entities/mahalle";


@Injectable()
export class AdresProvider {

  constants: Constants;

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private adresDao: AdresDao,
              private logger: LoggerProvider) {

    this.constants = new Constants();
    console.log('Hello AdresProvider Provider');
  }

  async downloadSehirData(): Promise<any> {
    let url = this.api.getSehirIlceUrl(this.constants.DATA_TYPE.SEHIR_TNM);
    let header = await this.api.getHeader();
    let apiData = await this.http.get(url, {headers: header}).toPromise();
    let sehirList = this.fillSehirList(apiData);
    this.logger.dir(apiData);
    return this.adresDao.insertSehirList(sehirList);
  }

  async downloadIlceData(): Promise<any> {
    let url = this.api.getSehirIlceUrl(this.constants.DATA_TYPE.ILCE_TNM);
    let header = await this.api.getHeader();
    let apiData = await this.http.get(url, {headers: header}).toPromise();
    let ilceList = this.fillIlceList(apiData);
    return this.adresDao.insertIlceList(ilceList);
  }

  async downloadMahalleData(first: number): Promise<any> {
    let url = this.api.getMahalleTnmUrl(first);
    let header = await this.api.getHeader();
    let apiData = await this.http.get(url, {headers: header}).toPromise();
    let mahalleList = this.fillMahalleList(apiData);
    return this.adresDao.insertMahalleList(mahalleList);
  }

  fillSehirList(item: any): Sehir[] {
    let sehirList: Sehir[] = new Array();
    let list = item.message.data;
    let versiyon = item.message.versiyon;
    localStorage.setItem(this.constants.VERSIYON.SERVER.SEHIR_TNM, versiyon);
    list.forEach(row => {
      let sehir = new Sehir();
      sehir.sehirAdi = row.sehirAdi;
      sehir.sehirKodu = row.sehirKodu;
      sehirList.push(sehir);
    });
    return sehirList;
  }

  fillIlceList(item: any): Ilce[] {
    let ilceList: Ilce[] = new Array();
    let list = item.message.data;
    let versiyon = item.message.versiyon;
    localStorage.setItem(this.constants.VERSIYON.SERVER.ILCE_TNM, versiyon);
    list.forEach(row => {
      let ilce = new Ilce();
      ilce.ilceAdi = row.ilceAdi;
      ilce.ilceKodu = row.ilceKodu;
      ilce.sehirKodu = row.sehirKodu;
      ilceList.push(ilce);
    });
    return ilceList;
  }

  fillMahalleList(item: any): Mahalle[] {
    let mahalleList: Mahalle[] = new Array();
    let list = item.message.data;
    let versiyon = item.message.versiyon;
    localStorage.setItem(this.constants.VERSIYON.SERVER.MAHALLE_TNM, versiyon);
    localStorage.setItem(this.constants.GELEN_VERI.GELEN_MAHALLE_TNM, item.message.data.length.toString());
    list.forEach(row => {
      let mahalle = new Mahalle();
      mahalle.sehirKodu = row.sehirKodu;
      mahalle.ilceKodu = row.ilceKodu;
      mahalle.mahalleAdi = row.mahalleAdi;
      mahalle.mahalleKodu = row.mahalleKodu;
      mahalleList.push(mahalle);
    });
    return mahalleList;
  }
}
