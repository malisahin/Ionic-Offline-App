import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuncellemePage } from './guncelleme';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    GuncellemePage,
  ],
  imports: [
    IonicPageModule.forChild(GuncellemePage),
    SharedModule
  ],
})
export class GuncellemePageModule { }
