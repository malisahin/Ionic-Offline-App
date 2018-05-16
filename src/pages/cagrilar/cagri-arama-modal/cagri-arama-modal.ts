/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ViewController} from 'ionic-angular/navigation/view-controller';
import {Hizmet} from "../../../entities/hizmet/hizmet";
import {HizmetSearch} from "../../../entities/hizmet/HizmetSearch";
import {UtilProvider} from "../../../providers/util/util";
import {Constants} from "../../../entities/Constants";
import {query} from "@angular/core/src/animation/dsl";


@IonicPage()
@Component({
  selector: 'page-cagri-arama-modal',
  templateUrl: 'cagri-arama-modal.html',
})
export class CagriAramaModalPage {

  filter: HizmetSearch;
  query: string;
  constants: Constants;

  constructor(public viewCtrl: ViewController,
              private util: UtilProvider) {

    this.filter =new HizmetSearch();
    this.constants = new Constants();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagriAramaModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss(this.query);
  }

  search() {
    this.query = " SELECT * FROM OFF_HIZ_MST WHERE 1=1";
    let whereQuery = [];
    let searchType = this.constants.SEARCH_TYPE.EXACT;

    if (this.util.isNotEmpty(this.filter.randevuTarFirst)) {
      this.query += " AND randevuTarihi > '" + this.filter.randevuTarFirst + " 00:00:00' ";
    }

    if (this.util.isNotEmpty(this.filter.randevuTarLast)) {
      this.query += " AND randevuTarihi < '" + this.filter.randevuTarLast + " 23:59:59' ";
    }

    if (this.util.isNotEmpty(this.filter.seqNo)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, "seqNo", this.filter.seqNo));
    }

    if (this.util.isNotEmpty(this.filter.durum)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, "durum", this.filter.durum));
    }

    if (this.util.isNotEmpty(this.filter.durum)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, "adi", this.filter.adi));
    }

    if (this.util.isNotEmpty(this.filter.durum)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, "soyadi", this.filter.soyadi));
    }

    if (this.util.isNotEmpty(this.filter.durum)) {
      whereQuery.push(this.util.prepareWhereQuery(searchType, "firmaUnvani", this.filter.unvani));
    }

    this.query = this.util.prepareQuery(this.query, whereQuery, searchType);
    this.closeModal();
  }
}
