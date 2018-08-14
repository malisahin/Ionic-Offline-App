/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import { Component } from "@angular/core";
import { Hizmet } from "../../../entities/hizmet/hizmet";
import { HizmetService } from "../../../providers/hizmet-service/hizmet-service";
import { DetayKayit } from "../../../entities/hizmet/DetayKayit";
import { UtilProvider } from "../../../providers/util/util";
import { LoggerProvider } from "../../../providers/logger/logger";
import { UrunAnaGrup } from "../../../entities/urunAnaGrup";
import { UrunAnaGrupDao } from "../../../providers/urun-ana-grup-dao/urun-ana-grup-dao";
import { Constants } from "../../../entities/Constants";
import { ModalController, AlertController, NavController } from "ionic-angular";
import { HizmetDetayComponent } from "../../hizmet-detay/hizmet-detay";
import { PrinterService } from "../../../providers/printer-service/printer-service";
import { HizmetProvider } from "../../../providers/hizmet/hizmet";
import { ProcessResults } from "../../../entities/ProcessResults";
import { CagrilarPage } from "../../../pages/cagrilar/cagrilar";
import { FiyatProvider } from "../../../providers/fiyat/fiyat";
import { AnketComponent } from "../../anket/anket";
import { AnketService } from "../../../providers/anket-service/anket-service";

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
  toplamTutar: number = 0;
  isAnketExist: boolean = false;

  constructor(private hizmetService: HizmetService,
    private urunAnaGrupDao: UrunAnaGrupDao,
    private modalCtrl: ModalController,
    private util: UtilProvider,
    private logger: LoggerProvider,
    private alertCtrl: AlertController,
    private nav: NavController,
    private hizmetProvider: HizmetProvider,
    private fiyatProvider: FiyatProvider,
    private anketService: AnketService,
    private printService: PrinterService) {
    this.hizmet = this.hizmetService.getHizmet();
    this.loadCozumKoduList();
    this.loadletisimIstek();
    this.loadDetayFiyatlari();
    this.loadAnketBilgileri();
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
      this.toplamTutar = 0;
      this.detayList.forEach(item => {
        if (this.util.isNotEmpty(item.tutar))
          this.toplamTutar += Number(item.tutar);

        this.toplamTutar = Number((this.toplamTutar * 1.18).toFixed(2));
      })
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
      let detayModal = this.modalCtrl.create(HizmetDetayComponent,
        { data: { detay: "" } },
        { cssClass: this.util.getSelectedTheme() });

      detayModal.onDidDismiss(res => {
        this.logger.dir(res);
        this.updateHizmet('INSERT');
      });
      detayModal.present();
    } else {
      this.util.warn('Ürün bilgisi seçilmeden detay girilemez.');
    }
  }

  updateHizmetDetay(item: any) {
    let detayModal = this.modalCtrl.create(HizmetDetayComponent,
      { data: { hizmetDetay: item } },
      { cssClass: this.util.getSelectedTheme() }
    );
    detayModal.onDidDismiss(res => {
      this.logger.dir(res);
      this.updateHizmet('NEW');
    });
    detayModal.present();

  }

  deleteHizmetDetay(item: any) {
    let index = this.detayList.indexOf(item);

    if (index > -1) {
      this.detayList.splice(index, 1);
    }
    this.hizmet.detayDtoList = this.detayList;
    this.updateHizmet('DELETE');
  }

  yazdir() {
    this.printService.showPrinterList(this.hizmet);
  }

  async kapat(durum: string) {
    let result = this.kapatmaKontrol();
    if (result.isErrorMessagesNull()) {
      let kapatmaHizmet = this.util.assign(this.hizmet);

      let isAnketKayitOK = await this.anketVerileriniKaydet(kapatmaHizmet);

      if (isAnketKayitOK) {
        await this.hizmetiSunucuyaKaydet(durum, kapatmaHizmet);
      } else {
        this.logger.error("Anket Kayıt Sırasında hata oluştu.");
      }

    }
    else {
      this.util.pushAllMessages(result);
    }
  }

  async hizmetiSunucuyaKaydet(durum: string, kapatmaHizmet) {
    kapatmaHizmet = this.hizmetService.sunucuyaKayitIcinHazirla(kapatmaHizmet);

    kapatmaHizmet.durum = durum;
    this.verilerSunucuyaKayitEdildiMi = durum != DURUM.ACIK;
    this.util.loaderStart();
    let res = await this.hizmetProvider.updateCagri(kapatmaHizmet, "HAYIR");
    this.util.loaderEnd();
    this.logger.dir(res);

    if (this.util.isOnline()) {
      this.setCagriKapatSonuc(res, kapatmaHizmet);
    }
  }

  async anketVerileriniKaydet(hizmetData) {
    let anketKayitSonuc = await this.anketService.saveDataToApi(hizmetData);

    let status = Constants.STATUS.ERROR;
    if (this.util.isNotEmpty(anketKayitSonuc) && anketKayitSonuc == Constants.STATUS.SUCCESS) {
      this.logger.success("Anket Kayıt Edildi");
      status = Constants.STATUS.SUCCESS;

    } else {
      this.logger.error("Anket kayıt edilirken hata alındı.");
    }

    return new Promise(res => res(status));

  }

  async setCagriKapatSonuc(res, kapatmaHizmet) {
    if (res.responseCode == "FAIL") {
      this.util.error(res.description);
      this.hizmet.durum = DURUM.ACIK;
    } else {
      if (kapatmaHizmet.durum != DURUM.KAPALI)
        this.kapat(DURUM.KAPALI);
    }

    let hizmetFormuKapatildiMi = this.verilerSunucuyaKayitEdildiMi
      && this.util.isNotEmpty(res.responseCode)
      && res.responseCode == "SUCCESS"
      && res.description == "CLOSED";


    await this.hizmetService.hizmetDurumunuDegistir(this.hizmet, res);
    if (hizmetFormuKapatildiMi) {
      this.navigate("CagrilarPage", "Çağrı Kayıt Edildi.")
    }

  }

  async siparisOlustur() {
    this.util.loaderStart();

    let siparisHizmet = this.hizmetService.sunucuyaKayitIcinHazirla(this.hizmet);
    let res = await this.hizmetProvider.updateCagri(siparisHizmet, "EVET");

    if (this.util.isOnline()) {
      this.setSiparisOlusturmaSonuc(res);
    }

    this.logger.dir(res);
    this.util.loaderEnd();
  }

  setSiparisOlusturmaSonuc(res) {
    if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode)) {
      if (res.responseCode == "FAIL") {

        if (this.util.isEmpty(res.description) || res.description == "null")
          res.description = "Sipariş oluşturma da hata oluştu.";

        this.util.error(res.description);
        this.fillHizmet(res);

      } else if (res.responseCode == "SUCCESS") {
        this.util.success("Siparişiniz başarıyla oluşturuldu.");
        this.fillHizmet(res);

      } else {
        this.util.error("Sipariş oluşturmada bir hata oluştu.");
      }
    }
  }

  async fillHizmet(res) {
    if (this.util.isNotEmpty(res.message)) {
      this.hizmet.durum = res.message.durum;
      this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
    }
  }

  async updateHizmet(nerden: string) {
    if (nerden == 'DELETE') {
      this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);

    } else {
      this.hizmet = await this.hizmetService.getHizmetBySeqNo(this.hizmet.seqNo);

    }

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

    result = this.checkAnketIsFull(result);

    return result;
  }

  checkAnketIsFull(result: ProcessResults): ProcessResults {
    let anket = this.hizmet.anket;
    if (this.isAnketExist) {
      if (this.util.isEmpty(anket.anketCevaplar) || anket.anketCevaplar.length != anket.anketSorular.length) {
        result.addErrorMessage("Anket Sorularının tamamı cevaplanması gerekiyor!")
      }
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

    this.hizmet.durum = DURUM.IPTAL;
    let iptalHizmet = this.hizmetService.sunucuyaKayitIcinHazirla(this.hizmet);
    let res = await this.hizmetProvider.updateCagri(iptalHizmet, "HAYIR");
    this.logger.dir(res);

    if (this.util.isOnline()) {
      this.setHizmetIptalSonuc(res);
    }
  }

  async setHizmetIptalSonuc(res) {
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


  async onHizmetChange() {
    this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
    this.logger.warn("Hizmet Durumu" + this.hizmet.durum);
  }

  isHizmetDisabled(): boolean {
    return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
  }

  async loadDetayFiyatlari() {
    let dtoList: DetayKayit[] = this.hizmet.detayDtoList;
    if (this.util.isNotEmpty(dtoList)) {
      for (let i = 0; i < dtoList.length; i++) {
        let dto = dtoList[i];
        await this.findDetayFiyat(dto);
      }

      this.loadDetayList();
    }
  }

  async findDetayFiyat(detay: DetayKayit) {
    if (this.util.isEmpty(detay.birimFiyat) || detay.birimFiyat == 0) {
      let res = await this.fiyatProvider.findFiyat(detay, this.hizmet.mamKod);
      if (this.util.isNotEmpty(res)) {
        detay.birimFiyat = res.fiyat;
        detay.garFiyat = res.gdfiyat;
        detay.tutar = Number(detay.birimFiyat) * detay.miktar;
        detay.garTutar = String(Number(detay.garFiyat) * detay.miktar);
      }
    }
  }

  loadAnketBilgileri() {
    if (this.util.isNotEmpty(this.hizmet.anket) && this.util.isNotEmpty(this.hizmet.anket.anketMst)) {
      this.isAnketExist = true;
    }
  }

  goToAnketPage() {
    let modal = this.modalCtrl.create(AnketComponent, { data: { hizmet: this.hizmet } }, { cssClass: this.util.getSelectedTheme() });
    modal.present();
  }

}
