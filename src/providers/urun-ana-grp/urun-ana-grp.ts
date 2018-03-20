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


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private DB: DatabaseProvider) {
    console.log('Hello UrunAnaGrpProvider Provider');
  }

  downloadUrunAnaGrup(versiyon): Observable<any> {
    let url = this.api.urunAnagrupDownloadUrl(versiyon);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header }).map(
      item => {
        let anaGrp = new UrunAnaGrup();
        return anaGrp.fillUrunAnaGrup(item).then(anaGrpList => {
          return this.insertMamAnagrpList(anaGrpList);
        });
      }
    );
  }


  insertMamAnagrpList(list: UrunAnaGrup[]): Promise<any> {
    let size = list.length;
    let insertedListSize = 0;
    for (var i = 0; i < list.length; i++) {
      this.insertMamAnaGrp(list[i]).then(res => {
        insertedListSize += 1;
      });
    }
    return new Promise(resolve => resolve("success"));
  }

  insertMamAnaGrp(item: UrunAnaGrup): Promise<any> {
    let query = 'INSERT INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,adi,durum,kod, neden) VALUES (?,?,?,?,?)';
    let params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.basvuruNeden];
    return this.DB.db.executeSql(query, params).then(res => {
      console.log("Insert Urun Ana Grp success ");
      return res.rows();
    }).catch(err => {
      console.log("Insert Urun Ana Grp Hata " + err);
      return err;
    });

  }

}
