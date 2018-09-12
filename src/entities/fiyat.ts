import { Constants } from "./Constants";
import { EntityUtil } from "./EntityUtil";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class Fiyat extends EntityUtil {
  mamKod: string = null;
  iscMlz: string = null;
  iscMlzKod: string = null;
  fiyat: number = null;
  gdFiyat: number = null;
  versiyon: string = null;


  fillFiyat(res, tip): Promise<any> {
    let parsedList = [];
    let fiyatList = res.message[0].liste;
    let versiyon = res.message[0].versiyon;

    fiyatList.forEach(item => {
      let fiyat = new Fiyat();
      fiyat.mamKod = item.mamKod;
      fiyat.iscMlz = item.iscMlz;
      tip = item.iscMlz == 'MLZ' ? 'MLZ' : 'ISC';
      fiyat.iscMlzKod = item.iscMlzKod;
      fiyat.fiyat = item.fiyat;
      fiyat.gdFiyat = item.gdfiyat;
      fiyat.versiyon = item.versiyon;
      parsedList.push(fiyat);
    });

    if (tip == "MLZ" || tip == "malzemeFiyatListesi") {
      localStorage.setItem(Constants.GELEN_VERI.MALZEME_FIYAT, fiyatList.length);
      localStorage.setItem(Constants.VERSIYON.SERVER.MALZEME_FIYAT, versiyon);

      this.indirilenVeriyiHesapla(Constants.DATA_TYPE.MALZEME_FIYAT, fiyatList.length);

    } else if (tip == 'ISC' || tip == "iscilikFiyatListesi") {
      localStorage.setItem(Constants.GELEN_VERI.ISCILIK_FIYAT, fiyatList.length);
      localStorage.setItem(Constants.VERSIYON.SERVER.ISCILIK_FIYAT, versiyon);

      this.indirilenVeriyiHesapla(Constants.DATA_TYPE.ISCILIK_FIYAT, fiyatList.length);
    }

    return new Promise(res => res(parsedList));
  }
}
