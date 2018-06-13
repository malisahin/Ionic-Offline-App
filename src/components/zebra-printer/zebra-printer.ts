import { Component } from '@angular/core';
import { UtilProvider } from '../../providers/util/util';
import { LoggerProvider } from '../../providers/logger/logger';
import { NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
declare let window: any;

@Component({
  selector: 'zebra-printer',
  templateUrl: 'zebra-printer.html'
})
export class ZebraPrinterComponent {

  text: string;
  selectedPrinter: string;
  printerList: string[] = [];

  getPrinterList: (param: any) => any;

  constructor(private util: UtilProvider,
    private platform: Platform, private viewCtrl: ViewController,
    private logger: LoggerProvider,
    private navParams: NavParams) {

    this.text = navParams.get("text");
    this.logger.log(this.text);
    this.init();
  }

  init() {
    if (this.platform.is('android')) {
      this.androidList();
    } else if (this.platform.is('ios')) {
      this.iosList();
    }
    this.getPrinterList = this.androidSetPrinterList;
  }

  androidSetPrinterList(list: any) {
    this.logger.dir(list);
    if (this.util.isNotEmpty(list))
      this.printerList = list;
  }

  iosSetPrinterList(list: any) {
    if (this.util.isNotEmpty(list))
      this.printerList = list.split(",");
  }

  fnSuccess() {
    this.util.message("Hizmet Formu çıktısı başarılı bir şekilde alındı.");
  }

  fnError() {
    this.util.message("Çıktı alınırken hata oluştu.");
  }

  androidList() {
    window.printer.list(this.getPrinterList, this.fnError);
  }

  androidClose() {
    window.printer.close(this.fnSuccess, this.fnError);
  }

  androidOpen() {
    window.printer.open(this.fnSuccess, this.fnError, this.selectedPrinter);
  }

  androidPrint() {
    this.androidOpen();
    window.printer.print(this.fnSuccess, this.fnError, this.text);
  }

  iosList() {
    window.plugins.CordovaPrinter.getPrinters(this.fnSuccess, this.fnError);
  }

  iosPrint() {
    window.plugins.CordovaPrinter.print(this.fnSuccess, this.fnError, this.selectedPrinter, this.text);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  yazdir(item) {
    this.selectedPrinter = item;
    if (this.platform.is('android'))
      this.androidPrint();
    else if (this.platform.is('ios'))
      this.iosPrint();
  }

}
