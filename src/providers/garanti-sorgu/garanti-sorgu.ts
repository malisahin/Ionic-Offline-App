import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { GarantiSorgu } from '../../entities/GarantiSorgu';
import { GarantiSonucComponent } from '../../components/garanti-sonuc/garanti-sonuc';
import { ModalController } from 'ionic-angular';
import { UtilProvider } from '../util/util';
import { TokenProvider } from "../token/token";


@Injectable()
export class GarantiSorguProvider {

  garantiSonuc: any;

  constructor(public http: HttpClient,
    private api: ApiProvider,
    private util: UtilProvider,
    private modalController: ModalController,
    private token: TokenProvider) {

    console.log('Helo GarantiSorguProvider Provider');
    this.garantiSonuc = {};
  }


  async  fetchDataFromApi(data: GarantiSorgu) {
    let url = this.api.garantiSorguUrl();
    let header = await this.token.callTokenAndGetHeader();
    return this.http.post(url, data, { headers: header }).subscribe(res => {

      console.log(res);
      this.showGarantiSonuc(res);
    });
  }

  showGarantiSonuc(res: any) {

    if (res.responseCode == "SUCCESS") {
      let aramaModal = this.modalController.create(GarantiSonucComponent, {
        data: res.message
      }
        ,
        {
          cssClass: this.util.getSelectedTheme()
        }
      );
      aramaModal.present();
    } else {
      this.util.message(res.description);
    }

  }
}
