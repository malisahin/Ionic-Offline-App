import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BildirimlerPage } from './bildirimler';

@NgModule({
  declarations: [
    BildirimlerPage,
  ],
  imports: [
    IonicPageModule.forChild(BildirimlerPage),
  ],
})
export class BildirimlerPageModule {}
