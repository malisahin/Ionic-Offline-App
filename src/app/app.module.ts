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
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    LoginProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
