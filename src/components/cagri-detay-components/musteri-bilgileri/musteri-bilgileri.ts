import { Component } from '@angular/core';

/**
 * Generated class for the MusteriBilgileriComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'musteri-bilgileri',
  templateUrl: 'musteri-bilgileri.html'
})
export class MusteriBilgileriComponent {

  text: string;

  constructor() {
    console.log('Hello MusteriBilgileriComponent Component');
    this.text = 'Hello World';
  }

}
