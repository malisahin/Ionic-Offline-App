/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HTTP } from '@ionic-native/HTTP';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Token } from '../../entities/token'

@Injectable()
export class TokenProvider {
  results: string;
  constructor(public http: HTTP, public api: ApiProvider) {
    console.log('Hello TokenProvider Provider');
    this.results = "";
  }

  getToken(username: string, password: string): Promise<any> {
    let tokenUrl = this.api.getTokenUrl(username, password);
    return this.http.post(tokenUrl, {}, {}).then(res => {
      return this.extractData(res);
    }).catch(this.extractData);

  }

  private extractData(res: {}) {
    console.log(res);
    let token = new Token();
    return token.fillToken(res);
  }



}
