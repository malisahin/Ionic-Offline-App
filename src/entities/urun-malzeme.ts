/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


export class UrunMalzeme {
    mamKod: string;
    mlzKod: string;
    mlzAdi: string;
    durum: string;
    kdvOran: string;


    fillUrunMalzeme(item) {
        var newItem: UrunMalzeme = new UrunMalzeme();
        newItem.mamKod = item.mamKod;
        newItem.durum = item.mamKod;
        newItem.mlzAdi = item.mlzAdi;
        newItem.mlzKod = item.mlzKod;
        return newItem;
    }

}

/**
 * "mamKod": "102111079",
"durum": "AKTIF",
"mlzKod": "102136029",
"mlzAdi": "VOLAN",
"kdvOran": 18

 */