


import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../api/api';


@Injectable()
export class UrunMalzemeProvider {

  constructor(public http: Http, private api: ApiProvider) {
    console.log('Hello UrunMalzemeProvider Provider');
  }

  downloadUrunMalzeme(versiyon, first): Observable<any> {
    let url = this.api.urunMalzemeDownloadUrl(versiyon, first);
    let header = this.api.getHeader();
    return this.http.get(url, header);
  }

}
