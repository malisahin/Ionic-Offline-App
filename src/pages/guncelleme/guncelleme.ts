/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UrunProvider} from '../../providers/urun/urun';
import {UrunAnaGrpProvider} from '../../providers/urun-ana-grp/urun-ana-grp';
import {UrunIscilikProvider} from '../../providers/urun-iscilik/urun-iscilik';
import {UrunMalzemeProvider} from '../../providers/urun-malzeme/urun-malzeme';
import {FiyatProvider} from '../../providers/fiyat/fiyat';
import {IslemArizaIscilikProvider} from '../../providers/islem-ariza-iscilik/islem-ariza-iscilik';
import {Constants} from '../../entities/Constants';
import {AdresProvider} from '../../providers/adres/adres';
import {LoggerProvider} from '../../providers/logger/logger';
import {UtilProvider} from '../../providers/util/util';
import {HeaderComponent} from "../../components/header/header";
import {VersiyonProvider} from "../../providers/versiyon/versiyon";
import {TasksProvider} from "../../providers/tasks/tasks";


@IonicPage()
@Component({
  selector: 'page-guncelleme',
  templateUrl: 'guncelleme.html',
})
export class GuncellemePage {
  isAndroid: boolean = false;
  activePage: string = "guncelleme";
  pageSize = 10000;
  firstForUrunIscilik: number;
  firstForUrunMalzeme: number;
  firstForUrunler: number;
  firstForIslemArizaIscilik: number;
  firstForIscilikFiyat: number;
  firstForMalzemeFiyat: number;
  firstForMahalleTnm: number;
  colors: any;
  icons: any;

  urunlerVersiyon;
  urunAnaGrupVersiyon;
  urunIscilikVersiyon;
  urunMalzemeVersiyon;
  islemArizaIscilikVersiyon;
  malzemeFiyatVersiyon;
  iscilikFiyatVersiyon;

  counter: number;
  @ViewChild("header") header: HeaderComponent;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private urunProvider: UrunProvider,
              private urunAnaGrpProvider: UrunAnaGrpProvider,
              private urunIscilikProvider: UrunIscilikProvider,
              private urunMalzemeProvider: UrunMalzemeProvider,
              private islemArizaIscilikProvider: IslemArizaIscilikProvider,
              private fiyatProvider: FiyatProvider,
              private adresProvider: AdresProvider,
              private logger: LoggerProvider,
              private versiyonProvider: VersiyonProvider,
              private tasks: TasksProvider,
              private util: UtilProvider) {

    this.colors = Constants.COLORS;
    this.icons = Constants.ICONS;
    this.firstForUrunIscilik = 0;
    this.firstForUrunMalzeme = 0;
    this.firstForUrunler = 0;
    this.firstForIslemArizaIscilik = 0;
    this.firstForIscilikFiyat = 0;
    this.firstForMalzemeFiyat = 0;
    this.firstForMahalleTnm = 0;
    this.counter = 0;
    this.ionViewDidLoad();

  }


  async downloadUrunler() {
    try {
      this.onDownloadStart();
      this.util.timerStart(Constants.DATA_TYPE.URUN);
      let res = await this.urunProvider.downloadUrunler(this.firstForUrunler);
      this.logger.success("downloadUrunler ==> " + res);
      if (this.util.isNotEmpty(res)) {

        if (Number(localStorage.getItem(Constants.GELEN_VERI.URUN)) < Constants.API_PAGE_SIZE) {
          this.doWhenDataDownloaded(Constants.DATA_TYPE.URUN, "Ürünler Kayıt Edildi.");
        }
        else {
          this.firstForUrunler += this.pageSize;
          this.downloadUrunler();
        }
      } else {
        this.onComplete();
      }
      this.util.timerEnd(Constants.DATA_TYPE.URUN);
    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.URUN);
    }
  }

  downloadUrunAnaGrup() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.URUN_ANA_GRUP);
      this.onDownloadStart();
      this.urunAnaGrpProvider.downloadUrunAnaGrup().then(res => {
        if (this.util.isNotEmpty(res))
          this.doWhenDataDownloaded(Constants.DATA_TYPE.URUN_ANA_GRUP, "Ürün Ana grup Kayıt Edildi.");
        else
          this.onComplete();

      });
      this.util.timerEnd(Constants.DATA_TYPE.URUN_ANA_GRUP);
    }
    catch (e) {
      this.catchException(e, Constants.DATA_TYPE.URUN_ANA_GRUP);

    }
  }


  async downloadUrunIscilik() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.URUN_ISCILIK);
      this.onDownloadStart();
      let res = await this.urunIscilikProvider.downloadUrunIscilik(this.firstForUrunIscilik);
      this.logger.success("downloadUrunIscilik ==> " + res);
      if (this.util.isNotEmpty(res)) {
        if (Number(localStorage.getItem(Constants.GELEN_VERI.URUN_ISCILIK)) < Constants.API_PAGE_SIZE) {
          this.doWhenDataDownloaded(Constants.DATA_TYPE.URUN_ISCILIK, "Ürün İşçilik Kayıt Edildi.");
        } else {
          this.firstForUrunIscilik += this.pageSize;
          this.downloadUrunIscilik();
        }
      } else {
        this.onComplete();
      }
      this.util.timerEnd(Constants.DATA_TYPE.URUN_ISCILIK);
    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.URUN_ISCILIK);

    }
  }

  downloadUrunMalzeme() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.URUN_MALZEME);
      this.onDownloadStart();
      this.urunMalzemeProvider.downloadUrunMalzeme(this.firstForUrunMalzeme).then(res => {
        this.logger.success("downloadUrunMalzeme ==> " + res);
        if (this.util.isNotEmpty(res)) {
          if (Number(localStorage.getItem(Constants.GELEN_VERI.URUN_MALZEME)) < Constants.API_PAGE_SIZE) {
            this.doWhenDataDownloaded(Constants.DATA_TYPE.URUN_MALZEME, "Ürün İşçilik Kayıt Edildi.");

          } else {
            this.firstForUrunMalzeme += this.pageSize;
            this.downloadUrunMalzeme();
          }

        } else {
          this.onComplete();
        }
      });
      this.util.timerEnd(Constants.DATA_TYPE.URUN_MALZEME);

    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.URUN_MALZEME);
      this.onComplete();
    }
  }

  downloadIslemArizaIscilik() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK);
      this.onDownloadStart();
      this.islemArizaIscilikProvider.downloadIslemArizaIscilik(this.firstForIslemArizaIscilik).then(res => {
        this.logger.success("downloadIslemArizaIscilik ==> " + res);
        if (this.util.isNotEmpty(res)) {
          if (Number(localStorage.getItem(Constants.GELEN_VERI.ISLEM_ARIZA_ISCILIK)) < Constants.API_PAGE_SIZE) {
            this.doWhenDataDownloaded(Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK, "Islem Ariza Iscilik Kayıt Edildi.");
          } else {
            this.firstForIslemArizaIscilik += this.pageSize;
            this.downloadIslemArizaIscilik();
          }

        } else {
          this.onComplete();
        }
      });

      this.util.timerEnd(Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK);

    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK);
    }
  }

  async downloadMalzemeFiyat() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.MALZEME_FIYAT);
      this.onDownloadStart();
      let res = await this.fiyatProvider.downloadMalzemeFiyat(this.firstForMalzemeFiyat);

      this.logger.success("downloadMalzemeFiyat ==> " + res);
      if (this.util.isNotEmpty(res)) {
        if (Number(localStorage.getItem(Constants.GELEN_VERI.MALZEME_FIYAT)) < Constants.API_PAGE_SIZE) {
          this.doWhenDataDownloaded(Constants.DATA_TYPE.MALZEME_FIYAT, "Malzeme Fiyatı Kayıt Edildi.");
        }
        else {
          this.firstForMalzemeFiyat += this.pageSize;
          this.downloadMalzemeFiyat();
        }

      } else {
        this.onComplete();
      }
      this.util.timerEnd(Constants.DATA_TYPE.MALZEME_FIYAT);
    }
    catch (e) {
      this.catchException(e, Constants.DATA_TYPE.MALZEME_FIYAT);
    }
  }

  async downloadIscilikFiyat() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.ISCILIK_FIYAT);
      this.onDownloadStart();
      await this.fiyatProvider.downloadIscilikFiyat(this.firstForIscilikFiyat).then(res => {
        if (this.util.isNotEmpty(res)) {
          this.logger.success("downloadIscilikFiyat ==> " + res);

          if (Number(localStorage.getItem(Constants.GELEN_VERI.ISCILIK_FIYAT)) < Constants.API_PAGE_SIZE) {
            this.doWhenDataDownloaded(Constants.DATA_TYPE.ISCILIK_FIYAT, "Iscilik Fiyatı Kayıt Edildi.");

          } else {
            this.firstForIscilikFiyat += this.pageSize;
            this.downloadIscilikFiyat();
          }

        } else {
          this.onComplete();
        }
      });
      this.util.timerEnd(Constants.DATA_TYPE.ISCILIK_FIYAT);

    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.ISCILIK_FIYAT)
    }
  }

  async downloadSehirList() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.SEHIR_TNM);
      this.onDownloadStart();

      await this.adresProvider.downloadSehirData().then(res => {
        this.logger.success("downloadSehirList ==> " + res);
        if (this.util.isNotEmpty(res))
          this.doWhenDataDownloaded(Constants.DATA_TYPE.SEHIR_TNM, "Şehir listesi güncellendi.");
        else {
          this.onComplete();
        }
      });

      this.util.timerEnd(Constants.DATA_TYPE.SEHIR_TNM);

    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.SEHIR_TNM);
    }
  }

  async downloadIlceList() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.ILCE_TNM);
      this.onDownloadStart();
      await this.adresProvider.downloadIlceData().then(res => {
        this.logger.success("downloadIlceList ==> " + res);
        if (this.util.isNotEmpty(res)) {
          this.doWhenDataDownloaded(Constants.DATA_TYPE.ILCE_TNM, "Ilçe listesi güncellendi.");
        } else {
          this.onComplete();
        }
      });
      this.util.timerEnd(Constants.DATA_TYPE.ILCE_TNM);

    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.ILCE_TNM);
    }
  }

  async downloadMahalleList() {
    try {
      this.util.timerStart(Constants.DATA_TYPE.MAHALLE_TNM);
      this.onDownloadStart();
      await this.adresProvider.downloadMahalleData(this.firstForMahalleTnm).then(res => {

        this.logger.success("downloadMahalleList ==> " + res);
        if (this.util.isNotEmpty(res)) {
          if (Number(localStorage.getItem(Constants.GELEN_VERI.MAHALLE_TNM)) < Constants.API_PAGE_SIZE) {
            this.doWhenDataDownloaded(Constants.DATA_TYPE.MAHALLE_TNM, "Mahalle Bilgisi Kayıt Edildi.");

          } else {
            this.firstForMahalleTnm += this.pageSize;
            this.downloadMahalleList();
          }

        } else {
          this.onComplete();
        }
      });
      this.util.timerEnd(Constants.DATA_TYPE.MAHALLE_TNM);

    } catch (e) {
      this.catchException(e, Constants.DATA_TYPE.MAHALLE_TNM);
    }
  }

  ionViewDidLoad() {
    this.setButtonsStyle();
    this.setVersiyon();
  }

  setButtonsStyle() {
    this.setButtonStyle(Constants.DATA_TYPE.URUN);
    this.setButtonStyle(Constants.DATA_TYPE.URUN_ANA_GRUP);
    this.setButtonStyle(Constants.DATA_TYPE.URUN_ISCILIK);
    this.setButtonStyle(Constants.DATA_TYPE.URUN_MALZEME);
    this.setButtonStyle(Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK);
    this.setButtonStyle(Constants.DATA_TYPE.MALZEME_FIYAT);
    this.setButtonStyle(Constants.DATA_TYPE.ISCILIK_FIYAT);
    this.setButtonStyle(Constants.DATA_TYPE.SEHIR_TNM);
    this.setButtonStyle(Constants.DATA_TYPE.ILCE_TNM);
    this.setButtonStyle(Constants.DATA_TYPE.MAHALLE_TNM);

  }

  setButtonStyle(type: string) {
    let clientVersiyon = localStorage.getItem(Constants.VERSIYON.CLIENT[type]);
    let serverVersiyon = localStorage.getItem(Constants.VERSIYON.SERVER[type]);
    let gelenVeri = localStorage.getItem(Constants.GELEN_VERI[type]);
    this.logger.info("Kayıtlı Miktar ==> " + type + " ==> " + localStorage.getItem(Constants.GELEN_VERI[type]));
    this.logger.info("type ==> " + type + "; Constants.GELEN_VERI[type] ==> " + Constants.GELEN_VERI[type]);
    //|| (this.util.isNotEmpty(gelenVeri) && gelenVeri != "0")
    if (serverVersiyon == '-1' || clientVersiyon != serverVersiyon) {
      Constants.COLORS[type] = "notDownloaded";
      Constants.ICONS[type] = "download";
    } else {
      Constants.COLORS[type] = "downloaded";
      Constants.ICONS[type] = "done-all";
    }
  }

  updateHeader() {
    setTimeout(() => {
      this.header.updateHeader();
    }, 200)
  }


  catchException(e, place) {
    this.logger.error(e);
    this.util.error("Indirme işleminde Hata oluştu lütfen tekrar deneyiniz." + place);
    this.onComplete();
  }

  doWhenDataDownloaded(type: string, message: string) {
    localStorage.setItem(Constants.VERSIYON.CLIENT[type], localStorage.getItem(Constants.VERSIYON.SERVER[type]));
    this.colors[type] = "downloaded";
    this.icons[type] = "done-all";
    setTimeout(() => {
      this.util.success(message);
    }, 500);
    this.onComplete();
  }

  onComplete() {
    this.util.loaderEnd();
    this.updateHeader();
    this.setVersiyon();
    this.tasks.startTasks();
    this.counter = 0;
  }

  onDownloadStart() {
    if (this.counter == 0) {
      this.tasks.killTasks();
      this.util.loaderStart();
    }
    this.counter += 1;
  }

  setVersiyon() {
    this.urunlerVersiyon = this.getVersiyon(Constants.DATA_TYPE.URUN);
    this.urunAnaGrupVersiyon = this.getVersiyon(Constants.DATA_TYPE.URUN_ANA_GRUP);
    this.urunIscilikVersiyon = this.getVersiyon(Constants.DATA_TYPE.URUN_ISCILIK);
    this.urunMalzemeVersiyon = this.getVersiyon(Constants.DATA_TYPE.URUN_MALZEME);
    this.islemArizaIscilikVersiyon = this.getVersiyon(Constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK);
    this.malzemeFiyatVersiyon = this.getVersiyon(Constants.DATA_TYPE.MALZEME_FIYAT);
    this.iscilikFiyatVersiyon = this.getVersiyon(Constants.DATA_TYPE.ISCILIK_FIYAT);

  }

  getVersiyon(tip): string {
    let versiyonText = "";
    let res = this.versiyonProvider.getVersiyonClientAndServer(tip);

    if (this.util.isNotEmpty(res)) {

      if (this.util.isNotEmpty(res.server))
        versiyonText += res.server;
      else
        versiyonText += "-1";

      versiyonText += " / ";

      if (this.util.isNotEmpty(res.client))
        versiyonText += res.client;
      else
        versiyonText += "-1";
    }
    // this.logger.info("VERSIYON_" + tip + "==> " + versiyonText);
    return versiyonText;
  }


}
