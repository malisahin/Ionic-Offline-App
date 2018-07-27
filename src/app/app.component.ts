import {Component, ViewChild, enableProdMode} from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CagrilarPage} from '../pages/cagrilar/cagrilar';
import {BildirimlerPage} from '../pages/bildirimler/bildirimler';
import {GuncellemePage} from '../pages/guncelleme/guncelleme';
import {KutuphanePage} from '../pages/kutuphane/kutuphane';
import {AyarlarPage} from '../pages/ayarlar/ayarlar';
import {LoginPage} from '../pages/login/login';
import {DatabaseProvider} from '../providers/database/database';
import {BilgiSorguPage} from '../pages/bilgi-sorgu/bilgi-sorgu';
import {ThemeProvider} from "../providers/theme/theme";
import {LoggerProvider} from "../providers/logger/logger";
import {Deeplinks} from "@ionic-native/deeplinks";
import {ZebraPrinterComponent} from "../components/zebra-printer/zebra-printer";
import {DeeplinkPrinterProvider} from "../providers/deeplink-printer/deeplink-printer";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{ title: string, component: any, active: boolean, icon: string, param: any }>;
  rootPage: any = LoginPage;

  selectedTheme: string;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private logger: LoggerProvider,
              private themeProvider: ThemeProvider,
              private  deepLinkPrinter: DeeplinkPrinterProvider,
              public db: DatabaseProvider) {

    this.enableProductionMode();
    this.initializeApp();
    this.selectedTheme = this.themeProvider.setTheme();
    this.logger.warn("SELECTED DEFAULT THEME" + this.selectedTheme);
  }

  initializeApp() {
    this.platform.ready().then(() => {


      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.db.createDatabase();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component, page.param);
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => this.deepLinkPrinter.init());
  }

  sideMenu() {
    this.pages = [
      {title: 'Çağrılar', component: CagrilarPage, active: true, icon: 'home', param: {}},
      {title: 'Duyurular', component: BildirimlerPage, active: false, icon: 'map', param: {type: 'WARN'}},
      {title: 'Uyarılar', component: BildirimlerPage, active: false, icon: 'ionic', param: {type: 'URGENT'}},
      {title: 'Güncelleme', component: GuncellemePage, active: false, icon: 'ionic', param: {}},
      {title: 'Bilgi Sorgu', component: BilgiSorguPage, active: false, icon: 'body', param: {}},
      {title: 'E-Kütüphane', component: KutuphanePage, active: false, icon: 'bookmarks', param: {}},
      {title: 'Ayarlar', component: AyarlarPage, active: false, icon: 'book', param: {}}
    ];
  }

  enableProductionMode() {



    if (this.platform.is('ios') || this.platform.is('android') || this.platform.is('windows')) {
      enableProdMode();
    }
  }

}
