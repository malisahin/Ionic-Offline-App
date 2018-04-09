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

  insertList() {

  }

  update() {

  }

  delete() {

  }

  prepareExactQuery(item: Object): string {
    let query = "";
    for (let key in item) {
      let value = item[key];
      if (typeof value != undefined && value != null && value != "" && typeof value != "function" && typeof value != "object") {
        query += " AND " + key + "= '" + value + "'";
      }
    }
    return query;
  }

  prepareLikeQuery(item: Object): string {
    let query = "";
    for (let key in item) {
      let value = item[key];
      if (typeof value != undefined && value != null && value != "" && typeof value != "function" && typeof value != "object" && key != "tip") {
        value = value.split('').join('%');
        value = "%" + value + "%";
        query += "OR " + key + " LIKE '" + value + "'";
      }
    }
    return query;
  }

  getList(tableName: string, orderBy: string, item: any, type: string, first: number, pageSize: number): Promise<any> {
    let data: any = { res: {}, length: 0 };
    let query = "Select * FROM " + tableName + " WHERE  (1=1";
    if (type == "EXACT")
      query += this.prepareExactQuery(item);
    else
      query += this.prepareLikeQuery(item);

    query += ") ";

    let listLengthQuery = query;
    query += "ORDER BY " + orderBy + " LIMIT " + first + ", " + pageSize;
    query = query.replace("1=1OR", "");
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

