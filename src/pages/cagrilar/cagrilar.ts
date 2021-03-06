/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CagriDetayPage } from "../cagri-detay/cagri-detay";
import { ModalController } from "ionic-angular/components/modal/modal-controller";
import { CagriAramaModalPage } from "./cagri-arama-modal/cagri-arama-modal";
import { HizmetProvider } from "../../providers/hizmet/hizmet";
import { HizmetService } from "../../providers/hizmet-service/hizmet-service";
import { Hizmet } from "../../entities/hizmet/hizmet";
import { UtilProvider } from "../../providers/util/util";
import { Pageable } from "../../entities/Pageable";
import { HeaderComponent } from "../../components/header/header";
import { Constants } from "../../entities/Constants";
import { UtilPlugin } from "../../providers/util-plugin/util-plugin";
import { ThemeProvider } from "../../providers/theme/theme";
import *  as moment from 'moment';
import { LoggerProvider } from "../../providers/logger/logger";

@IonicPage()
@Component({
  selector: "page-cagrilar",
  templateUrl: "cagrilar.html"
})
export class CagrilarPage {
  title: string;
  cagrilar: Hizmet[] = [];
  searchQuery: string = "";
  pageable: Pageable;
  searchType: string = "BEGINNING";
  searchParams: string[] = [];
  backGroundImage: string;
  orderBy: string = Constants.ORDER_BY.RANDEVU_TAR_DESCENDES;

  @ViewChild("header") header: HeaderComponent;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalController: ModalController,
    private cagriProvider: HizmetProvider,
    private hizmetService: HizmetService,
    private plugins: UtilPlugin,
    private util: UtilProvider,
    private themeProvider: ThemeProvider,
    private logger: LoggerProvider) {
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.pageable = new Pageable();
    this.getListLength();
  }

  ionViewDidLoad() {
    this.title = "Çağrılar";
    this.fetchList(this.searchType);
  }

  private getListLength() {
    let length = Number(localStorage.getItem(Constants.LENGTHS.HIZMET_LIST));
    if (this.util.isEmpty(length)) length = 0;

    this.pageable.listLength = length;
  }

  public cagriDetayinaGit(event, seqNo) {
    event.stopPropagation();
    let params = { seqNo: seqNo };

    this.navCtrl.push(CagriDetayPage, params);
  }

  public cagriSorgula() {
    let aramaModal = this.modalController.create(
      CagriAramaModalPage,
      {},
      { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false }
    );
    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data) && this.util.isNotEmpty(data.orderBy)) {
        this.orderBy = data.orderBy;
        this.searchQuery = data.query;
        this.searchParams = data.params;
        this.fetchList(this.searchType);
      }
    });
    aramaModal.present();
  }

  async fetchList(tip) {
    this.cagrilar = [];
    this.pageable.tip = tip;
    this.pageable = this.pageable.compute();
    let list: any;
    if (
      this.util.isNotEmpty(this.searchQuery) &&
      this.util.isNotEmpty(this.orderBy)
    ) {
      list = await this.hizmetService.fetchHizmetWithQuery(this.searchQuery, this.orderBy, this.pageable);
    } else {
      let hizmet = new Hizmet();
      hizmet.durum = "ACIK";
      list = await this.hizmetService.fetchHizmetWithPage(hizmet, Constants.ORDER_BY.RANDEVU_TAR_DESCENDES, this.pageable);
    }
    if (this.util.isNotEmpty(list.res.rows)) {
      this.pageable.listLength = list.listLength;
      localStorage.setItem(Constants.COUNTS.CAGRILAR, String(list.listLength));
      for (let i = 0; i < list.res.rows.length; i++) {
        let data = JSON.parse(list.res.rows.item(i).data);
        this.cagrilar.push(data);
      }
      this.formatCagriList();
    }
    this.searchQuery = "";
  }

  async cagriGuncelle() {
    await this.cagriProvider.downloadCagriList().then(res => {
      if (this.util.isNotEmpty(res)) {
        this.fetchList(this.searchType);
        this.util.success("Çağrılar Güncellendi.");
      }
    });
    this.util.loaderEnd();
    this.header.updateHeader();
  }

  formatCagriList() {
    this.cagrilar.forEach(cagri => {
      cagri = this.formatAdres(cagri);
    });
  }

  formatAdres(cagri: Hizmet): Hizmet {
    cagri.adres = this.cagriProvider.getAdres(cagri);
    cagri.ilIlce = this.cagriProvider.getIlIlce(cagri);
    return cagri;
  }

  callPhoneNumber(event: any, tel: any) {
    event.stopPropagation();
    this.plugins.callPhoneNumber(tel);
  }

  formatDate(date: any): Date {
    this.logger.info("Çağrılar sayfası => " + date);
    return moment(date, "YYYY-MM-DD HH:mm:ss").toDate();
  }
}
