/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class UrunIscilik {
  mamKod: string;
  iscKod: string;
  iscAdi: string;
  durum: string;
  fiyat: string;
  gdFiyat: string;
  iscMikFlag: string;
  maxIscMiktar: string;

  fillUrunIscilik(res: any): Promise<any> {
    let parsedList = [];
    let urunIscilikList = JSON.parse(res.data).message[0].liste;
    let urunIscilikVersiyon =  JSON.parse(res.data).message[0].versiyon;
    localStorage.setItem("urun-iscilik-versiyon", urunIscilikVersiyon);
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
    return new Promise(resolve=> resolve(parsedList));
  }
}

/**
 *  [
 {
"versiyon": "1",
"kdvOran": 18,
"liste": [
 {
"mamKod": "",
"durum": "",
"iscKod": "",
"iscAdi": "",
"iscMikFlag": "",
"maxIscMiktar": ""
}
],
*
*/
