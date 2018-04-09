import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseDao } from '../base-dao/base-dao';
import { Urun } from '../../entities/urun';
import { Constants } from '../../entities/Constants';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class UrunDao {

  constant: Constants;
  constructor(private baseDao: BaseDao, private dbProvider: DatabaseProvider) {
    console.log('Hello UrunDaoProvider Provider');
    this.constant = new Constants();
  }

  insertOne(item: Urun): Promise<any> {
    let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_TNM (mamAnagrp,mamKod, mamAdi,seriMetod,surec,durum) VALUES (?,?,?,?,?,?)";
    let params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
    return this.baseDao.execute(INSERT_QUERY, params);
  }


  insertList(list: Urun[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_MAM_TNM (mamAnagrp,mamKod, mamAdi,seriMetod,surec,durum) VALUES (?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
            tx.executeSql(query, params, function (tx, res) {
              insertedItems += 1;
              if (list.length == insertedItems) {
                resolve(res);
              }
            }, function (err, mes) {
              console.error("Error" + mes.message + " Code: " + mes.code);
              reject(err);
            });
          }
        });
      });
    });
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

  getList(item: Urun, type: string, first: number, pageSize: number): Promise<any> {
    return this.baseDao.getList("OFF_MAM_TNM", "mamKod", item, type, first, pageSize);
  }
}
