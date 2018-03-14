/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {HTTP} from "@ionic-native/http";
import {Injectable} from "@angular/core";
import {ApiProvider} from "../api/api";
import "rxjs/add/operator/map";
import {UrunIscilik} from "../../entities/urun-iscilik";
import {BaseDao} from "../base-dao/base-dao";


@Injectable()
export class UrunIscilikProvider {
  constructor(public http: HTTP, private api: ApiProvider, private baseDao: BaseDao) {
    console.log('Hello UrunIscilikProvider Provider');
  }


  downloadUrunIscilik(versiyon: string, first: number): Promise<any> {
    let url = this.api.urunIscilikDownloadUrl(versiyon, first);
    this.http.setHeader('Content-Type', 'application/json');
    this.http.setHeader('accessToken', localStorage.getItem("accessToken"));
    return this.http.get(url, {}, {}).then(item => {
      let urunIscilik = new UrunIscilik();
      return urunIscilik.fillUrunIscilik(item).then(list=> {
        this.insertList(list);
      });
    });
  }

  insertList(list: UrunIscilik[]): Promise<any> {
    for (var i = 0; i < list.length; i++) {
      this.insertOne(list[i]);
    }
    return new Promise(resolve=>resolve("success"));
  }

  insertOne(item: UrunIscilik): Promise<any> {
    let INSERT_QUERY = "INSERT INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
    let params = [item.mamKod, item.iscKod, item.iscAdi, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
    return this.baseDao.execute(INSERT_QUERY, params);
  }
}
