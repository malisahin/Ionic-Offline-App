import { NgModule } from '@angular/core';
import { CagrilarComponent } from './cagrilar/cagrilar';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { HeaderComponent } from './header/header';
@NgModule({
	declarations: [CagrilarComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent],
	imports: [],
	exports: [CagrilarComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent]
})
export class ComponentsModule {}
