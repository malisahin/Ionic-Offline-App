/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import { Injectable } from "@angular/core";
import { Hizmet } from "../../entities/hizmet/hizmet";
import { HizmetDao } from "../hizmet-dao/hizmet-dao";
import { Observable } from "rxjs/Observable";
import { HizmetProvider } from "../hizmet/hizmet";


@Injectable()
export class HizmetService {

  hizmet: Hizmet;

  constructor(private hizmetDao: HizmetDao, private hizmetProvider: HizmetProvider) {
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

  saveHizmet() {
    this.hizmetDao.insertOne(this.hizmet);
  }

}
