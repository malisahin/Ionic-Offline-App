


import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';


@Injectable()
export class UrunMalzemeProvider {

  constructor(public http: HTTP, private api: ApiProvider) {
    console.log('Hello UrunMalzemeProvider Provider');
  }

  downloadUrunMalzeme(versiyon, first): Promise<any> {
    let url = this.api.urunMalzemeDownloadUrl(versiyon, first);
    this.http = this.api.getHeader(this.http);
    return this.http.get(url, {}, {});
  }

}
