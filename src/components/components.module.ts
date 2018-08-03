/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header';
import {MusteriBilgileriComponent} from './cagri-detay-components/musteri-bilgileri/musteri-bilgileri';
import {HizmetBilgileriComponent} from './cagri-detay-components/hizmet-bilgileri/hizmet-bilgileri';
import {UrunBilgileriComponent} from './cagri-detay-components/urun-bilgileri/urun-bilgileri';
import {DetayBilgileriComponent} from './cagri-detay-components/detay-bilgileri/detay-bilgileri';
import {ServisBilgileriComponent} from './cagri-detay-components/servis-bilgileri/servis-bilgileri';
import {ServisIslemTarihceComponent} from './cagri-detay-components/servis-bilgileri/servis-islem-tarihce/servis-islem-tarihce';
import {IslemTarihComponent} from './cagri-detay-components/servis-bilgileri/islem-tarih/islem-tarih';
import {ListComponent} from './list/list';
import {GarantiSorguComponent} from './garanti-sorgu/garanti-sorgu';
import {FiyatSorguComponent} from './fiyat-sorgu/fiyat-sorgu';
import {UrunAnaGrupSearchComponent} from './urun-ana-grup-search/urun-ana-grup-search';
import {UrunSearchComponent} from './urun-search/urun-search';
import {UrunIscilikSearchComponent} from './urun-iscilik-search/urun-iscilik-search';
import {GarantiSonucComponent} from './garanti-sonuc/garanti-sonuc';
import {HizmetDetayComponent} from './hizmet-detay/hizmet-detay';
import {DetayPiySearchComponent} from './detay-piy-search/detay-piy-search';
import {MesajDetailComponent} from './mesaj-detail/mesaj-detail';
import {ZebraPrinterComponent} from "./zebra-printer/zebra-printer";
import { UpdateUrunAnaGrupComponent } from './update-urun-ana-grup/update-urun-ana-grup';
import { MalzemeSearchComponent } from './malzeme-search/malzeme-search';
import { AnketComponent } from './anket/anket';

@NgModule({
  declarations: [MalzemeSearchComponent,
    AnketComponent
    /*HeaderComponent,
    MusteriBilgileriComponent,
    HizmetBilgileriComponent,
    UrunBilgileriComponent,
    ServisBilgileriComponent,
    DetayBilgileriComponent,
    ServisIslemTarihceComponent,
    IslemTarihComponent,
    ListComponent,
    GarantiSorguComponent,
    FiyatSorguComponent,
    UrunAnaGrupSearchComponent,
    UrunSearchComponent,
    UrunIscilikSearchComponent,
    GarantiSonucComponent,
    HizmetDetayComponent,
    DetayPiySearchComponent,
    MesajDetailComponent,
    ZebraPrinterComponent,
    UpdateUrunAnaGrupComponent,*/
  ],
  imports: [],
  exports: [MalzemeSearchComponent,
    AnketComponent
 /*   HeaderComponent,
    MusteriBilgileriComponent,
    HizmetBilgileriComponent,
    UrunBilgileriComponent,
    ServisBilgileriComponent,
    DetayBilgileriComponent,
    ServisIslemTarihceComponent,
    IslemTarihComponent,
    ListComponent,
    GarantiSorguComponent,
    FiyatSorguComponent,
    UrunAnaGrupSearchComponent,
    UrunSearchComponent,
    UrunIscilikSearchComponent,
    GarantiSonucComponent,
    HizmetDetayComponent,
    DetayPiySearchComponent,
    MesajDetailComponent,
    ZebraPrinterComponent,
    UpdateUrunAnaGrupComponent*/
  ]
})
export class ComponentsModule {
}
