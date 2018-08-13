import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from "../util/util";
import { LoggerProvider } from "../logger/logger";
import { Anket } from "../../entities/hizmet/Ankets/Anket";
import { AnketSoru, SerSoruTnm } from "../../entities/hizmet/Ankets/AnketSoru";
import { AnketCevap } from "../../entities/hizmet/Ankets/AnketCevap";
import { AnketMst } from "../../entities/hizmet/Ankets/AnketMst";
import { ApiProvider } from '../api/api';
import { TokenProvider } from '../token/token';
import { Hizmet } from '../../entities/hizmet/hizmet';
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';
import { Constants } from '../../entities/Constants';


@Injectable()
export class AnketService {


  constructor(private util: UtilProvider,
    private http: HttpClient,
    private token: TokenProvider,
    private logger: LoggerProvider,
    private api: ApiProvider) {

  }

  fillAnket(obj) {
    if (this.util.isNotEmpty(obj) && this.util.isNotEmpty(obj.anketMst)) {
      let anket = new Anket();
      anket.anketMst = this.fillAnketMst(obj.anketMst);
      anket.anketSorular = this.fillAnketSoru(obj.anketSorular);
      anket.anketCevaplar = this.fillAnketCevap();
      return anket;
    }
    return null;
  }

  fillAnketMst(anketMst: any): AnketMst {
    let mst: AnketMst = new AnketMst();
    mst.anketId = anketMst.anketId;
    mst.anketSeq = anketMst.anketSeq;
    mst.durum = anketMst.durum;
    mst.hedefGrp = anketMst.hedefGrp;
    mst.hedefKod = anketMst.hedefKod;
    mst.orgKod = anketMst.orgKod;
    mst.refKod = anketMst.refKod;
    mst.refNo = anketMst.refNo;
    mst.sorumlu = anketMst.sorumlu;
    mst.anketAdi = anketMst.anketAdi;

    return mst;
  }

  fillAnketSoru(soruList: any): AnketSoru[] {
    let orderedList: AnketSoru[] = [];
    soruList.forEach(item => {
      let soru: AnketSoru = new AnketSoru();
      soru.anketId = item.anketId;
      soru.orgKod = item.orgKod;
      soru.soruId = item.soruId;
      soru.zorunlu = item.zorunlu;


      let tanim: SerSoruTnm = new SerSoruTnm();
      tanim.iptal = item.serSoruTnm.iptal;
      tanim.orgKod = item.serSoruTnm.orgKod;
      tanim.soruId = item.serSoruTnm.soruId;
      tanim.soruMethod = item.serSoruTnm.soruMethod;
      tanim.soruText = item.serSoruTnm.soruText;
      tanim.grpKod = item.serSoruTnm.grpKod;

      soru.serSoruTnm = tanim;

      orderedList.push(soru);
    });

    return orderedList;
  }

  fillAnketCevap(): AnketCevap[] {
    let orderedList: AnketCevap[] = [];
    return orderedList;
  }


  async saveDataToApi(hizmet: Hizmet) {

    let anketCevapList: AnketCevap[] = this.getAnketCevapList(hizmet);

    if (this.util.isNotEmpty(anketCevapList) && anketCevapList.length > 0) {

      let header = await this.token.callTokenAndGetHeader();
      let url = this.api.getAnketKayitUrl();
      let result = await this.http.post(url, anketCevapList, { headers: header }).toPromise();
      return this.setResult(result);
    }
    else {
      return new Promise(res => res(Constants.STATUS.SUCCESS));
    }
  }

  setResult(result: any): Promise<any> {

    let status = Constants.STATUS.ERROR;

    if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.responseCode) && result.responseCode == Constants.STATUS.SUCCESS) {
      status = Constants.STATUS.SUCCESS;
    }

    return new Promise((resolve, reject) => {
      resolve(status);
      reject(status);
    })

  }

  getAnketCevapList(hizmet: Hizmet): AnketCevap[] {
    if(this.util.isNotEmpty(hizmet.anket) && this.util.isNotEmpty(hizmet.anket.anketCevaplar)) {
      let list = hizmet.anket.anketCevaplar;
      return list;
    }

    return [];
  }



}
