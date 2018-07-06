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
import { IslemArizaIscilikDao } from "../../providers/islem-ariza-iscilik-dao/islem-ariza-iscilik-dao";
import { IslemArizaIscilik } from "../../entities/islem-ariza-iscilik";


@Component({
  selector: 'hizmet-detay',
  templateUrl: 'hizmet-detay.html',


})
export class HizmetDetayComponent {
  // <hizmet-detay></hizmet-detay>
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
    private islemArizaIscilikDao: IslemArizaIscilikDao,
    private hizmetService: HizmetService) {

    this.hizmet = this.hizmetService.getHizmet();
    this.hizmetDetay = new DetayKayit();
    this.data = params.get('data');
    this.detayTutari = new Fiyat();
    this.init();
  }

  init() {
    if (this.util.isNotEmpty(this.data.hizmetDetay)) {
      this.hizmetDetay = this.data.hizmetDetay;
      this.islemAdi = this.hizmetDetay.islemKod;
      this.arizaAdi = this.hizmetDetay.arizaKod;
      this.mlzIscAdi = this.hizmetDetay.mlzIscKod;
      this.birimfiyat = this.hizmetDetay.tutar / this.hizmetDetay.miktar;
      this.loadHizmetDetay();
    }
  }


  async detayKaydet() {

    if (this.util.isEmpty(this.hizmetDetay.satirNo)) {
      await this.fiyatBul();
      if (this.util.isNotEmpty(this.hizmetDetay.tutar)) {

        if (this.util.isEmpty(this.hizmet.detayDtoList))
          this.hizmet.detayDtoList = [];

        this.hizmetDetay.seqNo = this.hizmet.seqNo;
        this.hizmet.detayDtoList.push(this.hizmetDetay);
        this.satirNoBelirle();
      }
    }
    else {
      this.hizmet.detayDtoList.filter(det => {
        if (det.satirNo) {
          det = this.hizmetDetay;
        }
      });
    }
    let result = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
    this.logger.dir(result);


    this.closeModal();
  }

  satirNoBelirle() {
    for (let i = 0; i < this.hizmet.detayDtoList.length; i++) {
      this.hizmet.detayDtoList[i].satirNo = i;
    }
  }

  async fiyatBul() {
    if (this.hizmetDetay.mlzIsc != "DGR") {
      this.detayTutari.mamKod = this.hizmet.mamKod;
      this.detayTutari.iscMlzKod = this.hizmetDetay.mlzIscKod;
      let fiyatRes = await this.fiyatDao.findFiyat(this.detayTutari);
      if (fiyatRes.rows.length > 0) {
        this.hizmetDetay.birimFiyat = fiyatRes.rows.item(0).fiyat;
        this.hizmetDetay.garFiyat = fiyatRes.rows.item(0).gdfiyat;
        this.hizmetDetay.tutar = this.hizmetDetay.miktar * this.hizmetDetay.birimFiyat;
      } else {
        this.util.message("Fiyat Bulunamadı");
      }
    }
    else
      this.hizmetDetay.tutar = this.hizmetDetay.miktar * this.birimfiyat;
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


  async loadHizmetDetay() {
    let islemArizaIscilik = new IslemArizaIscilik();
    islemArizaIscilik.mamAnaGrp = this.hizmet.mamAnaGrp;
    islemArizaIscilik.islGrp = this.hizmetDetay.islemKod;
    islemArizaIscilik.arzGrp = this.hizmetDetay.arizaKod;
    islemArizaIscilik.iscKod = this.hizmetDetay.mlzIscKod;
    await this.islemArizaIscilikDao.getIslemGrup(islemArizaIscilik).then(query => {
      this.logger.warn(query);
      if (this.util.isNotEmpty(query) && query.rows.length > 0) {
        let item = query.rows.item(0);
        this.islemAdi = item.islemGrp + " - " + item.islemGrpAdi;
      }
    });

    await this.islemArizaIscilikDao.getArizaGrup(islemArizaIscilik).then(query => {
      this.logger.warn(query);
      if (this.util.isNotEmpty(query) && query.rows.length > 0) {
        let item = query.rows.item(0);
        this.arizaAdi = item.arizaGrp + " - " + item.arizaGrpAdi;
      }
    });

    this.mlzIscAdi = this.mlzIscAdi + " - " + this.hizmetDetay.aciklama;

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
