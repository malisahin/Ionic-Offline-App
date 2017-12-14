/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
import { Injectable, Version } from '@angular/core';
import { Profil } from '../../entities/profil';
import { EProfiles } from '../../entities/enums/eProfil';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { NumberValueAccessor } from '@angular/forms/src/directives/number_value_accessor';

@Injectable()
export class ApiProvider {
  profil: Profil = new Profil();
  ACTIVE_PROFIL: EProfiles;
  orgKod: string;
  serKod: string;
  dilKod: string;
  ikKod: string;
  userName: string;
  paraBirimi: string;
  urlPrefixHizmet: string;
  urlPrefixOffline: string;
  urlPrefixKullanici: string;
  pageSize = 10000;
  first = 0;
  constructor(public http: Http) {


    console.log('Hello ApiProvider Provider');
    this.ACTIVE_PROFIL = EProfiles.LOCAL_DEV;
    let options = new RequestOptions();

    this.urlPrefixHizmet = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/hizmet/';
    this.urlPrefixOffline = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/offline/';
    this.urlPrefixKullanici = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/kullanici/';
  }

  getTokenUrl(username: string, password: string) {
    let tokenUrl = this.profil.getActiveProfil(this.ACTIVE_PROFIL).securityUrl + '/sos-security-service/oauth/token?grant_type=password&client_id=sos-api-enduser-mobile-client&client_secret=somesecret&';
    return tokenUrl + "username=" + username + "&password=" + password;
  }

  loginUrl: string = "";

  getKullaniciUrl(username: string): Observable<any> {

    return null;
  }

  getCagriListUrl() {

    return this.urlPrefixHizmet + this.orgKod + '/' + this.serKod + '/' + this.ikKod + '/param/ikCagriListesi';
  }

  setCagriUrl(siparisMi: string) {
    //url: App.domainUrl + '/sos-api/endpointrest/hizmet/' + userObj.orgKod + '/' + userObj.userName + '/' + userObj.dilKod + '/' + userObj.pB + '/' + App.siparisMi + '/CagriKaydet',
    return this.urlPrefixHizmet + this.orgKod + '/' + this.userName + '/' + this.dilKod + '/' + this.paraBirimi + '/' + siparisMi + '/' + '/CagriKaydet';
  }

  urunGuncelleUrl(versiyon: string, first: number) {
    // url: App.domainUrl + '/sos-api/endpointrest/offline/' + versiyon + '/' + first + '/' + pageSize + '/urunler',
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/urunler';
  }

  urunAnaGrupGuncelleUrl(versiyon: string) {
    //url: App.domainUrl + '/sos-api/endpointrest/offline/' + versiyon + '/mamAnagrp',
    return this.urlPrefixOffline + versiyon + '/mamAnagrp';
  }

  urunIscGuncelleUrl(versiyon: string, first: number) {
    //url: App.domainUrl + '/sos-api/endpointrest/offline/' + versiyon + '/' + first + '/' + pageSize + '/mamIsc',
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamIsc';
  }

  urunMlzGuncelleUrl(versiyon: string, first: number) {
    //url: App.domainUrl + '/sos-api/endpointrest/offline/' + versiyon + '/' + first + '/' + pageSize + '/mamMlz',
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamMlz';
  }

  islemArizaIscGuncelleUrl(versiyon: string, first: number) {
    //url: App.domainUrl + '/sos-api/endpointrest/offline/' + versiyon + '/' + first + '/' + pageSize + '/islArzIsc',
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/islArzIsc';
  }

  getFiyatlarUrl(versiyon: string, first: number, tip: string) {
    //url: App.domainUrl + '/sos-api/endpointrest/offline/' + versiyon + '/' + first + '/' + pageSize + '/' + tip,
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/' + tip;
  }

  getVersiyonUrl() {
    //url: App.domainUrl + '/sos-api/endpointrest/offline/versiyonKontrol',
    return this.urlPrefixOffline + 'versiyonKontrol';
  }

  garantiSorguUrl() {
    //url: App.domainUrl + '/sos-api/endpointrest/offline/garantiKontrol',
    return this.urlPrefixOffline + 'garantiKontrol';
  }

  getMesajlarUrl() {
    // url: App.domainUrl + '/sos-api/endpointrest/kullanici/' + userObj.userName + '/' + 'type' + '/' + 'NEW' + '/mesajlar',
    return this.urlPrefixKullanici + this.userName + '/type/NEW/mesajlar';
  }

  updateMamAnaGrupUrl() {
    // url: App.domainUrl + '/sos-api/endpointrest/hizmet/' + userObj.orgKod + '/' + userObj.userName + '/' + userObj.dilKod + '/' + userObj.pB + '/UpdateMamAnaGrp',
    return this.urlPrefixHizmet + this.orgKod + '/' + this.userName + '/' + this.dilKod + '/' + this.paraBirimi + '/UpdateMamAnaGrp';
  }
}