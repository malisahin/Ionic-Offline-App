import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Mesaj} from '../../entities/mesajlar';
import {DatabaseProvider} from '../database/database';
import {UtilProvider} from "../util/util";
import {BaseDao} from "../base-dao/base-dao";
import {Pageable} from "../../entities/Pageable";
import {Constants} from "../../entities/Constants";


@Injectable()
export class MesajlarDao {
  constructor(public http: HttpClient,
              private dbProvider: DatabaseProvider,
              private  util: UtilProvider,
              private  baseDao: BaseDao) {

  }

  insertList(list: Mesaj[]) {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.dbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let query = "INSERT OR REPLACE INTO OFF_ALERT (id, bitisTarihi, aciklama, gonderen, basTarihi, status, subject, type, valid) VALUES (?,?,?,?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.id, item.bitisTarihi, item.aciklama, item.gonderen, item.basTarihi, item.status, item.subject, item.type, item.valid];
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

  loadDuyuruSayisi(): Promise<any> {
    return this.loadMesajSayisi("WARN");
  }

  loadUyariSayisi(): Promise<any> {
    return this.loadMesajSayisi("URGENT");
  }

  async loadMesajSayisi(type: string): Promise<any> {
    let mes = new Mesaj();
    mes.type = type;
    let result = await this.getList(mes, new Pageable());
    return new Promise<any>((resolve, reject) => {
      resolve(result.res.rows.length);
    });
  }

  getList(mesaj: Mesaj, pageable: Pageable): Promise<any> {
    let query = this.prepareSearchQery(mesaj);
    return this.baseDao.getList(query, "id", "", Constants.SEARCH_TYPE.EXACT, pageable.first, pageable.pageSize, true);
  }

  private prepareSearchQery(mesaj: Mesaj): string {
    let query = "SELECT * FROM OFF_ALERT WHERE 1=1";

    if (this.util.isNotEmpty(mesaj.id)) {
      query += " AND id=" + mesaj.id + " ";
    }

    if (this.util.isNotEmpty(mesaj.type)) {
      query += " AND type='" + mesaj.type + "' ";
    }
    return query;
  }


}
