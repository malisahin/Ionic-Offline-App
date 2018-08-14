import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from '../util/util';
import { LoggerProvider } from '../logger/logger';
import { ApiProvider } from '../api/api';
import { TokenProvider } from '../token/token';
import { Constants } from '../../entities/Constants';
import { TableTotalElements } from '../../entities/TableTotalElement';


@Injectable()
export class TableTotalElementsProvider {

  isSyncNecessary = true;

  constructor(public http: HttpClient,
    private util: UtilProvider,
    private logger: LoggerProvider,
    private api: ApiProvider,
    private token: TokenProvider) {


  }

  async fetchDateFromApi() {
    let header = await this.token.callTokenAndGetHeader();
    if (this.util.isOnline()) {
      let url = this.api.getTotalTableElementsUrl();
      let data = await this.http.get(url, { headers: header }).toPromise();

      this.saveData(data);

    } else {
      this.util.ifOffline();
    }
  }

  saveData(data: any) {
    this.logger.dir2(Constants.TABLE_TOTAL_ELEMENTS.ALL_DATA, data);

    if (this.util.isNotEmpty(data) && this.util.isNotEmpty(data.message)) {
      localStorage.setItem(Constants.TABLE_TOTAL_ELEMENTS.ALL_DATA, JSON.stringify(data.message));

      localStorage.setItem(Constants.TABLE_TOTAL_ELEMENTS.SYNC_DAY, String(new Date().getDate()));
    }

  }

  async init() {
    this.checkSync();

    if (this.isSyncNecessary) {
      await this.fetchDateFromApi();
    }
  }

  checkSync() {
    let syncDayOfMonth = localStorage.getItem(Constants.TABLE_TOTAL_ELEMENTS.SYNC_DAY);

    let moment = new Date().getDate();
    if (this.util.isNotEmpty(syncDayOfMonth) && Number(syncDayOfMonth) == moment) {
      this.isSyncNecessary = false;
    }
  }

  getData(tip: string): number {

    let data = JSON.parse(localStorage.getItem(Constants.TABLE_TOTAL_ELEMENTS.ALL_DATA));

    if (this.util.isNotEmpty(data)) {
      return data[Constants.TABLE_TOTAL_ELEMENTS[tip]];
    }
    return 0;
  }



}
