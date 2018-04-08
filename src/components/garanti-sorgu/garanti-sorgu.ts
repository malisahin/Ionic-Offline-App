import { Component } from '@angular/core';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { UrunAnaGrupDao } from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import { Urun } from '../../entities/urun';
import { SelectSearchComponent } from '../select-search/select-search';
import { ModalController, ViewController } from 'ionic-angular';



@Component({
  selector: 'garanti-sorgu',
  templateUrl: 'garanti-sorgu.html'
})
export class GarantiSorguComponent {

  barkodNo: string;
  urun: Urun;
  urunAnaGrupList: UrunAnaGrup[];
  urunAnaGrup: UrunAnaGrup;
  faturaTarihi: Date;
  data = { type: "" };
  constructor(private urunAnaGrupDao: UrunAnaGrupDao, private modalController: ModalController) {
    console.log('Hello GarantiSorguComponent Component');
    this.urunAnaGrup = new UrunAnaGrup("liste");
    this.urun = new Urun();
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.urunAnaGrupDao.getExactList(this.urunAnaGrup).then(list => {
      this.urunAnaGrupList = list.rows;
    });
  }


  public urunAnaGrupSorgula() {
    let aramaModal = this.modalController.create(SelectSearchComponent, { type: 'URUN' });
    aramaModal.onDidDismiss(data => {

    });
    aramaModal.present();
  }

  public urunSorgula() {

    this.data.type = "URUN"
    let aramaModal = this.modalController.create(SelectSearchComponent, { data: this.data });
    aramaModal.onDidDismiss(data => {
      this.urunAnaGrup = data;
    });
    aramaModal.present();
  }






}
