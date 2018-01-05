/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Injectable } from '@angular/core';
import { BaseDao } from '../base-dao/base-dao';
import { Observable } from 'rxjs/Observable';
import { Fiyat } from '../../entities/fiyat';

@Injectable()
export class FiyatDao {
  INSERT_QUERY = "INSERT INTO OFF_FIYAT (mamKod,iscMlz,iscMlzKod,fiyat,gdfiyat,versiyon) VALUES (?,?,?,?,?,?)";
  UPDATE_QUERY = "UPDATE OFF_FIYAT SET fiyat = ?,gdfiyat=?, versiyon=? WHERE mamKod=? AND iscMlz = ? and iscMlzKod = ?";
  SELECT_QUERY = "SELECT * FROM OFF_FIYAT WHERE mamKod = ? and iscMlzKod = ?";
  constructor(private baseDao: BaseDao) {
    console.log('Hello FiyatDaoProvider Provider');
  }

  insertOne(item: Fiyat): Promise<any> {
    let params = [item.mamKod, item.iscMlz, item.iscMlzKod, item.fiyat, item.gdFiyat, item.versiyon];
    return this.baseDao.insertOne(this.INSERT_QUERY, params);
  }


  insertList(list: Fiyat[]): Promise<any> {
    for (let item of list) {
      this.insertOne(item);
    }
    return null;
  }

  update(): Promise<any> {
    return null;

  }

}
