import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KutuphanePage } from './kutuphane';

@NgModule({
  declarations: [
    KutuphanePage,
  ],
  imports: [
    IonicPageModule.forChild(KutuphanePage),
  ],
})
export class KutuphanePageModule {}
