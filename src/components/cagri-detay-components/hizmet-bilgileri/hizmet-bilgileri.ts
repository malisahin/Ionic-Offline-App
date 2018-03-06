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

  hizmet: Hizmet = new Hizmet();
  text: string;

  constructor(public hizmetService: HizmetService) {
    console.log('Hello HizmetBilgileriComponent Component');
    this.text = 'Hello World';
    this.fetchHizmet();

  }

  fetchHizmet() {
    if (this.hizmet.seqNo == null || this.hizmet.seqNo == "") {
      this.hizmet =  this.hizmetService.getHizmet();
    }
  }

}
