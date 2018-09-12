import {Component} from '@angular/core';
import {UrunSearchComponent} from "../urun-search/urun-search";
import {Constants} from "../../entities/Constants";
import {MalzemeSearchComponent} from "../malzeme-search/malzeme-search";
import {UtilProvider} from "../../providers/util/util";
import {ModalController} from "ionic-angular";
import {LoggerProvider} from "../../providers/logger/logger";
import {UrunMalzeme} from "../../entities/urun-malzeme";
import {Urun} from "../../entities/urun";
import {ProcessResults} from "../../entities/ProcessResults";
import {UrunMalzemeIliskisiSorguSonucComponent} from "../urun-malzeme-iliskisi-sorgu-sonuc/urun-malzeme-iliskisi-sorgu-sonuc";

/**
 * @author mali.sahin
 * @since 11.09.2018
 */
@Component({
  selector: 'urun-malzeme-iliskisi',
  templateUrl: 'urun-malzeme-iliskisi.html'
})
export class UrunMalzemeIliskisiComponent {

  islemTipi: string;
  malzeme: UrunMalzeme;
  urun: Urun;

  constructor(private util: UtilProvider,
              private  modalController: ModalController,
              private logger: LoggerProvider) {
  }

  public urunSorgula() {
    this.urun = new Urun();
    let data: any = {};
    data.type = Constants.DATA_TYPE.URUN;
    let aramaModal = this.modalController.create(UrunSearchComponent,
      {data: data},
      {cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false});

    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data)) {
        this.logger.log(data);
        this.urun = data;
      }
    });
    aramaModal.present();
  }

  public malzemeSorgula() {
    this.malzeme = new UrunMalzeme();
    let aramaModal = this.modalController.create(MalzemeSearchComponent,
      {data: this.malzeme},
      {cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false});

    aramaModal.onDidDismiss(data => {
      if (this.util.isNotEmpty(data)) {
        this.logger.log(data);
        this.malzeme = data;
      }
    });
    aramaModal.present();
  }


  fiyatSorgula() {
    let processResults = this.checkParameters();

    if (processResults.isErrorMessagesNull()) {
      let aramaModal = this.modalController.create(UrunMalzemeIliskisiSorguSonucComponent,
        {
          data: {
            tip: this.islemTipi,
            malzeme: this.malzeme,
            urun: this.urun
          }
        },
        {
          cssClass: this.util.getSelectedTheme(),
          enableBackdropDismiss: false
        });
      aramaModal.present();
    } else {
      this.util.pushAllMessages(processResults);
    }
  }

  checkParameters(): ProcessResults {
    let processResult = new ProcessResults();


    if (this.util.isNotEmpty(this.islemTipi)) {

      if (this.islemTipi == "URUN") {
        processResult = this.checkUrunParameters(processResult);
      }

      if (this.islemTipi == "MLZ") {
        processResult = this.checkMalzemeParameters(processResult);
      }

    } else {
      processResult.addErrorMessage("Önce işlem tipini seçiniz.")
    }

    return processResult;
  }

  checkMalzemeParameters(processResult: ProcessResults) {

    if (this.util.isNotEmpty(this.malzeme) && this.util.isNotEmpty(this.malzeme.mlzKod)) {

    } else {
      processResult.addErrorMessage("Lütfen Malzeme kodunu giriniz.")
    }

    return processResult;
  }

  checkUrunParameters(processResult: ProcessResults) {

    if (this.util.isNotEmpty(this.urun) && this.util.isNotEmpty(this.urun.mamKod)) {

    }
    else {
      processResult.addErrorMessage("Lütfen ürün kodunu giriniz.")
    }

    return processResult;
  }

  islemTipiOnChange(){
    this.malzeme = new UrunMalzeme();
    this.urun = new Urun();
  }


}
