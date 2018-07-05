/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {Component} from '@angular/core';
import {Hizmet} from '../../../entities/hizmet/hizmet';
import {HizmetService} from '../../../providers/hizmet-service/hizmet-service';
import {Sehir} from "../../../entities/Sehir";
import {Ilce} from "../../../entities/Ilce";
import {Mahalle} from "../../../entities/mahalle";
import {AdresDao} from "../../../providers/adres-dao/adres-dao";
import {LoggerProvider} from "../../../providers/logger/logger";
import {UtilProvider} from "../../../providers/util/util";
import {Constants} from "../../../entities/Constants";

@Component({
  selector: 'musteri-bilgileri',
  templateUrl: 'musteri-bilgileri.html',
})
export class MusteriBilgileriComponent {

  text: string;
  hizmet: Hizmet = new Hizmet();
  sehirler: Sehir[];
  ilceler: Ilce[];
  mahalleler: Mahalle[];

  evTel: string;
  isTel: string;
  cepTel: string;

  constructor(private hizmetService: HizmetService,
              private adresDao: AdresDao,
              private logger: LoggerProvider,
              private util: UtilProvider) {
    this.sehirler = [];
    this.ilceler = [];
    this.mahalleler = [];
    this.hizmet = this.hizmetService.getHizmet();
    this.getSehirList();
    this.getIlceList(this.hizmet.sehirKod);
    this.getMahalleList(this.hizmet.ilceKod);
    this.init();
  }

  init() {
    this.evTel = this.util.phoneMask(this.hizmet.evTel);
    this.isTel = this.util.phoneMask(this.hizmet.isTel);
    this.cepTel = this.util.phoneMask(this.hizmet.gsmNo);
  }

  ionViewWillLeave() {
    this.hizmetService.saveAndFetchHizmet(this.hizmet);
  }

  ionViewDidLeave() {
    this.logger.log("ionViewDidLeave");
    this.hizmetService.saveAndFetchHizmet(this.hizmet);
  }

  async getSehirList() {
    await this.adresDao.getSehirList().then(res => {
      for (let i = 0; i < res.rows.length; i++) {
        this.sehirler.push(res.rows.item(i));
      }
      this.logger.dir(res);
    });
  }

  async getIlceList(item: any) {
    this.hizmet.ilceKod = "";
    if (this.util.isNotEmpty(this.hizmet.sehirKod))
      await this.adresDao.getIlceList(this.hizmet.sehirKod).then(res => {
        for (let i = 0; i < res.rows.length; i++) {
          this.ilceler.push(res.rows.item(i));
        }
        this.onHizmetChange();
      });
  }

  async getMahalleList(item: any) {
    this.hizmet.mahalleKodu = "";
    await this.adresDao.getMahalleList(this.hizmet.ilceKod).then(res => {
      for (let i = 0; i < res.rows.length; i++) {
        this.mahalleler.push(res.rows.item(i));
      }
      this.onHizmetChange();
    });
  }

  async onHizmetChange() {
    this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
  }

  isHizmetDisabled(): boolean {
    return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
  }


}
