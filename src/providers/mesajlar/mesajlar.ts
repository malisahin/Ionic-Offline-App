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

  /*
   fillMesajlar(res: any): Mesaj[] {
   let parsedList = [];
   let mesajList = res.message;
   mesajList.forEach(function (item) {
   let mesaj = new Mesaj();
   mesaj.status = item.status;
   mesaj.subject = item.subject;
   mesaj.endTime = item.endTime;
   mesaj.startTime = item.endTime;
   mesaj.valid = item.valid;
   mesaj.gonderen = item.gonderen;
   mesaj.expl = item.expl;
   mesaj.id = item.id;
   mesaj.type = item.type;
   parsedList.push(mesaj);
   console.log(mesaj.type);
   });
   return parsedList;
   }
   */
  async downloadMesajlar(): Promise<any> {
    let url = this.api.getMesajlarUrl();
    let header = await this.api.getHeader();
    /*  return new Observable((observer) => {
     observer.next(this.setAlertFirst);
     observer.next(this.getDataFromApi);
     observer.next(this.setAlertLast);
     observer.error();
     }); */
  };

  async getToken(): Promise<any> {
    let url = this.api.getMesajlarUrl();
    let header = await  this.api.getHeader();

    return this.tokenProvider.getTokenInside();
  }


  setAlertFirst() {
    this.util.message("Token  is Ok");
  }

  setAlertLast() {
    this.util.message("Notifications is Ok");
  }

  getDataFromApi(): Promise<any> {
    let url = this.api.getMesajlarUrl();
    let header = this.api.getHeader();
    return this.tokenProvider.getTokenInside();
  }

 /*  getDataFromApi2(): Promise<any> {
    let url = this.api.getMesajlarUrl();
    let header = this.api.getHeader();

    return new Promise((resolve, reject) => {
      this.tokenProvider.getTokenInside().then(() => {
        this.http.get(url, {headers: header}).toPromise().then(res => {
          let mesaj = new Mesaj();
          mesaj.fillMesajlar(res).then(list => {
            this.mesajDao.insertList(list).then(item => {
              console.dir(item);
              resolve(item);
            });
          });
        });
      });
    });

  }*/
}
