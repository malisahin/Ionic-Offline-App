/*
 Implemented with the help of https://www.techiediaries.com/mocking-native-sqlite-plugin/
 */

import {SQLiteDatabaseConfig} from "@ionic-native/sqlite";

//SQL file is loaded via script tag in index.html --> <script src="assets/sql/sql.js"></script>
declare var SQL;

export class SQLiteObject {
  _objectInstance: any;

  constructor(_objectInstance: any) {
    this._objectInstance = _objectInstance;
  };

  executeSql(statement: string, params: any): Promise<any> {

    return new Promise((resolve, reject)=> {
      try {
        console.log(statement)
        var st = this._objectInstance.prepare(statement, params);
        var rows: Array<any> = [];
        while (st.step()) {
          var row = st.getAsObject();
          rows.push(row);
        }
        var payload = {
          rows: {
            item: function (i) {
              return rows[i];
            },
            length: rows.length
          },
          rowsAffected: this._objectInstance.getRowsModified() || 0,
          insertId: this._objectInstance.insertId || void 0
        };
        //save database after each sql query

        var arr: ArrayBuffer = this._objectInstance.export();
        localStorage.setItem("database", String(arr));
        resolve(payload);
      } catch (e) {
        reject(e);
      }
    });
  };

  sqlBatch(statements: string[], params: any): Promise<any> {
    return new Promise((resolve, reject)=> {
      try {
        var rows: Array<any> = [];
        for (let statement of statements) {
          console.log(statement)
          var st = this._objectInstance.prepare(statement, params);
          while (st.step()) {
            var row = st.getAsObject();
            rows.push(row);
          }
        }
        var payload = {
          rows: {
            item: function (i) {
              return rows[i];
            },
            length: rows.length
          },
          rowsAffected: this._objectInstance.getRowsModified(),
          insertId: this._objectInstance.insertId || void 0
        };
        //save database after each sql query

        var arr: ArrayBuffer = this._objectInstance.export();
        localStorage.setItem("database", String(arr));
        resolve(payload);
      } catch (e) {
        reject(e);
      }
    });
  };
}

/*
 Implemented using edited code from actual cordova plugin
 */
export class SQLitePorterMock {
  /**
   * Trims leading and trailing whitespace from a string
   * @param {string} str - untrimmed string
   * @returns {string} trimmed string
   */


/*
  trimWhitespace(str) {
    return str.replace(/^\s+/, "").replace(/\s+$/, "");
  }
*/

  /*importSqlToDb(db, sql, opts = {}) {
    try {
      const statementRegEx = /(?!\s|;|$)(?:[^;"']*(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*')?)*!/g;
      var statements = sql
        .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm, "") // strip out comments
        .match(statementRegEx);

      if (statements === null || (Array.isArray && !Array.isArray(statements))) statements = [];

      // Strip empty statements
      for (var i = 0; i < statements.length; i++) {
        if (!statements[i]) {
          delete statements[i];
        }
      }
      return db.sqlBatch(statements)
    } catch (e) {
      console.error(e.message);
    }
  }*/
}

export class SQLiteMock {

  public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
    var db;
    var storeddb = localStorage.getItem("database");

    if (storeddb) {
      var arr = storeddb.split(',');
      db = new SQL.Database(arr);
    }
    else {
      db = new SQL.Database();
    }

    return new Promise((resolve, reject)=> {
      resolve(new SQLiteObject(db));
    });
  }
}
