/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
*/

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../api/api';


@Injectable()
export class UrunProvider {

  constructor(public http: Http, private api: ApiProvider) {
    console.log('Hello UrunProvider Provider');
  }

  downloadUrunler(versiyon: string, first: number): Observable<any> {
    let url = this.api.downloadUrunUrl(versiyon, first);
    let options = this.api.getHeader();
    return this.http.get(url, options);;
  }

}
