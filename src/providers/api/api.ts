/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Injectable } from "@angular/core";
import { Profil } from "../../entities/profil";
import { EProfiles } from "../../entities/enums/eProfil";
import { Tablo } from "../../entities/Tablo";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from "../../entities/Constants";
import { TokenProvider } from "../token/token";


@Injectable()
export class ApiProvider {
  constants: Constants;
  profil: Profil = new Profil();
  ACTIVE_PROFIL: EProfiles;
  orgKod: string = "ECAMERKEZ";
  serKod: string = "ECA_TEST";
  dilKod: string;
  ikKod: string = "5961";
  userName: string = "ECAMERKEZ";
  paraBirimi: string;
  urlPrefixHizmet: string;
  urlPrefixOffline: string;
  urlPrefixKullanici: string;
  pageSize: number;
  first = 0;
  tables: Tablo;

  constructor(private http: HttpClient,
    private token: TokenProvider) {
    this.constants = new Constants();
    this.pageSize = this.constants.API_PAGE_SIZE;
    console.log('Hello ApiProvider Provider');
    this.ACTIVE_PROFIL = EProfiles.LOCAL_DEV;

    this.urlPrefixHizmet = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/hizmet/';
    this.urlPrefixOffline = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/offline/';
    this.urlPrefixKullanici = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/kullanici/';
    this.tables = new Tablo();
  }

  getTokenUrl(userCode: String, password: String) {
    let tokenUrl = this.profil.getActiveProfil(this.ACTIVE_PROFIL).securityUrl + '/sos-security-service/oauth/token?grant_type=password&client_id=sos-api-enduser-mobile-client&client_secret=somesecret&';
    return tokenUrl + "username=" + userCode + "&password=" + password;
  }

  loginUrl: string = "";

  getKullaniciUrl() {
    return this.urlPrefixKullanici + this.userName;
  }

  getCagriListUrl() {
    this.ikKod = '5961';
    return this.urlPrefixHizmet + this.orgKod + '/' + this.serKod + '/' + this.ikKod + '/param/ikCagriListesi';
  }

  setCagriUrl(siparisMi: string) {
    return this.urlPrefixHizmet + this.orgKod + '/' + this.userName + '/' + this.dilKod + '/' + this.paraBirimi + '/' + siparisMi + '/' + '/CagriKaydet';
  }

  downloadUrunUrl(first: number) {
    let versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.ISCILIK_FIYAT);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/urunler';
  }

  urunAnagrupDownloadUrl() {
    let versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.URUN_ANA_GRUP);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/mamAnagrp';
  }

  urunIscilikDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.URUN_ISCILIK);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamIsc';
  }

  urunMalzemeDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.URUN_MALZEME);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamMlz';
  }

  islemArizaIscilikDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.ISLEM_ARIZA_ISCILIK);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/islArzIsc';
  }

  fiyatlarDownloadUrl(first: number, tip: string) {
    let versiyon = "-1";
    if (tip == "malzemeFiyatListesi") {
      versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.MALZEME_FIYAT);
    } else {
      versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.ISCILIK_FIYAT);
    }
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/' + tip;
  }

  getVersiyonUrl() {
    return this.urlPrefixOffline + 'versiyonKontrol';
  }

  garantiSorguUrl() {
    return this.urlPrefixOffline + 'garantiKontrol';
  }

  getMesajlarUrl() {
    this.userName = 'ECAMERKEZ';
    return this.urlPrefixKullanici + this.userName + '/type/NEW/mesajlar';
  }

  updateMamAnaGrupUrl() {
    return this.urlPrefixHizmet + this.orgKod + '/' + this.userName + '/' + this.dilKod + '/' + this.paraBirimi + '/UpdateMamAnaGrp';
  }

  getMahalleTnmUrl(first: number) {
    let versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.MAHALLE_TNM);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + "/" + this.pageSize + '/mahalleler';
  }

  getSehirIlceUrl(tip: string) {
    let versiyon = "-1";
    if (tip == this.constants.DATA_TYPE.SEHIR_TNM) {
      versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.SEHIR_TNM);
      tip = 'sehirler';
    } else if (tip == this.constants.DATA_TYPE.ILCE_TNM) {
      versiyon = localStorage.getItem(this.constants.VERSIYON.CLIENT.ISCILIK_FIYAT);
      tip = 'ilceler';
    }
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + tip;
  }


  async getHeader() {
    await this.token.getTokenInside();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'accessToken': localStorage.getItem("accessToken")
    });
  }
}
