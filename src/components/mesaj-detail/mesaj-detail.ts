import {Component} from '@angular/core';
import {Mesaj} from "../../entities/mesajlar";
import {MesajlarDao} from "../../providers/mesajlar-dao/mesajlar-dao";
import {UtilProvider} from "../../providers/util/util";
import {NavParams, ViewController} from "ionic-angular";
import {Pageable} from "../../entities/Pageable";
import {MesajlarProvider} from "../../providers/mesajlar/mesajlar";

@Component({
  selector: 'mesaj-detail',
  templateUrl: 'mesaj-detail.html'
})
export class MesajDetailComponent {

  text: string;
  data: any;
  mesaj: Mesaj;

  constructor(params: NavParams, private  viewCtrl: ViewController, private  util: UtilProvider, private  mesajProvider: MesajlarProvider) {
    this.mesaj = new Mesaj();
    this.data = params.data;
    this.mesaj.id = this.data.id;
    this.fetchData();
  }

  async fetchData() {
    let list = await  this.mesajProvider.fetchList(this.mesaj, new Pageable);
    if (list.length > 0)
      this.mesaj = list[0];

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
