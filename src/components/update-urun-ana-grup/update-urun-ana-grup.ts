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


  urunAnaGrup: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
  urunAnaGrpList: UrunAnaGrup[] = [];
  basvuruNedeni: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
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
    this.logger.dir(this.navParams.data);
    this.hizmet = this.navParams.get("hizmet");
    this.init();
  }

  async init() {
    debugger;
    this.urunAnaGrup.mamAnaGrp = this.hizmet.mamAnaGrp;
    this.basvuruNedeni.neden = this.hizmet.basvuruNedeni;
    await this.prepareUrunAnaGrpList();
    await this.prepareBasvuruList();
  }

  /*
    async prepareMamAnaGrp() {
      if (this.util.isNotEmpty(this.hizmet.mamAnaGrp)) {
        let filter = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
        filter.mamAnaGrp = this.hizmet.mamAnaGrp;
        let res = await  this.urunAnaGrupProvider.findUrunAnaGrp(filter);
        debugger;
        if (this.util.isNotEmpty(res)) {
          this.urunAnaGrup = res;
        }
      }
    }

    async prepareBasvuruNedeni() {
      if (this.util.isNotEmpty(this.hizmet.mamAnaGrp) && this.util.isNotEmpty(this.hizmet.basvuruNedeni)) {
        let filter = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
        filter.mamAnaGrp = this.hizmet.mamAnaGrp;
        filter.neden = this.hizmet.basvuruNedeni;
        let res = await this.urunAnaGrupProvider.findUrunAnaGrp(filter);
        debugger;
        if (this.util.isNotEmpty(res)) {
          this.basvuruNedeni = res;
        }

      }
    }
  */

  onChangeMamAnaGrp() {
    this.basvuruNedeni = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
    this.prepareBasvuruList();
  }

  async prepareUrunAnaGrpList() {
    /* this.data.type = Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE;*/
    let filter = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    let res = await this.urunAnaGrupDao.getList(filter, Constants.SEARCH_TYPE.EXACT);
    this.urunAnaGrpList = this.fillDbList(res, Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);

    /*    let aramaModal = this.modalController.create(UrunAnaGrupSearchComponent, {data: this.data});
        aramaModal.onDidDismiss(data => {
          if (this.util.isNotEmpty(data)) {
            this.urunAnaGrup = data;
          }

          this.prepareBasvuruList();
        });
        aramaModal.present();*/
  }

  public async prepareBasvuruList() {
    this.basvuruNedeniList = [];
    let basvuruNeden: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
    basvuruNeden.mamAnaGrp = this.urunAnaGrup.mamAnaGrp;
    let res = await this.urunAnaGrupDao.getList(basvuruNeden, Constants.SEARCH_TYPE.EXACT);
    this.basvuruNedeniList = this.fillDbList(res, Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
  }

  fillDbList(res: any, tip): UrunAnaGrup[] {
    let list: UrunAnaGrup[] = [];
    if (this.util.isNotEmpty(res)) {
      for (let i = 0; i < res.rows.length; i++) {
        let item = res.rows.item(i);
        let anaGrp = new UrunAnaGrup(tip);
        anaGrp.mamAnaGrp = item.mamAnaGrp;
        anaGrp.ad = item.ad;
        anaGrp.neden = item.neden;
        list.push(anaGrp);
      }
    }
    return list;
  }

  async kaydet() {
    debugger;
    this.hizmet.mamAnaGrp = this.urunAnaGrup.mamAnaGrp;
    this.hizmet.basvuruNedeni = this.basvuruNedeni.neden;
    let res = await this.urunAnaGrupProvider.updateMamAnaGrp(this.hizmet);
    this.logger.warn(res);
    if (this.util.isOnline()) {
      this.setGarantiDegisimSonuc(res);

    } else {
      this.util.ifOffline();
    }

  }

  async setGarantiDegisimSonuc(res) {
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
