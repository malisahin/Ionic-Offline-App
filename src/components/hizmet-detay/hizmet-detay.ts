import {Component} from '@angular/core';
import {DetayKayit} from "../../entities/hizmet/DetayKayit";
import {ViewController, NavParams} from "ionic-angular";


@Component({
  selector: 'hizmet-detay',
  templateUrl: 'hizmet-detay.html'
})
export class HizmetDetayComponent {

  text: string;
  private hizmetDetay: DetayKayit;
  data: any;

  constructor(private  viewCtrl: ViewController, private  params: NavParams) {
    console.log('Hello HizmetDetayComponent Component');
    this.text = 'Hello World';
    this.hizmetDetay = new DetayKayit();
    this.data = params.get('data');
  }

  detayKaydet() {

  }

  parcaIscilikYolKoduBul() {

  }

  arizaKoduBul() {

  }

  islemKoduBul() {

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
