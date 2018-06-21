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
import {ModalController} from "ionic-angular";
import {HizmetDetayComponent} from "../../hizmet-detay/hizmet-detay";
import {PrinterService} from "../../../providers/printer-service/printer-service";


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

  constructor(private hizmetService: HizmetService,
              private urunAnaGrupDao: UrunAnaGrupDao,
              private modalCtrl: ModalController,
              private util: UtilProvider,
              private logger: LoggerProvider,
              private printService: PrinterService) {
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
    if (this.util.isNotEmpty(this.hizmet.detayList)) {
      this.detayList = this.hizmet.detayList;
    }
  }

  loadCozumKoduList() {
    let filter = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.COZUM_LISTE);
    this.urunAnaGrupDao.getList(filter, Constants.SEARCH_TYPE.EXACT).then(res => {
      this.logger.dir(res);
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.cozumKoduList.push(res.rows.item(i))
        }
      }
    })
  }

  hizmetDetayaGit() {
    if (this.util.isNotEmpty(this.hizmet.mamKod)) {
      let detayModal = this.modalCtrl.create(HizmetDetayComponent, {
        data: {
          detay: ""
        }
      });
      detayModal.onDidDismiss(res => {
        this.logger.dir(res);
      });
      detayModal.present();
    } else {
      this.util.message('Ürün bilgisi seçilmeden detay girilemez.');
    }
  }

  update(item: any) {
    let detayModal = this.modalCtrl.create(HizmetDetayComponent, {
      data: {
        hizmetDetay: item
      }
    });
    detayModal.onDidDismiss(res => {
      this.logger.dir(res);
    });
    detayModal.present();
  }

  delete(item: any) {
    let index = this.detayList.indexOf(item);

    if (index > -1) {
      this.detayList.splice(index, 1);
    }
  }

  yazdir() {
    this.printService.showPrinterList(this.hizmet);
  }

}
