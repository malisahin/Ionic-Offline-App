/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ApiProvider } from "../api/api";
import { Urun } from "../../entities/urun";
import { BaseDao } from "../base-dao/base-dao";
import { Observable } from 'rxjs/Observable';
import { UrunDao } from '../urun-dao/urun-dao';
import { Constants } from '../../entities/Constants';


@Injectable()
export class UrunProvider {

  constants = new Constants();
  constructor(public http: HttpClient,
    private api: ApiProvider,
    private urunDao: UrunDao) {

    console.log('Hello UrunProvider Provider');
  }

  downloadUrunler(first: number): Promise<any> {
    let header = this.api.getHeader();
    return this.getDataFromApi(first).toPromise().then(item => {
      let urun = new Urun();
      return urun.fillUrun(item).then(item => {
        this.urunDao.insertList(item)
      });
    });
  }

  getDataFromApi(first): Observable<any> {
    let header = this.api.getHeader();
    let url = this.api.downloadUrunUrl(first);
    return this.http.get(url, { headers: header });
  }
}
