import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Constants} from '../../entities/Constants';
import {ToastController} from 'ionic-angular';
import moment from 'moment';


@Injectable()
export class UtilProvider {

  constants: Constants;

  constructor(private toast: ToastController) {
    console.log('Hello UtilProvider Provider');
    this.constants = new Constants();
    moment.locale('tr');
  }

  isEmpty(item: any): boolean {
    if (typeof item == 'undefined' || item == null || item == "") {
      return true;
    } else {
      return false;
    }
  }

  isNotEmpty(item: any): boolean {
    if (typeof item == 'undefined' || item == null || item == "") {
      return false;
    } else {
      return true;
    }
  }

  prepareForLike(key: string, value: string): string {
    return key + " LIKE '%" + value.split('').join('%') + "%'";
  }

  prepareForEqual(key: string, value: string): string {
    return key + "='" + value + "'";
  }

  prepareWhereQuery(type: string, key: string, value: string): string {
    return type == this.constants.SEARCH_TYPE.EXACT ? this.prepareForEqual(key, value) : this.prepareForLike(key, value);
  }

  prepareQuery(query: string, searchQueries: string[], searchType: string): string {
    let AndOr = searchType == this.constants.SEARCH_TYPE.EXACT ? ' AND ' : ' OR ';
    if (searchQueries.length > 0) {
      query += " AND (";
      query += searchQueries.join(AndOr);
      query += ")";
    }
    return query;
  }

  message(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  dateFormat(dateString: Date, format: string): string {
    return moment(dateString).format(format);
  }

}
