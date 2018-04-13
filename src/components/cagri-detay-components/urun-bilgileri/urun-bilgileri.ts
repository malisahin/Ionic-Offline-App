import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ListPage } from '../../../pages/list/list';
import { ListComponent } from '../../list/list';
import { ListItem } from '../../../entities/ListItem';
import { Hizmet } from '../../../entities/hizmet/hizmet';
import { HizmetService } from "../../../providers/hizmet-service/hizmet-service";
import { UrunSearchComponent } from '../../urun-search/urun-search';

@Component({
  selector: 'urun-bilgileri',
  templateUrl: 'urun-bilgileri.html'
})
export class UrunBilgileriComponent {
  text: string;
  hizmet: Hizmet = new Hizmet();

  constructor(private modalController: ModalController, private hizmetService: HizmetService) {
    console.log('Hello UrunBilgileriComponent Component');
    this.text = 'Hello World';
    this.hizmet = this.hizmetService.getHizmet();


  }

  urunListesiniGetir() {
    let aramaModal = this.modalController.create(UrunSearchComponent);
    aramaModal.onDidDismiss(data => {

    });
  }
}

