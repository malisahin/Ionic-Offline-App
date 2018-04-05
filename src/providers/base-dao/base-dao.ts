/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Injectable } from "@angular/core";
import { DatabaseProvider } from "../database/database";
import { SQLiteObject } from "@ionic-native/sqlite";


@Injectable()
export class BaseDao {

  constructor(private SQL: DatabaseProvider) {
    console.log('Hello BaseDaoProvider Provider');
  }

  findOne() {

  }

  findAll(query: string, params: any[]) {

  }

  execute(query: string, params: any[]): Promise<any[]> {
    console.log('query' + query);
    //return this.SQL.transaction().then((db: SQLiteObject) => {
    /*  return this.SQL.db.executeSql(query, params).then(res => {
        console.log(res);
        return res.rows;
      }).catch(err => {
        console.log("Insert Urun Ana Grp Hata " + err);
        return err;
      });
      */
    //});
    return new Promise((resolve, reject) => {

    });
  }

  insertOne(query: string, params: any[]): Promise<any> {
    /*return this.SQL.db.executeSql(query, params).then(res => {
      return res.rows();
    }).catch(err => {
      console.log("Insert Urun Ana Grp Hata " + err);
      return err;
    });*/
    return new Promise((resolve, reject) => {

    });
  }

  insertList() {

  }

  update() {

  }

  delete() {

  }
}
