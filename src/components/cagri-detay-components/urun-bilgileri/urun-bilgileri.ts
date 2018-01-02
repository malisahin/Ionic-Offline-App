import { Component } from '@angular/core';
import { Cagri } from '../../../entities/cagri/cagri';
import { ModalController } from 'ionic-angular';
import { ListPage } from '../../../pages/list/list';
import { ListComponent } from '../../list/list';
import { ListItem } from '../../../entities/ListItem';

@Component({
  selector: 'urun-bilgileri',
  templateUrl: 'urun-bilgileri.html'
})
export class UrunBilgileriComponent {
  text: string;
  hizmet: Cagri;
  list: ListItem[];


  constructor(private modalController: ModalController) {
    console.log('Hello UrunBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = new Cagri();

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

