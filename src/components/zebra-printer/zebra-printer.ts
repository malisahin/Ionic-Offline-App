import { Component } from '@angular/core';
import { UtilProvider } from '../../providers/util/util';
import { LoggerProvider } from '../../providers/logger/logger';
import { NavParams } from 'ionic-angular';
declare let window: any;

@Component({
  selector: 'zebra-printer',
  templateUrl: 'zebra-printer.html'
})
export class ZebraPrinterComponent {

  text: string;
  selectedPrinter: string;
  printerList: string[] = [];
  platform: string;

  constructor(private util: UtilProvider,
    private navParams: NavParams) {
    this.platform = window.device.platform;
    this.text = navParams.get("text");
    this.init();
  }

  init() {
    if (this.platform == 'Android') {
      this.androidList();
    } else if (this.platform == "iOS") {
      this.iosList();
    }

  }

  androidSetPrinterList(list: any) {
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
    window.printer.list(this.androidSetPrinterList, this.fnError);
  }

  androidClose() {
    window.printer.close(this.fnSuccess, this.fnError);
  }

  androidOpen() {
    window.printer.open(this.fnSuccess, this.fnError, this.selectedPrinter);
  }

  androidPrint() {
    window.printer.print(this.fnSuccess, this.fnError, this.text);
  }

  iosList() {
    window.plugins.CordovaPrinter.getPrinters(this.fnSuccess, this.fnError);
  }

  iosPrint() {
    window.plugins.CordovaPrinter.print(this.fnSuccess, this.fnError, this.selectedPrinter, this.text);
  }



}
