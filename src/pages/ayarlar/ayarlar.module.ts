import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AyarlarPage } from './ayarlar';

@NgModule({
  declarations: [
    AyarlarPage,
  ],
  imports: [
    IonicPageModule.forChild(AyarlarPage),
  ],
})
export class AyarlarPageModule {}
