/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Hizmet } from "../../entities/hizmet/hizmet";
import { HizmetService } from "../../providers/hizmet-service/hizmet-service";
import { CagrilarPage } from "../cagrilar/cagrilar";
import { ThemeProvider } from "../../providers/theme/theme";


@IonicPage()
@Component({
  selector: 'page-cagri-detay',
  templateUrl: 'cagri-detay.html',
})


export class CagriDetayPage {
  activePage: string = "hizmet";
  seqNo: any;
  hizmet: Hizmet;
  backGroundImage: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private hizmetService: HizmetService,
    private themeProvider: ThemeProvider) {
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.hizmet = new Hizmet();
    this.hizmet.seqNo = this.navParams.get('seqNo');
    this.setHizmet();
  }

  getHizmet() {
    debugger;
    return this.hizmetService.fetchHizmet(this.hizmet.seqNo).then(res => {
      for (let i = 0; i < res.length; i++) {
        this.hizmet = JSON.parse(res.item(i).data);
        this.hizmetService.setHizmet(this.hizmet);
      }
    });
  }

  setHizmet() {
    this.hizmetService.setHizmet(this.hizmet);
  }

  async whenTabChange() {
    //this.hizmet = await this.hizmetService.saveAndFetchHizmet(this.hizmet);
  }

  goback() {
    this.navCtrl.push(CagrilarPage);
  }

}
