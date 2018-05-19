import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CagrilarPage } from '../pages/cagrilar/cagrilar';
import { BildirimlerPage } from '../pages/bildirimler/bildirimler';
import { GuncellemePage } from '../pages/guncelleme/guncelleme';
import { KutuphanePage } from '../pages/kutuphane/kutuphane';
import { AyarlarPage } from '../pages/ayarlar/ayarlar';
import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from '../providers/database/database';
import { BilgiSorguPage } from '../pages/bilgi-sorgu/bilgi-sorgu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rootPage: any = LoginPage;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public db: DatabaseProvider
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Çağrılar', component: CagrilarPage, active: true, icon: 'home' },
      { title: 'Duyurular', component: BildirimlerPage, active: false, icon: 'map' },
      { title: 'Uyarılar', component: BildirimlerPage, active: false, icon: 'ionic' },
      { title: 'Güncelleme', component: GuncellemePage, active: false, icon: 'ionic' },
      { title: 'Bilgi Sorgu', component: BilgiSorguPage, active: false, icon: 'body' },
      { title: 'E-Kütüphane', component: KutuphanePage, active: false, icon: 'bookmarks' },
      { title: 'Ayarlar', component: AyarlarPage, active: false, icon: 'book' }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.db.createDatabase();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
