/**
 * @author malisahin
 * @since 2018-04-14
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Constants } from '../../entities/Constants';
import { AdresDao } from '../adres-dao/adres-dao';
import { LoggerProvider } from '../logger/logger';
import { Sehir } from "../../entities/Sehir";
import { Ilce } from "../../entities/Ilce";
import { Mahalle } from "../../entities/mahalle";
import { TokenProvider } from "../token/token";
import { UtilProvider } from "../util/util";
import { EntityUtil } from '../../entities/EntityUtil';


@Injectable()
export class AdresProvider {

  constructor(public http: HttpClient,
    private api: ApiProvider,
    private token: TokenProvider,
    private adresDao: AdresDao,
    private util: UtilProvider,
    private logger: LoggerProvider) {

  }

  async downloadSehirData(): Promise<any> {
    let url = this.api.getSehirIlceUrl(Constants.DATA_TYPE.SEHIR_TNM);
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      this.util.loaderStart();
      let apiData = await this.http.get(url, { headers: header }).toPromise();
      let sehirList = this.fillSehirList(apiData);
      this.logger.dir(apiData);
      return this.adresDao.insertSehirList(sehirList);
    } else {
      this.util.ifOffline();
    }

  }

  async downloadIlceData(): Promise<any> {
    let url = this.api.getSehirIlceUrl(Constants.DATA_TYPE.ILCE_TNM);
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      this.util.loaderStart();
      let apiData = await this.http.get(url, { headers: header }).toPromise();
      let ilceList = this.fillIlceList(apiData);
      return this.adresDao.insertIlceList(ilceList);
    } else {
      this.util.ifOffline();
    }
  }

  async downloadMahalleData(first: number): Promise<any> {
    let url = this.api.getMahalleTnmUrl(first);
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      this.util.loaderStart();
      let apiData = await this.http.get(url, { headers: header }).toPromise();
      let mahalleList = this.fillMahalleList(apiData);
      return this.adresDao.insertMahalleList(mahalleList);
    } else {
      this.util.ifOffline();
    }
  }

  fillSehirList(item: any): Sehir[] {
    let sehirList: Sehir[] = new Array();
    let list = item.message.data;
    let versiyon = item.message.versiyon;
    localStorage.setItem(Constants.VERSIYON.SERVER.SEHIR_TNM, versiyon);
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
    localStorage.setItem(Constants.VERSIYON.SERVER.ILCE_TNM, versiyon);
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
    localStorage.setItem(Constants.VERSIYON.SERVER.MAHALLE_TNM, versiyon);
    localStorage.setItem(Constants.GELEN_VERI.MAHALLE_TNM, item.message.data.length.toString());

    let entityUtil = new EntityUtil();
    entityUtil.indirilenVeriyiHesapla(Constants.DATA_TYPE.MAHALLE_TNM, item.message.data.length);

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
