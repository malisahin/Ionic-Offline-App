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
  constants: Constants;
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
    this.constants = new Constants();
    this.colors = this.constants.COLORS;
    this.icons = this.constants.ICONS;
    this.firstForUrunIscilik = 0;
    this.firstForUrunMalzeme = 0;
    this.firstForUrunler = 0;
    this.firstForIslemArizaIscilik = 0;
    this.firstForIscilikFiyat = 0;
    this.firstForMalzemeFiyat = 0;
    this.ionViewDidLoad();

  }


  downloadUrunler() {
    this.urunProvider.downloadUrunler(this.firstForUrunler).then(res => {
      console.log("Urunler Kayit Edildi");
      this.firstForUrunler += this.pageSize;
      if (Number(localStorage.getItem(this.constants.GELEN_VERI.GELEN_URUN)) < this.constants.API_PAGE_SIZE) {

        // TODO: Ürünler Indirildi.
        localStorage.setItem(this.constants.VERSIYON.CLIENT.URUN, localStorage.getItem(this.constants.VERSIYON.SERVER.URUN));
        this.util.message("Ürünler Kayıt Edildi.");
        this.colors.URUN = "downloaded"
        this.icons.URUN = "done-all";
      }
      else {
        this.downloadUrunler();
      }
    });
  }

  downloadUrunAnaGrup() {
    this.urunAnaGrpProvider.downloadUrunAnaGrup().then(res => {
      console.log("Ürün Ana Grubu Güncellendi" + res);
      localStorage.setItem(this.constants.VERSIYON.CLIENT.URUN_ANA_GRUP, localStorage.getItem(this.constants.VERSIYON.SERVER.URUN_ANA_GRUP));
      this.util.message("Ürün Ana grup Kayıt Edildi.");
      this.colors.URUN_ANA_GRUP = "downloaded"
      this.icons.URUN_ANA_GRUP = "done-all";
    });
  }


  downloadUrunIscilik() {
    this.urunIscilikProvider.downloadUrunIscilik(this.firstForUrunIscilik).then(res => {
      console.log(res);
      this.firstForUrunIscilik += this.pageSize;
      console.log("Indirilen ürün İşçilik sayısı" + localStorage.getItem(this.constants.DATA_TYPE.URUN_ISCILIK));
      if (Number(localStorage.getItem(this.constants.GELEN_VERI.GELEN_URUN_ISCILIK)) < this.constants.API_PAGE_SIZE) {
        localStorage.setItem(this.constants.VERSIYON.CLIENT.URUN_ISCILIK, localStorage.getItem(this.constants.VERSIYON.SERVER.URUN_ISCILIK));
        this.util.message("Ürün İşçilik Kayıt Edildi.");
        this.colors.URUN_ISCILIK = "downloaded"
        this.icons.URUN_ISCILIK = "done-all";
      } else {
        this.downloadUrunIscilik();
      }
    });
  }

  downloadUrunMalzeme() {
    this.urunMalzemeProvider.downloadUrunMalzeme(this.firstForUrunMalzeme).then(res => {
      console.log(res);
      if (Number(localStorage.getItem(this.constants.GELEN_VERI.GELEN_URUN_MALZEME)) < this.constants.API_PAGE_SIZE) {
        localStorage.setItem(this.constants.VERSIYON.CLIENT.URUN_MALZEME, localStorage.getItem(this.constants.VERSIYON.SERVER.URUN_MALZEME));
        this.util.message("Ürün İşçilik Kayıt Edildi.");
        this.colors.URUN_MALZEME = "downloaded"
        this.icons.URUN_MALZEME = "done-all";
      } else {
        this.firstForUrunMalzeme += this.pageSize;
        this.downloadUrunMalzeme();
      }
    });

  }

  downloadIslemArizaIscilik() {
    this.islemArizaIscilikProvider.downloadIslemArizaIscilik(this.firstForIslemArizaIscilik).then(res => {
      console.log(res);
      if (Number(localStorage.getItem(this.constants.GELEN_VERI.GELEN_ISLEM_ARIZA_ISCILIK)) < this.constants.API_PAGE_SIZE) {
        localStorage.setItem(this.constants.VERSIYON.CLIENT.ISLEM_ARIZA_ISCILIK, localStorage.getItem(this.constants.VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK));
        this.colors.ISLEM_ARIZA_ISCILIK = "downloaded"
        this.icons.ISLEM_ARIZA_ISCILIK = "done-all";
        this.util.message("Islem Ariza Iscilik Kayıt Edildi.");
      } else {
        this.firstForIslemArizaIscilik += this.pageSize;
        this.downloadIslemArizaIscilik();
      }

    });
  }

  downloadMalzemeFiyat() {
    this.fiyatProvider.downloadMalzemeFiyat(this.firstForMalzemeFiyat).then(res => {
      console.log(res);
      if (Number(localStorage.getItem(this.constants.GELEN_VERI.GELEN_MALZEME_FIYAT)) < this.constants.API_PAGE_SIZE) {
        localStorage.setItem(this.constants.VERSIYON.CLIENT.MALZEME_FIYAT, localStorage.getItem(this.constants.VERSIYON.SERVER.MALZEME_FIYAT));
        this.colors.MALZEME_FIYAT = "downloaded"
        this.icons.MALZEME_FIYAT = "done-all";
        this.util.message("Malzeme Fiyatı Kayıt Edildi.");
      } else {
        this.firstForMalzemeFiyat += this.pageSize;
        this.downloadMalzemeFiyat();
      }

    });
  }

  downloadIscilikFiyat() {
    this.fiyatProvider.downloadIscilikFiyat(this.firstForIscilikFiyat).then(res => {
      if (Number(localStorage.getItem(this.constants.GELEN_VERI.GELEN_ISCILIK_FIYAT)) < this.constants.API_PAGE_SIZE) {
        localStorage.setItem(this.constants.VERSIYON.CLIENT.ISCILIK_FIYAT, localStorage.getItem(this.constants.VERSIYON.SERVER.ISCILIK_FIYAT));
        this.colors.ISCILIK_FIYAT = "downloaded"
        this.icons.ISCILIK_FIYAT = "done-all";
        this.util.message("Iscilik Fiyatı Kayıt Edildi.");
      } else {
        this.firstForIscilikFiyat += this.pageSize;
        this.downloadIscilikFiyat();
      }
    });
  }

  downloadSehirList() {
    this.adresProvider.downloadSehirData().map(res => {
      this.logger.dir(res);
    });
  }

  downloadIlceList() {
    this.adresProvider.downloadIlceData();
  }

  downloadMahalleList() {
    this.adresProvider.downloadMahalleData(-1);
  }

  ionViewDidLoad() {
    this.setButtonsStyle();
  }

  setButtonsStyle() {
    this.setButtonStyle(this.constants.DATA_TYPE.URUN)
    this.setButtonStyle(this.constants.DATA_TYPE.URUN_ANA_GRUP)
    this.setButtonStyle(this.constants.DATA_TYPE.URUN_ISCILIK)
    this.setButtonStyle(this.constants.DATA_TYPE.URUN_MALZEME)
    this.setButtonStyle(this.constants.DATA_TYPE.ISLEM_ARIZA_ISCILIK)
    this.setButtonStyle(this.constants.DATA_TYPE.MALZEME_FIYAT)
    this.setButtonStyle(this.constants.DATA_TYPE.ISCILIK_FIYAT)
    this.setButtonStyle(this.constants.DATA_TYPE.SEHIR_TNM);
    this.setButtonStyle(this.constants.DATA_TYPE.ILCE_TNM);
    this.setButtonStyle(this.constants.DATA_TYPE.MAHALLE_TNM);

  }

  setButtonStyle(type: string) {
    let clientVersiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT[type]);
    let serverVersiyon = localStorage.getItem(this.constants.VERSIYON.SERVER[type]);
    if (serverVersiyon == '-1' || clientVersiyon != serverVersiyon) {
      this.constants.COLORS[type] = "notDownloaded";
      this.constants.ICONS[type] = "download";
    } else {
      this.constants.COLORS[type] = "downloaded"
      this.constants.ICONS[type] = "done-all";
    }
  }



}
