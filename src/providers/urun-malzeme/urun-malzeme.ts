


import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { UrunMalzeme } from '../../entities/urun-malzeme';
import { BaseDao } from '../base-dao/base-dao';


@Injectable()
export class UrunMalzemeProvider {

  constructor(public http: HttpClient,
    private baseDao: BaseDao,
    private api: ApiProvider) {
    console.log('Hello UrunMalzemeProvider Provider');
  }

  downloadUrunMalzeme(first): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDataFromApi(first).toPromise().then(res => {
        let urunMalzeme = new UrunMalzeme();
        urunMalzeme.fillUrunMalzeme(res).then();
      });
    });
  }

  getDataFromApi(first: number): Observable<any> {
    let url = this.api.urunMalzemeDownloadUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }

  insertList(list: UrunMalzeme[]): Promise<any> {
    let array: Promise<any>[] = new Array();
    for (let i = 0; i < list.length; i++) {
      array.push(this.insertOne(list[i]));
    }
    return Promise.all(array).then(res => {
      console.log(res);
    });
  }

  insertOne(item: UrunMalzeme): Promise<any> {
    let INSERT_QUERY = "INSERT INTO OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum, kdvOran) VALUES (?,?,?,?,?)";
    let params = [item.mamKod, item.mlzKod, item.mlzAdi, item.durum, item.kdvOran];
    return this.baseDao.execute(INSERT_QUERY, params);
  }

}
