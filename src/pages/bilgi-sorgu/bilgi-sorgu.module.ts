import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BilgiSorguPage } from './bilgi-sorgu';

@NgModule({
  declarations: [
    BilgiSorguPage,
  ],
  imports: [
    IonicPageModule.forChild(BilgiSorguPage),
  ],
})
export class BilgiSorguPageModule {}
