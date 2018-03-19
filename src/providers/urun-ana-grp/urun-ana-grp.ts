/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import { HTTP } from "@ionic-native/http";
import { Injectable } from "@angular/core";
import { ApiProvider } from "../api/api";
import { UrunAnaGrup } from "../../entities/urunAnaGrup";
import { DatabaseProvider } from "../database/database";


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: HTTP, private api: ApiProvider, private DB: DatabaseProvider) {
    console.log('Hello UrunAnaGrpProvider Provider');
  }

  downloadUrunAnaGrup(versiyon): Promise<any> {
    let url = this.api.urunAnagrupDownloadUrl(versiyon);
    this.http = this.api.getHeader(this.http);
    return this.http.get(url, {}, {}).then(
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
