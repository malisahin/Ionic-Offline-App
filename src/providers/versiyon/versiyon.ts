import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenProvider} from "../token/token";
import {ApiProvider} from "../api/api";
import {LoggerProvider} from "../logger/logger";
import {UtilProvider} from "../util/util";
import {Constants} from "../../entities/Constants";

/*
 Generated class for the VersiyonProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class VersiyonProvider {

  constructor(private http: HttpClient,
              private  tokenProvider: TokenProvider,
              private  api: ApiProvider,
              private util: UtilProvider,
              private logger: LoggerProvider) {
    console.log('Hello VersiyonProvider Provider');
  }

  async getVersiyonFromServer(): Promise<any> {
    try {
      let header = await this.tokenProvider.callTokenAndGetHeader();
      let url = this.api.getVersiyonUrl();
      let res = await  this.http.get(url, {headers: header}).toPromise();
      this.logger.table(res);
      this.setNewVersions(res);
    }
    catch (e) {
      this.logger.error("Versiyon Indirme(Task)" + e);
    }
  }

  setNewVersions(res: any) {
    let list: any[] = [];

    if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.message)) {
      list = res.message;
      list.forEach((val) => {
        let serverTableName = val[0];
        let serverTableVersiyon = val[1];
        let clientTableName = Constants.TABLE_SERVER_EQUIVALENT[serverTableName];
        localStorage.setItem(clientTableName, serverTableVersiyon);
        this.logger.log("Yeni Versiyon ==> " + clientTableName + " : " + serverTableVersiyon)
      });
    }
  }

  getVersiyonClientAndServer(tip) {
    let res = {client: "", server: ""};
    res.client = localStorage.getItem(Constants.VERSIYON.CLIENT[tip]);
    res.server = localStorage.getItem(Constants.VERSIYON.SERVER[tip]);

    return res;
  }

}


