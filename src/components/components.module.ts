import { NgModule } from '@angular/core';
import { CagrilarComponent } from './cagrilar/cagrilar';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { HeaderComponent } from './header/header';
import { MusteriBilgileriComponent } from './cagri-detay-components/musteri-bilgileri/musteri-bilgileri';
import { HizmetBilgileriComponent } from './cagri-detay-components/hizmet-bilgileri/hizmet-bilgileri';
import { UrunBilgileriComponent } from './cagri-detay-components/urun-bilgileri/urun-bilgileri';
import { ServisBilgileriComponent } from './cagri-detay-components/servis-bilgileri/servis-bilgileri';
@NgModule({
	declarations: [CagrilarComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MusteriBilgileriComponent,
    HizmetBilgileriComponent,
    UrunBilgileriComponent,
    ServisBilgileriComponent],
	imports: [],
	exports: [CagrilarComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MusteriBilgileriComponent,
    HizmetBilgileriComponent,
    UrunBilgileriComponent,
    ServisBilgileriComponent]
})
export class ComponentsModule {}
