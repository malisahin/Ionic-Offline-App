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


@Injectable()
export class UrunProvider {


  constructor(public http: HttpClient,
              private api: ApiProvider,
              private urunDao: UrunDao,
              private  token: TokenProvider) {
  }

  async downloadUrunler(first: number): Promise<any> {
    let item = await this.getDataFromApi(first);
    let urun = new Urun();
    return urun.fillUrun(item).then(item => {
      this.urunDao.insertList(item)
    });
  }

  async getDataFromApi(first): Promise<any> {
    let header = await this.token.callTokenAndGetHeader();
    let url = this.api.downloadUrunUrl(first);
    return this.http.get(url, {headers: header}).toPromise();
  }
}
