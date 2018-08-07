import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { Hizmet } from "../../../entities/hizmet/hizmet";
import { HizmetService } from "../../../providers/hizmet-service/hizmet-service";
import { UrunSearchComponent } from "../../urun-search/urun-search";
import { UtilProvider } from "../../../providers/util/util";
import { Constants } from "../../../entities/Constants";
import { LoggerProvider } from "../../../providers/logger/logger";
import { UrunAnaGrupDao } from "../../../providers/urun-ana-grup-dao/urun-ana-grup-dao";
import { UrunAnaGrup } from "../../../entities/urunAnaGrup";
import { GarantiSorguProvider } from "../../../providers/garanti-sorgu/garanti-sorgu";
import { GarantiSorgu } from "../../../entities/GarantiSorgu";
import { SeriNoSorguProvider } from "../../../providers/seri-no-sorgu/seri-no-sorgu";
import { UpdateUrunAnaGrupComponent } from "../../update-urun-ana-grup/update-urun-ana-grup";
import { ProcessResults } from "../../../entities/ProcessResults";
import { UrunProvider } from "../../../providers/urun/urun";
import { Urun } from "../../../entities/urun";
import { Pageable } from "../../../entities/Pageable";
import { UtilPlugin } from "../../../providers/util-plugin/util-plugin";

@Component({
  selector: "urun-bilgileri",
  templateUrl: "urun-bilgileri.html"
})
export class UrunBilgileriComponent {
  text: string;
  hizmet: Hizmet = new Hizmet();
  mamAnaGrpValue: string;
  mesguliyet: boolean;
  garanti: boolean;
  seriNoSayisi: number = 1;

  constructor(private modalController: ModalController,
    private hizmetService: HizmetService,
    private logger: LoggerProvider,
    private garantiSorguProvider: GarantiSorguProvider,
    private util: UtilProvider,
    private seriNoSorguProvider: SeriNoSorguProvider,
    private urunProvider: UrunProvider,
    private plugins: UtilPlugin,
    private urunAnaGrpDao: UrunAnaGrupDao) {
    this.hizmet = this.hizmetService.getHizmet();
    this.init();
    this.findUrunAnaGrp();
    this.loadSeriNo2();
  }

  init() {
    this.garanti = this.util.isNotEmpty(this.hizmet.garanti) && this.hizmet.garanti == "VAR";
    this.mesguliyet = this.util.isNotEmpty(this.hizmet.mesguliyet) && this.hizmet.mesguliyet == "VAR";
    this.mesguliyetChange();
    this.garantiChange();
  }

  async urunListesiniGetir() {
    let mamAnagrp = this.hizmet.mamAnaGrp;
    let searchType = Constants.SEARCH_TYPE.EXACT;
    let aramaModal = this.modalController.create(
      UrunSearchComponent,
      { data: { mamAnagrp: mamAnagrp, searchType: searchType } },
      { cssClass: this.util.getSelectedTheme() }
    );
    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data)) {
        if (this.util.isNotEmpty(data.mamKod)) this.hizmet.mamKod = data.mamKod;

        if (this.util.isNotEmpty(data.mamAdi)) this.hizmet.mamAdi = data.mamAdi;

        if (this.util.isNotEmpty(data.seriMetod)) {
          this.seriNoSayisi = Number(data.seriMetod);
          this.hizmet.seriMetod = data.seriMetod;
        }

        this.saveHizmet();
      }
    });
    aramaModal.present();
  }

  urunAnaGrupDegistir() {
    let processResult = this.urunAnaGrupDegistirmeKontrol();

    if (processResult.isErrorMessagesNull()) {
      let anaGrpUpdateModal = this.modalController.create(
        UpdateUrunAnaGrupComponent,
        {
          hizmet: this.hizmet
        },
        { cssClass: this.util.getSelectedTheme() }
      );
      anaGrpUpdateModal.onDidDismiss(res => {
        if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.hizmet)) {
          this.hizmet = res.hizmet;
          this.findUrunAnaGrp();
        }
      });
      anaGrpUpdateModal.present();
    } else {
      this.util.pushErrorMessages(processResult);
    }
  }

  urunAnaGrupDegistirmeKontrol(): ProcessResults {
    let res = new ProcessResults();
    let mamKodVarMi: boolean = this.util.isNotEmpty(this.hizmet.mamKod);
    if (mamKodVarMi) {
      res.addErrorMessage(
        "Ürün Ana grubuna bağlı ürün bulundu.Önce ürünü siliniz."
      );
    }
    return res;
  }

  async findUrunAnaGrp() {
    let urunAnaGrp = new UrunAnaGrup(
      Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE
    );
    urunAnaGrp.mamAnaGrp = this.hizmet.mamAnaGrp;
    this.urunAnaGrpDao.getList(urunAnaGrp, Constants.SEARCH_TYPE.EXACT)
      .then(res => {
        if (res.rows.length > 0)
          this.hizmet.mamAnaGrpAdi = this.util.isNotEmpty(res.rows) ? res.rows.item(0).ad : "";

        this.mamAnaGrpValue = this.hizmet.mamAnaGrp + " - " + this.hizmet.mamAnaGrpAdi;
      });
    this.saveHizmet();
  }

  async urunSil() {
    if (
      this.util.isNotEmpty(this.hizmet.detayDtoList) &&
      this.hizmet.detayDtoList.length > 0
    ) {
      this.util.error("Ürüne bağlı Parça/İşçilik/Yol mevcut.Silinemez.");
      return false;
    }

    this.hizmet.mamKod = "";
    this.hizmet.mamAdi = "";
    this.hizmet.mamSeriNo = "";
    this.hizmet.mamSeriNo2 = "";
    this.hizmet.seriMetod = null;
    this.seriNoSayisi = 1;
    this.saveHizmet();
  }

  garantiSorgula() {
    let sorguData = new GarantiSorgu();
    sorguData.mamKod = this.hizmet.mamKod;
    sorguData.dilKod = "T";
    sorguData.serKod = this.hizmet.serKod;
    sorguData.satisTarihi = this.util.dateFormat(new Date(this.hizmet.sattar), "YYYY-MM-DD");
    sorguData.mamSeriNo = this.hizmet.mamSeriNo;
    sorguData.islemTarihi = this.util.dateFormat(new Date(this.hizmet.islemTarihi), "YYYY-MM-DD");
    sorguData.orgKod = "ECA";
    this.garantiSorguProvider.fetchDataFromApi(sorguData);
  }

  async seriNoSorgula() {
    if (this.util.isNotEmpty(this.hizmet.mamSeriNo)) {
      let res = await this.seriNoSorguProvider.fetchData(this.hizmet.mamSeriNo);
      this.logger.warn(res);

      if (this.util.isOnline()) {
        this.setSeriSorguResult(res);
      } else {
        this.util.ifOffline();
      }
    } else {
      this.util.error("Seri No alanı sorgu için zorunludur.");
    }
  }


  async scanBarcode() {
    let result = await this.plugins.scanBarcode();
    if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.text)) {
      this.util.success(" Barcode Alındı: " + result.text);
      this.hizmet.mamSeriNo = result.text;
    }

  }

  async setSeriSorguResult(res) {
    if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.message)) {
      let item = res.message[0];

      if (item.mamAnagrp == this.hizmet.mamAnaGrp) {
        this.hizmet.mamKod = item.mamKod;
        this.hizmet.mamAdi = item.mamAdi;
        this.hizmet.mamSeriNo = item.mamSerino;
        this.util.info(
          "Ürün bilgileri seri No bilgisine bağlı olarak değiştirildi."
        );
        this.saveHizmet();
      } else {
        let anagrp = new UrunAnaGrup(
          Constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE
        );
        anagrp.mamAnaGrp = item.mamAnagrp;
        let urunAnaGrp = await this.urunAnaGrpDao.getList(
          anagrp,
          Constants.SEARCH_TYPE.EXACT
        );
        this.logger.warn(urunAnaGrp);
        let mes = "Sorguladığınız Seri No ";

        if (urunAnaGrp.rows.length > 0) {
          urunAnaGrp = urunAnaGrp.rows.item(0);
          mes += urunAnaGrp.ad;
        } else {
          mes += "başka bir";
        }

        this.util.warn(
          mes + " ana grubuna bağlıdır. Önce Ana Grubu Değiştiriniz."
        );
      }
    } else {
      this.util.error(
        "Bu Seri Numarasına bağlı ürün bulunamadı.Tekrar kontrol ediniz."
      );
    }
  }

  async mesguliyetChange() {
    this.hizmet.mesguliyet = this.mesguliyet == true ? "VAR" : "YOK";
    this.saveHizmet();
  }

  async garantiChange() {
    this.hizmet.garanti = this.garanti == true ? "VAR" : "YOK";
    this.saveHizmet();
  }

  faturaTarihiChange() {
    this.saveHizmet();
  }

  async saveHizmet() {
    this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
  }

  isHizmetDisabled(): boolean {
    return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
  }

  async loadSeriNo2() {
    if (this.util.isNotEmpty(this.hizmet.seriMetod)) {
      this.seriNoSayisi = Number(this.hizmet.seriMetod);
    } else if (this.util.isNotEmpty(this.hizmet.mamKod)) {
      await this.findUrunBilgileri();
    }
  }

  async findUrunBilgileri() {
    let filter = new Urun();
    filter.mamKod = this.hizmet.mamKod;
    let result = await this.urunProvider.getList(
      filter,
      Constants.SEARCH_TYPE.EXACT,
      new Pageable()
    );
    if (this.util.isNotEmptyRows(result.res)) {

      this.logger.dir(result.res);
      let item = result.res.rows.item(0);
      if (this.util.isNotEmpty(item.seriMetod)) {
        this.hizmet.seriMetod = item.seriMetod;
        this.seriNoSayisi = Number(item.seriMetod);
      }
    }
  }
}
