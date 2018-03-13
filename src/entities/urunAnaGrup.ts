/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

export class UrunAnaGrup {

  cozumListe: CozumListe[] = [];
  basvuruListe: BasvuruListe[] = [];
  liste: UrunAnaGrupListe [] = [];

  basvuruNeden: string;
  mamAnaGrp: string;
  ad: string;
  durum: string;
  kod: string;
  tip: string;

  constructor() {
  }

  fillUrunAnaGrup(res: any): Promise<UrunAnaGrup[]> {
    res = JSON.parse(res.data).message;
    let urunAnaGrpList = [];
    let cozumListe = new CozumListe();
    let basvuruListe = new BasvuruListe();
    let liste = new UrunAnaGrupListe();
    urunAnaGrpList = (cozumListe.fillCozumListe(res.cozumListe, urunAnaGrpList));
    urunAnaGrpList = (basvuruListe.fillBasvuruListe(res.basvuruListe, urunAnaGrpList));
    urunAnaGrpList = (liste.fillMamAnaGrpListe(res.liste, urunAnaGrpList));
    return new Promise(resolve => resolve(urunAnaGrpList))
  }


}

export class BasvuruListe {
  basvuruNeden: string;
  mamAnagrp: string;
  ad: string;
  durum: string;
  tip: string = "basvuruListe";


  fillBasvuruListe(list: BasvuruListe[], mainList: UrunAnaGrup[]) {
    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup();
      anaGrp.basvuruNeden = item.basvuruNeden;
      anaGrp.mamAnaGrp = item.mamAnagrp;
      anaGrp.ad = item.ad;
      anaGrp.durum = item.durum;
      anaGrp.tip = "basvuruListe";
      mainList.push(anaGrp);
    });
    return mainList;
  }
}

export class CozumListe {
  kod: string;
  ad: string;
  tip = "cozumListe";

  fillCozumListe(list: CozumListe[], mainList: UrunAnaGrup[]) {
    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup();
      anaGrp.kod = item.kod;
      anaGrp.ad = item.ad;
      anaGrp.tip = "cozumListe";
      mainList.push(anaGrp);
    });
    return mainList;
  }
}

export class UrunAnaGrupListe {
  mamAnaGrp: string;
  durum: string;
  adi: string;
  tip: string = "liste";

  fillMamAnaGrpListe(list: UrunAnaGrupListe[], mainList: UrunAnaGrup[]) {
    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup();
      anaGrp.mamAnaGrp = item.mamAnaGrp;
      anaGrp.durum = item.durum;
      anaGrp.ad = item.adi;
      anaGrp.tip = "liste";
      mainList.push(anaGrp);
    });
    return mainList;
  }
}
