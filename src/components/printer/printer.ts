import {Component} from '@angular/core';
import {NavParams} from "ionic-angular";
import {LoggerProvider} from "../../providers/logger/logger";
import {UtilProvider} from "../../providers/util/util";
declare let cordova = any;
declare let windows = any;

@Component({
  selector: 'printer',
  templateUrl: 'printer.html'
})
export class PrinterComponent {

  text: string;
  printerList: [] = [];
  selectedPrinter: any;
  platform: string;

  constructor(private  navParams: NavParams,
              private logger: LoggerProvider,
              private  util: UtilProvider) {
    this.text = navParams.data;
    this.platform = window.device.platform;
  }

  getPrinterList() {

  }

  print() {

    if (this.platform == 'Android') {
      this.androidOpen();
      this.androidPrint();
    }
    else if (this.platform == 'iOS') {
      this.iosPrint();
    }

  }


  iosList(fnError) {
    window.plugins.CordovaPrinter.getPrinters(this.success, fnError);
  }

  iosPrint() {
    window.plugins.CordovaPrinter.print(this.success, this.error, this.selectedPrinter, this.text);
  }

  androidList() {
    cordova.exec(this.success, this.error, "BluetoothPrinter", "list", []);
  }

  androidOpen() {
    cordova.exec(this.success, this.error, "BluetoothPrinter", "open", [this.selectedPrinter])
  }

  androidClose() {
    cordova.exec(this.success, this.error, "BluetoothPrinter", "close", [])
  }

  androidPrint() {
    cordova.exec(this.success, this.error, "BluetoothPrinter", "print", [this.selectedPrinter, this.text]);
  }

  error(err) {
    this.util.error("Çıktı alınırken bir hata oluştu. Hata: " + err);
  }

  success() {
    this.util.message("Fatura çıktısı başarılı bir şekilde alındı.")
  }

  noDeviceError() {
    this.util.error("Bluetooth cihazının bağlı olduğundan emin olunuz");
  }

}

