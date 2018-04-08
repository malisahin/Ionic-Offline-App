import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-bilgi-sorgu',
  templateUrl: 'bilgi-sorgu.html',
})
export class BilgiSorguPage {
  activePage: string = "garantiSorguSegment";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilgiSorguPage');
  }

}
