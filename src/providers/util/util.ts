import {Injectable, forwardRef} from '@angular/core';
import {Constants} from '../../entities/Constants';
import {ToastController, LoadingController, Loading} from 'ionic-angular';
import moment from 'moment';
import {ProcessResults} from "../../entities/ProcessResults"
import {Network} from '@ionic-native/network';
import {LoggerProvider} from "../logger/logger";


@Injectable()
export class UtilProvider {

  private loader: Loading;
  private isLoaderRunning: boolean = false;

  constructor(private toast: ToastController,
              private network: Network,
              private logger: LoggerProvider,
              private  loadingController: LoadingController) {
    moment.locale('tr');
  }

  isEmpty(item: any): boolean {
    return (typeof item == 'undefined' || item == null || item == "");
  }

  isNotEmpty(item: any): boolean {
    return !(typeof item == 'undefined' || item == null || item == "")
  }

  prepareForLike(key: string, value: string): string {
    return key + " LIKE '%" + value.split('').join('%') + "%'";
  }

  prepareForEqual(key: string, value: string): string {
    return key + "='" + value + "'";
  }

  prepareWhereQuery(type: string, key: string, value: string): string {
    return type == Constants.SEARCH_TYPE.EXACT ? this.prepareForEqual(key, value) : this.prepareForLike(key, value);
  }

  prepareQuery(query: string, whereQueries: string[], searchType: string): string {
    let AndOr = searchType == Constants.SEARCH_TYPE.EXACT ? ' AND ' : ' OR ';
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
      position: 'top',
    });
    toast.present();
  }


  info(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  warn(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  error(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  dateFormat(dateString: Date, format: string): string {
    return moment(dateString).format(format);
  }

  dateFormatRegex(x, y): string {
    x = new Date(x);
    let z = {
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

  addMinutes(dateStr: Date, addition: number): Date {
    return new Date(dateStr.setTime(dateStr.getTime() + 1000 * 60 * addition));
  }

  // FIXME: Pluginden alınan bilgiye göre cevap dönecek
  isOnline(): boolean {
    let connection: boolean = true;
    let connectionType = this.network.type;
    this.logger.warn(connectionType);

    return connection;

  }


  getSystemParam(param) {
    return this.getLocalStorageParam("systemParams", param);
  }

  getSystemLabel(param) {
    return this.getLocalStorageParam("labels", param);
  }

  private getLocalStorageParam(type: string, param: string) {
    let value: string = "";
    let systemParams = localStorage.getItem(type);
    if (systemParams != null) {
      let paramList = JSON.parse(systemParams);
      paramList.forEach(item => {
        if (item.kod != null && item.kod == param) {
          value = item.ad;
        }
      });
    }
    return value;
  }

  translateTurkishCharacters(text: string) {
    let z = "";
    if (text != null && text != '') {
      let y = text.split('');
      for (let i = 0; y.length > i; i++) {
        switch (y[i]) {
          case "Ç":
            z += y[i].replace("Ç", "C");
            break;
          case "ç":
            z += y[i].replace("ç", "c");
            break;
          case "Ğ":
            z += y[i].replace("Ğ", "G");
            break;
          case "ğ":
            z += y[i].replace("ğ", "g");
            break;
          case "İ":
            z += y[i].replace("İ", "I");
            break;
          case "ı":
            z += y[i].replace("ı", "i");
            break;
          case "Ö":
            z += y[i].replace("Ö", "O");
            break;
          case "ö":
            z += y[i].replace("ö", "o");

            break;
          case "Ş":
            z += y[i].replace("Ş", "S");
            break;
          case "ş":
            z += y[i].replace("ş", "s");
            break;
          case "Ü":
            z += y[i].replace("Ü", "U");
            break;
          case "ü":
            z += y[i].replace("ü", "u");
            break;
          default:
            z += y[i];
            break;
        }
      }
    }

    return z
  }

  pushErrorMessages(result: ProcessResults) {
    result.errorMessages.forEach((val, index) => {
      console.error(val, index);
      this.error(val);
    })
  }

  pushInfoMessages(result: ProcessResults) {
    result.infoMessages.forEach((val, index) => {
      console.warn(val, index);
      this.warn(val);
    })
  }

  pushAllMessages(result: ProcessResults) {
    this.pushErrorMessages(result);
    this.pushInfoMessages(result);
  }


  loaderStart() {
    if (!this.isLoaderRunning) {
      this.loader = this.loadingController.create({spinner: 'dots'});
      this.isLoaderRunning = true;
      this.loader.present();
    }
  }

  loaderEnd() {
    if (this.isLoaderRunning)
      this.loader.dismissAll();
    this.isLoaderRunning = false;
  }

  timerStart(name: string) {
    console.time(name);
  }

  timerEnd(name: string) {
    console.timeEnd(name);
  }

  phoneMask(tel: string): string {
    let maskedValue = "";
    debugger;
    if (this.isNotEmpty(tel)) {
      let missing: number = 10 - tel.length;


      for (let i = 0; i < missing; i++) {
        tel += " ";
      }
      maskedValue = "(" + tel.substring(0, 3) + ") " + tel.substring(3, 6) + "-" + tel.substring(6, 10);

      return maskedValue;
    }
  }

}
