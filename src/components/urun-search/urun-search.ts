import { Component } from '@angular/core';
import { Pageable } from '../../entities/Pageable';
import { Constants } from '../../entities/Constants';
import { UtilProvider } from '../../providers/util/util';
import { UrunDao } from '../../providers/urun-dao/urun-dao';
import { ViewController, NavParams } from 'ionic-angular';
import { Urun } from '../../entities/urun';
import { ThemeProvider } from '../../providers/theme/theme';


@Component({
  selector: 'urun-search',
  templateUrl: 'urun-search.html'
})
export class UrunSearchComponent {

  text: string;
  data: any;
  list: { key: "", value: "", data: {} }[] = [];
  selectedItem: { key: "", value: "" } = { key: "", value: "" };
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";
  urun: Urun;
  searchType: string;
  backGroundImage: string;

  constructor(public viewCtrl: ViewController, params: NavParams,
    private urunDao: UrunDao,
    private util: UtilProvider,
    private themeProvider: ThemeProvider) {
    this.pageable = new Pageable();
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.data = params.get('data');
    this.urun = new Urun();
    this.searchType = Constants.SEARCH_TYPE.LIKE;
    this.ionViewDidLoad();
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
    this.fetchUrunList();
  }

  fetchUrunList() {
    let urunSearch = this.prepareSearchUrun();
    this.urunDao.getList(urunSearch, Constants.SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(data => {
      this.fillList(data);
    });

  }

  prepareSearchUrun(): Urun {
    let filter = new Urun();
    filter.mamAdi = this.searchText;
    filter.mamKod = this.searchText;

    if (this.util.isNotEmpty(this.data.mamAnagrp)) {
      filter.mamAnagrp = this.data.mamAnagrp;
    }

    if (this.util.isNotEmpty(this.data.searchType)) {
      this.searchType = this.data.searchType;
    }

    return filter;
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

    this.list.push({ key: item.mamAdi, value: item.mamKod, data: item });

  }

  public ionChange(item: any) {
    this.prepareUrunReturnValue(item);

    this.viewCtrl.dismiss(this.returnObject);
  }

  prepareUrunReturnValue(item) {
    this.urun.mamAdi = this.util.isEmpty(item.key) ? '' : item.key;
    this.urun.mamKod = this.util.isEmpty(item.value) ? '' : item.value;

    if (this.util.isNotEmpty(item.data) && this.util.isNotEmpty(item.data.seriMetod))
      this.urun.seriMetod = item.data.seriMetod;

    this.returnObject = this.urun;
  }


}
