import {Component} from '@angular/core';
import {DetayKayit} from "../../entities/hizmet/DetayKayit";
import {ViewController, NavParams, ModalController} from "ionic-angular";
import {UtilProvider} from '../../providers/util/util';
import {LoggerProvider} from '../../providers/logger/logger';
import {Constants} from '../../entities/Constants';
import {DetayPiySearchComponent} from '../detay-piy-search/detay-piy-search';
import {FiyatDao} from '../../providers/fiyat-dao/fiyat-dao';
import {Fiyat} from '../../entities/fiyat';
import {HizmetService} from '../../providers/hizmet-service/hizmet-service';
import {Hizmet} from '../../entities/hizmet/hizmet';
import {IslemArizaIscilikDao} from "../../providers/islem-ariza-iscilik-dao/islem-ariza-iscilik-dao";
import {IslemArizaIscilik} from "../../entities/islem-ariza-iscilik";
import {ProcessResults} from "../../entities/ProcessResults";


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
  birimfiyat: number;
  piyTutari: any;
  hizmet: Hizmet;
  islemTipi: string = "";
  mlzIscKod: string = "";
  aciklama: string = "";
  canModalCloseable: boolean = true;
  satirNo: number;
  islemTipiDegistirmeSayisi: number = 0;

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
    this.init();
  }

  init() {
    if (this.util.isNotEmpty(this.data.hizmetDetay)) {
      this.prepareFieldsForUpdate();
    } else {
      this.prepareFieldsForNewRecord();
    }
  }

  prepareFieldsForUpdate() {
    this.hizmetDetay = this.data.hizmetDetay;
    this.islemAdi = this.hizmetDetay.islemKod;
    this.arizaAdi = this.hizmetDetay.arizaKod;
    this.mlzIscKod = this.hizmetDetay.mlzIscKod;
    this.birimfiyat = this.hizmetDetay.tutar / this.hizmetDetay.miktar;
    this.aciklama = this.hizmetDetay.aciklama;
    this.satirNo = this.hizmetDetay.satirNo;
    this.loadHizmetDetay();
  }

  prepareFieldsForNewRecord() {
    let dtoList = this.hizmet.detayDtoList;
    if (this.util.isNotEmpty(dtoList) && dtoList.length > 0) {
      dtoList.forEach((item) => {
        if (item.mlzIsc == Constants.DETAY_TIPI.ISCILIK) {
          this.hizmetDetay.islemKod = item.islemKod;
          this.hizmetDetay.arizaKod = item.arizaKod;
          this.loadHizmetDetay();
        }
      });
    }
  }


  async detayKaydet() {
    let res = this.kaydetmeKontrol();

    if (res.isErrorMessagesNotNull()) {
      this.canModalCloseable = false;
      this.util.pushAllMessages(res);

    } else if (this.util.isEmpty(this.hizmetDetay.satirNo)) {
      await this.yeniDetayKaydet();
    }
    else {
      await this.detayGuncelle();
    }

    if (this.canModalCloseable) {
      this.hizmetService.saveAndFetchHizmet(this.hizmet).then(res => {
        this.logger.dir(res);
        this.closeModal();
      });

    }
  }

  async yeniDetayKaydet() {
    await this.fiyatBul();
    if (this.util.isNotEmpty(this.hizmetDetay.tutar)) {

      if (this.util.isEmpty(this.hizmet.detayDtoList))
        this.hizmet.detayDtoList = [];

      this.hizmetDetay.seqNo = this.hizmet.seqNo;
      this.satirNoBelirle();

      if (this.util.isNotEmpty(this.hizmetDetay.birimFiyat) && this.hizmetDetay.birimFiyat > 0)
        this.hizmet.detayDtoList.push(this.hizmetDetay);

    }
  }

  async detayGuncelle() {

    let silinecekDetayKayit: DetayKayit = new DetayKayit();
    debugger;

    this.hizmet.detayDtoList.filter(det => {
      if (det.satirNo == this.satirNo) {
        silinecekDetayKayit = det;
        // det = this.fillHizmetDetay();
      }
    });

    this.deleteHizmetDetay(silinecekDetayKayit);
    await this.yeniDetayKaydet();
  }

  deleteHizmetDetay(item: any) {
    let index = this.hizmet.detayDtoList.indexOf(item);

    if (index > -1) {
      this.hizmet.detayDtoList.splice(index, 1);
    }
  }

  fillHizmetDetay(): DetayKayit {
    let detay = new DetayKayit();
    let hizmetDetay = JSON.parse(JSON.stringify(this.hizmetDetay));
    detay.satirNo = this.satirNo;
    detay.birimFiyat = hizmetDetay.birimFiyat;
    detay.garFiyat = hizmetDetay.garFiyat;
    detay.tutar = hizmetDetay.tutar;
    detay.islemKod = hizmetDetay.islemKod;
    detay.arizaKod = hizmetDetay.arizaKod;
    detay.mlzIscKod = hizmetDetay.mlzIscKod;
    detay.aciklama = hizmetDetay.aciklama;
    detay.miktar = hizmetDetay.miktar;
    detay.garFiyat = hizmetDetay.garFiyat;
    detay.birimFiyat = hizmetDetay.birimFiyat;
    detay.tutar = hizmetDetay.tutar;
    detay.garTutar = hizmetDetay.garTutar;
    return detay;
  }

  satirNoBelirle() {
    debugger;
    let maxSatirNo = 0;
    for (let i = 0; i < this.hizmet.detayDtoList.length; i++) {
      let currentSatirNo = this.hizmet.detayDtoList[i].satirNo;
      if (currentSatirNo > maxSatirNo)
        maxSatirNo = currentSatirNo;
    }

    this.hizmetDetay.satirNo = maxSatirNo + 1;


  }

  async fiyatBul() {
    if (this.hizmetDetay.mlzIsc != "DGR") {
      let fiyatSorguParam = this.fiyatSorguParametreHazirla();
      let fiyatRes = await this.fiyatDao.findFiyat(fiyatSorguParam);
      if (fiyatRes.rows.length > 0) {
        let item = fiyatRes.rows.item(0);
        this.logger.table(item);
        this.hizmetDetay.birimFiyat = item.fiyat;
        this.hizmetDetay.garFiyat = item.gdfiyat;
        this.hizmetDetay.tutar = Number(this.hizmetDetay.miktar) * Number(this.hizmetDetay.birimFiyat);

      } else {
        this.util.info("Fiyat Bulunamadı");
        this.canModalCloseable = false;
      }
    }
    else {
      this.hizmetDetay.tutar = Number(this.hizmetDetay.miktar) * Number(this.hizmetDetay.birimFiyat);
    }
  }

  fiyatSorguParametreHazirla(): Fiyat {
    let item = new Fiyat();
    item.mamKod = this.hizmetDetay.mlzIsc == 'MLZ' ? 'MLZ' : this.hizmet.mamKod;
    item.iscMlzKod = this.hizmetDetay.mlzIscKod;
    return item;
  }

  kaydetmeKontrol(): ProcessResults {
    let res = new ProcessResults();
    if (this.util.isEmpty(this.hizmetDetay.islemKod)) {
      res.addErrorMessage("Lütfen işlem Kodu seçiniz.")
    }

    if (this.util.isEmpty(this.hizmetDetay.arizaKod)) {
      res.addErrorMessage("Lütfen Arıza kodu seçiniz");
    }

    if (this.util.isEmpty(this.hizmetDetay.mlzIscKod)) {
      res.addErrorMessage("Lütfen Parça/Işçilik/Yol seçiniz.")
    }

    return res;
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

        this.hizmetDetay.arizaKod = "";
        this.hizmetDetay.mlzIscKod = "";
        this.hizmetDetay.aciklama = "";
        this.arizaAdi = "";
        this.mlzIscKod = "";
        this.aciklama = ""
      }

      if (tip == "ARIZA") {
        this.hizmetDetay.arizaKod = res.data.key;
        this.arizaAdi = res.data.key + " - " + res.data.value;

        this.hizmetDetay.mlzIscKod = "";
        this.hizmetDetay.aciklama = "";
        this.mlzIscKod = "";
        this.aciklama = ""
      }

      if (tip == "PIY") {
        this.hizmetDetay.mlzIscKod = res.data.key;
        this.hizmetDetay.aciklama = res.data.value;
        this.mlzIscKod = res.data.key;
        this.aciklama = res.data.value;
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

        this.mlzIscKod = this.hizmetDetay.mlzIscKod;
        this.aciklama = this.hizmetDetay.aciklama;
      }
    });


  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  onChangeIslemTipi() {
    this.hizmetDetay.birimFiyat = null;
    this.hizmetDetay.garFiyat = null;
    this.hizmetDetay.tutar = null;

    if (this.islemTipiDegistirmeSayisi > 0) {
      this.hizmetDetay.islemKod = "";
      this.hizmetDetay.arizaKod = "";

      this.islemAdi = "";
      this.arizaAdi = "";
    }
    this.hizmetDetay.mlzIscKod = "";
    this.hizmetDetay.aciklama = "";
    this.hizmetDetay.miktar = 1;
    this.hizmetDetay.garFiyat = "1";
    this.hizmetDetay.birimFiyat = 1;
    this.hizmetDetay.tutar = 0;
    this.hizmetDetay.garTutar = "0";

    this.mlzIscKod = "";
    this.aciklama = "";
    this.islemTipiDegistirmeSayisi += 1;
  }

  onChangeIslemKodu() {

  }

  onChangeArizaKodu() {

  }

  onChangeMlzIscKod() {
  }


}
