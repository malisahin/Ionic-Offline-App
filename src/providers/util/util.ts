import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../entities/Constants';
import { ToastController } from 'ionic-angular';
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

  prepareQuery(query: string, whereQueries: string[], searchType: string): string {
    let AndOr = searchType == this.constants.SEARCH_TYPE.EXACT ? ' AND ' : ' OR ';
    if (whereQueries.length > 0) {
      query += " AND (";
      query += whereQueries.join(AndOr);
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

  dateFormatRegex(x, y): string {
    x = new Date(x);
    var z = {
      M: x.getMonth() + 1,
      d: x.getDate(),
      h: x.getHours(),
      m: x.getMinutes(),
      s: x.getSeconds()
    };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
      return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
    });

    return y.replace(/(y+)/g, function (v) {
      return x.getFullYear().toString().slice(-v.length)
    });
  }

  // FIXME: Pluginden alınan bilgiye göre cevap dönecek
  isOnline(): boolean {
    return false;
  }


  /**
   * 
   * @param item  (let key in item)
   * @param list 
   */
  isNotUnique(item: any, list: any[]): boolean {
    for (let o in list) {
      for (let key in item) {

      }
    }
    return false;
  }
  /*
   for (let key in item) {
      let value = item[key];
      if (typeof value != undefined && value != null && value != "" && typeof value != "function" && typeof value != "object" && key != "tip") {
        value = value.split('').join('%');
        value = "%" + value + "%";
        query.push(key + " LIKE '" + value + "'");
      }
    }
  */

}
