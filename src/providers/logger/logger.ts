/**
 * @author malisahin
 * @date 2018-04-14
 */

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggerProvider {
  constructor() {}

  info(res) {
    console.log("%c " + res, "color: #0096ff");
  }

  success(res) {
    console.log("%c " + res, "color: #00ff4b");
  }

  log(res) {
    console.log(res);
  }

  log2(mes, res) {
    console.log(mes, res);
  }

  dir(res) {
    console.dir(res);
  }

  error(res) {
    console.error(res);
  }

  error2(mes, res) {
    console.error(mes, res);
  }

  warn(res) {
    console.warn(res);
  }

  table(res) {
    console.table(res);
  }
}
