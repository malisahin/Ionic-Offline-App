/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
*/

import { Component } from '@angular/core';
import { HizmetProvider } from '../../../providers/hizmet/hizmet';
import { Hizmet } from '../../../entities/hizmet/hizmet';
import { HizmetService } from '../../../providers/hizmet-service/hizmet-service';


@Component({
  selector: 'hizmet-bilgileri',
  templateUrl: 'hizmet-bilgileri.html'
})
export class HizmetBilgileriComponent {

  hizmet: Hizmet;
  text: string;

  constructor(public hizmetService: HizmetService) {
    console.log('Hello HizmetBilgileriComponent Component');
    this.text = 'Hello World';
    this.prepareData();
    this.hizmet = new Hizmet();
  }

  prepareData() {
    this.hizmet = this.hizmetService.getHizmet();
    console.log("Selam ");
  }

}
