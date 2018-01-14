/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hizmet } from '../../entities/hizmet/hizmet';
import { HizmetDao } from '../hizmet-dao/hizmet-dao';
import { Observable } from 'rxjs/Observable';
import { HizmetProvider } from '../hizmet/hizmet';


@Injectable()
export class HizmetService {

  hizmet: Hizmet = new Hizmet();

  constructor(public http: Http, private hizmetDao: HizmetDao, private hizmetProvider: HizmetProvider) {
    console.log('Hello HizmetServiceProvider Provider');

  }

  fetchHizmet(hizmet: Hizmet): Observable<Hizmet> {
    return this.hizmetDao.find(hizmet);

  }

  setHizmet(hizmet: Hizmet): Observable<any> {
    return Observable.create(observer => {
      this.hizmet = hizmet;
    });
  }

  getHizmet(): Observable<Hizmet> {
    return Observable.create(res => {
      return this.hizmet;
    });
  }

  saveHizmet() {
    this.hizmetDao.insertOne(this.hizmet);
  }

}
