import { Component } from '@angular/core';

/**
 * Generated class for the UrunBilgileriComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'urun-bilgileri',
  templateUrl: 'urun-bilgileri.html'
})
export class UrunBilgileriComponent {

  text: string;

  constructor() {
    console.log('Hello UrunBilgileriComponent Component');
    this.text = 'Hello World';
  }

}
