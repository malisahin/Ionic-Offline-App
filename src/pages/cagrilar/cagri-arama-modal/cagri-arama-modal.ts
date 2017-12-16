/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-cagri-arama-modal',
  templateUrl: 'cagri-arama-modal.html',
})
export class CagriAramaModalPage {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagriAramaModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
