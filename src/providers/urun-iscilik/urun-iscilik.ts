/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { Injectable } from "@angular/core";
import { ApiProvider } from "../api/api";
import "rxjs/add/operator/map";
import { UrunIscilik } from "../../entities/urun-iscilik";
import { BaseDao } from "../base-dao/base-dao";
import { VersiyonProvider } from "../versiyon/versiyon";
import { Observable } from 'rxjs/Observable';
import { TokenProvider } from '../token/token';
import { DatabaseProvider } from '../database/database';
import { Constants } from '../../entities/Constants';


@Injectable()
export class UrunIscilikProvider {

  constants: Constants;
  INSERT_QUERY: string = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
  constructor(public http: HttpClient,
    private api: ApiProvider,
    private baseDao: BaseDao,
    private DbProvider: DatabaseProvider,
    private tokenProvider: TokenProvider,
    private versiyonProvider: VersiyonProvider) {
    console.log('Hello UrunIscilikProvider Provider');
    this.constants = new Constants();
  }


  downloadUrunIscilik(first: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tokenProvider.getToken("", "").toPromise().then(res => {
        this.getDataFromApi(first).toPromise().then(item => {
          let urunIscilik = new UrunIscilik();
          urunIscilik.fillUrunIscilik(item).then(list => {
            this.insertList(list).then(count => {
              console.log(count);
              resolve(this.constants.STATUS.SUCCESS);
            });
          });
        });
      })
    });
  }

  getDataFromApi(first: number): Observable<any> {
    let url = this.api.urunIscilikDownloadUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }

  insertOne(item: UrunIscilik): Promise<any> {
    let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
    let params = [item.mamKod, item.iscKod, item.iscAdi, item.durum, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
    return this.baseDao.execute(INSERT_QUERY, params);
  }


  insertList(list: UrunIscilik[]): Promise<any> {
    let response: any;
    let insertedItems = 0;
    return new Promise((resolve, reject) => {
      this.DbProvider.transaction().then(db => {
        db.transaction(function (tx) {
          let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
          for (let item of list) {
            let params = [item.mamKod, item.iscKod, item.iscAdi, item.durum, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
            tx.executeSql(INSERT_QUERY, params, function (tx, res) {
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
}
