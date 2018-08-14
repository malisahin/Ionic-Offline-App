import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from "../util/util";
import { BransDao } from "../brans-dao/brans-dao";
import { Brans } from "../../entities/Brans";
import { LoggerProvider } from "../logger/logger";

/**
 * @author mali.sahin
 * @since 31-07-2018
 */


@Injectable()
export class BransProvider {

  constructor(private util: UtilProvider, private bransDao: BransDao, private logger: LoggerProvider) {

  }

  insertList(bransData: any): Promise<any> {
    let list: Brans[] = this.fillList(bransData);
    return this.bransDao.insertList(list);
  }

  private fillList(bransData: any[]): Brans[] {
    let bransList: Brans[] = [];
    bransData.forEach(item => {
      let brans = new Brans();
      brans.hizmetTipi = item.hizmetTipi;
      brans.mamAnaGrp = item.mamAnaGrp;
      brans.exp = item.exp;
      bransList.push(brans);
    });
    return bransList;
  }

  async  getList(filter: Brans) {
    let bransList: Brans[] = [];
    let result = await this.bransDao.getList(filter);
    if (this.util.isNotEmptyRows(result.res)) {
      let rows = result.res.rows;
      for (let i = 0; i < rows.length; i++) {
        let item = rows.item(i);
        bransList.push(Brans.create(item.hizmetTipi, item.mamAnaGrp, item.exp));
      }
    }
    return bransList;
  }


}
