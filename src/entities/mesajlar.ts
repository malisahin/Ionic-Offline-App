/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


export class Mesaj {
  status: string;
  subject: string;
  bitisTarihi: string;
  basTarihi: string;
  valid: string;
  gonderen: string;
  aciklama: string;
  id: number;
  type: string;

  fillMesajlar(res: any): Promise<any> {
    let parsedList = [];
    let mesajList = res.message;
    for (let i = 0; i < mesajList.length; i++) {
      //mesajList.forEach(function (item) {
      let item = mesajList[i];
      let mesaj = new Mesaj();
      mesaj.status = item.status;
      mesaj.subject = item.subject;
      mesaj.bitisTarihi = item.endTime;
      mesaj.basTarihi = item.startTime;
      mesaj.valid = item.valid;
      mesaj.gonderen = item.gonderen;
      mesaj.aciklama = item.expl;
      mesaj.id = item.id;
      mesaj.type = item.type;
      parsedList.push(mesaj);
    }
    return new Promise(resolve =>
      resolve(parsedList)
    );

  }
}
