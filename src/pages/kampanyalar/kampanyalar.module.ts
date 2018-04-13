import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KampanyalarPage } from './kampanyalar';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    KampanyalarPage,
  ],
  imports: [
    IonicPageModule.forChild(KampanyalarPage),
    SharedModule
  ],
})
export class KampanyalarPageModule { }
