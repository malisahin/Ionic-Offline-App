import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ServisBilgileriComponent Component');
    this.text = 'Hello World';
  }

}
