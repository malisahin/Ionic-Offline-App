import { Component } from '@angular/core';

/**
 * Generated class for the ServisIslemTarihceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'servis-islem-tarihce',
  templateUrl: 'servis-islem-tarihce.html'
})
export class ServisIslemTarihceComponent {

  text: string;

  constructor() {
    console.log('Hello ServisIslemTarihceComponent Component');
    this.text = 'Hello World';
  }

}
