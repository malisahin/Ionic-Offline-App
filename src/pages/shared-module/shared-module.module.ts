import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModulePage } from './shared-module';
import { HeaderComponent } from '../../components/header/header';
import { GarantiSorguComponent } from '../../components/garanti-sorgu/garanti-sorgu';
import { GarantiSonucComponent } from '../../components/garanti-sonuc/garanti-sonuc';
import { FiyatSorguComponent } from '../../components/fiyat-sorgu/fiyat-sorgu';
import { UrunAnaGrupSearchComponent } from '../../components/urun-ana-grup-search/urun-ana-grup-search';
import { UrunSearchComponent } from '../../components/urun-search/urun-search';
import { UrunIscilikSearchComponent } from '../../components/urun-iscilik-search/urun-iscilik-search';
import {PrinterComponent} from "../../components/printer/printer";

@NgModule({
  declarations: [

    SharedModulePage,
    HeaderComponent,
    GarantiSorguComponent,
    GarantiSonucComponent,
    FiyatSorguComponent,
    UrunAnaGrupSearchComponent,
    UrunSearchComponent,
    UrunIscilikSearchComponent,
    PrinterComponent
  ],
  imports: [
    IonicPageModule.forChild(HeaderComponent),
  ],
  exports: [
    HeaderComponent,
    GarantiSonucComponent,
    GarantiSorguComponent,
    FiyatSorguComponent,
    UrunAnaGrupSearchComponent,
    UrunSearchComponent,
    UrunIscilikSearchComponent,
    PrinterComponent
  ]
})
export class SharedModule { }
