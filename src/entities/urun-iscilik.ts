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
    maxIscMiktar: string

    fillUrunIscilik(obj) {
        let item = new UrunIscilik();
        item.mamKod = obj.mamKod;
        item.iscAdi = obj.iscAdi;
        item.iscKod = obj.iscKod;
        item.durum = obj.durum;
        item.iscMikFlag = obj.iscMikFlag;
        item.maxIscMiktar = obj.maxIscMiktar;
        return item;
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