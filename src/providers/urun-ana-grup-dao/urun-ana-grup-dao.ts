import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { BaseDao } from '../base-dao/base-dao';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { resolveRendererType2 } from '@angular/core/src/view/util';

@Injectable()
export class UrunAnaGrupDao {

  constructor(
    private DB: DatabaseProvider,
    private baseDao: BaseDao) {
    console.log('Hello UrunAnaGrupDaoProvider Provider');
  }

  insertMamAnagrpList(list: UrunAnaGrup[]): Promise<any> {
    let size = list.length;
    let insertedListSize = 0;
    let array: Promise<any>[] = new Array();
    list.forEach(item => {
      array.push(this.insertOne(item));
    });

    return Promise.all(array).then(res => {
      console.log("Insert Mam Ana Grup List" + res);
    });
  }

  insertOne(item: UrunAnaGrup): Promise<any> {
    let query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden) VALUES (?,?,?,?,?,?)';
    let params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.basvuruNeden];
    return this.baseDao.execute(query, params);
  }

  getList(item: UrunAnaGrup, type: string, first: number, pageSize: number): Promise<any> {
    return this.baseDao.getList("OFF_MAM_ANAGRP_TNM", "mamAnaGrp", item, type, first, pageSize);
  }

}
