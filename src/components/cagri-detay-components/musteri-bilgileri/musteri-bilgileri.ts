/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { Hizmet } from '../../../entities/hizmet/hizmet';
import { HizmetService } from '../../../providers/hizmet-service/hizmet-service';

@Component({
  selector: 'musteri-bilgileri',
  templateUrl: 'musteri-bilgileri.html'
})
export class MusteriBilgileriComponent {

  text: string;
  hizmet: Hizmet;

  constructor(private HizmetService: HizmetService) {
    console.log('Hello MusteriBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Hizmet();
  }


}
