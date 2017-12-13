/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class TokenProvider {
  results: string;
  constructor(public http: HttpClient, public api: ApiProvider) {
    console.log('Hello TokenProvider Provider');
    this.results = "";
  }

  getToken(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let tokenUrl = this.api.getTokenUrl(username, password);
      this.http.post(tokenUrl, {})
        .toPromise()
        .then(this.extractData);
    });
  }

  private extractData(res: {}) {
    console.log(res.access_token);
    return res.access_token;
  }



}
