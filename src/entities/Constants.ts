import { BildirimlerPage } from "../pages/bildirimler/bildirimler";

/**
 * @author malisahin
 * @date 2018-04-08
 */

export class Constants {
  constructor() {}

  public static REMEMBER_ME = "REMEMBER_ME";

  public static USER_INFO = "USER_INFO";

  public static API_PAGE_SIZE = 10000;

  public static MESSAGE_DURATION = "MESSAGE_DURATION";

  public static DEFAULT_MESSAGE_DURATION = "3";

  public static CALLED_FROM = {
    TASKS: "TASKS",
    BILDIRIMLER_PAGE: "BILDIRIMLER_PAGE"
  };

  public static SYNC_TIME = "SYNC_TIME";

  public static SYNC = {
    TIME: "SYNC_TIME",
    MOMENT: "SYNC_MOMENT"
  };

  public static LENGTHS = {
    HIZMET_LIST: "HIZMET_LIST_LENGTH"
  };

  public static ORDER_BY = {
    RANDEVU_TAR_ASCENDES: " randevuTarihi ASC ",
    RANDEVU_TAR_DESCENDES: " randevuTarihi DESC "
  };

  public static SELECTED_THEME = "SELECTED_THEME";

  public static DATE_FORMAT = "dd.MM.yyyy hh:mm";

  public static ACCESS_TOKEN = "ACCESS_TOKEN";

  public static IS_ONLINE = "IS_ONLINE";

  public static LOGGED_IN = "LOGGED_IN";

  public static NETWORK = {
    ONLINE: "ONLINE",
    OFFLINE: "OFFLINE",
    NONE: "NONE"
  };

  public static STATUS = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR"
  };

  public static DETAY_TIPI = {
    MALZEME: "MLZ",
    ISCILIK: "ISC",
    YOL: "KM",
    DIGER: "DGR"
  };

  public static MASK = {
    PHONE_NUMBER: [
      "(",
      /[1-9]/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ],
    CARD_NUMBER: [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ],
    CARD_EXPIRY: [/[0-1]/, /\d/, "/", /[1-2]/, /\d/],
    ORDER_CODE: [/[a-zA-z]/, ":", /\d/, /\d/, /\d/, /\d/]
  };

  public static URUN_ANA_GRUP_TYPE = {
    ANA_GRUP_LISTE: "ANA_GRUP_LISTE",
    BASVURU_LISTE: "BASVURU_LISTE",
    COZUM_LISTE: "COZUM_LISTE"
  };

  public static TABLE_NAME = {
    URUN: "OFF_MAM_TNM",
    URUN_ANA_GRUP: "OFF_MAM_ANAGRP_TNM",
    URUN_ISCILIK: "OFF_MAM_ISC_TNM",
    URUN_MALZEME: "OFF_MAM_MLZ_TNM",
    SEHIR_TNM: "SEHIR_TNM",
    ILCE_TNM: "ILCE_TNM",
    MAHALLE_TNM: "MAHALLE_TNM",
    FIYAT: "OFF_FIYAT",
    ISLEM_ARIZA_ISCILIK: "OFF_ISC_ISLARZGRP_TNM"
  };

  public static SEARCH_TYPE = { LIKE: "LIKE", EXACT: "EXACT" };

  public static DATA_TYPE = {
    URUN: "URUN",
    URUN_ANA_GRUP: "URUN_ANA_GRUP",
    URUN_ISCILIK: "URUN_ISCILIK",
    URUN_MALZEME: "URUN_MALZEME",
    SEHIR_TNM: "SEHIR_TNM",
    ILCE_TNM: "ILCE_TNM",
    MAHALLE_TNM: "MAHALLE_TNM",
    ISCILIK_FIYAT: "ISCILIK_FIYAT",
    MALZEME_FIYAT: "MALZEME_FIYAT",
    ISLEM_ARIZA_ISCILIK: "ISLEM_ARIZA_ISCILIK"
  };

  public static GELEN_VERI = {
    GELEN_URUN: "GELEN_URUN",
    GELEN_URUN_ANA_GRUP: "GELEN_URUN_ANA_GRUP",
    GELEN_URUN_ISCILIK: "GELEN_URUN_ISCILIK",
    GELEN_URUN_MALZEME: "GELEN_URUN_MALZEME",
    GELEN_ISLEM_ARIZA_ISCILIK: "GELEN_ISLEM_ARIZA_ISCILIK",
    GELEN_MALZEME_FIYAT: "GELEN_MALZEME_FIYAT",
    GELEN_ISCILIK_FIYAT: "GELEN_ISCILIK_FIYAT",
    GELEN_SEHIR_TNM: "GELEN_SEHIR_TNM",
    GELEN_ILCE_TNM: "GELEN_ILCE_TNM",
    GELEN_MAHALLE_TNM: "GELEN_MAHALLE_TNM"
  };

  public static VERSIYON = {
    CLIENT: {
      URUN: "URUN_CLIENT_VERSIYON",
      URUN_ANA_GRUP: "URUN_ANA_GRUP_CLIENT_VERSIYON",
      URUN_ISCILIK: "URUN_ISCILIK_CLIENT_VERSIYON",
      URUN_MALZEME: "URUN_MALZEME_CLIENT_VERSIYON",
      ISLEM_ARIZA_ISCILIK: "ISLEM_ARIZA_ISCILIK_CLIENT_VERSIYON",
      MALZEME_FIYAT: "MALZEME_FIYAT_CLIENT_VERSIYON",
      ISCILIK_FIYAT: "ISCILIK_FIYAT_CLIENT_VERSIYON",
      SEHIR_TNM: "SEHIR_TNM_CLIENT_VERSIYON",
      ILCE_TNM: "ILCE_TNM_CLIENT_VERSIYON",
      MAHALLE_TNM: "MAHALLE_TNM_CLIENT_VERSIYON"
    },
    SERVER: {
      URUN: "URUN_SERVER_VERSIYON",
      URUN_ANA_GRUP: "URUN_ANA_GRUP_SERVER_VERSIYON",
      URUN_ISCILIK: "URUN_ISCILIK_SERVER_VERSIYON",
      URUN_MALZEME: "URUN_MALZEME_SERVER_VERSIYON",
      ISLEM_ARIZA_ISCILIK: "ISLEM_ARIZA_ISCILIK_SERVER_VERSIYON",
      MALZEME_FIYAT: "MALZEME_FIYAT_SERVER_VERSIYON",
      ISCILIK_FIYAT: "ISCILIK_FIYAT_SERVER_VERSIYON",
      SEHIR_TNM: "SEHIR_TNM_SERVER_VERSIYON",
      ILCE_TNM: "ILCE_TNM_SERVER_VERSIYON",
      MAHALLE_TNM: "MAHALLE_TNM_SERVER_VERSIYON"
    }
  };
  public static COLORS = {
    URUN: "",
    URUN_ANA_GRUP: "",
    URUN_ISCILIK: "",
    URUN_MALZEME: "",
    ISLEM_ARIZA_ISCILIK: "",
    MALZEME_FIYAT: "",
    ISCILIK_FIYAT: "",
    SEHIR_TNM: "",
    ILCE_TNM: "",
    MAHALLE_TNM: ""
  };

  public static ICONS = {
    URUN: "",
    URUN_ANA_GRUP: "",
    URUN_ISCILIK: "",
    URUN_MALZEME: "",
    ISLEM_ARIZA_ISCILIK: "",
    MALZEME_FIYAT: "",
    ISCILIK_FIYAT: "",
    SEHIR_TNM: "",
    ILCE_TNM: "",
    MAHALLE_TNM: ""
  };

  public static TABLE_SERVER_EQUIVALENT = {
    SER_MAM_ANAGRP_TNM: Constants.VERSIYON.SERVER.URUN_ANA_GRUP,
    SER_MAM_TNM: Constants.VERSIYON.SERVER.URUN,
    SER_MAM_ISC_TNM: Constants.VERSIYON.SERVER.URUN_ISCILIK,
    SER_MAM_MLZ_TNM: Constants.VERSIYON.SERVER.URUN_MALZEME,
    SER_ISC_ISLARZGRP_TNM: Constants.VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK,
    OFFLINE_MLZ_FIYAT: Constants.VERSIYON.SERVER.MALZEME_FIYAT,
    OFFLINE_ISC_FIYAT: Constants.VERSIYON.SERVER.ISCILIK_FIYAT,
    SER_SEHIR_TNM: Constants.VERSIYON.SERVER.SEHIR_TNM,
    SER_ILCE_TNM: Constants.VERSIYON.SERVER.ILCE_TNM,
    SER_MAHALLE_TNM: Constants.VERSIYON.SERVER.MAHALLE_TNM
  };
}
