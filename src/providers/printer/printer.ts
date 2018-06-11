import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HizmetService} from "../hizmet-service/hizmet-service";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {UtilProvider} from "../util/util";
import {User} from "../../entities/user";
import {DetayKayit} from "../../entities/hizmet/DetayKayit";
import {NavParams, ModalController} from "ionic-angular";
import {PrinterComponent} from "../../components/printer/printer";

@Injectable()
export class PrinterProvider {

  hizmet: Hizmet;
  seperator = "..............................................";
  user: User;

  constructor(public http: HttpClient,
              public navParams: NavParams,
              private hizmetService: HizmetService,
              private modalCtrl: ModalController,
              private util: UtilProvider) {
    this.hizmet = new Hizmet();
    this.user = new User();
    this.init();

  }

  init() {


  }

  showPrinterList() {
    let text = this.getPrintText();
    let modal = this.modalCtrl.create(PrinterComponent, text);
    modal.present();
  }


  getPrintText() {
    if (this.user.getOrgKod() == "ECA") {
      return this.prepareDataEmar();
    }
    else if (this.user.getOrgKod() == "BAY") {
      return this.prepareDataBaymak();
    }
  }


  prepareDataEmar() {
    let data = "";
    let toplamTutar = 0;
    let kdv = 0;
    data += '! U1 SETLP 5 0 24';
    data += '\n! U1 SETBOLD 2';
    data += '\n      ' + this.util.getSystemLabel("MOBIL_PRINT_HEADER1_LABEL") + '';
    data += '\n! U1 SETBOLD 0';
    data += '\n! U1 SETBOLD 2';
    data += '\n\r    ' + this.util.getSystemLabel("YETKILI_SERVIS_HIZMET_FISI_LABEL") + '';
    data += '\n! U1 SETBOLD 0';
    data += '\n! U1 SETLP 7 0 24';
    data += '\n! U1 SETBOLD 2';
    data += '\n\r BASVURU BILGILERI ';
    data += '\n! U1 SETBOLD 0';
    data += '\n\r  Hizmet Tipi         : ' + this.util.translateTurkishCharacters(this.hizmet.hizmetTipiAdi);
    data += '\n\r  Mamul Ana Grubu     : ' + this.util.translateTurkishCharacters(this.hizmet.mamAnaGrpAdi);
    data += '\n\r  Basvuru Nedeni      : ' + this.util.translateTurkishCharacters(this.hizmet.basvuruNedenAdi);
    data += '\n! U1 SETBOLD 2';
    data += '\n\r  Hizmet Formu No     : ' + this.hizmet.seqNo;
    data += '\n! U1 SETBOLD 0';
    data += '\n\r  Cagri No            : ' + this.hizmet.cmNo;
    data += '\n\r' + this.seperator;
    data += '\n! U1 SETBOLD 2';
    data += '\n\r SERVIS BILGILERI ';
    data += '\n! U1 SETBOLD 0';
    data += '\n\r  Servis Kodu / Adi   : ' + this.hizmet.serKod + '-' + this.util.translateTurkishCharacters(this.hizmet.serAd);
    data += '\n\r  Teknisyen           : ' + this.hizmet.ikKod + '-' + this.util.translateTurkishCharacters(this.user.getIkAd());
    data += '\n\r  Randevu Tarihi      : ' + this.hizmet.randevuTarihi;
    data += '\n\r  Islem Bit. Tarihi   : ' + this.hizmet.islemBitTarihi;
    data += '\n\r' + this.seperator;
    data += '\n! U1 SETBOLD 2';
    data += '\n\r MUSTERI BILGILERI ';
    data += '\n! U1 SETBOLD 0';
    data += '\n\r  MRK MUSTERI NO      : ' + this.hizmet.crmNo;
    data += '\n\r  Musteri Adi Soyadi  : ' + this.util.translateTurkishCharacters(this.hizmet.adi) + " " + this.util.translateTurkishCharacters(this.hizmet.soyadi) + this.util.translateTurkishCharacters(this.hizmet.firmaUnvani);
    data += '\n\r  Musteri Adresi      : ' + this.util.translateTurkishCharacters(this.hizmet.toString());
    data += '\n\r  Il/Ilce             : ' + this.util.translateTurkishCharacters(this.hizmet.sehir) + "-" + this.util.translateTurkishCharacters(this.hizmet.ilceKod);
    data += '\n\r  Musteri Telefonu    : ' + this.hizmet.evTel;
    data += '\n\r  Cep Telefonu        : ' + this.hizmet.gsmNo;
    data += '\n\r' + this.seperator;
    data += '\n! U1 SETBOLD 2';
    data += '\n\r URUN BILGILERI ';
    data += '\n! U1 SETBOLD 0';
    data += '\n\r  Urun Kodu           : ' + this.hizmet.mamKod;
    data += '\n\r  Urun Adi            : ' + this.util.translateTurkishCharacters(this.hizmet.mamAdi);
    data += '\n\r  Seri                : ' + this.hizmet.mamSeriNo;
    if (this.hizmet.seriMetod == '2')
      data += '\n\r  Seri 2              : ' + this.hizmet.mamSeriNo2;
    data += '\n\r' + this.seperator;
    data += '\n! U1 SETBOLD 2';
    data += '\n\r GARANTI DURUMU ';
    data += '\n! U1 SETBOLD 0';
    data += '\n\r  Islem                : ' + (this.hizmet.garanti == 'VAR' ? 'Garanti Dahili' : 'Garanti Disi');
    data += '\n\r' + this.seperator;
    data += '\n! U1 SETBOLD 2';
    data += '\n\r VERILEN HIZMETLER ';
    data += '\n! U1 SETBOLD 0';
    data += '\n! U1 SETBOLD 2';
    data += '\n\r  Adi                    Miktar          ' + (this.hizmet.garanti == 'VAR' ? '' : 'Tutar');
    data += '\n! U1 SETBOLD 0';

    let iscilik = "";
    let parca = "";
    let yol = "";
    let diger = "";


    if (this.hizmet.detayList.length > 0) {
      for (k = 0; this.hizmet.detayList.length > k; k++) {
        let item: DetayKayit = this.hizmet.detayList[k];
        toplamTutar = toplamTutar + item.tutar;
        kdv = kdv + (item.tutar / 100 * item.kdvOran);

        if (item.mlzIsc == "ISC" && item.mlzIscKod != "999977" && item.mlzIscKod != "999988") {
          iscilik += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar).toFixed(2) : '')
        } else if (item.mlzIsc == "MLZ") {
          parca += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar).toFixed(2) : '')
        } else if (item.mlzIsc == "KM" && item.mlzIscKod == "999988") {
          yol += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar).toFixed(2) : '')
        } else if (item.mlzIsc == "DGR" && item.mlzIscKod == "999977") {
          diger += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar).toFixed(2) : '')
        }

      }


      if (iscilik != "") {
        data += '\n! U1 SETBOLD 2';
        data += '\n\r Iscilikler ';
        data += '\n! U1 SETBOLD 0';
        data += iscilik
      }

      if (parca != "") {
        data += '\n! U1 SETBOLD 2';
        data += '\n\r Parcalar ';
        data += '\n! U1 SETBOLD 0';
        data += parca
      }

      if (yol != "") {
        data += '\n! U1 SETBOLD 2';
        data += '\n\r Yol ';
        data += '\n! U1 SETBOLD 0';
        data += yol
      }

      if (diger != "") {
        data += '\n! U1 SETBOLD 2';
        data += '\n\r Diger ';
        data += '\n! U1 SETBOLD 0';
        data += diger
      }

    }
    data += '\n\r' + this.seperator;

    if (mst.garanti == 'VAR') {
      data += '\n! U1 SETBOLD 2';
      data += '\n\r Toplam Hizmet Tutari  :   Garanti Dahili Islem ';
      data += '\n! U1 SETBOLD 0'
    } else {
      data += '\n! U1 SETBOLD 2';
      data += '\n\r Toplam Hizmet Tutari  :   ' + (toplamTutar).toFixed(2);
      data += '\n! U1 SETBOLD 0'
    }
    if (mst.garanti == 'VAR') {
      data += '\n! U1 SETBOLD 2';
      data += '\n\r KDV                   :   Garanti Dahili Islem ';
      data += '\n! U1 SETBOLD 0'
    } else {
      data += '\n! U1 SETBOLD 2';
      data += '\n\r KDV                   :   ' + (kdv).toFixed(2);
      data += '\n! U1 SETBOLD 0'
    }

    if (mst.garanti == 'VAR') {
      data += '\n! U1 SETBOLD 2';
      data += '\n\r Genel Toplam          :   Garanti Dahili Islem ';
      data += '\n! U1 SETBOLD 0'
    } else {
      data += '\n! U1 SETBOLD 2';
      data += '\n\r Genel Toplam          :   ' + (kdv + toplamTutar).toFixed(2);
      data += '\n! U1 SETBOLD 0'
    }

    data += '\n\r' + this.seperator;
    data += '\n! U1 SETBOLD 2';
    data += '\n\r Aciklama ';
    data += '\n! U1 SETBOLD 0';
    data += '\n\r ' + this.util.translateTurkishCharacters(mst.aciklama);
    data += '\n\r' + this.seperator;

    data += '\n! U1 SETBOLD 2';
    //data += '\n\r Iletisim Istek ';
    data += '\n! U1 SETBOLD 0';

    let note = "Elginkan Toplulugu Sirketleri tarafindan sesli mesaj, sms, e-posta, vb. tum elektronik iletisim vasitalari kullanilarak " +
      "tarafima bilgilendirme ve tanitim yapilmasini kabul ediyorum.";
    data += '\n! U1 SETBOLD 2';
    data += '\n\r ' + note;
    if (mst.iletisimIstek == 'H')
      data += '\n\r  EVET []  HAYIR[X] ';
    else
      data += '\n\r  EVET [X]  HAYIR[] ';

    data += '\n! U1 SETBOLD 0';


    data += '\n\r' + this.seperator;
    data += '\n! U1 SETBOLD 2';
    data += '\n\r TEKNISYEN ADI/IMZA           MUSTERI ADI/IMZA ';
    data += '\n! U1 SETBOLD 0';
    data += '\n\r ' + this.util.translateTurkishCharacters(this.user.getIkAd());

    data += '\n\r\n\r\n! U1 SETBOLD 2';
    data += '\n\r ' + this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER1_LABEL"));
    data += '\n! U1 SETBOLD 0';

    data += '\n\r\n\r\n! U1 SETBOLD 2';
    data += '\n\r ' + this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER2_LABEL")) + '\n\r ';
    data += '\n!\ U1 SETBOLD 0';

    return data;

  }


  prepareDataBaymak() {
    return "";
  }
}





