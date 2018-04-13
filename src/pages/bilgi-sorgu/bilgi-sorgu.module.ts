import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BilgiSorguPage } from './bilgi-sorgu';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    BilgiSorguPage,
  ],
  imports: [
    IonicPageModule.forChild(BilgiSorguPage),
    SharedModule
  ],
})
export class BilgiSorguPageModule { }
