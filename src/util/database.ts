import { Injectable } from "@angular/core";
import { SQLite } from "@ionic-native/sqlite";



@Injectable()
export class Database {

    constructor(private db: SQLite) {
        
    }

    createDatabase() {
        this.db.create({
            name:'data.db',
            location: 'default'
        });
    }
}