import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { BaseDao } from '../base-dao/base-dao';
import { UrunMalzeme } from '../../entities/urun-malzeme';


@Injectable()
export class UrunMalzemeDao {

  constructor(public http: HttpClient,
    private dbProvider: DatabaseProvider,
    private baseDao: BaseDao) {
    console.log('Hello UrunMalzemeDaoProvider Provider');
  }

  insertOne(item: UrunMalzeme): Promise<any> {
    let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum, kdvOran) VALUES (?,?,?,?,?)";
    let params = [item.mamKod, item.mlzKod, item.mlzAdi, item.durum, item.kdvOran];
    return this.baseDao.execute(INSERT_QUERY, params);
  }


  deleteAll(): Promise<any> {
    let query = "DELETE FROM OFF_MAM_MLZ_TNM ";
    return this.baseDao.execute(query, []);
  }

  insertList(list: UrunMalzeme[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum, kdvOran) VALUES (?,?,?,?,?)";
          for (let item of list) {
            let params = [item.mamKod, item.mlzKod, item.mlzAdi, item.durum, item.kdvOran];
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
}
