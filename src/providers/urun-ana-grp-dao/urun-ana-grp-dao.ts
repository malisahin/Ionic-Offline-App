/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Observable } from 'rxjs/Observable';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';



@Injectable()
export class UrunAnaGrpDao {
  item = new UrunAnaGrup();

  constructor(private SQL: DatabaseProvider) {
    console.log('Hello UrunAnaGrpDaoProvider Provider');
  }

  insertMamAnagrp(list: UrunAnaGrup[]): Observable<any> {

    let query = 'INSERT INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,adi,durum,kod, neden) VALUES (?,?,?,?,?)';
    this.SQL.db.executeSql(query, [this.item.tip, this.item.mamAnagrp, this.item.adi, this.item.durum, this.item.kod, this.item.neden]);

    return null;
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
