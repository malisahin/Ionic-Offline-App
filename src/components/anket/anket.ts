import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";
import { Anket } from "../../entities/hizmet/Ankets/Anket";
import { AnketCevap } from "../../entities/hizmet/Ankets/AnketCevap";
import { AnketSoru } from "../../entities/hizmet/Ankets/AnketSoru";
import { UtilProvider } from "../../providers/util/util";
import { LoggerProvider } from "../../providers/logger/logger";
import { Hizmet } from "../../entities/hizmet/hizmet";
import { HizmetService } from "../../providers/hizmet-service/hizmet-service";
import { User } from '../../entities/user';
import { ThemeProvider } from '../../providers/theme/theme';

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
  user: User = new User();
  isHizmetDisabled: Boolean;
  backGroundImage: string;
  constructor(private params: NavParams,
    private viewCtrl: ViewController,
    private util: UtilProvider,
    private hizmetService: HizmetService,
    private logger: LoggerProvider,
    private themeProvider: ThemeProvider) {

    this.data = params.get('data');
    this.hizmet = this.data.hizmet;
     this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.anket = this.data.hizmet.anket;
    this.qAList = [];


    this.loadAnket();

    this.isHizmetDisabled = this.hizmetService.isHizmetDisabled(this.hizmet);
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
    cevap.orgKod = this.user.getOrgKod();
    cevap.cevapId = 0;
    return cevap;
  }


}
