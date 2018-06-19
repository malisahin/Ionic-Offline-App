import {Constants} from "./Constants";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class IslemArizaIscilik {
  mamAnaGrp: string;
  islGrp: string;
  islGrpAd: string;
  arzGrp: string;
  arzGrpAd: string;
  iscKod: string;
  durum: string;


  fillIslemArizaIscilik(data): Promise<any> {
    let parsedList = [];
    let list = data.message[0].liste;
    let versiyon = data.message[0].versiyon;


    /**
     *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
     */
    localStorage.setItem(Constants.VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK, versiyon);
    localStorage.setItem(Constants.GELEN_VERI.GELEN_ISLEM_ARIZA_ISCILIK, list.length);

    list.forEach(obj => {
      let item = new IslemArizaIscilik();
      item.mamAnaGrp = obj.mamAnaGrp;
      item.islGrp = obj.islGrp;
      item.islGrpAd = obj.islGrpAd;
      item.arzGrp = obj.arzGrp;
      item.arzGrpAd = obj.arzGrpAd;
      item.iscKod = obj.iscKod;
      item.durum = obj.durum;
      parsedList.push(item);
    });
    return new Promise(resolve => {
      resolve(parsedList)
    });
  }
}
