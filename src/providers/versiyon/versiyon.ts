/**
 * @author mali.sahin
 * @date on 16-03-18.
 */

import {Injectable} from '@angular/core';
import {NativeStorage} from "@ionic-native/native-storage";
import {Versiyon} from "../../entities/Versiyon";


@Injectable()
export class VersiyonProvider {

  constructor(private  storage: NativeStorage) {
    console.log('Hello VersiyonProvider Provider');
  }

  async findVersiyonByTable(): Versiyon {
    return await  this.storage.getItem('VersiyonList');
  }

}
