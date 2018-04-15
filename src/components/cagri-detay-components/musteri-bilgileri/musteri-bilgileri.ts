/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {Component} from '@angular/core';
import {Hizmet} from '../../../entities/hizmet/hizmet';
import {HizmetService} from '../../../providers/hizmet-service/hizmet-service';
import {Sehir} from "../../../entities/Sehir";
import {Ilce} from "../../../entities/ilce";
import {Mahalle} from "../../../entities/mahalle";

@Component({
  selector: 'musteri-bilgileri',
  templateUrl: 'musteri-bilgileri.html'
})
export class MusteriBilgileriComponent {

  text: string;
  hizmet: Hizmet = new Hizmet();
  sehirler: Sehir[];
  ilceler: Ilce[];
  mahalleler: Mahalle[];

  constructor(private hizmetService: HizmetService) {
    console.log('Hello MusteriBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = this.hizmetService.getHizmet();
    this.sehirler = [];
    this.ilceler = [];
    this.mahalleler = [];
  }


}
