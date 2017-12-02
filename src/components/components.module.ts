import { NgModule } from '@angular/core';
import { CagrilarComponent } from './cagrilar/cagrilar';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
@NgModule({
	declarations: [CagrilarComponent,
    LoginComponent,
    HomeComponent],
	imports: [],
	exports: [CagrilarComponent,
    LoginComponent,
    HomeComponent]
})
export class ComponentsModule {}
