import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CagrilarPage } from './cagrilar';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    CagrilarPage,
  ],
  imports: [
    IonicPageModule.forChild(CagrilarPage), SharedModule
  ],
  exports: [CagrilarPage]
})
export class CagrilarPageModule { }
