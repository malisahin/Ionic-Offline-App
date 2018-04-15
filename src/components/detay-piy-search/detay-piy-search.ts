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
  list: { key: "", value: "" }[] = [];
  selectedItem: { key: "", value: "" } = { key: "", value: "" };
  constants: Constants = new Constants();
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";
  searchType: string;
  hizmet: Hizmet;
  dataType: string;
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

    let filter = this.prepareSearchItem();
    this.islemArizaIscilikDao.getPage(filter, this.searchType, this.pageable).then(data => {
      this.pageable.listLength = data.listLength;
      this.fillList(data);
    })


  }

  prepareSearchItem(): IslemArizaIscilik {
    let filter = new IslemArizaIscilik();
    filter.mamAnaGrp = this.hizmet.mamAnaGrp;
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

    this.list.push({ key: item.mamAnaGrp, value: item.ad });

  }

  public ionChange(item: any) {
    this.prepareReturnValue(item);

    this.viewCtrl.dismiss();
  }

  prepareReturnValue(item) {
    /* this.urunAnaGrup.mamAnaGrp = this.util.isEmpty(item.key) ? '' : item.key;
     this.urunAnaGrup.ad = this.util.isEmpty(item.value) ? '' : item.value;
     this.returnObject = this.urunAnaGrup;  */
  }

}
