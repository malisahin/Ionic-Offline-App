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
import {Constants} from "../../entities/Constants";
import {UtilProvider} from "../util/util";
import {Hizmet} from "../../entities/hizmet/hizmet";


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private token: TokenProvider,
              private util: UtilProvider,
              private urunAnaGrupDao: UrunAnaGrupDao) {
  }

  async downloadUrunAnaGrup(): Promise<any> {
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      let item = await this.getDataFromApi(header);
      let anaGrp = new UrunAnaGrup("");

      let anaGrpList = await anaGrp.fillUrunAnaGrup(item);

      let res = await this.urunAnaGrupDao.insertList(anaGrpList)

      return new Promise<any>(((resolve, reject) => {
        resolve(res);
      }));
    } else {
      this.util.ifOffline();
    }

  }

  async getDataFromApi(header): Promise<any> {
    let url = this.api.urunAnagrupDownloadUrl();
    return this.http.get(url, {headers: header}).toPromise();
  }

  async updateMamAnaGrp(hizmet: Hizmet): Promise<any> {
    let url = this.api.updateMamAnaGrupUrl();
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      return this.http.post(url, hizmet, {headers: header}).toPromise();

    } else {
      this.util.ifOffline();
    }

  }


  async findUrunAnaGrp(filter: UrunAnaGrup) {
    let urunAnaGrp: any;
    let res = await this.urunAnaGrupDao.getList(filter, Constants.SEARCH_TYPE.EXACT);

    if (res.rows.length > 0) {
      urunAnaGrp = this.util.isNotEmpty(res.rows) ? res.rows.item(0) : "";
    }

    return urunAnaGrp;
  }


}
