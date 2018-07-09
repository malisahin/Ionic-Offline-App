import {Component} from '@angular/core';
import {UrunAnaGrup} from "../../entities/urunAnaGrup";
import {UrunAnaGrupSearchComponent} from "../urun-ana-grup-search/urun-ana-grup-search";
import {UtilProvider} from "../../providers/util/util";
import {LoggerProvider} from "../../providers/logger/logger";
import {ModalController, ViewController, NavParams} from "ionic-angular";
import {Constants} from "../../entities/Constants";
import {UrunAnaGrupDao} from "../../providers/urun-ana-grup-dao/urun-ana-grup-dao";
import {UrunAnaGrpProvider} from "../../providers/urun-ana-grp/urun-ana-grp";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {HizmetProvider} from "../../providers/hizmet/hizmet";
import {HizmetService} from "../../providers/hizmet-service/hizmet-service";
import {Pageable} from "../../entities/Pageable";

/**
 * @author mali.sahin
 * @since  18.06.2018
 */
@Component({
  selector: 'update-urun-ana-grup',
  templateUrl: 'update-urun-ana-grup.html'
})
export class UpdateUrunAnaGrupComponent {


  urunAnaGrup: UrunAnaGrup;
  basvuruNedeni: string = "";
  basvuruNedeniList: UrunAnaGrup[] = [];
  data: any = {};
  hizmet: Hizmet;

  constructor(private util: UtilProvider,
              private logger: LoggerProvider,
              private viewCtrl: ViewController,
              private modalController: ModalController,
              private urunAnaGrupProvider: UrunAnaGrpProvider,
              private navParams: NavParams,
              private hizmetService: HizmetService,
              private  hizmetProvider: HizmetProvider,
              private  urunAnaGrupDao: UrunAnaGrupDao) {
    this.urunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
    this.logger.dir(this.navParams.data);
    this.hizmet = this.navParams.get("hizmet");
  }


  public urunAnaGrupSorgula() {
    this.data.type = Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE;
    let aramaModal = this.modalController.create(UrunAnaGrupSearchComponent, {data: this.data});
    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data)) {
        this.urunAnaGrup = data;
      }

      this.prepareBasvuruList();
    });
    aramaModal.present();
  }

  public async prepareBasvuruList() {
    this.basvuruNedeniList = [];
    let basvuruNeden: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
    basvuruNeden.mamAnaGrp = this.urunAnaGrup.mamAnaGrp;
    let res = await this.urunAnaGrupDao.getList(basvuruNeden, Constants.SEARCH_TYPE.EXACT);
    if (this.util.isNotEmpty(res)) {
      for (let i = 0; i < res.rows.length; i++) {
        let item = res.rows.item(i);
        let anaGrp = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
        anaGrp.mamAnaGrp = item.mamAnaGrp;
        anaGrp.ad = item.ad;
        anaGrp.neden = item.neden;
        this.basvuruNedeniList.push(anaGrp);

      }
    }

  }

  async kaydet() {
    this.hizmet.mamAnaGrp = this.urunAnaGrup.mamAnaGrp;
    this.hizmet.basvuruNedeni = this.basvuruNedeni;
    let res = await this.urunAnaGrupProvider.updateMamAnaGrp(this.hizmet);
    this.logger.warn(res);
    if (this.util.isOnline()) {
      this.setGarantiDegisimSonuc(res);

    } else {
      this.util.ifOffline();
    }

  }

  async  setGarantiDegisimSonuc(res) {
    if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res)) {
      await this.hizmetProvider.updateComingData(res);
      this.logger.log(res);
      await this.getUpdatedHizmet();
    }
    else {
      this.iptal();
      this.util.error("Ürün Ana Grubu değiştirirken hata oluştu.Verileri kontrol ediniz.")
    }

  }

  async getUpdatedHizmet() {
    let searchData = new Hizmet();
    searchData.seqNo = this.hizmet.seqNo;
    let fetchedData = await this.hizmetService.fetchHizmet(searchData);
    if (this.util.isNotEmpty(fetchedData) && this.util.isNotEmpty(fetchedData.res.rows) && fetchedData.res.rows.length > 0) {
      this.hizmet = JSON.parse(fetchedData.res.rows.item(0).data);
      this.logger.log(this.hizmet);
      this.viewCtrl.dismiss({hizmet: this.hizmet});
    } else {
      this.util.error("Ürün Ana Grup Değiştirirken hata oluştu.")
    }
  }


  iptal() {
    this.viewCtrl.dismiss();
  }
}
