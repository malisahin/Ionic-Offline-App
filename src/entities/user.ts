/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
export class User {
  userCode: string = "";
  userName: string = "";
  password: string = "";
  servis: string = "";
  servisUnvani: string = "";
  ikKod: string = "";
  ikAd: string = "";
  durum: string = "";
  userType: string = "";
  adi: string = "";
  soyadi: string = "";
  orgKod: string = "";
  dilKod: string = "";
  pb: string = "";
  ikBrans: string = "";
  eLibsDokuman: {};
  hatirla: string = "";
  labels = {};
  public keys: any = {
    userCode: "userCode",
    userName: "userName",
    password: "password",
    servis: "servis",
    servisUnvani: "servisUnvani",
    ikKod: "ikKod",
    ikAd: "ikAd",
    durum: "durum",
    userType: "userType",
    adi: "adi",
    soyadi: "soyadi",
    orgKod: "orgKod",
    dilKod: "dilKod",
    pb: "pb",
    ikBrans: "ikBrans",
    labels: "labels"
  };

  constructor() {

  }

  fillUser(item: any): User {
    item = item.message;
    let user = new User();
    user.dilKod = item.dilKod;
    user.durum = item.durum;
    user.ikAd = item.ikAdSoyad;
    user.ikKod = item.ikKod;
    user.orgKod = item.orgKod;
    user.servis = item.service;
    user.servisUnvani = item.serviceUnvani;
    user.userCode = item.userCode;
    user.password = item.password;
    user.userName = item.userName;
    user.userType = item.userType;
    user.eLibsDokuman = item.eLibsDokuman;
    user.ikBrans = item.ikBrans;
    user.labels = item.obj;
    this.saveUserData(user);
    return user;
  }

  saveUserData(user: User) {
    let pattern = new User();
    localStorage.setItem(pattern.keys.userCode, user.userCode);
    localStorage.setItem(pattern.keys.userName, user.userName);
    localStorage.setItem(pattern.keys.password, user.password);
    localStorage.setItem(pattern.keys.servis, user.servis);
    localStorage.setItem(pattern.keys.servisUnvani, user.servisUnvani);
    localStorage.setItem(pattern.keys.ikKod, user.ikKod);
    localStorage.setItem(pattern.keys.ikAd, user.ikAd);
    localStorage.setItem(pattern.keys.durum, user.durum);
    localStorage.setItem(pattern.keys.userType, user.userType);
    localStorage.setItem(pattern.keys.adi, user.adi);
    localStorage.setItem(pattern.keys.soyadi, user.soyadi);
    localStorage.setItem(pattern.keys.orgKod, user.orgKod);
    localStorage.setItem(pattern.keys.dilKod, user.dilKod);
    localStorage.setItem(pattern.keys.pb, user.pb);
    localStorage.setItem(pattern.keys.ikBrans, JSON.stringify(user.ikBrans));
    localStorage.setItem(pattern.keys.labels, JSON.stringify(user.labels));
  }

  getUserCode(): string {
    return localStorage.getItem("userCode");
  }

  getUserName(): string {
    return localStorage.getItem("userName");
  }

  getPb(): string {
    return localStorage.getItem("pb");
  }

  getOrgKod(): string {
    return localStorage.getItem("orgKod");
  }

  getSerKod(): string {
    return localStorage.getItem("servis");
  }

  getDilKod(): string {
    return localStorage.getItem("dilKod");
  }

  getIkAd(): string {
    return localStorage.getItem("ikAd");
  }
}
