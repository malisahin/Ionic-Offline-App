import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular/platform/platform";
import { Observable } from "rxjs/Observable";
//import { SqlitePlugin} from "cordova-plugin-sqlite-2";
declare let window: any;

@Injectable()
export class DatabaseProvider {

    constructor(private platform: Platform) {
        this.createDatabase();
    }

    createDatabase() {

        this.platform.ready().then(() => {
            this.transaction()
                .then((tx) => {
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


    // getDB() {
    /* return this.platform.ready().then(() => {
     this.sqlite.create({
     name: 'SOS',
     location: 'default'
     }).then((db: SQLiteObject) => {
     return db;
     });
     });  */
    /*   return this.db;
   } */

    createApplicationTables(db): Promise<any> {
        return new Promise((resolve, reject) => {
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_VERSIYON_TAKIP (tablo_adi PRIMARY KEY, versiyon NUM,online_versiyon NUM, first NUM)', []);

                //tip,mamAnaGrp,adi,durum,kod, neden
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,adi,durum,kod, neden)', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_TNM (mamAnaGrp,mamKod, mamAdi,seriMetod,surec,durum,PRIMARY KEY (mamAnaGrp, mamKod))', []);

                tx.executeSql("CREATE  INDEX IF NOT EXISTS 'mamkod_index' ON 'OFF_MAM_TNM' ('mamKod')", []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat)', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum,fiyat,gdfiyat, kdvOran NUM, PRIMARY KEY (mamKod,mlzKod))', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum, PRIMARY KEY (mamAnaGrp,islemGrp,arizaGrp, iscKod))', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_BASVURU_NEDEN_TNM (basvuruNeden, mamAnagrp, durum, ad)', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_TESTO_VALUES(seqNo, name, unit, value, creDate)', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_FIYAT (mamKod TEXT,iscMlz TEXT,iscMlzKod TEXT,fiyat NUM,gdfiyat NUM,versiyon TEXT)', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ALERT( bitisTarihi, aciklama, gonderen, id, basTarihi, status, subject, type, valid,  PRIMARY KEY (id))', []);

                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_HIZ_MST (seqNo PRIMARY KEY,randevuTarihi DATE,hizmetTipiAdi,mamAnaGrpAdi, basvuruNedeni,durum,' +
                    'adi,soyadi, firmaUnvani, evTel,isTel, gsmNo, data)', []);
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


}

/**

 offline.database = [];

 offline.database.createTables = function (tx) {



    offline.database.dropTables = function (tx) {

        //Drop Anketler Databases
        tx.executeSql('DROP TABLE IF EXISTS OFF_ANKET_MST');
        tx.executeSql('DROP TABLE IF EXISTS OFF_ANKET_SORU');
        tx.executeSql('DROP TABLE IF EXISTS OFF_SER_SORU_TNM');
        tx.executeSql('DROP TABLE IF EXISTS OFF_ANKET_CEVAP');
        tx.executeSql('DROP TABLE IF EXISTS OFF_ANKET_VERILEN_CEVAP');

        tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_ANAGRP_TNM');
        tx.executeSql('DROP TABLE IF EXISTS OFF_BASVURU_NEDEN_TNM');
        tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_TNM');
        tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_ISC_TNM');
        tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_MLZ_TNM');
        tx.executeSql('DROP TABLE IF EXISTS OFF_VERSIYON_TAKIP');
        tx.executeSql('DROP TABLE IF EXISTS OFF_ISC_ISLARZGRP_TNM');
        tx.executeSql('DROP TABLE IF EXISTS OFF_FIYAT');
        offline.database.dropCagri(tx, function () {
        });
        offline.database.createTables(tx)
    };

    offline.database.createCagri = function (tx, callback) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_HIZ_MST (seqNo PRIMARY KEY,serKod,serAdi,randevuTarihi DATE,cagriTarihi,hizmetTipi,hizmetTipiAdi,mamAnaGrp, basvuruNedeni,durum,cmTarihi,cmNo,' +
            'musId,musKod,adi,soyadi,firmaUnvani, musTip, evTel,isTel, gsmNo,eposta, sehirKod,sehir, ilceKod, ilce, semt, mahalle, cadde,  sokak,  aparman, apartmanNo, blok, daireNo,' +
            'mamKod,mamAdi, mamSeriNo, mamSeriNo2, sattar, garanti, mesguliyet, nobet, islemTarihi, islemBitTarihi,bayiKod, ikKod, kapatmaKodu, cozumKodu,aciklama,servisNotu,merkezNotu,odemeTipi,iletisimIstek)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_HIZ_DET (seqNo,satirNo,islemKod,arizaKod, mlzIsc,mlzIscKod,aciklama,miktar NUM,birimFiyat NUM, kdvOran NUM, tutar NUM, olcuBrm,satirHata)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_HIZ_ISLEM_TARIHCE (islSira,seqNo,basTar,bitTar, durum, bekleKaynak,beklemeNeden)');


        callback()
    };

    offline.database.dropCagri = function (tx, callback) {
        tx.executeSql('DROP TABLE IF EXISTS OFF_HIZ_MST');
        tx.executeSql('DROP TABLE IF EXISTS OFF_HIZ_DET');
        tx.executeSql('DROP TABLE IF EXISTS OFF_HIZ_ISLEM_TARIHCE');

        offline.database.createCagri(tx, callback)
    };


    offline.database.dropUrunler = function () {
        offline.connection.instance.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_TNM');
            tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_TNM (mamAnaGrp,mamKod, mamAdi,seriMetod,surec,durum,PRIMARY KEY (mamAnaGrp, mamKod))');
        });
    };

    offline.database.dropAnaGrp = function () {
        offline.connection.instance.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_ANAGRP_TNM');
            tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ANAGRP_TNM (mamAnagrp TEXT PRIMARY KEY,Adi TEXT,durum TEXT)');
        });
    };

    offline.database.dropUrunIscilik = function () {
        offline.connection.instance.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_ISC_TNM');
            tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat, PRIMARY KEY (mamKod,iscKod))');


        });
    };

    offline.database.dropUrunMalzeme = function () {
        offline.connection.instance.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS OFF_MAM_MLZ_TNM');
            tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum,fiyat,gdfiyat, kdvOran NUM)');
        });
    };

    offline.database.IslemArizaIscilik = function () {
        offline.connection.instance.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS OFF_ISC_ISLARZGRP_TNM');
            tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ISC_ISLARZGRP_TNM (mamAnaGrp,islemGrp,islemGrpAdi,arizaGrp,arizaGrpAdi,iscKod,durum)')
        });
    };

    offline.database.dropFiyatlar = function () {
        offline.connection.instance.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS OFF_FIYAT');
        });
    };


 */
