import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UtilProvider} from "../util/util";
import {LoggerProvider} from "../logger/logger";
import {CallNumber} from "@ionic-native/call-number";


@Injectable()
export class PluginProvider {

  constructor(private  util: UtilProvider,
              private logger: LoggerProvider,
              private  callNumber: CallNumber) {
    console.log('Hello PluginProvider Provider');
  }


  callPhoneNumber(tel: any) {
    if (this.util.isNotEmpty(tel)) {
      this.callNumber.callNumber(tel, true)
        .then(res => this.logger.info('Launched dialer! ' + res))
        .catch(err => this.logger.error('Error launching dialer ==> ' + err));
    }
  }
}
