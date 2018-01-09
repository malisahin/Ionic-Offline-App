import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { LoginComponent } from '../components/login/login';
import { HomeComponent } from '../components/home/home';
import { CagrilarComponent } from '../components/cagrilar/cagrilar';
import { AyarlarPage } from '../pages/ayarlar/ayarlar';
import { BildirimlerPage } from '../pages/bildirimler/bildirimler';
import { CagrilarPage } from '../pages/cagrilar/cagrilar';
import { GuncellemePage } from '../pages/guncelleme/guncelleme';
import { KampanyalarPage } from '../pages/kampanyalar/kampanyalar';
import { KutuphanePage } from '../pages/kutuphane/kutuphane';
import { CagriDetayPage } from '../pages/cagri-detay/cagri-detay';
import { HeaderComponent } from '../components/header/header';
import { HizmetBilgileriComponent } from '../components/cagri-detay-Components/hizmet-bilgileri/hizmet-bilgileri';
import { MusteriBilgileriComponent } from '../components/cagri-detay-Components/musteri-bilgileri/musteri-bilgileri';
import { ServisBilgileriComponent } from '../components/cagri-detay-components/servis-bilgileri/servis-bilgileri';
import { UrunBilgileriComponent } from '../components/cagri-detay-Components/urun-bilgileri/urun-bilgileri';
import { DetayBilgileriComponent } from '../components/cagri-detay-components/detay-bilgileri/detay-bilgileri';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';
import { TokenProvider } from '../providers/token/token';
import { HttpClientModule } from '@angular/common/http/';
import { ApiProvider } from '../providers/api/api';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { Http, HttpModule } from '@angular/http';
import { UrunIscilik } from '../entities/urun-iscilik';
import { UrunProvider } from '../providers/urun/urun';
import { UrunAnaGrpProvider } from '../providers/urun-ana-grp/urun-ana-grp';
import { UrunIscilikProvider } from '../providers/urun-iscilik/urun-iscilik';
import { UrunMalzemeProvider } from '../providers/urun-malzeme/urun-malzeme';
import { IslemArizaIscilikProvider } from '../providers/islem-ariza-iscilik/islem-ariza-iscilik';
import { FiyatProvider } from '../providers/fiyat/fiyat';
import { CagriAramaModalPage } from '../pages/cagrilar/cagri-arama-modal/cagri-arama-modal';
import { HizmetProvider } from '../providers/hizmet/hizmet';
import { ListComponent } from '../components/list/list';
import { ListPage } from '../pages/list/list';
import { UrunAnaGrpDao } from '../providers/urun-ana-grp-dao/urun-ana-grp-dao';
import { HizmetDao } from '../providers/hizmet-dao/hizmet-dao';
import { BaseDao } from '../providers/base-dao/base-dao';
import { FiyatDao } from '../providers/fiyat-dao/fiyat-dao';
import { UrunDao } from '../providers/urun-dao/urun-dao';
import { HizmetService } from '../providers/hizmet-service/hizmet-service';
import { SQLitePorter } from '@ionic-native/sqlite-porter';

@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    HomeComponent,
    CagrilarComponent,
    AyarlarPage,
    BildirimlerPage,
    CagrilarPage,
    GuncellemePage,
    KampanyalarPage,
    KutuphanePage,
    CagriDetayPage,
    HeaderComponent,
    HizmetBilgileriComponent,
    MusteriBilgileriComponent,
    ServisBilgileriComponent,
    UrunBilgileriComponent,
    DetayBilgileriComponent,
    LoginPage,
    CagriAramaModalPage,
    ListComponent,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  exports: [

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    HomeComponent,
    CagrilarComponent,
    AyarlarPage,
    BildirimlerPage,
    CagrilarPage,
    GuncellemePage,
    KampanyalarPage,
    KutuphanePage,
    CagriDetayPage,
    HeaderComponent,
    HizmetBilgileriComponent,
    MusteriBilgileriComponent,
    ServisBilgileriComponent,
    UrunBilgileriComponent,
    DetayBilgileriComponent,
    LoginPage,
    CagriAramaModalPage,
    ListComponent,
    ListPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    LoginProvider,
    TokenProvider,
    TokenProvider,
    ApiProvider,
    DatabaseProvider,
    SQLite,
    SQLitePorter,
    UrunProvider,
    UrunAnaGrpProvider,
    UrunIscilikProvider,
    UrunMalzemeProvider,
    IslemArizaIscilikProvider,
    FiyatProvider,
    HizmetProvider,
    HizmetDao,
    UrunAnaGrpDao,
    HizmetDao,
    BaseDao,
    FiyatDao,
    UrunDao,
    HizmetService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

