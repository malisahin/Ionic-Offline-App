/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import { Injectable } from "@angular/core";
import { Hizmet } from "../../entities/hizmet/hizmet";
import { HizmetDao } from "../hizmet-dao/hizmet-dao";
import { BaseDao } from "../base-dao/base-dao";
import { UtilProvider } from "../util/util";
import { Pageable } from "../../entities/Pageable";
import { HizmetProvider } from "../hizmet/hizmet";
import { AlertController } from "ionic-angular";
import { Constants } from "../../entities/Constants";


@Injectable()
export class HizmetService {

  hizmet: Hizmet;
  defaultOrderBy = Constants.ORDER_BY.RANDEVU_TAR_ASCENDES;

  constructor(private hizmetDao: HizmetDao,
    private util: UtilProvider,
    private alertCtrl: AlertController,
    private hizmetProvider: HizmetProvider) {
  }

  fetchHizmetWithPage(hizmet: Hizmet, orderBy: string, pageable: Pageable): Promise<any> {
    return this.hizmetDao.find(hizmet, orderBy, pageable);
  }

  fetchHizmet(hizmet: Hizmet): Promise<any> {
    return this.hizmetDao.find(hizmet, this.defaultOrderBy, new Pageable());
  }

  fetchHizmetWithQuery(query: string, orderBy: string, pageable: Pageable): Promise<any> {
    return this.hizmetDao.search(query, orderBy, pageable);
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
      hizmet = JSON.parse(result.res.rows.item(0).data);
    }
    return hizmet;

  }

  saveHizmet(): Promise<any> {
    return this.hizmetDao.updateHizmet(this.hizmet);
  }

  async saveAndFetchHizmet(hizmet: Hizmet): Promise<any> {
    this.hizmet = hizmet;
    await this.hizmetDao.updateHizmet(hizmet);
    let jsonData = await this.getHizmetBySeqNo(hizmet.seqNo);
    return new Promise((resolve, rej) => {
      let hzmet: Hizmet = this.hizmetProvider.fillHizmet(jsonData);
      resolve(hzmet);
    })
  }

  deleteHizmet(seqNo: string): Promise<any> {
    return this.hizmetDao.deleteHizmet(seqNo);
  }

  isHizmetDisabled(hizmet: Hizmet): Boolean {
    return hizmet.durum == "KAPALI" || hizmet.durum == "IPTAL";
  }

}
