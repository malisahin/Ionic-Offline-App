import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CacheService} from "ionic-cache";
import {BaseProvider} from "../base/base";
import {UtilProvider} from "../util/util";
import {Constants} from "../../entities/Constants";

/**
 * @author mali.sahin
 * @since 15-08-2018
 */


export class CacheItem {
  time: number;
  cacheType: string;
  key: string;
  value: any;

  constructor(private type: string) {
    this.cacheType = type;
  }


}

@Injectable()
export class CacheProvider extends BaseProvider {

  defaultTTL: number = 60 * 60;

  constructor(private cacheService: CacheService) {
    super();
    cacheService.setDefaultTTL(this.defaultTTL);
  }

  init() {

  }

  async saveItem(key, value, group) {
    await this.cacheService.saveItem(key, value, group, this.defaultTTL);
  }

  async saveLog(data, type) {
  /*  type = null;
    if (this.isNotEmpty(type)) {
      let item = new CacheItem(Constants.CACHE_KEYS[type]);
      item.time = new Date().getTime();
      item.value = data;
      let logs: CacheItem[] = await this.cacheService.getItem(Constants.CACHE_KEYS.LOG);
      if (this.isEmpty(logs))
        logs = [];
      logs.push(item);
      this.saveItem(type, logs, Constants.CACHE_KEYS.LOG);
    }*/
  }

  getLog(): Promise<any> {
    return this.cacheService.getRawItems();
  }

}
