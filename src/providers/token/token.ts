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
import { UtilProvider } from '../util/util';

@Injectable()
export class TokenProvider {
  results: string;
  constructor(public http: HttpClient,
    public api: ApiProvider,
    private network: Network,
    private platform: Platform,
    private logger: LoggerProvider,
    private util: UtilProvider) {
    console.log('Hello TokenProvider Provider');
    this.results = "";
  }

  async getToken(userCode: string, password: string): Promise<any> {
    let tokenUrl = this.api.getTokenUrl(userCode, password);
    try {
      let token = await this.http.post(tokenUrl, {}, {}).toPromise();
      this.logger.dir(token);
      return this.extractData(token);
    } catch (e) {

      this.logger.error(e);
      if (e.error.error = "invalid_grant") {
        this.util.message("Giriş bilgileriniz yanlış lütfen kontrol ediniz.");
      } else {
        this.util.message("Bağlantı hatası.");
      }
      return false;
    }

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
