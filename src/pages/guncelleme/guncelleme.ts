import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';

/**
 * Generated class for the GuncellemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guncelleme',
  templateUrl: 'guncelleme.html',
})
export class GuncellemePage {
  isAndroid: boolean = false;
  activePage: string = "guncelleme";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform) {
    this.isAndroid = platform.is('android');
    this.activePage = "guncelleme";
  }


}
