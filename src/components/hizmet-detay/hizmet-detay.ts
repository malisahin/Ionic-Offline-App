import { Component } from '@angular/core';
import { DetayKayit } from "../../entities/hizmet/DetayKayit";
import { ViewController, NavParams, ModalController } from "ionic-angular";
import { UtilProvider } from '../../providers/util/util';
import { LoggerProvider } from '../../providers/logger/logger';
import { Constants } from '../../entities/Constants';
import { DetayPiySearchComponent } from '../detay-piy-search/detay-piy-search';
import { FiyatDao } from '../../providers/fiyat-dao/fiyat-dao';
import { Fiyat } from '../../entities/fiyat';
import { HizmetService } from '../../providers/hizmet-service/hizmet-service';
import { Hizmet } from '../../entities/hizmet/hizmet';


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
  mlzIscAdi: string = "";
  birimfiyat: number;
  piyTutari: any;
  detayTutari: Fiyat;
  hizmet: Hizmet;
  islemTipi: string = "";
  constructor(private viewCtrl: ViewController,
    private params: NavParams,
    private modalController: ModalController,
    private util: UtilProvider,
    private logger: LoggerProvider,
    private fiyatDao: FiyatDao,
    private hizmetService: HizmetService) {

    this.hizmet = this.hizmetService.getHizmet();
    this.hizmetDetay = new DetayKayit();
    this.data = params.get('data');
    this.detayTutari = new Fiyat();
  }

  async detayKaydet() {

    if (this.hizmetDetay.mlzIsc != "DGR") {
      let fiyatItem = await this.fiyatBul();
      this.hizmetDetay.tutar = this.hizmetDetay.miktar * fiyatItem.fiyat;
    }
    else
      this.hizmetDetay.tutar = this.hizmetDetay.miktar * this.birimfiyat;
    this.logger.dir(this.hizmetDetay);

    this.hizmet.detayList[0].push(this.hizmetDetay);
    let result = await this.hizmetService.saveHizmet();
    this.logger.dir(result);

    this.closeModal()
  }

  async fiyatBul() {
    this.detayTutari.mamKod = this.hizmet.mamKod;
    this.detayTutari.iscMlzKod = this.hizmetDetay.mlzIscKod;
    let fiyatRes = await this.fiyatDao.findfiyat(this.detayTutari);
    this.logger.dir(fiyatRes);
    if (fiyatRes.rows.length > 0)
      return fiyatRes.rows.item(0);
    else {
      return this.constants.STATUS.ERROR
    }
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
        this.hizmetDetay.mlzIscKod = res.data.key;
        this.hizmetDetay.aciklama = res.data.value;
        this.mlzIscAdi = res.data.key + " - " + res.data.value;
      }
    });
    piyModal.present();
  }




  closeModal() {
    this.viewCtrl.dismiss();
  }
}
