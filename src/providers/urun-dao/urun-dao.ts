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



}
