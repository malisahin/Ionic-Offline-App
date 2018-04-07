/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ApiProvider } from "../api/api";
import { UrunAnaGrup } from "../../entities/urunAnaGrup";
import { DatabaseProvider } from "../database/database";
import { Observable } from 'rxjs/Observable';
import { BaseDao } from '../base-dao/base-dao';


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private DB: DatabaseProvider, private baseDao: BaseDao) {
    console.log('Hello UrunAnaGrpProvider Provider');
  }

  downloadUrunAnaGrup(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDataFromApi().toPromise().then(item => {
        let anaGrp = new UrunAnaGrup();
        anaGrp.fillUrunAnaGrup(item).then(anaGrpList => {
          this.insertMamAnagrpList(anaGrpList).then(res => {
            resolve("success");
          });
        });
      });
    });
  }

  getDataFromApi(): Observable<any> {
    let url = this.api.urunAnagrupDownloadUrl();
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }


  insertMamAnagrpList(list: UrunAnaGrup[]): Promise<any> {
    let size = list.length;
    let insertedListSize = 0;
    let array: Promise<any>[] = new Array();
    list.forEach(function (item) {
      array.push(this.insertOne(item));
    });

    return Promise.all(array).then(res => {
      console.log("Insert Mam Ana Grup List" + res);
    });
  }

  insertOne(item: UrunAnaGrup): Promise<any> {
    let query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,adi,durum,kod, neden) VALUES (?,?,?,?,?,?)';
    let params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.basvuruNeden];
    return this.baseDao.execute(query, params);
  }

}
