/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {ApiProvider} from "../api/api";
import {Observable} from "rxjs/Observable";
import {UrunAnaGrpDao} from "../urun-ana-grp-dao/urun-ana-grp-dao";
import {UrunAnaGrup} from "../../entities/urunAnaGrup";


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: Http, private api: ApiProvider, private dao: UrunAnaGrpDao) {
    console.log('Hello UrunAnaGrpProvider Provider');
  }

  downloadUrunAnaGrup(versiyon): Observable<any> {
    let url = this.api.urunAnagrupDownloadUrl(versiyon);
    let options = this.api.getHeader();
    return this.http.get(url, options).map(
      item => {
        let anaGrp = new UrunAnaGrup();
        anaGrp.fillUrunAnaGrup(JSON.parse(item._body).message);
      }
    );
  }

}
