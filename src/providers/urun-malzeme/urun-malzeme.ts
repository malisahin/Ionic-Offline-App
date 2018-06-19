import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {UrunMalzeme} from '../../entities/urun-malzeme';
import {UrunMalzemeDao} from '../urun-malzeme-dao/urun-malzeme-dao';
import {TokenProvider} from "../token/token";


@Injectable()
export class UrunMalzemeProvider {



  constructor(public http: HttpClient,
              private urunMalzemeDao: UrunMalzemeDao,
              private token: TokenProvider,
              private api: ApiProvider) {
    console.log('Hello UrunMalzemeProvider Provider');
  }

  async downloadUrunMalzeme(first): Promise<any> {

    let data = await this.getDataFromApi(first);
    let urunMalzeme = new UrunMalzeme();
    let list = await urunMalzeme.fillUrunMalzeme(data);
    return new Promise((resolve, reject) => {
      this.urunMalzemeDao.insertList(list).then(res => {
        resolve(res);
      });
    });
  }

  async getDataFromApi(first: number): Promise<any> {
    let url = this.api.urunMalzemeDownloadUrl(first);
    let header = await this.token.callTokenAndGetHeader();
    return this.http.get(url, {headers: header}).toPromise();
  }


}
