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

    fillUrun(obj) {
        let item: Urun = new Urun();
        item.mamAnagrp = obj.mamAnagrp;
        item.mamKod = obj.urunKodu;
        item.mamAdi = obj.urunAdi;
        item.seriMetod = obj.seriMetod;
        item.durum = obj.durum;
        return item;
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