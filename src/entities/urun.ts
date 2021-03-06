import { Constants } from "./Constants";
import { EntityUtil } from "./EntityUtil";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

export class Urun extends EntityUtil {
  mamAnagrp: string = "";
  mamKod: string = "";
  mamAdi: string = "";
  seriMetod: string = "";
  surec: string = "";
  durum: string = "";

  fillUrun(res: any): Promise<any> {
    let parsedList = [];
    let urunList = res.message[0].liste;
    let urunVersiyon = res.message[0].versiyon;


    /**
     *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
     */
    localStorage.setItem(Constants.VERSIYON.SERVER.URUN, urunVersiyon);
    localStorage.setItem(Constants.GELEN_VERI.URUN, urunList.length);

    this.indirilenVeriyiHesapla(Constants.DATA_TYPE.URUN, urunList.length);


    urunList.forEach(function (item) {
      let urun: Urun = new Urun();
      urun.mamAnagrp = item.mamAnagrp;
      urun.mamKod = item.urunKodu;
      urun.mamAdi = item.urunAdi;
      urun.seriMetod = item.seriMetod;
      urun.durum = item.durum;
      parsedList.push(urun);
    });

    return new Promise(resolve => resolve(parsedList));
  }
}
