/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {ApiProvider} from "../api/api";
import {Urun} from "../../entities/urun";
import {UrunDao} from '../urun-dao/urun-dao';
import {TokenProvider} from "../token/token";
import {UtilProvider} from "../util/util";
import {Constants} from "../../entities/Constants";


@Injectable()
export class UrunProvider {


  constructor(public http: HttpClient,
              private api: ApiProvider,
              private urunDao: UrunDao,
              private  util: UtilProvider,
              private  token: TokenProvider) {
  }

  async downloadUrunler(first: number): Promise<any> {
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      this.util.loaderStart();
      let data = await this.getDataFromApi(first, header);
      let urun = new Urun();
      let list = await urun.fillUrun(data);
      let item: any;
      if (this.util.isNotEmpty(list) && list.length > 0) {
        item = await this.urunDao.insertList(list);
      }

      return new Promise((resolve, reject) => {
        resolve(Constants.STATUS.SUCCESS);
        reject(Constants.STATUS.ERROR);
      })
    } else {
      this.util.ifOffline();
    }
  }

  async getDataFromApi(first, header): Promise<any> {
    let url = this.api.downloadUrunUrl(first);
    return this.http.get(url, {headers: header}).toPromise();

  }
}
