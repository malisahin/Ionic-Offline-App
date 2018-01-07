/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hizmet } from '../../entities/hizmet/hizmet';
import { MockCagriList } from '../../entities/hizmet/cagriList-mock';
import { HizmetProvider } from '../../providers/hizmet/hizmet';



@IonicPage()
@Component({
  selector: 'page-cagri-detay',
  templateUrl: 'cagri-detay.html',
})
export class CagriDetayPage {
  activePage: string = "hizmet";
  seqNo: any;
  hizmet: Hizmet = new Hizmet();
  hizmetList: MockCagriList = new MockCagriList();

  constructor(public navCtrl: NavController,
    private hizmetProvider: HizmetProvider,
    public navParams: NavParams) {

    this.seqNo = this.navParams.get('seqNo');
    console.log("Çağrı Detay Seq No: " + this.seqNo);
    let foundCagri = this.hizmetList.cagriList.filter(res => {
      res.seqNo = this.seqNo;
    });
    this.hizmet = this.hizmetProvider.fillHizmet(foundCagri);
    console.log(this.hizmet);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CagriDetayPage');
  }

}
