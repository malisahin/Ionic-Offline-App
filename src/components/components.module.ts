/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { NgModule } from '@angular/core';
import { CagrilarComponent } from './cagrilar/cagrilar';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { HeaderComponent } from './header/header';
import { MusteriBilgileriComponent } from './cagri-detay-components/musteri-bilgileri/musteri-bilgileri';
import { HizmetBilgileriComponent } from './cagri-detay-components/hizmet-bilgileri/hizmet-bilgileri';
import { UrunBilgileriComponent } from './cagri-detay-components/urun-bilgileri/urun-bilgileri';
import { DetayBilgileriComponent } from './cagri-detay-components/detay-bilgileri/detay-bilgileri';
import { ServisBilgileriComponent } from './cagri-detay-components/servis-bilgileri/servis-bilgileri';
import { ServisIslemTarihceComponent } from './cagri-detay-components/servis-bilgileri/servis-islem-tarihce/servis-islem-tarihce';
import { IslemTarihComponent } from './cagri-detay-components/servis-bilgileri/islem-tarih/islem-tarih';
import { ListComponent } from './list/list';

@NgModule({
    declarations: [CagrilarComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        MusteriBilgileriComponent,
        HizmetBilgileriComponent,
        UrunBilgileriComponent,
        ServisBilgileriComponent,
        DetayBilgileriComponent,
        ServisIslemTarihceComponent,
        IslemTarihComponent,
    ListComponent],
    imports: [],
    exports: [CagrilarComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        MusteriBilgileriComponent,
        HizmetBilgileriComponent,
        UrunBilgileriComponent,
        ServisBilgileriComponent,
        DetayBilgileriComponent,
        ServisIslemTarihceComponent,
        IslemTarihComponent,
    ListComponent]
})
export class ComponentsModule { }
