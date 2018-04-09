import { Component } from '@angular/core';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { UrunAnaGrupDao } from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import { Urun } from '../../entities/urun';
import { SelectSearchComponent } from '../select-search/select-search';
import { ModalController, ViewController } from 'ionic-angular';
import { Constants } from '../../entities/Constants';



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
  constants: Constants;
  constructor(private urunAnaGrupDao: UrunAnaGrupDao, private modalController: ModalController) {
    console.log('Hello GarantiSorguComponent Component');
    this.constants = new Constants();
    this.urunAnaGrup = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    this.urun = new Urun();
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.constants = new Constants();
    this.urunAnaGrupDao.getList(this.urunAnaGrup, this.constants.SEARCH_TYPE.EXACT, 0, 10).then(list => {
      this.urunAnaGrupList = list.rows;
    });
  }


  public urunAnaGrupSorgula() {
    this.data.type = this.constants.DATA_TYPE.URUN_ANA_GRUP;
    let aramaModal = this.modalController.create(SelectSearchComponent, { data: this.data });
    aramaModal.onDidDismiss(data => {
      this.urun = data;
    });
    aramaModal.present();
  }

  public urunSorgula() {

    this.data.type = this.constants.DATA_TYPE.URUN;
    let aramaModal = this.modalController.create(SelectSearchComponent, { data: this.data });
    aramaModal.onDidDismiss(data => {
      this.urunAnaGrup = data;
    });
    aramaModal.present();
  }






}
