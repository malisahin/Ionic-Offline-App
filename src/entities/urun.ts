/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
export class Urun {
    mamAnagrp: string;
    mamKod: string;
    mamAdi: string;
    seriMetod: string;
    surec: string;
    durum: string;

    fillUrun(res: any): Promise<any> {
      let parsedList = [];
       let urunList= JSON.parse(res.data).message[0].liste;
      urunList.forEach(function (item) {
        let urun: Urun = new Urun();
        urun.mamAnagrp = item.mamAnagrp;
        urun.mamKod = item.urunKodu;
        urun.mamAdi = item.urunAdi;
        urun.seriMetod = item.seriMetod;
        urun.durum = item.durum;
        parsedList.push(urun);
      });

      return new Promise(resolve=> resolve(parsedList));
    }
}
/*
{
    "mamAnagrp": "UA005",
    "durum": "AKTIF",
    "seriMetod": "1",
    "surec": "H",
    "urunKodu": "102108457",
    "urunAdi": "TEK GÖVDE LAV. MUSLUGU (DÖNERLI)"
    }
    */
