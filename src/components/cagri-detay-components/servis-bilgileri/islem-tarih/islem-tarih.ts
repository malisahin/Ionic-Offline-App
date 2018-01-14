/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { HizmetService } from '../../../../providers/hizmet-service/hizmet-service';
import { Hizmet } from '../../../../entities/hizmet/hizmet';


@Component({
  selector: 'islem-tarih',
  templateUrl: 'islem-tarih.html'
})
export class IslemTarihComponent {

  hizmet: Hizmet = new Hizmet();
  text: string;

  constructor(private hizmetService: HizmetService) {
    console.log('Hello IslemTarihComponent Component');
    this.text = 'Hello World';
    //this.hizmet = this.hizmetService.getHizmet();
  }

}
