import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CagriDetayPage } from '../cagri-detay/cagri-detay';
import { ViewChild } from '@angular/core/src/metadata/di';

/**
 * Generated class for the CagrilarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cagrilar',
  templateUrl: 'cagrilar.html',
})
export class CagrilarPage {

  cagrilar = ['Çagri1', 'Çagri2', 'Çagri3', 'Çagri4', 'Çagri5', 'Çagri6']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagrilarPage');
  }


  public cagriDetayinaGit(event, cagri) {
    event.stopPropagation();
    this.navCtrl.push(CagriDetayPage);
  }
}
