/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Injectable } from '@angular/core';
import { BaseDao } from '../base-dao/base-dao';
import { Observable } from 'rxjs/Observable';
import { Fiyat } from '../../entities/fiyat';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class FiyatDao {
  INSERT_QUERY = "INSERT OR REPLACE INTO OFF_FIYAT (mamKod,iscMlz,iscMlzKod,fiyat,gdfiyat,versiyon) VALUES (?,?,?,?,?,?)";
  UPDATE_QUERY = "UPDATE OFF_FIYAT SET fiyat = ?,gdfiyat=?, versiyon=? WHERE mamKod=? AND iscMlz = ? and iscMlzKod = ?";
  SELECT_QUERY = "SELECT * FROM OFF_FIYAT WHERE mamKod = ? and iscMlzKod = ?";
  constructor(private baseDao: BaseDao, private dbProvider: DatabaseProvider) {
    console.log('Hello FiyatDaoProvider Provider');
  }

  insertOne(item: Fiyat): Promise<any> {
    let params = [item.mamKod, item.iscMlz, item.iscMlzKod, item.fiyat, item.gdFiyat, item.versiyon];
    return this.baseDao.execute(this.INSERT_QUERY, params);
  }

  insertList(list: Fiyat[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_FIYAT (mamKod,iscMlz,iscMlzKod,fiyat,gdfiyat,versiyon) VALUES (?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.mamKod, item.iscMlz, item.iscMlzKod, item.fiyat, item.gdFiyat, item.versiyon];
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

  update(): Promise<any> {
    return null;

  }

}
