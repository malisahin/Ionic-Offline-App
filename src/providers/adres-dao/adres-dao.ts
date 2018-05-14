import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Mahalle } from '../../entities/mahalle';
import { BaseDao } from '../base-dao/base-dao';
import { Sehir } from '../../entities/Sehir';
import { Ilce } from '../../entities/Ilce';
import { Constants } from '../../entities/Constants';


@Injectable()
export class AdresDao {

  constants: Constants;
  constructor(
    public http: HttpClient,
    private dbProvider: DatabaseProvider,
    private baseDao: BaseDao) {
    console.log('Hello AdresDaoProvider Provider');
    this.constants = new Constants();
  }

  insertSehirList(list: Sehir[]): Promise<any> {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO SEHIR_TNM(sehirKodu, sehirAdi) VALUES (?,?)";
          for (let item of list) {
            let params = [item.sehirKodu, item.sehirAdi];
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

  insertIlceList(list: Ilce[]): Promise<any> {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO ILCE_TNM(sehirKodu, ilceKodu, ilceAdi) VALUES(?,?,?)";
          for (let item of list) {
            let params = [item.sehirKodu, item.ilceKodu, item.ilceAdi];
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

  insertMahalleList(list: Mahalle[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO MAHALLE_TNM(sehirKodu, ilceKodu, mahalleAdi, mahalleKodu) VALUES(?,?,?,?)";
          for (let item of list) {
            let params = [item.sehirKodu, item.ilceKodu, item.mahalleAdi, item.mahalleKodu];
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


  getIlceList(sehirKodu: string): Promise<any> {
    let query = "SELECT * FROM ILCE_TNM WHERE sehirKodu = ?";
    let params = [sehirKodu]
    return this.baseDao.execute(query, params);
  }

  getSehirList(): Promise<any> {
    let query = "SELECT sehirKodu,sehirAdi FROM SEHIR_TNM GROUP BY sehirKodu, sehirAdi"
    return this.baseDao.execute(query, []);
  }

  getMahalleList(ilceKodu: string): Promise<any> {
    let query = "SELECT * FROM MAHALLE_TNM  WHERE ilceKodu = ? "
    let params = [ilceKodu];
    return this.baseDao.execute(query, params);
  }

}
