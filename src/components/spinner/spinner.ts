import { Component } from '@angular/core';
import { EntityUtil, IndirilenVeri } from '../../entities/EntityUtil';
import { Constants } from '../../entities/Constants';


@Component({
  selector: 'spinner',
  templateUrl: 'spinner.html'
})
export class SpinnerComponent {

  text: string;
  downloadPercentage: string;
  util: EntityUtil = new EntityUtil();
  intervalId: number;

  constructor() {

  }


  ionViewDidLoad() {
    this.start();
  }

  ionViewWillLeave() {
    console.info("Percentage Info is Killed");
    this.end();
  }

  start() {
    this.intervalId = setInterval(() => {
      this.computePercentage();
    }, 1000);
  }

  end() {
    clearInterval(this.intervalId);
  }

  computePercentage() {
    let totalMiktar: number;
    let veriTipi: string;
    let veri: IndirilenVeri = this.util.getIndirilenVeri();

    let tableTotalElements = localStorage.getItem(Constants.TABLE_TOTAL_ELEMENTS.ALL_DATA);

    if (this.util.isNotEmpty(veri) && this.util.isNotEmpty(tableTotalElements)) {


      tableTotalElements = JSON.parse(tableTotalElements);

      veriTipi = Constants.TABLE_TOTAL_ELEMENTS[veri.tipi];
      totalMiktar = tableTotalElements[veriTipi];

      this.downloadPercentage = (Number(veri.miktari / totalMiktar) * 100).toFixed(0) + " %";
    } else {

      this.downloadPercentage = "0 %"
    }

  }



}