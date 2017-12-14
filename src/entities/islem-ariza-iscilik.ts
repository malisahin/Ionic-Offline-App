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


    fillIslemArizaIscilik(obj) {
        let item = new IslemArizaIscilik();
        item.mamAnaGrp = obj.mamAnaGrp;
        item.islGrp = obj.islGrp;
        item.islGrpAd = obj.islGrpAd;
        item.arzGrp = obj.arzGrp;
        item.arzGrpAd = obj.arzGrpAd;
        item.iscKod = obj.iscKod;
        item.durum = obj.durum;
        return item;
    }
}


/*

"mamAnaGrp": "UA002",
"islGrp": "00900",
"islGrpAd": "DIGER",
"arzGrp": "00017",
"arzGrpAd": "KAYNAK",
"iscKod": "090364",
"durum": "AKTIF"
*/