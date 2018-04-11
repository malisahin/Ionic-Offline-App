import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../entities/Constants';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constants: Constants;
  constructor(public http: HttpClient) {
    console.log('Hello UtilProvider Provider');
    this.constants = new Constants();
  }

  isEmpty(item: any): boolean {
    if (typeof item == undefined || item == null || item == "") {
      return false;
    } else {
      return true;
    }
  }

  prepareForLike(key: string, value: string): string {
    return key + " LIKE '%" + value.split('').join('%') + "%'";
  }

  prepareForEqual(key: string, value: string): string {
    return key + "='" + value + "'";
  }

  prepareQuery(type: string, key: string, value: string): string {
    return type == this.constants.SEARCH_TYPE.EXACT ? this.prepareForEqual(key, value) : this.prepareForLike(key, value);
  }

}
