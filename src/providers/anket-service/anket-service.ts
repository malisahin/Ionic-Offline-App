import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UtilProvider} from "../util/util";
import {LoggerProvider} from "../logger/logger";
import {Anket} from "../../entities/hizmet/Ankets/Anket";
import {AnketSoru, SerSoruTnm} from "../../entities/hizmet/Ankets/AnketSoru";
import {AnketCevap} from "../../entities/hizmet/Ankets/AnketCevap";
import {AnketMst} from "../../entities/hizmet/Ankets/AnketMst";


@Injectable()
export class AnketService {


  constructor(private  util: UtilProvider,
              private  logger: LoggerProvider) {

  }

  fillAnket(obj) {
    debugger;
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

}
