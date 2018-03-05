/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {CagriDetayPage} from "../cagri-detay/cagri-detay";
import {ModalController} from "ionic-angular/components/modal/modal-controller";
import {CagriAramaModalPage} from "./cagri-arama-modal/cagri-arama-modal";
import {HizmetProvider} from "../../providers/hizmet/hizmet";
import {MockCagriList} from "../../entities/hizmet/cagriList-mock";
import {TokenProvider} from "../../providers/token/token";
import {HizmetService} from "../../providers/hizmet-service/hizmet-service";
import {Hizmet} from "../../entities/hizmet/hizmet";

@IonicPage()
@Component({
  selector: 'page-cagrilar',
  templateUrl: 'cagrilar.html',
})
export class CagrilarPage {
  mockData = new MockCagriList();
  cagrilar: Hizmet[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalController: ModalController,
              private cagriProvider: HizmetProvider,
              private hizmetService: HizmetService,
              private token: TokenProvider) {
    let tokenUrl = this.token.getToken("", "");
    this.getCagriList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagrilarPage');
    this.getCagriList();
  }


  public cagriDetayinaGit(event, seqNo) {
    event.stopPropagation();
    let params = {seqNo: seqNo};

    this.navCtrl.push(CagriDetayPage, params);
  }

  public cagriSorgula() {
    let aramaModal = this.modalController.create(CagriAramaModalPage);
    aramaModal.present();
  }

  public getCagriList() {
   this.hizmetService.fetchHizmet(new Hizmet).subscribe(res => {
     this.cagrilar.push(res);
   });
  }

  public cagriGuncelle() {

    this.cagriProvider.downloadCagriList();
  }
}
