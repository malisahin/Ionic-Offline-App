import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Hizmet } from '../../../entities/hizmet/hizmet';
import { HizmetService } from "../../../providers/hizmet-service/hizmet-service";
import { UrunSearchComponent } from '../../urun-search/urun-search';
import { UtilProvider } from "../../../providers/util/util";
import { Constants } from "../../../entities/Constants";
import { LoggerProvider } from "../../../providers/logger/logger";
import { UrunAnaGrupSearchComponent } from "../../urun-ana-grup-search/urun-ana-grup-search";
import { UrunDao } from "../../../providers/urun-dao/urun-dao";
import { UrunAnaGrupDao } from "../../../providers/urun-ana-grup-dao/urun-ana-grup-dao";
import { UrunAnaGrup } from "../../../entities/urunAnaGrup";
import { GarantiSorguProvider } from "../../../providers/garanti-sorgu/garanti-sorgu";
import { GarantiSorgu } from "../../../entities/GarantiSorgu";

@Component({
  selector: 'urun-bilgileri',
  templateUrl: 'urun-bilgileri.html'
})
export class UrunBilgileriComponent {
  text: string;
  hizmet: Hizmet = new Hizmet();
  constants: Constants;

  mamAnaGrpValue: string;

  constructor(private modalController: ModalController,
    private hizmetService: HizmetService,
    private urunDao: UrunDao,
    private logger: LoggerProvider,
    private urunAnaGrpDao: UrunAnaGrupDao,
    private garantiSorguProvider: GarantiSorguProvider,
    private util: UtilProvider) {
    console.log('Hello UrunBilgileriComponent Component');
    this.text = 'Hello World';
    this.constants = new Constants();
    this.hizmet = this.hizmetService.getHizmet();
    this.findUrunAnaGrp();
  }

  urunListesiniGetir() {
    let mamAnagrp = this.hizmet.mamAnaGrp;
    let searchType = this.constants.SEARCH_TYPE.EXACT;
    let aramaModal = this.modalController.create(UrunSearchComponent, {
      data: {
        mamAnagrp: mamAnagrp,
        searchType: searchType
      }
    });
    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data.mamKod))
        this.hizmet.mamKod = data.mamKod;
      if (this.util.isNotEmpty(data.mamAdi))
        this.hizmet.mamAdi = data.mamAdi;

    });
    aramaModal.present();
  }

  urunAnaGrupDegistir() {
    let anaGrpModal = this.modalController.create(UrunAnaGrupSearchComponent, {
      data: {
        type: this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE
      }
    });
    anaGrpModal.onDidDismiss(res => {
      this.hizmet.mamAnaGrpAdi = res.ad;
      this.hizmet.mamAnaGrp = res.mamAnaGrp;
      this.findUrunAnaGrp();
    });
    anaGrpModal.present();
  }

  findUrunAnaGrp() {
    let urunAnaGrp = new UrunAnaGrup(this.constants.URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
    urunAnaGrp.mamAnaGrp = this.hizmet.mamAnaGrp;
    this.urunAnaGrpDao.getList(urunAnaGrp, this.constants.SEARCH_TYPE.EXACT).then(res => {
      this.hizmet.mamAnaGrpAdi = this.util.isNotEmpty(res.rows) ? res.rows.item(0).ad : "";

      this.mamAnaGrpValue = this.hizmet.mamAnaGrp + " - " + this.hizmet.mamAnaGrpAdi;
    });
  }

  urunSil() {
    if (this.hizmet.detayList.length > 0) {
      this.util.message("Ürüne bağlı Parça/İşçilik/Yol mevcut.Silinemez.");
      return false;
    }

    this.hizmet.mamKod = "";
    this.hizmet.mamAdi = "";
  }

  garantiSorgula() {
    let sorguData = new GarantiSorgu();
    sorguData.mamKod = this.hizmet.mamKod;
    sorguData.dilKod = 'T';
    sorguData.serKod = this.hizmet.serKod;
    sorguData.satisTarihi = this.util.dateFormat(new Date(this.hizmet.sattar), "YYYY-MM-DD");
    sorguData.mamSeriNo = this.hizmet.mamSeriNo;
    sorguData.islemTarihi = this.util.dateFormat(new Date(this.hizmet.islemTarihi), "YYYY-MM-DD");
    sorguData.orgKod = 'ECA';
    this.garantiSorguProvider.fetchDataFromApi(sorguData);
  }
}

