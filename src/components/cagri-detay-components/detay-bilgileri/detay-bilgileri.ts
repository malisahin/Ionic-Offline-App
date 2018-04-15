/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {Component} from "@angular/core";
import {Hizmet} from "../../../entities/hizmet/hizmet";
import {HizmetService} from "../../../providers/hizmet-service/hizmet-service";
import {DetayKayit} from "../../../entities/hizmet/DetayKayit";
import {UtilProvider} from "../../../providers/util/util";
import {LoggerProvider} from "../../../providers/logger/logger";
import {UrunAnaGrup} from "../../../entities/urunAnaGrup";
import {UrunAnaGrupDao} from "../../../providers/urun-ana-grup-dao/urun-ana-grup-dao";
import {Constants} from "../../../entities/Constants";


@Component({
  selector: 'detay-bilgileri',
  templateUrl: 'detay-bilgileri.html'
})
export class DetayBilgileriComponent {
  showDetails: number = 1;
  text: string;
  hizmet: Hizmet = new Hizmet();
  detayList: DetayKayit[];
  cozumKoduList: UrunAnaGrup[] = [];
  constants: Constants;

  constructor(private hizmetService: HizmetService,
              private  urunAnaGrupDao: UrunAnaGrupDao,
              private  util: UtilProvider,
              private  logger: LoggerProvider) {
    this.constants = new Constants();
    this.hizmet = this.hizmetService.getHizmet();
    this.loadDetayList();
    this.loadCozumKoduList();

  }

  getHizmet() {
    this.hizmet = this.hizmetService.getHizmet();
  }

  toggleDetails() {
    this.showDetails = -1 * this.showDetails;
  }

  loadDetayList() {
    if (this.util.isNotEmpty(this.hizmet.detayList) && this.hizmet.detayList.length > 0
      && this.util.isNotEmpty(this.hizmet.detayList[0])) {
      this.detayList = this.hizmet.detayList[0];
    }
  }

  loadCozumKoduList() {
    let filter = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.COZUM_LISTE);
    this.urunAnaGrupDao.getList(filter, this.constants.SEARCH_TYPE.EXACT).then(res => {
      this.logger.dir(res);
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.cozumKoduList.push(res.rows.item(i))
        }
      }
    })
  }
}
