import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler, ToastController } from "ionic-angular";
import { MyApp } from "./app.component";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthService } from "../providers/auth-service/auth-service";
import { LoginComponent } from "../components/login/login";
import { HomeComponent } from "../components/home/home";
import { CagrilarComponent } from "../components/cagrilar/cagrilar";
import { AyarlarPage } from "../pages/ayarlar/ayarlar";
import { BildirimlerPage } from "../pages/bildirimler/bildirimler";
import { CagrilarPage } from "../pages/cagrilar/cagrilar";
import { GuncellemePage } from "../pages/guncelleme/guncelleme";
import { KampanyalarPage } from "../pages/kampanyalar/kampanyalar";
import { KutuphanePage } from "../pages/kutuphane/kutuphane";
import { CagriDetayPage } from "../pages/cagri-detay/cagri-detay";
import { LoginPage } from "../pages/login/login";
import { LoginProvider } from "../providers/login/login";
import { TokenProvider } from "../providers/token/token";
import { ApiProvider } from "../providers/api/api";
import { DatabaseProvider } from "../providers/database/database";
import { SQLite } from "@ionic-native/sqlite";
import { UrunProvider } from "../providers/urun/urun";
import { UrunAnaGrpProvider } from "../providers/urun-ana-grp/urun-ana-grp";
import { UrunIscilikProvider } from "../providers/urun-iscilik/urun-iscilik";
import { UrunMalzemeProvider } from "../providers/urun-malzeme/urun-malzeme";
import { IslemArizaIscilikProvider } from "../providers/islem-ariza-iscilik/islem-ariza-iscilik";
import { FiyatProvider } from "../providers/fiyat/fiyat";
import { CagriAramaModalPage } from "../pages/cagrilar/cagri-arama-modal/cagri-arama-modal";
import { HizmetProvider } from "../providers/hizmet/hizmet";
import { ListComponent } from "../components/list/list";
import { ListPage } from "../pages/list/list";
import { HizmetDao } from "../providers/hizmet-dao/hizmet-dao";
import { BaseDao } from "../providers/base-dao/base-dao";
import { FiyatDao } from "../providers/fiyat-dao/fiyat-dao";
import { HizmetService } from "../providers/hizmet-service/hizmet-service";
import { SQLitePorter } from "@ionic-native/sqlite-porter";
import { SQLiteMock, SQLitePorterMock } from "../providers/sqlite-mock/sqlite-mock";
import { VersiyonProvider } from "../providers/versiyon/versiyon";
import { NativeStorage } from "@ionic-native/native-storage";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MesajlarProvider } from '../providers/mesajlar/mesajlar';
import { BilgiSorguPage } from "../pages/bilgi-sorgu/bilgi-sorgu";
import { UrunAnaGrupDao } from '../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import { UrunDao } from "../providers/urun-dao/urun-dao";
import { UrunMalzemeDao } from "../providers/urun-malzeme-dao/urun-malzeme-dao";
import { IslemArizaIscilikDao } from '../providers/islem-ariza-iscilik-dao/islem-ariza-iscilik-dao';
import { UtilProvider } from '../providers/util/util';
import { Toast } from "@ionic-native/toast";
import { UrunIscilikDao } from '../providers/urun-iscilik-dao/urun-iscilik-dao';
import { MesajlarDao } from '../providers/mesajlar-dao/mesajlar-dao';
import { UrunAnaGrupSearchComponent } from "../components/urun-ana-grup-search/urun-ana-grup-search";
import { UrunSearchComponent } from "../components/urun-search/urun-search";
import { UrunIscilikSearchComponent } from "../components/urun-iscilik-search/urun-iscilik-search";
import { GarantiSorguProvider } from '../providers/garanti-sorgu/garanti-sorgu';
import { SharedModule } from "../pages/shared-module/shared-module.module";
import { CagrilarPageModule } from "../pages/cagrilar/cagrilar.module";
import { GuncellemePageModule } from "../pages/guncelleme/guncelleme.module";
import { KampanyalarPageModule } from "../pages/kampanyalar/kampanyalar.module";
import { KutuphanePageModule } from "../pages/kutuphane/kutuphane.module";
import { CagriDetayPageModule } from "../pages/cagri-detay/cagri-detay.module";
import { BilgiSorguPageModule } from "../pages/bilgi-sorgu/bilgi-sorgu.module";
import { BildirimlerPageModule } from "../pages/bildirimler/bildirimler.module";



@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    HomeComponent,
    CagrilarComponent,
    AyarlarPage,
    LoginPage,
    CagriAramaModalPage,
    ListComponent,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, SharedModule,
    CagrilarPageModule,
    GuncellemePageModule,
    KampanyalarPageModule,
    KutuphanePageModule,
    CagriDetayPageModule,
    BilgiSorguPageModule,
    BildirimlerPageModule
  ],
  exports: [],
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
    LoginPage,
    CagriAramaModalPage,
    ListComponent,
    ListPage,
    BilgiSorguPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //{ provide: SQLite, useClass: SQLiteMock },
    //{ provide: SQLitePorter, useClass: SQLitePorterMock },
    AuthService,
    LoginProvider,
    TokenProvider,
    TokenProvider,
    ApiProvider,
    DatabaseProvider,
    UrunProvider,
    UrunAnaGrpProvider,
    UrunIscilikProvider,
    UrunMalzemeProvider,
    IslemArizaIscilikProvider,
    FiyatProvider,
    HizmetProvider,
    HizmetDao,
    BaseDao,
    FiyatDao,
    HizmetService,
    VersiyonProvider,
    NativeStorage,
    VersiyonProvider,
    MesajlarProvider, SQLite, SQLitePorter,
    UrunAnaGrupDao,
    UrunDao,
    UrunMalzemeDao,
    IslemArizaIscilikDao,
    UtilProvider,
    Toast,
    ToastController,
    UrunIscilikDao,
    MesajlarDao,
    GarantiSorguProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

