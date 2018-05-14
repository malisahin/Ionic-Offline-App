import {Injectable} from '@angular/core';
import {BaseDao} from '../base-dao/base-dao';
import {Urun} from '../../entities/urun';
import {Constants} from '../../entities/Constants';
import {DatabaseProvider} from '../database/database';
import {UtilProvider} from "../util/util";

@Injectable()
export class UrunDao {

  constant: Constants;

  constructor(private baseDao: BaseDao,
              private dbProvider: DatabaseProvider,
              private  util: UtilProvider) {
    console.log('Hello UrunDaoProvider Provider');
    this.constant = new Constants();
  }

  insertOne(item: Urun): Promise<any> {
    let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_TNM (mamAnagrp,mamKod, mamAdi,seriMetod,surec,durum) VALUES (?,?,?,?,?,?)";
    let params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
    return this.baseDao.execute(INSERT_QUERY, params);
  }

  getUrunAndUrunAnaGrup(urunKodu: string): Promise<any> {
    let query = 'Select mam.*,  anaGrp.ad as anaGrupAdi from OFF_MAM_ANAGRP_TNM anaGrp, OFF_MAM_TNM mam WHERE anaGrp.mamAnaGrp = mam.mamAnaGrp and anaGrp.tip=? and mam.mamKod =? ';
    let params = [this.constant.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE, urunKodu];
    return this.baseDao.execute(query, params);
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
    //let query = this.prepareSelectQuery(item);
    //return this.baseDao.execute(query, []);
  }

  prepareSelectQuery(item: Urun, searchType: string): string {
    let query = 'SELECT * FROM OFF_MAM_TNM WHERE 1=1';
    let AndOr = searchType == this.constant.SEARCH_TYPE.EXACT ? ' AND ' : ' OR ';
    let searchQuery = [];

    if (this.util.isNotEmpty(item.mamAnagrp))
      searchQuery.push(this.util.prepareWhereQuery(this.constant.SEARCH_TYPE.EXACT, 'mamAnagrp', item.mamAnagrp));

    if (this.util.isNotEmpty(item.mamKod))
      searchQuery.push(this.util.prepareWhereQuery(searchType, 'mamKod', item.mamKod));

    if (this.util.isNotEmpty(item.mamAdi))
      searchQuery.push(this.util.prepareWhereQuery(searchType, 'mamAdi', item.mamAdi));

    if (this.util.isNotEmpty(item.seriMetod))
      searchQuery.push(this.util.prepareWhereQuery(searchType, 'seriMetod', item.seriMetod));

    if (this.util.isNotEmpty(item.surec))
      searchQuery.push(this.util.prepareWhereQuery(searchType, 'surec', item.surec));

    if (this.util.isNotEmpty(item.durum))
      searchQuery.push(this.util.prepareWhereQuery(searchType, 'durum', item.durum));

    return this.util.prepareQuery(query, searchQuery, searchType);
  }

  getList(item: Urun, type: string, first: number, pageSize: number): Promise<any> {
    let query = this.prepareSelectQuery(item, type);
    return this.baseDao.getList(query, "mamKod", item, type, first, pageSize, true);
  }


}
