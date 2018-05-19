import {Component} from '@angular/core';
import {Mesaj} from "../../entities/mesajlar";
import {MesajlarDao} from "../../providers/mesajlar-dao/mesajlar-dao";
import {UtilProvider} from "../../providers/util/util";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'mesaj-detail',
  templateUrl: 'mesaj-detail.html'
})
export class MesajDetailComponent {

  text: string;
  data: any;
  mesaj: Mesaj;

  constructor(private mesajDao: MesajlarDao, params: NavParams, private  util: UtilProvider) {
    console.log('Hello MesajDetailComponent Component');
    this.text = 'Hello World';
    this.data = params.get('data');
    this.mesaj.id = this.data.id;
  }

}
