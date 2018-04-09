import { Constants } from "./Constants";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class UrunIscilik {
  mamKod: string = null;
  iscKod: string = null;
  iscAdi: string = null;
  durum: string = null;
  fiyat: string = null;
  gdFiyat: string = null;
  iscMikFlag: string = null;
  maxIscMiktar: string = null;

  fillUrunIscilik(res: any): Promise<any> {
    let constant = new Constants();
    let parsedList = [];
    let urunIscilikList = res.message[0].liste
    let urunIscilikVersiyon = res.message[0].versiyon;
    localStorage.setItem(constant.DATA_TYPE.URUN_ISCILIK, urunIscilikList.length);
    localStorage.setItem(constant.VERSIYON.SERVER.URUN_ISCILIK, urunIscilikVersiyon);
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
