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


@Injectable()
export class UrunProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private baseDao: BaseDao) {
    console.log('Hello UrunProvider Provider');
  }

  downloadUrunler(first: number): Promise<any> {
    let header = this.api.getHeader();
    return this.getDataFromApi(first).toPromise().then(url => {
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

  getDataFromApi(first): Observable<any> {
    let header = this.api.getHeader();
    let url = this.api.downloadUrunUrl(first);
    return this.http.get(url, { headers: header });

  }


  insertList(list: Urun[]): Promise<any> {
    let array: Promise<any>[] = new Array();
    list.forEach(function (item) {
      array.push(this.insertOne(item));
    });
    return Promise.all(array).then(res => {
      console.log(res);
    });
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
