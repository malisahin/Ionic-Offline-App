import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular/platform/platform";
import {Constants} from "../../entities/Constants";
import {UtilProvider} from "../util/util";
declare let window: any;

@Injectable()
export class DatabaseProvider {
  constructor(private platform: Platform, private util: UtilProvider) {
    this.createDatabase();
    this.setDefaultVersions();

  }

  createDatabase() {

    this.platform.ready().then(() => {
      this.transaction()
        .then((tx) => {
          this.setDefaultVersions();
          return this.createApplicationTables(tx);
        })
        .catch(e => console.log(e));
    });
  }

  transaction(): Promise<any> {
    return new Promise((resolve, reject) => {
      let tx = window.openDatabase("sos", "1", "SOS DB", 1000000);
      resolve(tx);
    });


  }

  createApplicationTables(db): Promise<any> {
    return new Promise((resolve, reject) => {
      db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_VERSIYON_TAKIP (tablo_adi PRIMARY KEY, versiyon NUM,online_versiyon NUM, first NUM)', []);

        //tip,mamAnaGrp,adi,durum,kod, neden
        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden)', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_TNM (mamAnaGrp TEXT,mamKod TEXT, mamAdi,seriMetod,surec,durum,PRIMARY KEY (mamAnaGrp, mamKod))', []);

        tx.executeSql("CREATE  INDEX IF NOT EXISTS 'mamkod_index' ON 'OFF_MAM_TNM' ('mamKod')", []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat, PRIMARY KEY(mamKod, iscKod))', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum,fiyat,gdfiyat, kdvOran NUM, PRIMARY KEY (mamKod,mlzKod))', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum, PRIMARY KEY (mamAnaGrp,islemGrp,arizaGrp, iscKod))', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_BASVURU_NEDEN_TNM (neden, mamAnagrp, durum, ad)', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_TESTO_VALUES(seqNo, name, unit, value, creDate)', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_FIYAT (mamKod TEXT,iscMlz TEXT,iscMlzKod TEXT,fiyat NUM,gdfiyat NUM,versiyon TEXT, PRIMARY KEY(mamKod, iscMlz,iscMlzKod ))', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ALERT( bitisTarihi DATE, aciklama, gonderen, id, basTarihi NUM, status, subject, type, valid,  PRIMARY KEY (id))', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_HIZ_MST (seqNo PRIMARY KEY,randevuTarihi INT,hizmetTipiAdi,mamAnaGrpAdi, basvuruNedeni,durum,' +
          'adi,soyadi, firmaUnvani, evTel,isTel, gsmNo, data)', []);

        tx.executeSql('CREATE TABLE IF NOT EXISTS  SEHIR_TNM(sehirKodu,sehirAdi, PRIMARY KEY(sehirKodu))');

        tx.executeSql('CREATE TABLE IF NOT EXISTS  ILCE_TNM(sehirKodu, ilceKodu, ilceAdi, PRIMARY KEY(sehirKodu, ilceKodu))');

        tx.executeSql('CREATE TABLE IF NOT EXISTS  MAHALLE_TNM(sehirKodu, ilceKodu, mahalleAdi, mahalleKodu, PRIMARY KEY(sehirKodu, ilceKodu, mahalleKodu))');

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_USER_DEF (user TEXT,userCode TEXT, pass TEXT,servis TEXT ,hatirla TEXT, ikKod TEXT, ikAd ,durum TEXT,userType TEXT,userName TEXT,orgKod Text,dilKod TEXT, pB TEXT, dilObjeDetaylari , PRIMARY KEY(user))');

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_BRANS_LIST (hizmetTipi TEXT, mamAnaGrp TEXT, exp TEXT, PRIMARY KEY(hizmetTipi, mamAnaGrp))');



      });
    }).then(() => {
      this.addInitialValuesToApplicationTables(db);
    });
  };

  addInitialValuesToApplicationTables(db): Promise<any> {
    return new Promise((resolve, reject) => {
      db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_ANAGRP_TNM", -1, 0]);
      db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_TNM", -1, 0]);
      db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_ISC_ISLARZGRP_TNM", -1, 0]);
      db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_ISC_TNM", -1, 0]);
      db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_MLZ_TNM", -1, 0]);
      db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["OFFLINE_ISC_FIYAT", -1, 0]);
      db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["OFFLINE_MLZ_FIYAT", -1, 0]);

    });
  }

  setDefaultVersions() {

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.URUN_ANA_GRUP)))
      localStorage.setItem(Constants.VERSIYON.CLIENT.URUN_ANA_GRUP, "-1");

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.URUN)))
      localStorage.setItem(Constants.VERSIYON.CLIENT.URUN, "-1");

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.URUN_ISCILIK)))
      localStorage.setItem(Constants.VERSIYON.CLIENT.URUN_ISCILIK, "-1");

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.URUN_MALZEME)))
      localStorage.setItem(Constants.VERSIYON.CLIENT.URUN_MALZEME, "-1");

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK)))
      localStorage.setItem(Constants.VERSIYON.CLIENT.ISLEM_ARIZA_ISCILIK, "-1");

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.MALZEME_FIYAT)))
      localStorage.setItem(Constants.VERSIYON.CLIENT.MALZEME_FIYAT, "-1");

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.ISCILIK_FIYAT)))
      localStorage.setItem(Constants.VERSIYON.CLIENT.ISCILIK_FIYAT, "-1");

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.SEHIR_TNM))) {
      localStorage.setItem(Constants.VERSIYON.CLIENT.SEHIR_TNM, "-1");
    }

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.ILCE_TNM))) {
      localStorage.setItem(Constants.VERSIYON.CLIENT.ILCE_TNM, "-1");
    }

    if (this.util.isEmpty(localStorage.getItem(Constants.VERSIYON.SERVER.MAHALLE_TNM))) {
      localStorage.setItem(Constants.VERSIYON.CLIENT.MAHALLE_TNM, "-1");
    }
  }


}

