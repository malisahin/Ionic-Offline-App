import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HizmetService} from "../hizmet-service/hizmet-service";


@Injectable()
export class PrinterTextProvider {

  constructor(public http: HttpClient, private hizmetService: HizmetService) {
    console.log('Hello PrinterTextProvider Provider');

  }


}

export class AndroidPrinter {

  list(fnSuccess, fnError) {
    cordova.exec(fnSuccess, fnError, "BluetoothPrinter", "list", []);
  }

  open(fnSuccess, fnError, name) {
    cordova.exec(fnSuccess, fnError, "BluetoothPrinter", "open", [name])
  }

  close(fnSuccess, fnError) {
    cordova.exec(fnSuccess, fnError, "BluetoothPrinter", "close", [])
  }

  print(fnSuccess, fnError, printer, message) {
    cordova.exec(fnSuccess, fnError, "BluetoothPrinter", "print", [printer, message]);
  }
}

export class IOSPrinter {
  list(fnSuccess, fnError) {
    window.plugins.CordovaPrinter.getPrinters(fnSuccess, fnError);
  }

  print(fnSuccess, fnError, printer, message) {
    window.plugins.CordovaPrinter.print(fnSuccess, fnError, printer, message);
  }
}

