import { Http, Headers } from '@angular/http';
import { ApiProvider } from '../api/api';
import { UrunMalzeme } from '../../entities/urun-malzeme';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs } from '@angular/http';
import { RequestOptions } from '@angular/http';


@Injectable()
export class MalzemeIscilikProvider {
  urunMalzeme: UrunMalzeme = new UrunMalzeme;

  constructor(public http: Http, public api: ApiProvider) {
    console.log('Hello MalzemeIscilikProvider Provider');
  }

  urunIscilikGuncelle2(versiyon: string, first: number): Observable<any> {
    let url = this.api.urunIscGuncelleUrl(versiyon, first);
    //let options = this.getHeader();
    //return this.http.get(url, options);

    return null;
  }

  private extractData(res: {}) {
    console.log(res);

  }

  urunMalzemeGuncelle() {

  }

  islemArizaIscilikGuncelle() {

  }


}
