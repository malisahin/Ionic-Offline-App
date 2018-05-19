import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Mesaj} from '../../entities/mesajlar';
import {DatabaseProvider} from '../database/database';
import {UtilProvider} from "../util/util";
import {Constants} from "../../entities/Constants";
import {BaseDao} from "../base-dao/base-dao";


@Injectable()
export class MesajlarDao {

  constants: Constants;

  constructor(public http: HttpClient,
              private dbProvider: DatabaseProvider,
              private  util: UtilProvider,
              private  baseDao: BaseDao) {
    console.log('Hello MesajlarDaoProvider Provider');
    this.constants = new Constants();
  }

  insertList(list: Mesaj[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_ALERT (id, bitisTarihi, aciklama, gonderen, basTarihi, status, subject, type, valid) VALUES (?,?,?,?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.id, item.endTime, item.expl, item.gonderen, item.startTime, item.status, item.subject, item.type, item.valid];
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

  getList(mesaj: Mesaj): Promise<any> {
    let query = this.prepareSearchQery(mesaj);
    return this.baseDao.execute(query, []);
  }

  private prepareSearchQery(mesaj: Mesaj): string {
    let query = "SELECT * OFF_ALERT WHERE 1=1";

    if (this.util.isNotEmpty(mesaj.id)) {
      query += " AND id='" + mesaj.id + "' ";
    }

    if (this.util.isNotEmpty(mesaj.type)) {
      query += " AND type='" + mesaj.type + "' ";
    }

    query += " AND new Date(" + mesaj.startTime + ") < DATE('now')";

    query += " AND  DATE('now') < new Date(" + mesaj.endTime + ")";

    return query;
  }


}
