import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * @author mali.sahin
 * @since 19.05.2018
 */


@IonicPage()
@Component({
  selector: 'page-anasayfa',
  templateUrl: 'anasayfa.html',
})
export class Anasayfa {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Anasayfa');
  }

  sayfayaGit(page) {
    this.navCtrl.push(page);
  }

}
