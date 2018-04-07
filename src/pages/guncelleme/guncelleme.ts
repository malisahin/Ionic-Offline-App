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


@IonicPage()
@Component({
  selector: 'page-guncelleme',
  templateUrl: 'guncelleme.html',
})
export class GuncellemePage {
  isAndroid: boolean = false;
  activePage: string = "guncelleme";
  pageSize = 10000;
  firstForUrunIscilik = 0;
  firstForUrunMalzeme = 0;
  firstForUrunler = 0;
  firstForIslemArizaIscilik = 0;
  firstForIscilikFiyat = 0;
  firstForMalzemeFiyat = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private urunProvider: UrunProvider,
    private urunAnaGrpProvider: UrunAnaGrpProvider,
    private urunIscilikProvider: UrunIscilikProvider,
    private urunMalzemeProvider: UrunMalzemeProvider,
    private islemArizaIscilikProvider: IslemArizaIscilikProvider,
    private fiyatProvider: FiyatProvider) {

  }

  downloadUrunler() {
    this.urunProvider.downloadUrunler(this.firstForUrunler).then(res => {
      console.log("Urunler Kayit Edildi");
      this.firstForUrunler += this.pageSize;
      this.downloadUrunler();
    });
  }

  downloadUrunAnaGrup() {
    this.urunAnaGrpProvider.downloadUrunAnaGrup().then(res => {
      console.log("Ürün Ana Grubu Güncellendi" + res);
    });
  }


  downloadUrunIscilik() {
    this.urunIscilikProvider.downloadUrunIscilik(this.firstForUrunIscilik).then(res => {
      console.log(res);
      this.firstForUrunIscilik += this.pageSize;
      this.downloadUrunIscilik();
    });
  }

  downloadUrunMalzeme() {
    this.urunMalzemeProvider.downloadUrunMalzeme(this.firstForUrunMalzeme).then(res => {
      console.log(res);
      this.firstForUrunMalzeme += this.pageSize;
      this.downloadUrunMalzeme();
    });

  }

  downloadIslemArizaIscilik() {
    this.islemArizaIscilikProvider.downloadIslemArizaIscilik(this.firstForIslemArizaIscilik).subscribe(res => {
      console.log(res);
      this.firstForIslemArizaIscilik += this.pageSize;
      this.downloadIslemArizaIscilik();
    });
  }

  downloadMalzemeFiyat() {
    this.fiyatProvider.downloadMalzemeFiyat(this.firstForMalzemeFiyat).then(res => {
      console.log(res);
      this.firstForMalzemeFiyat += this.pageSize;
      this.downloadMalzemeFiyat();
    });
  }

  downloadIscilikFiyat() {
    this.fiyatProvider.downloadIscilikFiyat(this.firstForIscilikFiyat).then(res => {
      console.log(res);
      this.firstForIscilikFiyat = this.pageSize;
      this.downloadIscilikFiyat();
    });
  }


}
