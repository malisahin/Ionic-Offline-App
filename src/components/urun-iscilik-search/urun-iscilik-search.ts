import {Component} from '@angular/core';
import {UrunIscilik} from '../../entities/urun-iscilik';
import {Pageable} from '../../entities/Pageable';
import {UrunIscilikDao} from '../../providers/urun-iscilik-dao/urun-iscilik-dao';
import {ViewController, NavParams} from 'ionic-angular';
import {UtilProvider} from '../../providers/util/util';
import {Constants} from '../../entities/Constants';


@Component({
  selector: 'urun-iscilik-search',
  templateUrl: 'urun-iscilik-search.html'
})
export class UrunIscilikSearchComponent {

  text: string;
  data: any;
  list: { key: "", value: "" }[] = [];
  selectedItem: { key: "", value: "" } = {key: "", value: ""};
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";

  urunIscilik: UrunIscilik;

  constructor(public viewCtrl: ViewController, params: NavParams,
              private util: UtilProvider,
              private urunIscilikDao: UrunIscilikDao) {
    this.pageable = new Pageable();
    this.data = params.get('data');
    this.ionViewDidLoad();
    this.urunIscilik = new UrunIscilik();
  }

  closeModal() {
    this.ionChange({key: '', value: ''});
  }

  ionViewDidLoad() {
    this.fetchList('BEGINNING');
  }

  fetchList(type: string) {
    this.pageable.tip = type;
    this.pageable = this.pageable.compute();
    this.list = [];
    if (this.data.type == Constants.DATA_TYPE.URUN_ISCILIK) {
      this.fetchUrunIscilikList();
    }
  }

  fetchUrunIscilikList() {
    let urunSearch = new UrunIscilik();
    urunSearch.iscKod = this.searchText;
    urunSearch.iscAdi = this.searchText;
    urunSearch.mamKod = this.data.mamKod;
    this.urunIscilikDao.getList(urunSearch, Constants.SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(data => {
      this.fillList(data);
    });
    ;
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
    if (this.data.type == Constants.DATA_TYPE.URUN_ANA_GRUP) {
      this.list.push({key: item.mamAnaGrp, value: item.ad});
    }
    if (this.data.type == Constants.DATA_TYPE.URUN) {
      this.list.push({key: item.mamAdi, value: item.mamKod});
    }
    if (this.data.type == Constants.DATA_TYPE.URUN_ISCILIK) {
      this.list.push({key: item.iscAdi, value: item.iscKod});
    }
  }

  public ionChange(item: any) {
    if (this.data.type == Constants.DATA_TYPE.URUN_ISCILIK)
      this.prepareUrunIscilikReturnValue(item);

    this.viewCtrl.dismiss(this.returnObject);
  }

  prepareUrunIscilikReturnValue(item) {
    this.urunIscilik.iscAdi = this.util.isEmpty(item.key) ? '' : item.key;
    this.urunIscilik.iscKod = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.urunIscilik;
  }

}
