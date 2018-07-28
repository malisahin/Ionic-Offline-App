import {Constants} from './../../entities/Constants';
import {Injectable, forwardRef} from '@angular/core';
import {ToastController, LoadingController, Loading} from 'ionic-angular';
import moment from 'moment';
import {ProcessResults} from "../../entities/ProcessResults"
import {Network} from '@ionic-native/network';
import {LoggerProvider} from "../logger/logger";
import {User} from "../../entities/user";


@Injectable()
export class UtilProvider {

  private loader: Loading;
  private isLoaderRunning: boolean = false;

  constructor(private toast: ToastController,
              private network: Network,
              private logger: LoggerProvider,
              private loadingController: LoadingController) {
    moment.locale('tr');
    this.init();
  }

  init() {

  }


  isEmpty(item: any): boolean {
    if (typeof item == "number")
      item = String(item);
    return (typeof item == 'undefined' || item == null || item == "");
  }

  emptyIfNull(item: any) {
    if (this.isEmpty(item))
      item = "";

    return item;
  }

  isNotEmpty(item: any): boolean {
    if (typeof item == "number")
      item = String(item);

    return !(typeof item == 'undefined' || item == null || item == "")
  }

  isNotEmptyRows(res): boolean {
    return this.isNotEmpty(res) && this.isNotEmpty(res.rows) && res.rows.length > 0;
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

  getDuration() {
    let duration = localStorage.getItem(Constants.MESSAGE_DURATION);
    if (this.isEmpty(duration)) {
      duration = Constants.DEFAULT_MESSAGE_DURATION;
      localStorage.setItem(Constants.MESSAGE_DURATION, duration);
    }

    return Number(duration) * 1000;

  }

  success(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: this.getDuration(),
      position: 'top',
      cssClass: 'toast-success'
    });
    toast.present();
  }


  info(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: this.getDuration(),
      position: 'top',
      cssClass: 'toast-info'
    });
    toast.present();
  }

  warn(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: this.getDuration(),
      position: 'top',
      cssClass: 'toast-warn'
    });
    toast.present();
  }

  error(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: this.getDuration(),
      position: 'top',
      cssClass: 'toast-error'
    });
    toast.present();
  }

  dateFormat(dateString: Date, format: string): string {
    return moment(dateString).format(format);
  }

  dateFormatRegex(x, y): string {
    if (this.isEmpty(x))
      return "";

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
    let token = localStorage.getItem(Constants.ACCESS_TOKEN);
    return this.isNotEmpty(token);

  }

  ifOffline() {
    this.error("Bu işlemi yapabilmek için internet bağlantısı gereklidir.");
    this.loaderEnd();
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
      this.loader = this.loadingController.create({
        spinner: 'hide',
        content: this.loaderContent()
      });
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
    if (this.isNotEmpty(tel)) {
      let missing: number = 10 - tel.length;


      for (let i = 0; i < missing; i++) {
        tel += " ";
      }
      maskedValue = "(" + tel.substring(0, 3) + ") " + tel.substring(3, 6) + "-" + tel.substring(6, 10);

      return maskedValue;
    }
  }

  getSelectedTheme() {
    let theme = localStorage.getItem(Constants.SELECTED_THEME);
    if (this.isEmpty) {
      theme = 'blue-theme';
    }

    return theme;
  }

  getConnectionStatus() {
    let loggedIn = localStorage.getItem(Constants.LOGGED_IN) == "true";
    let token = localStorage.getItem(Constants.ACCESS_TOKEN);
    if (this.isNotEmpty(token)) {
      return Constants.NETWORK.ONLINE;
    }
    else if (loggedIn) {
      return Constants.NETWORK.OFFLINE;
    } else {
      return Constants.NETWORK.NONE;
    }
  }

  private loaderContent(): string {
    return `
    <html>
    
    <body style="background-color: red">
      <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <circle fill="none" stroke="#fff" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48" />
        <line fill="none" stroke-linecap="round" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
          <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"
          />
        </line>
        <line fill="none" stroke-linecap="round" stroke="#fff" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5"
          y2="74">
          <animateTransform attributeName="transform" dur="15s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"
          />
        </line>
      </svg>
    </body>
    
    </html> `;
  }


  assign(item: any): any {
    return JSON.parse(JSON.stringify(item));
  }

}


