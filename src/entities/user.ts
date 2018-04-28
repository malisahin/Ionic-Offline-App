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
    labels: {};
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
        user.servisUnvani = item.serviceUnvani
        user.userCode = item.userCode;
        user.userName = item.userName;
        user.userType = item.userType;
        user.eLibsDokuman = item.eLibsDokuman;
        user.ikBrans = item.ikBrans;
        user.labels = item.obj;
        this.saveUserData(user);
        return user;
    }

    saveUserData(user: User) {
        localStorage.setItem("userCode", user.userCode);
        localStorage.setItem("userName", user.userName);
        localStorage.setItem("password", user.password);
        localStorage.setItem("servis", user.servis);
        localStorage.setItem("servisUnvani", user.servisUnvani);
        localStorage.setItem("ikKod", user.ikKod);
        localStorage.setItem("ikAd", user.ikAd);
        localStorage.setItem("durum", user.durum);
        localStorage.setItem("userType", user.userType);
        localStorage.setItem("adi", user.adi);
        localStorage.setItem("soyadi", user.soyadi);
        localStorage.setItem("orgKod", user.orgKod);
        localStorage.setItem("dilKod", user.dilKod);
        localStorage.setItem("pb", user.pb);
        localStorage.setItem("ikBrans", user.ikBrans);
        localStorage.setItem("eLibsDokuman", JSON.stringify(user.eLibsDokuman));
        localStorage.setItem("ikBrans", JSON.stringify(user.ikBrans));
        localStorage.setItem("labels", JSON.stringify(user.labels));
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
}