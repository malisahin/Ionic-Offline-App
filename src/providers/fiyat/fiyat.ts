/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {Fiyat} from '../../entities/fiyat';
import {FiyatDao} from '../fiyat-dao/fiyat-dao';
import {TokenProvider} from "../token/token";
import {Constants} from "../../entities/Constants";
import {UtilProvider} from "../util/util";


@Injectable()
export class FiyatProvider {

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private util: UtilProvider,
              private fiyatDao: FiyatDao,
              private  token: TokenProvider) {

  }

  downloadMalzemeFiyat(first): Promise<any> {
    let tip = "malzemeFiyatListesi";
    return this.getDataFromApi(first, tip);
  }

  downloadIscilikFiyat(first): Promise<any> {
    let tip = "iscilikFiyatListesi";
    return this.getDataFromApi(first, tip);
  }

  async getDataFromApi(first: number, tip: string): Promise<any> {
    let url = this.api.fiyatlarDownloadUrl(first, tip);
    let header = await this.token.callTokenAndGetHeader();

    let data = await this.http.get(url, {headers: header}).toPromise();
    let fiyatlar = new Fiyat();
    let list = await fiyatlar.fillFiyat(data, tip);
    let item: any;
    if (this.util.isNotEmpty(list) && list.length > 0) {
      item = await this.fiyatDao.insertList(list);
    }
    return new Promise((resolve, reject) => {
      resolve(Constants.STATUS.SUCCESS);
      reject(Constants.STATUS.ERROR);
    });


    /*  return new Promise((resolve, reject) => {
     this.http.get(url, {headers: header}).toPromise().then(res => {
     let fiyatlar = new Fiyat();
     fiyatlar.fillFiyat(res).then(list => {
     this.fiyatDao.insertList(list).then(item => {
     console.dir(item);
     resolve(Constants.STATUS.SUCCESS);
     reject(Constants.STATUS.ERROR);
     });
     });
     });
     });
     */
  }

}

