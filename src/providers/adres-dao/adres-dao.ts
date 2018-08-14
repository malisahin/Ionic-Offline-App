import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Mahalle } from '../../entities/mahalle';
import { BaseDao } from '../base-dao/base-dao';
import { Sehir } from '../../entities/Sehir';
import { Ilce } from '../../entities/Ilce';
import { Constants } from "../../entities/Constants";
import { UtilProvider } from "../util/util";


@Injectable()
export class AdresDao {

  constructor(public http: HttpClient,
    private dbProvider: DatabaseProvider,
    private util: UtilProvider,
    private baseDao: BaseDao) {

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
    let params = [sehirKodu];
    return this.baseDao.execute(query, params);
  }

  getSehirList(): Promise<any> {
    let query = "SELECT sehirKodu,sehirAdi FROM SEHIR_TNM GROUP BY sehirKodu, sehirAdi";
    return this.baseDao.execute(query, []);
  }

  getMahalleList(ilceKodu: string): Promise<any> {
    let query = "SELECT * FROM MAHALLE_TNM  WHERE ilceKodu = ? ";
    let params = [ilceKodu];
    return this.baseDao.execute(query, params);
  }

  getIlce(ilce: Ilce): Promise<any> {
    let query = this.prepareIlceQuery(ilce);
    return this.baseDao.execute(query, []);
  }

  prepareIlceQuery(ilce: Ilce): string {
    let searchType = Constants.SEARCH_TYPE.EXACT;
    let query = "SELECT * FROM ILCE_TNM WHERE 1=1";

    let whereQuery = [];

    if (this.util.isNotEmpty(ilce.ilceAdi)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'ilceAdi', ilce.ilceAdi));
    }

    if (this.util.isNotEmpty(ilce.sehirKodu)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'sehirKodu', ilce.sehirKodu));
    }

    if (this.util.isNotEmpty(ilce.ilceKodu)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'ilceKodu', ilce.ilceKodu));
    }

    return this.util.prepareQuery(query, whereQuery, searchType);
  }

}

