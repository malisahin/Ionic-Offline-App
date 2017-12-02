import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KampanyalarPage } from './kampanyalar';

@NgModule({
  declarations: [
    KampanyalarPage,
  ],
  imports: [
    IonicPageModule.forChild(KampanyalarPage),
  ],
})
export class KampanyalarPageModule {}
