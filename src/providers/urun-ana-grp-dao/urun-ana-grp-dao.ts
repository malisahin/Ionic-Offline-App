/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DatabaseProvider} from '../database/database';
import {Observable} from 'rxjs/Observable';
import {UrunAnaGrup} from '../../entities/urunAnaGrup';


@Injectable()
export class UrunAnaGrpDao {
  item = new UrunAnaGrup();

  constructor(private SQL: DatabaseProvider) {
    console.log('Hello UrunAnaGrpDaoProvider Provider');
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
    return this.SQL.db.executeSql(query, params).then(res => {
      console.log("Insert Urun Ana Grp success ");
      return res.rows();
    }).catch(err => {
      console.log("Insert Urun Ana Grp Hata " + err);
      return err;
    });

  }


  /** tip: 'cozum'
   *  kod:
   *  adi:
   *  tip: liste
   *  mamAnagrp
   *  adi
   *  durum
   *  tip: basvuru
   *   mamAnaGrp
   *  adi
   *
   *    cozumListe: [{
        kod: string;
        ad: string;
    }];
   versiyon: string;
   liste: [{
        mamAnaGrup: string;
        Adi: string;
        durum: string;
    }];
   basvuruListe: [{
        basvuruNeden: string,
        mamAnagrp: string,
        ad: string,
        durum: string;
    }];

   */


}
