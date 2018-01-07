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

  hizmet: Hizmet;

  constructor(public http: Http, private hizmetDao: HizmetDao, private hizmetProvider: HizmetProvider) {
    console.log('Hello HizmetServiceProvider Provider');
  }

  getHizmetFromDb(seqNo) {
    this.hizmetDao.find(this.hizmet).subscribe(res => {
      this.hizmet = this.hizmetProvider.fillHizmet(res);
    });

  }

  getHizmet(): Hizmet {
    return this.hizmet;
  }

}
