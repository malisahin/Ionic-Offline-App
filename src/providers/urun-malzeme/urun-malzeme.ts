


import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { UrunMalzeme } from '../../entities/urun-malzeme';
import { BaseDao } from '../base-dao/base-dao';
import { DatabaseProvider } from '../database/database';
import { UrunMalzemeDao } from '../urun-malzeme-dao/urun-malzeme-dao';
import { Constants } from '../../entities/Constants';
import { TokenProvider } from '../token/token';


@Injectable()
export class UrunMalzemeProvider {

  constants: Constants;
  constructor(public http: HttpClient,
    private urunMalzemeDao: UrunMalzemeDao,
    private tokenProvider: TokenProvider,
    private api: ApiProvider) {
    console.log('Hello UrunMalzemeProvider Provider');
    this.constants = new Constants();
  }

  downloadUrunMalzeme(first): Promise<any> {
    return new Promise((resolve, reject) => {
      this.tokenProvider.getToken("", "").toPromise().then(res => {
        this.getDataFromApi(first).toPromise().then(data => {
          let urunMalzeme = new UrunMalzeme();
          urunMalzeme.fillUrunMalzeme(data).then(list => {
            this.urunMalzemeDao.insertList(list).then(res => {
              resolve(res);
            });
          });
        });
      });
    });
  }

  getDataFromApi(first: number): Observable<any> {
    let url = this.api.urunMalzemeDownloadUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }







}
