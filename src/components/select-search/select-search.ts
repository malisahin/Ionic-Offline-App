import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { UrunAnaGrupDao } from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { Constants } from '../../entities/Constants';
import { Pageable } from '../../entities/Pageable';
import { Urun } from '../../entities/urun';


@Component({
  selector: 'select-search',
  templateUrl: 'select-search.html'
})
export class SelectSearchComponent {

  text: string;
  data: any;
  list: { key: "", value: "" }[] = [];
  selectedItem: { key: "", value: "" } = { key: "", value: "" };
  constants: Constants = new Constants();
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";

  urunAnaGrup: UrunAnaGrup;
  urun: Urun;
  constructor(public viewCtrl: ViewController, params: NavParams,
    private urunAnaGrupDao: UrunAnaGrupDao) {
    console.log('Hello SelectSearchComponent Component');
    this.pageable = new Pageable();
    this.text = 'Hello World';
    this.data = params.get('data');
    this.ionViewDidLoad();

  }

  closeModal() {
    this.viewCtrl.dismiss(this.returnObject);
  }

  ionViewDidLoad() {
    if (this.data.tip == this.constants.DATA_TYPE.URUN_ANA_GRUP) {
      this.urunAnaGrup = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    }

    if (this.data.tip == this.constants.DATA_TYPE.URUN) {
      this.urun = new Urun();
    }

    this.fetchList('BEGINNING');
  }

  fetchList(type: string) {
    this.pageable.tip = type;
    this.pageable = this.pageable.compute();
    this.list = [];
    if (this.data.type == this.constants.DATA_TYPE.URUN_ANA_GRUP) {
      this.fetchUrunAnaGrupList();
    }
  }

  fetchUrunAnaGrupList() {
    let urunAnaGrupForSearch = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    urunAnaGrupForSearch.ad = this.searchText;
    urunAnaGrupForSearch.mamAnaGrp = this.searchText;
    this.urunAnaGrupDao.getList(urunAnaGrupForSearch, this.constants.SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(data => {
      let res = data.res.rows;
      this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
      for (let i = 0; i < res.length; i++) {
        let item = res.item(i)
        this.list.push({ key: item.mamAnaGrp, value: item.ad });
      }
      console.dir(res);
    });
  }

  fetchUrunList() {
    let urunSearch = new Urun();
  }

  public ionChange(item: any) {
    if (this.data.type == this.constants.DATA_TYPE.URUN_ANA_GRUP)
      this.prepareUrunAnaGrupReturnValue(item);

    if (this.data.type == this.constants.DATA_TYPE.URUN)
      this.prepareUrunAnaGrupReturnValue(item);

    this.closeModal();
  }

  prepareUrunAnaGrupReturnValue(item) {
    this.urunAnaGrup.mamAnaGrp = item.key;
    this.urunAnaGrup.ad = item.value;
    this.returnObject = this.urunAnaGrup;
  }

  prepareUrunReturnValue() {

  }

}
