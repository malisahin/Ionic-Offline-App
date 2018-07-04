/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */

import { Component } from "@angular/core";
import { Hizmet } from "../../../entities/hizmet/hizmet";
import { HizmetService } from "../../../providers/hizmet-service/hizmet-service";
import { Pageable } from "../../../entities/Pageable";
import { UtilProvider } from "../../../providers/util/util";
import { Constants } from "../../../entities/Constants";


@Component({
  selector: 'hizmet-bilgileri',
  templateUrl: 'hizmet-bilgileri.html'
})
export class HizmetBilgileriComponent {

  hizmet: Hizmet = new Hizmet();
  text: string;

  randevuTarihi: any;
  cagriTarihi: any;

  constructor(public hizmetService: HizmetService,
    private util: UtilProvider) {

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
    this.hizmetService.fetchHizmetWithPage(this.hizmet, new Pageable).then(result => {
      if (result.res.rows.length > 0) {
        this.hizmet = JSON.parse(result.res.rows.item(0).data);
        this.hizmetService.setHizmet(this.hizmet);

        this.randevuTarihi = this.util.dateFormatRegex(this.hizmet.randevuTarihi, Constants.DATE_FORMAT);
        this.cagriTarihi = this.util.dateFormatRegex(this.hizmet.cagriTarihi, Constants.DATE_FORMAT);
      }
    });
  }

  find


}
