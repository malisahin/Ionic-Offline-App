/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { Hizmet } from '../../../entities/hizmet/hizmet';


@Component({
  selector: 'detay-bilgileri',
  templateUrl: 'detay-bilgileri.html'
})
export class DetayBilgileriComponent {
  showDetails: number = 1;
  text: string;
  hizmet: Hizmet;

  constructor() {
    console.log('Hello DetayBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Hizmet();
  }

  toggleDetails() {
    this.showDetails = -1 * this.showDetails;
  }
}
