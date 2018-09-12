import {Component} from '@angular/core';
import {UtilProvider} from "../../providers/util/util";
import {Logger} from "@ionic/app-scripts/dist/logger/logger";
import {LoggerProvider} from "../../providers/logger/logger";
import {FiyatProvider} from "../../providers/fiyat/fiyat";
import {NavParams, ViewController} from "ionic-angular";
import {UrunMalzemeIscilikFiyat} from "../../entities/UrunMalzemeIscilikFiyat";
import {ProcessResults} from "../../entities/ProcessResults";
import {ThemeProvider} from "../../providers/theme/theme";
import {Urun} from "../../entities/urun";
import {UrunMalzeme} from "../../entities/urun-malzeme";

/**
 *
 */
@Component({
  selector: 'urun-malzeme-iliskisi-sorgu-sonuc',
  templateUrl: 'urun-malzeme-iliskisi-sorgu-sonuc.html'
})
export class UrunMalzemeIliskisiSorguSonucComponent {

  data: any = {};
  sonucList: UrunMalzemeIscilikFiyat[];
  tip: string = "";
  backGroundImage = "";
  urun: Urun = new Urun();
  malzeme: UrunMalzeme = new UrunMalzeme();

  constructor(private  util: UtilProvider,
              private logger: LoggerProvider,
              private  fiyatProvider: FiyatProvider,
              private viewCtrl: ViewController,
              private theme: ThemeProvider,
              private navParams: NavParams) {
    this.data = navParams.get("data");
    this.tip = this.data.tip;
    this.backGroundImage = this.theme.getBackgroundImage();
  }

  ionViewDidLoad() {
    this.sonucList = [];

    this.getSonucList();
  }

  async getSonucList() {

    if (this.tip == "URUN")
      this.sonucList = await this.fiyatProvider.getUrunMalzemeIscilikFiyatList(this.data.urun.mamKod);


    else if (this.tip == "MLZ") {
      this.sonucList = await this.fiyatProvider.getMalzemeIliskiliMalzemeUrunFiyatList(this.data.malzeme.mlzKod);
    }

    this.sonucList.forEach((value, index) => {
      value.fiyat = value.fiyat = Number((Number(value.fiyat) * 1.18).toFixed(2));
      if (index < 1) {
        if (this.tip == "URUN") {
          this.urun.mamKod = value.mamKod;
          this.urun.mamAdi = value.mamAdi;
        } else if (this.tip == "MLZ") {
          this.malzeme.mlzKod = value.mlzKod;
          this.malzeme.mlzAdi = value.mlzAdi
        }
      }
    });

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
