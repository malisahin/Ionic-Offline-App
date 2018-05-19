/**
 * @author malisahin
 * @since 17.04.2018
 */

import {Component} from '@angular/core';
import {HizmetService} from '../../../../providers/hizmet-service/hizmet-service';
import {Hizmet} from '../../../../entities/hizmet/hizmet';
import {UtilProvider} from "../../../../providers/util/util";
import {IslemList} from "../../../../entities/hizmet/islemList";


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
  tarihceList: IslemList[];
  sonIslem: IslemList;

  constructor(private hizmetService: HizmetService,
              private  util: UtilProvider) {
    console.log('Hello IslemTarihComponent Component');
    this.hizmet = this.hizmetService.getHizmet();
    this.tarihceList = this.hizmet.islemList[0];
    this.sonIslem = new IslemList();
    this.loadTarihce();
    this.checkStatus();

  }

  islemBaslat() {
    this.sonIslem.basTar = this.util.dateFormatRegex(new Date(), "dd/MM/yyyy hh:mm");
    this.hizmet.islemTarihi = this.sonIslem.basTar;
    this.checkStatus();
  }

  islemBeklet() {
    if (this.util.isEmpty(this.sonIslem.bekleKaynak)) {
      this.util.message("Bekleme kaynağı boş olamaz");
    } else if (this.util.isEmpty(this.sonIslem.beklemeNeden)) {
      this.util.message("Bekleme Nedeni boş olamaz.");
    } else {
      this.sonIslem.bitTar = this.util.dateFormatRegex(this.util.addMinutes(new Date, 1), "dd/MM/yyyy hh:mm");
      this.sonIslem.durum = 'BEKLE';
    }
    this.checkStatus();
  }

  islemBitir() {
    this.sonIslem.bitTar = this.util.dateFormatRegex(this.util.addMinutes(new Date, 1), "dd/MM/yyyy hh:mm");
    this.sonIslem.durum = 'BITIR';
    this.hizmet.islemBitTarihi = this.sonIslem.bitTar;
    this.checkStatus();
  }

  loadTarihce() {
    if (this.util.isNotEmpty(this.hizmet.islemList) && this.util.isNotEmpty(this.hizmet.islemList[0] && this.hizmet.islemList[0].length > 0)) {
      let sonIslemSira = 0;
      this.tarihceList.forEach(res => {
        if (Number(res.islSira) > sonIslemSira) {
          this.sonIslem = res;
          sonIslemSira = this.sonIslem.islSira;
        }
      })
    } else {
      this.hizmet.islemList.push([]);
      this.hizmet.islemList[0].push(new IslemList);
    }
  }

  checkStatus() {
    if (this.util.isNotEmpty(this.sonIslem.basTar)) {
      if (this.util.isNotEmpty(this.sonIslem.bekleKaynak) || this.util.isNotEmpty(this.sonIslem.beklemeNeden)) {
        this.sonIslem.durum = Durum.BEKLE;
      } else {
        this.sonIslem.durum = Durum.BITIR;
      }
    } else {
      this.sonIslem.durum = Durum.BASLA;
    }
    this.updateTarihceList();
  }

  async updateTarihceList() {
    if (this.util.isEmpty(this.sonIslem.islSira)) {
      this.sonIslem.islSira = 1;
      this.tarihceList.push(this.sonIslem);
    } else {
      this.tarihceList.forEach(item => {
        if (item.islSira == this.sonIslem.islSira) {
          item = this.sonIslem;
        }
      });
    }
    this.hizmet.islemList[0] = this.tarihceList;
    await this.hizmetService.saveHizmet();
  }
}

