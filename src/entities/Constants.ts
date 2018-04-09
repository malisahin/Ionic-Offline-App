/**
 * @author malisahin
 * @date 2018-04-08
*/

export class Constants {
    constructor() {

    }
    public API_PAGE_SIZE = 10000;

    public URUN_ANA_GRUP_TYPE = {
        ANA_GRUP_LISTE: "ANA_GRUP_LISTE",
        BASVURU_LISTE: "BASVURU_LISTE",
        COZUM_LISTE: "COZUM_LISTE"
    };

    public SEARCH_TYPE = { LIKE: "LIKE", EXACT: "EXACT" };

    public DATA_TYPE = { URUN: "URUN", URUN_ANA_GRUP: "URUN_ANA_GRUP" };


    public VERSIYON = {

        CLIENT: {
            URUN: "URUN_CLIENT",
            URUN_ANA_GRUP: "URUN_ANA_GRUP_CLIENT",
            URUN_ISCILIK: "URUN_ISCILIK_CLIENT",
            URUN_MALZEME: "URUN_MALZEME_CLIENT",
            ISLEM_ARIZA_ISCILIK: "ISLEM_ARIZA_ISCILIK_CLIENT",
            MALZEME_FIYAT: "MALZEME_FIYAT_CLIENT",
            ISCILIK_FIYAT: "ISCILIK_FIYAT_CLIENT"

        },
        SERVER: {

            URUN: "URUN_SERVER",
            URUN_ANA_GRUP: "URUN_ANA_GRUP_SERVER",
            URUN_ISCILIK: "URUN_ISCILIK_SERVER",
            URUN_MALZEME: "URUN_MALZEME_SERVER",
            ISLEM_ARIZA_ISCILIK: "ISLEM_ARIZA_ISCILIK_SERVER",
            MALZEME_FIYAT: "MALZEME_FIYAT_SERVER",
            ISCILIK_FIYAT: "ISCILIK_FIYAT_SERVER"
        }

    };
    public COLORS = {
        URUN: "",
        URUN_ANA_GRUP: "",
        URUN_ISCILIK: "",
        URUN_MALZEME: "",
        ISLEM_ARIZA_ISCILIK: "",
        MALZEME_FIYAT: "",
        ISCILIK_FIYAT: "",
        SEHIR: "",
        ILCE: "",
        MAHALLE: ""
    };

    public ICONS = {
        URUN: "",
        URUN_ANA_GRUP: "",
        URUN_ISCILIK: "",
        URUN_MALZEME: "",
        ISLEM_ARIZA_ISCILIK: "",
        MALZEME_FIYAT: "",
        ISCILIK_FIYAT: "",
        SEHIR: "",
        ILCE: "",
        MAHALLE: ""
    }
}


