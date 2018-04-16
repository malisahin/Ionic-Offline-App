import { Component } from '@angular/core';
import { IslemArizaIscilik } from '../../entities/islem-ariza-iscilik';
import { IslemArizaIscilikDao } from '../../providers/islem-ariza-iscilik-dao/islem-ariza-iscilik-dao';
import { NavParams, ViewController } from 'ionic-angular';
import { UtilProvider } from '../../providers/util/util';
import { Pageable } from '../../entities/Pageable';
import { Constants } from '../../entities/Constants';
import { HizmetService } from '../../providers/hizmet-service/hizmet-service';
import { Hizmet } from '../../entities/hizmet/hizmet';


@Component({
  selector: 'detay-piy-search',
  templateUrl: 'detay-piy-search.html'
})
export class DetayPiySearchComponent {

  text: string;
  data: any;
  list: { key: "", value: "", data: {} }[] = [];
  selectedItem: { key: "", value: "", data: {} } = { key: "", value: "", data: {} };
  constants: Constants = new Constants();
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";
  searchType: string;
  hizmet: Hizmet;
  dataType: string;
  filter: IslemArizaIscilik;
  constructor(
    public viewCtrl: ViewController,
    private params: NavParams,
    private util: UtilProvider,
    private hizmetService: HizmetService,
    private islemArizaIscilikDao: IslemArizaIscilikDao) {
    console.log('Hello UrunAnaGrupSearchComponent Component');
    this.text = 'Hello World';
    this.pageable = new Pageable();
    this.data = params.get('data');
    this.dataType = this.data.dataType;
    this.hizmet = this.hizmetService.getHizmet();
    this.filter = this.data.filter;
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

    this.prepareSearchItem();

    if (this.dataType == "ISLEM") {
      this.islemArizaIscilikDao.getIslemGrupPage(this.filter, this.searchText).then(data => {
        this.pageable.listLength = data.listLength;
        this.fillList(data);
      })
    }

    if (this.dataType == "ARIZA") {
      this.islemArizaIscilikDao.getArizaGrupPage(this.filter, this.searchText).then(data => {
        this.pageable.listLength = data.listLength;
        this.fillList(data);
      })
    }

    if (this.dataType == "PIY") {
      this.islemArizaIscilikDao.getPIYKoduPage(this.filter, this.hizmet.mamKod, this.searchText).then(data => {
        this.pageable.listLength = data.listLength;
        this.fillList(data);
      });
    }
  }

  prepareSearchItem() {
    this.filter.mamAnaGrp = this.hizmet.mamAnaGrp;
    this.filter.islGrp = this.util.isNotEmpty(this.data.filter.islemKod) ? this.data.filter.islemKod : "";
    this.filter.arzGrp = this.util.isNotEmpty(this.data.filter.arizaKod) ? this.data.filter.arizaKod : "";
    this.searchText = "";

  }

  fillList(data: any) {
    let res = data.rows;
    this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
    for (let i = 0; i < res.length; i++) {
      this.fillItemByType(res.item(i));
    }
    console.dir(res);
  }

  fillItemByType(item: any) {
    if (this.dataType == "ISLEM") {
      this.list.push({ key: item.islemGrp, value: item.islemGrpAdi, data: item });
    }
    if (this.dataType == "ARIZA")
      this.list.push({ key: item.arizaGrp, value: item.arizaGrpAdi, data: item });

    if (this.dataType == "PIY")
      this.list.push({ key: item.arizaGrp, value: item.arizaGrpAdi, data: item });

  }

  isUnique(item: any): boolean {
    let isUnique = true;
    this.list.filter(res => {
      if (res.key == item.key && res.value == item.value) {
        isUnique = false;
      }
    })
    return isUnique;
  }

  public ionChange(item: any) {

    this.viewCtrl.dismiss({ data: item });
  }



}
