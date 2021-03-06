import {Constants} from "./Constants";
import {EntityUtil} from "./EntityUtil";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class UrunIscilik extends EntityUtil {
  mamKod: string = '';
  iscKod: string = '';
  iscAdi: string = '';
  durum: string = '';
  fiyat: string = '';
  gdFiyat: string = '';
  iscMikFlag: string = '';
  maxIscMiktar: string = '';

  fillUrunIscilik(res: any): Promise<any> {
    let parsedList = [];
    let urunIscilikList = res.message[0].liste;
    let urunIscilikVersiyon = res.message[0].versiyon;

    localStorage.setItem(Constants.GELEN_VERI.URUN_ISCILIK, urunIscilikList.length);
    localStorage.setItem(Constants.VERSIYON.SERVER.URUN_ISCILIK, urunIscilikVersiyon);

    this.indirilenVeriyiHesapla(Constants.DATA_TYPE.URUN_ISCILIK, urunIscilikList.length);

    urunIscilikList.forEach(function (item) {
      let urunIscilik = new UrunIscilik();
      urunIscilik.mamKod = item.mamKod;
      urunIscilik.iscAdi = item.iscAdi;
      urunIscilik.iscKod = item.iscKod;
      urunIscilik.durum = item.durum;
      urunIscilik.iscMikFlag = item.iscMikFlag;
      urunIscilik.maxIscMiktar = item.maxIscMiktar;
      parsedList.push(urunIscilik);
    });
    return new Promise(resolve => resolve(parsedList));
  }
}
