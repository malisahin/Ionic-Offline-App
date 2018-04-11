import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../entities/Constants';
import { ToastController } from 'ionic-angular';





@Injectable()
export class UtilProvider {

  constants: Constants;
  constructor(private toast: ToastController) {
    console.log('Hello UtilProvider Provider');
    this.constants = new Constants();
  }

  isEmpty(item: any): boolean {
    if (typeof item == 'undefined' || item == null || item == "") {
      return true;
    } else {
      return false;
    }
  }

  isNotEmpty(item: any): boolean {
    if (typeof item == 'undefined' || item == null || item == "") {
      return false;
    } else {
      return true;
    }
  }

  prepareForLike(key: string, value: string): string {
    return key + " LIKE '%" + value.split('').join('%') + "%'";
  }

  prepareForEqual(key: string, value: string): string {
    return key + "='" + value + "'";
  }

  prepareQuery(type: string, key: string, value: string): string {
    return type == this.constants.SEARCH_TYPE.EXACT ? this.prepareForEqual(key, value) : this.prepareForLike(key, value);
  }

  message(message: string) {
    let toast = this.toast.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}