/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {Token} from '../../entities/token'
import {Network} from '@ionic-native/network';
import {LoggerProvider} from '../logger/logger';
import {Platform} from 'ionic-angular';
import {UtilProvider} from '../util/util';
import {User} from "../../entities/user";
import {HttpHeaders} from '@angular/common/http';
import {Constants} from "../../entities/Constants";

@Injectable()
export class TokenProvider {
  results: string;
  user: User;

  userCode: string;
  password: string;
  httpHeader: HttpHeaders;

  constructor(public http: HttpClient,
              public api: ApiProvider,
              private network: Network,
              private platform: Platform,
              private logger: LoggerProvider,
              private util: UtilProvider) {
    console.log('Hello TokenProvider Provider');
    this.results = "";
    this.user = new User();

    this.userCode = localStorage.getItem(this.user.keys.userCode);
    this.password = localStorage.getItem(this.user.keys.password);
    this.getTokenInside();
  }

  async getToken(userCode: string, password: string): Promise<any> {
    let tokenUrl = this.api.getTokenUrl(userCode, password);
    try {
      let token = await this.http.post(tokenUrl, {}, {}).toPromise();
      this.logger.dir(token);
      return this.extractData(token);
    } catch (e) {

      localStorage.setItem(Constants.ACCESS_TOKEN, "");
      this.logger.error(e);
      if (e.error.error = "invalid_grant") {
        this.util.message("Giriş bilgileriniz yanlış lütfen kontrol ediniz.");
      } else {
        this.util.message("Bağlantı hatası.");
      }
      return false;
    }
  }

  getTokenInside(): Promise<any> {
    this.userCode = localStorage.getItem(this.user.keys.userCode);
    this.password = localStorage.getItem(this.user.keys.password);
    return this.getToken(this.userCode, this.password);
  }

  checkConnection(): Promise<any> {
    // TODO: Token Almadan önce Online olup olmadığı sorulacak.
    return this.network.onConnect().toPromise().then(() => {
      this.logger.log("Check connection ");
      let tokenUrl = this.api.getTokenUrl(this.userCode, this.password);
      this.http.post(tokenUrl, {}, {}).map(res => {
        return this.extractData(res);
      })
    });
  }

  private extractData(res: {}) {
    let token = new Token();
    return token.fillToken(res);
  }

  async callTokenAndGetHeader(): Promise<any> {
    this.util.isOnline();
    await  this.getTokenInside();
    return new Promise((response, reject) => {
      response(new HttpHeaders({
        'Content-Type': 'application/json',
        'accessToken': localStorage.getItem(Constants.ACCESS_TOKEN)
      }));
    });
  }

}
