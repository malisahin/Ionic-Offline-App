/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cagri } from '../../entities/cagri/cagri';
import { HizmetDao } from '../../dao/hizmet-dao';


@Injectable()
export class HizmetProvider {

  hizmet: Cagri;
  constructor(public http: HttpClient, private hizmetDao: HizmetDao) {
    console.log('Hello HizmetProvider Provider');
    this.hizmet = this.hizmetDao.getHizmet(seqNo);
  }


  getHizmet(seqNo): Cagri {
    this.hizmetDao.getHizmet(seqNo).subscribe(res => {
      this.hizmet = res;
    })
  }

}
