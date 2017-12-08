/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../../util/api-urls';

@Injectable()
export class TokenProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello TokenProvider Provider');
  }

  getToken() {
    let promise = new Promise((resolve, reject) => {
      let tokenUrl = this.api.tokenUrl;
      this.http.get(tokenUrl)
        .toPromise()
        .then(res => {
          console.log(res.toString());
          resolve();
        });
    });
    return promise;
  }

}
