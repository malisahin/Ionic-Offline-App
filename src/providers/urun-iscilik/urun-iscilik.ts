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


@Injectable()
export class UrunIscilikProvider {
  constructor(public http: HttpClient,
    private api: ApiProvider,
    private baseDao: BaseDao,
    private versiyonProvider: VersiyonProvider) {
    console.log('Hello UrunIscilikProvider Provider');
  }


  downloadUrunIscilik(first: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDataFromApi(first).toPromise().then(item => {
        let urunIscilik = new UrunIscilik();
        urunIscilik.fillUrunIscilik(item).then(list => {
          this.insertList(list).then(count => {
            console.log(count);
            resolve("success");
          });
        });
      });
    });
  }

  getDataFromApi(first: number): Observable<any> {
    let url = this.api.urunIscilikDownloadUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }

  insertList(list: UrunIscilik[]): Promise<any> {
    let array: Promise<any>[] = new Array();
    for (let i = 0; i < list.length; i++) {
      array.push(this.insertOne(list[i]));
    }
    return Promise.all(array).then(res => {
      console.log(res);
    });
  }

  insertOne(item: UrunIscilik): Promise<any> {
    let INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
    let params = [item.mamKod, item.iscKod, item.iscAdi, item.durum, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
    return this.baseDao.execute(INSERT_QUERY, params);
  }
}
