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

  execute(query: string, params: any[]): Promise<any> {
    console.log('query' + query);
    let response: any;
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

  insertList(list: any[], query: string, params: string) {
    console.log('query' + query);
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.DB.transaction().then(db => {
        db.transaction(function (tx) {
          for (let i = 0; i < list.length; i++) {
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


  update() {

  }

  delete() {

  }

  prepareExactQuery(item: Object): any[] {
    let query = [];
    for (let key in item) {
      let value = item[key];
      if (typeof value != undefined && value != null && value != "" && typeof value != "function" && typeof value != "object") {
        query.push(key + "= '" + value + "'");
      }
    }
    return query;
  }

  prepareLikeQuery(item: Object): any[] {
    let query = [];
    for (let key in item) {
      let value = item[key];
      if (typeof value != undefined && value != null && value != "" && typeof value != "function" && typeof value != "object" && key != "tip") {
        value = value.split('').join('%');
        value = "%" + value + "%";
        query.push(key + " LIKE '" + value + "'");
      }
    }
    return query;
  }

  getList(tableNameOrQuery: string, orderBy: string, item: any, type: string, first: number, pageSize: number, isQueryReady: boolean): Promise<any> {
    let data: any = { res: {}, length: 0 };
    let query = "";
    let searchQuery = [];
    let AndOr = type == "EXACT" ? " AND " : " OR ";
    if (!isQueryReady) {
      query = "Select * FROM " + tableNameOrQuery;
      if (type == "EXACT")
        searchQuery = this.prepareExactQuery(item);

      else
        searchQuery = this.prepareLikeQuery(item);
    } else {
      query = tableNameOrQuery;
    }

    if (searchQuery.length > 0) {
      query += " WHERE (";
      query += searchQuery.join(AndOr);
      query += ")"
    }

    let listLengthQuery = query;
    query += " ORDER BY " + orderBy + " LIMIT " + first + ", " + pageSize;

    return new Promise((resolve, reject) => {
      this.execute(query, []).then(res => {
        data.res = res;
        this.execute(listLengthQuery.replace("*", "count(*)"), []).then(res2 => {
          data.listLength = res2.rows.item(0)["count(*)"];
          resolve(data);
        });
      });
    })

  }
}

