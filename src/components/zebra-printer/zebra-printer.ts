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
    this.util.success("Hizmet Formu çıktısı başarılı bir şekilde alındı.");
  }

  fnError() {
    this.util.error("Çıktı alınırken hata oluştu.");
  }

  androidList() {
    window.printer.list(this.androidSetPrinterList.bind(this), this.fnError.bind(this));
  }

  androidClose() {
    window.printer.close(this.fnSuccess.bind(this), this.fnError.bind(this));
  }

  androidOpen() {
    window.printer.open(this.fnSuccess.bind(this), this.fnError.bind(this), this.selectedPrinter);
  }

  androidPrint() {
    this.androidOpen();
    window.printer.print(this.fnSuccess.bind(this), this.fnError.bind(this), this.text);
  }

  iosList() {
    window.plugins.CordovaPrinter.getPrinters(this.fnSuccess.bind(this), this.fnError.bind(this));
  }

  iosPrint() {
    window.plugins.CordovaPrinter.print(this.fnSuccess.bind(this), this.fnError.bind(this), this.selectedPrinter, this.text);
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
