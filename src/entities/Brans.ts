import {Constants} from "./Constants";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class Brans {
  hizmetTipi: string;
  mamAnaGrp: string;
  exp: string;

 static create(hizmetTipi: string, mamAnaGrp: string, exp: string): Brans {
    let brans = new Brans();
    brans.hizmetTipi = hizmetTipi;
    brans.mamAnaGrp = mamAnaGrp;
    brans.exp = exp;
    return brans;
  }
}
