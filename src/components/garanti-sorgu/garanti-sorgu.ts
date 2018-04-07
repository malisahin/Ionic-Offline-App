import { Component } from '@angular/core';



@Component({
  selector: 'garanti-sorgu',
  templateUrl: 'garanti-sorgu.html'
})
export class GarantiSorguComponent {

  text: string;
  mamKod: string;
  constructor() {
    console.log('Hello GarantiSorguComponent Component');
    this.text = 'Hello World';
  }

}
