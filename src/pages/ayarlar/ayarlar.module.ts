import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AyarlarPage } from './ayarlar';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    AyarlarPage,
  ],
  imports: [
    IonicPageModule.forChild(AyarlarPage), SharedModule
  ],
})
export class AyarlarPageModule { }
