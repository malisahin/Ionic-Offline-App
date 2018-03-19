/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import { Injectable } from "@angular/core";
import { Profil } from "../../entities/profil";
import { EProfiles } from "../../entities/enums/eProfil";
import { RequestOptions, Headers } from "@angular/http";
import { Tablo } from "../../entities/Tablo";
import { HTTP } from "@ionic-native/http";
import { VersiyonProvider } from "../versiyon/versiyon";
import { ETable } from "../../entities/enums/ETable";


@Injectable()
export class ApiProvider {
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
  pageSize = 10;
  first = 0;
  table: Tablo = new Tablo;

  constructor(public http: HTTP, private versiyonProvider: VersiyonProvider) {


    console.log('Hello ApiProvider Provider');
    this.ACTIVE_PROFIL = EProfiles.LOCAL_DEV;
    let options = new RequestOptions();

    this.urlPrefixHizmet = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/hizmet/';
    this.urlPrefixOffline = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/offline/';
    this.urlPrefixKullanici = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/kullanici/';
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

  downloadUrunUrl(versiyon: string, first: number): Promise<string> {
    this.table.name = String(ETable.SER_MAM_TNM);
    return this.versiyonProvider.find(this.table.name).then(res => {
      return this.urlPrefixOffline + res[0].versiyon + '/' + res[0].first + '/' + this.pageSize + '/urunler';
    });
  }

  urunAnagrupDownloadUrl(versiyon: string) {
    return this.urlPrefixOffline + versiyon + '/mamAnagrp';
  }

  urunIscilikDownloadUrl(versiyon: string, first: number) {
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamIsc';
  }

  urunMalzemeDownloadUrl(versiyon: string, first: number) {
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamMlz';
  }

  islemArizaIscilikDownloadUrl(versiyon: string, first: number) {
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/islArzIsc';
  }

  fiyatlarDownloadUrl(versiyon: string, first: number, tip: string) {
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/' + tip;
  }

  getVersiyonUrl() {
    return this.urlPrefixOffline + 'versiyonKontrol';
  }

  garantiSorguUrl() {
    return this.urlPrefixOffline + 'garantiKontrol';
  }

  getMesajlarUrl() {
    return this.urlPrefixKullanici + this.userName + '/type/NEW/mesajlar';
  }

  updateMamAnaGrupUrl() {
    return this.urlPrefixHizmet + this.orgKod + '/' + this.userName + '/' + this.dilKod + '/' + this.paraBirimi + '/UpdateMamAnaGrp';
  }

  getHeader(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('accessToken', localStorage.getItem("accessToken"));
    return new RequestOptions({ headers: headers });
  }
}
