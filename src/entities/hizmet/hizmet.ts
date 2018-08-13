/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {IslemList} from "./islemList";
import {Anket} from "./Ankets/Anket";
import {DetayKayit} from "./DetayKayit";
import {UtilProvider} from "../../providers/util/util";


export class Hizmet {
  constructor() {
  }

  /**
   * hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
   hizmet.durum, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo
   */

  aciklama: string = "";
  adi: string = "";
  anket: Anket;
  aparman: string;
  apartmanNo: string;
  basvuruNedenAdi: string = "";
  basvuruNedeni: string = "";
  bayiKod: string = "";
  blok: string = "";
  cadde: string = "";
  cagriTarihi: number;
  cmNo: string = "";
  cmTarihi: string = "";
  cozumKodu: string = "";
  daireNo: string = "";
  detayDtoList: DetayKayit[];
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
  islemBitTarihi: number;
  islemList: IslemList[];
  islemTarihi: number;
  kapatmaKodu: string = "";
  mahalle: string = "";
  mahalleKodu: string = "";
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
  randevuTarihi: number;
  sattar: Date;
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
  crmNo: string = "";
  seriMetod: string;


  /**
   *
   * Sunucuya gitmeyecek alanlar
   */
  adres = "";
  ilceAdi = "";
  ilIlce = "";

}
