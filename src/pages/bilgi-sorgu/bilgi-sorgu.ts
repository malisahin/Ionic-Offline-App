import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-bilgi-sorgu',
  templateUrl: 'bilgi-sorgu.html',
})
export class BilgiSorguPage {
  private bilgiSorguForm: FormGroup;
  activePage: string = "garantiSorguSegment";

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.bilgiSorguForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilgiSorguPage');
  }

}
