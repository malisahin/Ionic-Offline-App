/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ApiProvider } from "../api/api";
import { Urun } from "../../entities/urun";
import { BaseDao } from "../base-dao/base-dao";


@Injectable()
export class UrunProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private baseDao: BaseDao) {
    console.log('Hello UrunProvider Provider');
  }

  downloadUrunler(versiyon: string, first: number): Promise<any> {
    let header = this.api.getHeader();
    return this.api.downloadUrunUrl(versiyon, first).then(url => {
      return this.http.get(url, { headers: header }).map(
        item => {
          let urun = new Urun();
          return urun.fillUrun(item).then(item => {
            this.insertList(item);
          });
        }
      );
    });

  }


  insertList(list: Urun[]): Promise<any> {
    for (var i = 0; i < list.length; i++) {
      this.insertOne(list[i]);
    }
    return new Promise(resolve => resolve("success"));
  }

  insertOne(item: Urun): Promise<any> {
    let INSERT_QUERY = "INSERT INTO OFF_MAM_TNM (mamAnagrp,mamKod, mamAdi,seriMetod,surec,durum) VALUES (?,?,?,?,?,?)";
    let params = [item.mamAdi, item.seriMetod, item.surec, item.durum, item.mamKod];
    return this.baseDao.execute(INSERT_QUERY, params);
  }

  update(item: Urun): Promise<any> {
    let UPDATE_QUERY = "UPDATE OFF_MAM_TNM SET mamAdi = ?,seriMetod =?,surec=?,durum=? WHERE mamKod=?";
    let params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
    return this.baseDao.execute(UPDATE_QUERY, params);
  }

  find(item: Urun) {
    let query = this.prepareSelectQuery(item);
    return this.baseDao.execute(query, []);
  }

  prepareSelectQuery(item: Urun): string {
    let query = 'SELECT * FROM OFF_MAM_TNM WHERE 1=1';

    if (item.mamAnagrp != null && item.mamAnagrp != "")
      query += ' AND mamAnagrp= ' + item.mamAnagrp;

    if (item.mamKod != null && item.mamKod != "")
      query += ' AND mamKod=' + item.mamKod;

    if (item.mamAdi != null && item.mamAdi != "")
      query += ' AND mamAdi=' + item.mamAdi;

    if (item.seriMetod != null && item.seriMetod != "")
      query += ' AND seriMetod=' + item.seriMetod;

    if (item.surec != null && item.surec != "")
      query += ' AND surec=' + item.surec;

    if (item.durum != null && item.durum != "")
      query += ' AND durum=' + item.durum;

    return query;
  }
}
