/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { Hizmet } from '../../../entities/hizmet/hizmet';
import { HizmetService } from '../../../providers/hizmet-service/hizmet-service';


@Component({
  selector: 'detay-bilgileri',
  templateUrl: 'detay-bilgileri.html'
})
export class DetayBilgileriComponent {
  showDetails: number = 1;
  text: string;
  hizmet: Hizmet = new Hizmet();

  constructor(private hizmetService: HizmetService) {
    console.log('Hello DetayBilgileriComponent Component');
    this.text = 'Hello World';
     this.hizmet = this.hizmetService.getHizmet();
  }

  toggleDetails() {
    this.showDetails = -1 * this.showDetails;
  }
}
