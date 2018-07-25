import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from '../api/api';
import {Mesaj} from '../../entities/mesajlar';
import {BaseDao} from "../base-dao/base-dao";
import {MesajlarDao} from '../mesajlar-dao/mesajlar-dao';
import {TokenProvider} from '../token/token';
import {UtilProvider} from '../util/util';
import {Pageable} from "../../entities/Pageable";
import {Constants} from "../../entities/Constants";


@Injectable()
export class MesajlarProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private mesajDao: MesajlarDao,
              private tokenProvider: TokenProvider, private util: UtilProvider) {
    console.log('Hello MesajlarProvider Provider');
  }

  setAlertFirst() {
    this.util.success("Token  is Ok");
  }

  setAlertLast() {
    this.util.success("Notifications is Ok");
  }

  async getDataFromApi(calledFrom: string): Promise<any> {
    let url = this.api.getMesajlarUrl();
    let header = await this.tokenProvider.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      return this.getMesajlar(url, header);
    } else if (calledFrom != Constants.CALLED_FROM.TASKS) {
      this.util.ifOffline()
    }
  }

  async getMesajlar(url, header): Promise<any> {
    let res = await  this.http.get(url, {headers: header}).toPromise();
    let mesaj = new Mesaj();
    let list = await mesaj.fillMesajlar(res);
    return new Promise((resolve, reject) => {
      this.mesajDao.insertList(list).then(item => {
        resolve(item);
      });
    })
  }


  async fetchList(mes: Mesaj, pageable: Pageable): Promise<any> {
    let mesajList: Mesaj[] = [];
    let data = await  this.mesajDao.getList(mes, pageable);
    data = data.res.rows;
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let mesaj = new Mesaj();
        let item = data.item(i);
        mesaj.aciklama = item.aciklama;
        mesaj.gonderen = this.util.isNotEmpty(item.gonderen) ? item.gonderen : "SISTEM";
        mesaj.basTarihi = item.basTarihi;
        mesaj.bitisTarihi = item.bitisTarihi;
        mesaj.subject = item.subject;
        mesaj.type = item.type;
        mesaj.valid = item.valid;
        mesaj.id = item.id;
        mesajList.push(mesaj);
      }
    }
    return new Promise((resolve, reject) => {
      resolve(mesajList);
    });

  }


}
