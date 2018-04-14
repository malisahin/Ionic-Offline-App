/**
 * @author malisahin
 * @date 2018-04-14
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Constants } from '../../entities/Constants';
import { Observable } from 'rxjs/Observable';
import { AdresDao } from '../adres-dao/adres-dao';
import { LoggerProvider } from '../logger/logger';


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

  downloadSehirData(): Observable<any> {
    let url = this.api.getSehirIlceUrl(this.constants.DATA_TYPE.SEHIR_TNM);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });

  }

  downloadIlceData(): Observable<any> {
    let url = this.api.getSehirIlceUrl(this.constants.DATA_TYPE.ILCE_TNM);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }

  downloadMahalleData(first: number): Observable<any> {
    let url = this.api.getMahalleTnmUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header }).map(res => {

    });
  }
}
