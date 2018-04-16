import { Component } from '@angular/core';
import { DetayKayit } from "../../entities/hizmet/DetayKayit";
import { ViewController, NavParams, ModalController } from "ionic-angular";
import { UtilProvider } from '../../providers/util/util';
import { LoggerProvider } from '../../providers/logger/logger';
import { Constants } from '../../entities/Constants';
import { DetayPiySearchComponent } from '../detay-piy-search/detay-piy-search';


@Component({
  selector: 'hizmet-detay',
  templateUrl: 'hizmet-detay.html'
})
export class HizmetDetayComponent {

  text: string;
  private hizmetDetay: DetayKayit;
  data: any;
  constants: Constants;
  islemAdi: string = "";
  arizaAdi: string = "";
  constructor(private viewCtrl: ViewController,
    private params: NavParams,
    private modalController: ModalController,
    private util: UtilProvider,
    private logger: LoggerProvider) {
    //console.log('Hello HizmetDetayComponent Component');

    this.hizmetDetay = new DetayKayit();
    this.data = params.get('data');
  }

  detayKaydet() {
    /*if (res.responseCode == "SUCCESS") {
      let aramaModal = this.modalController.create(GarantiSonucComponent, { data: res.message });
      aramaModal.present();
    } else {
      this.util.message(res.description);
    }*/
  }


  IslemArizaIscilikBul(tip: string) {

    let piyModal = this.modalController.create(DetayPiySearchComponent, {
      data: {
        dataType: tip,
        filter: this.hizmetDetay
      }
    });
    piyModal.onDidDismiss(res => {
      this.logger.dir(res);

      if (tip == "ISLEM") {
        this.hizmetDetay.islemKod = res.data.key;
        this.islemAdi = res.data.key + " - " + res.data.value;
      }

      if (tip == "ARIZA") {
        this.hizmetDetay.arizaKod = res.data.key;
        this.arizaAdi = res.data.key + " - " + res.data.value;
      }

      if (tip == "PIY") {
        this.hizmetDetay.islemKod;
      }
    });
    piyModal.present();
  }




  closeModal() {
    this.viewCtrl.dismiss();
  }
}
