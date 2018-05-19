import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BildirimlerPage } from './bildirimler';
import { SharedModule } from '../shared-module/shared-module.module';
import {MesajDetailComponent} from "../../components/mesaj-detail/mesaj-detail";

@NgModule({
  declarations: [
    BildirimlerPage,
    MesajDetailComponent
  ],
  imports: [
    IonicPageModule.forChild(BildirimlerPage), SharedModule
  ],
})
export class BildirimlerPageModule { }
