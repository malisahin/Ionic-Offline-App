/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ViewController } from "ionic-angular/navigation/view-controller";
import { Hizmet } from "../../../entities/hizmet/hizmet";
import { HizmetSearch } from "../../../entities/hizmet/HizmetSearch";
import { UtilProvider } from "../../../providers/util/util";
import { Constants } from "../../../entities/Constants";
import { query } from "@angular/core/src/animation/dsl";

@IonicPage()
@Component({
  selector: "page-cagri-arama-modal",
  templateUrl: "cagri-arama-modal.html"
})
export class CagriAramaModalPage {
  filter: HizmetSearch;
  query: string;
  searchParams: string[] = [];
  siralama: boolean = true;
  orderBy: string = Constants.ORDER_BY.RANDEVU_TAR_ASCENDES;

  constructor(public viewCtrl: ViewController, private util: UtilProvider) {
    this.filter = new HizmetSearch();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CagriAramaModalPage");
  }

  closeModal() {
    let data = {
      query: this.query,
      params: this.searchParams,
      orderBy: this.orderBy
    };
    this.viewCtrl.dismiss(data);
  }

  search() {
    this.query = " SELECT * FROM OFF_HIZ_MST WHERE 1=1";
    let whereQuery = [];
    let searchType = Constants.SEARCH_TYPE.LIKE;

    if (this.util.isNotEmpty(this.filter.randevuTarFirst)) {
      this.query +=
        " AND randevuTarihi > '" +
        this.util.dateFormatRegex(this.filter.randevuTarFirst, "yyyy-MM-dd") +
        " 00:00:00' ";
      this.searchParams.push(String(this.filter.randevuTarFirst));
    }

    if (this.util.isNotEmpty(this.filter.randevuTarLast)) {
      this.query +=
        " AND randevuTarihi < '" +
        this.util.dateFormatRegex(this.filter.randevuTarLast, "yyyy-MM-dd") +
        " 23:59:59' ";
      this.searchParams.push(String(this.filter.randevuTarLast));
    }

    if (this.util.isNotEmpty(this.filter.seqNo)) {
      whereQuery.push(
        this.util.prepareWhereQuery(
          searchType,
          "seqNo",
          String(this.filter.seqNo)
        )
      );
      this.searchParams.push(String(this.filter.seqNo));
    }

    if (this.util.isNotEmpty(this.filter.durum)) {
      whereQuery.push(
        this.util.prepareWhereQuery(searchType, "durum", this.filter.durum)
      );
      this.searchParams.push(this.filter.durum);
    }

    if (this.util.isNotEmpty(this.filter.adi)) {
      whereQuery.push(
        this.util.prepareWhereQuery(searchType, "adi", this.filter.adi)
      );
      this.searchParams.push(this.filter.adi);
    }

    if (this.util.isNotEmpty(this.filter.soyadi)) {
      whereQuery.push(
        this.util.prepareWhereQuery(searchType, "soyadi", this.filter.soyadi)
      );
      this.searchParams.push(this.filter.soyadi);
    }

    if (this.util.isNotEmpty(this.filter.unvani)) {
      whereQuery.push(
        this.util.prepareWhereQuery(
          searchType,
          "firmaUnvani",
          this.filter.unvani
        )
      );
      this.searchParams.push(this.filter.unvani);
    }

    this.query = this.util.prepareQuery(this.query, whereQuery, searchType);

    if (this.util.isNotEmpty(this.filter.telefon)) {
      let tel = String(this.filter.telefon);
      this.query +=
        " AND ( evTel like '%" +
        tel +
        "%' " +
        "OR isTel like '%" +
        tel +
        "%' " +
        "OR gsmNo like '%" +
        tel +
        "%' )";
      this.searchParams.push(tel);
    }

    if (this.siralama) this.orderBy = Constants.ORDER_BY.RANDEVU_TAR_DESCENDES;
    else this.orderBy = Constants.ORDER_BY.RANDEVU_TAR_ASCENDES;

    this.closeModal();
  }
}
