import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
@NgModule({
	declarations: [SafeHtmlPipe],
	imports: [],
	exports: [SafeHtmlPipe]
})
export class PipesModule {}
