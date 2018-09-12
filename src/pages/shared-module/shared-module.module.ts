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
import { ZebraPrinterComponent } from "../../components/zebra-printer/zebra-printer";
import { MalzemeSearchComponent } from "../../components/malzeme-search/malzeme-search";
import { AnketComponent } from "../../components/anket/anket";
import { SpinnerComponent } from "../../components/spinner/spinner";
import {UrunMalzemeIliskisiComponent} from "../../components/urun-malzeme-iliskisi/urun-malzeme-iliskisi";
import {UrunMalzemeIliskisiSorguSonucComponent} from "../../components/urun-malzeme-iliskisi-sorgu-sonuc/urun-malzeme-iliskisi-sorgu-sonuc";


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
    ZebraPrinterComponent,
    MalzemeSearchComponent,
    AnketComponent,
    SpinnerComponent,
    UrunMalzemeIliskisiComponent,
    UrunMalzemeIliskisiSorguSonucComponent
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
    ZebraPrinterComponent,
    MalzemeSearchComponent,
    AnketComponent,
    SpinnerComponent,
    UrunMalzemeIliskisiComponent,
    UrunMalzemeIliskisiSorguSonucComponent

  ]
})
export class SharedModule {
}
