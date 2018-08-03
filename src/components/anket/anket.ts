import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {Anket} from "../../entities/hizmet/Ankets/Anket";
import {AnketCevap} from "../../entities/hizmet/Ankets/AnketCevap";
import {AnketSoru} from "../../entities/hizmet/Ankets/AnketSoru";
import {UtilProvider} from "../../providers/util/util";
import {LoggerProvider} from "../../providers/logger/logger";
import {Hizmet} from "../../entities/hizmet/hizmet";
import {HizmetService} from "../../providers/hizmet-service/hizmet-service";

export class QA {
  soru: AnketSoru;
  cevap: AnketCevap;
}


@Component({
  selector: 'anket',
  templateUrl: 'anket.html',
})
export class AnketComponent {

  data: any;
  anket: Anket;


  qAList: QA[];
  hizmet: Hizmet;

  constructor(private params: NavParams,
              private  viewCtrl: ViewController,
              private  util: UtilProvider,
              private  hizmetService: HizmetService,
              private  logger: LoggerProvider) {

    this.data = params.get('data');
    this.hizmet = this.data.hizmet;
    this.anket = this.data.hizmet.anket;
    this.qAList = [];

    debugger;
    this.loadAnket();

  };

  loadAnket() {

    this.anket.anketSorular.forEach(item => {
      let qA = new QA();
      qA.soru = item;
      qA.cevap = this.getAnketCevap(item);
      this.qAList.push(qA);
    });


  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  kaydet() {

    debugger;
    let cevapList: AnketCevap[] = [];
    this.qAList
      .filter(qa => this.util.isNotEmpty(qa.cevap.cevapText))
      .forEach(qa => cevapList.push(qa.cevap));

    this.hizmet.anket.anketCevaplar = cevapList;

    this.saveHizmet();
  }

  async saveHizmet() {
    await this.hizmetService.saveAndFetchHizmet(this.hizmet);
    this.util.success("Anket Bilgileri Kayıt Edildi");
    this.closeModal();
  }


  getAnketCevap(soru: any): any {
    let cevap: AnketCevap;
    let soruId = soru.serSoruTnm.soruId;
    if (this.util.isNotEmpty(this.anket.anketCevaplar) && this.anket.anketCevaplar.length > 0) {
      cevap = this.anket.anketCevaplar.find(item => item.soruId == soruId);
    }

    if (this.util.isEmpty(cevap)) {
      cevap = this.prepareCevap(soru);
    }

    return cevap;
  }

  prepareCevap(soru: AnketSoru) {
    let cevap: AnketCevap = new AnketCevap();
    cevap.anketId = this.anket.anketMst.anketId;
    cevap.anketSeq = this.anket.anketMst.anketSeq;
    cevap.soruId = soru.serSoruTnm.soruId;
    cevap.zorunlu = soru.zorunlu;
    cevap.cevapText = "";
    return cevap;
  }


}
