/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { HTTP } from '@ionic-native/HTTP';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class IslemArizaIscilikProvider {

  constructor(public http: HTTP, private api: ApiProvider) {
    console.log('Hello IslemArizaIscilikProvider Provider');
  }


  downloadIslemArizaIscilik(versiyon, first): Promise<any> {
    let url = this.api.islemArizaIscilikDownloadUrl(versiyon, first);
    this.http = this.api.getHeader(this.http);
    return this.http.get(url, {}, {});
  }
}
