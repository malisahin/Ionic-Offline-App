import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuncellemePage } from './guncelleme';

@NgModule({
  declarations: [
    GuncellemePage,
  ],
  imports: [
    IonicPageModule.forChild(GuncellemePage),
  ],
})
export class GuncellemePageModule {}
