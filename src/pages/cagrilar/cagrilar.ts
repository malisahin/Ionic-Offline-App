/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component, ViewChild} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {CagriDetayPage} from "../cagri-detay/cagri-detay";
import {ModalController} from "ionic-angular/components/modal/modal-controller";
import {CagriAramaModalPage} from "./cagri-arama-modal/cagri-arama-modal";
import {HizmetProvider} from "../../providers/hizmet/hizmet";
import {HizmetService} from "../../providers/hizmet-service/hizmet-service";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {UtilProvider} from "../../providers/util/util";
import {Pageable} from "../../entities/Pageable";
import {HeaderComponent} from "../../components/header/header";

@IonicPage()
@Component({
  selector: 'page-cagrilar',
  templateUrl: 'cagrilar.html',
})
export class CagrilarPage {

  title: string;
  cagrilar: Hizmet[] = [];
  searchQuery: string = "";
  pageable: Pageable;
  searchType: string = "BEGINNING";
  searchParams: string[] = [];
  @ViewChild("header") header: HeaderComponent;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalController: ModalController,
              private cagriProvider: HizmetProvider,
              private hizmetService: HizmetService,
              private util: UtilProvider) {
    this.pageable = new Pageable();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagrilarPage');
    this.title = 'Çağrılar';
    this.fetchList(this.searchType);
  }


  public cagriDetayinaGit(event, seqNo) {
    event.stopPropagation();
    let params = {seqNo: seqNo};

    this.navCtrl.push(CagriDetayPage, params);
  }

  public cagriSorgula() {

    let aramaModal = this.modalController.create(CagriAramaModalPage);
    aramaModal.onDidDismiss(data => {

      this.searchQuery = data.query;
      this.searchParams = data.params;
      this.fetchList(this.searchType);
    });
    aramaModal.present();
  }

  async  fetchList(tip) {
    this.cagrilar = [];
    this.pageable.tip = tip;
    this.pageable = this.pageable.compute();
    let list: any;
    if (this.util.isNotEmpty(this.searchQuery)) {
      list = await this.hizmetService.fetchHizmetWithQuery(this.searchQuery, this.pageable);
    } else {
      let hizmet = new Hizmet();
      hizmet.durum = 'ACIK';
      list = await this.hizmetService.fetchHizmetWithPage(hizmet, this.pageable);
    }
    if (this.util.isNotEmpty(list.res.rows)) {
      this.pageable.listLength = list.listLength;
      for (let i = 0; i < list.res.rows.length; i++) {
        let data = JSON.parse(list.res.rows.item(i).data);
        this.cagrilar.push(data);
      }
    }
    this.searchQuery = "";
  }

  async cagriGuncelle() {
    this.util.loaderStart();
    await this.cagriProvider.downloadCagriList().then(res => {
      this.fetchList(this.searchType);
      this.util.message("Çağrılar Güncellendi.");
    });
    this.util.loaderEnd();
    this.header.updateHeader();
  }

}
