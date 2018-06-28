/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {Injectable} from "@angular/core";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {HizmetDao} from "../hizmet-dao/hizmet-dao";
import {BaseDao} from "../base-dao/base-dao";
import {UtilProvider} from "../util/util";
import {Pageable} from "../../entities/Pageable";
import {HizmetProvider} from "../hizmet/hizmet";
import {AlertController} from "ionic-angular";


@Injectable()
export class HizmetService {

  hizmet: Hizmet;

  constructor(private hizmetDao: HizmetDao,
              private  util: UtilProvider,
              private  alertCtrl: AlertController,
              private hizmetProvider: HizmetProvider) {
  }

  fetchHizmetWithPage(hizmet: Hizmet, pageable: Pageable): Promise<any> {
    return this.hizmetDao.find(hizmet, pageable);
  }

  fetchHizmet(hizmet: Hizmet): Promise<any> {
    return this.hizmetDao.find(hizmet, new Pageable());
  }

  fetchHizmetWithQuery(query: string, pageable: Pageable): Promise<any> {
    return this.hizmetDao.search(query, pageable);
  }


  deleteHizmetList(): Promise<any> {
    return this.hizmetDao.deleteList();
  }

  setHizmet(hizmet: Hizmet) {
    this.hizmet = hizmet;
  }

  getHizmet(): Hizmet {
    return this.hizmet;
  }

  async getHizmetBySeqNo(seqNo: string): Promise<Hizmet> {
    let hizmet = new Hizmet();
    hizmet.seqNo = seqNo;
    let result = await this.fetchHizmet(hizmet);
    if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.res.rows) && result.res.rows.length > 0) {
      hizmet = result.res.rows.item(0);
    }
    return hizmet;

  }

  saveHizmet(): Promise<any> {
    return this.hizmetDao.updateHizmet(this.hizmet);
  }

  async saveAndFetchHizmet(hizmet: Hizmet): Promise<any> {
    await this.hizmetDao.updateHizmet(hizmet);
    let list = await this.fetchHizmet(hizmet);
    return new Promise((res, rej) => {
      let stringData = list.res.rows.item(0).data;
      let jsonData = JSON.parse(stringData);
      let hzmet = this.hizmetProvider.fillHizmet(jsonData);
      res(hzmet);
    })
  }

  deleteHizmet(seqNo: string): Promise<any> {
    return this.hizmetDao.deleteHizmet(seqNo);
  }

}
