import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cagri } from '../../entities/cagri/cagri';
import { DatabaseProvider } from '../database/database';



@Injectable()
export class HizmetDao {

  insertedRow: number = 0;
  constructor(public http: Http, private SQL: DatabaseProvider) {
    console.log('Hello HizmetDaoProvider Provider');
  }

  // Listede her bir item kayit edilir ve liste tekrar cagrilir.Cagrilmadan once kayit edilen item listeden silinir.
  saveHizmetList(list: Cagri[]): Observable<any> {
    for (let item of list) {
      this.saveHizmet(item)
        .then(res => {
          const index = list.indexOf(item);
          list.splice(index, 1);
          if (list.length > 0)
            this.saveHizmetList(list);
          else
            return null;
        }).catch(err => {
          return err;
        });
    }
    return null;
  }

  saveHizmet(hizmet: Cagri): Promise<any> {
    let query = 'INSERT INTO OFF_HIZ_MST(seqNo, randevuTarihi, hizmetTipiAdi, mamAnaGrpAdi, basvuruNedeni, durum, adi, soyadi, firmaUnvani, evTel, isTel, gsmNo, data)';
    let params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni, hizmet.durum, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmet];
    return this.SQL.db.executeSql(query, params).then(res => {
      console.log('Hizmet item inserted' + res);
      return res.rows();
    }).catch(err => {
      console.log('Hizmet Kaydetme de Hata' + err);
    });
  }

}
