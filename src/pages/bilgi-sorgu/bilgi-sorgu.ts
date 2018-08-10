import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ThemeProvider } from '../../providers/theme/theme';



@IonicPage()
@Component({
  selector: 'page-bilgi-sorgu',
  templateUrl: 'bilgi-sorgu.html',
})
export class BilgiSorguPage {
  activePage: string = "garantiSorguSegment";
  backGroundImage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private themeProvider: ThemeProvider) {
    this.backGroundImage = this.themeProvider.getBackgroundImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilgiSorguPage');
  }

}
