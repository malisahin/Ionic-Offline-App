/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular/navigation/nav-controller';
import {MesajlarDao} from "../../providers/mesajlar-dao/mesajlar-dao";
import {HizmetDao} from "../../providers/hizmet-dao/hizmet-dao";
import {HeaderProvider} from "../../providers/header/header";
import {Events} from "ionic-angular";
import {CagrilarPage} from "../../pages/cagrilar/cagrilar";
import {BildirimlerPage} from "../../pages/bildirimler/bildirimler";
import {GuncellemePage} from "../../pages/guncelleme/guncelleme";
import {Anasayfa} from "../../pages/anasayfa/anasayfa";
import {LoggerProvider} from "../../providers/logger/logger";


@Component({
  selector: 'icon-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;
  index: any = 1;
  cagriSayisi: number = 0;
  duyuruSayisi: number = 0;
  uyariSayisi: number = 0;
  guncellemeSayisi: number = 10;

  cagrilarPage: any;
  bildirimlerPage: any;
  guncellemePage: any;
  anaSayfa: any;

  constructor(private nav: NavController,
              private  mesajDao: MesajlarDao,
              private  hizmetDao: HizmetDao,
              private  headerProvider: HeaderProvider, private logger: LoggerProvider) {
    logger.warn("Gidilen sayfa " + String(this.index));
    this.updateHeader();
  }

  ionViewDidLoad() {
    this.logger.warn("****************HEADER****************");
    this.cagrilarPage = CagrilarPage;
    this.bildirimlerPage = BildirimlerPage;
    this.guncellemePage = GuncellemePage;
    this.anaSayfa = Anasayfa;
  }

  sayfayaGit(page, param) {
    this.nav.push(page, param);
  }

  closeApplicationConfirm() {
    this.headerProvider.closeApplicationConfirm();
  }

  loadGuncellemeSayisi() {
    this.guncellemeSayisi = this.headerProvider.loadGuncellemeSayisi();
  }

  async loadMesajSayilari() {
    this.duyuruSayisi = await  this.mesajDao.loadDuyuruSayisi();
    this.uyariSayisi = await  this.mesajDao.loadUyariSayisi();
  }

  async loadHizmetSayisi() {
    this.cagriSayisi = await this.hizmetDao.findAcikHizmetSayisi();
  }

  public updateHeader() {
   /* this.loadGuncellemeSayisi();
    this.loadMesajSayilari();
    this.loadHizmetSayisi();
    */
  }
}


