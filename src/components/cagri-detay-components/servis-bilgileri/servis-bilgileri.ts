import { Component } from '@angular/core';
import { Cagri } from '../../../entities/cagri/cagri';

/**
 * Generated class for the ServisBilgileriComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'servis-bilgileri',
  templateUrl: 'servis-bilgileri.html'
})
export class ServisBilgileriComponent {

  activePage: string = "servis";
  text: string;
  hizmet: Cagri;

  constructor() {
    console.log('Hello ServisBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Cagri();
  }

}
