/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Injectable } from "@angular/core";
import { Profil } from "../../entities/profil";
import { EProfiles } from "../../entities/enums/eProfil";
import { Tablo } from "../../entities/Tablo";
import { VersiyonProvider } from "../versiyon/versiyon";
import { ETable } from "../../entities/enums/ETable";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Constants } from "../../entities/Constants";


@Injectable()
export class ApiProvider {
  constants: Constants;
  profil: Profil = new Profil();
  ACTIVE_PROFIL: EProfiles;
  orgKod: string = "ECAMERKEZ";
  serKod: string = "ECA_TEST";
  dilKod: string;
  ikKod: string = "5961";
  userName: string;
  paraBirimi: string;
  urlPrefixHizmet: string;
  urlPrefixOffline: string;
  urlPrefixKullanici: string;
  pageSize: number;;
  first = 0;
  tables: Tablo;

  constructor(public http: HttpClient,
    private versiyonProvider: VersiyonProvider) {
    this.constants = new Constants();
    this.pageSize = this.constants.API_PAGE_SIZE;
    console.log('Hello ApiProvider Provider');
    this.ACTIVE_PROFIL = EProfiles.LOCAL_DEV;

    this.urlPrefixHizmet = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/hizmet/';
    this.urlPrefixOffline = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/offline/';
    this.urlPrefixKullanici = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/kullanici/';
    this.tables = new Tablo();
  }

  getTokenUrl(username: string, password: string) {
    username = 'ECAMERKEZ';
    password = 'EMAR6464';
    let tokenUrl = this.profil.getActiveProfil(this.ACTIVE_PROFIL).securityUrl + '/sos-security-service/oauth/token?grant_type=password&client_id=sos-api-enduser-mobile-client&client_secret=somesecret&';
    return tokenUrl + "username=" + username + "&password=" + password;
  }

  loginUrl: string = "";

  getKullaniciUrl(username: string) {
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
    let versiyon = localStorage.getItem(this.tables.OFFLINE_ISC_FIYAT().client_version);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/urunler';
  }

  urunAnagrupDownloadUrl() {
    let versiyon = localStorage.getItem(this.tables.SER_MAM_ANAGRP_TNM().client_version);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/mamAnagrp';
  }

  urunIscilikDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(this.tables.SER_MAM_ISC_TNM().client_version);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamIsc';
  }

  urunMalzemeDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(this.tables.SER_MAM_MLZ_TNM().client_version);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamMlz';
  }

  islemArizaIscilikDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(this.tables.SER_ISC_ISLARZGRP_TNM().client_version);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/islArzIsc';
  }

  fiyatlarDownloadUrl(first: number, tip: string) {
    let versiyon = "-1";
    if (tip == "malzemeFiyatListesi") {
      versiyon = localStorage.getItem(this.tables.OFFLINE_MLZ_FIYAT().client_version);
    } else {
      versiyon = localStorage.getItem(this.tables.OFFLINE_ISC_FIYAT().client_version);
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

  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accessToken': localStorage.getItem("accessToken")
    });
    return headers;
  }
}
