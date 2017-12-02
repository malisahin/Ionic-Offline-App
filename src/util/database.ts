import { Injectable } from "@angular/core";



@Injectable()
export class Database {

    constructor() {

    }

 /*   createDatabase() {
        this.db.create({
            name: 'data.db',
            location: 'default'
        })
            .then((db: SQLiteObject) => {
                this.createTables(db);
            })
            .catch(e => console.log(e));
    }

    createTables(db: SQLiteObject) {
        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_VERSIYON_TAKIP (tablo_adi PRIMARY KEY, versiyon NUM,online_versiyon NUM)', []);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ANAGRP_TNM (mamAnagrp TEXT PRIMARY KEY,Adi TEXT,durum TEXT)', []);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_TNM (mamAnaGrp,mamKod, mamAdi,seriMetod,surec,durum,PRIMARY KEY (mamAnaGrp, mamKod))', []);

        db.executeSql("CREATE  INDEX IF NOT EXISTS 'mamkod_index' ON 'OFF_MAM_TNM' ('mamKod')", []);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat, PRIMARY KEY (mamKod,iscKod))', []);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum,fiyat,gdfiyat, kdvOran NUM, PRIMARY KEY (mamKod,mlzKod))', []);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum, PRIMARY KEY (mamAnaGrp,islemGrp,arizaGrp, iscKod))', []);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_BASVURU_NEDEN_TNM (basvuruNeden, mamAnagrp, durum, ad)', []);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_FIYAT (mamKod TEXT,iscMlz TEXT,iscMlzKod TEXT,fiyat NUM,gdfiyat NUM,versiyon TEXT,PRIMARY KEY (mamKod,iscMlz,iscMlzKod,versiyon))', []);
        db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon ) VALUES (?,?)", ["SER_MAM_ANAGRP_TNM", -1]);
        db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon ) VALUES (?,?)", ["SER_MAM_TNM", -1]);
        db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon ) VALUES (?,?)", ["SER_ISC_ISLARZGRP_TNM", -1]);
        db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon ) VALUES (?,?)", ["SER_MAM_ISC_TNM", -1]);
        db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon ) VALUES (?,?)", ["SER_MAM_MLZ_TNM", -1]);
        db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon ) VALUES (?,?)", ["OFFLINE_ISC_FIYAT", -1]);
        db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon ) VALUES (?,?)", ["OFFLINE_MLZ_FIYAT", -1]);

        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_ANKET_MST ( anketId PRIMARY KEY, anketSeq, durum, hedefGrp, hedefKod, hedefTar, orgKod, refKod, refNo, sorumlu, anketAdi, gkullanici, gtarih, ykullanici, ytarih, hizmetSeq)', []);
        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_ANKET_SORU( anketId, orgKod, soruId, soruSira, zorunlu, hizmetSeq, anketSeq)', []);
        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_SER_SORU_TNM(iptal, orgKod, soruId, soruMethod, soruText, yKullanici, yTarih, grpKod, anketId, hizmetSeq)', []);
        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_ANKET_CEVAP(cevapId, cevapSira, cevapText, deger, oranFlag, orgKod, soruId, ykullanici, ytarih, anketId, hizmetSeq)', []);
        db.executeSql('CREATE TABLE IF NOT EXISTS OFF_ANKET_VERILEN_CEVAP (anketId, anketSeq, cevapId, cevapText, deger, soruId, hizmetSeq, zorunlu,PRIMARY KEY (anketId,cevapId))', []);

    }

    dropTables(db: SQLiteObject) {
        db.executeSql('DROP TABLE IF EXISTS OFF_ANKET_MST', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_ANKET_SORU', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_SER_SORU_TNM', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_ANKET_CEVAP', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_ANKET_VERILEN_CEVAP', []);

        db.executeSql('DROP TABLE IF EXISTS OFF_MAM_ANAGRP_TNM', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_BASVURU_NEDEN_TNM', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_MAM_TNM', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_MAM_ISC_TNM', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_MAM_MLZ_TNM', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_VERSIYON_TAKIP', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_ISC_ISLARZGRP_TNM', []);
        db.executeSql('DROP TABLE IF EXISTS OFF_FIYAT', []);
    }

    */
}