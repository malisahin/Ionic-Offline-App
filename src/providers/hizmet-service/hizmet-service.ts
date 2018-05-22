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


@Injectable()
export class HizmetService {

  hizmet: Hizmet;

  constructor(private hizmetDao: HizmetDao,
              private  baseDao: BaseDao,
              private  util: UtilProvider) {
    console.log('Hello HizmetServiceProvider Provider');

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

  saveHizmet(): Promise<any> {
    return this.hizmetDao.updateHizmet(this.hizmet);
  }

  async saveAndFetchHizmet(): Promise<any> {
    await this.saveHizmet();
    let list = await this.fetchHizmet(this.hizmet);
    return new Promise((res, rej) => res(list.res.rows.item(0)))
  }

}
