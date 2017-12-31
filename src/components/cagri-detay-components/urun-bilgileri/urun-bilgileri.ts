import { Component } from '@angular/core';
import { Cagri } from '../../../entities/cagri/cagri';



@Component({
  selector: 'urun-bilgileri',
  templateUrl: 'urun-bilgileri.html'
})
export class UrunBilgileriComponent {
  text: string;
  hizmet: Cagri;

  constructor() {
    console.log('Hello UrunBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Cagri();
  }
}
