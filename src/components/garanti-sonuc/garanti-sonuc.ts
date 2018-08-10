import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { GarantiSorgu } from '../../entities/GarantiSorgu';
import { UtilProvider } from '../../providers/util/util';
import { UrunDao } from '../../providers/urun-dao/urun-dao';
import { UrunAnaGrupDao } from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import { ThemeProvider } from '../../providers/theme/theme';


@Component({
  selector: 'garanti-sonuc',
  templateUrl: 'garanti-sonuc.html'
})
export class GarantiSonucComponent {

  garanti: GarantiSorgu;


  data: any;
  mamanaGrp: string = "";
  mamKod: string = "";
  mamAdi: string = "";
  garantiBasTar: any;
  garantiSuresi: string = "";
  stdGarantiBitisTar: any;
  garantiTipi: string = "";
  ekGaranti: string = "";
  ekGarantiSuresi: any;
  ekGarantiBasTar: any;
  ekGarantiBitisTar: any;
  aciklama: string = "";
  sonuc: string = "";
  backGroundImage: string;

  constructor(private viewCtrl: ViewController,
    private params: NavParams,
    private util: UtilProvider,
    private urunDao: UrunDao,
    private themeProvider: ThemeProvider) {
    console.log('Hello GarantiSonucComponent Component');
    this.garanti = new GarantiSorgu();
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.data = params.get('data');
    this.loadData();

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  loadData() {
    if (this.util.isNotEmpty(this.data.gbastar)) {

      this.garantiBasTar = new Date(this.data.gbastar);
    }
    if (this.util.isNotEmpty(this.data.gsure)) {
      this.garantiSuresi = this.data.gsure;
    }
    if (this.util.isNotEmpty(this.data.std_gbt)) {
      this.stdGarantiBitisTar = new Date(this.data.std_gbt);
    }
    if (this.util.isNotEmpty(this.data.garantiTipi)) {
      if (this.data.garantiTipi == "STD")
        this.garantiTipi = "Standart Garanti";
      if (this.data.garantiTipi == "EK")
        this.garantiTipi = "Ek Garanti"
    }
    if (this.util.isNotEmpty(this.data.garantiKodu)) {
      this.ekGaranti = this.data.garantiKodu;
    }
    if (this.util.isNotEmpty(this.data.ekgSure)) {
      this.ekGarantiSuresi = this.data.ekgSure;
    }
    if (this.util.isNotEmpty(this.data.ekGarBas)) {
      this.ekGarantiBasTar = new Date(this.data.ekGarBas);
    }
    if (this.util.isNotEmpty(this.data.mgarantiBitisTarihi)) {
      this.ekGarantiBitisTar = new Date(this.data.mgarantiBitisTarihi);
    }

    if (this.util.isNotEmpty(this.data.aciklama)) {
      this.aciklama = this.data.aciklama;
    }
    if (this.util.isNotEmpty(this.data.sonuc)) {
      this.sonuc = this.data.sonuc;
    }
    //this.mlzList = this.data.mlzList;
    this.sonuc = this.data.sonuc;
    this.mamKod = this.data.mamKod;

    if (this.util.isNotEmpty(this.mamKod)) {
      this.urunDao.getUrunAndUrunAnaGrup(this.mamKod).then(res => {
        if (res.rows.length > 0) {
          this.mamAdi = res.rows.item(0).mamAdi;
          this.mamKod = res.rows.item(0).mamKod;
          this.mamanaGrp = res.rows.item(0).anaGrupAdi;
        }
      });
    }
  }
}
