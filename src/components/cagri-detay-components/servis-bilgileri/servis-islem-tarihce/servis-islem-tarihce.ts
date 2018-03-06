import {Component} from "@angular/core";
import {HizmetService} from "../../../../providers/hizmet-service/hizmet-service";
import {Hizmet} from "../../../../entities/hizmet/hizmet";

/**
 * Generated class for the ServisIslemTarihceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'servis-islem-tarihce',
  templateUrl: 'servis-islem-tarihce.html'
})
export class ServisIslemTarihceComponent {

  text: string;
  hizmet: Hizmet = new Hizmet();

  constructor(private  hizmetService: HizmetService) {
    console.log('Hello ServisIslemTarihceComponent Component');
    this.text = 'Hello World';
    this.hizmet = this.hizmetService.getHizmet();
  }

}
