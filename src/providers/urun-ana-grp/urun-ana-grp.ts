/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: Http, private api: ApiProvider) {
    console.log('Hello UrunAnaGrpProvider Provider');
  }

  downloadUrunAnaGrup(versiyon): Observable<any> {
    let url = this.api.urunAnagrupDownloadUrl(versiyon);
    let options = this.api.getHeader();
    return this.http.get(url, options);
  }

}
