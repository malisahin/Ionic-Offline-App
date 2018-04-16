/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Token } from '../../entities/token'
import { Observable } from 'rxjs/Observable';
import { Network } from '@ionic-native/network';
import { LoggerProvider } from '../logger/logger';
import { Platform } from 'ionic-angular';

@Injectable()
export class TokenProvider {
  results: string;
  constructor(public http: HttpClient,
    public api: ApiProvider,
    private network: Network,
    private platform: Platform,
    private logger: LoggerProvider) {
    console.log('Hello TokenProvider Provider');
    this.results = "";
  }

  getToken(username: string, password: string): Observable<any> {
    let tokenUrl = this.api.getTokenUrl(username, password);

    return this.http.post(tokenUrl, {}, {}).map(res => {
      this.logger.dir(res);
      return this.extractData(res);
    });
  }

  checkConnection(): Promise<any> {
    // TODO: Token Almadan önce Online olup olmadığı sorulacak.
    return this.network.onConnect().toPromise().then(() => {
      this.logger.log("Check connection ");
      let tokenUrl = this.api.getTokenUrl("", "");
      this.http.post(tokenUrl, {}, {}).map(res => {
        return this.extractData(res);
      })
    });
  }

  private extractData(res: {}) {
    console.log(res);
    let token = new Token();
    return token.fillToken(res);
  }



}
