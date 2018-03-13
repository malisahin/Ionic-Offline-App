/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {HTTP} from "@ionic-native/http";
import {Injectable} from "@angular/core";
import {ApiProvider} from "../api/api";
import {Observable} from "rxjs/Observable";
import {UrunAnaGrpDao} from "../urun-ana-grp-dao/urun-ana-grp-dao";
import {UrunAnaGrup} from "../../entities/urunAnaGrup";


@Injectable()
export class UrunAnaGrpProvider {

  constructor(public http: HTTP, private api: ApiProvider, private dao: UrunAnaGrpDao) {
    console.log('Hello UrunAnaGrpProvider Provider');
  }

  downloadUrunAnaGrup(versiyon): Promise<any> {
    let url = this.api.urunAnagrupDownloadUrl(versiyon);
    let options = this.api.getHeader();
    this.http.setHeader('Content-Type', 'application/json');
    this.http.setHeader('accessToken', localStorage.getItem("accessToken"));
    return this.http.get(url, {}, {}).then(
      item => {
        let anaGrp = new UrunAnaGrup();
        return anaGrp.fillUrunAnaGrup(item).then(anaGrpList => {
          return this.dao.insertMamAnagrpList(anaGrpList);
        });
      }
    );
  }

}
