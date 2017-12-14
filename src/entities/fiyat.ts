/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


export class Fiyat {
    mamKod: string;
    iscMlz: string;
    iscMlzKod: string;
    fiyat: number;
    gdFiyat: number;
    versiyon: string;

    fillFiyat(obj) {
        let item = new Fiyat();
        item.mamKod = obj.mamKod;
        item.iscMlz = obj.iscMlz;
        item.iscMlzKod = obj.iscMlzKod;
        item.fiyat = obj.fiyat;
        item.gdFiyat = obj.gdfiyat;
        item.versiyon = obj.versiyon;
    }
}

/**
 * "mamKod": "MLZ",
"iscMlz": "MLZ",
"iscMlzKod": "8705700067",
"fiyat": 109.83,
"gdfiyat": 109.83,
"versiyon": "-1"
 */
