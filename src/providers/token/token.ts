/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Token } from '../../entities/token'

@Injectable()
export class TokenProvider {
  results: string;
  constructor(public http: Http, public api: ApiProvider) {
    console.log('Hello TokenProvider Provider');
    this.results = "";
  }

  getToken(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let tokenUrl = this.api.getTokenUrl(username, password);
      return this.http.post(tokenUrl, {})
        .toPromise()
        .then(this.extractData)
        .catch(this.extractData);
    });
  }

  private extractData(res: {}) {
    console.log(res);
    let token = new Token();
    return token.fillToken(res);
  }



}
