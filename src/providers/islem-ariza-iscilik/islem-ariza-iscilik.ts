/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IslemArizaIscilikProvider {

  constructor(public http: Http, private api: ApiProvider) {
    console.log('Hello IslemArizaIscilikProvider Provider');
  }


  downloadIslemArizaIscilik(versiyon, first): Observable<any> {
    let url = this.api.islemArizaIscilikDownloadUrl(versiyon, first);
    let header = this.api.getHeader();
    return this.http.get(url, header);
  }
}
