import { Component } from '@angular/core';

/**
 * Generated class for the ZebraPrinterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zebra-printer',
  templateUrl: 'zebra-printer.html'
})
export class ZebraPrinterComponent {

  text: string;

  constructor() {
    console.log('Hello ZebraPrinterComponent Component');
    this.text = 'Hello World';
  }

}
