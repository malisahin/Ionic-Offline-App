import { HTTP } from '@ionic-native/HTTP';
import { Injectable } from '@angular/core';
import { Versiyon } from '../../entities/Versiyon';
import { BaseDao } from '../base-dao/base-dao';
import { ETable } from '../../entities/enums/ETable';


@Injectable()
export class VersiyonProvider {

  constructor(public http: HTTP, private baseDao: BaseDao) {
    console.log('Hello VersiyonProvider Provider');
  }

  find(tableName: string): Promise<Versiyon[]> {
    let query = 'SELECT * FROM OFF_VERSIYON_TAKIP WHERE 1=1';
    if (tableName != '') {
      query += ' and tablo_adi = "' + tableName + '"';
    }
    return this.baseDao.execute(query, []);
  }



}
