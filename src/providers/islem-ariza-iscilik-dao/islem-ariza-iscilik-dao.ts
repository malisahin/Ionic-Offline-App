import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { IslemArizaIscilik } from '../../entities/islem-ariza-iscilik';
import { UtilProvider } from '../util/util';
import { LoggerProvider } from '../logger/logger';
import { Pageable } from '../../entities/Pageable';
import { Page } from 'ionic-angular/navigation/nav-util';
import { BaseDao } from '../base-dao/base-dao';
import { Constants } from '../../entities/Constants';


@Injectable()
export class IslemArizaIscilikDao {

  constants: Constants;
  constructor(public dbProvider: DatabaseProvider,
    private util: UtilProvider,
    private logger: LoggerProvider,
    private baseDao: BaseDao
  ) {
    this.constants = new Constants();
    console.log('Hello IslemArizaIscilikDaoProvider Provider');
  }

  //tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum, PRIMARY KEY (mamAnaGrp,islemGrp,arizaGrp, iscKod))', []);


  insertList(list: IslemArizaIscilik[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum) VALUES (?,?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.mamAnaGrp, item.islGrp, item.islGrpAd, item.arzGrp, item.arzGrpAd, item.iscKod, item.durum];
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

  getPage(item: IslemArizaIscilik, searchType: string, pageAble: Pageable): Promise<any> {
    let query = this.prepareQuery(item, searchType);
    return this.baseDao.getList(query, "islemGrp, arizaGrp, iscKod", item, searchType, pageAble.first, pageAble.pageSize, true);
  }

  getIslemGrupPage(item: IslemArizaIscilik, searchText: string): Promise<any> {
    let query = "SELECT islemGrp,islemGrpAdi FROM OFF_ISC_ISLARZGRP_TNM WHERE mamAnaGrp = '" + item.mamAnaGrp + "' and durum='AKTIF' AND (";
    query += " islemGrp like '%" + searchText + "%'";
    query += " OR islemGrpAdi like '%" + searchText + "%'";
    query += ') GROUP BY islemGrp,islemGrpAdi';
    return this.baseDao.execute(query, []);
    //return this.baseDao.getList(query, "islemGrp", item, searchType, pageAble.first, pageAble.pageSize, true);
  }

  getArizaGrupPage(item: IslemArizaIscilik, searchText: string): Promise<any> {
    let query = "SELECT arizaGrp,arizaGrpAdi FROM OFF_ISC_ISLARZGRP_TNM " +
      "WHERE mamAnaGrp = '" + item.mamAnaGrp + "' and islemGrp = '" + item.islGrp + "' and durum='AKTIF' AND ( "
    query += " arizaGrp like '%" + searchText + "%'"
    query += " OR arizaGrpAdi like '%" + searchText + "%'"
    query += ') GROUP BY arizaGrp,arizaGrpAdi';
    return this.baseDao.execute(query, []);
    // return this.baseDao.getList(query, "arizaGrp", item, searchType, pageAble.first, pageAble.pageSize, true);
  }

  getPIYKoduPage(item: IslemArizaIscilik, mamKod: string, searchText: string): Promise<any> {
    let query = "SELECT t.*,i.iscAdi FROM OFF_ISC_ISLARZGRP_TNM t, OFF_MAM_TNM mam, OFF_MAM_ISC_TNM i WHERE t.mamAnaGrp = mam.mamAnaGrp" +
      " and mam.mamKod = i.mamKod and t.iscKod = i.iscKod and mam.mamKod =  '" + mamKod + "'";
    query += ' and islemGrp = "' + item.islGrp + '" ';

    query += ' and arizaGrp = "' + item.arzGrp + '" '

    query += " AND ( t.iscKod like '%" + searchText + "%' OR i.iscAdi like '%" + searchText + "%')"

    return this.baseDao.execute(query, []);

  }


  prepareQuery(item: IslemArizaIscilik, searchType: string): string {
    let query = "SELECT * FROM OFF_ISC_ISLARZGRP_TNM WHERE 1=1";
    let whereQuery = [];

    if (this.util.isNotEmpty(item.arzGrp)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'arzGrp', item.arzGrp));
    }

    if (this.util.isNotEmpty(item.arzGrpAd)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'arzGrpAd', item.arzGrpAd));
    }

    if (this.util.isNotEmpty(item.durum)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'durum', item.durum));
    }

    if (this.util.isNotEmpty(item.iscKod)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'iscKod', item.iscKod));
    }

    if (this.util.isNotEmpty(item.islGrp)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'islGrp', item.islGrp));
    }

    if (this.util.isNotEmpty(item.islGrpAd)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, 'islGrpAd', item.islGrpAd));
    }

    if (this.util.isNotEmpty(item.mamAnaGrp)) {
      whereQuery.push(this.util.prepareWhereQuery(this.constants.SEARCH_TYPE.EXACT, 'mamAnaGrp', item.mamAnaGrp));
    }

    return this.util.prepareQuery(query, whereQuery, searchType);


  }

}
