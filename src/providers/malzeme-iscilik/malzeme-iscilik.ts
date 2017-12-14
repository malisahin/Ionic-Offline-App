import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';


@Injectable()
export class MalzemeIscilikProvider {

  constructor(public http: HttpClient, public api: ApiProvider) {
    console.log('Hello MalzemeIscilikProvider Provider');
  }

  urunIscilikGuncelle(versiyon: string, first: number) {
    let url = this.api.urunIscGuncelleUrl(versiyon, first);
    return this.http.get(url)
      .map(res => {
        return res.json().results.map(item => {
          return this.searchItem.fillSearchItem(item);
        });
      });

  }

  urunMalzemeGuncelle() {

  }

  islemArizaIscilikGuncelle() {

  }


}
