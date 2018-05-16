import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {UrunMalzeme} from '../../entities/urun-malzeme';
import {UrunMalzemeDao} from '../urun-malzeme-dao/urun-malzeme-dao';
import {Constants} from '../../entities/Constants';
import {TokenProvider} from "../token/token";


@Injectable()
export class UrunMalzemeProvider {

  constants: Constants;

  constructor(public http: HttpClient,
              private urunMalzemeDao: UrunMalzemeDao,
              private token: TokenProvider,
              private api: ApiProvider) {
    console.log('Hello UrunMalzemeProvider Provider');
    this.constants = new Constants();
  }

  downloadUrunMalzeme(first): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDataFromApi(first).then(data => {
        let urunMalzeme = new UrunMalzeme();
        urunMalzeme.fillUrunMalzeme(data).then(list => {
          this.urunMalzemeDao.insertList(list).then(res => {
            resolve(res);
          });
        });
      });
    });
  }

  async getDataFromApi(first: number): Promise<any> {
    let url = this.api.urunMalzemeDownloadUrl(first);
    await  this.token.getTokenInside();
    let header = this.api.getHeader();
    return this.http.get(url, {headers: header});
  }


}
