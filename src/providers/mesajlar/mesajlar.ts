import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {Mesaj} from '../../entities/mesajlar';
import {BaseDao} from "../base-dao/base-dao";
import {MesajlarDao} from '../mesajlar-dao/mesajlar-dao';
import {TokenProvider} from '../token/token';
import {UtilProvider} from '../util/util';


@Injectable()
export class MesajlarProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private mesajDao: MesajlarDao,
              private tokenProvider: TokenProvider, private util: UtilProvider) {
    console.log('Hello MesajlarProvider Provider');
  }

  setAlertFirst() {
    this.util.message("Token  is Ok");
  }

  setAlertLast() {
    this.util.message("Notifications is Ok");
  }

  async getDataFromApi(): Promise<any> {
    let url = this.api.getMesajlarUrl();
    let header = await this.tokenProvider.callTokenAndGetHeader();
    let res = await  this.http.get(url, {headers: header}).toPromise();
    let mesaj = new Mesaj();
    let list = await mesaj.fillMesajlar(res);
    return new Promise((resolve, reject) => {
      this.mesajDao.insertList(list).then(item => {
        resolve(item);
      });
    })
  }


}
