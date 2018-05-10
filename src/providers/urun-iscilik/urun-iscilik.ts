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
import { UrunIscilikDao } from '../urun-iscilik-dao/urun-iscilik-dao';


@Injectable()
export class UrunIscilikProvider {

  constants: Constants;
  INSERT_QUERY: string = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
  constructor(public http: HttpClient,
    private api: ApiProvider,
    private tokenProvider: TokenProvider, private urunIscilikDao: UrunIscilikDao,
    private versiyonProvider: VersiyonProvider) {
    console.log('Hello UrunIscilikProvider Provider');
    this.constants = new Constants();
  }


  downloadUrunIscilik(first: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tokenProvider.getTokenInside().then(res => {
        this.getDataFromApi(first).toPromise().then(item => {
          let urunIscilik = new UrunIscilik();
          urunIscilik.fillUrunIscilik(item).then(list => {
            this.urunIscilikDao.insertList(list).then(count => {
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

}
