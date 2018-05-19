/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {MesajlarProvider} from '../../providers/mesajlar/mesajlar';
import {Mesaj} from "../../entities/mesajlar";
import {MesajDetailComponent} from "../../components/mesaj-detail/mesaj-detail";
import {Pageable} from "../../entities/Pageable";

@IonicPage()
@Component({
  selector: 'page-bildirimler',
  templateUrl: 'bildirimler.html',
})
export class BildirimlerPage {

  mesajList: Mesaj[];
  searchTip: string = "BEGINNING";
  pageable: Pageable;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mesajProvider: MesajlarProvider,
              private modalController: ModalController) {
    this.fetchList(this.searchTip);
    this.pageable = new Pageable();
  }

  async   fetchData() {
    this.mesajList = await this.mesajProvider.getDataFromApi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BildirimlerPage');
  }

  guncelle() {

  }

  fetchList(tip: string) {

  }

  public mesajDetayinaGit(event, id) {
    let data = {id: id};
    let detailComponent = this.modalController.create(MesajDetailComponent, data);
    detailComponent.present();
  }

}
