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
    this.urunProvider.downloadUrunler("-1", 0).subscribe(res => {
      console.log(res);
    });
  }

  downloadUrunAnaGrup() {
    this.urunAnaGrpProvider.downloadUrunAnaGrup("-1").subscribe(res => {
      console.log(res);
    });
  }

  downloadUrunIscilik() {
    this.urunIscilikProvider.downloadUrunIscilik("-1", 0).subscribe(res => {
      console.log(res);
    });
  }

  downloadUrunMalzeme() {
    this.urunMalzemeProvider.downloadUrunMalzeme("-1", 0).subscribe(res => {
      console.log(res);
    });

  }

  downloadIslemArizaIscilik() {
    this.islemArizaIscilikProvider.downloadIslemArizaIscilik("-1", 0).subscribe(res => {
      console.log(res);
    });
  }

  downloadMalzemeFiyat() {
    this.fiyatProvider.downloadMalzemeFiyat("-1", 0).subscribe(res => {
      console.log(res);
    });
  }

  downloadIscilikFiyat() {
    this.fiyatProvider.downloadIscilikFiyat("-1", 0).subscribe(res => {
      console.log(res);
    });
  }






}
