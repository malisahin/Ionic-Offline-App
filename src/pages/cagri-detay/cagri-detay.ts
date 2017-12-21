/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cagri } from '../../entities/cagri/cagri';
import { MockCagriList } from '../../entities/cagri/cagriList-mock';
import { TasiyiciProvider } from '../../providers/tasiyici/tasiyici';



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
    public navParams: NavParams,
    private tasiyici: TasiyiciProvider) {

    this.seqNo = this.navParams.get('seqNo');
    alert("Çağrı Detay Seq No: " + this.seqNo);
    let foundCagri = this.cagriList.cagriList.filter(res => {
      res.seqNo = this.seqNo;
    });
    this.cagri = this.cagri.fillCagri(foundCagri);
    this.tasiyici.setHizmet(this.cagri);
    console.log(this.cagri);
  }







  ionViewDidLoad() {
    console.log('ionViewDidLoad CagriDetayPage');
  }

}
