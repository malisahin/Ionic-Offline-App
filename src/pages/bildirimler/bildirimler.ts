/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MesajlarProvider } from '../../providers/mesajlar/mesajlar';

@IonicPage()
@Component({
  selector: 'page-bildirimler',
  templateUrl: 'bildirimler.html',
})
export class BildirimlerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private mesajProvider: MesajlarProvider) {
    this.mesajProvider.getDataFromApi().then(res => {
      console.dir(res);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BildirimlerPage');
  }

}
