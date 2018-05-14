/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {Injectable} from "@angular/core";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {HizmetDao} from "../hizmet-dao/hizmet-dao";


@Injectable()
export class HizmetService {

  hizmet: Hizmet;

  constructor(private hizmetDao: HizmetDao) {
    console.log('Hello HizmetServiceProvider Provider');

  }

  fetchHizmet(hizmet: Hizmet): Promise<any> {
    return this.hizmetDao.find(hizmet);
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

}
