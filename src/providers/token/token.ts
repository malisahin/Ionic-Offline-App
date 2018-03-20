/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Token } from '../../entities/token'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenProvider {
  results: string;
  constructor(public http: HttpClient, public api: ApiProvider) {
    console.log('Hello TokenProvider Provider');
    this.results = "";
  }

  getToken(username: string, password: string): Observable<any> {
    let tokenUrl = this.api.getTokenUrl(username, password);
    return this.http.post(tokenUrl, {}, {}).map(res => {
      return this.extractData(res);
    })

  }

  private extractData(res: {}) {
    console.log(res);
    let token = new Token();
    return token.fillToken(res);
  }



}
