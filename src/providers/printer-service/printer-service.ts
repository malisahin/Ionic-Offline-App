import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../../entities/user";
import {ModalController} from "ionic-angular";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {UtilProvider} from "../util/util";
import {ZebraPrinterComponent} from "../../components/zebra-printer/zebra-printer";
import {DetayKayit} from "../../entities/hizmet/DetayKayit";
import {Constants} from "../../entities/Constants";
import {Anket} from "../../entities/hizmet/Ankets/Anket";
import {Profil} from "../../entities/profil";

@Injectable()
export class PrinterService {
  hizmet: Hizmet;
  seperator = "..............................................";
  user: User;
  profil: Profil = new Profil();

  constructor(public http: HttpClient,
              private modalCtrl: ModalController,
              private util: UtilProvider) {
    this.hizmet = new Hizmet();
    this.user = new User();
    this.init();
  }

  init() {
  }

  showPrinterList(hizmet: Hizmet) {
    this.hizmet = hizmet;
    let text = this.getPrintText();
    let modal = this.modalCtrl.create(ZebraPrinterComponent,
      {text: text},
      {cssClass: this.util.getSelectedTheme()});
    modal.present();
  }

  getPrintText() {
    if (Profil.getActiveProfil().orgKod == Constants.ORG_KODS.ECA) {
      return this.prepareDataEmar();

    } else if (Profil.getActiveProfil().orgKod == Constants.ORG_KODS.BAY) {
      return this.prepareDataBaymak();

    }
  }

  prepareAnketData(): string {
    let anketPrintText = "";
    let anket: Anket = this.hizmet.anket;
    if (this.util.isNotEmpty(anket)) {

      anket.anketSorular.forEach(soru => {

        anketPrintText += soru.serSoruTnm.soruText + " : ";

        anket.anketCevaplar
          .filter(filter => soru.soruId == filter.soruId)
          .forEach(cevap => {
            anketPrintText += cevap.cevapText;
          });
        anketPrintText += "\n\r";

      });

    }
    return anketPrintText;
  }

  prepareAdres(): string {
    let adres: string[] = [];

    if (this.util.isNotEmpty(this.hizmet.semt))
      adres.push(" Semt: " + this.hizmet.semt);

    if (this.util.isNotEmpty(this.hizmet.mahalle))
      adres.push(" Mahalle: " + this.hizmet.mahalle);

    if (this.util.isNotEmpty(this.hizmet.cadde))
      adres.push(" Cadde: " + this.hizmet.cadde);

    if (this.util.isNotEmpty(this.hizmet.sokak))
      adres.push(" Sokak: " + this.hizmet.sokak);

    if (this.util.isNotEmpty(this.hizmet.aparman))
      adres.push(" Apartman: " + this.hizmet.aparman);

    if (this.util.isNotEmpty(this.hizmet.apartmanNo))
      adres.push(" Apartman No: " + this.hizmet.apartmanNo);

    if (this.util.isNotEmpty(this.hizmet.blok))
      adres.push(" Blok: " + this.hizmet.blok);

    if (this.util.isNotEmpty(this.hizmet.daireNo))
      adres.push(" Daire No: " + this.hizmet.daireNo);

    return adres.join("/");
  }

  prepareDataEmar() {
    let data = "";
    let toplamTutar = 0;
    let kdv = 0;
    data += "! U1 SETLP 5 0 24";
    data += "\n! U1 SETBOLD 2";
    data += "\n      " + this.util.getSystemLabel("MOBIL_PRINT_HEADER1_LABEL") + "";
    data += "\n! U1 SETBOLD 0";

    data += "\n! U1 SETBOLD 2";
    data += "\n\r    " + this.util.getSystemLabel("YETKILI_SERVIS_HIZMET_FISI_LABEL") + "";
    data += "\n! U1 SETBOLD 0";
    data += "\n! U1 SETLP 7 0 24";

    data += "\n! U1 SETBOLD 2";
    data += "\n\r BASVURU BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Hizmet Tipi         : " + this.util.translateTurkishCharacters(this.hizmet.hizmetTipiAdi);
    data += "\n\r  Mamul Ana Grubu     : " + this.util.translateTurkishCharacters(this.hizmet.mamAnaGrpAdi);
    data += "\n\r  Basvuru Nedeni      : " + this.util.translateTurkishCharacters(this.hizmet.basvuruNedenAdi);

    data += "\n! U1 SETBOLD 2";
    data += "\n\r  Hizmet Formu No     : " + this.hizmet.seqNo;
    data += "\n! U1 SETBOLD 0";

    data += "\n\r  Cagri No            : " + this.util.emptyIfNull(this.hizmet.cmNo);
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r SERVIS BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Servis Kodu / Adi   : " + this.hizmet.serKod + "-" + this.util.translateTurkishCharacters(this.user.getServisUnvani());
    data += "\n\r  Teknisyen           : " + this.hizmet.ikKod + "-" + this.util.translateTurkishCharacters(this.user.getIkAd());

    data += "\n\r  Randevu Tarihi      : " + this.util.dateFormatRegex(this.hizmet.randevuTarihi, "dd-MM-yyyy hh:mm");
    data += "\n\r  Islem Bit. Tarihi   : " + this.util.dateFormatRegex(this.hizmet.islemBitTarihi, "dd-MM-yyyy hh:mm");
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r MUSTERI BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  MRK MUSTERI NO      : " + this.hizmet.crmNo;
    data += "\n\r  Musteri Adi Soyadi  : " + this.util.translateTurkishCharacters(this.hizmet.adi) + " " +
      this.util.translateTurkishCharacters(this.hizmet.soyadi) +
      this.util.translateTurkishCharacters(this.hizmet.firmaUnvani);

    data += "\n\r  Musteri Adresi      : " + this.util.translateTurkishCharacters(this.prepareAdres());
    data += "\n\r  Il/Ilce             : " + this.util.translateTurkishCharacters(this.hizmet.sehir) + "/"
      + this.util.translateTurkishCharacters(this.hizmet.ilceAdi);

    data += "\n\r  Musteri Telefonu    : " + this.util.emptyIfNull(this.hizmet.evTel);
    data += "\n\r  Cep Telefonu        : " + this.util.emptyIfNull(this.hizmet.gsmNo);
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r URUN BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Urun Kodu           : " + this.hizmet.mamKod;
    data += "\n\r  Urun Adi            : " + this.util.translateTurkishCharacters(this.hizmet.mamAdi);
    data += "\n\r  Seri                : " + this.hizmet.mamSeriNo;
    if (this.hizmet.seriMetod == "2")
      data += "\n\r  Seri 2              : " + this.hizmet.mamSeriNo2;
    data += "\n\r" + this.seperator;


    data += '\n! U1 SETBOLD 2';
    data += '\n\r TEKNIK DEGERLER';
    data += '\n! U1 SETBOLD 0';
    // Anket Cevapları
    data += '\n\r' + this.util.translateTurkishCharacters(this.prepareAnketData());
    data += '\n\r' + this.seperator;


    data += "\n! U1 SETBOLD 2";
    data += "\n\r GARANTI DURUMU ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Islem                : " + (this.hizmet.garanti == "VAR" ? "Garanti Dahili" : "Garanti Disi");
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r VERILEN HIZMETLER ";
    data += "\n! U1 SETBOLD 0";
    data += "\n! U1 SETBOLD 2";
    data += "\n\r  Adi                    Miktar          " + (this.hizmet.garanti == "VAR" ? "" : "Tutar");
    data += "\n! U1 SETBOLD 0";

    let iscilik = "";
    let parca = "";
    let yol = "";
    let diger = "";

    if (this.util.isNotEmpty(this.hizmet.detayDtoList))
      for (let k = 0; this.hizmet.detayDtoList.length > k; k++) {
        let item: DetayKayit = this.hizmet.detayDtoList[k];
        toplamTutar = toplamTutar + item.tutar;

        kdv = kdv + (item.tutar / 100) * item.kdvOran;

        let detaySatir = "\n\r " + item.mlzIscKod + "-" + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) +
          "   " + item.miktar + "-" + item.olcuBrm + "    " + (this.hizmet.garanti != "VAR" ? item.tutar : "");

        let isIscilik: boolean = item.mlzIsc == Constants.DETAY_TIPI.ISCILIK && item.mlzIscKod != "999977" && item.mlzIscKod != "999988";

        if (isIscilik) {
          iscilik += detaySatir;
        }

        if (item.mlzIsc == Constants.DETAY_TIPI.MALZEME) {
          parca += detaySatir;
        }

        if (
          item.mlzIsc == Constants.DETAY_TIPI.YOL &&
          item.mlzIscKod == "999988"
        ) {
          yol += detaySatir;
        }

        if (
          item.mlzIsc == Constants.DETAY_TIPI.DIGER &&
          item.mlzIscKod == "999977"
        ) {
          diger += detaySatir;
        }
      }

    if (iscilik != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Iscilikler ";
      data += "\n! U1 SETBOLD 0";
      data += iscilik;
    }

    if (parca != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Parcalar ";
      data += "\n! U1 SETBOLD 0";
      data += parca;
    }

    if (yol != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Yol ";
      data += "\n! U1 SETBOLD 0";
      data += yol;
    }

    if (diger != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Diger ";
      data += "\n! U1 SETBOLD 0";
      data += diger;
    }

    data += "\n\r" + this.seperator;

    if (this.hizmet.garanti == "VAR") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Toplam Hizmet Tutari  :   Garanti Dahili Islem ";
      data += "\n! U1 SETBOLD 0";
    } else {
      data += "\n! U1 SETBOLD 2";
      //data += '\n\r Toplam Hizmet Tutari  :   ' + (toplamTutar).toFixed(2);
      data += "\n! U1 SETBOLD 0";
    }
    if (this.hizmet.garanti == "VAR") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r KDV                   :   Garanti Dahili Islem ";
      data += "\n! U1 SETBOLD 0";
    } else {
      data += "\n! U1 SETBOLD 2";
      //data += '\n\r KDV                   :   ' + (kdv).toFixed(2);
      data += "\n! U1 SETBOLD 0";
    }

    if (this.hizmet.garanti == "VAR") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Genel Toplam          :   Garanti Dahili Islem ";
      data += "\n! U1 SETBOLD 0";
    } else {
      data += "\n! U1 SETBOLD 2";
      //  data += '\n\r Genel Toplam          :   ' + (kdv + toplamTutar).toFixed(2);
      data += "\n! U1 SETBOLD 0";
    }

    data += "\n\r" + this.seperator;
    data += "\n! U1 SETBOLD 2";
    data += "\n\r Aciklama ";
    data += "\n! U1 SETBOLD 0";
    data +=
      "\n\r " + this.util.translateTurkishCharacters(this.hizmet.aciklama);
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    // data += '\n\r Iletisim Istek ';
    data += "\n! U1 SETBOLD 0";

    let note =
      "Elginkan Toplulugu Sirketleri tarafindan sesli mesaj, sms, e-posta, vb. tum elektronik iletisim vasitalari kullanilarak " +
      "tarafima bilgilendirme ve tanitim yapilmasini kabul ediyorum.";
    data += "\n! U1 SETBOLD 2";
    data += "\n\r " + note;
    if (this.hizmet.iletisimIstek == "H") data += "\n\r  EVET []  HAYIR[X] ";
    else data += "\n\r  EVET [X]  HAYIR[] ";

    data += "\n! U1 SETBOLD 0";

    data += "\n\r" + this.seperator;
    data += "\n! U1 SETBOLD 2";
    data += "\n\r TEKNISYEN ADI/IMZA           MUSTERI ADI/IMZA ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r " + this.util.translateTurkishCharacters(this.user.getIkAd());

    data += "\n\r\n\r\n! U1 SETBOLD 2";
    data +=
      "\n\r " +
      this.util.translateTurkishCharacters(
        this.util.getSystemLabel("MOBIL_PRINT_FOOTER1_LABEL")
      );
    data += "\n! U1 SETBOLD 0";

    data += "\n\r\n\r\n! U1 SETBOLD 2";
    data +=
      "\n\r " +
      this.util.translateTurkishCharacters(
        this.util.getSystemLabel("MOBIL_PRINT_FOOTER2_LABEL")
      ) +
      "\n\r ";
    data += "\n! U1 SETBOLD 0";

    return data;
  }

  prepareDataBaymak() {
    let data = "";
    let toplamTutar = 0;
    let kdv = 0;
    data += "! U1 SETLP 5 0 24";
    data += "\n! U1 SETBOLD 2";
    data += "\n      " + this.util.getSystemLabel("MOBIL_PRINT_HEADER1_LABEL") + "";
    data += "\n! U1 SETBOLD 0";

    data += "\n! U1 SETBOLD 2";
    data += "\n\r    " + this.util.getSystemLabel("YETKILI_SERVIS_HIZMET_FISI_LABEL") + "";
    data += "\n! U1 SETBOLD 0";
    data += "\n! U1 SETLP 7 0 24";

    data += "\n! U1 SETBOLD 2";
    data += "\n\r BASVURU BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Hizmet Tipi         : " + this.util.translateTurkishCharacters(this.hizmet.hizmetTipiAdi);
    data += "\n\r  Mamul Ana Grubu     : " + this.util.translateTurkishCharacters(this.hizmet.mamAnaGrpAdi);
    data += "\n\r  Basvuru Nedeni      : " + this.util.translateTurkishCharacters(this.hizmet.basvuruNedenAdi);

    data += "\n! U1 SETBOLD 2";
    data += "\n\r  Hizmet Formu No     : " + this.hizmet.seqNo;
    data += "\n! U1 SETBOLD 0";

    data += "\n\r  Cagri No            : " + this.util.emptyIfNull(this.hizmet.cmNo);
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r SERVIS BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Servis Kodu / Adi   : " + this.hizmet.serKod + "-" + this.util.translateTurkishCharacters(this.user.getServisUnvani());
    data += "\n\r  Teknisyen           : " + this.hizmet.ikKod + "-" + this.util.translateTurkishCharacters(this.user.getIkAd());

    data += "\n\r  Randevu Tarihi      : " + this.util.dateFormatRegex(this.hizmet.randevuTarihi, "dd-MM-yyyy hh:mm");
    data += "\n\r  Islem Bit. Tarihi   : " + this.util.dateFormatRegex(this.hizmet.islemBitTarihi, "dd-MM-yyyy hh:mm");
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r MUSTERI BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  MRK MUSTERI NO      : " + this.hizmet.crmNo;
    data += "\n\r  Musteri Adi Soyadi  : " + this.util.translateTurkishCharacters(this.hizmet.adi) + " " +
      this.util.translateTurkishCharacters(this.hizmet.soyadi) +
      this.util.translateTurkishCharacters(this.hizmet.firmaUnvani);

    data += "\n\r  Musteri Adresi      : " + this.util.translateTurkishCharacters(this.prepareAdres());
    data += "\n\r  Il/Ilce             : " + this.util.translateTurkishCharacters(this.hizmet.sehir) + "/"
      + this.util.translateTurkishCharacters(this.hizmet.ilceAdi);

    data += "\n\r  Musteri Telefonu    : " + this.util.emptyIfNull(this.hizmet.evTel);
    data += "\n\r  Cep Telefonu        : " + this.util.emptyIfNull(this.hizmet.gsmNo);
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r URUN BILGILERI ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Urun Kodu           : " + this.hizmet.mamKod;
    data += "\n\r  Urun Adi            : " + this.util.translateTurkishCharacters(this.hizmet.mamAdi);
    data += "\n\r  Seri                : " + this.hizmet.mamSeriNo;
    if (this.hizmet.seriMetod == "2")
      data += "\n\r  Seri 2              : " + this.hizmet.mamSeriNo2;
    data += "\n\r" + this.seperator;


    data += '\n! U1 SETBOLD 2';
    data += '\n\r TEKNIK DEGERLER';
    data += '\n! U1 SETBOLD 0';
    // Anket Cevapları
    data += '\n\r' + this.util.translateTurkishCharacters(this.prepareAnketData());
    data += '\n\r' + this.seperator;


    data += "\n! U1 SETBOLD 2";
    data += "\n\r GARANTI DURUMU ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r  Islem                : " + (this.hizmet.garanti == "VAR" ? "Garanti Dahili" : "Garanti Disi");
    data += "\n\r" + this.seperator;

    data += "\n! U1 SETBOLD 2";
    data += "\n\r VERILEN HIZMETLER ";
    data += "\n! U1 SETBOLD 0";
    data += "\n! U1 SETBOLD 2";
    data += "\n\r  Adi                    Miktar          " + (this.hizmet.garanti == "VAR" ? "" : "Tutar");
    data += "\n! U1 SETBOLD 0";

    let iscilik = "";
    let parca = "";
    let yol = "";
    let diger = "";

    if (this.util.isNotEmpty(this.hizmet.detayDtoList))
      for (let k = 0; this.hizmet.detayDtoList.length > k; k++) {
        let item: DetayKayit = this.hizmet.detayDtoList[k];
        toplamTutar = toplamTutar + item.tutar;

        kdv = kdv + (item.tutar / 100) * item.kdvOran;

        let detaySatir = "\n\r " + item.mlzIscKod + "-" + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) +
          "   " + item.miktar + "-" + item.olcuBrm + "    " + (this.hizmet.garanti != "VAR" ? item.tutar : "");

        let isIscilik: boolean = item.mlzIsc == Constants.DETAY_TIPI.ISCILIK && item.mlzIscKod != "999977" && item.mlzIscKod != "999988";

        if (isIscilik) {
          iscilik += detaySatir;
        }

        if (item.mlzIsc == Constants.DETAY_TIPI.MALZEME) {
          parca += detaySatir;
        }

        if (
          item.mlzIsc == Constants.DETAY_TIPI.YOL &&
          item.mlzIscKod == "999988"
        ) {
          yol += detaySatir;
        }

        if (
          item.mlzIsc == Constants.DETAY_TIPI.DIGER &&
          item.mlzIscKod == "999977"
        ) {
          diger += detaySatir;
        }
      }

    if (iscilik != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Iscilikler ";
      data += "\n! U1 SETBOLD 0";
      data += iscilik;
    }

    if (parca != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Parcalar ";
      data += "\n! U1 SETBOLD 0";
      data += parca;
    }

    if (yol != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Yol ";
      data += "\n! U1 SETBOLD 0";
      data += yol;
    }

    if (diger != "") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Diger ";
      data += "\n! U1 SETBOLD 0";
      data += diger;
    }

    data += "\n\r" + this.seperator;

    if (this.hizmet.garanti == "VAR") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Toplam Hizmet Tutari  :   Garanti Dahili Islem ";
      data += "\n! U1 SETBOLD 0";
    } else {
      data += "\n! U1 SETBOLD 2";
      //data += '\n\r Toplam Hizmet Tutari  :   ' + (toplamTutar).toFixed(2);
      data += "\n! U1 SETBOLD 0";
    }
    if (this.hizmet.garanti == "VAR") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r KDV                   :   Garanti Dahili Islem ";
      data += "\n! U1 SETBOLD 0";
    } else {
      data += "\n! U1 SETBOLD 2";
      //data += '\n\r KDV                   :   ' + (kdv).toFixed(2);
      data += "\n! U1 SETBOLD 0";
    }

    if (this.hizmet.garanti == "VAR") {
      data += "\n! U1 SETBOLD 2";
      data += "\n\r Genel Toplam          :   Garanti Dahili Islem ";
      data += "\n! U1 SETBOLD 0";
    } else {
      data += "\n! U1 SETBOLD 2";
      //  data += '\n\r Genel Toplam          :   ' + (kdv + toplamTutar).toFixed(2);
      data += "\n! U1 SETBOLD 0";
    }

    data += "\n\r" + this.seperator;
    data += "\n! U1 SETBOLD 2";
    data += "\n\r Aciklama ";
    data += "\n! U1 SETBOLD 0";
    data +=
      "\n\r " + this.util.translateTurkishCharacters(this.hizmet.aciklama);

    data += "\n\r" + this.seperator;
    data += "\n! U1 SETBOLD 2";
    data += "\n\r TEKNISYEN ADI/IMZA           MUSTERI ADI/IMZA ";
    data += "\n! U1 SETBOLD 0";
    data += "\n\r " + this.util.translateTurkishCharacters(this.user.getIkAd());

    data += "\n\r\n\r\n! U1 SETBOLD 2";
    data +=
      "\n\r " +
      this.util.translateTurkishCharacters(
        this.util.getSystemLabel("MOBIL_PRINT_FOOTER1_LABEL")
      );
    data += "\n! U1 SETBOLD 0";

    data += "\n\r\n\r\n! U1 SETBOLD 2";
    data +=
      "\n\r " +
      this.util.translateTurkishCharacters(
        this.util.getSystemLabel("MOBIL_PRINT_FOOTER2_LABEL")
      ) +
      "\n\r ";
    data += "\n! U1 SETBOLD 0";

    return data;
  }

}
