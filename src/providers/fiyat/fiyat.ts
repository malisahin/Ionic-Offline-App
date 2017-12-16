/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ApiProvider } from '../api/api';


@Injectable()
export class FiyatProvider {

  constructor(public http: Http, private api: ApiProvider) {
    console.log('Hello FiyatProvider Provider');
  }

  downloadMalzemeFiyat(versiyon, first): Observable<any> {
    let tip = "malzemeFiyatListesi"
    let url = this.api.fiyatlarDownloadUrl("-1", 0, tip);
    let header = this.api.getHeader();
    return this.http.get(url, header);
  }

  downloadIscilikFiyat(versiyon, first): Observable<any> {
    let tip = "iscilikFiyatListesi"
    let url = this.api.fiyatlarDownloadUrl("-1", 0, tip);
    let header = this.api.getHeader();
    return this.http.get(url, header);
  }


}

