/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {ApiProvider} from "../api/api";
import "rxjs/add/operator/map";
import {UrunIscilik} from "../../entities/urun-iscilik";
import {Constants} from '../../entities/Constants';
import {UrunIscilikDao} from '../urun-iscilik-dao/urun-iscilik-dao';
import {TokenProvider} from "../token/token";
import {UtilProvider} from "../util/util";


@Injectable()
export class UrunIscilikProvider {

  INSERT_QUERY: string = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private urunIscilikDao: UrunIscilikDao,
              private util: UtilProvider,
              private token: TokenProvider) {

  }


  async downloadUrunIscilik(first: number): Promise<any> {
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      let item = await this.getDataFromApi(first, header);
      let urunIscilik = new UrunIscilik();
      let list = await urunIscilik.fillUrunIscilik(item);
      return new Promise((resolve, reject) => {
          this.urunIscilikDao.insertList(list).then(count => {
            console.log(count);
            resolve(Constants.STATUS.SUCCESS);
          });
        }
      );
    } else {
      this.util.ifOffline();
    }
  }

  async getDataFromApi(first: number, header): Promise<any> {
    let url = this.api.urunIscilikDownloadUrl(first);
    return this.http.get(url, {headers: header}).toPromise();
  }

}
