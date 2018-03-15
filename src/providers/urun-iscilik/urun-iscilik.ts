/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {HTTP} from "@ionic-native/http";
import {NativeStorage} from '@ionic-native/native-storage';
import {Injectable} from "@angular/core";
import {ApiProvider} from "../api/api";
import "rxjs/add/operator/map";
import {UrunIscilik} from "../../entities/urun-iscilik";
import {BaseDao} from "../base-dao/base-dao";
import {VersiyonProvider} from "../versiyon/versiyon";


@Injectable()
export class UrunIscilikProvider {
  constructor(public http: HTTP,
              private api: ApiProvider,
              private baseDao: BaseDao,
              private versiyonProvider: VersiyonProvider) {
    console.log('Hello UrunIscilikProvider Provider');
  }


  downloadUrunIscilik(first: number): Promise<any> {
    return this.getDataFromApi(first).then(item => {
      let urunIscilik = new UrunIscilik();
      return urunIscilik.fillUrunIscilik(item).then(list => {
        return this.insertList(list).then(count => {
          return new Promise(resolve => resolve("success"));
        });
      });
    });
  }

  getDataFromApi(first: number): Promise<any> {
    let versiyon = this.versiyonProvider.findVersiyonByTable().SER_MAM_ISC_TNM;
    let url = this.api.urunIscilikDownloadUrl(versiyon, first);
    this.http.setHeader('Content-Type', 'application/json');
    this.http.setHeader('accessToken', localStorage.getItem("accessToken"));
    return this.http.get(url, {}, {});
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
    let INSERT_QUERY = "INSERT INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
    let params = [item.mamKod, item.iscKod, item.iscAdi, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
    return this.baseDao.execute(INSERT_QUERY, params).then();
  }
}
