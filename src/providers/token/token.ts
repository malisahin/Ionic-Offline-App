/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class TokenProvider {

  constructor(public http: HttpClient, public api: ApiProvider) {
    console.log('Hello TokenProvider Provider');
  }

  getToken(username: string, password: string) {
    let promise = new Promise((resolve, reject) => {
      let tokenUrl = this.api.getTokenUrl(username, password);
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
