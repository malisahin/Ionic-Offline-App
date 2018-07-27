import {Constants} from "./Constants";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class UrunMalzeme {
  mamKod: string = null;
  mlzKod: string = null;
  mlzAdi: string = null;
  durum: string = null;
  kdvOran: string = null;


  fillUrunMalzeme(res): Promise<any> {
    let parsedList = [];
    let urunMalzemeList = res.message[0].liste;
    let urunMalzemeVersiyon = res.message[0].versiyon;


    /**
     *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
     */
    localStorage.setItem(Constants.GELEN_VERI.URUN_MALZEME, urunMalzemeList.length);
    localStorage.setItem(Constants.VERSIYON.SERVER.URUN_MALZEME, urunMalzemeVersiyon);


    urunMalzemeList.forEach(item => {
      let newItem: UrunMalzeme = new UrunMalzeme();
      newItem.mamKod = item.mamKod;
      newItem.durum = item.mamKod;
      newItem.mlzAdi = item.mlzAdi;
      newItem.mlzKod = item.mlzKod;
      parsedList.push(newItem);
    });
    return new Promise((resolve) => {
      resolve(parsedList)
    });
  }

}
