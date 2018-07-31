import {Injectable} from '@angular/core';
import {UtilProvider} from "../util/util";
import {Brans} from "../../entities/Brans";
import {BaseDao} from "../base-dao/base-dao";
import {LoggerProvider} from "../logger/logger";
import {DatabaseProvider} from "../database/database";
import {Constants} from "../../entities/Constants";


@Injectable()
export class BransDao {

  constructor(public dbProvider: DatabaseProvider,
              private util: UtilProvider,
              private logger: LoggerProvider,
              private baseDao: BaseDao) {
    console.log('Hello BransDao Provider');
  }

  insertList(list: Brans[]): Promise<any> {
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_BRANS_LIST (hizmetTipi, mamAnaGrp, exp) VALUES (?,?,?)";
          for (let item of list) {
            let params = [item.hizmetTipi, item.mamAnaGrp, item.exp];
            tx.executeSql(query, params, function (tx, res) {
              insertedItems += 1;
              if (list.length == insertedItems) {
                resolve(res);
              }
            }, function (err, mes) {
              this.logger.error("Error" + mes.message + " Code: " + mes.code);
              reject(err);
            });
          }
        });
      });
    });
  }

  getList(filter: Brans): Promise<any> {
    let searchType = Constants.SEARCH_TYPE.EXACT;
    let query = this.prepareListQuery(filter, searchType);
    return this.baseDao.getList(query, "hizmetTipi, mamAnaGrp", "", searchType, 0, 100, true);
  }

  private prepareListQuery(filter: Brans, searchType: string): string {
    let query = "SELECT * FROM OFF_BRANS_LIST WHERE 1=1 ";

    if (this.util.isNotEmpty(filter.hizmetTipi))
      query += " AND hizmetTipi = '" + filter.hizmetTipi + "'";

    if (this.util.isNotEmpty(filter.mamAnaGrp))
      query += " AND mamAnaGrp = '" + filter.mamAnaGrp + "'";

    return query;
  }

}
