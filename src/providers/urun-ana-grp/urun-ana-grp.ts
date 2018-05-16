/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {ApiProvider} from "../api/api";
import {UrunAnaGrup} from "../../entities/urunAnaGrup";
import {UrunAnaGrupDao} from '../urun-ana-grup-dao/urun-ana-grup-dao';
import {TokenProvider} from "../token/token";


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private token: TokenProvider,
              private urunAnaGrupDao: UrunAnaGrupDao) {
    console.log('Hello UrunAnaGrpProvider Provider');
  }

  downloadUrunAnaGrup(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDataFromApi().then(item => {
        let anaGrp = new UrunAnaGrup("");
        anaGrp.fillUrunAnaGrup(item).then(anaGrpList => {
          this.urunAnaGrupDao.insertList(anaGrpList).then(res => {
            resolve("success");
          });
        });
      });
    });
  }

  async getDataFromApi(): Promise<any> {
    let url = this.api.urunAnagrupDownloadUrl();
    let header = await this.token.callTokenAndGetHeader();
    return this.http.get(url, {headers: header}).toPromise();
  }


}
