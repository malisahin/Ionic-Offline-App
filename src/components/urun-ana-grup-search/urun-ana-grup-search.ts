import { Component } from '@angular/core';
import { Pageable } from '../../entities/Pageable';
import { Constants } from '../../entities/Constants';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { UtilProvider } from '../../providers/util/util';
import { UrunAnaGrupDao } from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'urun-ana-grup-search',
  templateUrl: 'urun-ana-grup-search.html'
})
export class UrunAnaGrupSearchComponent {
  text: string;
  data: any;
  list: { key: "", value: "" }[] = [];
  selectedItem: { key: "", value: "" } = { key: "", value: "" };
  constants: Constants = new Constants();
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";
  urunAnaGrup: UrunAnaGrup;

  constructor(public viewCtrl: ViewController, params: NavParams,
    private util: UtilProvider,
    private urunAnaGrupDao: UrunAnaGrupDao) {
    console.log('Hello UrunAnaGrupSearchComponent Component');
    this.text = 'Hello World';
    this.pageable = new Pageable();
    this.urunAnaGrup = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    this.data = params.get('data');
  }
  closeModal() {
    this.ionChange({ key: '', value: '' });
  }

  ionViewDidLoad() {
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
      this.fillList(data);
    });
  }

  fillList(data: any) {
    let res = data.res.rows;
    this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
    for (let i = 0; i < res.length; i++) {
      this.fillItemByType(res.item(i));
    }
    console.dir(res);
  }

  fillItemByType(item: any) {
    if (this.data.type == this.constants.DATA_TYPE.URUN_ANA_GRUP) {
      this.list.push({ key: item.mamAnaGrp, value: item.ad });
    }
  }

  public ionChange(item: any) {
    if (this.data.type == this.constants.DATA_TYPE.URUN_ANA_GRUP)
      this.prepareUrunAnaGrupReturnValue(item);

    this.viewCtrl.dismiss(this.returnObject);
  }

  prepareUrunAnaGrupReturnValue(item) {
    this.urunAnaGrup.mamAnaGrp = this.util.isEmpty(item.key) ? '' : item.key;
    this.urunAnaGrup.ad = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.urunAnaGrup;
  }
}
