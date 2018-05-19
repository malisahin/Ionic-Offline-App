/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular/navigation/nav-controller';
import {AlertController, Platform} from 'ionic-angular';


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
              private alert: AlertController,
              private platform: Platform) {
    console.log('Hello HeaderComponent Component');
  }


  sayfayaGit(page) {
    this.nav.push(page);
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


}
