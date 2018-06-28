/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import {Component} from "@angular/core";
import {Hizmet} from "../../../entities/hizmet/hizmet";
import {HizmetService} from "../../../providers/hizmet-service/hizmet-service";
import {DetayKayit} from "../../../entities/hizmet/DetayKayit";
import {UtilProvider} from "../../../providers/util/util";
import {LoggerProvider} from "../../../providers/logger/logger";
import {UrunAnaGrup} from "../../../entities/urunAnaGrup";
import {UrunAnaGrupDao} from "../../../providers/urun-ana-grup-dao/urun-ana-grup-dao";
import {Constants} from "../../../entities/Constants";
import {ModalController, AlertController, NavController} from "ionic-angular";
import {HizmetDetayComponent} from "../../hizmet-detay/hizmet-detay";
import {PrinterService} from "../../../providers/printer-service/printer-service";
import {HizmetProvider} from "../../../providers/hizmet/hizmet";
import {ProcessResults} from "../../../entities/ProcessResults";
import {CagrilarPage} from "../../../pages/cagrilar/cagrilar";

enum DURUM {
  ACIK = 'ACIK',
  KAPALI = 'KAPALI',
  IPTAL = 'IPTAL'
}

enum ISTEK {
  EVET = 'E',
  HAYIR = 'H'
}

@Component({
  selector: 'detay-bilgileri',
  templateUrl: 'detay-bilgileri.html'
})
export class DetayBilgileriComponent {
  showDetails: number = 1;
  text: string;
  hizmet: Hizmet = new Hizmet();
  detayList: DetayKayit[];
  cozumKoduList: UrunAnaGrup[] = [];
  iletisimIstek: boolean;
  verilerSunucuyaKayitEdildiMi: boolean = false;

  constructor(private hizmetService: HizmetService,
              private urunAnaGrupDao: UrunAnaGrupDao,
              private modalCtrl: ModalController,
              private util: UtilProvider,
              private logger: LoggerProvider,
              private alertCtrl: AlertController,
              private nav: NavController,
              private hizmetProvider: HizmetProvider,
              private printService: PrinterService) {
    this.hizmet = this.hizmetService.getHizmet();
    this.loadDetayList();
    this.loadCozumKoduList();
    this.loadletisimIstek();
  }

  getHizmet() {
    this.hizmet = this.hizmetService.getHizmet();
  }

  toggleDetails() {
    this.showDetails = -1 * this.showDetails;
  }

  loadDetayList() {
    if (this.util.isNotEmpty(this.hizmet.detayDtoList)) {
      this.detayList = this.hizmet.detayDtoList;
    }
  }

  loadCozumKoduList() {
    let filter = new UrunAnaGrup(Constants.URUN_ANA_GRUP_TYPE.COZUM_LISTE);
    this.urunAnaGrupDao.getList(filter, Constants.SEARCH_TYPE.EXACT).then(res => {
      this.logger.dir(res);
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.cozumKoduList.push(res.rows.item(i))
        }
      }
    })
  }

  hizmetDetayaGit() {
    if (this.util.isNotEmpty(this.hizmet.mamKod)) {
      let detayModal = this.modalCtrl.create(HizmetDetayComponent, {
        data: {
          detay: ""
        }
      });
      detayModal.onDidDismiss(res => {
        this.logger.dir(res);
        this.updateHizmet();
      });
      detayModal.present();
    } else {
      this.util.message('Ürün bilgisi seçilmeden detay girilemez.');
    }
  }

  update(item: any) {
    let detayModal = this.modalCtrl.create(HizmetDetayComponent, {
      data: {
        hizmetDetay: item
      }
    });
    detayModal.onDidDismiss(res => {
      this.logger.dir(res);
      this.updateHizmet();
    });
    detayModal.present();

  }

  delete(item: any) {
    let index = this.detayList.indexOf(item);

    if (index > -1) {
      this.detayList.splice(index, 1);
    }
    this.updateHizmet();
  }

  yazdir() {
    this.printService.showPrinterList(this.hizmet);
  }

  async kapat(durum: string) {
    let result = this.kapatmaKontrol();
    if (result.isErrorMessagesNull()) {
      let kapatmaHizmet = this.hizmet;

      if (!this.verilerSunucuyaKayitEdildiMi) {
        kapatmaHizmet = this.sunucuyaKayitIcinHazirla(kapatmaHizmet);
      }
      kapatmaHizmet.durum = durum;
      this.util.loaderStart();
      let res = await this.hizmetProvider.updateCagri(kapatmaHizmet, "HAYIR");
      this.util.loaderEnd();
      this.logger.dir(res);
      if (res.responseCode == "FAIL") {
        this.util.error(res.description);
        this.hizmet.durum = DURUM.ACIK;
      } else {
        this.verilerSunucuyaKayitEdildiMi = true;
        if (kapatmaHizmet.durum != DURUM.KAPALI)
          this.kapat(DURUM.KAPALI);
      }
      if (this.util.isNotEmpty(res.responseCode) && res.responseCode == "SUCCESS" && this.util.isNotEmpty(res.description) && res.description == "CLOSED") {
        this.hizmet.durum = DURUM.KAPALI;
        this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
        this.util.message("Çağrı Kayıt Edildi.")
      }
    }
    else {
      this.util.pushAllMessages(result);
    }
  }

  async siparisOlustur() {
    this.util.loaderStart();
    let res = await this.hizmetProvider.updateCagri(this.hizmet, "EVET");
    this.logger.dir(res);
    this.util.loaderEnd();
  }

  async updateHizmet() {
    this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
    //this.hizmet = await this.hizmetService.getHizmetBySeqNo(this.hizmet.seqNo);
    this.loadDetayList();
  }

  kapatmaKontrol(): ProcessResults {
    this.logger.dir(this.hizmet);
    let result = new ProcessResults();
    if (this.util.isEmpty(this.hizmet.sattar)) {
      result.addErrorMessage("Fatura tarihi boş bırakılamaz.");
    }

    if (this.util.isEmpty(this.hizmet.detayDtoList) || !(this.hizmet.detayDtoList.length > 0)) {
      result.addErrorMessage("Parça/Işçilik/Yol Seçilmelidir.");
    }

    if (this.util.isEmpty(this.hizmet.aciklama)) {
      result.addErrorMessage("Açıklama alanı boş bırakılamaz.");
    }

    if (this.util.isEmpty(this.hizmet.kapatmaKodu)) {
      result.addErrorMessage("Kapatma şekli boş bırakılamaz.");
    }

    if (this.util.isEmpty(this.hizmet.odemeTipi)) {
      result.addErrorMessage("Ödeme tipi boş bırakılamaz.");
    }

    if (this.util.isEmpty(this.hizmet.cozumKodu)) {
      result.addErrorMessage("Çözüm Kodu boş bırakılamaz.");
    }

    if (this.util.isEmpty(this.hizmet.islemBitTarihi)) {
      result.addErrorMessage("Işlem bitiş tarihi boş bırakılamaz.");
    }

    return result;
  }

  iletisimIstekChange() {
    this.hizmet.iletisimIstek = this.iletisimIstek ? ISTEK.EVET : ISTEK.HAYIR;
  }

  loadletisimIstek() {
    let istek = this.util.getSystemParam("ILET_IST_DFALT");
    this.logger.warn("Iletişim Istek: " + this.hizmet.iletisimIstek + " Default : " + istek);
    if (this.util.isEmpty(this.hizmet.iletisimIstek)) {
      this.iletisimIstek = istek == 'E';
      this.hizmet.iletisimIstek = this.iletisimIstek ? ISTEK.EVET : ISTEK.HAYIR;
    } else {
      this.iletisimIstek = this.hizmet.iletisimIstek == ISTEK.EVET;
    }
  }

  sunucuyaKayitIcinHazirla(hizmet: Hizmet) {
    let DATE_FORMAT: string = "dd.MM.yyyy hh:mm:ss";

    if (this.util.isNotEmpty(hizmet.islemList)) {
      hizmet.islemList.forEach(islem => {

        if (this.util.isNotEmpty(islem.basTar)) {
          islem.basTar = this.util.dateFormatRegex(islem.basTar, DATE_FORMAT)
        }

        if (this.util.isNotEmpty(islem.bitTar)) {
          islem.bitTar = this.util.dateFormatRegex(islem.bitTar, DATE_FORMAT)
        }

      })
    }
    hizmet.randevuTarihi = this.util.dateFormatRegex(hizmet.randevuTarihi, DATE_FORMAT);
    hizmet.islemTarihi = this.util.dateFormatRegex(hizmet.islemTarihi, DATE_FORMAT);
    hizmet.islemBitTarihi = this.util.dateFormatRegex(hizmet.islemBitTarihi, DATE_FORMAT);

    return hizmet;
  }

  hizmetSilKontrol() {

    let alert = this.alertCtrl.create({
      title: 'Silmek Istediğinizden Emin misiniz?',
      message: 'Yaptığınız değişiklikleri kaybedeceksiniz.',
      buttons: [
        {
          text: 'Sil',
          handler: () => {
            this.logger.warn("Silme Işlemi Onaylandı.");
            this.hizmetiSil();
          }
        },
        {
          text: 'Iptal',
          handler: () => {
            this.logger.warn("Silme Işlemi Iptal Edildi");
          }
        }
      ]
    });

    alert.present();

  }

  async hizmetiSil() {
    this.util.loaderStart();
    await this.hizmetService.deleteHizmet(this.hizmet.seqNo);
    this.util.loaderEnd();
    this.navigate('CagrilarPage', "Çağrı Silindi");
  }


  hizmetIptalKontrol() {
    let alert = this.alertCtrl.create({
      title: 'Iptal etmek istediğinize emin misiniz?',
      message: 'Bu işlemi geri alamazsınız.',
      buttons: [
        {
          text: 'EVET',
          handler: () => {
            this.logger.warn("Iptal Işlemi Onaylandı.");
            this.hizmetIptal();
          }
        },
        {
          text: 'Iptal',
          handler: () => {
            this.logger.warn("Hizmet Iptal Işlemi Iptal Edildi");
          }
        }
      ]
    });

    alert.present();
  }

  async hizmetIptal() {
    this.util.loaderStart();
    let iptalHizmet = this.hizmetProvider.fillHizmet(this.hizmet);
    iptalHizmet.durum = DURUM.IPTAL;
    iptalHizmet = this.sunucuyaKayitIcinHazirla(iptalHizmet);
    let res = await this.hizmetProvider.updateCagri(iptalHizmet, "HAYIR");
    this.logger.dir(res);

    if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode) && res.responseCode == "SUCCESS") {
      this.hizmet.durum = DURUM.IPTAL;
      await this.hizmetService.saveAndFetchHizmet(this.hizmet);
      this.util.loaderEnd();
      this.navigate('CagrilarPage', "Çağrı iptal edildi.");

    } else if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode)) {
      this.hizmet.durum = DURUM.ACIK;
      this.util.error(res.description);
      this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
      this.util.loaderEnd();

    } else {
      this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
      this.util.error("Iptal etme işlemi sırasında hata oluştu.");
      this.util.loaderEnd();

    }

  }

  navigate(path: string, message: string) {
    this.logger.warn("Navigating: " + path);
    setTimeout(() => this.nav.push(path), 1000);

    if (this.util.isNotEmpty(message))
      this.util.info(message);
  }


}
