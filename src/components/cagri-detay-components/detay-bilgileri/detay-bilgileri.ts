import { Component } from '@angular/core';
import { Cagri } from '../../../entities/cagri/cagri';

/**
 * Generated class for the DetayBilgileriComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detay-bilgileri',
  templateUrl: 'detay-bilgileri.html'
})
export class DetayBilgileriComponent {
  showDetails: number = 1;
  text: string;
  hizmet: Cagri;

  constructor() {
    console.log('Hello DetayBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Cagri();
  }

  toggleDetails() {
    this.showDetails = -1 * this.showDetails;
  }
}
