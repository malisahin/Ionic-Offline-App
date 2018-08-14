import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * @author mali.sahin
 * @since 14-08-2018
 */

@Injectable()
export class BaseProvider {

  isEmpty(item: any): boolean {
    item = String(item);
    return typeof item == "undefined" || item == null || item == "";
  }

  emptyIfNull(item: any) {
    if (this.isEmpty(item)) item = "";

    return item;
  }

  isNotEmpty(item: any): boolean {
    item = String(item);

    return !(typeof item == "undefined" || item == null || item == "");
  }


}
