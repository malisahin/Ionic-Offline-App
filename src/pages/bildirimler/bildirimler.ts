/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {MesajlarProvider} from '../../providers/mesajlar/mesajlar';
import {Mesaj} from "../../entities/mesajlar";
import {MesajDetailComponent} from "../../components/mesaj-detail/mesaj-detail";
import {Pageable} from "../../entities/Pageable";
import {MesajlarDao} from "../../providers/mesajlar-dao/mesajlar-dao";
import {HeaderComponent} from "../../components/header/header";
import {timeout} from "rxjs/operators";

@IonicPage()
@Component({
  selector: 'page-bildirimler',
  templateUrl: 'bildirimler.html',
})
export class BildirimlerPage {

  mesajList: Mesaj[] = [];
  searchTip: string = "BEGINNING";
  pageable: Pageable;
  mesajTip: string;
  mesajBaslik: string;
  @ViewChild("header") header: HeaderComponent;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mesajProvider: MesajlarProvider,
              private modalController: ModalController) {
    this.mesajTip = this.navParams.data.type;
    this.pageable = new Pageable();
    this.fetchList(this.searchTip);

  }

  async fetchData() {
    await this.mesajProvider.getDataFromApi();
    await this.fetchList(this.searchTip);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BildirimlerPage');
    this.mesajBaslik = this.mesajTip == 'WARN' ? 'Duyurular' : 'Uyarılar'
  }

  async guncelle() {
    await this.fetchData();

  }

  async  fetchList(tip: string) {
    let mes = new Mesaj();
    mes.type = this.mesajTip;
    this.pageable.tip = tip;
    this.mesajList = await this.mesajProvider.fetchList(mes, this.pageable);

    setTimeout(() => {
      this.header.updateHeader();
    }, 500);
  }

  public  mesajDetayinaGit(event, id) {
    let data = {id: id};
    let detailComponent = this.modalController.create(MesajDetailComponent, data);
    detailComponent.present();
  }


}
