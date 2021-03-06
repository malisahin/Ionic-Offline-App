import { Component } from '@angular/core';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { Constants } from '../../entities/Constants';
import { Urun } from '../../entities/urun';
import { UrunMalzeme } from '../../entities/urun-malzeme';
import { UtilProvider } from '../../providers/util/util';
import { ModalController } from 'ionic-angular';
import { UrunIscilik } from '../../entities/urun-iscilik';
import { UrunAnaGrupSearchComponent } from '../urun-ana-grup-search/urun-ana-grup-search';
import { UrunSearchComponent } from '../urun-search/urun-search';
import { UrunIscilikSearchComponent } from '../urun-iscilik-search/urun-iscilik-search';
import { LoggerProvider } from "../../providers/logger/logger";
import { FiyatDao } from "../../providers/fiyat-dao/fiyat-dao";
import { Fiyat } from "../../entities/fiyat";
import { MalzemeSearchComponent } from "../malzeme-search/malzeme-search";


@Component({
  selector: 'fiyat-sorgu',
  templateUrl: 'fiyat-sorgu.html'
})
export class FiyatSorguComponent {

  urunAnaGrup: UrunAnaGrup;

  urun: Urun;
  urunIscilik: UrunIscilik;
  islemTipi: string;
  data: any;
  fiyat: Fiyat = new Fiyat();
  malzeme: UrunMalzeme;

  constructor(private modalController: ModalController,
    private util: UtilProvider,
    private fiyatDao: FiyatDao,
    private logger: LoggerProvider) {
    this.data = {};
    this.urunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    this.urun = new Urun();
    this.urunIscilik = new UrunIscilik();
    this.islemTipi = '';
    this.malzeme = new UrunMalzeme();
  }

  public urunAnaGrupSorgula() {
    this.urunIscilik = new UrunIscilik();
    this.fiyat = new Fiyat();
    this.urun = new Urun();
    this.data.type = Constants.DATA_TYPE.URUN_ANA_GRUP;
    let aramaModal = this.modalController.create(UrunAnaGrupSearchComponent,
      { data: this.data },
      { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });

    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data))
        this.urunAnaGrup = data;
    });
    aramaModal.present();
  }

  public urunSorgula() {
    this.urunIscilik = new UrunIscilik();
    this.fiyat = new Fiyat();
    this.data.type = Constants.DATA_TYPE.URUN;
    let aramaModal = this.modalController.create(UrunSearchComponent,
      { data: this.data },
      { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });

    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data))
        this.urun = data;
    });
    aramaModal.present();
  }

  public malzemeSorgula() {
    let aramaModal = this.modalController.create(MalzemeSearchComponent,
      { data: this.malzeme },
      { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });

    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data))
        this.fillMalzemeSorguFilter(data);
    });
    aramaModal.present();
  }

  fillMalzemeSorguFilter(data) {
    if (this.util.isNotEmpty(data)) {

      if (this.util.isNotEmpty(data.mlzKod))
        this.malzeme.mlzKod = data.mlzKod;

      if (this.util.isNotEmpty(data.mlzAdi)) {
        this.malzeme.mlzAdi = data.mlzAdi;
      }
    }
  }

  public urunIscilikSorgula() {
    this.fiyat = new Fiyat();
    if (this.util.isEmpty(this.urun.mamKod)) {
      this.util.warn("Önce ürünü seçiniz.");
      return false;
    }
    this.data.type = Constants.DATA_TYPE.URUN_ISCILIK;
    this.data.mamKod = this.urun.mamKod;
    let aramaModal = this.modalController.create(UrunIscilikSearchComponent,
      { data: this.data },
      { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });

    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data))
        this.urunIscilik = data;
    });
    aramaModal.present();
  }

  public fiyatSorgula() {
    if (this.islemTipi == 'ISC') {
      this.iscilikFiyatSorgula();
    } else {
      this.malzemeFiyatSorgula();
    }
  }

  IslemTipiChange() {

  }

  private iscilikFiyatSorgula() {
    if (this.util.isEmpty(this.urun.mamKod) || this.util.isEmpty(this.urunIscilik.iscKod)) {
      this.util.warn("Önce İşçilik/Malzeme seçiniz.");
    } else {
      this.logger.warn("Işçilik Fiyat Bulma");
      this.fiyatBul(this.urun.mamKod, this.urunIscilik.iscKod)
    }
  }

  async fiyatBul(mamKod: string, iscMlzKod: string) {
    let filter = new Fiyat();
    filter.mamKod = mamKod;
    filter.iscMlzKod = iscMlzKod;
    let query = await this.fiyatDao.findFiyat(filter);
    if (this.util.isNotEmpty(query) && query.rows.length > 0) {
      this.logger.dir(query.rows);
      let res = query.rows.item(0);
      this.fiyat.fiyat = Number((Number(res.fiyat) * 1.18).toFixed(2));
      this.fiyat.gdFiyat = Number((Number(res.gdfiyat) * 1.18).toFixed(2));
      this.fiyat.mamKod = res.mamKod;
    } else {
      this.util.warn("Fiyat Bulunamadı.")
    }

  }

  private malzemeFiyatSorgula() {
    if (this.util.isEmpty(this.malzeme.mlzKod)) {
      this.util.warn("Önce Ürün/Kodu seçiniz.");
    } else {
      this.fiyatBul("MLZ", this.malzeme.mlzKod);
    }
  }


}
