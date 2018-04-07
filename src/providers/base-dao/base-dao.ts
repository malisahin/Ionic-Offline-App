/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Injectable } from "@angular/core";
import { DatabaseProvider } from "../database/database";
import { SQLiteObject } from "@ionic-native/sqlite";


@Injectable()
export class BaseDao {

  constructor(private DB: DatabaseProvider) {
    console.log('Hello BaseDaoProvider Provider');
  }

  findOne() {

  }

  findAll(query: string, params: any[]) {

  }

  execute(query: string, params: any[]): Promise<any[]> {
    console.log('query' + query);
    return new Promise((resolve, reject) => {
      this.DB.transaction().then(db => {
        db.transaction(function (tx) {
          tx.executeSql(query, params, function (tx, res) {
            resolve(res);
          }, function (err, mes) {
            console.error("Error" + mes.message + " Code: " + mes.code);
            reject(err);
          });
        });
      });
    });
  }

  insertList() {

  }

  update() {

  }

  delete() {

  }
}
