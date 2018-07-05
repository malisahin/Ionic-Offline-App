import {Injectable} from '@angular/core';
import {DatabaseProvider} from '../database/database';
import {BaseDao} from '../base-dao/base-dao';
import {UrunAnaGrup} from '../../entities/urunAnaGrup';
import {Constants} from '../../entities/Constants';
import {UtilProvider} from '../util/util';
import {LoggerProvider} from "../logger/logger";

@Injectable()
export class UrunAnaGrupDao {

  constructor(private dbProvider: DatabaseProvider, private util: UtilProvider,
              private logger: LoggerProvider,
              private baseDao: BaseDao) {
    this.logger.log("Urun Ana Grup Constractor");
  }

  insertOne(item: UrunAnaGrup): Promise<any> {
    let query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden) VALUES (?,?,?,?,?,?)';
    let params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.neden];
    return this.baseDao.execute(query, params);
  }

  getPage(item: UrunAnaGrup, searchType: string, first: number, pageSize: number): Promise<any> {
    let query = this.prepareQuery(item, searchType);
    return this.baseDao.getList(query, "mamAnaGrp", item, searchType, first, pageSize, true);
  }

  getList(item: UrunAnaGrup, searchType: string): Promise<any> {
    let query = this.prepareQuery(item, searchType);
    return this.baseDao.execute(query, []);
  }

  async insertList(list: UrunAnaGrup[]) {
    let insertedItems = 0;
    await this.deleteAll();
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden) VALUES (?,?,?,?,?,?)';
          for (let item of list) {
            let params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.neden];
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

  prepareQuery(item: UrunAnaGrup, searchType: string): string {
    let query = "SELECT * FROM OFF_MAM_ANAGRP_TNM WHERE tip = '" + item.tip + "'";

    let whereQuery = [];
    if (this.util.isNotEmpty(item.ad)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'ad', item.ad));
    }
    if (this.util.isNotEmpty(item.neden)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'neden', item.neden));
    }
    if (this.util.isNotEmpty(item.mamAnaGrp)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'mamAnaGrp', item.mamAnaGrp));
    }
    if (this.util.isNotEmpty(item.kod)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'kod', item.kod));
    }
    if (this.util.isNotEmpty(item.durum)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'durum', item.durum));
    }

    console.warn("Ürün Ana Grup Sorgu " + query);
    return this.util.prepareQuery(query, whereQuery, searchType);
  }

  deleteAll(): Promise<any> {
    let query = "DELETE FROM OFF_MAM_ANAGRP_TNM ";
    return this.baseDao.execute(query, []);
  }

}
