import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BildirimlerPage } from './bildirimler';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    BildirimlerPage,
  ],
  imports: [
    IonicPageModule.forChild(BildirimlerPage), SharedModule
  ],
})
export class BildirimlerPageModule { }
