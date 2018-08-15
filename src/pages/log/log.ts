import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UtilProvider} from "../../providers/util/util";
import {CacheItem, CacheProvider} from "../../providers/cache/cache";

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {

  logList: CacheItem[];

  constructor(private util: UtilProvider,
              private cacheService: CacheProvider) {
    this.logList = [];
  }

  async ionViewDidLoad() {
    this.logList = await this.cacheService.getLog();
  }


}
