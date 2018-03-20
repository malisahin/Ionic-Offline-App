import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Mesaj } from '../../entities/mesajlar';
import { Observable } from 'rxjs/Observable';
import { SQLite } from '@ionic-native/sqlite';
import { BaseDao } from "../base-dao/base-dao";


@Injectable()
export class MesajlarProvider {

  constructor(public http: HttpClient, private api: ApiProvider, private baseDao: BaseDao) {
    console.log('Hello MesajlarProvider Provider');
  }

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

  downloadMesajlar(): Observable<any> {
    let url = this.api.getMesajlarUrl();
    let header = this.api.getHeader();
    return this.http.get(url, { headers: header }).map(res => {
      return this.fillMesajlar(res);
    });
  };

  saveMesajlar() {
    let INSERT_QUERY = 'INSERT OR REPLACE';
    INSERT_QUERY = "INSERT INTO OFF_HIZ_MST(seqNo, randevuTarihi, hizmetTipiAdi, mamAnaGrpAdi, basvuruNedeni, durum, adi, soyadi, firmaUnvani, evTel, isTel, gsmNo, data) " +
      " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ";
  }
}
