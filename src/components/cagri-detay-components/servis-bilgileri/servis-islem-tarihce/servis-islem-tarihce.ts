import {Component} from "@angular/core";
import {HizmetService} from "../../../../providers/hizmet-service/hizmet-service";
import {Hizmet} from "../../../../entities/hizmet/hizmet";
import {IslemList} from "../../../../entities/hizmet/islemList";
import {UtilProvider} from "../../../../providers/util/util";

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

  tarihceList: IslemList[];

  constructor(private  hizmetService: HizmetService,
              private    util: UtilProvider) {

    this.hizmet = this.hizmetService.getHizmet();
    this.tarihceList = [];
    this.loadTarihce();

  }

  loadTarihce() {
    if (this.util.isNotEmpty(this.hizmet.islemList) )
      this.tarihceList = this.hizmet.islemList;
  }


}
