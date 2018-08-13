import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CagriDetayPage } from './cagri-detay';
import { HizmetBilgileriComponent } from '../../components/cagri-detay-Components/hizmet-bilgileri/hizmet-bilgileri';
import { MusteriBilgileriComponent } from '../../components/cagri-detay-Components/musteri-bilgileri/musteri-bilgileri';
import { ServisBilgileriComponent } from '../../components/cagri-detay-components/servis-bilgileri/servis-bilgileri';
import { UrunBilgileriComponent } from '../../components/cagri-detay-Components/urun-bilgileri/urun-bilgileri';
import { DetayBilgileriComponent } from '../../components/cagri-detay-components/detay-bilgileri/detay-bilgileri';
import { IslemTarihComponent } from '../../components/cagri-detay-components/servis-bilgileri/islem-tarih/islem-tarih';
import { ServisIslemTarihceComponent } from '../../components/cagri-detay-components/servis-bilgileri/servis-islem-tarihce/servis-islem-tarihce';
import { SharedModule } from '../shared-module/shared-module.module';
import { HizmetDetayComponent } from "../../components/hizmet-detay/hizmet-detay";
import { DetayPiySearchComponent } from '../../components/detay-piy-search/detay-piy-search';
import {UpdateUrunAnaGrupComponent} from "../../components/update-urun-ana-grup/update-urun-ana-grup";
import {PipesModule} from "../../pipes/pipes.module";


@NgModule({
  declarations: [
    CagriDetayPage,
    HizmetBilgileriComponent,
    MusteriBilgileriComponent,
    ServisBilgileriComponent,
    UrunBilgileriComponent,
    DetayBilgileriComponent,
    IslemTarihComponent,
    ServisIslemTarihceComponent,
    HizmetDetayComponent,
    DetayPiySearchComponent,
    UpdateUrunAnaGrupComponent
  ],
  imports: [
    IonicPageModule.forChild(CagriDetayPage), SharedModule, PipesModule
  ],
})
export class CagriDetayPageModule { }
