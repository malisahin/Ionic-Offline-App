/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { Hizmet } from '../../../entities/hizmet/hizmet';
import { HizmetService } from '../../../providers/hizmet-service/hizmet-service';


@Component({
  selector: 'servis-bilgileri',
  templateUrl: 'servis-bilgileri.html'
})
export class ServisBilgileriComponent {

  activePage: string = "servis";
  text: string;
  hizmet: Hizmet = new Hizmet();

  constructor(private hizmetService: HizmetService) {
    console.log('Hello ServisBilgileriComponent Component');
    this.text = 'Hello World';
  }

}
