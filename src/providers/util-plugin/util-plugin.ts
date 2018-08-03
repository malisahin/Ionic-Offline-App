import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {UtilProvider} from "../util/util";
import {LoggerProvider} from "../logger/logger";
import {CallNumber} from "@ionic-native/call-number";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@Injectable()
export class UtilPlugin {
  constructor(private util: UtilProvider,
              private logger: LoggerProvider,
              private callNumber: CallNumber,
              private barcodeScanner: BarcodeScanner) {
    console.log("Hello PluginProvider Provider");
  }

  callPhoneNumber(tel: any) {
    if (this.util.isNotEmpty(tel)) {
      this.callNumber
        .callNumber(tel, true)
        .then(res => this.logger.info("Launched dialer! " + res))
        .catch(err => this.logger.error("Error launching dialer ==> " + err));
    }
  }

  scanBarcode(): Promise<any> {
    return this.barcodeScanner.scan(
      {
        preferFrontCamera: false, // iOS and Android
        showFlipCameraButton: true, // iOS and Android
        showTorchButton: true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)
        prompt: "Place a barcode inside the scan area", // Android
        //resultDisplayDuration: 2500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: "CODE_128, CODE_39", // default: all but PDF_417 and RSS_EXPANDED
        //orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations: true, // iOS
        disableSuccessBeep: false // iOS and Android
      }
    );
  }
}
