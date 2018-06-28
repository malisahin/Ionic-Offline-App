/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Injectable} from '@angular/core';
import {BaseDao} from '../base-dao/base-dao';
import {Fiyat} from '../../entities/fiyat';
import {DatabaseProvider} from '../database/database';
import {UtilProvider} from '../util/util';
import {Constants} from '../../entities/Constants';

@Injectable()
export class FiyatDao {
  INSERT_QUERY = "INSERT OR REPLACE INTO OFF_FIYAT (mamKod,iscMlz,iscMlzKod,fiyat,gdfiyat,versiyon) VALUES (?,?,?,?,?,?)";
  UPDATE_QUERY = "UPDATE OFF_FIYAT SET fiyat = ?,gdfiyat=?, versiyon=? WHERE mamKod=? AND iscMlz = ? and iscMlzKod = ?";
  SELECT_QUERY = "SELECT * FROM OFF_FIYAT WHERE mamKod = ? and iscMlzKod = ?";

  constructor(private baseDao: BaseDao,
              private dbProvider: DatabaseProvider,
              private util: UtilProvider) {
  }

  insertOne(item: Fiyat): Promise<any> {
    let params = [item.mamKod, item.iscMlz, item.iscMlzKod, item.fiyat, item.gdFiyat, item.versiyon];
    return this.baseDao.execute(this.INSERT_QUERY, params);
  }

  insertList(list: Fiyat[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_FIYAT (mamKod,iscMlz,iscMlzKod,fiyat,gdfiyat,versiyon) VALUES (?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.mamKod, item.iscMlz, item.iscMlzKod, item.fiyat, item.gdFiyat, item.versiyon];
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

  async findFiyat(item: Fiyat) {
    let query = this.prepareSearchQuery(item, Constants.SEARCH_TYPE.EXACT);
    return this.baseDao.execute(query, []);
  }

  prepareSearchQuery(item: Fiyat, searchType: string): string {
    let query = "SELECT * FROM OFF_FIYAT WHERE 1=1 ";
    let whereQuery = [];

    if (this.util.isNotEmpty(item.fiyat))
      whereQuery.push(this.util.prepareWhereQuery(searchType, "fiyat", item.fiyat.toString()));

    if (this.util.isNotEmpty(item.gdFiyat))
      whereQuery.push(this.util.prepareWhereQuery(searchType, "gdFiyat", item.gdFiyat.toString()));

    if (this.util.isNotEmpty(item.iscMlz))
      whereQuery.push(this.util.prepareWhereQuery(searchType, "iscMlz", item.iscMlz));

    if (this.util.isNotEmpty(item.iscMlzKod))
      whereQuery.push(this.util.prepareWhereQuery(searchType, "iscMlzKod", item.iscMlzKod));

    if (this.util.isNotEmpty(item.mamKod))
      whereQuery.push(this.util.prepareWhereQuery(searchType, "mamKod", item.mamKod));

    return this.util.prepareQuery(query, whereQuery, searchType);
  }

  update(): Promise<any> {
    return null;

  }

  deleteAllByTip(tip: string): Promise<any> {

    let query = " DELETE FROM OFF_FIYAT WHERE 1=1 ";

    if (tip == Constants.DATA_TYPE.ISCILIK_FIYAT) {
      query += " AND iscMlz ='ISC'";
    } else if (tip == Constants.DATA_TYPE.MALZEME_FIYAT) {
      query += " AND iscMlz ='MLZ'"
    }
    this.baseDao.resetVersion(tip);
    return this.baseDao.execute(query, []);

  }
}
