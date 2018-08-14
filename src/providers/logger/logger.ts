/**
 * @author malisahin
 * @date 2018-04-14
 */

import { Injectable } from "@angular/core";
import { BaseProvider } from "../base/base";

@Injectable()
export class LoggerProvider extends BaseProvider {

  constructor() {
    super();
  }


  private consoleLog(message, color) {
    console.log("%c " + message, color);
  }

  info(res) {



    let mes = "";
    let valid = true;
    if (this.isNotEmpty(res.mes))
      mes = res.mes;
    else
      mes = res;

    if (this.isNotEmpty(res.valid))
      valid = res.valid;

    if (valid)
      this.consoleLog(mes, "color: #0096ff");

  }

  success(res) {
    console.log("%c " + res, "color: #00ff4b");
  }

  log(res) {

    let mes = ""
    let valid = true;
    console.log(res);
  }

  log2(mes, res) {
    console.log(mes, res);
  }

  dir(res) {
    console.dir(res);
  }

  dir2(mes, res) {
    console.dir(mes, res);
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
