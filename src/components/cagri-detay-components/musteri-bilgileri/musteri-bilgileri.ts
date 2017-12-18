/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';

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
