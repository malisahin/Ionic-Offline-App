/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { CagriDetay } from "./cagri-detay";
import { IslemList } from "./islemList";
import { Anket } from "./anket";



export class Cagri {
    constructor() { }

    aciklama: string = "";
    adi: string = "";
    anket: Anket[];
    apartman: string;
    basvuruNedenAdi: string = "";
    basvuruNedeni: string = "";
    bayiKod: string = "";
    blok: string = "";
    cadde: string = "";
    cagriTarihi: string = "";
    cmNo: string = "";
    cmTarihi: string = "";
    cozumKodu: string = "";
    daireNo: string = "";
    detayList: CagriDetay[];
    durum: string = "";
    eposta: string = "";
    evTel: string = "";
    firmaUnvani: string = "";
    garanti: string = "";
    gsmNo: string = "";
    hizmetTipi: string = "";
    hizmetTipiAdi: string = "";
    ikKod: string = "";
    ilceKod: string = "";
    iletisimIstek: string = "";
    isTel: string = "";
    islemBitTarihi: string = "";
    islemList: IslemList[];
    islemTarihi: string = "";
    kapatmaKodu: string = "";
    mahalle: string = "";
    mamAdi: string = "";
    mamAnaGrp: string = "";
    mamAnaGrpAdi: string = "";
    mamKod: string = "";
    mamSeriNo: string = "";
    mamSeriNo2: string = "";
    merkezNotu: string = "";
    mesguliyet: string = "";
    musId: string = "";
    musKod: string = "";
    musTip: string = "";
    nobet: string = "";
    odemeTipi: string = "";
    randevuTarihi: string = "";
    sattar: string = "";
    sehir: string = "";
    sehirKod: string = "";
    semt: string = "";
    seqNo: string = "";
    serAd: string = "";
    serKod: string = "";
    servisNotu: string = "";
    sokak: string = "";
    soyadi: string = "";


    fillCagri(obj) {
        let item = new Cagri();
        item.aciklama = obj.aciklama
        item.adi = obj.adi
        //item.anket: Anket[];
        item.apartman = obj.apartman;
        item.basvuruNedenAdi = obj.basvuruNedenAdi;
        item.basvuruNedeni = obj.basvuruNedeni;
        item.bayiKod = obj.bayiKod;
        item.blok = obj.blok;
        item.cadde = obj.cadde;
        item.cagriTarihi = obj.cagriTarihi;
        item.cmNo = obj.cmNo;
        item.cmTarihi = obj.cmTarihi;
        item.cozumKodu = obj.cozumKodu;
        item.daireNo = obj.daireNo
        //item.detayList: CagriDetay[];
        item.durum = obj.durum;
        item.eposta = obj.eposta;
        item.evTel = obj.evTel;
        item.firmaUnvani = obj.firmaUnvanı;
        item.garanti = obj.garanti;
        item.gsmNo = obj.gsmNo;
        item.hizmetTipi = obj.hizmetTipi;
        item.hizmetTipiAdi = obj.hizmetTipiAdi;
        item.ikKod = obj.ikKod;
        item.ilceKod = obj.ilceKod;
        item.iletisimIstek = obj.iletisimIstek;
        item.isTel = obj.isTel;
        item.islemBitTarihi = obj.islemBitTarihi;
        //item.islemList: IslemList[];
        item.islemTarihi = obj.islemTarihi;
        item.kapatmaKodu = obj.kapatmaKodu;
        item.mahalle = obj.mahalle;
        item.mamAdi = obj.mamAdi;
        item.mamAnaGrp = obj.mamAnaGrp;
        item.mamAnaGrpAdi = obj.mamAnaGrpAdi;
        item.mamKod = obj.mamKod;
        item.mamSeriNo = obj.mamSeriNo;
        item.mamSeriNo2 = obj.mamSeriNo2;
        item.merkezNotu = obj.merkezNotu;
        item.mesguliyet = obj.mesguliyet;
        item.musId = obj.musId;
        item.musKod = obj.musKod;
        item.musTip = obj.musTip;
        item.nobet = obj.nobet;
        item.odemeTipi = obj.odemeTipi;
        item.randevuTarihi = obj.randevuTarihi;
        item.sattar = obj.sattar;
        item.sehir = obj.sehir;
        item.sehirKod = obj.sehirKod;
        item.semt = obj.semt;
        item.seqNo = obj.seqNo;
        item.serAd = obj.serAd;
        item.serKod = obj.serKod;
        item.servisNotu = obj.servisNotu;
        item.sokak = obj.sokak;
        item.soyadi = obj.soyadi;
        return item;
    }
}
/**
 * 
 *   var cagri = '<a href="#" onclick="hizmetYonlendir( \'' + btncagri + '\', ' + item.seqNo + ')">' +
                '<h3>' + item.adi + ' ' + item.soyadi + item.firmaUnvani + '( ' + item.seqNo + ') </h3>' +
                '<p><strong>' + "" + item.mamAnaGrpAdi + "  |  " + item.hizmetTipiAdi + "  |  " + item.basvuruNedenAdi + '</strong></p>' +
                '<p>' + "" + item.gsmNo + " / " + item.evTel + " / " + item.isTel + '</p>' +
                '<p>' + "" + item.toString() + '</p>' +
                '<p class="ui-li-aside"><strong>(' + item.randevuTarihi.substring(0, 16) + ')</strong></p></a>';
 */

/**
 * 
 * seqNo
 * adi soyadi
 *  mamAnagrpAdi
 * hizmetTipiAdi
 * basvuruNedenAdi
 * gsmNo
 * evTel
 * isTel
 * randevuTarihi
 * durum
 * 
 */
/**
 * {
    "responseCode": "SUCCESS",
    "description": ".",
    "recordCount": null,
    "first": null,
    "pageSize": null,
    "message": {
        "HizmetDtoList": [
            {
                "randevuTarihi": "2016-09-23 16:00:00.0",
                "cagriTarihi": "2016-09-23 14:57:11.0",
                "hizmetTipi": "008",
                "hizmetTipiAdi": "Ilk Çalistirma",
                "mamAnaGrp": "UA001",
                "mamAnaGrpAdi": null,
                "basvuruNedeni": "004",
                "basvuruNedenAdi": null,
                "seqNo": "4463722",
                "durum": "ACIK",
                "cmTarihi": null,
                "cmNo": null,
                "musId": "4692956",
                "musKod": "246",
                "adi": "YUSUF GÖKHAN",
                "soyadi": "YAVUZ",
                "firmaUnvani": null,
                "musTip": "B",
                "evTel": null,
                "isTel": null,
                "gsmNo": "5059112099",
                "eposta": "YUSUF.YAVUZ@sistek.com.tr",
                "sehirKod": "34",
                "sehir": "ISTANBUL",
                "ilceKod": "3417",
                "ilce": "ESENLER",
                "semt": null,
                "mahalle": "MENDERES",
                "cadde": null,
                "sokak": "324",
                "aparman": null,
                "apartmanNo": "5",
                "blok": null,
                "daireNo": "4",
                "mamKod": "8006908100",
                "mamAdi": "PROTEUS KOMBI 23.3HM DG",
                "mamSeriNo": "123456789001",
                "mamSeriNo2": null,
                "sattar": "2016-09-01 00:00:00.0",
                "garanti": "VAR",
                "mesguliyet": "YOK",
                "nobet": "YOK",
                "anket": {
                    "anketMst": null,
                    "anketSorular": null,
                    "anketCevaplar": null
                },
                "serKod": "ECA_TEST",
                "serAdi": "ECA TEST",
                "bayiKod": null,
                "ikKod": "5961",
                "kapatmaKodu": null,
                "cozumKodu": null,
                "aciklama": null,
                "servisNotu": null,
                "merkezNotu": null,
                "odemeTipi": null,
                "iletisimIstek": null,
                "detayDtoList": [
                    [
                        {
                            "seqNo": "4463722",
                            "satirNo": "1",
                            "islemKod": "00001",
                            "arizaKod": "00001",
                            "mlzIsc": "MLZ",
                            "mlzIscKod": "AG1",
                            "aciklama": "ARTI GARANTİ (1 YIL) KOMBİ",
                            "miktar": "1.0",
                            "birimFiyat": "152.54",
                            "tutar": "152.54",
                            "garFiyat": "0.0",
                            "garTutar": "0.0",
                            "olcuBrm": "AD",
                            "satirHata": null,
                            "kdvOran": "18.0"
                        },
                        {
                            "seqNo": "4463722",
                            "satirNo": "2",
                            "islemKod": "00001",
                            "arizaKod": "00001",
                            "mlzIsc": "ISC",
                            "mlzIscKod": "090435",
                            "aciklama": "VALF MOTORU DEGISIMI",
                            "miktar": "1.0",
                            "birimFiyat": "14.28",
                            "tutar": "14.28",
                            "garFiyat": "0.0",
                            "garTutar": "0.0",
                            "olcuBrm": "AD",
                            "satirHata": null,
                            "kdvOran": "18.0"
                        }
                    ]
                ],
                "islemList": [
                    [
                        {
                            "islSira": "1",
                            "seqNo": "4463722",
                            "basTar": "2016-11-16 11:56:00.0",
                            "bitTar": "2017-10-24 13:33:00.0",
                            "durum": "BITIR",
                            "bekleKaynak": null,
                            "beklemeNeden": null
                        }
                    ]
                ],
                "islemTarihi": "2016-11-16 11:56:00.0",
                "islemBitTarihi": "2017-10-24 13:33:00.0"
            }
        ],
        "anketler": []
    }
}
 */