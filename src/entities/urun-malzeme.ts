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


    fillUrunMalzeme(res) {
        let parsedList = [];
        let urunMalzemeList = res.message[0].liste;
        urunMalzemeList.array.forEach(item => {
            var newItem: UrunMalzeme = new UrunMalzeme();
            newItem.mamKod = item.mamKod;
            newItem.durum = item.mamKod;
            newItem.mlzAdi = item.mlzAdi;
            newItem.mlzKod = item.mlzKod;
            parsedList.push(newItem);
        });
        return new Promise(resolve => resolve(parsedList));
    }

}