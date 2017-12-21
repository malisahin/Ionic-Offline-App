/**
 * @author [malisahin]
*/


import { Injectable } from '@angular/core';



@Injectable()
export class TasiyiciProvider {


  constructor() {
    console.log('Hello TasiyiciProvider Provider');
  }

  setHizmet(hizmet: Cagri) {
    this.hizmet = hizmet;
  }

  getHizmet(): Cagri {
    return this.hizmet;
  }

}
