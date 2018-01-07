/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { Hizmet } from '../../../entities/hizmet/hizmet';


@Component({
  selector: 'servis-bilgileri',
  templateUrl: 'servis-bilgileri.html'
})
export class ServisBilgileriComponent {

  activePage: string = "servis";
  text: string;
  hizmet: Hizmet;

  constructor() {
    console.log('Hello ServisBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Hizmet();
  }

}
