import {NgModule} from '@angular/core';
import {SafeHtmlPipe} from './safe-html/safe-html';
import {DateFormatPipe} from './date-format/date-format';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    DateFormatPipe
  ],
  imports: [],
  exports: [
    SafeHtmlPipe,
    DateFormatPipe
  ]
})
export class PipesModule {
}
