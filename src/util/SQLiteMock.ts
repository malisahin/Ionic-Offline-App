/**
 *  @author: mali.sahin on 05.03.2018
 */

import { Injectable } from "@angular/core";
import {SQLiteDatabaseConfig, SQLiteObject} from "@ionic-native/sqlite";



@Injectable()
export class SQLiteMock {

  public  create(config: SQLiteDatabaseConfig): Promise<SQLiteObject>{
    return new Promise((resolve,reject) => {
      resolve(new SQLiteObject(new Object()))
    })
  }
}
