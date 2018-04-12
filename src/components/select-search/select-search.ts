import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { UrunAnaGrupDao } from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import { UrunAnaGrup } from '../../entities/urunAnaGrup';
import { Constants } from '../../entities/Constants';
import { Pageable } from '../../entities/Pageable';
import { Urun } from '../../entities/urun';
import { UrunDao } from '../../providers/urun-dao/urun-dao';
import { UtilProvider } from '../../providers/util/util';
import { UrunIscilikDao } from '../../providers/urun-iscilik-dao/urun-iscilik-dao';
import { UrunIscilik } from '../../entities/urun-iscilik';


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
  urunIscilik: UrunIscilik;
  constructor(public viewCtrl: ViewController, params: NavParams,
    private urunDao: UrunDao,
    private util: UtilProvider,
    private urunAnaGrupDao: UrunAnaGrupDao,
    private urunIscilikDao: UrunIscilikDao) {
    console.log('Hello SelectSearchComponent Component');
    this.pageable = new Pageable();
    this.text = 'Hello World';
    this.data = params.get('data');
    this.ionViewDidLoad();
    this.urunAnaGrup = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    this.urun = new Urun();
    this.urunIscilik = new UrunIscilik();
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
    if (this.data.type == this.constants.DATA_TYPE.URUN) {
      this.fetchUrunList();
    }
    if (this.data.type == this.constants.DATA_TYPE.URUN_ISCILIK) {
      this.fetchUrunIscilikList();
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

  fetchUrunList() {
    let urunSearch = new Urun();
    urunSearch.mamAdi = this.searchText;
    urunSearch.mamKod = this.searchText;
    this.urunDao.getList(urunSearch, this.constants.SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(data => {
      this.fillList(data);
    });;
  }

  fetchUrunIscilikList() {
    let urunSearch = new UrunIscilik();
    urunSearch.iscKod = this.searchText;
    urunSearch.iscAdi = this.searchText;
    urunSearch.mamKod = this.data.mamKod;
    this.urunIscilikDao.getList(urunSearch, this.constants.SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(data => {
      this.fillList(data);
    });;
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
    if (this.data.type == this.constants.DATA_TYPE.URUN) {
      this.list.push({ key: item.mamAdi, value: item.mamKod });
    }
    if (this.data.type == this.constants.DATA_TYPE.URUN_ISCILIK) {
      this.list.push({ key: item.iscAdi, value: item.iscKod });
    }
  }

  public ionChange(item: any) {
    if (this.data.type == this.constants.DATA_TYPE.URUN_ANA_GRUP)
      this.prepareUrunAnaGrupReturnValue(item);

    if (this.data.type == this.constants.DATA_TYPE.URUN)
      this.prepareUrunReturnValue(item);

    if (this.data.type == this.constants.DATA_TYPE.URUN_ISCILIK)
      this.prepareUrunIscilikReturnValue(item);

    this.viewCtrl.dismiss(this.returnObject);
  }

  prepareUrunAnaGrupReturnValue(item) {
    this.urunAnaGrup.mamAnaGrp = this.util.isEmpty(item.key) ? '' : item.key;
    this.urunAnaGrup.ad = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.urunAnaGrup;
  }

  prepareUrunReturnValue(item) {
    this.urun.mamAdi = this.util.isEmpty(item.key) ? '' : item.key;
    this.urun.mamKod = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.urun;
  }
  prepareUrunIscilikReturnValue(item) {
    this.urunIscilik.iscAdi = this.util.isEmpty(item.key) ? '' : item.key;
    this.urunIscilik.iscKod = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.urunIscilik;
  }

}
