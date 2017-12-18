/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class CagriProvider {

  constructor(public http: Http, private api: ApiProvider) {
    console.log('Hello CagriProvider Provider');
  }

  downloadCagriList() {
    let url = this.api.getCagriListUrl();
    let header = this.api.getHeader();
    return this.http.get(url, header);
  }

}
