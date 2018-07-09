import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from "../api/api";
import {UtilProvider} from "../util/util";
import {TokenProvider} from "../token/token";
import {LoggerProvider} from "../logger/logger";

/**
 * @author : mali.sahin
 * @since  : 18.06.2018
 */

@Injectable()
export class SeriNoSorguProvider {

  constructor(public http: HttpClient,
              private  api: ApiProvider,
              private  util: UtilProvider,
              private  tokenProvider: TokenProvider,
              private  logger: LoggerProvider) {
  }


  public async fetchData(mamKod: string): Promise<any> {
    if (this.util.isNotEmpty(mamKod)) {
      let url = this.api.seriNoSorguUrl(mamKod);
      this.logger.warn(url);
      let header = await this.tokenProvider.callTokenAndGetHeader();
      if (this.util.isOnline()) {
        let res = await this.http.get(url, {headers: header}).toPromise();
        return new Promise((resolve, reject) => {
          resolve(res);
        })
      } else {
        this.util.ifOffline();
      }

    } else {
      this.util.error("Seri No alanı sorgu için zorunludur.");
    }
  }
}
