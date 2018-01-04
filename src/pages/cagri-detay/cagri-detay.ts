/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cagri } from '../../entities/cagri/cagri';
import { MockCagriList } from '../../entities/cagri/cagriList-mock';
import { CagriProvider } from '../../providers/cagri/cagri';



@IonicPage()
@Component({
  selector: 'page-cagri-detay',
  templateUrl: 'cagri-detay.html',
})
export class CagriDetayPage {
  activePage: string = "hizmet";
  seqNo: any;
  cagri: Cagri = new Cagri();
  cagriList: MockCagriList = new MockCagriList();

  constructor(public navCtrl: NavController,
    private cagriProvider: CagriProvider,
    public navParams: NavParams) {

    this.seqNo = this.navParams.get('seqNo');
    alert("Çağrı Detay Seq No: " + this.seqNo);
    let foundCagri = this.cagriList.cagriList.filter(res => {
      res.seqNo = this.seqNo;
    });
    this.cagri = this.cagriProvider.fillCagri(foundCagri);
    console.log(this.cagri);
  }







  ionViewDidLoad() {
    console.log('ionViewDidLoad CagriDetayPage');
  }

}
