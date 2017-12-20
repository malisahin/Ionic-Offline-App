/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cagri } from '../../entities/cagri/cagri';


@Injectable()
export class HizmetProvider {

  hizmet: Cagri = new Cagri();
  constructor(public http: HttpClient) {
    console.log('Hello HizmetProvider Provider');
    //  this.hizmet = this.hizmetDao.getHizmet(seqNo);
  }


  getHizmetFromDb(seqNo): Cagri {
    return null;
  }

  getHizmet(): Cagri {
    return this.hizmet;
  }


}
