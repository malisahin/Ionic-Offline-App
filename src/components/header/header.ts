/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular/navigation/nav-controller';
import {MesajlarDao} from "../../providers/mesajlar-dao/mesajlar-dao";
import {HizmetDao} from "../../providers/hizmet-dao/hizmet-dao";
import {HeaderProvider} from "../../providers/header/header";


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

  constructor(private nav: NavController,
              private  mesajDao: MesajlarDao,
              private  hizmetDao: HizmetDao,
              private  headerProvider: HeaderProvider) {
    this.loadGuncellemeSayisi();
    this.loadMesajSayilari();
    this.loadHizmetSayisi();
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

}


