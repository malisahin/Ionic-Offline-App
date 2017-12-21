/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { Cagri } from '../../../entities/cagri/cagri';

@Component({
  selector: 'musteri-bilgileri',
  templateUrl: 'musteri-bilgileri.html'
})
export class MusteriBilgileriComponent {

  text: string;
  hizmet: Cagri;

  constructor() {
    console.log('Hello MusteriBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Cagri();
  }

  deneme() {

  }

}
