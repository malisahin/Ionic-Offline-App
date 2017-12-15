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


  urunIscilikGuncelle(versiyon: string, first: number): Promise<any> {
    let headers = new Headers();
    let url = this.api.urunIscGuncelleUrl(versiyon, first);
    headers.append('Content-Type', 'application/json');
    headers.append('accessToken', localStorage.getItem("accessToken"));

    let options = new RequestOptions({ headers: headers });

    return new Promise((resolve, reject) => {
      return this.http.get(url, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.extractData);
    });


    /* return this.http.get(url, options)
       .map(res => {
         return res.json().results.map(item => {
           return this.urunMalzeme.fillUrunMalzeme(item);
         });
       }).toPromise().then().catch();
       */

  }

  private extractData(res: {}) {
    console.log(res);
  }

  urunMalzemeGuncelle() {

  }

  islemArizaIscilikGuncelle() {

  }


}
