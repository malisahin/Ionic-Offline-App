import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello DetayBilgileriComponent Component');
    this.text = 'Hello World';
  }

}
