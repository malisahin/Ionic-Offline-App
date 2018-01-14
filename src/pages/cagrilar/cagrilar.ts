/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CagriDetayPage } from '../cagri-detay/cagri-detay';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CagriAramaModalPage } from './cagri-arama-modal/cagri-arama-modal';
import { HizmetProvider } from '../../providers/hizmet/hizmet';
import { MockCagriList } from '../../entities/hizmet/cagriList-mock';
import { TokenProvider } from '../../providers/token/token';

@IonicPage()
@Component({
  selector: 'page-cagrilar',
  templateUrl: 'cagrilar.html',
})
export class CagrilarPage {
  mockData = new MockCagriList();
  cagrilar: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalController: ModalController,
    private cagriProvider: HizmetProvider,
    private token: TokenProvider) {
    this.cagrilar = this.mockData.cagriList;
    let tokenUrl = this.token.getToken("", "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagrilarPage');
  }


  public cagriDetayinaGit(event, seqNo) {
    event.stopPropagation();
    let params = { seqNo: seqNo };

    this.navCtrl.push(CagriDetayPage, params);
  }

  public cagriSorgula() {
    let aramaModal = this.modalController.create(CagriAramaModalPage);
    aramaModal.present();
  }

  public cagriGuncelle() {

    this.cagriProvider.downloadCagriList();
  }
}
