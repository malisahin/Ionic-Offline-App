/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {IslemArizaIscilik} from '../../entities/islem-ariza-iscilik';
import {IslemArizaIscilikDao} from '../islem-ariza-iscilik-dao/islem-ariza-iscilik-dao';
import {TokenProvider} from '../token/token';
import {UtilProvider} from "../util/util";


@Injectable()
export class IslemArizaIscilikProvider {

  constructor(public http: HttpClient,
              private tokenProvider: TokenProvider,
              private api: ApiProvider,
              private util: UtilProvider,
              private islemArizaIscilikDao: IslemArizaIscilikDao) {
    console.log('Hello IslemArizaIscilikProvider Provider');
  }

  async downloadIslemArizaIscilik(first: number): Promise<any> {
    let header = await this.tokenProvider.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      this.util.loaderStart()
      let data = await this.getDataFromApi(first, header);
      let islemArizaIscilik = new IslemArizaIscilik();
      let item = await islemArizaIscilik.fillIslemArizaIscilik(data);
      let res = await this.islemArizaIscilikDao.insertList(item);
      return new Promise((resolve, reject) => {
        resolve(res);
      });

    } else {
      this.util.ifOffline();
    }

  }


  async getDataFromApi(first, header): Promise<any> {
    let url = this.api.islemArizaIscilikDownloadUrl(first);


    return this.http.get(url, {headers: header}).toPromise();
  }
}
