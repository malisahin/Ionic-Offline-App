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
import {DetayKayit} from "../../entities/hizmet/DetayKayit";
import {LoggerProvider} from "../logger/logger";


@Injectable()
export class FiyatProvider {

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private util: UtilProvider,
              private fiyatDao: FiyatDao,
              private logger: LoggerProvider,
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

    if (this.util.isOnline()) {
      this.util.loaderStart();
      return this.getFiyat(url, header, tip);
    } else {
      this.util.ifOffline();
    }
  }

  async getFiyat(url, header, tip): Promise<any> {

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
  }

  getFiyatSorguFilter(detay: DetayKayit, mamKod: string): Fiyat {
    let item = new Fiyat();
    item.mamKod = detay.mlzIsc == 'MLZ' ? 'MLZ' : mamKod;
    item.iscMlzKod = detay.mlzIscKod;
    return item;
  }

  async findFiyat(detay: DetayKayit, mamKod: string) {
    let fiyat = this.getFiyatSorguFilter(this.util.assign(detay), mamKod);

    if (detay.mlzIsc != Constants.DETAY_TIPI.DIGER) {

      let res = await this.fiyatDao.findFiyat(fiyat);
      if (this.util.isNotEmptyRows(res)) {
        this.logger.dir(res);
        return res.rows.item(0);
      } else {
        return null;
      }
    }
  }


}

















