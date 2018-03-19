/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HTTP } from '@ionic-native/HTTP';
import { ApiProvider } from '../api/api';


@Injectable()
export class FiyatProvider {

  constructor(public http: HTTP, private api: ApiProvider) {
    console.log('Hello FiyatProvider Provider');
  }

  downloadMalzemeFiyat(versiyon, first): Promise<any> {
    let tip = "malzemeFiyatListesi"
    let url = this.api.fiyatlarDownloadUrl("-1", 0, tip);
    this.http = this.api.getHeader(this.http);
    return this.http.get(url, {}, {});
  }

  downloadIscilikFiyat(versiyon, first): Promise<any> {
    let tip = "iscilikFiyatListesi"
    let url = this.api.fiyatlarDownloadUrl("-1", 0, tip);
    this.http = this.api.getHeader(this.http);
    return this.http.get(url, {}, {});
  }


}

