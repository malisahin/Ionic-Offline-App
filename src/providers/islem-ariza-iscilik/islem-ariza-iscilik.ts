/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { IslemArizaIscilik } from '../../entities/islem-ariza-iscilik';
import { IslemArizaIscilikDao } from '../islem-ariza-iscilik-dao/islem-ariza-iscilik-dao';
import { TokenProvider } from '../token/token';


@Injectable()
export class IslemArizaIscilikProvider {

  constructor(public http: HttpClient,
    private tokenProvider: TokenProvider,
    private api: ApiProvider, private islemArizaIscilikDao: IslemArizaIscilikDao) {
    console.log('Hello IslemArizaIscilikProvider Provider');
  }

  downloadIslemArizaIscilik(first: number): Promise<any> {
    let header = this.api.getHeader();
    return new Promise((resolve, reject) => {
      this.tokenProvider.getTokenInside().then(res => {
        this.getDataFromApi(first).toPromise().then(data => {
          let islemArizaIscilik = new IslemArizaIscilik();
          islemArizaIscilik.fillIslemArizaIscilik(data).then(item => {
            this.islemArizaIscilikDao.insertList(item).then(res => {
              resolve(res);
            });
          });
        });
      });
    });
  }


  getDataFromApi(first): Observable<any> {
    let url = this.api.islemArizaIscilikDownloadUrl(first);
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header });
  }
}
