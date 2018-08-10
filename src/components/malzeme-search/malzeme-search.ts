import { Component } from '@angular/core';
import { Pageable } from "../../entities/Pageable";
import { UrunMalzeme } from "../../entities/urun-malzeme";
import { ViewController, NavParams } from "ionic-angular";
import { UrunMalzemeProvider } from "../../providers/urun-malzeme/urun-malzeme";
import { UtilProvider } from "../../providers/util/util";
import { Constants } from "../../entities/Constants";
import { LoggerProvider } from "../../providers/logger/logger";
import { ThemeProvider } from '../../providers/theme/theme';


@Component({
  selector: 'malzeme-search',
  templateUrl: 'malzeme-search.html'
})
export class MalzemeSearchComponent {

  text: string;
  data: any;
  list: { key: "", value: "", data: {} }[] = [];
  selectedItem: { key: "", value: "" } = { key: "", value: "" };
  returnObject: any;
  pageable: Pageable;
  searchText: string = "";
  malzeme: UrunMalzeme;
  searchType: string;
  backGroundImage: string;

  constructor(public viewCtrl: ViewController, params: NavParams,
    private malzemeProvider: UrunMalzemeProvider,
    private logger: LoggerProvider,
    private util: UtilProvider,
    private themeProvider: ThemeProvider) {
    this.pageable = new Pageable();
    this.data = params.get('data');
    this.backGroundImage = this.themeProvider.getBackgroundImage();

    this.malzeme = new UrunMalzeme();
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

  async fetchUrunList() {
    let filter = this.prepareSearchMalzeme();
    let data = await this.malzemeProvider.getList(filter, Constants.SEARCH_TYPE.LIKE, this.pageable);
    this.fillList(data);


  }

  prepareSearchMalzeme(): UrunMalzeme {
    let filter = new UrunMalzeme();
    filter.mlzAdi = this.searchText;
    filter.mlzKod = this.searchText;

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
    this.logger.dir(res);
  }

  fillItemByType(item: any) {

    this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });

  }

  public ionChange(item: any) {
    this.prepareUrunReturnValue(item);

    this.viewCtrl.dismiss(this.returnObject);
  }

  prepareUrunReturnValue(item) {
    this.malzeme.mlzKod = this.util.isEmpty(item.key) ? '' : item.key;
    this.malzeme.mlzAdi = this.util.isEmpty(item.value) ? '' : item.value;
    this.returnObject = this.malzeme;
  }


}
