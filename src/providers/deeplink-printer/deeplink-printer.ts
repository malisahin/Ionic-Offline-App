import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiProvider} from "../api/api";
import {UtilProvider} from "../util/util";
import {LoggerProvider} from "../logger/logger";
import {ZebraPrinterComponent} from "../../components/zebra-printer/zebra-printer";
import {ModalController} from "ionic-angular";

/*
 Generated class for the DeeplinkPrinterProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class DeeplinkPrinterProvider {

  seqNo: string;
  tip: string;

  constructor(public http: HttpClient,
              private api: ApiProvider,
              private util: UtilProvider,
              private modalCtrl: ModalController,
              private logger: LoggerProvider) {

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
    let printingText = await this.http.get(url).toPromise();
    this.logger.log(printingText);
    if (this.util.isNotEmpty(printingText)) {
      this.sendToPrinter(printingText);
    }

  }

  sendToPrinter(text) {
    text = text.replace(/#new_line#/g, '\r\n');
    let modal = this.modalCtrl.create(ZebraPrinterComponent, {text: text});
    modal.present();
  }


}
