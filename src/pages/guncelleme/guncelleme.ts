/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MalzemeIscilikProvider } from '../../providers/malzeme-iscilik/malzeme-iscilik';


@IonicPage()
@Component({
  selector: 'page-guncelleme',
  templateUrl: 'guncelleme.html',
})
export class GuncellemePage {
  isAndroid: boolean = false;
  activePage: string = "guncelleme";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mlzIscProvider: MalzemeIscilikProvider) {
  }

  downloadUrunIscilik() {
    this.mlzIscProvider.urunIscilikGuncelle("-1", 0);
  }


}
