/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UrunProvider } from '../../providers/urun/urun';
import { UrunAnaGrpProvider } from '../../providers/urun-ana-grp/urun-ana-grp';
import { UrunIscilikProvider } from '../../providers/urun-iscilik/urun-iscilik';
import { UrunMalzemeProvider } from '../../providers/urun-malzeme/urun-malzeme';
import { FiyatProvider } from '../../providers/fiyat/fiyat';
import { IslemArizaIscilikProvider } from '../../providers/islem-ariza-iscilik/islem-ariza-iscilik';
import { Constants } from '../../entities/Constants';
import { AdresProvider } from '../../providers/adres/adres';
import { LoggerProvider } from '../../providers/logger/logger';
import { UtilProvider } from '../../providers/util/util';


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
    private util: UtilProvider
  ) {
    this.colors = Constants.COLORS;
    this.icons = Constants.ICONS;
    this.firstForUrunIscilik = 0;
    this.firstForUrunMalzeme = 0;
    this.firstForUrunler = 0;
    this.firstForIslemArizaIscilik = 0;
    this.firstForIscilikFiyat = 0;
    this.firstForMalzemeFiyat = 0;
    this.firstForMahalleTnm = 0;
    this.ionViewDidLoad();

  }


  downloadUrunler() {
    this.util.loaderStart();
    this.urunProvider.downloadUrunler(this.firstForUrunler).then(res => {
      console.log("Urunler Kayit Edildi");
      this.firstForUrunler += this.pageSize;
      if (Number(localStorage.getItem(Constants.GELEN_VERI.GELEN_URUN)) < Constants.API_PAGE_SIZE) {

        // TODO: Ürünler Indirildi.
        localStorage.setItem(Constants.VERSIYON.CLIENT.URUN, localStorage.getItem(Constants.VERSIYON.SERVER.URUN));
        this.util.message("Ürünler Kayıt Edildi.");
        this.colors.URUN = "downloaded";
        this.icons.URUN = "done-all";
        this.util.loaderEnd();
      }
      else {
        this.downloadUrunler();
      }
    });
  }

  downloadUrunAnaGrup() {
    this.util.loaderStart();
    this.urunAnaGrpProvider.downloadUrunAnaGrup().then(res => {
      console.log("Ürün Ana Grubu Güncellendi" + res);
      localStorage.setItem(Constants.VERSIYON.CLIENT.URUN_ANA_GRUP, localStorage.getItem(Constants.VERSIYON.SERVER.URUN_ANA_GRUP));
      this.util.message("Ürün Ana grup Kayıt Edildi.");
      this.colors.URUN_ANA_GRUP = "downloaded";
      this.icons.URUN_ANA_GRUP = "done-all";
      this.util.loaderEnd();
    });
  }


  downloadUrunIscilik() {
    this.util.loaderStart();
    this.urunIscilikProvider.downloadUrunIscilik(this.firstForUrunIscilik).then(res => {
      console.log(res);
      this.firstForUrunIscilik += this.pageSize;
      console.log("Indirilen ürün İşçilik sayısı" + localStorage.getItem(Constants.DATA_TYPE.URUN_ISCILIK));
      if (Number(localStorage.getItem(Constants.GELEN_VERI.GELEN_URUN_ISCILIK)) < Constants.API_PAGE_SIZE) {
        localStorage.setItem(Constants.VERSIYON.CLIENT.URUN_ISCILIK, localStorage.getItem(Constants.VERSIYON.SERVER.URUN_ISCILIK));
        this.util.message("Ürün İşçilik Kayıt Edildi.");
        this.colors.URUN_ISCILIK = "downloaded";
        this.icons.URUN_ISCILIK = "done-all";
        this.util.loaderEnd();
      } else {
        this.downloadUrunIscilik();
      }
    });
  }

  downloadUrunMalzeme() {
    this.util.loaderStart();
    this.urunMalzemeProvider.downloadUrunMalzeme(this.firstForUrunMalzeme).then(res => {
      console.log(res);
      if (Number(localStorage.getItem(Constants.GELEN_VERI.GELEN_URUN_MALZEME)) < Constants.API_PAGE_SIZE) {
        localStorage.setItem(Constants.VERSIYON.CLIENT.URUN_MALZEME, localStorage.getItem(Constants.VERSIYON.SERVER.URUN_MALZEME));
        this.util.message("Ürün İşçilik Kayıt Edildi.");
        this.colors.URUN_MALZEME = "downloaded";
        this.icons.URUN_MALZEME = "done-all";
        this.util.loaderEnd();
      } else {
        this.firstForUrunMalzeme += this.pageSize;
        this.downloadUrunMalzeme();
      }
    });

  }

  downloadIslemArizaIscilik() {
    this.util.loaderStart();
    this.islemArizaIscilikProvider.downloadIslemArizaIscilik(this.firstForIslemArizaIscilik).then(res => {
      console.log(res);
      if (Number(localStorage.getItem(Constants.GELEN_VERI.GELEN_ISLEM_ARIZA_ISCILIK)) < Constants.API_PAGE_SIZE) {
        localStorage.setItem(Constants.VERSIYON.CLIENT.ISLEM_ARIZA_ISCILIK, localStorage.getItem(Constants.VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK));
        this.colors.ISLEM_ARIZA_ISCILIK = "downloaded";
        this.icons.ISLEM_ARIZA_ISCILIK = "done-all";
        this.util.message("Islem Ariza Iscilik Kayıt Edildi.");
        this.util.loaderEnd();
      } else {
        this.firstForIslemArizaIscilik += this.pageSize;
        this.downloadIslemArizaIscilik();
      }

    });
  }

  downloadMalzemeFiyat() {
    this.util.loaderStart();
    this.fiyatProvider.downloadMalzemeFiyat(this.firstForMalzemeFiyat).then(res => {
      console.log(res);
      if (Number(localStorage.getItem(Constants.GELEN_VERI.GELEN_MALZEME_FIYAT)) < Constants.API_PAGE_SIZE) {
        localStorage.setItem(Constants.VERSIYON.CLIENT.MALZEME_FIYAT, localStorage.getItem(Constants.VERSIYON.SERVER.MALZEME_FIYAT));
        this.colors.MALZEME_FIYAT = "downloaded";
        this.icons.MALZEME_FIYAT = "done-all";
        this.util.message("Malzeme Fiyatı Kayıt Edildi.");
        this.util.loaderEnd();
      } else {
        this.firstForMalzemeFiyat += this.pageSize;
        this.downloadMalzemeFiyat();
      }

    });
  }

  downloadIscilikFiyat() {
    this.util.loaderStart();
    this.fiyatProvider.downloadIscilikFiyat(this.firstForIscilikFiyat).then(res => {
      if (Number(localStorage.getItem(Constants.GELEN_VERI.GELEN_ISCILIK_FIYAT)) < Constants.API_PAGE_SIZE) {
        localStorage.setItem(Constants.VERSIYON.CLIENT.ISCILIK_FIYAT, localStorage.getItem(Constants.VERSIYON.SERVER.ISCILIK_FIYAT));
        this.colors.ISCILIK_FIYAT = "downloaded";
        this.icons.ISCILIK_FIYAT = "done-all";
        this.util.message("Iscilik Fiyatı Kayıt Edildi.");
        this.util.loaderEnd();
      } else {
        this.firstForIscilikFiyat += this.pageSize;
        this.downloadIscilikFiyat();
      }
    });
  }

  downloadSehirList() {
    this.util.loaderStart();
    this.adresProvider.downloadSehirData().then(res => {
      localStorage.setItem(Constants.VERSIYON.CLIENT.SEHIR_TNM, localStorage.getItem(Constants.VERSIYON.SERVER.SEHIR_TNM));
      this.colors.SEHIR_TNM = "downloaded";
      this.icons.SEHIR_TNM = "done-all";
      this.logger.dir(res);
      this.util.loaderEnd();
    });
  }

  downloadIlceList() {
    this.util.loaderStart();
    this.adresProvider.downloadIlceData().then(res => {
      localStorage.setItem(Constants.VERSIYON.CLIENT.ILCE_TNM, localStorage.getItem(Constants.VERSIYON.SERVER.ILCE_TNM));
      this.colors.ILCE_TNM = "downloaded";
      this.icons.ILCE_TNM = "done-all";
      this.logger.dir(res);
      this.util.loaderEnd();
    });
  }

  downloadMahalleList() {
    this.util.loaderStart();
    this.adresProvider.downloadMahalleData(this.firstForMahalleTnm).then(res => {
      if (Number(localStorage.getItem(Constants.GELEN_VERI.GELEN_MAHALLE_TNM)) < Constants.API_PAGE_SIZE) {
        localStorage.setItem(Constants.VERSIYON.CLIENT.MAHALLE_TNM, localStorage.getItem(Constants.VERSIYON.SERVER.MAHALLE_TNM));
        this.colors.MAHALLE_TNM = "downloaded";
        this.icons.MAHALLE_TNM = "done-all";
        this.util.message("Mahalle Bilgisi Kayıt Edildi.");
        this.util.loaderEnd();
      } else {
        this.firstForMahalleTnm += this.pageSize;
        this.downloadMahalleList();
      }
    });
  }

  ionViewDidLoad() {
    this.setButtonsStyle();
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
    if (serverVersiyon == '-1' || clientVersiyon != serverVersiyon) {
      Constants.COLORS[type] = "notDownloaded";
      Constants.ICONS[type] = "download";
    } else {
      Constants.COLORS[type] = "downloaded";
      Constants.ICONS[type] = "done-all";
    }
  }



}
