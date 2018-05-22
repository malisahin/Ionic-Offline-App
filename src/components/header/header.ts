/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular/navigation/nav-controller';
import {AlertController, Platform} from 'ionic-angular';
import {Constants} from "../../entities/Constants";
import {AlertDao} from "../../dao/alert-dao";
import {MesajlarDao} from "../../providers/mesajlar-dao/mesajlar-dao";
import {Mesaj} from "../../entities/mesajlar";
import {Pageable} from "../../entities/Pageable";


@Component({
  selector: 'icon-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;
  cagriSayisi: number = 0;
  duyuruSayisi: number = 0;
  uyariSayisi: number = 0;
  guncellemeSayisi: number = 10;

  constants: Constants;

  constructor(private nav: NavController,
              private alert: AlertController,
              private  mesajDao: MesajlarDao,
              private platform: Platform) {
    this.constants = new Constants();
    this.loadGuncellemeSayisi();
    this.loadMesajSayilari();
  }


  sayfayaGit(page, param) {
    this.nav.push(page, param);
  }

  closeApplicationConfirm() {
    let alert = this.alert.create({
      title: "Confirm",
      message: "Çıkmak istediğinizden emin misiniz?",
      enableBackdropDismiss: true
      ,
      buttons: [{
        text: "Evet",
        handler: () => this.platform.exitApp()
      }, {
        text: "Hayır",
        role: 'cancel'
      }]
    });
    alert.present();
  }

  loadGuncellemeSayisi() {
    let tables: string[] = ['URUN', 'URUN_ANA_GRUP', 'URUN_ISCILIK',
      'URUN_MALZEME', 'ISLEM_ARIZA_ISCILIK', 'MALZEME_FIYAT',
      'ISCILIK_FIYAT', 'SEHIR_TNM', 'ILCE_TNM', 'MAHALLE_TNM'];

    for (let i = 0; i < tables.length; i++) {
      let item = tables[i];
      let serverVersiyon = localStorage.getItem(this.constants.VERSIYON.SERVER[item]);
      let clientVersiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT[item]);

      if ((serverVersiyon > clientVersiyon) || clientVersiyon == "-1") {
        this.guncellemeSayisi -= 1;
      }
    }
  }

  async loadMesajSayilari() {
   this.duyuruSayisi = await  this.mesajDao.loadDuyuruSayisi();
   this.uyariSayisi = await  this.mesajDao.loadUyariSayisi();
  }

}


