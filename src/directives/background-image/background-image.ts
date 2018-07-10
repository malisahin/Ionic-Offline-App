import {Directive, ElementRef, Input} from '@angular/core';

/**
 * @author : mali.sahin
 * @since : 10.07.2018
 */

@Directive({
  selector: '[background-image]' // Attribute selector
})
export class BackgroundImageDirective {

  private el: HTMLElement;
  @Input('background-image') backgroundImage: string;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }


  ngAfterViewInit() {
    this.el.style.backgroundImage = 'url(' + this.backgroundImage + ')';
  }

}
