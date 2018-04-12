import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesaj } from '../../entities/mesajlar';
import { DatabaseProvider } from '../database/database';


@Injectable()
export class MesajlarDao {

  constructor(public http: HttpClient, private dbProvider: DatabaseProvider) {
    console.log('Hello MesajlarDaoProvider Provider');
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

}
