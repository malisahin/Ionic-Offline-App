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

  fetchHizmet(seqNo) {
    /*this.hizmetDao.find(this.hizmet).subscribe(res => {
      this.setHizmet(this.hizmetProvider.fillHizmet(res));
    });
    */
  }

  setHizmet(hizmet: Hizmet) {
    this.hizmet = hizmet;
  }

  getHizmet(): Hizmet {
    return this.hizmet;
  }

}
