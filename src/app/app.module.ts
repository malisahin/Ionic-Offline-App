import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler,
  ToastController,
  NavController
} from "ionic-angular";
import { MyApp } from "./app.component";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthService } from "../providers/auth-service/auth-service";
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
import { HizmetDao } from "../providers/hizmet-dao/hizmet-dao";
import { BaseDao } from "../providers/base-dao/base-dao";
import { FiyatDao } from "../providers/fiyat-dao/fiyat-dao";
import { HizmetService } from "../providers/hizmet-service/hizmet-service";
import { SQLitePorter } from "@ionic-native/sqlite-porter";
import { VersiyonProvider } from "../providers/versiyon/versiyon";
import { NativeStorage } from "@ionic-native/native-storage";
import { HttpClientModule } from "@angular/common/http";
import { MesajlarProvider } from "../providers/mesajlar/mesajlar";
import { BilgiSorguPage } from "../pages/bilgi-sorgu/bilgi-sorgu";
import { UrunAnaGrupDao } from "../providers/urun-ana-grup-dao/urun-ana-grup-dao";
import { UrunDao } from "../providers/urun-dao/urun-dao";
import { UrunMalzemeDao } from "../providers/urun-malzeme-dao/urun-malzeme-dao";
import { IslemArizaIscilikDao } from "../providers/islem-ariza-iscilik-dao/islem-ariza-iscilik-dao";
import { UtilProvider } from "../providers/util/util";
import { Toast } from "@ionic-native/toast";
import { UrunIscilikDao } from "../providers/urun-iscilik-dao/urun-iscilik-dao";
import { MesajlarDao } from "../providers/mesajlar-dao/mesajlar-dao";
import { UrunAnaGrupSearchComponent } from "../components/urun-ana-grup-search/urun-ana-grup-search";
import { UrunSearchComponent } from "../components/urun-search/urun-search";
import { GarantiSorguProvider } from "../providers/garanti-sorgu/garanti-sorgu";
import { SharedModule } from "../pages/shared-module/shared-module.module";
import { CagrilarPageModule } from "../pages/cagrilar/cagrilar.module";
import { GuncellemePageModule } from "../pages/guncelleme/guncelleme.module";
import { KampanyalarPageModule } from "../pages/kampanyalar/kampanyalar.module";
import { KutuphanePageModule } from "../pages/kutuphane/kutuphane.module";
import { CagriDetayPageModule } from "../pages/cagri-detay/cagri-detay.module";
import { BilgiSorguPageModule } from "../pages/bilgi-sorgu/bilgi-sorgu.module";
import { BildirimlerPageModule } from "../pages/bildirimler/bildirimler.module";
import { AdresProvider } from "../providers/adres/adres";
import { AdresDao } from "../providers/adres-dao/adres-dao";
import { LoggerProvider } from "../providers/logger/logger";
import { GarantiSonucComponent } from "../components/garanti-sonuc/garanti-sonuc";
import { GarantiSorguComponent } from "../components/garanti-sorgu/garanti-sorgu";
import { HizmetDetayComponent } from "../components/hizmet-detay/hizmet-detay";
import { DetayPiySearchComponent } from "../components/detay-piy-search/detay-piy-search";
import { UserProvider } from "../providers/user/user";
import { UserDao } from "../providers/user-dao/user-dao";
import { Network } from "@ionic-native/network";
import { Anasayfa } from "../pages/anasayfa/anasayfa";
import { AnasayfaPageModule } from "../pages/anasayfa/anasayfa.module";
import { MesajDetailComponent } from "../components/mesaj-detail/mesaj-detail";
import { HeaderProvider } from "../providers/header/header";
import { PrinterService } from "../providers/printer-service/printer-service";
import { ZebraPrinterComponent } from "../components/zebra-printer/zebra-printer";
import { SeriNoSorguProvider } from "../providers/seri-no-sorgu/seri-no-sorgu";
import { UpdateUrunAnaGrupComponent } from "../components/update-urun-ana-grup/update-urun-ana-grup";
import { UrunIscilikSearchComponent } from "../components/urun-iscilik-search/urun-iscilik-search";
import { TasksProvider } from "../providers/tasks/tasks";
import { ThemeProvider } from "../providers/theme/theme";
import { Deeplinks } from "@ionic-native/deeplinks";
import { DeeplinkPrinterProvider } from "../providers/deeplink-printer/deeplink-printer";
import { LoginPageModule } from "../pages/login/login.module";
import { CagriAramaModalPageModule } from "../pages/cagrilar/cagri-arama-modal/cagri-arama-modal.module";
import {MalzemeSearchComponent} from "../components/malzeme-search/malzeme-search";

@NgModule({
  declarations: [MyApp, ListComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SharedModule,
    CagrilarPageModule,
    GuncellemePageModule,
    KampanyalarPageModule,
    KutuphanePageModule,
    CagriDetayPageModule,
    BilgiSorguPageModule,
    BildirimlerPageModule,
    AnasayfaPageModule,
    LoginPageModule,
    CagriAramaModalPageModule
  ],
  exports: [],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BildirimlerPage,
    CagrilarPage,
    GuncellemePage,
    KampanyalarPage,
    KutuphanePage,
    CagriDetayPage,
    LoginPage,
    CagriAramaModalPage,
    ListComponent,
    BilgiSorguPage,
    UrunSearchComponent,
    UrunAnaGrupSearchComponent,
    GarantiSonucComponent,
    GarantiSorguComponent,
    HizmetDetayComponent,
    DetayPiySearchComponent,
    Anasayfa,
    MesajDetailComponent,
    ZebraPrinterComponent,
    UpdateUrunAnaGrupComponent,
    UrunIscilikSearchComponent,
    MalzemeSearchComponent
  ],
  providers: [
    Network,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //{ provide: SQLite, useClass: SQLiteMock },
    AuthService,
    LoginProvider,
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
    MesajlarProvider,
    SQLite,
    SQLitePorter,
    UrunAnaGrupDao,
    UrunDao,
    UrunMalzemeDao,
    IslemArizaIscilikDao,
    UtilProvider,
    Toast,
    ToastController,
    UrunIscilikDao,
    MesajlarDao,
    GarantiSorguProvider,
    AdresProvider,
    AdresDao,
    LoggerProvider,
    UserProvider,
    UserDao,
    HeaderProvider,
    PrinterService,
    SeriNoSorguProvider,
    TasksProvider,
    VersiyonProvider,
    ThemeProvider,
    Deeplinks,
    DeeplinkPrinterProvider
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {}
}
