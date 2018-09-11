import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeaderProvider } from "../../providers/header/header";
import { MesajlarDao } from "../../providers/mesajlar-dao/mesajlar-dao";
import { HizmetDao } from "../../providers/hizmet-dao/hizmet-dao";
import { ThemeProvider } from "../../providers/theme/theme";
import { Constants } from "../../entities/Constants";
import { UtilProvider } from '../../providers/util/util';
import { LoggerProvider } from '../../providers/logger/logger';

/**
 * @author mali.sahin
 * @since 19.05.2018
 */


@IonicPage()
@Component({
  selector: 'page-anasayfa',
  templateUrl: 'anasayfa.html',
})
export class Anasayfa {

  cagriSayisi: number = 0;
  duyuruSayisi: number = 0;
  uyariSayisi: number = 0;
  guncellemeSayisi: number = 10;
  backGroundImage: string;
  logoPath: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private headerProvider: HeaderProvider,
    private util: UtilProvider,
    private logger: LoggerProvider,
    private hizmetDao: HizmetDao,
    private themeProvider: ThemeProvider) {
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.loadGuncellemeSayisi();
    this.loadMesajSayilari();
    this.loadHizmetSayisi();
  }

  private ionViewDidLoad() {
    console.log('ionViewDidLoad Anasayfa');
    this.logoPath = this.themeProvider.getAnasayfaLogo();
  }

  sayfayaGit(page, param) {
    this.navCtrl.push(page, param);
  }


  loadGuncellemeSayisi() {
    this.guncellemeSayisi = this.headerProvider.loadGuncellemeSayisi();
  }

  /*  async loadMesajSayilari() {
      // this.duyuruSayisi = await this.mesajDao.loadDuyuruSayisi();
      //this.uyariSayisi = await this.mesajDao.loadUyariSayisi();
    }*/

  async loadHizmetSayisi() {
    this.cagriSayisi = await this.hizmetDao.findAcikHizmetSayisi();
  }

  loadMesajSayilari() {
    let duyuruSayisi = localStorage.getItem(Constants.COUNTS.DUYURULAR);

    if (this.util.isEmpty(duyuruSayisi))
      duyuruSayisi = "0";

    this.duyuruSayisi = Number(duyuruSayisi);

    this.logger.info("Duyuru Sayısı " + this.duyuruSayisi);


    let uyariSayisi = localStorage.getItem(Constants.COUNTS.UYARILAR);

    if (this.util.isEmpty(uyariSayisi))
      uyariSayisi = "0";

    this.uyariSayisi = Number(uyariSayisi);
    this.logger.info("Uyarı Sayısı " + this.uyariSayisi);

  }
}
