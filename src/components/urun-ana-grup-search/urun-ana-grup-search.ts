import {Component} from '@angular/core';
import {Pageable} from '../../entities/Pageable';
import {Constants} from '../../entities/Constants';
import {UrunAnaGrup} from '../../entities/urunAnaGrup';
import {UtilProvider} from '../../providers/util/util';
import {UrunAnaGrupDao} from '../../providers/urun-ana-grup-dao/urun-ana-grup-dao';
import {ViewController, NavParams} from 'ionic-angular';


@Component({
  selector: 'urun-ana-grup-search',
  templateUrl: 'urun-ana-grup-search.html'
})
export class UrunAnaGrupSearchComponent {
  text: string;
  data: any;
  list: { key: "", value: "" }[] = [];
  selectedItem: { key: "", value: "" } = {key: "", value: ""};
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";
  urunAnaGrup: UrunAnaGrup;
  searchType: string;

  constructor(public viewCtrl: ViewController, params: NavParams,
              private util: UtilProvider,
              private urunAnaGrupDao: UrunAnaGrupDao) {

    this.pageable = new Pageable();
    this.urunAnaGrup = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    this.data = params.get('data');
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

    this.fetchUrunAnaGrupList();


  }

  fetchUrunAnaGrupList() {
    let filter = this.prepareSearchItem();
    this.urunAnaGrupDao.getPage(filter, this.searchType, this.pageable.first, this.pageable.pageSize).then(res => {
      this.fillList(res);
    });
  }

  prepareSearchItem(): UrunAnaGrup {
    if (this.util.isNotEmpty(this.data.searchType)) {
      this.searchType = this.data.searchType;
    } else {
      this.searchType = Constants.SEARCH_TYPE.LIKE;
    }
    let anaGrp = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    anaGrp.ad = this.searchText;
    anaGrp.mamAnaGrp = this.searchText;
    return anaGrp;
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
    debugger;
 /*   if (this.util.isNotEmpty(this.data) && this.util.isNotEmpty(this.data.nerden) && this.data.nerden == "BILGI_SORGU") {
      let uniqueList = new Set(this.list);
      this.list = [];
      uniqueList.forEach(val => {
        this.list.push(val);
      });
    } else {*/
    this.list.push({key: item.mamAnaGrp, value: item.ad});


  }

  public ionChange(item: any) {
    this.prepareUrunAnaGrupReturnValue(item);

    this.viewCtrl.dismiss(this.returnObject);
  }

  prepareUrunAnaGrupReturnValue(item) {
    this.urunAnaGrup.mamAnaGrp = this.util.isEmpty(item.key) ? '' : item.key;
    this.urunAnaGrup.ad = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.urunAnaGrup;
  }
}
