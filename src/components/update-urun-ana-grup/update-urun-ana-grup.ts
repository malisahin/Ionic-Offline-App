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
import {BransProvider} from "../../providers/brans/brans";
import {Brans} from "../../entities/Brans";
import {ThemeProvider} from '../../providers/theme/theme';

/**
 * @author mali.sahin
 * @since  18.06.2018
 */
@Component({
  selector: 'update-urun-ana-grup',
  templateUrl: 'update-urun-ana-grup.html'
})
export class UpdateUrunAnaGrupComponent {

  basvuruNedeni: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
  basvuruNedeniList: UrunAnaGrup[] = [];
  data: any = {};
  hizmet: Hizmet;
  bransListesi: Brans[] = [];
  selectedBrans: Brans = new Brans();
  backGroundImage: string;

  constructor(private util: UtilProvider,
              private logger: LoggerProvider,
              private viewCtrl: ViewController,
              private modalController: ModalController,
              private bransProvider: BransProvider,
              private urunAnaGrupProvider: UrunAnaGrpProvider,
              private navParams: NavParams,
              private hizmetService: HizmetService,
              private hizmetProvider: HizmetProvider,
              private urunAnaGrupDao: UrunAnaGrupDao,
              private themeProvider: ThemeProvider) {
    this.logger.dir(this.navParams.data);
    this.hizmet = this.navParams.get("hizmet");
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.init();
  }

  async init() {
    this.selectedBrans.mamAnaGrp = this.hizmet.mamAnaGrp;
    this.basvuruNedeni.neden = this.hizmet.basvuruNedeni;
    await this.prepareBasvuruList();
    await this.getBransList();
  }


  onChangeMamAnaGrp() {
    this.basvuruNedeni = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
    this.prepareBasvuruList();
  }


  public async prepareBasvuruList() {
    let basvuruNeden: UrunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
    basvuruNeden.mamAnaGrp = this.selectedBrans.mamAnaGrp;
    this.basvuruNedeniList = [];
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
    this.hizmet.mamAnaGrp = this.selectedBrans.mamAnaGrp;
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
    let res = await this.hizmetService.fetchHizmet(this.hizmet.seqNo);
    if(this.util.isNotEmptyRows(res)) {
     this.hizmet = JSON.parse(res.rows.item(0).data);
      this.logger.log(this.hizmet);
      this.viewCtrl.dismiss({hizmet: this.hizmet});
    } else {
      this.util.error("Ürün Ana Grup Değiştirirken hata oluştu.")
    }
  }


  iptal() {
    this.viewCtrl.dismiss();
  }

  async getBransList() {
    if (this.util.isNotEmpty(this.hizmet.hizmetTipi)) {
      let filter = new Brans();
      filter.hizmetTipi = this.hizmet.hizmetTipi;
      this.bransListesi = [];
      this.bransListesi = await this.bransProvider.getList(filter);
    }

  }
}
