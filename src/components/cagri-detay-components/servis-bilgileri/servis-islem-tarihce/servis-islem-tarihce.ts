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

  async loadTarihce() {

    if (this.util.isNotEmpty(this.hizmet.islemList)) {
      let tempIslemList: IslemList[] = this.util.assignList(this.hizmet.islemList);

      if (this.util.isNotEmpty(tempIslemList)) {
        tempIslemList
          .filter(islem => this.util.isNotEmpty(islem.basTar))
          .forEach(islem => this.tarihceList.push(islem));

        this.hizmet.islemList = this.util.assignList(this.tarihceList);

        await this.hizmetService.saveAndFetchHizmet(this.hizmet);

      }
    }

  }


}
