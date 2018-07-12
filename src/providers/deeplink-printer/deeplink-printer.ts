import {HttpClient} from '@angular/common/http';
import {Injectable, ViewChild} from '@angular/core';
import {ApiProvider} from "../api/api";
import {UtilProvider} from "../util/util";
import {LoggerProvider} from "../logger/logger";
import {ZebraPrinterComponent} from "../../components/zebra-printer/zebra-printer";
import {ModalController, Nav} from "ionic-angular";
import {Deeplinks} from "@ionic-native/deeplinks";
import {Constants} from "../../entities/Constants";
import {HttpHeaders} from "@angular/common/http";

/*
 Generated class for the DeeplinkPrinterProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class DeeplinkPrinterProvider {
  @ViewChild(Nav) nav: Nav;
  seqNo: string;
  tip: string;

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private util: UtilProvider,
              private modalCtrl: ModalController,
              private deeplinks: Deeplinks,
              private logger: LoggerProvider) {

  }

  public init() {
    this.logger.warn("Deeplink is Working");
    this.deeplinks.routeWithNavController(this.nav, {
      '/': ZebraPrinterComponent,
      '/sos.com/Kurumsal/:seqNo': ZebraPrinterComponent
    }).subscribe((match) => {

      let sample = {
        extra: {},
        host: 'sos.com',
        path: '/KURUMSAL/19527',
        scheme: 'com.sistek.sosprint',
        url: 'com.sistek.sosprint://sos.com/KURUMSAL/19527'
      };

      this.checkUrl(match);
      console.log('Successfully routed', match);
    }, (nomatch) => {
      console.warn('Unmatched Route', nomatch);
    });
  }

  checkUrl(res: any) {
    let isComeFromSosPrint = this.util.isNotEmpty(res) && this.util.isNotEmpty(res.scheme) && res.scheme == "com.sistek.sosprint";
    if (isComeFromSosPrint) {
      if (this.util.isNotEmpty(res.path)) {
        this.getUrlParameters(res.path);
      }
    }
  }

  getUrlParameters(path) {
    let params = path.split('/');
    this.seqNo = params[2];
    this.tip = params[1];
    this.getPrintingTextFromApi();
    this.logger.log("Print Command is given for SEQ_NO: " + this.seqNo + ", TIP: " + this.tip);

  }

  async  getPrintingTextFromApi() {
    let url = this.api.getDeepLinkPrintTextUrl(this.seqNo, this.tip);
    this.logger.warn(url);
    let printingText = "";
    debugger;
    try {
      await this.http.get(url, {headers: this.getHeader(), responseType: "text"}).toPromise().then((res) => {
        printingText = res;
        this.logger.warn(printingText);
      });
      this.logger.log(printingText);
      if (this.util.isNotEmpty(printingText)) {
        this.sendToPrinter(printingText);
      }

    } catch (e) {
      this.logger.error(e);
    }

  }

  sendToPrinter(text) {
    text = text.replace(/#new_line#/g, '\r\n');
    let modal = this.modalCtrl.create(ZebraPrinterComponent, {text: text});
    modal.present();
  }

  getHeader() {
    return new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }


}
