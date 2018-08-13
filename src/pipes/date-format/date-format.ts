import {Pipe, PipeTransform} from '@angular/core';
import {UtilProvider} from "../../providers/util/util";

/**
 * @author mali.sahin
 * @since 12.08.2018
 */

@Pipe({
  name: 'FormatDate',
})
export class DateFormatPipe implements PipeTransform {
  /**
   * Takes a number as time and convert to date.
   */
  constructor(private  util: UtilProvider) {

  }

  transform(value: number, ...args) {
    if (this.util.isNotEmpty(value)) {
      let time = this.util.dateFormatRegex(new Date(value), "dd-MM-yyyy hh:mm");
      console.log("Formatted Date => " + time);
      return time;
    }

    return "";

  }
}
