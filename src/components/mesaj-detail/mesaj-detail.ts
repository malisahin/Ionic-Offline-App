import { Component } from '@angular/core';
import { Mesaj } from "../../entities/mesajlar";
import { MesajlarDao } from "../../providers/mesajlar-dao/mesajlar-dao";
import { UtilProvider } from "../../providers/util/util";
import { NavParams, ViewController } from "ionic-angular";
import { Pageable } from "../../entities/Pageable";
import { MesajlarProvider } from "../../providers/mesajlar/mesajlar";
import { ThemeProvider } from '../../providers/theme/theme';

@Component({
  selector: 'mesaj-detail',
  templateUrl: 'mesaj-detail.html'
})
export class MesajDetailComponent {

  text: string;
  data: any;
  mesaj: Mesaj;
  backGroundImage: string;

  constructor(params: NavParams, private viewCtrl: ViewController, private util: UtilProvider, private mesajProvider: MesajlarProvider, private themeProvider: ThemeProvider) {
    this.mesaj = new Mesaj();
    this.backGroundImage = this.themeProvider.getBackgroundImage();
    this.data = params.data;
    this.mesaj.id = this.data.id;
    this.fetchData();
  }

  async fetchData() {
    let list = await this.mesajProvider.fetchList(this.mesaj, new Pageable);
    if (list.length > 0)
      this.mesaj = list[0];

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
