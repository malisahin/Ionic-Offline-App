/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { IslemList } from "./islemList";
import { Anket } from "./anket";
import {DetayKayit} from "./DetayKayit";




export class Hizmet {
    constructor() { }

    /**
     * hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
    hizmet.durum, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo
     */

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
    detayList: DetayKayit[][];
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
    islemList: IslemList[][];
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
  data: any;

}
