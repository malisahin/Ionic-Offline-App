import { Component } from '@angular/core';

/**
 * Generated class for the HizmetBilgileriComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hizmet-bilgileri',
  templateUrl: 'hizmet-bilgileri.html'
})
export class HizmetBilgileriComponent {

  text: string;

  constructor() {
    console.log('Hello HizmetBilgileriComponent Component');
    this.text = 'Hello World';
  }

}
