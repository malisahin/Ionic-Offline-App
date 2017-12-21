import { Component } from '@angular/core';




@Component({
  selector: 'islem-tarih',
  templateUrl: 'islem-tarih.html'
})
export class IslemTarihComponent {

  text: string;

  constructor() {
    console.log('Hello IslemTarihComponent Component');
    this.text = 'Hello World';
  }

}
