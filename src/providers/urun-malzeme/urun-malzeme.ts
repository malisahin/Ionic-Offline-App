import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {UrunMalzeme} from '../../entities/urun-malzeme';
import {UrunMalzemeDao} from '../urun-malzeme-dao/urun-malzeme-dao';
import {TokenProvider} from "../token/token";
import {Constants} from "../../entities/Constants";
import {UtilProvider} from "../util/util";
import {Pageable} from "../../entities/Pageable";


@Injectable()
export class UrunMalzemeProvider {


  constructor(public http: HttpClient,
              private urunMalzemeDao: UrunMalzemeDao,
              private token: TokenProvider,
              private util: UtilProvider,
              private api: ApiProvider) {
    console.log('Hello UrunMalzemeProvider Provider');
  }

  async downloadUrunMalzeme(first): Promise<any> {
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      let data = await this.getDataFromApi(first, header);
      let urunMalzeme = new UrunMalzeme();
      let list = await urunMalzeme.fillUrunMalzeme(data);
      let res = await  this.urunMalzemeDao.insertList(list);
      return new Promise((resolve, reject) => {
        resolve(res);
      });
    } else {
      this.util.ifOffline();
    }
  }

  async getDataFromApi(first: number, header): Promise<any> {
    let url = this.api.urunMalzemeDownloadUrl(first);
    return this.http.get(url, {headers: header}).toPromise();
  }

  getList(filter: UrunMalzeme, searchType: string, pageable: Pageable): Promise<any> {
    return this.urunMalzemeDao.getList(filter, searchType, pageable);
  }


}
