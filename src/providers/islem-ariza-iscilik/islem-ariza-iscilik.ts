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


@Injectable()
export class IslemArizaIscilikProvider {

  constructor(public http: HttpClient,
              private tokenProvider: TokenProvider,
              private api: ApiProvider, private islemArizaIscilikDao: IslemArizaIscilikDao) {
    console.log('Hello IslemArizaIscilikProvider Provider');
  }

  async downloadIslemArizaIscilik(first: number): Promise<any> {
    let data = await this.getDataFromApi(first);
    let islemArizaIscilik = new IslemArizaIscilik();
    let item = await islemArizaIscilik.fillIslemArizaIscilik(data);
    return new Promise((resolve, reject) => {
      this.islemArizaIscilikDao.insertList(item).then(res => {
        resolve(res);
      });
    });
  }


  async  getDataFromApi(first): Promise<any> {
    let url = this.api.islemArizaIscilikDownloadUrl(first);
    let header = await this.tokenProvider.callTokenAndGetHeader();
    return this.http.get(url, {headers: header}).toPromise();
  }
}
