/**
 * @author malisahin
 * @date 2018-04-14
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {Constants} from '../../entities/Constants';
import {Observable} from 'rxjs/Observable';
import {AdresDao} from '../adres-dao/adres-dao';
import {LoggerProvider} from '../logger/logger';
import {Sehir} from "../../entities/Sehir";


@Injectable()
export class AdresProvider {

  constants: Constants;

  constructor(
    public http: HttpClient,
    private api: ApiProvider,
    private adresDao: AdresDao,
    private logger: LoggerProvider
  ) {

    this.constants = new Constants();
    console.log('Hello AdresProvider Provider');
  }

  async downloadSehirData(): Promise<any> {
    let url = this.api.getSehirIlceUrl(this.constants.DATA_TYPE.SEHIR_TNM);
    let header = this.api.getHeader();
    let apiData = await this.http.get(url, {headers: header}).toPromise();
    this.fillSehirList(apiData);
    this.logger.dir(apiData);

  }

  downloadIlceData(): Promise<any> {
    let url = this.api.getSehirIlceUrl(this.constants.DATA_TYPE.ILCE_TNM);
    let header = this.api.getHeader();
    return this.http.get(url, {headers: header}).toPromise();
  }

  downloadMahalleData(first: number): Promise<any> {
    let url = this.api.getMahalleTnmUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, {headers: header}).toPromise();
  }

  fillSehirList(item: any): Sehir[] {
    let sehirList: Sehir[] = new Array();
    let list = item.message.data;
    let versiyon = item.message.versiyon;
    list.forEach(row => {
      let sehir = new Sehir();
      sehir.sehirAdi = row.sehirAdi;
      sehir.sehirKodu = row.sehirKodu;
      sehirList.push(sehir);
    });
    return sehirList;
  }
}
