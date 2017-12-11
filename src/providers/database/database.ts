import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular/platform/platform';
import { StatusBar } from '@ionic-native/status-bar';

@Injectable()
export class DatabaseProvider {



  constructor(public http: HttpClient, private platform: Platform, private sqlite: SQLite) {

  }

  createDatabase() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'SOS',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('create table danceMoves(name VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
        .catch(e => console.log(e));

    });
  }

  initialtables(db: SQLiteObject) {
    db.executeSql('', {})
      .then()
      .then()
      .then()
  }



}
