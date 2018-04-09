/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { Fiyat } from '../../entities/fiyat';
import { FiyatDao } from '../fiyat-dao/fiyat-dao';


@Injectable()
export class FiyatProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private fiyatDao: FiyatDao) {
    console.log('Hello FiyatProvider Provider');
  }

  downloadMalzemeFiyat(first): Promise<any> {
    let tip = "malzemeFiyatListesi"
    return this.getDataFromApi(first, tip);
  }

  downloadIscilikFiyat(first): Promise<any> {
    let tip = "iscilikFiyatListesi"
    return this.getDataFromApi(first, tip);
  }

  getDataFromApi(first: number, tip: string): Promise<any> {
    let url = this.api.fiyatlarDownloadUrl(0, tip);
    let header = this.api.getHeader();

    return new Promise((resolve, reject) => {
      this.http.get(url, { headers: header }).toPromise().then(res => {
        let fiyatlar = new Fiyat();
        fiyatlar.fillFiyat(res).then(list => {
          this.fiyatDao.insertList(list).then(item => {
            console.dir(item);
            resolve(item);
          });
        });
      });
    });

  }


}

