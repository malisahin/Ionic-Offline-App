import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'select-search',
  templateUrl: 'select-search.html'
})
export class SelectSearchComponent {

  text: string;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    console.log('Hello SelectSearchComponent Component');
    this.text = 'Hello World';
    params.get('');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
