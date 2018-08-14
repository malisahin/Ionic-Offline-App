/**
 * @author malisahin
 * @since 17.04.2018
 */

import { Component } from '@angular/core';
import { HizmetService } from '../../../../providers/hizmet-service/hizmet-service';
import { Hizmet } from '../../../../entities/hizmet/hizmet';
import { UtilProvider } from "../../../../providers/util/util";
import { IslemList } from "../../../../entities/hizmet/islemList";
import { ProcessResults } from "../../../../entities/ProcessResults";
import { LoggerProvider } from "../../../../providers/logger/logger";


enum Durum {
  BASLA = 'BASLA',
  BEKLE = 'BEKLE',
  BITIR = 'BITIR',
  OK = 'OK'
}

@Component({
  selector: 'islem-tarih',
  templateUrl: 'islem-tarih.html'
})
export class IslemTarihComponent {

  hizmet: Hizmet = new Hizmet();
  isenabled: boolean = true;
  sonIslem: IslemList;
  islemBitmisMi: string = "";
  buttonStatus: string = Durum.BASLA;
  islemList: IslemList[] = [];

  constructor(private hizmetService: HizmetService,
    private logger: LoggerProvider,
    private util: UtilProvider) {
    this.hizmet = this.hizmetService.getHizmet();
    this.formatIslemListDates();
    this.init();
  }

  init() {
    if (this.util.isNotEmpty(this.hizmet.islemList)) {
      this.islemList = this.hizmet.islemList;
    }
    this.loadTarihce();
  }

  islemBaslat() {
    this.sonIslem.basTar = new Date().getTime();
    this.hizmet.islemTarihi = this.sonIslem.basTar;
    this.checkStatus();
    this.setButtonStatus();
    this.logger.log("Işlem Başlatıldı. Başlatma Anı" + this.sonIslem.basTar);
  }

  islemBeklet() {
    let res = this.islemBeklemeKontrol();
    if (res.isErrorMessagesNotNull()) {
      this.util.pushErrorMessages(res);
    } else {
      this.sonIslem.bitTar = this.util.addMinutes(new Date, 1).getTime();

      this.sonIslem.durum = Durum.BEKLE;
      this.checkStatus();
      this.sonIslem = new IslemList();
      this.setButtonStatus();
      this.logger.log("Işlem Bekletildi. Bekleme Nedeni :" + this.sonIslem.beklemeNeden + " Bekleme Kaynağı: " + this.sonIslem.bekleKaynak + " Bekletilme Anı" + this.sonIslem.basTar);
    }
  }

  islemBeklemeKontrol(): ProcessResults {
    let res = new ProcessResults();
    if (this.util.isEmpty(this.sonIslem.bekleKaynak)) {
      res.errorMessages.push("Bekleme kaynağı boş olamaz");
    } else if (this.util.isEmpty(this.sonIslem.beklemeNeden)) {
      res.errorMessages.push("Bekleme Nedeni boş olamaz.");
    }
    return res;
  }

  islemBitir() {
    this.sonIslem.bitTar = this.util.addMinutes(new Date, 1).getTime();
    this.sonIslem.durum = Durum.BITIR;
    this.hizmet.islemBitTarihi = this.sonIslem.bitTar;
    this.checkStatus();
    this.setButtonStatus();
    this.logger.log("Işlem Bitirildi. Bitirilme Anı" + this.sonIslem.bitTar);
  }

  loadTarihce() {
    let islemKaydiVarMi: boolean = this.util.isNotEmpty(this.islemList) && this.islemList.length > 0;

    if (islemKaydiVarMi) {
      this.sonIslemiBul();
    } else {
      this.yeniIslemEkle("1");
    }
  }

  yeniIslemEkle(islemSira: string) {
    this.sonIslem = new IslemList();
    this.sonIslem.islSira = islemSira;
    this.sonIslem.seqNo = this.hizmet.seqNo;

    this.islemList.push(this.sonIslem);
    this.checkStatus();
  }

  sonIslemiBul() {
    let sonIslemSira = 0;

    this.islemList.forEach(islem => {
      if (Number(islem.islSira) > sonIslemSira) {
        this.sonIslem = islem
      }
    });

    if (this.sonIslem.durum != Durum.BITIR && this.util.isNotEmpty(this.sonIslem.basTar) && this.util.isNotEmpty(this.sonIslem.bitTar)) {
      this.yeniIslemEkle(String(Number(this.sonIslem.islSira) + 1));
    }

    this.setButtonStatus();
  }

  checkStatus() {
    this.logger.dir(this.sonIslem);
    let beklemeParamSecilmisMi: boolean = this.util.isNotEmpty(this.sonIslem.bekleKaynak) || this.util.isNotEmpty(this.sonIslem.beklemeNeden);

    if (beklemeParamSecilmisMi) {
      this.sonIslem.durum = Durum.BEKLE;
    } else if (this.util.isNotEmpty(this.sonIslem.bitTar)) {
      this.sonIslem.durum = Durum.BITIR;
    }

    this.updateTarihceList();
    this.setButtonStatus();
  }

  setButtonStatus() {
    let beklemeParamSecilmisMi: boolean = this.util.isNotEmpty(this.sonIslem.bekleKaynak) || this.util.isNotEmpty(this.sonIslem.beklemeNeden);
    if (this.util.isEmpty(this.sonIslem.basTar)) {
      this.buttonStatus = Durum.BASLA;
    } else if (beklemeParamSecilmisMi) {
      this.buttonStatus = Durum.BEKLE;
    } else if (this.util.isEmpty(this.sonIslem.bitTar)) {
      this.buttonStatus = Durum.BITIR;
    } else {
      this.buttonStatus = Durum.OK;
    }

    if (this.util.isNotEmpty(this.sonIslem)) {
      if (this.util.isNotEmpty(this.sonIslem.basTar)) {
        this.hizmet.islemTarihi = this.sonIslem.basTar;
      }

      if (this.util.isNotEmpty(this.sonIslem.bitTar) && (this.sonIslem.durum == Durum.BITIR || this.sonIslem.durum == Durum.OK)) {
        this.hizmet.islemBitTarihi = this.sonIslem.bitTar;
      }
    }

  }

  async updateTarihceList() {

    if (this.checkIslemKayitEdilebilme()) {
      /* this.hizmet.islemList.forEach(item => {
       if (item.islSira == this.sonIslem.islSira) {
       item = this.sonIslem;
       }
       });*/
      this.hizmet.islemList = this.islemList;
      //this.logger.table(this.hizmet.islemList);
      await this.hizmetService.saveHizmet();
      this.loadTarihce();
    }
  }

  checkIslemKayitEdilebilme(): boolean {
    let saveable = false;

    let islemBaslatKosullari: boolean = this.sonIslem.durum == Durum.BASLA && this.util.isNotEmpty(this.sonIslem.basTar);

    let islemBekletmeKosullari: boolean = this.sonIslem.durum == Durum.BEKLE && this.util.isNotEmpty(this.sonIslem.bitTar)
      && this.util.isNotEmpty(this.sonIslem.bekleKaynak) && this.util.isNotEmpty(this.sonIslem.beklemeNeden);

    let islemBitirmeKosullari: boolean = this.sonIslem.durum == Durum.BITIR && this.util.isNotEmpty(this.sonIslem.bitTar);

    if (islemBaslatKosullari || islemBekletmeKosullari || islemBitirmeKosullari) {
      this.logger.log("Işlem Kayıt Ediliyor. Yeni DURUM : " + this.sonIslem.durum);
      saveable = true;
    }
    return saveable;
  }

  formatIslemListDates() {
    if (this.util.isNotEmpty(this.hizmet.islemList)) {
      this.hizmet.islemList.forEach(item => {
        if (this.util.isNotEmpty(item.basTar)) {
          //item.basTar = this.util.dateFormatRegex(new Date(item.basTar), this.DATE_FORMAT);

        }

        if (this.util.isNotEmpty(item.bitTar)) {
          //item.bitTar = this.util.dateFormatRegex(new Date(item.bitTar), this.DATE_FORMAT);
        }
      })
    }
  }

  isHizmetDisabled(): boolean {
    return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
  }
}

