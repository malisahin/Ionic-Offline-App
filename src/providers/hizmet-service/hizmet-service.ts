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
import {Constants} from "../../entities/Constants";


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

  fetchHizmet(seqNo: string): Promise<any> {
    return this.hizmetDao.findOne(seqNo);
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
    let res = await this.fetchHizmet(seqNo);
    if (this.util.isNotEmptyRows(res)) {
      hizmet = JSON.parse(res.rows.item(0).data);
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

  sunucuyaKayitIcinHazirla(hizmet: Hizmet) {

    let sunucuyaGidecekHizmet = this.util.assign(hizmet);
    let DATE_TIME_FORMAT: string = "dd.MM.yyyy hh:mm:ss.s";
    let DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND: string = "dd.MM.yyyy hh:mm:ss";
    let DATE_FORMAT: string = "yyyy-MM-dd";

    if (this.util.isNotEmpty(sunucuyaGidecekHizmet.islemList)) {
      sunucuyaGidecekHizmet.islemList = this.util.assignList(sunucuyaGidecekHizmet.islemList);

      sunucuyaGidecekHizmet.islemList.forEach(islem => {

        if (this.util.isNotEmpty(islem.basTar)) {
          islem.basTar = this.util.dateFormatRegex(new Date(islem.basTar), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND)
        }

        if (this.util.isNotEmpty(islem.bitTar)) {
          islem.bitTar = this.util.dateFormatRegex(new Date(islem.bitTar), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND)
        }

      })
    }

    sunucuyaGidecekHizmet.sattar = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.sattar), DATE_FORMAT);

    sunucuyaGidecekHizmet.randevuTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.randevuTarihi), DATE_TIME_FORMAT);
    sunucuyaGidecekHizmet.cagriTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.cagriTarihi), DATE_TIME_FORMAT);

    sunucuyaGidecekHizmet.islemTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.islemTarihi), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND);
    sunucuyaGidecekHizmet.islemBitTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.islemBitTarihi), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND);

    delete sunucuyaGidecekHizmet.anket;

    return sunucuyaGidecekHizmet;
  }


  async hizmetDurumunuDegistir(hizmet: Hizmet, res: any) {
    debugger;
    if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.message)) {
      hizmet.durum = res.message.durum;
      await this.saveAndFetchHizmet(hizmet);
    }
  }


}
