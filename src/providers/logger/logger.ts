/**
 * @author malisahin
 * @date 2018-04-14
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoggerProvider {

  constructor() {

  }

  log(res) {
    console.log(res);
  }

  dir(res) {
    console.dir(res);
  }

  error(res) {
    console.error(res);
  }

  warn(res) {
    console.warn(res);
  }

}
