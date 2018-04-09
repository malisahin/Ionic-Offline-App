import { Constants } from "./Constants";

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */

export class UrunAnaGrup {

  cozumListe: CozumListe[] = [];
  basvuruListe: BasvuruListe[] = [];
  liste: UrunAnaGrupListe[] = [];

  basvuruNeden: string = "";
  mamAnaGrp: string = "";
  ad: string = "";
  durum: string = "";
  kod: string = "";
  tip: string = "";

  constructor(tip: string) {
    this.tip = tip;
  }

  fillUrunAnaGrup(res: any): Promise<UrunAnaGrup[]> {
    res = res.message;
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
  basvuruNeden: string = "";
  mamAnagrp: string = "";
  ad: string = "";
  durum: string = "";
  tip: string = "";


  fillBasvuruListe(list: BasvuruListe[], mainList: UrunAnaGrup[]) {
    let constants = new Constants();
    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup(constants.URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
      anaGrp.basvuruNeden = item.basvuruNeden;
      anaGrp.mamAnaGrp = item.mamAnagrp;
      anaGrp.ad = item.ad;
      anaGrp.durum = item.durum;
      mainList.push(anaGrp);
    });
    return mainList;
  }
}

export class CozumListe {
  kod: string = "";
  ad: string = "";
  tip = "";

  fillCozumListe(list: CozumListe[], mainList: UrunAnaGrup[]) {

    list.forEach(function (item) {
      let anaGrp = new UrunAnaGrup(new Constants().URUN_ANA_GRUP_TYPE.COZUM_LISTE);
      anaGrp.kod = item.kod;
      anaGrp.ad = item.ad;
      mainList.push(anaGrp);
    });
    return mainList;
  }
}

export class UrunAnaGrupListe {
  mamAnaGrp: string;
  durum: string;
  Adi: string;
  tip: string = "liste";

  fillMamAnaGrpListe(list: UrunAnaGrupListe[], mainList: UrunAnaGrup[]) {
    localStorage.setItem(new Constants().VERSIYON.SERVER.URUN_ANA_GRUP, list.length.toString());
    list.forEach(item => {
      let anaGrp = new UrunAnaGrup(new Constants().URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
      anaGrp.mamAnaGrp = item.mamAnaGrp;
      anaGrp.durum = item.durum;
      anaGrp.ad = item.Adi;
      mainList.push(anaGrp);
    });
    return mainList;
  }
}
