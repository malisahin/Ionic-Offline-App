import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
    KutuphanePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    KutuphanePage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService
  ]
})
export class AppModule { }
