/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hizmet } from '../../entities/hizmet/hizmet';
import { MockCagriList } from '../../entities/hizmet/cagriList-mock';
import { HizmetProvider } from '../../providers/hizmet/hizmet';
import { HizmetService } from '../../providers/hizmet-service/hizmet-service';



@IonicPage()
@Component({
  selector: 'page-cagri-detay',
  templateUrl: 'cagri-detay.html',
})
export class CagriDetayPage {
  activePage: string = "hizmet";
  seqNo: any;
  hizmet: Hizmet;

  constructor(public navCtrl: NavController, private hizmetProvider: HizmetProvider, public navParams: NavParams, private hizmetService: HizmetService) {
    this.hizmet = new Hizmet();
    this.hizmet.seqNo = this.navParams.get('seqNo');
    this.hizmetService.fetchHizmet(this.hizmet);
    console.log("Çağrı Detay Seq No: " + this.seqNo);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagriDetayPage');
  }

}
