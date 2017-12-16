/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CagriDetayPage } from '../cagri-detay/cagri-detay';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CagriAramaModalPage } from './cagri-arama-modal/cagri-arama-modal';
import { CagriProvider } from '../../providers/cagri/cagri';

@IonicPage()
@Component({
  selector: 'page-cagrilar',
  templateUrl: 'cagrilar.html',
})
export class CagrilarPage {

  cagrilar = ['Çagri1', 'Çagri2', 'Çagri3', 'Çagri4', 'Çagri5', 'Çagri6']

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalController: ModalController,
    private cagriProvider: CagriProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagrilarPage');
  }


  public cagriDetayinaGit(event, cagri) {
    event.stopPropagation();
    this.navCtrl.push(CagriDetayPage);
  }

  public cagriSorgula() {
    let aramaModal = this.modalController.create(CagriAramaModalPage);
    aramaModal.present();
  }

  public cagriGuncelle() {
    this.cagriProvider.downloadCagriList().subscribe(res => {
      console.log(res);
    });
  }
}
