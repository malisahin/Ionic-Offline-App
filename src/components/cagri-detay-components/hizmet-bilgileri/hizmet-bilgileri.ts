/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
*/

import { Component } from '@angular/core';
import { HizmetProvider } from '../../../providers/hizmet/hizmet';
import { Cagri } from '../../../entities/cagri/cagri';


@Component({
  selector: 'hizmet-bilgileri',
  templateUrl: 'hizmet-bilgileri.html'
})
export class HizmetBilgileriComponent {

  hizmet: Cagri;
  text: string;

  constructor(public service: HizmetProvider) {
    console.log('Hello HizmetBilgileriComponent Component');
    this.text = 'Hello World';
    this.prepareData();
  }

  prepareData() {
    this.hizmet = this.service.getHizmet();
    console.log("Selam ");
  }

}
