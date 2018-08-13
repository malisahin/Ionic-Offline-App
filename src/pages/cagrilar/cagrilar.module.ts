import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CagrilarPage } from './cagrilar';
import { SharedModule } from '../shared-module/shared-module.module';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    CagrilarPage,
  ],
  imports: [
    IonicPageModule.forChild(CagrilarPage), SharedModule, PipesModule
  ],
  exports: [CagrilarPage]
})
export class CagrilarPageModule { }
