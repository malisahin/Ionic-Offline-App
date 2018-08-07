import { Constants } from "./Constants";
import { BaseDao } from "../providers/base-dao/base-dao";
import { BaseEntity } from "./BaseEntity";


export class IndirilenVeri {
    tipi: string;
    miktari: number;
}

export class EntityUtil extends BaseEntity {


    indirilenVeriyiHesapla(tip: string, miktar: number) {

        let saklananVeriString = localStorage.getItem(Constants.INDIRILEN_VERI);
        let saklananVeri: IndirilenVeri;

        if (this.isNotEmpty(saklananVeriString)) {
            saklananVeri = JSON.parse(saklananVeriString);
        }
        else {
            saklananVeri = new IndirilenVeri();
            saklananVeri.miktari = 0;
        }

        saklananVeri.miktari += miktar;
        saklananVeri.tipi = tip;

        localStorage.setItem(Constants.INDIRILEN_VERI, JSON.stringify(saklananVeri));
    }

    indirilenVeriyiSifirla() {
        localStorage.setItem(Constants.INDIRILEN_VERI, "");
    }

    getIndirilenVeri(): IndirilenVeri {
        let veri = localStorage.getItem(Constants.INDIRILEN_VERI);
        if (this.isNotEmpty(veri)) {
            return JSON.parse(veri);
        } else {
            return null;
        }
    }
}