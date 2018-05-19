import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Anasayfa} from './anasayfa';
import {SharedModule} from "../shared-module/shared-module.module";
import {AyarlarPageModule} from "../ayarlar/ayarlar.module";

@NgModule({
  declarations: [
    Anasayfa,
  ],
  imports: [
    IonicPageModule.forChild(Anasayfa), SharedModule, AyarlarPageModule
  ],
})
export class AnasayfaPageModule {
}
