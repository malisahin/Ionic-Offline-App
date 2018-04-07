/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IslemArizaIscilikProvider {

  constructor(public http: HttpClient, private api: ApiProvider) {
    console.log('Hello IslemArizaIscilikProvider Provider');
  }


  downloadIslemArizaIscilik(first): Observable<any> {
    let url = this.api.islemArizaIscilikDownloadUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }
}
