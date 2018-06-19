import {Injectable} from '@angular/core';
import {AlertController, Platform} from "ionic-angular";
import {Constants} from "../../entities/Constants";

@Injectable()
export class HeaderProvider {

  constructor(private alert: AlertController,
              private platform: Platform) {
  }


  closeApplicationConfirm() {
    let alert = this.alert.create({
      title: "Confirm",
      message: "Çıkmak istediğinizden emin misiniz?",
      enableBackdropDismiss: true
      ,
      buttons: [{
        text: "Evet",
        handler: () => this.platform.exitApp()
      }, {
        text: "Hayır",
        role: 'cancel'
      }]
    });
    alert.present();
  }

  loadGuncellemeSayisi(): number {
    let guncellemeSayisi = 10;
    let tables: string[] = ['URUN', 'URUN_ANA_GRUP', 'URUN_ISCILIK',
      'URUN_MALZEME', 'ISLEM_ARIZA_ISCILIK', 'MALZEME_FIYAT',
      'ISCILIK_FIYAT', 'SEHIR_TNM', 'ILCE_TNM', 'MAHALLE_TNM'];

    for (let i = 0; i < tables.length; i++) {
      let item = tables[i];
      let serverVersiyon = localStorage.getItem(Constants.VERSIYON.SERVER[item]);
      let clientVersiyon = localStorage.getItem(Constants.VERSIYON.CLIENT[item]);

      if ((serverVersiyon == clientVersiyon) && serverVersiyon != "-1") {
        guncellemeSayisi -= 1;
      }
    }

    return guncellemeSayisi;
  }
}
