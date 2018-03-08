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

  fillUrunAnaGrup(res) {
    let urunAnaGrpList = [];
    let cozumListe = new CozumListe();
    let basvuruListe = new BasvuruListe();
    let liste = new UrunAnaGrupListe();
    urunAnaGrpList.push(cozumListe.fillCozumListe(res.cozumListe));
    urunAnaGrpList.push(basvuruListe.fillBasvuruListe(res.basvuruListe));
    urunAnaGrpList.push(liste.fillMamAnaGrpListe(res.liste));
    return urunAnaGrpList;
  }


}

export class BasvuruListe {
  basvuruNeden: string;
  mamAnagrp: string;
  ad: string;
  durum: string;
  tip: string = "basvuruListe";


  fillBasvuruListe(list: BasvuruListe[]) {
    let urunAnaGrpList = [];
    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup();
      anaGrp.basvuruNeden = item.basvuruNeden;
      anaGrp.mamAnaGrp = item.mamAnagrp;
      anaGrp.ad = item.ad;
      anaGrp.durum = item.durum;
      anaGrp.tip = "basvuruListe";
      urunAnaGrpList.push(anaGrp);
    });
    return urunAnaGrpList;
  }
}

export class CozumListe {
  kod: string;
  ad: string;
  tip = "cozumListe";

  fillCozumListe(list: CozumListe[]) {
    let urunAnaGrpList = [];
    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup();
      anaGrp.kod = item.kod;
      anaGrp.ad = item.ad;
      anaGrp.tip = "cozumListe";
      urunAnaGrpList.push(anaGrp);
    });
    return urunAnaGrpList;
  }
}

export class UrunAnaGrupListe {
  mamAnaGrp: string;
  durum: string;
  adi: string;
  tip: string = "liste";

  fillMamAnaGrpListe(list: UrunAnaGrupListe[]) {
    let urunAnaGrpList = [];
    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup();
      anaGrp.mamAnaGrp = item.mamAnaGrp;
      anaGrp.durum = item.durum;
      anaGrp.ad = item.adi;
      anaGrp.tip = "liste";
      urunAnaGrpList.push(anaGrp);
    });
    return urunAnaGrpList;
  }
}
