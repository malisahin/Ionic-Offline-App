/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */

import {Component} from "@angular/core";
import {Hizmet} from "../../../entities/hizmet/hizmet";
import {HizmetService} from "../../../providers/hizmet-service/hizmet-service";
import {Pageable} from "../../../entities/Pageable";


@Component({
  selector: 'hizmet-bilgileri',
  templateUrl: 'hizmet-bilgileri.html'
})
export class HizmetBilgileriComponent {

  hizmet: Hizmet = new Hizmet();
  text: string;

  constructor(public hizmetService: HizmetService) {
    console.log('Hello HizmetBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = this.hizmetService.getHizmet();
    this.getHizmet();

  }

  fetchHizmet() {
    if (this.hizmet.seqNo == null || this.hizmet.seqNo == "") {
      this.hizmet = this.hizmetService.getHizmet();
    }
  }

  getHizmet() {
    this.hizmetService.fetchHizmetWithPage(this.hizmet, new Pageable).then(res => {
      if(res.rows.length > 0) {
        this.hizmet = JSON.parse(res.rows.item(0).data);
        this.hizmetService.setHizmet(this.hizmet)
      }
    });
  }


}
