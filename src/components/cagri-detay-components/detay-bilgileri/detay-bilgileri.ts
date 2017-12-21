import { Component } from '@angular/core';
import { Cagri } from '../../../entities/cagri/cagri';
import { TasiyiciProvider } from '../../../providers/tasiyici/tasiyici';

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

  constructor(private tasiyici: TasiyiciProvider) {
    console.log('Hello DetayBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = this.tasiyici.getHizmet();

  }

  toggleDetails() {
    this.showDetails = -1 * this.showDetails;
  }
}
