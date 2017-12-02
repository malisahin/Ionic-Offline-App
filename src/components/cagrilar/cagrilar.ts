import { Component } from '@angular/core';

/**
 * Generated class for the CagrilarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cagrilar',
  templateUrl: 'cagrilar.html'
})
export class CagrilarComponent {

  text: string;

  constructor() {
    console.log('Hello CagrilarComponent Component');
    this.text = 'Hello World';
  }

}
