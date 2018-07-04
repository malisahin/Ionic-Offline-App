/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
import {Injectable} from "@angular/core";
import {Profil} from "../../entities/profil";
import {EProfiles} from "../../entities/enums/eProfil";
import {Tablo} from "../../entities/Tablo";
import {HttpHeaders} from '@angular/common/http';
import {Constants} from "../../entities/Constants";
import {User} from "../../entities/user";

@Injectable()
export class ApiProvider {
  profil: Profil = new Profil();
  ACTIVE_PROFIL: EProfiles;
  urlPrefixHizmet: string;
  urlPrefixOffline: string;
  urlPrefixKullanici: string;
  pageSize: number;
  first = 0;
  tables: Tablo;
  user: User;

  constructor() {
    this.pageSize = Constants.API_PAGE_SIZE;
    this.ACTIVE_PROFIL = EProfiles.LOCAL_DEV;

    this.urlPrefixHizmet = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/hizmet/';
    this.urlPrefixOffline = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/offline/';
    this.urlPrefixKullanici = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/kullanici/';
    this.tables = new Tablo();
    this.user = new User();
  }

  getTokenUrl(userCode: String, password: String) {
    let tokenUrl = this.profil.getActiveProfil(this.ACTIVE_PROFIL).securityUrl + '/sos-security-service/oauth/token?grant_type=password&client_id=sos-api-enduser-mobile-client&client_secret=somesecret&';
    return tokenUrl + "username=" + userCode + "&password=" + password;
  }

  loginUrl: string = "";

  getKullaniciUrl() {
    return this.urlPrefixKullanici + this.user.getUserCode();
  }

  getCagriListUrl() {
    return this.urlPrefixHizmet + this.user.getOrgKod() + '/' + this.user.getSerKod() + '/' + this.user.getIkKod() + '/param/ikCagriListesi';
  }

  setCagriUrl(siparisMi: string) {
    return this.urlPrefixHizmet + this.user.getOrgKod() + '/' + this.user.getUserCode() + '/' + this.user.getDilKod() + '/' + this.user.getPb() + '/' + siparisMi + '/CagriKaydet';
  }

  downloadUrunUrl(first: number) {
    let versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.ISCILIK_FIYAT);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/urunler';
  }

  urunAnagrupDownloadUrl() {
    let versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.URUN_ANA_GRUP);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/mamAnagrp';
  }

  urunIscilikDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.URUN_ISCILIK);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamIsc';
  }

  urunMalzemeDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.URUN_MALZEME);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamMlz';
  }

  islemArizaIscilikDownloadUrl(first: number) {
    let versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.ISLEM_ARIZA_ISCILIK);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/islArzIsc';
  }

  fiyatlarDownloadUrl(first: number, tip: string) {
    let versiyon = "-1";
    if (tip == "malzemeFiyatListesi") {
      versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.MALZEME_FIYAT);
    } else {
      versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.ISCILIK_FIYAT);
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
    return this.urlPrefixKullanici + this.user.getUserCode() + '/type/NEW/mesajlar';
  }

  getMahalleTnmUrl(first: number) {
    let versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.MAHALLE_TNM);
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + first + "/" + this.pageSize + '/mahalleler';
  }

  getSehirIlceUrl(tip: string) {
    let versiyon = "-1";
    if (tip == Constants.DATA_TYPE.SEHIR_TNM) {
      versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.SEHIR_TNM);
      tip = 'sehirler';
    } else if (tip == Constants.DATA_TYPE.ILCE_TNM) {
      versiyon = localStorage.getItem(Constants.VERSIYON.CLIENT.ISCILIK_FIYAT);
      tip = 'ilceler';
    }
    versiyon = versiyon == null ? "-1" : versiyon;
    return this.urlPrefixOffline + versiyon + '/' + tip;
  }

  seriNoSorguUrl(mamKod: string) {
    return this.urlPrefixOffline + "seriNoSorgu/" + mamKod;
  }

  updateMamAnaGrupUrl() {
    return this.urlPrefixHizmet + this.user.getOrgKod() + "/" + this.user.getUserCode() + "/" + this.user.getDilKod() + "/" + this.user.getPb() + "/UpdateMamAnaGrp"
  }


  getHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'accessToken': localStorage.getItem(Constants.ACCESS_TOKEN)
    });
  }
}
