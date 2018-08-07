/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { NgModule } from '@angular/core';
import { MalzemeSearchComponent } from './malzeme-search/malzeme-search';
import { AnketComponent } from './anket/anket';

@NgModule({
  declarations: [
    MalzemeSearchComponent,
    AnketComponent
  ],
  imports: [],
  exports: [
    MalzemeSearchComponent,
    AnketComponent
  ]
})
export class ComponentsModule {
}
