/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Injectable } from '@angular/core';
import { BaseDao } from '../base-dao/base-dao';
import { Urun } from '../../entities/urun';


@Injectable()
export class UrunDao {

  INSERT_QUERY = "INSERT INTO OFF_MAM_TNM (mamAnagrp,mamKod, mamAdi,seriMetod,surec,durum) VALUES (?,?,?,?,?,?)";
  UPDATE_QUERY = "UPDATE OFF_MAM_TNM SET mamAdi = ?,seriMetod =?,surec=?,durum=? WHERE mamKod=?";
  constructor(private baseDao: BaseDao) {
    console.log('Hello UrunDaoProvider Provider');
  }


  insertOne(item: Urun): Promise<any> {
    let params = [item.mamAdi, item.seriMetod, item.surec, item.durum, item.mamKod]
    return this.baseDao.execute(this.INSERT_QUERY, params);
  }

  update(item: Urun): Promise<any> {
    let params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
    return this.baseDao.execute(this.UPDATE_QUERY, params);
  }

  find(item: Urun) {
    let query = this.prepareSelectQuery(item);
    return this.baseDao.execute(query, []);
  }

  prepareSelectQuery(item: Urun): string {
    let query = 'SELECT * FROM OFF_MAM_TNM WHERE 1=1';

    if (item.mamAnagrp != null && item.mamAnagrp != "")
      query += ' AND mamAnagrp= ' + item.mamAnagrp;

    if (item.mamKod != null && item.mamKod != "")
      query += ' AND mamKod=' + item.mamKod;

    if (item.mamAdi != null && item.mamAdi != "")
      query += ' AND mamAdi=' + item.mamAdi;

    if (item.seriMetod != null && item.seriMetod != "")
      query += ' AND seriMetod=' + item.seriMetod;

    if (item.surec != null && item.surec != "")
      query += ' AND surec=' + item.surec;

    if (item.durum != null && item.durum != "")
      query += ' AND durum=' + item.durum;

    return query;
  }
}
