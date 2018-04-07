import { Component } from '@angular/core';

/**
 * Generated class for the FiyatSorguComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fiyat-sorgu',
  templateUrl: 'fiyat-sorgu.html'
})
export class FiyatSorguComponent {

  text: string;

  constructor() {
    console.log('Hello FiyatSorguComponent Component');
    this.text = 'Hello World';
  }

}
