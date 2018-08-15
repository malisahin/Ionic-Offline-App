/**
 * @author malisahin
 * @date 2018-04-14
 */

import {Injectable} from "@angular/core";
import {BaseProvider} from "../base/base";
import {CacheProvider} from "../cache/cache";
import {Constants} from "../../entities/Constants";

@Injectable()
export class LoggerProvider extends BaseProvider {

  isLogEnabled: boolean = true;

  constructor(private  cacheService: CacheProvider) {
    super();
  }


  private consoleLog(message, color) {
    console.log("%c " + message, color);
  }

  async info(res) {


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

    if (this.isLogEnabled)
      await this.cacheService.saveLog(Constants.CACHE_KEYS.LOG, mes);

  }

  async success(res) {
    console.log("%c " + res, "color: #00ff4b");

    if (this.isLogEnabled)
      await this.cacheService.saveLog(Constants.CACHE_KEYS.SUCCESS, res);
  }

  async log(res) {

    let mes = "";
    let valid = true;
    console.log(res);

    if (this.isLogEnabled)
      await this.cacheService.saveLog(Constants.CACHE_KEYS.LOG, res);
  }

  async log2(mes, res) {
    console.log(mes, res);

    if (this.isLogEnabled)
      await this.cacheService.saveLog(Constants.CACHE_KEYS.LOG, res);
  }

  async dir(res) {
    console.dir(res);

    if (this.isLogEnabled)
      await this.cacheService.saveLog(Constants.CACHE_KEYS.DIR, res);
  }

  dir2(mes, res) {
    console.dir(mes, res);
  }

  async error(res) {
    console.error(res);

    if (this.isLogEnabled)
      await this.cacheService.saveLog(Constants.CACHE_KEYS.ERROR, res);
  }

  error2(mes, res) {
    console.error(mes, res);
  }

  async warn(res) {
    console.warn(res);

    if (this.isLogEnabled)
      await this.cacheService.saveLog(Constants.CACHE_KEYS.WARN, res);
  }

  table(res) {
    console.table(res);
  }
}
