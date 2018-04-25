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
    constructor() {

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