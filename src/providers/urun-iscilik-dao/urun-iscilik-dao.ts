import { Injectable } from '@angular/core';
import { UrunIscilik } from '../../entities/urun-iscilik';
import { DatabaseProvider } from '../database/database';
import { BaseDao } from '../base-dao/base-dao';


@Injectable()
export class UrunIscilikDao {

  constructor(private dbProvider: DatabaseProvider, private baseDao: BaseDao) {
    console.log('Hello UrunIscilikDaoProvider Provider');
  }

  insertList(list: UrunIscilik[]): Promise<any> {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.mamKod, item.iscKod, item.iscAdi, item.durum, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
            tx.executeSql(INSERT_QUERY, params, function (tx, res) {
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

  insertOne(item: UrunIscilik): Promise<any> {
    let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
    let params = [item.mamKod, item.iscKod, item.iscAdi, item.durum, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
    return this.baseDao.execute(INSERT_QUERY, params);
  }

  getList(item: UrunIscilik, type: string, first: number, pageSize: number): Promise<any> {
    return this.baseDao.getList("OFF_MAM_ISC_TNM", "iscKod", item, type, first, pageSize, false);
  }

}
