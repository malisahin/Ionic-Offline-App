/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UrunIscilikProvider {
  options: RequestOptions;
  constructor(public http: Http, private api: ApiProvider) {
    console.log('Hello UrunIscilikProvider Provider');
  }


  downloadUrunIscilik(versiyon: string, first: number): Observable<any> {
    let url = this.api.urunIscilikDownloadUrl(versiyon, first);
    this.options = this.api.getHeader();
    return this.http.get(url, this.options);
  }

}
