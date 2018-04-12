import { Component } from '@angular/core';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { Constants } from '../../entities/Constants';
import { Urun } from '../../entities/urun';
import { UrunMalzeme } from '../../entities/urun-malzeme';
import { UtilProvider } from '../../providers/util/util';
import { SelectSearchComponent } from '../select-search/select-search';
import { ModalController } from 'ionic-angular';
import { UrunIscilik } from '../../entities/urun-iscilik';


@Component({
  selector: 'fiyat-sorgu',
  templateUrl: 'fiyat-sorgu.html'
})
export class FiyatSorguComponent {

  text: string;
  urunAnaGrup: UrunAnaGrup;
  constants: Constants;
  urun: Urun;
  urunIscilik: UrunIscilik;
  islemTipi: string;
  data: any;
  constructor(private modalController: ModalController, private util: UtilProvider) {
    console.log('Hello FiyatSorguComponent Component');
    this.data = {};
    this.constants = new Constants();
    this.urunAnaGrup = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    this.urun = new Urun();
    this.urunIscilik = new UrunIscilik();
    this.islemTipi = '';
  }

  public urunAnaGrupSorgula() {
    this.data.type = this.constants.DATA_TYPE.URUN_ANA_GRUP;
    let aramaModal = this.modalController.create(SelectSearchComponent, { data: this.data });
    aramaModal.onDidDismiss(data => {
      this.urunAnaGrup = data;
    });
    aramaModal.present();
  }

  public urunSorgula() {

    this.data.type = this.constants.DATA_TYPE.URUN;
    let aramaModal = this.modalController.create(SelectSearchComponent, { data: this.data });
    aramaModal.onDidDismiss(data => {
      this.urun = data;
    });
    aramaModal.present();
  }

  public urunIscilikSorgula() {

    if (this.util.isEmpty(this.urun.mamKod)) {
      this.util.message("Önce ürünü seçiniz.");
      return false;
    }
    this.data.type = this.constants.DATA_TYPE.URUN_ISCILIK;
    this.data.mamKod = this.urun.mamKod;
    let aramaModal = this.modalController.create(SelectSearchComponent, { data: this.data });
    aramaModal.onDidDismiss(data => {
      this.urunIscilik = data;
    });
    aramaModal.present();
  }

  public fiyatSorgula() {
    if (this.islemTipi == 'ISC') {
      this.iscilikFiyatSorgula();
    } else {
      this.malzemeFiyatSorgula();
    }
  }

  private iscilikFiyatSorgula() {
    if (this.util.isEmpty(this.urun.mamKod) || this.util.isEmpty(this.urunIscilik.iscKod)) {
      this.util.message("Önce İşçilik/Malzeme seçiniz.");
    }
  }

  private malzemeFiyatSorgula() {
    if (this.util.isEmpty(this.urun.mamKod)) {
      this.util.message("Önce Ürün/Kodu seçiniz.");
    }
  }


}
