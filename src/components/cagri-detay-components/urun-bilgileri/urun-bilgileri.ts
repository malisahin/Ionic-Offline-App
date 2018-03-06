import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ListPage } from '../../../pages/list/list';
import { ListComponent } from '../../list/list';
import { ListItem } from '../../../entities/ListItem';
import { Hizmet } from '../../../entities/hizmet/hizmet';
import {HizmetService} from "../../../providers/hizmet-service/hizmet-service";

@Component({
  selector: 'urun-bilgileri',
  templateUrl: 'urun-bilgileri.html'
})
export class UrunBilgileriComponent {
  text: string;
  hizmet: Hizmet = new Hizmet();
  list: ListItem[];


  constructor(private modalController: ModalController, private hizmetService: HizmetService) {
    console.log('Hello UrunBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = this.hizmetService.getHizmet();

    this.list = [
      new ListItem('ItemName1', 'Code1'),
      new ListItem('ItemName2', 'Code2'),
      new ListItem('ItemName3', 'Code3'),
      new ListItem('ItemName4', 'Code4')
    ]
  }

  urunListesiniGetir() {
    let aramaModal = this.modalController.create(ListPage);
    aramaModal.present();
    aramaModal.onDidDismiss(data => {
      console.log(data);
    });
  }
}

