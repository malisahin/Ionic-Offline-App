/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FiyatProvider {

  constructor(public http: HttpClient, private api: ApiProvider) {
    console.log('Hello FiyatProvider Provider');
  }

  downloadMalzemeFiyat(versiyon, first): Observable<any> {
    let tip = "malzemeFiyatListesi"
    let url = this.api.fiyatlarDownloadUrl("-1", 0, tip);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }

  downloadIscilikFiyat(versiyon, first): Observable<any> {
    let tip = "iscilikFiyatListesi"
    let url = this.api.fiyatlarDownloadUrl("-1", 0, tip);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }


}

