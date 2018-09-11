import {Injectable} from '@angular/core';
import {AlertController, Platform} from "ionic-angular";
import {Constants} from "../../entities/Constants";
import {BaseProvider} from "../base/base";
import {LoggerProvider} from "../logger/logger";
import {ApiProvider} from "../api/api";
import {UtilProvider} from "../util/util";

declare let window: any;

@Injectable()
export class HeaderProvider extends BaseProvider {

  constructor(private alert: AlertController,
              private logger: LoggerProvider,
              private util: UtilProvider,
              private platform: Platform) {
    super();
  }


  closeApplicationConfirm() {
    let alert = this.alert.create({
      title: "Çıkmak istediğinizden emin misiniz?",
      enableBackdropDismiss: true
      ,
      buttons: [{
        text: "Evet",
        handler: () => {
          this.platform.exitApp();

          if (this.isNotEmpty(window.navigator)
            && this.isNotEmpty(window.navigator.app))
            window.navigator['app'].exitApp();
          else
            this.logger.warn("Navigator.app.exitApp() is not found.")


        }
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

      if (this.util.isNotEmpty(serverVersiyon)) {
        if ((serverVersiyon == clientVersiyon)) {
          guncellemeSayisi -= 1;
        }

      } else if ((serverVersiyon == clientVersiyon) && serverVersiyon != "-1") {
        guncellemeSayisi -= 1;
      }
    }

    return guncellemeSayisi;
  }
}
