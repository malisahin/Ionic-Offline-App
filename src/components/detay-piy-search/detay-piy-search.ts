import { Component } from "@angular/core";
import { IslemArizaIscilik } from "../../entities/islem-ariza-iscilik";
import { IslemArizaIscilikDao } from "../../providers/islem-ariza-iscilik-dao/islem-ariza-iscilik-dao";
import { NavParams, ViewController } from "ionic-angular";
import { UtilProvider } from "../../providers/util/util";
import { Pageable } from "../../entities/Pageable";
import { HizmetService } from "../../providers/hizmet-service/hizmet-service";
import { Hizmet } from "../../entities/hizmet/hizmet";
import { UrunMalzemeProvider } from "../../providers/urun-malzeme/urun-malzeme";
import { UrunMalzeme } from "../../entities/urun-malzeme";
import { Constants } from "../../entities/Constants";
import { ThemeProvider } from "../../providers/theme/theme";

class SearchItem {
  key: string = "";
  value: string = "";
  data: any = {};
}

@Component({
  selector: "detay-piy-search",
  templateUrl: "detay-piy-search.html"
})
export class DetayPiySearchComponent {
  text: string;
  data: any;
  list: SearchItem[] = [];
  selectedItem: { key: ""; value: ""; data: {} } = {
    key: "",
    value: "",
    data: {}
  };
  pageable: Pageable;
  searchText: string = "";
  searchType: string;
  hizmet: Hizmet;
  dataType: string;
  filter: IslemArizaIscilik;
  backGroundImage: string;

  constructor(
    public viewCtrl: ViewController,
    private params: NavParams,
    private util: UtilProvider,
    private hizmetService: HizmetService,
    private urunMalzemeProvider: UrunMalzemeProvider,
    private islemArizaIscilikDao: IslemArizaIscilikDao,
    private themeProvider: ThemeProvider
  ) {
    this.text = "Hello World";
    this.pageable = new Pageable();
    this.data = params.get("data");
    this.dataType = this.data.dataType;
    this.hizmet = this.hizmetService.getHizmet();
    this.filter = this.data.filter;
    this.backGroundImage = this.themeProvider.getBackgroundImage();
  }

  closeModal() {
    this.ionChange({ key: "", value: "" });
  }

  ionViewDidLoad() {
    this.fetchList("BEGINNING");
  }

  fetchList(type: string) {
    this.pageable.tip = type;
    this.pageable = this.pageable.compute();
    this.list = [];

    this.prepareSearchItem();
    if (this.dataType == "ISLEM") {
      this.islemArizaIscilikDao
        .getIslemGrupPage(this.filter, this.searchText)
        .then(data => {
          this.pageable.listLength = data.listLength;
          this.fillList(data);
        });
    }

    if (this.dataType == "ARIZA") {
      this.islemArizaIscilikDao
        .getArizaGrupPage(this.filter, this.searchText)
        .then(data => {
          this.pageable.listLength = data.listLength;
          this.fillList(data);
        });
    }

    if (this.dataType == "PIY") {
      if (
        this.util.isNotEmpty(this.data.filter) &&
        this.util.isNotEmpty(this.data.filter.mlzIsc)
      ) {
        let mlzIsc = this.data.filter.mlzIsc;

        if (mlzIsc == Constants.DETAY_TIPI.MALZEME) this.getMalzeme();

        if (mlzIsc == Constants.DETAY_TIPI.ISCILIK) this.getIscilik();

        if (mlzIsc == Constants.DETAY_TIPI.YOL) this.getYol();

        if (mlzIsc == Constants.DETAY_TIPI.DIGER) this.getDiger();
      }
    }
  }

  getIscilik() {
    this.islemArizaIscilikDao
      .getPIYKoduPage(this.filter, this.hizmet.mamKod, this.searchText)
      .then(data => {
        this.pageable.listLength = data.listLength;
        this.fillList(data);
      });
  }

  async getMalzeme() {
    let filter = new UrunMalzeme();
    //TODO: SEARCH URUN-MALZEME as PAGEABLE
    filter.mamKod = this.hizmet.mamKod;
    let searchType = Constants.SEARCH_TYPE.LIKE;
    filter.mlzAdi = this.searchText;
    filter.mlzKod = this.searchText;
    let malzemeList = await this.urunMalzemeProvider.getList(
      filter,
      searchType,
      this.pageable
    );
    this.pageable.listLength = malzemeList.listLength;
    this.fillList(malzemeList.res);
  }

  getYol() {
    let yolIsciligi = { key: "999988", value: "Yol İşçiliği" };
    this.list.push({ key: "999988", value: "Yol İşçiliği", data: {} });
  }

  getDiger() {
    this.list = [];
    let digerIsciligi = { key: "999977", value: "Diğer İşçiliği" };
    this.list.push({
      key: digerIsciligi.key,
      value: digerIsciligi.value,
      data: digerIsciligi
    });
  }

  prepareSearchItem() {
    this.filter.mamAnaGrp = this.hizmet.mamAnaGrp;
    this.filter.islGrp = this.util.isNotEmpty(this.data.filter.islemKod)
      ? this.data.filter.islemKod
      : "";
    this.filter.arzGrp = this.util.isNotEmpty(this.data.filter.arizaKod)
      ? this.data.filter.arizaKod
      : "";
  }

  fillList(data: any) {
    let res = data.rows;
    this.pageable.listLength =
      this.pageable.listLength == -1
        ? data.listLength
        : this.pageable.listLength;
    for (let i = 0; i < res.length; i++) {
      this.fillItemByType(res.item(i));
    }
    console.dir(res);
  }

  fillItemByType(item: any) {
    if (this.dataType == "ISLEM") {
      this.list.push({
        key: item.islemGrp,
        value: item.islemGrpAdi,
        data: item
      });
    }
    if (this.dataType == "ARIZA")
      this.list.push({
        key: item.arizaGrp,
        value: item.arizaGrpAdi,
        data: item
      });

    if (this.dataType == "PIY") {
      let mlzIsc = this.data.filter.mlzIsc;

      if (mlzIsc == Constants.DETAY_TIPI.ISCILIK)
        this.list.push({ key: item.iscKod, value: item.iscAdi, data: item });

      if (mlzIsc == Constants.DETAY_TIPI.MALZEME)
        this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });

      if (mlzIsc == Constants.DETAY_TIPI.DIGER)
        this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });

      if (mlzIsc == Constants.DETAY_TIPI.YOL)
        this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });
    }
  }

  isUnique(item: any): boolean {
    let isUnique = true;
    this.list.filter(res => {
      if (res.key == item.key && res.value == item.value) {
        isUnique = false;
      }
    });
    return isUnique;
  }

  public ionChange(item: any) {
    this.viewCtrl.dismiss({ data: item });
  }
}
