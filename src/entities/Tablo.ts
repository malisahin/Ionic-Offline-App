/**
 * @author mali.sahin
 * @date on 16-03-18.
 */

export class Tablo {
  constructor() {

  }

  public name: string;
  public versiyon: number;
  public first: number;
  public client_version = "";
  public server_version = "";


  public SER_MAM_ANAGRP_TNM() {
    let tablo = new Tablo();
    tablo.client_version = "SER_MAM_ANAGRP_TNM_CLIENT_VERSION";
    tablo.server_version = "SER_MAM_ANAGRP_TNM_SERVER_VERSION";
    return tablo;
  }

  public SER_MAM_TNM() {
    let tablo = new Tablo();
    tablo.client_version = "SER_MAM_TNM_CLIENT_VERSION";
    tablo.server_version = "SER_MAM_TNM_SERVER_VERSION";
    return tablo;
  }

  public SER_ISC_ISLARZGRP_TNM() {
    let tablo = new Tablo();
    tablo.client_version = "SER_MAM_TNM_CLIENT_VERSION";
    tablo.server_version = "SER_MAM_TNM_SERVER_VERSION";
    return tablo;
  }

  public SER_MAM_ISC_TNM() {
    let tablo = new Tablo();
    tablo.client_version = "SER_MAM_ISC_TNM_CLIENT_VERSION";
    tablo.server_version = "SER_MAM_ISC_TNM_SERVER_VERSION";
    return tablo;
  }

  public SER_MAM_MLZ_TNM() {
    let tablo = new Tablo();
    tablo.client_version = "SER_MAM_MLZ_TNM_CLIENT_VERSION";
    tablo.server_version = "SER_MAM_MLZ_TNM_SERVER_VERSION";
    return tablo;
  }

  public OFFLINE_ISC_FIYAT() {
    let tablo = new Tablo();
    tablo.client_version = "OFFLINE_ISC_FIYAT_CLIENT_VERSION";
    tablo.server_version = "OFFLINE_ISC_FIYAT_SERVER_VERSION";
    return tablo;
  }


  public OFFLINE_MLZ_FIYAT() {
    let tablo = new Tablo();
    tablo.client_version = "OFFLINE_MLZ_FIYAT_CLIENT_VERSION";
    tablo.server_version = "OFFLINE_MLZ_FIYAT_SERVER_VERSION";
    return tablo;
  }

  public nameList: {
    SER_MAM_ANAGRP_TNM: 'SER_MAM_ANAGRP_TNM',
    SER_MAM_TNM: 'SER_MAM_TNM',
    SER_ISC_ISLARZGRP_TNM: 'SER_ISC_ISLARZGRP_TNM',
    SER_MAM_ISC_TNM: 'SER_MAM_ISC_TNM',
    SER_MAM_MLZ_TNM: 'SER_MAM_MLZ_TNM',
    OFFLINE_ISC_FIYAT: 'OFFLINE_ISC_FIYAT',
    OFFLINE_MLZ_FIYAT: 'OFFLINE_MLZ_FIYAT',
  }
}
