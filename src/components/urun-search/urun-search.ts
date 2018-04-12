import { Component } from '@angular/core';
import { Pageable } from '../../entities/Pageable';
import { Constants } from '../../entities/Constants';
import { UtilProvider } from '../../providers/util/util';
import { UrunDao } from '../../providers/urun-dao/urun-dao';
import { ViewController, NavParams } from 'ionic-angular';
import { Urun } from '../../entities/urun';


@Component({
  selector: 'urun-search',
  templateUrl: 'urun-search.html'
})
export class UrunSearchComponent {

  text: string;
  data: any;
  list: { key: "", value: "" }[] = [];
  selectedItem: { key: "", value: "" } = { key: "", value: "" };
  constants: Constants = new Constants();
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";
  urun: Urun;
  constructor(public viewCtrl: ViewController, params: NavParams,
    private urunDao: UrunDao,
    private util: UtilProvider) {
    console.log('Hello SelectSearchComponent Component');
    this.pageable = new Pageable();
    this.text = 'Hello World';
    this.data = params.get('data');
    this.ionViewDidLoad();
    this.urun = new Urun();
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
    if (this.data.type == this.constants.DATA_TYPE.URUN) {
      this.fetchUrunList();
    }

  }

  fetchUrunList() {
    let urunSearch = new Urun();
    urunSearch.mamAdi = this.searchText;
    urunSearch.mamKod = this.searchText;
    this.urunDao.getList(urunSearch, this.constants.SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(data => {
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
    if (this.data.type == this.constants.DATA_TYPE.URUN) {
      this.list.push({ key: item.mamAdi, value: item.mamKod });
    }
  }

  public ionChange(item: any) {
    if (this.data.type == this.constants.DATA_TYPE.URUN)
      this.prepareUrunReturnValue(item);

    this.viewCtrl.dismiss(this.returnObject);
  }

  prepareUrunReturnValue(item) {
    this.urun.mamAdi = this.util.isEmpty(item.key) ? '' : item.key;
    this.urun.mamKod = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.urun;
  }




}
