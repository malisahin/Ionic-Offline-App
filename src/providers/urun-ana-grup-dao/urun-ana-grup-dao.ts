import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { BaseDao } from '../base-dao/base-dao';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { resolveRendererType2 } from '@angular/core/src/view/util';
import { Constants } from '../../entities/Constants';
import { UtilProvider } from '../util/util';

@Injectable()
export class UrunAnaGrupDao {

  constant: Constants;
  constructor(
    private dbProvider: DatabaseProvider, private util: UtilProvider,
    private baseDao: BaseDao) {
    console.log('Hello UrunAnaGrupDaoProvider Provider');
    this.constant = new Constants();
  }

  insertOne(item: UrunAnaGrup): Promise<any> {
    let query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden) VALUES (?,?,?,?,?,?)';
    let params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.basvuruNeden];
    return this.baseDao.execute(query, params);
  }

  getList(item: UrunAnaGrup, searchType: string, first: number, pageSize: number): Promise<any> {
    let query = this.prepareQuery(item, searchType);
    return this.baseDao.getList(query, "mamAnaGrp", item, searchType, first, pageSize, true);
  }

  insertList(list: UrunAnaGrup[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden) VALUES (?,?,?,?,?,?)';
          for (let item of list) {
            let params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.basvuruNeden];
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
    let query = "SELECT * from OFF_MAM_ANAGRP_TNM WHERE tip = '" + item.tip + "'";
    let AndOr = searchType == this.constant.SEARCH_TYPE.EXACT ? ' AND ' : ' OR ';

    let searchQuery = [];
    if (this.util.isNotEmpty(item.ad)) {
      searchQuery.push(this.util.prepareQuery(searchType, 'ad', item.ad));
    }
    if (this.util.isNotEmpty(item.basvuruNeden)) {
      searchQuery.push(this.util.prepareQuery(searchType, 'basvuruNeden', item.basvuruNeden));
    }
    if (this.util.isNotEmpty(item.mamAnaGrp)) {
      searchQuery.push(this.util.prepareQuery(searchType, 'mamAnaGrp', item.mamAnaGrp));
    }
    if (this.util.isNotEmpty(item.kod)) {
      searchQuery.push(this.util.prepareQuery(searchType, 'kod', item.kod));
    }
    if (this.util.isNotEmpty(item.durum)) {
      searchQuery.push(this.util.prepareQuery(searchType, 'durum', item.durum));
    }

    //return key + " LIKE '%" + value.split('').join('%') + "%'";
    if (searchQuery.length > 0) {
      query += " AND (";
      query += searchQuery.join(AndOr);
      query += ")"
    }
    console.warn("Ürün Ana Grup Sorgu " + query);
    return query;
  }

}
