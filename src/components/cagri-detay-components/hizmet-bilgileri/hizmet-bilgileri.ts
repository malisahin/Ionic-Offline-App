/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */

import {Component} from "@angular/core";
import {Hizmet} from "../../../entities/hizmet/hizmet";
import {HizmetService} from "../../../providers/hizmet-service/hizmet-service";
import {UtilProvider} from "../../../providers/util/util";
import {Constants} from "../../../entities/Constants";
import {UrunAnaGrup} from "../../../entities/urunAnaGrup";
import {UrunAnaGrpProvider} from "../../../providers/urun-ana-grp/urun-ana-grp";
import {LoggerProvider} from "../../../providers/logger/logger";
import * as moment from 'moment';


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
              private urunAnaGrpProvider: UrunAnaGrpProvider,
              private logger: LoggerProvider,
              private util: UtilProvider) {

    this.hizmet = this.hizmetService.getHizmet();
    this.getHizmet();

  }

  async fetchHizmet() {
    if (this.util.isNotEmpty(this.hizmet)) {
      this.hizmet = await this.hizmetService.getHizmetBySeqNo(this.hizmet.seqNo);
    }
  }

  async getHizmet() {

    await this.fetchHizmet();

    this.hizmetService.setHizmet(this.hizmet);
    this.randevuTarihi = this.util.dateFormatRegex(this.hizmet.randevuTarihi, Constants.DATE_FORMAT);
    this.cagriTarihi = this.util.dateFormatRegex(this.hizmet.cagriTarihi, Constants.DATE_FORMAT);
    await this.findUrunAnaGrpProvider();
    await this.findBasvuruNedeni();
  }

  async findUrunAnaGrpProvider() {
    if (this.util.isEmpty(this.hizmet.mamAnaGrpAdi) && this.util.isNotEmpty(this.hizmet.mamAnaGrp)) {
      let filter = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
      filter.mamAnaGrp = this.hizmet.mamAnaGrp;
      let result = await  this.urunAnaGrpProvider.findUrunAnaGrp(filter);
      this.logger.dir(result);
      if (this.util.isNotEmpty(result)) {
        this.hizmet.mamAnaGrpAdi = result.ad;
      }

    }
  }

  async findBasvuruNedeni() {
    if (this.util.isNotEmpty(this.hizmet.basvuruNedeni) && this.util.isEmpty(this.hizmet.basvuruNedenAdi)) {
      let filter = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
      filter.neden = this.hizmet.basvuruNedeni;
      filter.mamAnaGrp = this.hizmet.mamAnaGrp;
      let result = await this.urunAnaGrpProvider.findUrunAnaGrp(filter);
      if (this.util.isNotEmpty(result)) {
        this.hizmet.basvuruNedenAdi = result.ad;
      }
    }
  }

  formatDate(date: any): Date {
    /*  this.logger.info("Hizmet  Bilgileri => " + date);

      if(typeof date == "string") {
        date = date.replace(" ", "T");
      }
      let formattedDate = moment(date, "YYYY-MM-DD HH:mm:ss").toDate();
      this.logger.info("Formatted Date => "+ formattedDate);
      return formattedDate;*/


    debugger;
    return new Date(date);
  }


}
