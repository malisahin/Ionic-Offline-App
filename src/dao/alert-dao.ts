import { Injectable } from "@angular/core";
import { SQLite } from "@ionic-native/sqlite";



@Injectable()
export class AlertDao {

    constructor() {
        let db = new SQLite();
    }
}