/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


export class Fiyat {
    mamKod: string = null;
    iscMlz: string = null;
    iscMlzKod: string = null;
    fiyat: number = null;
    gdFiyat: number = null;
    versiyon: string = null;

    fillFiyat(res): Promise<any> {
        let parsedList = [];
        let fiyatList = res.message[0].liste;
        fiyatList.forEach(item => {
            let fiyat = new Fiyat();
            fiyat.mamKod = item.mamKod;
            fiyat.iscMlz = item.iscMlz;
            fiyat.iscMlzKod = item.iscMlzKod;
            fiyat.fiyat = item.fiyat;
            fiyat.gdFiyat = item.gdfiyat;
            fiyat.versiyon = item.versiyon;
            parsedList.push(fiyat);
        });
        return new Promise(res => res(parsedList));
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
