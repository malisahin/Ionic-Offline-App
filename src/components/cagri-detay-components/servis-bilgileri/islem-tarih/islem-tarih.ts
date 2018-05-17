/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
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
  text: string;
  beklemeNedeni: string = "";
  beklemeKaynagi: string = "";
  islemStatus: string;
  isenabled: boolean = true;
  tarihceList: IslemList[];
  sonIslem: IslemList;

  constructor(private hizmetService: HizmetService, private  util: UtilProvider) {
    console.log('Hello IslemTarihComponent Component');
    this.text = 'Hello World';
    this.hizmet = this.hizmetService.getHizmet();
    this.sonIslem = new IslemList();
    this.loadTarihce();
    this.checkStatus();

  }

  islemBaslat() {
    this.hizmet.islemTarihi = (new Date()).toString();
  }

  islemBeklet() {

  }

  islemBitir() {

  }

  loadTarihce() {
    if (this.util.isNotEmpty(this.hizmet.islemList) && this.util.isNotEmpty(this.hizmet.islemList[0]))
      this.tarihceList = this.hizmet.islemList[0];
    let sonIslemSira = 0;
    this.tarihceList.forEach(res => {
      if (Number(res.islSira) > sonIslemSira) {
        this.sonIslem = res;
      }
    })
  }

  checkStatus() {
    if (this.util.isNotEmpty(this.sonIslem.basTar)) {
      if (this.util.isNotEmpty(this.sonIslem.bekleKaynak) || this.util.isNotEmpty(this.sonIslem.beklemeNeden)) {
        this.sonIslem.durum = Durum.BEKLE;
      } else if (this.util.isEmpty(this.sonIslem.bitTar)) {
        this.sonIslem.durum = Durum.BITIR;
      } else {
        this.sonIslem.durum = Durum.OK;
      }
    } else {
      this.sonIslem.durum = Durum.BASLA;
    }
  }
}

