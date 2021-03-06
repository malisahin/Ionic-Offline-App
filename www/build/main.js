webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anasayfa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_header_header__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_theme_theme__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * @author mali.sahin
 * @since 19.05.2018
 */
var Anasayfa = (function () {
    function Anasayfa(navCtrl, navParams, headerProvider, util, logger, hizmetDao, themeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headerProvider = headerProvider;
        this.util = util;
        this.logger = logger;
        this.hizmetDao = hizmetDao;
        this.themeProvider = themeProvider;
        this.cagriSayisi = 0;
        this.duyuruSayisi = 0;
        this.uyariSayisi = 0;
        this.guncellemeSayisi = 10;
        this.logoPath = '';
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.loadGuncellemeSayisi();
        this.loadMesajSayilari();
        this.loadHizmetSayisi();
    }
    Anasayfa.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Anasayfa');
        this.logoPath = this.themeProvider.getAnasayfaLogo();
    };
    Anasayfa.prototype.sayfayaGit = function (page, param) {
        this.navCtrl.push(page, param);
    };
    Anasayfa.prototype.loadGuncellemeSayisi = function () {
        this.guncellemeSayisi = this.headerProvider.loadGuncellemeSayisi();
    };
    /*  async loadMesajSayilari() {
        // this.duyuruSayisi = await this.mesajDao.loadDuyuruSayisi();
        //this.uyariSayisi = await this.mesajDao.loadUyariSayisi();
      }*/
    Anasayfa.prototype.loadHizmetSayisi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.hizmetDao.findAcikHizmetSayisi()];
                    case 1:
                        _a.cagriSayisi = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Anasayfa.prototype.loadMesajSayilari = function () {
        var duyuruSayisi = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].COUNTS.DUYURULAR);
        if (this.util.isEmpty(duyuruSayisi))
            duyuruSayisi = "0";
        this.duyuruSayisi = Number(duyuruSayisi);
        this.logger.info("Duyuru Sayısı " + this.duyuruSayisi);
        var uyariSayisi = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].COUNTS.UYARILAR);
        if (this.util.isEmpty(uyariSayisi))
            uyariSayisi = "0";
        this.uyariSayisi = Number(uyariSayisi);
        this.logger.info("Uyarı Sayısı " + this.uyariSayisi);
    };
    Anasayfa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-anasayfa',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\anasayfa\anasayfa.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background home-content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <div class="logo">\n\n          <img [src]="logoPath">\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4>\n\n        <ion-card (click)="sayfayaGit(\'CagrilarPage\',{})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="ios-call" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Çağrılar</span>\n\n            </div>\n\n          </ion-item>\n\n          <div class="announcements">\n\n            {{cagriSayisi}}\n\n          </div>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4>\n\n        <ion-card (click)="sayfayaGit(\'BildirimlerPage\', {type:\'WARN\'})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="notifications" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Duyurular</span>\n\n            </div>\n\n          </ion-item>\n\n\n\n\n\n          <div class="announcements">\n\n            {{duyuruSayisi}}\n\n          </div>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4>\n\n        <ion-card (click)="sayfayaGit(\'BildirimlerPage\',{type:\'URGENT\'})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="notifications" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Uyarılar</span>\n\n            </div>\n\n          </ion-item>\n\n\n\n          <div class="announcements">\n\n            {{uyariSayisi}}\n\n          </div>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4>\n\n        <ion-card (click)="sayfayaGit(\'GuncellemePage\',{})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="md-refresh" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Güncelleme </span>\n\n            </div>\n\n          </ion-item>\n\n\n\n          <div class="announcements">\n\n            {{guncellemeSayisi}}\n\n          </div>\n\n\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4>\n\n        <ion-card (click)="sayfayaGit(\'BilgiSorguPage\', {})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="md-help" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span> Bilgi Sorgu</span>\n\n            </div>\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4>\n\n        <ion-card (click)="sayfayaGit(\'AyarlarPage\',{})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="settings" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Ayarlar</span>\n\n            </div>\n\n          </ion-item>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-item float-left style="width: 40%">\n\n    <ion-label class="pull-left">SİSTEK© 2018</ion-label>\n\n  </ion-item>\n\n  <ion-item float-right style="width: 60%">\n\n    <ion-label class="pull-right">Servis Otomasyon Sistemi</ion-label>\n\n  </ion-item>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\anasayfa\anasayfa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_header_header__["a" /* HeaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_4__providers_theme_theme__["a" /* ThemeProvider */]])
    ], Anasayfa);
    return Anasayfa;
}());

//# sourceMappingURL=anasayfa.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_dao_mesajlar_dao__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_header__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cagrilar_cagrilar__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bildirimler_bildirimler__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_guncelleme_guncelleme__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_anasayfa_anasayfa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */











var HeaderComponent = (function () {
    function HeaderComponent(nav, mesajDao, util, headerProvider, hizmetDao, logger) {
        this.nav = nav;
        this.mesajDao = mesajDao;
        this.util = util;
        this.headerProvider = headerProvider;
        this.hizmetDao = hizmetDao;
        this.logger = logger;
        this.index = 1;
        this.cagriSayisi = 0;
        this.duyuruSayisi = 0;
        this.uyariSayisi = 0;
        this.guncellemeSayisi = 10;
        //logger.warn("Gidilen sayfa " + String(this.index));
        this.updateHeader();
    }
    HeaderComponent.prototype.ionViewDidLoad = function () {
        this.cagrilarPage = __WEBPACK_IMPORTED_MODULE_5__pages_cagrilar_cagrilar__["a" /* CagrilarPage */];
        this.bildirimlerPage = __WEBPACK_IMPORTED_MODULE_6__pages_bildirimler_bildirimler__["a" /* BildirimlerPage */];
        this.guncellemePage = __WEBPACK_IMPORTED_MODULE_7__pages_guncelleme_guncelleme__["a" /* GuncellemePage */];
        this.anaSayfa = __WEBPACK_IMPORTED_MODULE_8__pages_anasayfa_anasayfa__["a" /* Anasayfa */];
    };
    HeaderComponent.prototype.sayfayaGit = function (page, param) {
        this.nav.push(page, param);
    };
    HeaderComponent.prototype.closeApplicationConfirm = function () {
        this.headerProvider.closeApplicationConfirm();
    };
    HeaderComponent.prototype.loadGuncellemeSayisi = function () {
        this.guncellemeSayisi = this.headerProvider.loadGuncellemeSayisi();
    };
    HeaderComponent.prototype.loadMesajSayilari = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.mesajDao.loadDuyuruSayisi()];
                    case 1:
                        _a.duyuruSayisi = _c.sent();
                        this.logger.info("Duyuru Sayısı " + this.duyuruSayisi);
                        _b = this;
                        return [4 /*yield*/, this.mesajDao.loadUyariSayisi()];
                    case 2:
                        _b.uyariSayisi = _c.sent();
                        this.logger.info("Uyarı Sayısı " + this.uyariSayisi);
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.loadHizmetSayisi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cagriSayisi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hizmetDao.findAcikHizmetSayisi()];
                    case 1:
                        cagriSayisi = _a.sent();
                        //let cagriSayisi = localStorage.getItem(Constants.COUNTS.CAGRILAR);
                        if (this.util.isNotEmpty(cagriSayisi))
                            this.cagriSayisi = Number(cagriSayisi);
                        else
                            this.cagriSayisi = 0;
                        this.logger.info("Çağrı Sayısı " + String(this.cagriSayisi));
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.updateHeader = function () {
        this.loadGuncellemeSayisi();
        this.loadMesajSayilari();
        this.loadHizmetSayisi();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'icon-header',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\header\header.html"*/'<ion-grid>\n\n  <ion-row>\n\n\n\n    <ion-col col-8 col-sm-8 col-lg-8 col-md-8 col-xl-8>\n\n      <ion-buttons>\n\n        <button ion-button item-left icon-only (click)="sayfayaGit(\'CagrilarPage\',{})">\n\n          <ion-icon name="ios-call"></ion-icon>\n\n          <div class="bar-announcements">{{cagriSayisi}}</div>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="sayfayaGit(\'BildirimlerPage\',{type:\'WARN\'})">\n\n          <ion-icon name="volume-up"></ion-icon>\n\n          <div class="bar-announcements">{{duyuruSayisi}}</div>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="sayfayaGit(\'BildirimlerPage\',{type:\'URGENT\'})">\n\n          <ion-icon name="notifications"></ion-icon>\n\n          <div class="bar-announcements">{{uyariSayisi}}</div>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="sayfayaGit(\'GuncellemePage\',{})">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n          <div class="bar-announcements">{{guncellemeSayisi}}</div>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-sm-4 col-lg-4 col-md-4 col-xl-4>\n\n      <ion-buttons style="float: right;">\n\n        <button ion-button icon-only (click)="sayfayaGit(\'Anasayfa\',{})">\n\n          <ion-icon name="home"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="closeApplicationConfirm()">\n\n          <ion-icon name="exit"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n<!--\n\n<ion-tabs tabs-only [selectedIndex]="index" color="primary">\n\n\n\n  <ion-tab tabIcon="list-box" [root]="cagrilarPage" tabBadge="{{cagriSayisi}}" tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <ion-tab tabIcon="volume-up" [root]="bildirimlerPage" tabBadge="{{duyuruSayisi}}" tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <ion-tab tabIcon="notifications" [root]="bildirimlerPage" tabBadge="{{uyariSayisi}}" tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <ion-tab tabIcon="md-refresh" [root]="guncellemePage" tabBadge="{{guncellemeSayisi}}"\n\n           tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <div float-right>\n\n    <ion-tab tabIcon="home" [root]="anaSayfa"></ion-tab>\n\n    &lt;!&ndash;<ion-tab tabIcon="exit" [root]="closeApplicationConfirm"></ion-tab>&ndash;&gt;\n\n  </div>\n\n\n\n</ion-tabs>-->'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_dao_mesajlar_dao__["a" /* MesajlarDao */],
            __WEBPACK_IMPORTED_MODULE_10__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_header_header__["a" /* HeaderProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_9__providers_logger_logger__["a" /* LoggerProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesaj; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var Mesaj = (function () {
    function Mesaj() {
    }
    Mesaj.prototype.fillMesajlar = function (res) {
        var parsedList = [];
        var mesajList = res.message;
        for (var i = 0; i < mesajList.length; i++) {
            //mesajList.forEach(function (item) {
            var item = mesajList[i];
            var mesaj = new Mesaj();
            mesaj.status = item.status;
            mesaj.subject = item.subject;
            mesaj.bitisTarihi = item.endTime;
            mesaj.basTarihi = item.startTime;
            mesaj.valid = item.valid;
            mesaj.gonderen = item.gonderen;
            mesaj.aciklama = item.expl;
            mesaj.id = item.id;
            mesaj.type = item.type;
            parsedList.push(mesaj);
        }
        return new Promise(function (resolve) {
            return resolve(parsedList);
        });
    };
    return Mesaj;
}());

//# sourceMappingURL=mesajlar.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdresDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdresDao = (function () {
    function AdresDao(http, dbProvider, util, baseDao) {
        this.http = http;
        this.dbProvider = dbProvider;
        this.util = util;
        this.baseDao = baseDao;
    }
    AdresDao.prototype.insertSehirList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO SEHIR_TNM(sehirKodu, sehirAdi) VALUES (?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.sehirKodu, item.sehirAdi];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    AdresDao.prototype.insertIlceList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO ILCE_TNM(sehirKodu, ilceKodu, ilceAdi) VALUES(?,?,?)";
                    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                        var item = list_2[_i];
                        var params = [item.sehirKodu, item.ilceKodu, item.ilceAdi];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    AdresDao.prototype.insertMahalleList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO MAHALLE_TNM(sehirKodu, ilceKodu, mahalleAdi, mahalleKodu) VALUES(?,?,?,?)";
                    for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
                        var item = list_3[_i];
                        var params = [item.sehirKodu, item.ilceKodu, item.mahalleAdi, item.mahalleKodu];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    AdresDao.prototype.getIlceList = function (sehirKodu) {
        var query = "SELECT * FROM ILCE_TNM WHERE sehirKodu = ?";
        var params = [sehirKodu];
        return this.baseDao.execute(query, params);
    };
    AdresDao.prototype.getSehirList = function () {
        var query = "SELECT sehirKodu,sehirAdi FROM SEHIR_TNM GROUP BY sehirKodu, sehirAdi";
        return this.baseDao.execute(query, []);
    };
    AdresDao.prototype.getMahalleList = function (ilceKodu) {
        var query = "SELECT * FROM MAHALLE_TNM  WHERE ilceKodu = ? ";
        var params = [ilceKodu];
        return this.baseDao.execute(query, params);
    };
    AdresDao.prototype.getIlce = function (ilce) {
        var query = this.prepareIlceQuery(ilce);
        return this.baseDao.execute(query, []);
    };
    AdresDao.prototype.prepareIlceQuery = function (ilce) {
        var searchType = __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT;
        var query = "SELECT * FROM ILCE_TNM WHERE 1=1";
        var whereQuery = [];
        if (this.util.isNotEmpty(ilce.ilceAdi)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'ilceAdi', ilce.ilceAdi));
        }
        if (this.util.isNotEmpty(ilce.sehirKodu)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'sehirKodu', ilce.sehirKodu));
        }
        if (this.util.isNotEmpty(ilce.ilceKodu)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'ilceKodu', ilce.ilceKodu));
        }
        return this.util.prepareQuery(query, whereQuery, searchType);
    };
    AdresDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__["a" /* BaseDao */]])
    ], AdresDao);
    return AdresDao;
}());

//# sourceMappingURL=adres-dao.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BildirimlerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_mesajlar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mesaj_detail_mesaj_detail__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */










var BildirimlerPage = (function () {
    function BildirimlerPage(navCtrl, navParams, mesajProvider, util, modalController, themeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mesajProvider = mesajProvider;
        this.util = util;
        this.modalController = modalController;
        this.themeProvider = themeProvider;
        this.mesajList = [];
        this.searchTip = "BEGINNING";
        this.mesajTip = this.navParams.data.type;
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.pageable = new __WEBPACK_IMPORTED_MODULE_5__entities_Pageable__["a" /* Pageable */]();
        this.fetchList(this.searchTip);
    }
    BildirimlerPage.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mesajProvider.getDataFromApi(__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].CALLED_FROM.BILDIRIMLER_PAGE)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.fetchList(this.searchTip)];
                    case 2:
                        _a.sent();
                        if (this.util.isOnline())
                            this.util.success(this.mesajBaslik + " güncellenmiştir.");
                        return [2 /*return*/];
                }
            });
        });
    };
    BildirimlerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BildirimlerPage');
        this.mesajBaslik = this.mesajTip == 'WARN' ? 'Duyurular' : 'Uyarılar';
    };
    BildirimlerPage.prototype.guncelle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchData()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BildirimlerPage.prototype.fetchList = function (tip) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mes, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mes = new __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__["a" /* Mesaj */]();
                        mes.type = this.mesajTip;
                        this.pageable.tip = tip;
                        _a = this;
                        return [4 /*yield*/, this.mesajProvider.fetchList(mes, this.pageable)];
                    case 1:
                        _a.mesajList = _b.sent();
                        setTimeout(function () {
                            _this.header.updateHeader();
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    BildirimlerPage.prototype.mesajDetayinaGit = function (event, id) {
        var data = { id: id };
        var detailComponent = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__components_mesaj_detail_mesaj_detail__["a" /* MesajDetailComponent */], data, { cssClass: this.util.getSelectedTheme() });
        detailComponent.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("header"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_header_header__["a" /* HeaderComponent */])
    ], BildirimlerPage.prototype, "header", void 0);
    BildirimlerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bildirimler',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\bildirimler\bildirimler.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n  <ion-title class="page-title">{{mesajBaslik}}</ion-title>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-sm>\n\n      <button ion-button round full (click)="guncelle();" color="secondary">\n\n        <span class="icon-right">\n\n          <i class="fas fa-sync-alt"></i> Güncelle</span>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card *ngFor="let mesaj of mesajList" class="card-box" (click)="mesajDetayinaGit($event, mesaj.id)">\n\n    <p>\n\n      <ion-label>\n\n        <i class="fas fa-user"></i>\n\n        <strong> {{mesaj.gonderen}} </strong>\n\n      </ion-label>\n\n    </p>\n\n    <p>\n\n      <ion-label>\n\n        <i class="fas fa-envelope"></i>\n\n        {{mesaj.subject}}\n\n      </ion-label>\n\n    </p>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-4 col-md-4>\n\n      <button ion-button color="light" class="pull-left" (click)="fetchList(\'FIRST\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-double-left"></i>\n\n        </ion-label>\n\n      </button>\n\n      <button ion-button color="light" class="pull-left" (click)="fetchList(\'PREVIOUS\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-left"></i>\n\n        </ion-label>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <button ion-button color="light" class="pull-right" (click)="fetchList(\'NEXT\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-right"></i>\n\n        </ion-label>\n\n      </button>\n\n      <button ion-button color="light" class="pull-right" (click)="fetchList(\'LAST\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-double-right"></i>\n\n        </ion-label>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\bildirimler\bildirimler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_mesajlar__["a" /* MesajlarProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_theme_theme__["a" /* ThemeProvider */]])
    ], BildirimlerPage);
    return BildirimlerPage;
}());

//# sourceMappingURL=bildirimler.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesajlarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesajlar_dao_mesajlar_dao__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var MesajlarProvider = (function () {
    function MesajlarProvider(http, api, mesajDao, tokenProvider, util) {
        this.http = http;
        this.api = api;
        this.mesajDao = mesajDao;
        this.tokenProvider = tokenProvider;
        this.util = util;
    }
    MesajlarProvider.prototype.setAlertFirst = function () {
        this.util.success("Token  is Ok");
    };
    MesajlarProvider.prototype.setAlertLast = function () {
        this.util.success("Notifications is Ok");
    };
    MesajlarProvider.prototype.getDataFromApi = function (calledFrom) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getMesajlarUrl();
                        return [4 /*yield*/, this.tokenProvider.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (this.util.isOnline()) {
                            return [2 /*return*/, this.getMesajlar(url, header)];
                        }
                        else if (calledFrom != __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].CALLED_FROM.TASKS) {
                            this.util.ifOffline();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MesajlarProvider.prototype.getMesajlar = function (url, header) {
        return __awaiter(this, void 0, void 0, function () {
            var res, mesaj, list, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 1:
                        res = _a.sent();
                        mesaj = new __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__["a" /* Mesaj */]();
                        return [4 /*yield*/, mesaj.fillMesajlar(res)];
                    case 2:
                        list = _a.sent();
                        return [4 /*yield*/, this.mesajDao.insertList(list)];
                    case 3:
                        item = _a.sent();
                        return [4 /*yield*/, this.mesajDao.loadMesajCounts()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(item);
                            })];
                }
            });
        });
    };
    MesajlarProvider.prototype.fetchList = function (mes, pageable) {
        return __awaiter(this, void 0, void 0, function () {
            var mesajList, data, i, mesaj, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mesajList = [];
                        return [4 /*yield*/, this.mesajDao.getList(mes, pageable)];
                    case 1:
                        data = _a.sent();
                        data = data.res.rows;
                        if (data.length > 0) {
                            for (i = 0; i < data.length; i++) {
                                mesaj = new __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__["a" /* Mesaj */]();
                                item = data.item(i);
                                mesaj.aciklama = item.aciklama;
                                mesaj.gonderen = this.util.isNotEmpty(item.gonderen) ? item.gonderen : "SISTEM";
                                mesaj.basTarihi = item.basTarihi;
                                mesaj.bitisTarihi = item.bitisTarihi;
                                mesaj.subject = item.subject;
                                mesaj.type = item.type;
                                mesaj.valid = item.valid;
                                mesaj.id = item.id;
                                mesajList.push(mesaj);
                            }
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(mesajList);
                            })];
                }
            });
        });
    };
    MesajlarProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__mesajlar_dao_mesajlar_dao__["a" /* MesajlarDao */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */], __WEBPACK_IMPORTED_MODULE_6__util_util__["a" /* UtilProvider */]])
    ], MesajlarProvider);
    return MesajlarProvider;
}());

//# sourceMappingURL=mesajlar.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UrunDao = (function () {
    function UrunDao(baseDao, dbProvider, util) {
        this.baseDao = baseDao;
        this.dbProvider = dbProvider;
        this.util = util;
    }
    UrunDao.prototype.insertOne = function (item) {
        var INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_TNM (mamAnagrp,mamKod, mamAdi,seriMetod,surec,durum) VALUES (?,?,?,?,?,?)";
        var params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
        return this.baseDao.execute(INSERT_QUERY, params);
    };
    UrunDao.prototype.getUrunAndUrunAnaGrup = function (urunKodu) {
        var query = 'Select mam.*,  anaGrp.ad as anaGrupAdi from OFF_MAM_ANAGRP_TNM anaGrp, OFF_MAM_TNM mam WHERE anaGrp.mamAnaGrp = mam.mamAnaGrp and anaGrp.tip=? and mam.mamKod =? ';
        var params = [__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE, urunKodu];
        return this.baseDao.execute(query, params);
    };
    UrunDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO OFF_MAM_TNM (mamAnagrp,mamKod, mamAdi,seriMetod,surec,durum) VALUES (?,?,?,?,?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    UrunDao.prototype.update = function (item) {
        var UPDATE_QUERY = "UPDATE OFF_MAM_TNM SET mamAdi = ?,seriMetod =?,surec=?,durum=? WHERE mamKod=?";
        var params = [item.mamAnagrp, item.mamKod, item.mamAdi, item.seriMetod, item.surec, item.durum];
        return this.baseDao.execute(UPDATE_QUERY, params);
    };
    UrunDao.prototype.find = function (item) {
        //let query = this.prepareSelectQuery(item);
        //return this.baseDao.execute(query, []);
    };
    UrunDao.prototype.prepareSelectQuery = function (item, searchType) {
        var query = 'SELECT * FROM OFF_MAM_TNM WHERE 1=1';
        var searchQuery = [];
        if (this.util.isNotEmpty(item.mamAnagrp)) {
            query += " AND mamAnagrp='" + item.mamAnagrp + "'";
        }
        if (this.util.isNotEmpty(item.mamKod))
            searchQuery.push(this.util.prepareWhereQuery(searchType, 'mamKod', item.mamKod));
        if (this.util.isNotEmpty(item.mamAdi))
            searchQuery.push(this.util.prepareWhereQuery(searchType, 'mamAdi', item.mamAdi));
        if (this.util.isNotEmpty(item.seriMetod))
            searchQuery.push(this.util.prepareWhereQuery(searchType, 'seriMetod', item.seriMetod));
        if (this.util.isNotEmpty(item.surec))
            searchQuery.push(this.util.prepareWhereQuery(searchType, 'surec', item.surec));
        if (this.util.isNotEmpty(item.durum))
            searchQuery.push(this.util.prepareWhereQuery(searchType, 'durum', item.durum));
        return this.util.prepareQuery(query, searchQuery, searchType);
    };
    UrunDao.prototype.getList = function (item, type, first, pageSize) {
        var query = this.prepareSelectQuery(item, type);
        return this.baseDao.getList(query, "mamKod", item, type, first, pageSize, true);
    };
    UrunDao.prototype.deleteAll = function () {
        var query = "DELETE FROM OFF_MAM_TNM";
        return this.baseDao.execute(query, []);
    };
    UrunDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__["a" /* BaseDao */],
            __WEBPACK_IMPORTED_MODULE_3__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__util_util__["a" /* UtilProvider */]])
    ], UrunDao);
    return UrunDao;
}());

//# sourceMappingURL=urun-dao.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunMalzemeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun_malzeme__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_malzeme_dao_urun_malzeme_dao__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var UrunMalzemeProvider = (function () {
    function UrunMalzemeProvider(http, urunMalzemeDao, token, util, api) {
        this.http = http;
        this.urunMalzemeDao = urunMalzemeDao;
        this.token = token;
        this.util = util;
        this.api = api;
    }
    UrunMalzemeProvider.prototype.downloadUrunMalzeme = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var header, data, urunMalzeme, list, res_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getDataFromApi(first, header)];
                    case 2:
                        data = _a.sent();
                        urunMalzeme = new __WEBPACK_IMPORTED_MODULE_3__entities_urun_malzeme__["a" /* UrunMalzeme */]();
                        return [4 /*yield*/, urunMalzeme.fillUrunMalzeme(data)];
                    case 3:
                        list = _a.sent();
                        return [4 /*yield*/, this.urunMalzemeDao.insertList(list)];
                    case 4:
                        res_1 = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res_1);
                            })];
                    case 5:
                        this.util.ifOffline();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UrunMalzemeProvider.prototype.getDataFromApi = function (first, header) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = this.api.urunMalzemeDownloadUrl(first);
                return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
            });
        });
    };
    UrunMalzemeProvider.prototype.getList = function (filter, searchType, pageable) {
        return this.urunMalzemeDao.getList(filter, searchType, pageable);
    };
    UrunMalzemeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__urun_malzeme_dao_urun_malzeme_dao__["a" /* UrunMalzemeDao */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */]])
    ], UrunMalzemeProvider);
    return UrunMalzemeProvider;
}());

//# sourceMappingURL=urun-malzeme.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunMalzeme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityUtil__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var UrunMalzeme = (function (_super) {
    __extends(UrunMalzeme, _super);
    function UrunMalzeme() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mamKod = null;
        _this.mlzKod = null;
        _this.mlzAdi = null;
        _this.durum = null;
        _this.kdvOran = null;
        return _this;
    }
    UrunMalzeme.prototype.fillUrunMalzeme = function (res) {
        var parsedList = [];
        var urunMalzemeList = res.message[0].liste;
        var urunMalzemeVersiyon = res.message[0].versiyon;
        /**
         *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
         */
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.URUN_MALZEME, urunMalzemeList.length);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_MALZEME, urunMalzemeVersiyon);
        this.indirilenVeriyiHesapla(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME, urunMalzemeList.length);
        urunMalzemeList.forEach(function (item) {
            var newItem = new UrunMalzeme();
            newItem.mamKod = item.mamKod;
            newItem.durum = item.mamKod;
            newItem.mlzAdi = item.mlzAdi;
            newItem.mlzKod = item.mlzKod;
            parsedList.push(newItem);
        });
        return new Promise(function (resolve) {
            resolve(parsedList);
        });
    };
    return UrunMalzeme;
}(__WEBPACK_IMPORTED_MODULE_1__EntityUtil__["a" /* EntityUtil */]));

//# sourceMappingURL=urun-malzeme.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemArizaIscilikDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IslemArizaIscilikDao = (function () {
    function IslemArizaIscilikDao(dbProvider, util, logger, baseDao) {
        this.dbProvider = dbProvider;
        this.util = util;
        this.logger = logger;
        this.baseDao = baseDao;
    }
    IslemArizaIscilikDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        if (list.length == 0)
            return new Promise(function (res) { return res(0); });
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum) VALUES (?,?,?,?,?,?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.mamAnaGrp, item.islGrp, item.islGrpAd, item.arzGrp, item.arzGrpAd, item.iscKod, item.durum];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    IslemArizaIscilikDao.prototype.getPage = function (item, searchType, pageAble) {
        var query = this.prepareQuery(item, searchType);
        return this.baseDao.getList(query, "islemGrp, arizaGrp, iscKod", item, searchType, pageAble.first, pageAble.pageSize, true);
    };
    IslemArizaIscilikDao.prototype.getIslemGrupPage = function (item, searchText) {
        var query = "SELECT islemGrp,islemGrpAdi FROM OFF_ISC_ISLARZGRP_TNM WHERE mamAnaGrp = '" + item.mamAnaGrp + "' and durum='AKTIF' AND (";
        query += " islemGrp like '%" + searchText + "%'";
        query += " OR islemGrpAdi like '%" + searchText + "%'";
        query += ') GROUP BY islemGrp,islemGrpAdi';
        return this.baseDao.execute(query, []);
        //return this.baseDao.getList(query, "islemGrp", item, searchType, pageAble.first, pageAble.pageSize, true);
    };
    IslemArizaIscilikDao.prototype.getArizaGrupPage = function (item, searchText) {
        var query = "SELECT arizaGrp,arizaGrpAdi FROM OFF_ISC_ISLARZGRP_TNM " +
            "WHERE mamAnaGrp = '" + item.mamAnaGrp + "' and islemGrp = '" + item.islGrp + "' and durum='AKTIF' AND ( ";
        query += " arizaGrp like '%" + searchText + "%'";
        query += " OR arizaGrpAdi like '%" + searchText + "%'";
        query += ') GROUP BY arizaGrp,arizaGrpAdi';
        return this.baseDao.execute(query, []);
        // return this.baseDao.getList(query, "arizaGrp", item, searchType, pageAble.first, pageAble.pageSize, true);
    };
    IslemArizaIscilikDao.prototype.getPIYKoduPage = function (item, mamKod, searchText) {
        var query = "SELECT t.*,i.iscAdi FROM OFF_ISC_ISLARZGRP_TNM t, OFF_MAM_TNM mam, OFF_MAM_ISC_TNM i WHERE t.mamAnaGrp = mam.mamAnaGrp" +
            " and mam.mamKod = i.mamKod and t.iscKod = i.iscKod and mam.mamKod =  '" + mamKod + "'";
        query += " and islemGrp = '" + item.islGrp + "'";
        query += " and arizaGrp = '" + item.arzGrp + "'";
        query += " AND ( t.iscKod like '%" + searchText + "%' OR i.iscAdi like '%" + searchText + "%')";
        return this.baseDao.execute(query, []);
    };
    IslemArizaIscilikDao.prototype.prepareQuery = function (item, searchType) {
        var query = "SELECT * FROM OFF_ISC_ISLARZGRP_TNM WHERE 1=1";
        var whereQuery = [];
        if (this.util.isNotEmpty(item.arzGrp)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'arzGrp', item.arzGrp));
        }
        if (this.util.isNotEmpty(item.arzGrpAd)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'arzGrpAd', item.arzGrpAd));
        }
        if (this.util.isNotEmpty(item.durum)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'durum', item.durum));
        }
        if (this.util.isNotEmpty(item.iscKod)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'iscKod', item.iscKod));
        }
        if (this.util.isNotEmpty(item.islGrp)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'islGrp', item.islGrp));
        }
        if (this.util.isNotEmpty(item.islGrpAd)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'islGrpAd', item.islGrpAd));
        }
        if (this.util.isNotEmpty(item.mamAnaGrp)) {
            whereQuery.push(this.util.prepareWhereQuery(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, 'mamAnaGrp', item.mamAnaGrp));
        }
        return this.util.prepareQuery(query, whereQuery, searchType);
    };
    IslemArizaIscilikDao.prototype.getIslemGrup = function (item) {
        var query = "SELECT islemGrp,islemGrpAdi FROM OFF_ISC_ISLARZGRP_TNM WHERE mamAnaGrp = '" + item.mamAnaGrp + "' and durum='AKTIF' AND (";
        query += " islemGrp = '" + item.islGrp + "'";
        query += ') GROUP BY islemGrp,islemGrpAdi';
        return this.baseDao.execute(query, []);
    };
    IslemArizaIscilikDao.prototype.getArizaGrup = function (item) {
        var query = "SELECT arizaGrp,arizaGrpAdi FROM OFF_ISC_ISLARZGRP_TNM " +
            "WHERE mamAnaGrp = '" + item.mamAnaGrp + "' and islemGrp = '" + item.islGrp + "' and durum='AKTIF' AND ( ";
        query += " arizaGrp = '" + item.arzGrp + "'";
        query += ') GROUP BY arizaGrp, arizaGrpAdi';
        return this.baseDao.execute(query, []);
    };
    IslemArizaIscilikDao.prototype.getPIYKodu = function (item, mamKod) {
        var query = "SELECT t.*,i.iscAdi FROM OFF_ISC_ISLARZGRP_TNM t, OFF_MAM_TNM mam, OFF_MAM_ISC_TNM i WHERE t.mamAnaGrp = mam.mamAnaGrp" +
            " and mam.mamKod = i.mamKod and t.iscKod = i.iscKod and mam.mamKod =  '" + mamKod + "'";
        query += " AND islemGrp = '" + item.islGrp + "'";
        query += " AND arizaGrp = '" + item.arzGrp + "'";
        query += " AND t.iscKod = '" + item.iscKod + "'";
        return this.baseDao.execute(query, []);
    };
    IslemArizaIscilikDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__base_dao_base_dao__["a" /* BaseDao */]])
    ], IslemArizaIscilikDao);
    return IslemArizaIscilikDao;
}());

//# sourceMappingURL=islem-ariza-iscilik-dao.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesajlar_mesajlar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__versiyon_versiyon__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
/**
 * @author mali.sahin
 * @since 03.07.2018
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TasksProvider = (function () {
    function TasksProvider(util, mesajProvider, versiyonProvider, logger) {
        this.util = util;
        this.mesajProvider = mesajProvider;
        this.versiyonProvider = versiyonProvider;
        this.logger = logger;
        this.INTERVAL_NAME = "INTERVAL_NAME";
        this.ASYNC_CHECK_INTERVAL = 30000;
        this.init();
    }
    TasksProvider.prototype.init = function () {
        this.TASK_TIME_INTERVAL = Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SYNC.TIME));
        this.TASK_TIME_INTERVAL = this.TASK_TIME_INTERVAL * 60 * 1000;
    };
    TasksProvider.prototype.runTasks = function () {
        var _this = this;
        this.interval = setInterval(function () {
            var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].ACCESS_TOKEN);
            if (_this.util.isNotEmpty(token) && _this.checkInterval()) {
                _this.logger.success("Tasks running command is given.");
                _this.versiyonTask();
                _this.messageTask();
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SYNC.MOMENT, String(new Date().getTime()));
            }
        }, this.ASYNC_CHECK_INTERVAL);
        localStorage.setItem(this.INTERVAL_NAME, String(this.interval));
    };
    TasksProvider.prototype.killAndStartTasks = function () {
        this.killTasks();
        this.startTasks();
        // this.runTasks();
    };
    TasksProvider.prototype.killTasks = function () {
        var interval = Number(localStorage.getItem(this.INTERVAL_NAME));
        this.logger.warn("Task Killed. [" + String(this.interval) + "]");
        clearInterval(interval);
    };
    TasksProvider.prototype.startTasks = function () {
        this.logger.info("Task Started.");
        this.runTasks();
    };
    TasksProvider.prototype.versiyonTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.warn("Versiyon Task Started");
                        return [4 /*yield*/, this.versiyonProvider.getVersiyonFromServer()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TasksProvider.prototype.messageTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.warn("Messages Task Started");
                        return [4 /*yield*/, this.mesajProvider.getDataFromApi(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].CALLED_FROM.TASKS)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TasksProvider.prototype.checkInterval = function () {
        this.logger.warn("Tasks is checking.");
        var canSync = false;
        var lastSyncMoment = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SYNC.MOMENT);
        if (this.util.isEmpty(lastSyncMoment)) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SYNC.MOMENT, String(new Date().getTime()));
        }
        var moment = new Date().getTime();
        var nextSyncTime = (Number(this.TASK_TIME_INTERVAL) + Number(lastSyncMoment));
        this.logger.info("Moment " + moment + " / Next sync time :" + nextSyncTime);
        if (moment > nextSyncTime) {
            canSync = true;
        }
        return canSync;
    };
    TasksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__mesajlar_mesajlar__["a" /* MesajlarProvider */],
            __WEBPACK_IMPORTED_MODULE_4__versiyon_versiyon__["a" /* VersiyonProvider */],
            __WEBPACK_IMPORTED_MODULE_2__logger_logger__["a" /* LoggerProvider */]])
    ], TasksProvider);
    return TasksProvider;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrupSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UrunAnaGrupSearchComponent = (function () {
    function UrunAnaGrupSearchComponent(viewCtrl, params, util, urunAnaGrupDao, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.themeProvider = themeProvider;
        this.list = [];
        this.selectedItem = { key: "", value: "" };
        this.searchText = "";
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.pageable = new __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__["a" /* Pageable */]();
        this.urunAnaGrup = new __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
        this.data = params.get('data');
    }
    UrunAnaGrupSearchComponent.prototype.closeModal = function () {
        this.ionChange({ key: '', value: '' });
    };
    UrunAnaGrupSearchComponent.prototype.ionViewDidLoad = function () {
        this.fetchList('BEGINNING');
    };
    UrunAnaGrupSearchComponent.prototype.fetchList = function (type) {
        this.pageable.tip = type;
        this.pageable = this.pageable.compute();
        this.list = [];
        this.fetchUrunAnaGrupList();
    };
    UrunAnaGrupSearchComponent.prototype.fetchUrunAnaGrupList = function () {
        var _this = this;
        var filter = this.prepareSearchItem();
        this.urunAnaGrupDao.getPage(filter, this.searchType, this.pageable.first, this.pageable.pageSize).then(function (res) {
            _this.fillList(res);
        });
    };
    UrunAnaGrupSearchComponent.prototype.prepareSearchItem = function () {
        if (this.util.isNotEmpty(this.data.searchType)) {
            this.searchType = this.data.searchType;
        }
        else {
            this.searchType = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE;
        }
        var anaGrp = new __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
        anaGrp.ad = this.searchText;
        anaGrp.mamAnaGrp = this.searchText;
        return anaGrp;
    };
    UrunAnaGrupSearchComponent.prototype.fillList = function (data) {
        var res = data.res.rows;
        this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
        for (var i = 0; i < res.length; i++) {
            this.fillItemByType(res.item(i));
        }
        console.dir(res);
    };
    UrunAnaGrupSearchComponent.prototype.fillItemByType = function (item) {
        /*   if (this.util.isNotEmpty(this.data) && this.util.isNotEmpty(this.data.nerden) && this.data.nerden == "BILGI_SORGU") {
             let uniqueList = new Set(this.list);
             this.list = [];
             uniqueList.forEach(val => {
               this.list.push(val);
             });
           } else {*/
        this.list.push({ key: item.mamAnaGrp, value: item.ad });
    };
    UrunAnaGrupSearchComponent.prototype.ionChange = function (item) {
        this.prepareUrunAnaGrupReturnValue(item);
        this.viewCtrl.dismiss(this.returnObject);
    };
    UrunAnaGrupSearchComponent.prototype.prepareUrunAnaGrupReturnValue = function (item) {
        this.urunAnaGrup.mamAnaGrp = this.util.isEmpty(item.key) ? '' : item.key;
        this.urunAnaGrup.ad = this.util.isEmpty(item.value) ? '' : item.value;
        this.returnObject = this.urunAnaGrup;
    };
    UrunAnaGrupSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'urun-ana-grup-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\urun-ana-grup-search\urun-ana-grup-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Ürün Ana Grup Arama</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-4 col-md-4>\n\n      <button ion-button color="light" class="pull-left" (click)="fetchList(\'FIRST\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-double-left"></i>\n\n        </ion-label>\n\n      </button>\n\n      <button ion-button color="light" class="pull-left" (click)="fetchList(\'PREVIOUS\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-left"></i>\n\n        </ion-label>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <button ion-button color="light" class="pull-right" (click)="fetchList(\'NEXT\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-right"></i>\n\n        </ion-label>\n\n      </button>\n\n      <button ion-button color="light" class="pull-right" (click)="fetchList(\'LAST\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-double-right"></i>\n\n        </ion-label>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\urun-ana-grup-search\urun-ana-grup-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */], __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme__["a" /* ThemeProvider */]])
    ], UrunAnaGrupSearchComponent);
    return UrunAnaGrupSearchComponent;
}());

//# sourceMappingURL=urun-ana-grup-search.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZebraPrinterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ZebraPrinterComponent = (function () {
    function ZebraPrinterComponent(util, platform, viewCtrl, logger, themeProvider, navParams) {
        this.util = util;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.logger = logger;
        this.themeProvider = themeProvider;
        this.navParams = navParams;
        this.printerList = [];
        this.text = navParams.get("text");
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.logger.log(this.text);
        this.init();
    }
    ZebraPrinterComponent.prototype.init = function () {
        if (this.platform.is('android')) {
            this.androidList();
        }
        else if (this.platform.is('ios')) {
            this.iosList();
        }
    };
    ZebraPrinterComponent.prototype.androidSetPrinterList = function (list) {
        this.logger.dir(list);
        if (this.util.isNotEmpty(list))
            this.printerList = list;
    };
    ZebraPrinterComponent.prototype.iosSetPrinterList = function (list) {
        var _this = this;
        this.logger.info("Ios Printer List" + list);
        if (this.util.isNotEmpty(list))
            this.printerList = list.split(",").filter(function (value) { return _this.util.isNotEmpty(value); });
    };
    ZebraPrinterComponent.prototype.fnSuccess = function () {
        this.util.success("Hizmet Formu çıktısı başarılı bir şekilde alındı.");
    };
    ZebraPrinterComponent.prototype.fnError = function () {
        this.util.error("Çıktı alınırken hata oluştu.Yazıcının bağlı olduğundan emin olunuz.");
    };
    ZebraPrinterComponent.prototype.androidList = function () {
        if (this.util.isNotEmpty(window.printer))
            window.printer.list(this.androidSetPrinterList.bind(this), this.fnError.bind(this));
        else {
            var errorMes = "Android Zebra Printer plugini implemente edilmemiş. Sistem yetkilisine bildiriniz.";
            this.logger.error(errorMes);
            this.util.error(errorMes);
        }
    };
    ZebraPrinterComponent.prototype.androidClose = function () {
        window.printer.close(this.fnSuccess.bind(this), this.fnError.bind(this));
    };
    ZebraPrinterComponent.prototype.androidOpen = function () {
        window.printer.open(this.fnSuccess.bind(this), this.fnError.bind(this), this.selectedPrinter);
    };
    ZebraPrinterComponent.prototype.androidPrint = function () {
        this.androidOpen();
        window.printer.print(this.fnSuccess.bind(this), this.fnError.bind(this), this.text);
    };
    ZebraPrinterComponent.prototype.iosList = function () {
        if (this.util.isNotEmpty(window.plugins) && this.util.isNotEmpty(window.plugins.CordovaPrinter)) {
            this.logger.info("Ios PrinterList");
            window.plugins.CordovaPrinter.getPrinters(this.iosSetPrinterList.bind(this), this.fnError.bind(this));
        }
        else {
            var errorMes = "Ios Zebra Printer plugini implemente edilmemiş. Sistem yetkilisine bildiriniz.";
            this.logger.error(errorMes);
            this.util.error(errorMes);
        }
    };
    ZebraPrinterComponent.prototype.iosPrint = function () {
        window.plugins.CordovaPrinter.print(this.fnSuccess.bind(this), this.fnError.bind(this), this.selectedPrinter, this.text);
    };
    ZebraPrinterComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ZebraPrinterComponent.prototype.yazdir = function (item) {
        this.selectedPrinter = item;
        if (this.platform.is('android'))
            this.androidPrint();
        else if (this.platform.is('ios'))
            this.iosPrint();
    };
    ZebraPrinterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zebra-printer',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\zebra-printer\zebra-printer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Yazdırmak için seçiniz.</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n  <!-- Generated template for the ListComponent component -->\n\n  <div>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let item of printerList" (click)="yazdir(item) ">\n\n        {{ item }}\n\n      </button>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\zebra-printer\zebra-printer.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_util_util__["a" /* UtilProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_util_util__["a" /* UtilProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__["a" /* LoggerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__["a" /* LoggerProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__["a" /* ThemeProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__["a" /* ThemeProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]) === "function" && _f || Object])
    ], ZebraPrinterComponent);
    return ZebraPrinterComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=zebra-printer.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessResults; });
/**
 * @author malisahin
 * @since 20.06.2018
 */
var ProcessResults = (function () {
    function ProcessResults() {
        this.errorMessages = [];
        this.infoMessages = [];
        this.objects = [];
    }
    ProcessResults.prototype.isErrorMessagesNull = function () {
        return !(this.errorMessages.length > 0);
    };
    ProcessResults.prototype.isErrorMessagesNotNull = function () {
        return this.errorMessages.length > 0;
    };
    ProcessResults.prototype.isAnyObjectExist = function () {
        return this.objects.length > 0;
    };
    ProcessResults.prototype.addErrorMessage = function (message) {
        this.errorMessages.push(message);
    };
    return ProcessResults;
}());

//# sourceMappingURL=ProcessResults.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderProvider = (function (_super) {
    __extends(HeaderProvider, _super);
    function HeaderProvider(alert, logger, util, platform) {
        var _this = _super.call(this) || this;
        _this.alert = alert;
        _this.logger = logger;
        _this.util = util;
        _this.platform = platform;
        return _this;
    }
    HeaderProvider.prototype.closeApplicationConfirm = function () {
        var _this = this;
        var alert = this.alert.create({
            title: "Çıkmak istediğinizden emin misiniz?",
            enableBackdropDismiss: true,
            buttons: [{
                    text: "Evet",
                    handler: function () {
                        _this.platform.exitApp();
                        if (_this.isNotEmpty(window.navigator)
                            && _this.isNotEmpty(window.navigator.app))
                            window.navigator['app'].exitApp();
                        else
                            _this.logger.warn("Navigator.app.exitApp() is not found.");
                    }
                }, {
                    text: "Hayır",
                    role: 'cancel'
                }]
        });
        alert.present();
    };
    HeaderProvider.prototype.loadGuncellemeSayisi = function () {
        var guncellemeSayisi = 10;
        var tables = ['URUN', 'URUN_ANA_GRUP', 'URUN_ISCILIK',
            'URUN_MALZEME', 'ISLEM_ARIZA_ISCILIK', 'MALZEME_FIYAT',
            'ISCILIK_FIYAT', 'SEHIR_TNM', 'ILCE_TNM', 'MAHALLE_TNM'];
        for (var i = 0; i < tables.length; i++) {
            var item = tables[i];
            var serverVersiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER[item]);
            var clientVersiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT[item]);
            if (this.util.isNotEmpty(serverVersiyon)) {
                if ((serverVersiyon == clientVersiyon)) {
                    guncellemeSayisi -= 1;
                }
            }
            else if ((serverVersiyon == clientVersiyon) && serverVersiyon != "-1") {
                guncellemeSayisi -= 1;
            }
        }
        return guncellemeSayisi;
    };
    HeaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], HeaderProvider);
    return HeaderProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_EntityUtil__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpinnerComponent = (function () {
    function SpinnerComponent(navParams) {
        this.navParams = navParams;
        this.util = new __WEBPACK_IMPORTED_MODULE_1__entities_EntityUtil__["a" /* EntityUtil */]();
        this.showPercentage = false;
    }
    SpinnerComponent.prototype.ionViewDidLoad = function () {
        var showPercentage = this.navParams.get("showPercentage");
        if (this.util.isNotEmpty(showPercentage))
            this.showPercentage = showPercentage;
        this.start();
    };
    SpinnerComponent.prototype.ionViewWillLeave = function () {
        console.info("Percentage Info is Killed");
        this.end();
    };
    SpinnerComponent.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.computePercentage();
        }, 1000);
    };
    SpinnerComponent.prototype.end = function () {
        clearInterval(this.intervalId);
    };
    SpinnerComponent.prototype.computePercentage = function () {
        var totalMiktar;
        var veriTipi;
        var veri = this.util.getIndirilenVeri();
        var tableTotalElements = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS.ALL_DATA);
        if (this.util.isNotEmpty(veri) && this.util.isNotEmpty(tableTotalElements)) {
            tableTotalElements = JSON.parse(tableTotalElements);
            veriTipi = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS[veri.tipi];
            totalMiktar = tableTotalElements[veriTipi];
            this.downloadPercentage = (Number(veri.miktari / totalMiktar) * 100).toFixed(0) + " %";
        }
        else {
            this.downloadPercentage = "0 %";
        }
    };
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spinner',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\spinner\spinner.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title></ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n  style="background:rgba(25, 88, 132, 0.83)"\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content class="spinner">\n\n  <div style="width: 25%; margin-left: 35%; margin-top: 65%;">\n\n    <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n      viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n\n      <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\n\n            c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">\n\n        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>\n\n      </path>\n\n\n\n      <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\n\n            c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">\n\n        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>\n\n      </path>\n\n\n\n      <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\n\n            L82,35.7z">\n\n        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>\n\n      </path>\n\n    </svg>\n\n  </div>\n\n  <div>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label style="font-size: 18px;color: #fff;text-align: center;">Lütfen Bekleyiniz</ion-label>\n\n        <ion-label style="font-size: 18px;color: #fff;text-align: center;" *ngIf="showPercentage">\n\n          {{downloadPercentage}}\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </div>\n\n</ion-content>\n\n\n\n<!--\n\n<ion-footer>\n\n</ion-footer>\n\n-->'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\spinner\spinner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(6);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */


var Profil = (function () {
    function Profil() {
    }
    Profil.getActiveProfil = function () {
        return Profil.getEcaTestDomain();
    };
    Profil.getOrgKod = function () {
        return Profil.getActiveProfil().orgKod;
    };
    Profil.getlocalDev = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ORG_KODS.SOS;
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://10.10.10.151:7001";
        domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
        domain.webappurl = "http://sos.ecaservis.com.tr";
        return domain;
    };
    Profil.getlocalTest = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ORG_KODS.SOS;
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://10.10.10.26:7005";
        domain.securityUrl = "http://10.10.10.26:7005";
        domain.webappurl = "http://10.10.10.26:7005";
        return domain;
    };
    Profil.getBaymakTestVPNDomain = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ORG_KODS.BAY;
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://172.24.1.10:7005";
        domain.securityUrl = "http://172.24.1.10:7005";
        domain.webappurl = "http://172.24.1.10:7005";
        return domain;
    };
    Profil.getBaymakTestDomain = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ORG_KODS.BAY;
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://sos.baymak.com.tr:7008";
        domain.securityUrl = "http://sos.baymak.com.tr:7008";
        domain.webappurl = "http://sos.baymak.com.tr:7008";
        return domain;
    };
    Profil.getBaymakProdDomain = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ORG_KODS.BAY;
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://sos.baymak.com.tr:7006";
        domain.securityUrl = "http://sos.baymak.com.tr:7006";
        domain.webappurl = "http://sos.baymak.com.tr:7005";
        return domain;
    };
    Profil.getEcaTestDomain = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ORG_KODS.ECA;
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://sos.ecaservis.com.tr:7003";
        domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
        domain.webappurl = "http://sos.ecaservis.com.tr";
        return domain;
    };
    Profil.getEcaProdDomain = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* Constants */].ORG_KODS.ECA;
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://sos.ecaservis.com.tr:7009";
        domain.securityUrl = "http://sos.ecaservis.com.tr:7009";
        domain.webappurl = "http://sos.ecaservis.com.tr:7009";
        return domain;
    };
    Profil.getCustomer3 = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        return domain;
    };
    return Profil;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_profil__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_base__ = __webpack_require__(76);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var THEME;
(function (THEME) {
    THEME["BLUE"] = "blue-theme";
    THEME["GREEN"] = "green-theme";
})(THEME || (THEME = {}));
var ThemeProvider = (function (_super) {
    __extends(ThemeProvider, _super);
    function ThemeProvider() {
        var _this = _super.call(this) || this;
        _this.user = new __WEBPACK_IMPORTED_MODULE_3__entities_user__["a" /* User */]();
        return _this;
    }
    ThemeProvider.prototype.setTheme = function () {
        var permanentTheme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SELECTED_THEME);
        if (this.isEmpty(permanentTheme)) {
            permanentTheme = THEME.BLUE;
            this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](permanentTheme);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SELECTED_THEME, permanentTheme);
        }
        else {
            this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](permanentTheme);
        }
        return permanentTheme;
    };
    ThemeProvider.prototype.changeTheme = function (selectedTheme) {
        var permanentTheme = THEME[selectedTheme];
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SELECTED_THEME, permanentTheme);
        this.setTheme();
    };
    ThemeProvider.prototype.getSelectedTheme = function () {
        var selectedTheme = "";
        switch (__WEBPACK_IMPORTED_MODULE_4__entities_profil__["a" /* Profil */].getOrgKod()) {
            case __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].ORG_KODS.SOS:
                selectedTheme = THEME.BLUE;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].ORG_KODS.BAY:
                selectedTheme = THEME.GREEN;
                break;
            case __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].ORG_KODS.ECA:
                selectedTheme = THEME.BLUE;
                break;
            default:
                selectedTheme = THEME.BLUE;
        }
        return selectedTheme;
    };
    ThemeProvider.prototype.getDefaultImageFolder = function () {
        return "assets/images/" + __WEBPACK_IMPORTED_MODULE_4__entities_profil__["a" /* Profil */].getActiveProfil().orgKod + "/";
    };
    ThemeProvider.prototype.getBackgroundImage = function () {
        return this.getDefaultImageFolder() + "login-background.jpg";
    };
    ThemeProvider.prototype.getAnasayfaLogo = function () {
        return this.getDefaultImageFolder() + "anasayfa-logo.png";
    };
    ThemeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ThemeProvider);
    return ThemeProvider;
}(__WEBPACK_IMPORTED_MODULE_5__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=theme.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesajlarDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_mesajlar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var MesajlarDao = (function () {
    function MesajlarDao(http, dbProvider, util, baseDao) {
        this.http = http;
        this.dbProvider = dbProvider;
        this.util = util;
        this.baseDao = baseDao;
    }
    MesajlarDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO OFF_ALERT (id, bitisTarihi, aciklama, gonderen, basTarihi, status, subject, type, valid) VALUES (?,?,?,?,?,?,?,?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.id, item.bitisTarihi + " 23:59:59", item.aciklama, item.gonderen, item.basTarihi + " 00:00:00", item.status, item.subject, item.type, item.valid];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    MesajlarDao.prototype.loadMesajCounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var duyuruSayisi, uyariSayisi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadDuyuruSayisi()];
                    case 1:
                        duyuruSayisi = _a.sent();
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].COUNTS.DUYURULAR, String(duyuruSayisi));
                        return [4 /*yield*/, this.loadUyariSayisi()];
                    case 2:
                        uyariSayisi = _a.sent();
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].COUNTS.UYARILAR, String(uyariSayisi));
                        return [2 /*return*/];
                }
            });
        });
    };
    MesajlarDao.prototype.loadDuyuruSayisi = function () {
        return this.loadMesajSayisi("WARN");
    };
    MesajlarDao.prototype.loadUyariSayisi = function () {
        return this.loadMesajSayisi("URGENT");
    };
    MesajlarDao.prototype.loadMesajSayisi = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var mes, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mes = new __WEBPACK_IMPORTED_MODULE_2__entities_mesajlar__["a" /* Mesaj */]();
                        mes.type = type;
                        return [4 /*yield*/, this.getList(mes, new __WEBPACK_IMPORTED_MODULE_6__entities_Pageable__["a" /* Pageable */]())];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(result.res.rows.length);
                            })];
                }
            });
        });
    };
    MesajlarDao.prototype.getList = function (mesaj, pageable) {
        var query = this.prepareSearchQery(mesaj);
        return this.baseDao.getList(query, "id", "", __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, pageable.first, pageable.pageSize, true);
    };
    MesajlarDao.prototype.prepareSearchQery = function (mesaj) {
        var query = "SELECT * FROM OFF_ALERT WHERE 1=1";
        if (this.util.isNotEmpty(mesaj.id)) {
            query += " AND id=" + mesaj.id + " ";
        }
        if (this.util.isNotEmpty(mesaj.type)) {
            query += " AND type='" + mesaj.type + "' ";
        }
        var now = "'" + this.util.dateFormatRegex(new Date(), "yyyy-MM-dd hh:mm:ss") + "'";
        query += " AND bitisTarihi > " + now;
        query += " AND basTarihi < " + now;
        return query;
    };
    MesajlarDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__base_dao_base_dao__["a" /* BaseDao */]])
    ], MesajlarDao);
    return MesajlarDao;
}());

//# sourceMappingURL=mesajlar-dao.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagriDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cagrilar_cagrilar__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__ = __webpack_require__(18);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CagriDetayPage = (function () {
    function CagriDetayPage(navCtrl, navParams, hizmetService, themeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hizmetService = hizmetService;
        this.themeProvider = themeProvider;
        this.activePage = "hizmet";
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.hizmet.seqNo = this.navParams.get('seqNo');
        this.setHizmet();
    }
    CagriDetayPage.prototype.getHizmet = function () {
        var _this = this;
        return this.hizmetService.fetchHizmet(this.hizmet.seqNo).then(function (res) {
            for (var i = 0; i < res.length; i++) {
                _this.hizmet = JSON.parse(res.item(i).data);
                _this.hizmetService.setHizmet(_this.hizmet);
            }
        });
    };
    CagriDetayPage.prototype.setHizmet = function () {
        this.hizmetService.setHizmet(this.hizmet);
    };
    CagriDetayPage.prototype.whenTabChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CagriDetayPage.prototype.goback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cagrilar_cagrilar__["a" /* CagrilarPage */]);
    };
    CagriDetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cagri-detay',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\cagri-detay\cagri-detay.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n\n\n    <icon-header></icon-header>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n  <ion-row>\n\n    <ion-col col-2 col-md-2>\n\n      <button ion-button (ionClick)="goback()">\n\n        <!--<ion-icon name="ios-arrow-back" (click)="goback()" class="pull-right close-icon"></ion-icon>-->\n\n        <i class="fas fa-arrow-circle-left" (click)="goback()"></i>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-10 col-md-10>\n\n      <ion-title class="page-title">Çağrı Detay</ion-title>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n\n\n  <ion-toolbar no-border-top class="main-tabs">\n\n    <ion-segment [(ngModel)]="activePage">\n\n\n\n      <ion-segment-button value="hizmet" (ionSelect)="whenTabChange()">\n\n        Hizmet Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="musteri" (ionSelect)="whenTabChange()">\n\n        Müşteri Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="urun" (ionSelect)="whenTabChange()">\n\n        Ürün Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="servis" (ionSelect)="whenTabChange()">\n\n        Servis Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="detay" (ionSelect)="whenTabChange()">\n\n        Detaylar\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="activePage">\n\n\n\n    <div *ngSwitchCase="\'hizmet\'">\n\n      <hizmet-bilgileri></hizmet-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'musteri\'">\n\n      <musteri-bilgileri></musteri-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'urun\'">\n\n      <urun-bilgileri></urun-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'servis\'">\n\n      <servis-bilgileri></servis-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'detay\'">\n\n      <detay-bilgileri></detay-bilgileri>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\cagri-detay\cagri-detay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__["a" /* ThemeProvider */]])
    ], CagriDetayPage);
    return CagriDetayPage;
}());

//# sourceMappingURL=cagri-detay.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_Ankets_Anket__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_hizmet_Ankets_AnketSoru__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_hizmet_Ankets_AnketMst__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var AnketService = (function () {
    function AnketService(util, http, token, logger, api) {
        this.util = util;
        this.http = http;
        this.token = token;
        this.logger = logger;
        this.api = api;
    }
    AnketService.prototype.fillAnket = function (obj) {
        if (this.util.isNotEmpty(obj) && this.util.isNotEmpty(obj.anketMst)) {
            var anket = new __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_Ankets_Anket__["a" /* Anket */]();
            anket.anketMst = this.fillAnketMst(obj.anketMst);
            anket.anketSorular = this.fillAnketSoru(obj.anketSorular);
            anket.anketCevaplar = this.fillAnketCevap();
            return anket;
        }
        return null;
    };
    AnketService.prototype.fillAnketMst = function (anketMst) {
        var mst = new __WEBPACK_IMPORTED_MODULE_6__entities_hizmet_Ankets_AnketMst__["a" /* AnketMst */]();
        mst.anketId = anketMst.anketId;
        mst.anketSeq = anketMst.anketSeq;
        mst.durum = anketMst.durum;
        mst.hedefGrp = anketMst.hedefGrp;
        mst.hedefKod = anketMst.hedefKod;
        mst.orgKod = anketMst.orgKod;
        mst.refKod = anketMst.refKod;
        mst.refNo = anketMst.refNo;
        mst.sorumlu = anketMst.sorumlu;
        mst.anketAdi = anketMst.anketAdi;
        return mst;
    };
    AnketService.prototype.fillAnketSoru = function (soruList) {
        var orderedList = [];
        soruList.forEach(function (item) {
            var soru = new __WEBPACK_IMPORTED_MODULE_5__entities_hizmet_Ankets_AnketSoru__["a" /* AnketSoru */]();
            soru.anketId = item.anketId;
            soru.orgKod = item.orgKod;
            soru.soruId = item.soruId;
            soru.zorunlu = item.zorunlu;
            var tanim = new __WEBPACK_IMPORTED_MODULE_5__entities_hizmet_Ankets_AnketSoru__["b" /* SerSoruTnm */]();
            tanim.iptal = item.serSoruTnm.iptal;
            tanim.orgKod = item.serSoruTnm.orgKod;
            tanim.soruId = item.serSoruTnm.soruId;
            tanim.soruMethod = item.serSoruTnm.soruMethod;
            tanim.soruText = item.serSoruTnm.soruText;
            tanim.grpKod = item.serSoruTnm.grpKod;
            soru.serSoruTnm = tanim;
            orderedList.push(soru);
        });
        return orderedList;
    };
    AnketService.prototype.fillAnketCevap = function () {
        var orderedList = [];
        return orderedList;
    };
    AnketService.prototype.saveDataToApi = function (hizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var anketCevapList, header, url, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        anketCevapList = this.getAnketCevapList(hizmet);
                        if (!(this.util.isNotEmpty(anketCevapList) && anketCevapList.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        url = this.api.getAnketKayitUrl();
                        return [4 /*yield*/, this.http.post(url, anketCevapList, { headers: header }).toPromise()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, this.setResult(result)];
                    case 3: return [2 /*return*/, new Promise(function (res) { return res(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].STATUS.SUCCESS); })];
                }
            });
        });
    };
    AnketService.prototype.setResult = function (result) {
        var status = __WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].STATUS.ERROR;
        if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.responseCode) && result.responseCode == __WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].STATUS.SUCCESS) {
            status = __WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].STATUS.SUCCESS;
        }
        return new Promise(function (resolve, reject) {
            resolve(status);
            reject(status);
        });
    };
    AnketService.prototype.getAnketCevapList = function (hizmet) {
        if (this.util.isNotEmpty(hizmet.anket) && this.util.isNotEmpty(hizmet.anket.anketCevaplar)) {
            var list = hizmet.anket.anketCevaplar;
            return list;
        }
        return [];
    };
    AnketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__api_api__["a" /* ApiProvider */]])
    ], AnketService);
    return AnketService;
}());

//# sourceMappingURL=anket-service.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagriAramaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_HizmetSearch__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */






var CagriAramaModalPage = (function () {
    function CagriAramaModalPage(viewCtrl, util, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.themeProvider = themeProvider;
        this.searchParams = [];
        this.siralama = true;
        this.orderBy = __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].ORDER_BY.RANDEVU_TAR_ASCENDES;
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_HizmetSearch__["a" /* HizmetSearch */]();
        this.filter.durum = "ACIK";
        this.backGroundImage = this.themeProvider.getBackgroundImage();
    }
    CagriAramaModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CagriAramaModalPage");
    };
    CagriAramaModalPage.prototype.closeModal = function () {
        var data = {
            query: this.query,
            params: this.searchParams,
            orderBy: this.orderBy
        };
        this.viewCtrl.dismiss(data);
    };
    CagriAramaModalPage.prototype.search = function () {
        this.query = " SELECT * FROM OFF_HIZ_MST WHERE 1=1";
        var whereQuery = [];
        var searchType = __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE;
        if (this.util.isNotEmpty(this.filter.randevuTarFirst)) {
            var tarihFirst = this.util.dateFormatRegex(this.filter.randevuTarFirst, "yyyy-MM-dd") + " 00:00:00";
            this.query += " AND randevuTarihi > " + this.util.newDateTime(tarihFirst);
            this.searchParams.push(String(this.filter.randevuTarFirst));
        }
        if (this.util.isNotEmpty(this.filter.randevuTarLast)) {
            var tarihLast = this.util.dateFormatRegex(this.filter.randevuTarLast, "yyyy-MM-dd") + " 23:59:59";
            this.query += " AND randevuTarihi < " + this.util.newDateTime(tarihLast);
            this.searchParams.push(String(this.filter.randevuTarLast));
        }
        if (this.util.isNotEmpty(this.filter.durum)) {
            this.query += " AND durum ='" + this.filter.durum + "' ";
            this.searchParams.push(this.filter.durum);
        }
        if (this.util.isNotEmpty(this.filter.seqNo)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "seqNo", String(this.filter.seqNo)));
            this.searchParams.push(String(this.filter.seqNo));
        }
        if (this.util.isNotEmpty(this.filter.adi)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "adi", this.filter.adi));
            this.searchParams.push(this.filter.adi);
        }
        if (this.util.isNotEmpty(this.filter.soyadi)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "soyadi", this.filter.soyadi));
            this.searchParams.push(this.filter.soyadi);
        }
        if (this.util.isNotEmpty(this.filter.unvani)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "firmaUnvani", this.filter.unvani));
            this.searchParams.push(this.filter.unvani);
        }
        this.query = this.util.prepareQuery(this.query, whereQuery, searchType);
        if (this.util.isNotEmpty(this.filter.telefon)) {
            var tel = String(this.filter.telefon);
            this.query
                += " AND ( evTel like '%" + tel + "%' "
                    + "OR isTel like '%" + tel + "%' "
                    + "OR gsmNo like '%" + tel + "%' )";
            this.searchParams.push(tel);
        }
        if (this.siralama)
            this.orderBy = __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].ORDER_BY.RANDEVU_TAR_DESCENDES;
        else
            this.orderBy = __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].ORDER_BY.RANDEVU_TAR_ASCENDES;
        this.closeModal();
    };
    CagriAramaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-cagri-arama-modal",template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\cagrilar\cagri-arama-modal\cagri-arama-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Çağrı Sorgula</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-row>\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Çağrı No:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-input type="number" [(ngModel)]="filter.seqNo"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Çağrı Durumu:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-select [(ngModel)]="filter.durum" interface="popover">\n\n        <ion-option value="ACIK" checked>Açık</ion-option>\n\n        <ion-option value="KAPALI">Kapalı</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Randevu Tarihi:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-datetime displayFormat="DD.MM.YYYY" [(ngModel)]="filter.randevuTarFirst"></ion-datetime>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-datetime displayFormat="DD.MM.YYYY" [(ngModel)]="filter.randevuTarLast"></ion-datetime>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Müşteri Adı:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-input [(ngModel)]="filter.adi"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Müşteri Soyadı:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-input [(ngModel)]="filter.soyadi"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Müşteri Ünvanı:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-input [(ngModel)]="filter.unvani"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Telefon No:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-input type="number" [(ngModel)]="filter.telefon"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-5>\n\n      <ion-label>\n\n        <strong>Tarihe Göre Sırala:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-4>\n\n      <ion-label color="primary" class="radio-btn" style="text-align: end;position: relative;">\n\n        {{siralama == true ? \'Önce En Yeni\' : \'Önce En Eski\'}}\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-3 col-md-3>\n\n      <ion-toggle [(ngModel)]="siralama" class="toggle-btn pull-left"></ion-toggle>\n\n    </ion-col>\n\n\n\n    <ion-col col-12>\n\n      <button id="btnModalAra" ion-button full round (click)="search()">\n\n        <span class="icon-right">\n\n          <i class="fas fa-search"></i>\n\n        </span>Ara</button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\cagrilar\cagri-arama-modal\cagri-arama-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__["a" /* ThemeProvider */]])
    ], CagriAramaModalPage);
    return CagriAramaModalPage;
}());

//# sourceMappingURL=cagri-arama-modal.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesajDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_mesajlar__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mesajlar_mesajlar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MesajDetailComponent = (function () {
    function MesajDetailComponent(params, viewCtrl, util, mesajProvider, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.mesajProvider = mesajProvider;
        this.themeProvider = themeProvider;
        this.mesaj = new __WEBPACK_IMPORTED_MODULE_1__entities_mesajlar__["a" /* Mesaj */]();
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.data = params.data;
        this.mesaj.id = this.data.id;
        this.fetchData();
    }
    MesajDetailComponent.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mesajProvider.fetchList(this.mesaj, new __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__["a" /* Pageable */])];
                    case 1:
                        list = _a.sent();
                        if (list.length > 0)
                            this.mesaj = list[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    MesajDetailComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    MesajDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mesaj-detail',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\mesaj-detail\mesaj-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title>Mesaj Detayı</ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-card class="card-box">\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 class="border-right">\n\n        <ion-label>\n\n          <strong>Gönderen:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-label>{{mesaj.gonderen}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 class="border-right">\n\n        <ion-label>\n\n          <strong>Konu:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-label>{{mesaj.subject}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 class="border-right">\n\n        <ion-label>\n\n          <strong>Mesaj:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <ion-label> {{mesaj.aciklama}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\mesaj-detail\mesaj-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_mesajlar_mesajlar__["a" /* MesajlarProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_theme_theme__["a" /* ThemeProvider */]])
    ], MesajDetailComponent);
    return MesajDetailComponent;
}());

//# sourceMappingURL=mesaj-detail.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_dao_urun_dao__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(6);
/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var UrunProvider = (function () {
    function UrunProvider(http, api, urunDao, util, token) {
        this.http = http;
        this.api = api;
        this.urunDao = urunDao;
        this.util = util;
        this.token = token;
    }
    UrunProvider.prototype.downloadUrunler = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var header, data, urun, list, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.getDataFromApi(first, header)];
                    case 2:
                        data = _a.sent();
                        urun = new __WEBPACK_IMPORTED_MODULE_3__entities_urun__["a" /* Urun */]();
                        return [4 /*yield*/, urun.fillUrun(data)];
                    case 3:
                        list = _a.sent();
                        item = void 0;
                        if (!(this.util.isNotEmpty(list) && list.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.urunDao.insertList(list)];
                    case 4:
                        item = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].STATUS.SUCCESS);
                            reject(__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].STATUS.ERROR);
                        })];
                    case 6:
                        this.util.ifOffline();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UrunProvider.prototype.getDataFromApi = function (first, header) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = this.api.downloadUrunUrl(first);
                return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
            });
        });
    };
    UrunProvider.prototype.getList = function (urun, searchType, pageable) {
        return this.urunDao.getList(urun, searchType, pageable.first, pageable.pageSize);
    };
    UrunProvider.prototype.getUrunAndUrunAnaGrup = function (urunKodu) {
        return this.urunDao.getUrunAndUrunAnaGrup(urunKodu);
    };
    UrunProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__urun_dao_urun_dao__["a" /* UrunDao */],
            __WEBPACK_IMPORTED_MODULE_6__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */]])
    ], UrunProvider);
    return UrunProvider;
}());

//# sourceMappingURL=urun.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilikProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_urun_iscilik__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__urun_iscilik_dao_urun_iscilik_dao__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_util__ = __webpack_require__(5);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var UrunIscilikProvider = (function () {
    function UrunIscilikProvider(http, api, urunIscilikDao, util, token) {
        this.http = http;
        this.api = api;
        this.urunIscilikDao = urunIscilikDao;
        this.util = util;
        this.token = token;
        this.INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
    }
    UrunIscilikProvider.prototype.downloadUrunIscilik = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var header, item, urunIscilik, list_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getDataFromApi(first, header)];
                    case 2:
                        item = _a.sent();
                        urunIscilik = new __WEBPACK_IMPORTED_MODULE_4__entities_urun_iscilik__["a" /* UrunIscilik */]();
                        return [4 /*yield*/, urunIscilik.fillUrunIscilik(item)];
                    case 3:
                        list_1 = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.urunIscilikDao.insertList(list_1).then(function (count) {
                                    console.log(count);
                                    resolve(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].STATUS.SUCCESS);
                                });
                            })];
                    case 4:
                        this.util.ifOffline();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UrunIscilikProvider.prototype.getDataFromApi = function (first, header) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = this.api.urunIscilikDownloadUrl(first);
                return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
            });
        });
    };
    UrunIscilikProvider.prototype.getList = function (filter, searchType, pageable) {
        return this.urunIscilikDao.getList(filter, searchType, pageable.first, pageable.pageSize);
    };
    UrunIscilikProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__urun_iscilik_dao_urun_iscilik_dao__["a" /* UrunIscilikDao */],
            __WEBPACK_IMPORTED_MODULE_8__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_7__token_token__["a" /* TokenProvider */]])
    ], UrunIscilikProvider);
    return UrunIscilikProvider;
}());

//# sourceMappingURL=urun-iscilik.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilik; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityUtil__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var UrunIscilik = (function (_super) {
    __extends(UrunIscilik, _super);
    function UrunIscilik() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mamKod = '';
        _this.iscKod = '';
        _this.iscAdi = '';
        _this.durum = '';
        _this.fiyat = '';
        _this.gdFiyat = '';
        _this.iscMikFlag = '';
        _this.maxIscMiktar = '';
        return _this;
    }
    UrunIscilik.prototype.fillUrunIscilik = function (res) {
        debugger;
        var parsedList = [];
        var urunIscilikList = res.message[0].liste;
        var urunIscilikVersiyon = res.message[0].versiyon;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.URUN_ISCILIK, urunIscilikList.length);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_ISCILIK, urunIscilikVersiyon);
        this.indirilenVeriyiHesapla(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK, urunIscilikList.length);
        urunIscilikList.forEach(function (item) {
            var urunIscilik = new UrunIscilik();
            urunIscilik.mamKod = item.mamKod;
            urunIscilik.iscAdi = item.iscAdi;
            urunIscilik.iscKod = item.iscKod;
            urunIscilik.durum = item.durum;
            urunIscilik.iscMikFlag = item.iscMikFlag;
            urunIscilik.maxIscMiktar = item.maxIscMiktar;
            parsedList.push(urunIscilik);
        });
        return new Promise(function (resolve) { return resolve(parsedList); });
    };
    return UrunIscilik;
}(__WEBPACK_IMPORTED_MODULE_1__EntityUtil__["a" /* EntityUtil */]));

//# sourceMappingURL=urun-iscilik.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilikDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UrunIscilikDao = (function () {
    function UrunIscilikDao(dbProvider, baseDao, util) {
        this.dbProvider = dbProvider;
        this.baseDao = baseDao;
        this.util = util;
    }
    UrunIscilikDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        if (list.length == 0) {
            return new Promise((function (resolve) { return resolve(0); }));
        }
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.mamKod, item.iscKod, item.iscAdi, item.durum, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
                        tx.executeSql(INSERT_QUERY, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    UrunIscilikDao.prototype.insertOne = function (item) {
        var INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
        var params = [item.mamKod, item.iscKod, item.iscAdi, item.durum, item.iscMikFlag, item.maxIscMiktar, item.fiyat, item.gdFiyat];
        return this.baseDao.execute(INSERT_QUERY, params);
    };
    UrunIscilikDao.prototype.getList = function (item, type, first, pageSize) {
        var query = this.prepareGetListQuery(item, type);
        return this.baseDao.getList(query, "iscKod", item, type, first, pageSize, true);
    };
    UrunIscilikDao.prototype.prepareGetListQuery = function (filter, searchType) {
        var query = " SELECT * FROM OFF_MAM_ISC_TNM WHERE 1=1 ";
        var searchQuery = [];
        if (this.util.isNotEmpty(filter.mamKod))
            query += " AND mamKod = '" + filter.mamKod + "' ";
        if (this.util.isNotEmpty(filter.iscKod))
            searchQuery.push(this.util.prepareWhereQuery(searchType, "iscKod", filter.iscKod));
        if (this.util.isNotEmpty(filter.iscAdi))
            searchQuery.push(this.util.prepareWhereQuery(searchType, "iscAdi", filter.iscAdi));
        return this.util.prepareQuery(query, searchQuery, searchType);
    };
    UrunIscilikDao.prototype.deleteAll = function () {
        var query = "DELETE FROM OFF_MAM_ISC_TNM ";
        return this.baseDao.execute(query, []);
    };
    UrunIscilikDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__["a" /* BaseDao */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */]])
    ], UrunIscilikDao);
    return UrunIscilikDao;
}());

//# sourceMappingURL=urun-iscilik-dao.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiyatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_fiyat__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fiyat_dao_fiyat_dao__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logger_logger__ = __webpack_require__(9);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var FiyatProvider = (function () {
    function FiyatProvider(http, api, util, fiyatDao, logger, token) {
        this.http = http;
        this.api = api;
        this.util = util;
        this.fiyatDao = fiyatDao;
        this.logger = logger;
        this.token = token;
    }
    FiyatProvider.prototype.downloadMalzemeFiyat = function (first) {
        var tip = "malzemeFiyatListesi";
        return this.getDataFromApi(first, tip);
    };
    FiyatProvider.prototype.downloadIscilikFiyat = function (first) {
        var tip = "iscilikFiyatListesi";
        return this.getDataFromApi(first, tip);
    };
    FiyatProvider.prototype.getDataFromApi = function (first, tip) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.fiyatlarDownloadUrl(first, tip);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (this.util.isOnline()) {
                            this.util.loaderStart(false);
                            return [2 /*return*/, this.getFiyat(url, header, tip)];
                        }
                        else {
                            this.util.ifOffline();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FiyatProvider.prototype.getFiyat = function (url, header, tip) {
        return __awaiter(this, void 0, void 0, function () {
            var data, fiyatlar, list, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 1:
                        data = _a.sent();
                        fiyatlar = new __WEBPACK_IMPORTED_MODULE_3__entities_fiyat__["a" /* Fiyat */]();
                        return [4 /*yield*/, fiyatlar.fillFiyat(data, tip)];
                    case 2:
                        list = _a.sent();
                        if (!(this.util.isNotEmpty(list) && list.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.fiyatDao.insertList(list)];
                    case 3:
                        item = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].STATUS.SUCCESS);
                            reject(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].STATUS.ERROR);
                        })];
                }
            });
        });
    };
    FiyatProvider.prototype.getFiyatSorguFilter = function (detay, mamKod) {
        var item = new __WEBPACK_IMPORTED_MODULE_3__entities_fiyat__["a" /* Fiyat */]();
        item.mamKod = detay.mlzIsc == 'MLZ' ? 'MLZ' : mamKod;
        item.iscMlzKod = detay.mlzIscKod;
        return item;
    };
    FiyatProvider.prototype.findFiyat = function (detay, mamKod) {
        return __awaiter(this, void 0, void 0, function () {
            var fiyat, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fiyat = this.getFiyatSorguFilter(this.util.assign(detay), mamKod);
                        if (!(detay.mlzIsc != __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].DETAY_TIPI.DIGER)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fiyatDao.findFiyat(fiyat)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmptyRows(res)) {
                            this.logger.dir(res);
                            return [2 /*return*/, res.rows.item(0)];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    FiyatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_7__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
            __WEBPACK_IMPORTED_MODULE_8__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */]])
    ], FiyatProvider);
    return FiyatProvider;
}());

//# sourceMappingURL=fiyat.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fiyat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityUtil__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var Fiyat = (function (_super) {
    __extends(Fiyat, _super);
    function Fiyat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mamKod = null;
        _this.iscMlz = null;
        _this.iscMlzKod = null;
        _this.fiyat = null;
        _this.gdFiyat = null;
        _this.versiyon = null;
        return _this;
    }
    Fiyat.prototype.fillFiyat = function (res, tip) {
        var parsedList = [];
        var fiyatList = res.message[0].liste;
        var versiyon = res.message[0].versiyon;
        fiyatList.forEach(function (item) {
            var fiyat = new Fiyat();
            fiyat.mamKod = item.mamKod;
            fiyat.iscMlz = item.iscMlz;
            tip = item.iscMlz == 'MLZ' ? 'MLZ' : 'ISC';
            fiyat.iscMlzKod = item.iscMlzKod;
            fiyat.fiyat = item.fiyat;
            fiyat.gdFiyat = item.gdfiyat;
            fiyat.versiyon = item.versiyon;
            parsedList.push(fiyat);
        });
        if (tip == "MLZ" || tip == "malzemeFiyatListesi") {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.MALZEME_FIYAT, fiyatList.length);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.MALZEME_FIYAT, versiyon);
            this.indirilenVeriyiHesapla(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT, fiyatList.length);
        }
        else if (tip == 'ISC' || tip == "iscilikFiyatListesi") {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.ISCILIK_FIYAT, fiyatList.length);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.ISCILIK_FIYAT, versiyon);
            this.indirilenVeriyiHesapla(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT, fiyatList.length);
        }
        return new Promise(function (res) { return res(parsedList); });
    };
    return Fiyat;
}(__WEBPACK_IMPORTED_MODULE_1__EntityUtil__["a" /* EntityUtil */]));

//# sourceMappingURL=fiyat.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersiyonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/*
 Generated class for the VersiyonProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var VersiyonProvider = (function () {
    function VersiyonProvider(http, tokenProvider, api, util, logger) {
        this.http = http;
        this.tokenProvider = tokenProvider;
        this.api = api;
        this.util = util;
        this.logger = logger;
    }
    VersiyonProvider.prototype.getVersiyonFromServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var header, url, res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.tokenProvider.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        url = this.api.getVersiyonUrl();
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        res = _a.sent();
                        //this.logger.table(res);
                        this.setNewVersions(res);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.logger.error("Versiyon Indirme(Task)" + e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VersiyonProvider.prototype.setNewVersions = function (res) {
        var _this = this;
        var list = [];
        if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.message)) {
            list = res.message;
            list.forEach(function (val) {
                var serverTableName = val[0];
                var serverTableVersiyon = val[1];
                var clientTableName = __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].TABLE_SERVER_EQUIVALENT[serverTableName];
                localStorage.setItem(clientTableName, serverTableVersiyon);
                _this.logger.log("Yeni Versiyon ==> " + clientTableName + " : " + serverTableVersiyon);
            });
        }
    };
    VersiyonProvider.prototype.getVersiyonClientAndServer = function (tip) {
        var res = { client: "", server: "" };
        res.client = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT[tip]);
        res.server = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].VERSIYON.SERVER[tip]);
        return res;
    };
    VersiyonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__logger_logger__["a" /* LoggerProvider */]])
    ], VersiyonProvider);
    return VersiyonProvider;
}());

//# sourceMappingURL=versiyon.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiSorgu; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
var GarantiSorgu = (function () {
    function GarantiSorgu() {
        this.orgKod = null;
        this.serKod = null;
        this.mamKod = null;
        this.mamSeriNo = null;
        this.satisTarihi = null;
        this.islemTarihi = null;
        this.dilKod = "T";
    }
    return GarantiSorgu;
}());

//# sourceMappingURL=GarantiSorgu.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiSorguProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_garanti_sonuc_garanti_sonuc__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_token__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var GarantiSorguProvider = (function () {
    function GarantiSorguProvider(http, api, util, modalController, token) {
        this.http = http;
        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.token = token;
        console.log('Helo GarantiSorguProvider Provider');
        this.garantiSonuc = {};
    }
    GarantiSorguProvider.prototype.fetchDataFromApi = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.garantiSorguUrl();
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (this.util.isOnline()) {
                            return [2 /*return*/, this.http.post(url, data, { headers: header }).subscribe(function (res) {
                                    console.log(res);
                                    _this.showGarantiSonuc(res);
                                })];
                        }
                        else {
                            this.util.ifOffline();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GarantiSorguProvider.prototype.showGarantiSonuc = function (res) {
        if (res.responseCode == "SUCCESS") {
            var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__components_garanti_sonuc_garanti_sonuc__["a" /* GarantiSonucComponent */], {
                data: res.message
            }, {
                cssClass: this.util.getSelectedTheme()
            });
            aramaModal.present();
        }
        else {
            this.util.error(res.description);
        }
    };
    GarantiSorguProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__token_token__["a" /* TokenProvider */]])
    ], GarantiSorguProvider);
    return GarantiSorguProvider;
}());

//# sourceMappingURL=garanti-sorgu.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiSonucComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_GarantiSorgu__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GarantiSonucComponent = (function () {
    function GarantiSonucComponent(viewCtrl, params, util, urunDao, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.util = util;
        this.urunDao = urunDao;
        this.themeProvider = themeProvider;
        this.mamanaGrp = "";
        this.mamKod = "";
        this.mamAdi = "";
        this.garantiSuresi = "";
        this.garantiTipi = "";
        this.ekGaranti = "";
        this.aciklama = "";
        this.sonuc = "";
        this.garanti = new __WEBPACK_IMPORTED_MODULE_2__entities_GarantiSorgu__["a" /* GarantiSorgu */]();
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.data = params.get('data');
        this.loadData();
    }
    GarantiSonucComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    GarantiSonucComponent.prototype.loadData = function () {
        var _this = this;
        if (this.util.isNotEmpty(this.data.gbastar)) {
            this.garantiBasTar = new Date(this.data.gbastar);
        }
        if (this.util.isNotEmpty(this.data.gsure)) {
            this.garantiSuresi = this.data.gsure;
        }
        if (this.util.isNotEmpty(this.data.std_gbt)) {
            this.stdGarantiBitisTar = new Date(this.data.std_gbt);
        }
        if (this.util.isNotEmpty(this.data.garantiTipi)) {
            if (this.data.garantiTipi == "STD")
                this.garantiTipi = "Standart Garanti";
            if (this.data.garantiTipi == "EK")
                this.garantiTipi = "Ek Garanti";
        }
        if (this.util.isNotEmpty(this.data.garantiKodu)) {
            this.ekGaranti = this.data.garantiKodu;
        }
        if (this.util.isNotEmpty(this.data.ekgSure)) {
            this.ekGarantiSuresi = this.data.ekgSure;
        }
        if (this.util.isNotEmpty(this.data.ekGarBas)) {
            this.ekGarantiBasTar = new Date(this.data.ekGarBas);
        }
        if (this.util.isNotEmpty(this.data.mgarantiBitisTarihi)) {
            this.ekGarantiBitisTar = new Date(this.data.mgarantiBitisTarihi);
        }
        if (this.util.isNotEmpty(this.data.aciklama)) {
            this.aciklama = this.data.aciklama;
        }
        if (this.util.isNotEmpty(this.data.sonuc)) {
            this.sonuc = this.data.sonuc;
        }
        //this.mlzList = this.data.mlzList;
        this.sonuc = this.data.sonuc;
        this.mamKod = this.data.mamKod;
        if (this.util.isNotEmpty(this.mamKod)) {
            this.urunDao.getUrunAndUrunAnaGrup(this.mamKod).then(function (res) {
                if (res.rows.length > 0) {
                    _this.mamAdi = res.rows.item(0).mamAdi;
                    _this.mamKod = res.rows.item(0).mamKod;
                    _this.mamanaGrp = res.rows.item(0).anaGrupAdi;
                }
            });
        }
    };
    GarantiSonucComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'garanti-sonuc',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\garanti-sonuc\garanti-sonuc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Garanti Sonucu</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content garanti-sorgu" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n  <ion-card class="card-box">\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Ürün Ana Grubu:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{mamanaGrp}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Ürün Kodu ve Adı:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{mamKod}} - {{mamAdi}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Garanti Başlangıç Tarihi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{garantiBasTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Garanti Süresi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{garantiSuresi}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Standart Garanti Bitiş Tarihi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{stdGarantiBitisTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Garanti Tipi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{garantiTipi}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Ek Garanti:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{ekGaranti}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Ek Garanti Süresi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{ekGarantiSuresi}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Ek Garanti Başlangıç Tarihi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{ekGarantiBasTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-4 col-md-2 class="border-right">\n\n        <ion-label>\n\n          <strong>Garanti Bitiş Tarihi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n      <ion-col col-8 col-md-10>\n\n        <ion-label>{{ekGarantiBitisTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border" *ngIf="aciklama != null && aciklama != \'\'">\n\n      <ion-col col-12>\n\n        <ion-label>\n\n          {{aciklama}}\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="sonuc != null && sonuc != \'\'">\n\n      <ion-col col-12>\n\n        <ion-label>\n\n          {{sonuc}}\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\garanti-sonuc\garanti-sonuc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__["a" /* UrunDao */],
            __WEBPACK_IMPORTED_MODULE_5__providers_theme_theme__["a" /* ThemeProvider */]])
    ], GarantiSonucComponent);
    return GarantiSonucComponent;
}());

//# sourceMappingURL=garanti-sonuc.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilikSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urun_iscilik__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_urun_iscilik_dao_urun_iscilik_dao__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_urun_iscilik_urun_iscilik__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UrunIscilikSearchComponent = (function () {
    function UrunIscilikSearchComponent(viewCtrl, params, util, urunIscilikDao, urunIscilikProvider, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.urunIscilikDao = urunIscilikDao;
        this.urunIscilikProvider = urunIscilikProvider;
        this.themeProvider = themeProvider;
        this.list = [];
        this.selectedItem = { key: "", value: "" };
        this.searchText = "";
        this.pageable = new __WEBPACK_IMPORTED_MODULE_2__entities_Pageable__["a" /* Pageable */]();
        this.data = params.get('data');
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.ionViewDidLoad();
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_1__entities_urun_iscilik__["a" /* UrunIscilik */]();
    }
    UrunIscilikSearchComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    UrunIscilikSearchComponent.prototype.ionViewDidLoad = function () {
        this.fetchList('BEGINNING');
    };
    UrunIscilikSearchComponent.prototype.fetchList = function (type) {
        this.pageable.tip = type;
        this.pageable = this.pageable.compute();
        this.list = [];
        if (this.data.type == __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK) {
            this.fetchUrunIscilikList();
        }
    };
    UrunIscilikSearchComponent.prototype.fetchUrunIscilikList = function () {
        var _this = this;
        var urunSearch = new __WEBPACK_IMPORTED_MODULE_1__entities_urun_iscilik__["a" /* UrunIscilik */]();
        urunSearch.iscKod = this.searchText;
        urunSearch.iscAdi = this.searchText;
        urunSearch.mamKod = this.data.mamKod;
        this.urunIscilikProvider.getList(urunSearch, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE, this.pageable).then(function (data) {
            _this.fillList(data);
        });
    };
    UrunIscilikSearchComponent.prototype.fillList = function (data) {
        var res = data.res.rows;
        this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
        for (var i = 0; i < res.length; i++) {
            this.fillItemByType(res.item(i));
        }
        console.dir(res);
    };
    UrunIscilikSearchComponent.prototype.fillItemByType = function (item) {
        if (this.data.type == __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP) {
            this.list.push({ key: item.mamAnaGrp, value: item.ad });
        }
        if (this.data.type == __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN) {
            this.list.push({ key: item.mamAdi, value: item.mamKod });
        }
        if (this.data.type == __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK) {
            this.list.push({ key: item.iscAdi, value: item.iscKod });
        }
    };
    UrunIscilikSearchComponent.prototype.ionChange = function (item) {
        if (this.data.type == __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK)
            this.prepareUrunIscilikReturnValue(item);
        this.viewCtrl.dismiss(this.returnObject);
    };
    UrunIscilikSearchComponent.prototype.prepareUrunIscilikReturnValue = function (item) {
        this.urunIscilik.iscAdi = this.util.isEmpty(item.key) ? '' : item.key;
        this.urunIscilik.iscKod = this.util.isEmpty(item.value) ? '' : item.value;
        this.returnObject = this.urunIscilik;
    };
    UrunIscilikSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'urun-iscilik-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\urun-iscilik-search\urun-iscilik-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Ürün İşçilik Arama</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list" class="row-border">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-4 col-md-2>\n\n      <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-double-left"></i>\n\n        </ion-label>\n\n      </button>\n\n      <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-left"></i>\n\n        </ion-label>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-8>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-2>\n\n      <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-right"></i>\n\n        </ion-label>\n\n      </button>\n\n      <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n        <ion-label>\n\n          <i class="fas fa-angle-double-right"></i>\n\n        </ion-label>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\urun-iscilik-search\urun-iscilik-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_urun_iscilik_dao_urun_iscilik_dao__["a" /* UrunIscilikDao */],
            __WEBPACK_IMPORTED_MODULE_7__providers_urun_iscilik_urun_iscilik__["a" /* UrunIscilikProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__["a" /* ThemeProvider */]])
    ], UrunIscilikSearchComponent);
    return UrunIscilikSearchComponent;
}());

//# sourceMappingURL=urun-iscilik-search.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MalzemeSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_urun_malzeme__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urun_malzeme_urun_malzeme__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var MalzemeSearchComponent = (function () {
    function MalzemeSearchComponent(viewCtrl, params, malzemeProvider, logger, util, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.malzemeProvider = malzemeProvider;
        this.logger = logger;
        this.util = util;
        this.themeProvider = themeProvider;
        this.list = [];
        this.selectedItem = { key: "", value: "" };
        this.searchText = "";
        this.pageable = new __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__["a" /* Pageable */]();
        this.data = params.get('data');
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.malzeme = new __WEBPACK_IMPORTED_MODULE_2__entities_urun_malzeme__["a" /* UrunMalzeme */]();
        this.searchType = __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE;
        this.ionViewDidLoad();
    }
    MalzemeSearchComponent.prototype.closeModal = function () {
        this.ionChange({ key: '', value: '' });
    };
    MalzemeSearchComponent.prototype.ionViewDidLoad = function () {
        this.fetchList('BEGINNING');
    };
    MalzemeSearchComponent.prototype.fetchList = function (type) {
        this.pageable.tip = type;
        this.pageable = this.pageable.compute();
        this.list = [];
        this.fetchUrunList();
    };
    MalzemeSearchComponent.prototype.fetchUrunList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filter, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = this.prepareSearchMalzeme();
                        return [4 /*yield*/, this.malzemeProvider.getList(filter, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE, this.pageable)];
                    case 1:
                        data = _a.sent();
                        this.fillList(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    MalzemeSearchComponent.prototype.prepareSearchMalzeme = function () {
        var filter = new __WEBPACK_IMPORTED_MODULE_2__entities_urun_malzeme__["a" /* UrunMalzeme */]();
        filter.mlzAdi = this.searchText;
        filter.mlzKod = this.searchText;
        if (this.util.isNotEmpty(this.data.searchType)) {
            this.searchType = this.data.searchType;
        }
        return filter;
    };
    MalzemeSearchComponent.prototype.fillList = function (data) {
        var res = data.res.rows;
        this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
        for (var i = 0; i < res.length; i++) {
            this.fillItemByType(res.item(i));
        }
        this.logger.dir(res);
    };
    MalzemeSearchComponent.prototype.fillItemByType = function (item) {
        this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });
    };
    MalzemeSearchComponent.prototype.ionChange = function (item) {
        this.prepareUrunReturnValue(item);
        this.viewCtrl.dismiss(this.returnObject);
    };
    MalzemeSearchComponent.prototype.prepareUrunReturnValue = function (item) {
        this.malzeme.mlzKod = this.util.isEmpty(item.key) ? '' : item.key;
        this.malzeme.mlzAdi = this.util.isEmpty(item.value) ? '' : item.value;
        this.returnObject = this.malzeme;
    };
    MalzemeSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'malzeme-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\malzeme-search\malzeme-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Malzeme Arama</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n\n\n    <ion-col col-4 col-md-4>\n\n      <ion-row>\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-double-left"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-left"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-4>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-4>\n\n      <ion-row>\n\n\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-right"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-double-right"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\malzeme-search\malzeme-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_urun_malzeme_urun_malzeme__["a" /* UrunMalzemeProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__["a" /* ThemeProvider */]])
    ], MalzemeSearchComponent);
    return MalzemeSearchComponent;
}());

//# sourceMappingURL=malzeme-search.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_Ankets_AnketCevap__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var QA = (function () {
    function QA() {
    }
    return QA;
}());

var AnketComponent = (function () {
    function AnketComponent(params, viewCtrl, util, hizmetService, logger, themeProvider) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.hizmetService = hizmetService;
        this.logger = logger;
        this.themeProvider = themeProvider;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__entities_user__["a" /* User */]();
        this.data = params.get('data');
        this.hizmet = this.data.hizmet;
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.anket = this.data.hizmet.anket;
        this.qAList = [];
        this.loadAnket();
        this.isHizmetDisabled = this.hizmetService.isHizmetDisabled(this.hizmet);
    }
    ;
    AnketComponent.prototype.loadAnket = function () {
        var _this = this;
        this.anket.anketSorular.forEach(function (item) {
            var qA = new QA();
            qA.soru = item;
            qA.cevap = _this.getAnketCevap(item);
            _this.qAList.push(qA);
        });
    };
    AnketComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AnketComponent.prototype.kaydet = function () {
        var _this = this;
        var cevapList = [];
        this.qAList
            .filter(function (qa) { return _this.util.isNotEmpty(qa.cevap.cevapText); })
            .forEach(function (qa) { return cevapList.push(qa.cevap); });
        this.hizmet.anket.anketCevaplar = cevapList;
        this.saveHizmet();
    };
    AnketComponent.prototype.saveHizmet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _a.sent();
                        this.util.success("Anket Bilgileri Kayıt Edildi");
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnketComponent.prototype.getAnketCevap = function (soru) {
        var cevap;
        var soruId = soru.serSoruTnm.soruId;
        if (this.util.isNotEmpty(this.anket.anketCevaplar) && this.anket.anketCevaplar.length > 0) {
            cevap = this.anket.anketCevaplar.find(function (item) { return item.soruId == soruId; });
        }
        if (this.util.isEmpty(cevap)) {
            cevap = this.prepareCevap(soru);
        }
        return cevap;
    };
    AnketComponent.prototype.prepareCevap = function (soru) {
        var cevap = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_Ankets_AnketCevap__["a" /* AnketCevap */]();
        cevap.anketId = this.anket.anketMst.anketId;
        cevap.anketSeq = this.anket.anketMst.anketSeq;
        cevap.soruId = soru.serSoruTnm.soruId;
        cevap.orgKod = this.user.getOrgKod();
        cevap.cevapId = 0;
        return cevap;
    };
    AnketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'anket',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\anket\anket.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title>Anket</ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-row *ngFor="let item of qAList">\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>{{item.soru.serSoruTnm.soruText}}:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-input [(ngModel)]="item.cevap.cevapText" [disabled]="isHizmetDisabled"></ion-input>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n      <button ion-button round (click)="kaydet()" full [disabled]="isHizmetDisabled">\n\n        <span class="icon-right">\n\n          <i class="fas fa-save"></i>\n\n        </span>Kaydet\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\anket\anket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme__["a" /* ThemeProvider */]])
    ], AnketComponent);
    return AnketComponent;
}());

//# sourceMappingURL=anket.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BilgiSorguPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BilgiSorguPage = (function () {
    function BilgiSorguPage(navCtrl, navParams, formBuilder, themeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.themeProvider = themeProvider;
        this.activePage = "garantiSorguSegment";
        this.backGroundImage = this.themeProvider.getBackgroundImage();
    }
    BilgiSorguPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BilgiSorguPage');
    };
    BilgiSorguPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bilgi-sorgu',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\bilgi-sorgu\bilgi-sorgu.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-title class="page-title">Bilgi Sorgu</ion-title>\n\n\n\n  <ion-toolbar class="main-tabs">\n\n    <ion-segment [(ngModel)]="activePage">\n\n\n\n      <ion-segment-button value="garantiSorguSegment" class="seg-button">\n\n        Garanti Sorgu\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="fiyatSorguSegment" class="seg-button">\n\n        Fiyat Sorgu\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="activePage">\n\n\n\n    <div *ngSwitchCase="\'garantiSorguSegment\'">\n\n      <garanti-sorgu></garanti-sorgu>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'fiyatSorguSegment\'">\n\n      <fiyat-sorgu></fiyat-sorgu>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\bilgi-sorgu\bilgi-sorgu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_theme_theme__["a" /* ThemeProvider */]])
    ], BilgiSorguPage);
    return BilgiSorguPage;
}());

//# sourceMappingURL=bilgi-sorgu.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUrunAnaGrupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_hizmet_hizmet__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_brans_brans__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_Brans__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













/**
 * @author mali.sahin
 * @since  18.06.2018
 */
var UpdateUrunAnaGrupComponent = (function () {
    function UpdateUrunAnaGrupComponent(util, logger, viewCtrl, modalController, bransProvider, urunAnaGrupProvider, navParams, hizmetService, hizmetProvider, urunAnaGrupDao, themeProvider) {
        this.util = util;
        this.logger = logger;
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.bransProvider = bransProvider;
        this.urunAnaGrupProvider = urunAnaGrupProvider;
        this.navParams = navParams;
        this.hizmetService = hizmetService;
        this.hizmetProvider = hizmetProvider;
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.themeProvider = themeProvider;
        this.basvuruNedeni = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
        this.basvuruNedeniList = [];
        this.data = {};
        this.bransListesi = [];
        this.selectedBrans = new __WEBPACK_IMPORTED_MODULE_11__entities_Brans__["a" /* Brans */]();
        this.logger.dir(this.navParams.data);
        this.hizmet = this.navParams.get("hizmet");
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.init();
    }
    UpdateUrunAnaGrupComponent.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.selectedBrans.mamAnaGrp = this.hizmet.mamAnaGrp;
                        this.basvuruNedeni.neden = this.hizmet.basvuruNedeni;
                        return [4 /*yield*/, this.prepareBasvuruList()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getBransList()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent.prototype.onChangeMamAnaGrp = function () {
        this.basvuruNedeni = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
        this.prepareBasvuruList();
    };
    UpdateUrunAnaGrupComponent.prototype.prepareBasvuruList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var basvuruNeden, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        basvuruNeden = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
                        basvuruNeden.mamAnaGrp = this.selectedBrans.mamAnaGrp;
                        this.basvuruNedeniList = [];
                        return [4 /*yield*/, this.urunAnaGrupDao.getList(basvuruNeden, __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT)];
                    case 1:
                        res = _a.sent();
                        this.basvuruNedeniList = this.fillDbList(res, __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent.prototype.fillDbList = function (res, tip) {
        var list = [];
        if (this.util.isNotEmpty(res)) {
            for (var i = 0; i < res.rows.length; i++) {
                var item = res.rows.item(i);
                var anaGrp = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](tip);
                anaGrp.mamAnaGrp = item.mamAnaGrp;
                anaGrp.ad = item.ad;
                anaGrp.neden = item.neden;
                list.push(anaGrp);
            }
        }
        return list;
    };
    UpdateUrunAnaGrupComponent.prototype.kaydet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hizmet.mamAnaGrp = this.selectedBrans.mamAnaGrp;
                        this.hizmet.basvuruNedeni = this.basvuruNedeni.neden;
                        return [4 /*yield*/, this.urunAnaGrupProvider.updateMamAnaGrp(this.hizmet)];
                    case 1:
                        res = _a.sent();
                        this.logger.warn(res);
                        if (this.util.isOnline()) {
                            this.setGarantiDegisimSonuc(res);
                        }
                        else {
                            this.util.ifOffline();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent.prototype.setGarantiDegisimSonuc = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.hizmetProvider.updateComingData(res)];
                    case 1:
                        _a.sent();
                        this.logger.log(res);
                        return [4 /*yield*/, this.getUpdatedHizmet()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.iptal();
                        this.util.error("Ürün Ana Grubu değiştirirken hata oluştu.Verileri kontrol ediniz.");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent.prototype.getUpdatedHizmet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hizmetService.fetchHizmet(this.hizmet.seqNo)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmptyRows(res)) {
                            this.hizmet = JSON.parse(res.rows.item(0).data);
                            this.logger.log(this.hizmet);
                            this.viewCtrl.dismiss({ hizmet: this.hizmet });
                        }
                        else {
                            this.util.error("Ürün Ana Grup Değiştirirken hata oluştu.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent.prototype.iptal = function () {
        this.viewCtrl.dismiss();
    };
    UpdateUrunAnaGrupComponent.prototype.getBransList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filter, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.util.isNotEmpty(this.hizmet.hizmetTipi)) return [3 /*break*/, 2];
                        filter = new __WEBPACK_IMPORTED_MODULE_11__entities_Brans__["a" /* Brans */]();
                        filter.hizmetTipi = this.hizmet.hizmetTipi;
                        this.bransListesi = [];
                        _a = this;
                        return [4 /*yield*/, this.bransProvider.getList(filter)];
                    case 1:
                        _a.bransListesi = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'update-urun-ana-grup',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\update-urun-ana-grup\update-urun-ana-grup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Ürün Ana Grup Değiştir</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="iptal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n  <ion-row>\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Ürün Ana Grup:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-select [(ngModel)]="selectedBrans.mamAnaGrp" interface="popover" (ionChange)="onChangeMamAnaGrp()">\n\n        <ion-option *ngFor="let brans of bransListesi" [value]="brans.mamAnaGrp">\n\n          {{brans.exp}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Başvuru Nedeni:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-select [(ngModel)]="basvuruNedeni.neden" interface="popover">\n\n        <ion-option *ngFor="let neden of basvuruNedeniList" [value]="neden.neden">\n\n          {{neden.neden}} - {{neden.ad }}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <button ion-button round full (click)="kaydet();">\n\n        <span class="icon-right">\n\n          <i class="fas fa-save"></i>\n\n        </span>Kaydet </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\update-urun-ana-grup\update-urun-ana-grup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_brans_brans__["a" /* BransProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_urun_ana_grp_urun_ana_grp__["a" /* UrunAnaGrpProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_hizmet_hizmet__["a" /* HizmetProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */],
            __WEBPACK_IMPORTED_MODULE_12__providers_theme_theme__["a" /* ThemeProvider */]])
    ], UpdateUrunAnaGrupComponent);
    return UpdateUrunAnaGrupComponent;
}());

//# sourceMappingURL=update-urun-ana-grup.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BransProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brans_dao_brans_dao__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Brans__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * @author mali.sahin
 * @since 31-07-2018
 */
var BransProvider = (function () {
    function BransProvider(util, bransDao, logger) {
        this.util = util;
        this.bransDao = bransDao;
        this.logger = logger;
    }
    BransProvider.prototype.insertList = function (bransData) {
        var list = this.fillList(bransData);
        return this.bransDao.insertList(list);
    };
    BransProvider.prototype.fillList = function (bransData) {
        var bransList = [];
        bransData.forEach(function (item) {
            var brans = new __WEBPACK_IMPORTED_MODULE_3__entities_Brans__["a" /* Brans */]();
            brans.hizmetTipi = item.hizmetTipi;
            brans.mamAnaGrp = item.mamAnaGrp;
            brans.exp = item.exp;
            bransList.push(brans);
        });
        return bransList;
    };
    BransProvider.prototype.getList = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var bransList, result, rows, i, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bransList = [];
                        return [4 /*yield*/, this.bransDao.getList(filter)];
                    case 1:
                        result = _a.sent();
                        if (this.util.isNotEmptyRows(result.res)) {
                            rows = result.res.rows;
                            for (i = 0; i < rows.length; i++) {
                                item = rows.item(i);
                                bransList.push(__WEBPACK_IMPORTED_MODULE_3__entities_Brans__["a" /* Brans */].create(item.hizmetTipi, item.mamAnaGrp, item.exp));
                            }
                        }
                        return [2 /*return*/, bransList];
                }
            });
        });
    };
    BransProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_2__brans_dao_brans_dao__["a" /* BransDao */], __WEBPACK_IMPORTED_MODULE_4__logger_logger__["a" /* LoggerProvider */]])
    ], BransProvider);
    return BransProvider;
}());

//# sourceMappingURL=brans.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetDetayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_DetayKayit__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detay_piy_search_detay_piy_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_fiyat__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_islem_ariza_iscilik__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_ProcessResults__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var HizmetDetayComponent = (function () {
    function HizmetDetayComponent(viewCtrl, params, modalController, util, logger, fiyatDao, islemArizaIscilikDao, hizmetService, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.modalController = modalController;
        this.util = util;
        this.logger = logger;
        this.fiyatDao = fiyatDao;
        this.islemArizaIscilikDao = islemArizaIscilikDao;
        this.hizmetService = hizmetService;
        this.themeProvider = themeProvider;
        this.islemAdi = "";
        this.arizaAdi = "";
        this.islemTipi = "";
        this.mlzIscKod = "";
        this.aciklama = "";
        this.canModalCloseable = true;
        this.islemTipiDegistirmeSayisi = 0;
        this.hizmet = this.hizmetService.getHizmet();
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.hizmetDetay = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_DetayKayit__["a" /* DetayKayit */]();
        this.data = params.get('data');
        this.init();
    }
    HizmetDetayComponent.prototype.init = function () {
        if (this.util.isNotEmpty(this.data.hizmetDetay)) {
            this.prepareFieldsForUpdate();
        }
        else {
            this.prepareFieldsForNewRecord();
        }
    };
    HizmetDetayComponent.prototype.prepareFieldsForUpdate = function () {
        this.hizmetDetay = this.data.hizmetDetay;
        this.islemAdi = this.hizmetDetay.islemKod;
        this.arizaAdi = this.hizmetDetay.arizaKod;
        this.mlzIscKod = this.hizmetDetay.mlzIscKod;
        this.birimfiyat = this.hizmetDetay.tutar / this.hizmetDetay.miktar;
        this.aciklama = this.hizmetDetay.aciklama;
        this.satirNo = this.hizmetDetay.satirNo;
        this.loadHizmetDetay();
    };
    HizmetDetayComponent.prototype.prepareFieldsForNewRecord = function () {
        var _this = this;
        var dtoList = this.hizmet.detayDtoList;
        if (this.util.isNotEmpty(dtoList) && dtoList.length > 0) {
            dtoList.forEach(function (item) {
                if (item.mlzIsc == __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].DETAY_TIPI.ISCILIK) {
                    _this.hizmetDetay.islemKod = item.islemKod;
                    _this.hizmetDetay.arizaKod = item.arizaKod;
                    _this.loadHizmetDetay();
                }
            });
        }
    };
    HizmetDetayComponent.prototype.detayKaydet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = this.kaydetmeKontrol();
                        if (!res.isErrorMessagesNotNull()) return [3 /*break*/, 1];
                        this.canModalCloseable = false;
                        this.util.pushAllMessages(res);
                        return [3 /*break*/, 5];
                    case 1:
                        if (!this.util.isEmpty(this.hizmetDetay.satirNo)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.yeniDetayKaydet()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.detayGuncelle()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (this.canModalCloseable) {
                            this.hizmetService.saveAndFetchHizmet(this.hizmet).then(function (res) {
                                _this.logger.dir(res);
                                _this.closeModal();
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.yeniDetayKaydet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fiyatBul()];
                    case 1:
                        _a.sent();
                        if (this.util.isNotEmpty(this.hizmetDetay.tutar) && this.hizmetDetay.tutar > 0) {
                            if (this.util.isEmpty(this.hizmet.detayDtoList))
                                this.hizmet.detayDtoList = [];
                            this.hizmetDetay.seqNo = this.hizmet.seqNo;
                            this.satirNoBelirle();
                            if (this.util.isNotEmpty(this.hizmetDetay.birimFiyat) && this.hizmetDetay.birimFiyat > 0)
                                this.hizmet.detayDtoList.push(this.hizmetDetay);
                            this.canModalCloseable = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.detayGuncelle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var silinecekDetayKayit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        silinecekDetayKayit = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_DetayKayit__["a" /* DetayKayit */]();
                        this.hizmet.detayDtoList.filter(function (det) {
                            if (det.satirNo == _this.satirNo) {
                                silinecekDetayKayit = det;
                                // det = this.fillHizmetDetay();
                            }
                        });
                        this.deleteHizmetDetay(silinecekDetayKayit);
                        return [4 /*yield*/, this.yeniDetayKaydet()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.deleteHizmetDetay = function (item) {
        var index = this.hizmet.detayDtoList.indexOf(item);
        if (index > -1) {
            this.hizmet.detayDtoList.splice(index, 1);
        }
    };
    HizmetDetayComponent.prototype.fillHizmetDetay = function () {
        var detay = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_DetayKayit__["a" /* DetayKayit */]();
        var hizmetDetay = JSON.parse(JSON.stringify(this.hizmetDetay));
        detay.satirNo = this.satirNo;
        detay.birimFiyat = hizmetDetay.birimFiyat;
        detay.garFiyat = hizmetDetay.garFiyat;
        detay.tutar = hizmetDetay.tutar;
        detay.islemKod = hizmetDetay.islemKod;
        detay.arizaKod = hizmetDetay.arizaKod;
        detay.mlzIscKod = hizmetDetay.mlzIscKod;
        detay.aciklama = hizmetDetay.aciklama;
        detay.miktar = hizmetDetay.miktar;
        detay.garFiyat = hizmetDetay.garFiyat;
        detay.birimFiyat = hizmetDetay.birimFiyat;
        detay.tutar = hizmetDetay.tutar;
        detay.garTutar = hizmetDetay.garTutar;
        return detay;
    };
    HizmetDetayComponent.prototype.satirNoBelirle = function () {
        var maxSatirNo = 0;
        for (var i = 0; i < this.hizmet.detayDtoList.length; i++) {
            var currentSatirNo = this.hizmet.detayDtoList[i].satirNo;
            if (currentSatirNo > maxSatirNo)
                maxSatirNo = currentSatirNo;
        }
        this.hizmetDetay.satirNo = maxSatirNo + 1;
    };
    HizmetDetayComponent.prototype.fiyatBul = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fiyatSorguParam, fiyatRes, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.hizmetDetay.mlzIsc != "DGR")) return [3 /*break*/, 2];
                        fiyatSorguParam = this.fiyatSorguParametreHazirla();
                        return [4 /*yield*/, this.fiyatDao.findFiyat(fiyatSorguParam)];
                    case 1:
                        fiyatRes = _a.sent();
                        debugger;
                        if (fiyatRes.rows.length > 0) {
                            item = fiyatRes.rows.item(0);
                            //this.logger.table(item);
                            this.hizmetDetay.birimFiyat = item.fiyat;
                            this.hizmetDetay.garFiyat = item.gdfiyat;
                            this.hizmetDetay.tutar = Number(this.hizmetDetay.miktar) * Number(this.hizmetDetay.birimFiyat);
                        }
                        else {
                            this.util.info("Fiyat Bulunamadı");
                            this.canModalCloseable = false;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.hizmetDetay.tutar = Number(this.hizmetDetay.miktar) * Number(this.hizmetDetay.birimFiyat);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.fiyatSorguParametreHazirla = function () {
        var item = new __WEBPACK_IMPORTED_MODULE_8__entities_fiyat__["a" /* Fiyat */]();
        item.mamKod = this.hizmetDetay.mlzIsc == 'MLZ' ? 'MLZ' : this.hizmet.mamKod;
        item.iscMlzKod = this.hizmetDetay.mlzIscKod;
        return item;
    };
    HizmetDetayComponent.prototype.kaydetmeKontrol = function () {
        var res = new __WEBPACK_IMPORTED_MODULE_12__entities_ProcessResults__["a" /* ProcessResults */]();
        if (this.util.isEmpty(this.hizmetDetay.islemKod)) {
            res.addErrorMessage("Lütfen işlem Kodu seçiniz.");
        }
        if (this.util.isEmpty(this.hizmetDetay.arizaKod)) {
            res.addErrorMessage("Lütfen Arıza kodu seçiniz");
        }
        if (this.util.isEmpty(this.hizmetDetay.mlzIscKod)) {
            res.addErrorMessage("Lütfen Parça/Işçilik/Yol seçiniz.");
        }
        return res;
    };
    HizmetDetayComponent.prototype.IslemArizaIscilikBul = function (tip) {
        var _this = this;
        var piyModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__detay_piy_search_detay_piy_search__["a" /* DetayPiySearchComponent */], {
            data: {
                dataType: tip,
                filter: this.hizmetDetay
            }
        }, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
        piyModal.onDidDismiss(function (res) {
            _this.logger.dir(res);
            if (tip == "ISLEM") {
                _this.hizmetDetay.islemKod = res.data.key;
                _this.islemAdi = res.data.key + " - " + res.data.value;
                _this.hizmetDetay.arizaKod = "";
                _this.hizmetDetay.mlzIscKod = "";
                _this.hizmetDetay.aciklama = "";
                _this.arizaAdi = "";
                _this.mlzIscKod = "";
                _this.aciklama = "";
            }
            if (tip == "ARIZA") {
                _this.hizmetDetay.arizaKod = res.data.key;
                _this.arizaAdi = res.data.key + " - " + res.data.value;
                _this.hizmetDetay.mlzIscKod = "";
                _this.hizmetDetay.aciklama = "";
                _this.mlzIscKod = "";
                _this.aciklama = "";
            }
            if (tip == "PIY") {
                _this.hizmetDetay.mlzIscKod = res.data.key;
                _this.hizmetDetay.aciklama = res.data.value;
                _this.mlzIscKod = res.data.key;
                _this.aciklama = res.data.value;
            }
        });
        piyModal.present();
    };
    HizmetDetayComponent.prototype.loadHizmetDetay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var islemArizaIscilik;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        islemArizaIscilik = new __WEBPACK_IMPORTED_MODULE_11__entities_islem_ariza_iscilik__["a" /* IslemArizaIscilik */]();
                        islemArizaIscilik.mamAnaGrp = this.hizmet.mamAnaGrp;
                        islemArizaIscilik.islGrp = this.hizmetDetay.islemKod;
                        islemArizaIscilik.arzGrp = this.hizmetDetay.arizaKod;
                        islemArizaIscilik.iscKod = this.hizmetDetay.mlzIscKod;
                        return [4 /*yield*/, this.islemArizaIscilikDao.getIslemGrup(islemArizaIscilik).then(function (query) {
                                _this.logger.warn(query);
                                if (_this.util.isNotEmpty(query) && query.rows.length > 0) {
                                    var item = query.rows.item(0);
                                    _this.islemAdi = item.islemGrp + " - " + item.islemGrpAdi;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.islemArizaIscilikDao.getArizaGrup(islemArizaIscilik).then(function (query) {
                                _this.logger.warn(query);
                                if (_this.util.isNotEmpty(query) && query.rows.length > 0) {
                                    var item = query.rows.item(0);
                                    _this.arizaAdi = item.arizaGrp + " - " + item.arizaGrpAdi;
                                    _this.mlzIscKod = _this.hizmetDetay.mlzIscKod;
                                    _this.aciklama = _this.hizmetDetay.aciklama;
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    HizmetDetayComponent.prototype.onChangeIslemTipi = function () {
        this.hizmetDetay.birimFiyat = null;
        this.hizmetDetay.garFiyat = null;
        this.hizmetDetay.tutar = null;
        if (this.islemTipiDegistirmeSayisi > 0) {
            this.hizmetDetay.islemKod = "";
            this.hizmetDetay.arizaKod = "";
            this.islemAdi = "";
            this.arizaAdi = "";
        }
        this.hizmetDetay.mlzIscKod = "";
        this.hizmetDetay.aciklama = "";
        this.hizmetDetay.miktar = 1;
        this.hizmetDetay.garFiyat = "1";
        this.hizmetDetay.birimFiyat = 1;
        this.hizmetDetay.tutar = 0;
        this.hizmetDetay.garTutar = "0";
        this.mlzIscKod = "";
        this.aciklama = "";
        this.islemTipiDegistirmeSayisi += 1;
    };
    HizmetDetayComponent.prototype.onChangeIslemKodu = function () {
    };
    HizmetDetayComponent.prototype.onChangeArizaKodu = function () {
    };
    HizmetDetayComponent.prototype.onChangeMlzIscKod = function () {
    };
    HizmetDetayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hizmet-detay',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\hizmet-detay\hizmet-detay.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Hizmet detay</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- Generated template for the HizmetBilgileriComponent component -->\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n  <ion-row>\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label>\n\n        <strong>İşlem Tipi:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-select [(ngModel)]="hizmetDetay.mlzIsc" (ionChange)="onChangeIslemTipi()" interface="popover">\n\n        <ion-option value="" selected="true"></ion-option>\n\n        <ion-option value="ISC">İşçilik</ion-option>\n\n        <ion-option value="MLZ">Malzeme</ion-option>\n\n        <ion-option value="KM">Yol</ion-option>\n\n        <ion-option value="DGR">Diğer</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label>\n\n        <strong>İşlem Kodu:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="islemAdi" (ionChange)="onChangeIslemKodu()" (ionFocus)="IslemArizaIscilikBul(\'ISLEM\')"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label>\n\n        <strong>Arıza Kodu:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="arizaAdi" (ionChange)="onChangeArizaKodu()" (ionFocus)="IslemArizaIscilikBul(\'ARIZA\')"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label>\n\n        <strong>P/I/Y Kodu:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="mlzIscKod" (ionChange)="onChangeMlzIscKod()" (ionFocus)="IslemArizaIscilikBul(\'PIY\')"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label>\n\n        <strong>P/I/Y Açıklama:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="aciklama"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2 *ngIf="hizmetDetay.mlzIsc == \'DGR\' || hizmetDetay.mlzIsc == \'KM\' || hizmetDetay.mlzIsc ==\'MLZ\'">\n\n      <ion-label>\n\n        <strong>Miktar:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10 *ngIf="hizmetDetay.mlzIsc == \'DGR\' || hizmetDetay.mlzIsc == \'KM\' || hizmetDetay.mlzIsc ==\'MLZ\'">\n\n      <ion-input type="number" [(ngModel)]="hizmetDetay.miktar"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2 *ngIf="hizmetDetay.mlzIsc == \'DGR\'">\n\n      <ion-label>\n\n        <strong>Birim Fiyat:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10 *ngIf="hizmetDetay.mlzIsc == \'DGR\'">\n\n      <ion-input type="number" [(ngModel)]="hizmetDetay.birimFiyat"></ion-input>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-md-12>\n\n      <button ion-button icon-end (click)="detayKaydet()" round full>\n\n        <span class="icon-right">\n\n          <i class="fas fa-save"></i>\n\n        </span> Kaydet\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\hizmet-detay\hizmet-detay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
            __WEBPACK_IMPORTED_MODULE_10__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */],
            __WEBPACK_IMPORTED_MODULE_9__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_theme_theme__["a" /* ThemeProvider */]])
    ], HizmetDetayComponent);
    return HizmetDetayComponent;
}());

//# sourceMappingURL=hizmet-detay.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetayPiySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urun_malzeme_urun_malzeme__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_urun_malzeme__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var SearchItem = (function () {
    function SearchItem() {
        this.key = "";
        this.value = "";
        this.data = {};
    }
    return SearchItem;
}());
var DetayPiySearchComponent = (function () {
    function DetayPiySearchComponent(viewCtrl, params, util, hizmetService, urunMalzemeProvider, islemArizaIscilikDao, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.util = util;
        this.hizmetService = hizmetService;
        this.urunMalzemeProvider = urunMalzemeProvider;
        this.islemArizaIscilikDao = islemArizaIscilikDao;
        this.themeProvider = themeProvider;
        this.list = [];
        this.selectedItem = {
            key: "",
            value: "",
            data: {}
        };
        this.searchText = "";
        this.pageable = new __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__["a" /* Pageable */]();
        this.data = params.get("data");
        this.dataType = this.data.dataType;
        this.hizmet = this.hizmetService.getHizmet();
        this.filter = this.data.filter;
        this.backGroundImage = this.themeProvider.getBackgroundImage();
    }
    DetayPiySearchComponent.prototype.closeModal = function () {
        this.ionChange({ key: "", value: "" });
    };
    DetayPiySearchComponent.prototype.ionViewDidLoad = function () {
        this.fetchList("BEGINNING");
    };
    DetayPiySearchComponent.prototype.fetchList = function (type) {
        var _this = this;
        this.pageable.tip = type;
        this.pageable = this.pageable.compute();
        this.list = [];
        this.prepareSearchItem();
        if (this.dataType == "ISLEM") {
            this.islemArizaIscilikDao
                .getIslemGrupPage(this.filter, this.searchText)
                .then(function (data) {
                _this.pageable.listLength = data.listLength;
                _this.fillList(data);
            });
        }
        if (this.dataType == "ARIZA") {
            this.islemArizaIscilikDao
                .getArizaGrupPage(this.filter, this.searchText)
                .then(function (data) {
                _this.pageable.listLength = data.listLength;
                _this.fillList(data);
            });
        }
        if (this.dataType == "PIY") {
            if (this.util.isNotEmpty(this.data.filter) &&
                this.util.isNotEmpty(this.data.filter.mlzIsc)) {
                var mlzIsc = this.data.filter.mlzIsc;
                if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.MALZEME)
                    this.getMalzeme();
                if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.ISCILIK)
                    this.getIscilik();
                if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.YOL)
                    this.getYol();
                if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.DIGER)
                    this.getDiger();
            }
        }
    };
    DetayPiySearchComponent.prototype.getIscilik = function () {
        var _this = this;
        this.islemArizaIscilikDao
            .getPIYKoduPage(this.filter, this.hizmet.mamKod, this.searchText)
            .then(function (data) {
            _this.pageable.listLength = data.listLength;
            _this.fillList(data);
        });
    };
    DetayPiySearchComponent.prototype.getMalzeme = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filter, searchType, malzemeList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = new __WEBPACK_IMPORTED_MODULE_7__entities_urun_malzeme__["a" /* UrunMalzeme */]();
                        //TODO: SEARCH URUN-MALZEME as PAGEABLE
                        filter.mamKod = this.hizmet.mamKod;
                        searchType = __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE;
                        filter.mlzAdi = this.searchText;
                        filter.mlzKod = this.searchText;
                        return [4 /*yield*/, this.urunMalzemeProvider.getList(filter, searchType, this.pageable)];
                    case 1:
                        malzemeList = _a.sent();
                        this.pageable.listLength = malzemeList.listLength;
                        this.fillList(malzemeList.res);
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayPiySearchComponent.prototype.getYol = function () {
        var yolIsciligi = { key: "999988", value: "Yol İşçiliği" };
        this.list.push({ key: "999988", value: "Yol İşçiliği", data: {} });
    };
    DetayPiySearchComponent.prototype.getDiger = function () {
        this.list = [];
        var digerIsciligi = { key: "999977", value: "Diğer İşçiliği" };
        this.list.push({
            key: digerIsciligi.key,
            value: digerIsciligi.value,
            data: digerIsciligi
        });
    };
    DetayPiySearchComponent.prototype.prepareSearchItem = function () {
        this.filter.mamAnaGrp = this.hizmet.mamAnaGrp;
        this.filter.islGrp = this.util.isNotEmpty(this.data.filter.islemKod)
            ? this.data.filter.islemKod
            : "";
        this.filter.arzGrp = this.util.isNotEmpty(this.data.filter.arizaKod)
            ? this.data.filter.arizaKod
            : "";
    };
    DetayPiySearchComponent.prototype.fillList = function (data) {
        var res = data.rows;
        this.pageable.listLength =
            this.pageable.listLength == -1
                ? data.listLength
                : this.pageable.listLength;
        for (var i = 0; i < res.length; i++) {
            this.fillItemByType(res.item(i));
        }
        console.dir(res);
    };
    DetayPiySearchComponent.prototype.fillItemByType = function (item) {
        if (this.dataType == "ISLEM") {
            this.list.push({
                key: item.islemGrp,
                value: item.islemGrpAdi,
                data: item
            });
        }
        if (this.dataType == "ARIZA")
            this.list.push({
                key: item.arizaGrp,
                value: item.arizaGrpAdi,
                data: item
            });
        if (this.dataType == "PIY") {
            var mlzIsc = this.data.filter.mlzIsc;
            if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.ISCILIK)
                this.list.push({ key: item.iscKod, value: item.iscAdi, data: item });
            if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.MALZEME)
                this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });
            if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.DIGER)
                this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });
            if (mlzIsc == __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DETAY_TIPI.YOL)
                this.list.push({ key: item.mlzKod, value: item.mlzAdi, data: item });
        }
    };
    DetayPiySearchComponent.prototype.isUnique = function (item) {
        var isUnique = true;
        this.list.filter(function (res) {
            if (res.key == item.key && res.value == item.value) {
                isUnique = false;
            }
        });
        return isUnique;
    };
    DetayPiySearchComponent.prototype.ionChange = function (item) {
        this.viewCtrl.dismiss({ data: item });
    };
    DetayPiySearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "detay-piy-search",template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\detay-piy-search\detay-piy-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Parça/İşçilik/Yol Ara</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list" class="row-border">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n  <!--ion-toolbar>\n\n    <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n      <ion-icon name="arrow-dropleft"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n      <ion-icon name="arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-toolbar-->\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\detay-piy-search\detay-piy-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_urun_malzeme_urun_malzeme__["a" /* UrunMalzemeProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */],
            __WEBPACK_IMPORTED_MODULE_9__providers_theme_theme__["a" /* ThemeProvider */]])
    ], DetayPiySearchComponent);
    return DetayPiySearchComponent;
}());

//# sourceMappingURL=detay-piy-search.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safe_html_safe_html__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_format_date_format__ = __webpack_require__(913);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__safe_html_safe_html__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_2__date_format_date_format__["a" /* DateFormatPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__safe_html_safe_html__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_2__date_format_date_format__["a" /* DateFormatPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KutuphanePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


var KutuphanePage = (function () {
    function KutuphanePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KutuphanePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KutuphanePage');
    };
    KutuphanePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-kutuphane',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\kutuphane\kutuphane.html"*/'<!--\n\n  Generated template for the KutuphanePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button primary>\n\n      <ion-icon name="list"></ion-icon>\n\n    </button>\n\n    <ion-title class="page-title">E-Kütüphane</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\kutuphane\kutuphane.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], KutuphanePage);
    return KutuphanePage;
}());

//# sourceMappingURL=kutuphane.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__anasayfa_anasayfa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_deeplink_printer_deeplink_printer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_table_total_elements_table_total_elements__ = __webpack_require__(537);
/**
 * @author malisahin
 * @since 2018-02-12
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var UserInfo = (function () {
    function UserInfo() {
        this.userCode = "";
        this.password = "";
    }
    return UserInfo;
}());
var LoginPage = (function () {
    function LoginPage(nav, util, alertCtrl, userProvider, loadingCtrl, logger, loginProvider, deepLinkPrinter, totalElementsProvider, themeProvider) {
        this.nav = nav;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.loginProvider = loginProvider;
        this.deepLinkPrinter = deepLinkPrinter;
        this.totalElementsProvider = totalElementsProvider;
        this.themeProvider = themeProvider;
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
        this.userCode = "";
        this.password = "";
        this.hasLoginPermission = false;
        this.showPassword = false;
        this.themeProvider.setTheme();
        this.user = new __WEBPACK_IMPORTED_MODULE_6__entities_user__["a" /* User */]();
        this.backGroundImage = this.themeProvider.getBackgroundImage();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.logger.info("Login Page ionViewDidLoad");
        this.loadSavedUserInfo();
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, connection, token_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.saveUserInfo()];
                    case 1:
                        _b.sent();
                        this.hasLoginPermission = false;
                        this.util.loaderStart(false);
                        localStorage.setItem(this.user.keys.userCode, this.userCode);
                        localStorage.setItem(this.user.keys.password, this.password);
                        this.checkLoginInfo();
                        return [4 /*yield*/, this.loginProvider.login(this.userCode, this.password)];
                    case 2:
                        token = _b.sent();
                        this.logger.log("Username: " + this.userCode + " Password: " + this.password);
                        connection = this.util.getConnectionStatus();
                        if (!(connection == __WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].NETWORK.ONLINE)) return [3 /*break*/, 5];
                        token_1 = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].ACCESS_TOKEN);
                        if (!this.util.isNotEmpty(token_1)) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, this.userProvider.getUser(this.userCode, this.password)];
                    case 3:
                        _a.user = _b.sent();
                        this.hasLoginPermission = this.user != null;
                        _b.label = 4;
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        if (!(connection == __WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].NETWORK.OFFLINE)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.checkForOfflineConnection()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        this.hasLoginPermission = false;
                        _b.label = 8;
                    case 8:
                        this.logger.dir(this.user);
                        this.route();
                        this.util.loaderEnd();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.route = function () {
        if (this.hasLoginPermission) {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__anasayfa_anasayfa__["a" /* Anasayfa */]);
            this.checkTablesTotalElements();
        }
        this.util.loaderEnd();
    };
    LoginPage.prototype.checkTablesTotalElements = function () {
        this.totalElementsProvider.init();
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.showPassword ? "text" : "password";
    };
    LoginPage.prototype.checkLoginInfo = function () {
        if (this.util.isEmpty(this.userCode)) {
            this.util.warn("Kullanıcı Adı boş olamaz.");
            return false;
        }
        if (this.util.isEmpty(this.password)) {
            this.util.warn("Şifre boş olamaz.");
            return false;
        }
    };
    LoginPage.prototype.checkAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginUser, existingUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginUser = new __WEBPACK_IMPORTED_MODULE_6__entities_user__["a" /* User */]();
                        loginUser.userCode = this.userCode;
                        loginUser.password = this.password;
                        return [4 /*yield*/, this.userProvider.getUserFromDB(loginUser)];
                    case 1:
                        existingUser = _a.sent();
                        return [2 /*return*/, this.util.isNotEmpty(existingUser)];
                }
            });
        });
    };
    LoginPage.prototype.checkForOfflineConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var checkAuth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkAuth()];
                    case 1:
                        checkAuth = _a.sent();
                        if (checkAuth) {
                            this.hasLoginPermission = true;
                            this.util.info("Cihazınız offline mod ile çalışmaya devam edecek.");
                        }
                        else {
                            this.util.info("Girmiş olduğunuz bilgilere ait bir kullanıcı bulunamadı.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goDeeplink = function () {
        this.deepLinkPrinter.init();
    };
    LoginPage.prototype.loadSavedUserInfo = function () {
        var info = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].USER_INFO);
        if (this.util.isNotEmpty(info)) {
            var userInfo = JSON.parse(info);
            this.userCode = userInfo.userCode;
            this.password = userInfo.password;
        }
        this.loadIsRememberMeClicked();
    };
    LoginPage.prototype.loadIsRememberMeClicked = function () {
        var isRememberMeClicked = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].CLICKED_REMEMBER_ME);
        this.logger.info("Is Remember Clicked" + isRememberMeClicked);
        if (this.util.isNotEmpty(isRememberMeClicked)) {
            this.rememberMe = isRememberMeClicked == "true";
        }
    };
    LoginPage.prototype.onChangeRememberMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].REMEMBER_ME, String(this.rememberMe));
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].CLICKED_REMEMBER_ME, String(this.rememberMe));
                        return [4 /*yield*/, this.saveUserInfo()];
                    case 1:
                        _a.sent();
                        this.logger.info("Remember Me value is set as " + this.rememberMe);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.saveUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                this.rememberMe = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].REMEMBER_ME) == "true";
                if (this.rememberMe) {
                    info = new UserInfo();
                    info.userCode = this.userCode;
                    info.password = this.password;
                    this.logger.info(" User Info Saved: " + JSON.stringify(info));
                    localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].USER_INFO, JSON.stringify(info));
                }
                else {
                    this.logger.info(" User Info Deleted. ");
                    localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].USER_INFO, "");
                }
                return [2 /*return*/, new Promise(function (res) { return res(); })];
            });
        });
    };
    LoginPage.prototype.startLoader = function () {
        this.util.loaderStart(false);
    };
    LoginPage.prototype.endLoader = function () {
        this.util.loaderEnd();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\login\login.html"*/'<ion-content class="content-background login-content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }"\n\n             padding>\n\n\n\n  <ion-row>\n\n    <ion-col class="logo">\n\n      <ion-icon name="construct"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-input type="text" placeholder="Kullanıcı Adı" name="email" [(ngModel)]="userCode" required></ion-input>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <ion-input [type]="passwordType" placeholder="Şifre" name="password" [(ngModel)]="password"\n\n                     required></ion-input>\n\n          <!--<ion-icon item-right [name]="passwordIcon" class="password-icon passIcon" (click)=\'hideShowPassword()\'></ion-icon>-->\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <button ion-button class="submit-btn" full type="submit" id="login-btn" [disabled]="!registerForm.form.valid">\n\n            Login\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-checkbox [(ngModel)]="rememberMe" name="rememberMe" (ionChange)="onChangeRememberMe()"></ion-checkbox>\n\n          <ion-label>Beni Hatırla</ion-label>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-checkbox [(ngModel)]="showPassword" name="showPassword" (ionChange)=\'hideShowPassword()\'></ion-checkbox>\n\n          <ion-label>Şifreyi Göster</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_deeplink_printer_deeplink_printer__["a" /* DeeplinkPrinterProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_table_total_elements_table_total_elements__["a" /* TableTotalElementsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__["a" /* ThemeProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeeplinkPrinterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_zebra_printer_zebra_printer__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__ = __webpack_require__(536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









/*
 Generated class for the DeeplinkPrinterProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var DeeplinkPrinterProvider = (function () {
    function DeeplinkPrinterProvider(http, api, util, modalCtrl, deeplinks, logger) {
        this.http = http;
        this.api = api;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.deeplinks = deeplinks;
        this.logger = logger;
    }
    DeeplinkPrinterProvider.prototype.init = function () {
        var _this = this;
        this.logger.warn("Deeplink is Working");
        this.deeplinks.routeWithNavController(this.nav, {
            '/': __WEBPACK_IMPORTED_MODULE_5__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */],
            '/sos.com/Kurumsal/:seqNo': __WEBPACK_IMPORTED_MODULE_5__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */]
        }).subscribe(function (match) {
            var sample = {
                extra: {},
                host: 'sos.com',
                path: '/KURUMSAL/19527',
                scheme: 'com.sistek.sosprint',
                url: 'com.sistek.sosprint://sos.com/KURUMSAL/19527'
            };
            _this.checkUrl(match);
            console.log('Successfully routed', match);
        }, function (nomatch) {
            console.warn('Unmatched Route', nomatch);
        });
    };
    DeeplinkPrinterProvider.prototype.checkUrl = function (res) {
        var isComeFromSosPrint = this.util.isNotEmpty(res) && this.util.isNotEmpty(res.scheme) && res.scheme == "com.sistek.sosprint";
        if (isComeFromSosPrint) {
            if (this.util.isNotEmpty(res.path)) {
                this.getUrlParameters(res.path);
            }
        }
    };
    DeeplinkPrinterProvider.prototype.getUrlParameters = function (path) {
        var params = path.split('/');
        this.seqNo = params[2];
        this.tip = params[1];
        this.getPrintingTextFromApi();
        this.logger.log("Print Command is given for SEQ_NO: " + this.seqNo + ", TIP: " + this.tip);
    };
    DeeplinkPrinterProvider.prototype.getPrintingTextFromApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, printingText, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getDeepLinkPrintTextUrl(this.seqNo, this.tip);
                        this.logger.warn(url);
                        printingText = "";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(url, { headers: this.getHeader(), responseType: "text" }).toPromise().then(function (res) {
                                printingText = res;
                                _this.logger.warn(printingText);
                            })];
                    case 2:
                        _a.sent();
                        this.logger.log(printingText);
                        if (this.util.isNotEmpty(printingText)) {
                            this.sendToPrinter(printingText);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.logger.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DeeplinkPrinterProvider.prototype.sendToPrinter = function (text) {
        text = text.replace(/#new_line#/g, '\r\n');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */], { text: text });
        modal.present();
    };
    DeeplinkPrinterProvider.prototype.getHeader = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'text/plain'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* Nav */])
    ], DeeplinkPrinterProvider.prototype, "nav", void 0);
    DeeplinkPrinterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_4__logger_logger__["a" /* LoggerProvider */]])
    ], DeeplinkPrinterProvider);
    return DeeplinkPrinterProvider;
}());

//# sourceMappingURL=deeplink-printer.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_profil__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_enums_eProfil__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Tablo__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_user__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */







var ApiProvider = (function () {
    function ApiProvider() {
        this.first = 0;
        this.loginUrl = "";
        this.pageSize = __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].API_PAGE_SIZE;
        this.ACTIVE_PROFIL = __WEBPACK_IMPORTED_MODULE_2__entities_enums_eProfil__["a" /* EProfiles */].BAYMAK;
        this.activeProfil = __WEBPACK_IMPORTED_MODULE_1__entities_profil__["a" /* Profil */].getActiveProfil();
        this.urlPrefixHizmet = this.activeProfil.domainUrl + '/sos-api/endpointrest/hizmet/';
        this.urlPrefixOffline = this.activeProfil.domainUrl + '/sos-api/endpointrest/offline/';
        this.urlPrefixKullanici = this.activeProfil.domainUrl + '/sos-api/endpointrest/kullanici/';
        this.urlPrefixSonKullanici = this.activeProfil.domainUrl + '/sos-api/endpointrest/sonkullanici/';
        this.tables = new __WEBPACK_IMPORTED_MODULE_3__entities_Tablo__["a" /* Tablo */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_6__entities_user__["a" /* User */]();
    }
    ApiProvider.prototype.getTokenUrl = function (userCode, password) {
        var tokenUrl = this.activeProfil.securityUrl + '/sos-security-service/oauth/token?grant_type=password&client_id=sos-api-enduser-mobile-client&client_secret=somesecret&';
        return tokenUrl + "username=" + userCode + "&password=" + password;
    };
    ApiProvider.prototype.getKullaniciUrl = function () {
        return this.urlPrefixKullanici + this.user.getUserCode();
    };
    ApiProvider.prototype.getCagriListUrl = function () {
        return this.urlPrefixHizmet + this.user.getOrgKod() + '/' + this.user.getSerKod() + '/' + this.user.getIkKod() + '/param/ikCagriListesi';
    };
    ApiProvider.prototype.setCagriUrl = function (siparisMi) {
        return this.urlPrefixHizmet + this.user.getOrgKod() + '/' + this.user.getUserCode() + '/' + this.user.getDilKod() + '/' + this.user.getPb() + '/' + siparisMi + '/CagriKaydet';
    };
    ApiProvider.prototype.downloadUrunUrl = function (first) {
        var versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.ISCILIK_FIYAT);
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/urunler';
    };
    ApiProvider.prototype.urunAnagrupDownloadUrl = function () {
        var versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.URUN_ANA_GRUP);
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/mamAnagrp';
    };
    ApiProvider.prototype.urunIscilikDownloadUrl = function (first) {
        var versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.URUN_ISCILIK);
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamIsc';
    };
    ApiProvider.prototype.urunMalzemeDownloadUrl = function (first) {
        var versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.URUN_MALZEME);
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/mamMlz';
    };
    ApiProvider.prototype.islemArizaIscilikDownloadUrl = function (first) {
        var versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.ISLEM_ARIZA_ISCILIK);
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/islArzIsc';
    };
    ApiProvider.prototype.fiyatlarDownloadUrl = function (first, tip) {
        var versiyon = "-1";
        if (tip == "malzemeFiyatListesi") {
            versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.MALZEME_FIYAT);
        }
        else {
            versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.ISCILIK_FIYAT);
        }
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/' + first + '/' + this.pageSize + '/' + tip;
    };
    ApiProvider.prototype.getVersiyonUrl = function () {
        return this.urlPrefixOffline + 'versiyonKontrol';
    };
    ApiProvider.prototype.garantiSorguUrl = function () {
        return this.urlPrefixOffline + 'garantiKontrol';
    };
    ApiProvider.prototype.getMesajlarUrl = function () {
        return this.urlPrefixKullanici + this.user.getUserCode() + '/type/NEW/mesajlar';
    };
    ApiProvider.prototype.getMahalleTnmUrl = function (first) {
        var versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.MAHALLE_TNM);
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/' + first + "/" + this.pageSize + '/mahalleler';
    };
    ApiProvider.prototype.getSehirIlceUrl = function (tip) {
        var versiyon = "-1";
        if (tip == __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM) {
            versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.SEHIR_TNM);
            tip = 'sehirler';
        }
        else if (tip == __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM) {
            versiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.ISCILIK_FIYAT);
            tip = 'ilceler';
        }
        versiyon = versiyon == null ? "-1" : versiyon;
        return this.urlPrefixOffline + versiyon + '/' + tip;
    };
    ApiProvider.prototype.seriNoSorguUrl = function (mamKod) {
        return this.urlPrefixOffline + "seriNoSorgu/" + mamKod;
    };
    ApiProvider.prototype.updateMamAnaGrupUrl = function () {
        return this.urlPrefixHizmet + this.user.getOrgKod() + "/" + this.user.getUserCode() + "/" + this.user.getDilKod() + "/" + this.user.getPb() + "/UpdateMamAnaGrp";
    };
    ApiProvider.prototype.getDeepLinkPrintTextUrl = function (seqNo, tip) {
        return this.activeProfil.webappurl + "/out/mobileprintdata?print_key=SOS_MOBILE_PRINT_KEY_010720131546&seq_no=" + seqNo + "&dil_kod=" + 'T' + "&tip=" + tip;
    };
    ApiProvider.prototype.getTotalTableElementsUrl = function () {
        return this.urlPrefixOffline + "/total-table-elements";
    };
    ApiProvider.prototype.getAnketKayitUrl = function () {
        return this.urlPrefixSonKullanici + "onay/anketCevap";
    };
    ApiProvider.prototype.getHeader = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'accessToken': localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].ACCESS_TOKEN)
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 239;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_token__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */











var TokenProvider = (function () {
    function TokenProvider(http, api, network, platform, logger, util) {
        this.http = http;
        this.api = api;
        this.network = network;
        this.platform = platform;
        this.logger = logger;
        this.util = util;
        this.results = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_8__entities_user__["a" /* User */]();
        this.userCode = localStorage.getItem(this.user.keys.userCode);
        this.password = localStorage.getItem(this.user.keys.password);
        this.getTokenInside();
    }
    TokenProvider.prototype.getToken = function (userCode, password) {
        return __awaiter(this, void 0, void 0, function () {
            var isOnline, tokenUrl, token, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isOnline = false;
                        tokenUrl = this.api.getTokenUrl(userCode, password);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(tokenUrl, {}, {})
                                .timeout(5000).toPromise()];
                    case 2:
                        token = _a.sent();
                        this.logger.dir(token);
                        return [2 /*return*/, this.extractData(token)];
                    case 3:
                        e_1 = _a.sent();
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].ACCESS_TOKEN, "");
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].IS_ONLINE, String(false));
                        this.logger.error(e_1);
                        if (e_1.error.error == "invalid_grant") {
                            this.util.error("Giriş bilgileriniz yanlış lütfen kontrol ediniz.");
                            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].LOGGED_IN, String(false));
                        }
                        else {
                            //this.logger.error("Bağlantı hatası.");
                        }
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TokenProvider.prototype.getTokenInside = function () {
        this.userCode = localStorage.getItem(this.user.keys.userCode);
        this.password = localStorage.getItem(this.user.keys.password);
        return this.getToken(this.userCode, this.password);
    };
    TokenProvider.prototype.checkConnection = function () {
        var _this = this;
        // TODO: Token Almadan önce Online olup olmadığı sorulacak.
        return this.network.onConnect().toPromise().then(function () {
            _this.logger.log("Check connection ");
            var tokenUrl = _this.api.getTokenUrl(_this.userCode, _this.password);
            _this.http.post(tokenUrl, {}, {}).map(function (res) {
                return _this.extractData(res);
            });
        });
    };
    TokenProvider.prototype.extractData = function (res) {
        var token = new __WEBPACK_IMPORTED_MODULE_3__entities_token__["a" /* Token */]();
        return token.fillToken(res);
    };
    TokenProvider.prototype.callTokenAndGetHeader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.util.isOnline();
                        return [4 /*yield*/, this.getTokenInside()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (response, reject) {
                                response(new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                                    'Content-Type': 'application/json',
                                    'accessToken': localStorage.getItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].ACCESS_TOKEN)
                                }));
                            })];
                }
            });
        });
    };
    TokenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__util_util__["a" /* UtilProvider */]])
    ], TokenProvider);
    return TokenProvider;
}());

//# sourceMappingURL=token.js.map

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anasayfa/anasayfa.module": [
		283
	],
	"../pages/ayarlar/ayarlar.module": [
		517
	],
	"../pages/bildirimler/bildirimler.module": [
		519
	],
	"../pages/bilgi-sorgu/bilgi-sorgu.module": [
		520
	],
	"../pages/cagri-detay/cagri-detay.module": [
		521
	],
	"../pages/cagrilar/cagri-arama-modal/cagri-arama-modal.module": [
		526
	],
	"../pages/cagrilar/cagrilar.module": [
		527
	],
	"../pages/guncelleme/guncelleme.module": [
		528
	],
	"../pages/kampanyalar/kampanyalar.module": [
		529
	],
	"../pages/kutuphane/kutuphane.module": [
		531
	],
	"../pages/login/login.module": [
		532
	],
	"../pages/shared-module/shared-module.module": [
		42
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 282;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnasayfaPageModule", function() { return AnasayfaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anasayfa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ayarlar_ayarlar_module__ = __webpack_require__(517);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AnasayfaPageModule = (function () {
    function AnasayfaPageModule() {
    }
    AnasayfaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__anasayfa__["a" /* Anasayfa */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__anasayfa__["a" /* Anasayfa */]), __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"], __WEBPACK_IMPORTED_MODULE_4__ayarlar_ayarlar_module__["AyarlarPageModule"]
            ],
        })
    ], AnasayfaPageModule);
    return AnasayfaPageModule;
}());

//# sourceMappingURL=anasayfa.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CacheItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_cache__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(76);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * @author mali.sahin
 * @since 15-08-2018
 */
var CacheItem = (function () {
    function CacheItem(type) {
        this.type = type;
        this.cacheType = type;
    }
    return CacheItem;
}());

var CacheProvider = (function (_super) {
    __extends(CacheProvider, _super);
    function CacheProvider(cacheService) {
        var _this = _super.call(this) || this;
        _this.cacheService = cacheService;
        _this.defaultTTL = 60 * 60;
        cacheService.setDefaultTTL(_this.defaultTTL);
        return _this;
    }
    CacheProvider.prototype.init = function () {
    };
    CacheProvider.prototype.saveItem = function (key, value, group) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cacheService.saveItem(key, value, group, this.defaultTTL)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CacheProvider.prototype.saveLog = function (data, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CacheProvider.prototype.getLog = function () {
        return this.cacheService.getRawItems();
    };
    CacheProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_cache__["b" /* CacheService */]])
    ], CacheProvider);
    return CacheProvider;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hizmet_dao_hizmet_dao__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hizmet_hizmet__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HizmetService = (function () {
    function HizmetService(hizmetDao, util, alertCtrl, hizmetProvider) {
        this.hizmetDao = hizmetDao;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.hizmetProvider = hizmetProvider;
        this.defaultOrderBy = __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].ORDER_BY.RANDEVU_TAR_ASCENDES;
    }
    HizmetService.prototype.fetchHizmetWithPage = function (hizmet, orderBy, pageable) {
        return this.hizmetDao.find(hizmet, orderBy, pageable);
    };
    HizmetService.prototype.fetchHizmet = function (seqNo) {
        return this.hizmetDao.findOne(seqNo);
    };
    HizmetService.prototype.fetchHizmetWithQuery = function (query, orderBy, pageable) {
        return this.hizmetDao.search(query, orderBy, pageable);
    };
    HizmetService.prototype.deleteHizmetList = function () {
        return this.hizmetDao.deleteList();
    };
    HizmetService.prototype.setHizmet = function (hizmet) {
        this.hizmet = hizmet;
    };
    HizmetService.prototype.getHizmet = function () {
        return this.hizmet;
    };
    HizmetService.prototype.getHizmetBySeqNo = function (seqNo) {
        return __awaiter(this, void 0, void 0, function () {
            var hizmet, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hizmet = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__["a" /* Hizmet */]();
                        return [4 /*yield*/, this.fetchHizmet(seqNo)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmptyRows(res)) {
                            hizmet = JSON.parse(res.rows.item(0).data);
                        }
                        return [2 /*return*/, hizmet];
                }
            });
        });
    };
    HizmetService.prototype.saveHizmet = function () {
        return this.hizmetDao.updateHizmet(this.hizmet);
    };
    HizmetService.prototype.saveAndFetchHizmet = function (hizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var jsonData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hizmet = hizmet;
                        return [4 /*yield*/, this.hizmetDao.updateHizmet(hizmet)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getHizmetBySeqNo(hizmet.seqNo)];
                    case 2:
                        jsonData = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, rej) {
                                var hzmet = _this.hizmetProvider.fillHizmet(jsonData);
                                resolve(hzmet);
                            })];
                }
            });
        });
    };
    HizmetService.prototype.deleteHizmet = function (seqNo) {
        return this.hizmetDao.deleteHizmet(seqNo);
    };
    HizmetService.prototype.isHizmetDisabled = function (hizmet) {
        return hizmet.durum == "KAPALI" || hizmet.durum == "IPTAL";
    };
    HizmetService.prototype.sunucuyaKayitIcinHazirla = function (hizmet) {
        var _this = this;
        var sunucuyaGidecekHizmet = this.util.assign(hizmet);
        var DATE_TIME_FORMAT = "dd.MM.yyyy hh:mm:ss.s";
        var DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND = "dd.MM.yyyy hh:mm:ss";
        var DATE_FORMAT = "yyyy-MM-dd";
        if (this.util.isNotEmpty(sunucuyaGidecekHizmet.islemList)) {
            sunucuyaGidecekHizmet.islemList = this.util.assignList(sunucuyaGidecekHizmet.islemList);
            sunucuyaGidecekHizmet.islemList.forEach(function (islem) {
                if (_this.util.isNotEmpty(islem.basTar)) {
                    islem.basTar = _this.util.dateFormatRegex(new Date(islem.basTar), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND);
                }
                if (_this.util.isNotEmpty(islem.bitTar)) {
                    islem.bitTar = _this.util.dateFormatRegex(new Date(islem.bitTar), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND);
                }
            });
        }
        sunucuyaGidecekHizmet.sattar = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.sattar), DATE_FORMAT);
        sunucuyaGidecekHizmet.randevuTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.randevuTarihi), DATE_TIME_FORMAT);
        sunucuyaGidecekHizmet.cagriTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.cagriTarihi), DATE_TIME_FORMAT);
        sunucuyaGidecekHizmet.islemTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.islemTarihi), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND);
        sunucuyaGidecekHizmet.islemBitTarihi = this.util.dateFormatRegex(new Date(sunucuyaGidecekHizmet.islemBitTarihi), DATE_TIME_FORMAT_WITHOUT_SPLIT_SECOND);
        delete sunucuyaGidecekHizmet.anket;
        return sunucuyaGidecekHizmet;
    };
    HizmetService.prototype.hizmetDurumunuDegistir = function (hizmet, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res.message))) return [3 /*break*/, 2];
                        hizmet.durum = res.message.durum;
                        return [4 /*yield*/, this.saveAndFetchHizmet(hizmet)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HizmetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__hizmet_hizmet__["a" /* HizmetProvider */]])
    ], HizmetService);
    return HizmetService;
}());

//# sourceMappingURL=hizmet-service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */




var BaseDao = (function () {
    function BaseDao(DB, logger) {
        this.DB = DB;
        this.logger = logger;
    }
    BaseDao.prototype.findOne = function () {
    };
    BaseDao.prototype.findAll = function (query, params) {
    };
    BaseDao.prototype.execute = function (query, params) {
        var _this = this;
        this.logger.log(query);
        return new Promise(function (resolve, reject) {
            _this.DB.transaction().then(function (db) {
                db.transaction(function (tx) {
                    tx.executeSql(query, params, function (tx, res) {
                        //tx.close()
                        resolve(res);
                    }, function (err, mes) {
                        console.error("Error" + mes.message + " Code: " + mes.code);
                        reject(err);
                    });
                });
            });
        });
    };
    BaseDao.prototype.insertList = function (list, query, params) {
        var _this = this;
        this.logger.log(query);
        var response;
        var insertedItems = 0;
        return new Promise(function (resolve, reject) {
            _this.DB.transaction().then(function (db) {
                db.transaction(function (tx) {
                    for (var i = 0; i < list.length; i++) {
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    BaseDao.prototype.update = function () {
    };
    BaseDao.prototype.deleteAll = function (tableName) {
        var query = "DELETE FROM " + __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].TABLE_NAME[tableName];
        this.resetVersion(tableName);
        return this.execute(query, []);
    };
    BaseDao.prototype.resetVersion = function (tableName) {
        var deletedVersion = (-1).toString();
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT[tableName], deletedVersion);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER[tableName], deletedVersion);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER[tableName]);
        localStorage.removeItem("GELEN_" + tableName);
    };
    BaseDao.prototype.prepareExactQuery = function (item) {
        var query = [];
        for (var key in item) {
            var value = item[key];
            if (typeof value != undefined && value != null && value != "" && typeof value != "function" && typeof value != "object") {
                query.push(key + "= '" + value + "'");
            }
        }
        return query;
    };
    BaseDao.prototype.prepareLikeQuery = function (item) {
        var query = [];
        for (var key in item) {
            var value = item[key];
            if (typeof value != undefined && value != null && value != "" && typeof value != "function" && typeof value != "object" && key != "tip") {
                value = value.split('').join('%');
                value = "%" + value + "%";
                query.push(key + " LIKE '" + value + "'");
            }
        }
        return query;
    };
    /**
     *
     * @param tableNameOrQuery = Sqlite tablolarının tam adı yada sorgu
     * @param orderBy  = hangi sıraya göre geleceği
     * @param item  = Sorgu hazır değilse verilen item'a göre sorgu hazırlar
     * @param type = EXACT yada LIKE araması
     * @param first = Pagination.FIRST
     * @param pageSize = PAGINATION.PAGESIZE
     * @param isQueryReady = tableNameOrQuery bir sorgu  ise burası true olmalı değilse false
     * @returns {Promise<any>}
     */
    BaseDao.prototype.getList = function (tableNameOrQuery, orderBy, item, type, first, pageSize, isQueryReady) {
        var _this = this;
        var data = { res: {}, length: 0 };
        var query = "";
        var searchQuery = [];
        var AndOr = type == "EXACT" ? " AND " : " OR ";
        if (!isQueryReady) {
            query = "Select * FROM " + tableNameOrQuery;
            if (type == "EXACT")
                searchQuery = this.prepareExactQuery(item);
            else
                searchQuery = this.prepareLikeQuery(item);
        }
        else {
            query = tableNameOrQuery;
        }
        if (searchQuery.length > 0) {
            query += " WHERE (";
            query += searchQuery.join(AndOr);
            query += ")";
        }
        var listLengthQuery = query;
        query += " ORDER BY " + orderBy + " LIMIT " + first + ", " + pageSize;
        return new Promise(function (resolve, reject) {
            _this.execute(query, []).then(function (res) {
                data.res = res;
                _this.execute("SELECT count(*) FROM " + listLengthQuery.split(' FROM ')[1], []).then(function (res2) {
                    data.listLength = res2.rows.item(0)["count(*)"];
                    resolve(data);
                });
            });
        });
    };
    BaseDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */]])
    ], BaseDao);
    return BaseDao;
}());

//# sourceMappingURL=base-dao.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hizmet; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var Hizmet = (function () {
    function Hizmet() {
        /**
         * hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
         hizmet.durum, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo
         */
        this.aciklama = "";
        this.adi = "";
        this.basvuruNedenAdi = "";
        this.basvuruNedeni = "";
        this.bayiKod = "";
        this.blok = "";
        this.cadde = "";
        this.cmNo = "";
        this.cozumKodu = "";
        this.daireNo = "";
        this.durum = "";
        this.eposta = "";
        this.evTel = "";
        this.firmaUnvani = "";
        this.garanti = "";
        this.gsmNo = "";
        this.hizmetTipi = "";
        this.hizmetTipiAdi = "";
        this.ikKod = "";
        this.ilceKod = "";
        this.iletisimIstek = "";
        this.isTel = "";
        this.kapatmaKodu = "";
        this.mahalle = "";
        this.mahalleKodu = "";
        this.mamAdi = "";
        this.mamAnaGrp = "";
        this.mamAnaGrpAdi = "";
        this.mamKod = "";
        this.mamSeriNo = "";
        this.mamSeriNo2 = "";
        this.merkezNotu = "";
        this.mesguliyet = "";
        this.musId = "";
        this.musKod = "";
        this.musTip = "";
        this.nobet = "";
        this.odemeTipi = "";
        this.sehir = "";
        this.sehirKod = "";
        this.semt = "";
        this.seqNo = "";
        this.serAd = "";
        this.serKod = "";
        this.servisNotu = "";
        this.sokak = "";
        this.soyadi = "";
        this.crmNo = "";
        /**
         *
         * Sunucuya gitmeyecek alanlar
         */
        this.adres = "";
        this.ilceAdi = "";
        this.ilIlce = "";
    }
    return Hizmet;
}());

//# sourceMappingURL=hizmet.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DatabaseProvider = (function () {
    function DatabaseProvider(platform, util, logger, sqlite) {
        this.platform = platform;
        this.util = util;
        this.logger = logger;
        this.sqlite = sqlite;
        this.createDatabase();
        this.setDefaultVersions();
    }
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.transaction()
                .then(function (tx) {
                _this.setDefaultVersions();
                return _this.createApplicationTables(tx);
            })
                .catch(function (e) { return _this.util.error(e); });
        });
    };
    DatabaseProvider.prototype.transaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.platform.is("browser") || this.platform.is("core"))) return [3 /*break*/, 1];
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var tx = window.openDatabase("SOS", "1", "SOS DB", 1000000);
                                resolve(tx);
                            })];
                    case 1: 
                    // window.sqlitePlugin.openDatabase({name: 'MyDatabase.db', location: 'default'});
                    return [4 /*yield*/, this.sqlite.create({ name: "SOS.db", location: "default" })
                            .then(function (db) { return tx = db; })
                            .catch(function (e) { return console.log(e); })];
                    case 2:
                        // window.sqlitePlugin.openDatabase({name: 'MyDatabase.db', location: 'default'});
                        _a.sent();
                        return [2 /*return*/, new Promise(function (res) { return res(tx); })];
                }
            });
        });
    };
    DatabaseProvider.prototype.createApplicationTables = function (db) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_VERSIYON_TAKIP (tablo_adi PRIMARY KEY, versiyon NUM,online_versiyon NUM, first NUM)', []);
                //tip,mamAnaGrp,adi,durum,kod, neden
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden)', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_TNM (mamAnaGrp TEXT,mamKod TEXT, mamAdi,seriMetod,surec,durum,PRIMARY KEY (mamAnaGrp, mamKod))', []);
                tx.executeSql("CREATE  INDEX IF NOT EXISTS 'mamkod_index' ON 'OFF_MAM_TNM' ('mamKod')", []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat, PRIMARY KEY(mamKod, iscKod))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum,fiyat,gdfiyat, kdvOran NUM, PRIMARY KEY (mamKod,mlzKod))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum, PRIMARY KEY (mamAnaGrp,islemGrp,arizaGrp, iscKod))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_BASVURU_NEDEN_TNM (neden, mamAnagrp, durum, ad)', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_TESTO_VALUES(seqNo, name, unit, value, creDate)', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_FIYAT (mamKod TEXT,iscMlz TEXT,iscMlzKod TEXT,fiyat NUM,gdfiyat NUM,versiyon TEXT, PRIMARY KEY(mamKod, iscMlz,iscMlzKod ))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ALERT( bitisTarihi DATE, aciklama, gonderen, id, basTarihi NUM, status, subject, type, valid,  PRIMARY KEY (id))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_HIZ_MST (seqNo PRIMARY KEY,randevuTarihi INT,hizmetTipiAdi,mamAnaGrpAdi, basvuruNedeni,durum,' +
                    'adi,soyadi, firmaUnvani, evTel,isTel, gsmNo, data)', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS  SEHIR_TNM(sehirKodu,sehirAdi, PRIMARY KEY(sehirKodu))');
                tx.executeSql('CREATE TABLE IF NOT EXISTS  ILCE_TNM(sehirKodu, ilceKodu, ilceAdi, PRIMARY KEY(sehirKodu, ilceKodu))');
                tx.executeSql('CREATE TABLE IF NOT EXISTS  MAHALLE_TNM(sehirKodu, ilceKodu, mahalleAdi, mahalleKodu, PRIMARY KEY(sehirKodu, ilceKodu, mahalleKodu))');
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_USER_DEF (user TEXT,userCode TEXT, pass TEXT,servis TEXT ,hatirla TEXT, ikKod TEXT, ikAd ,durum TEXT,userType TEXT,userName TEXT,orgKod Text,dilKod TEXT, pB TEXT, dilObjeDetaylari , PRIMARY KEY(user))');
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_BRANS_LIST (hizmetTipi TEXT, mamAnaGrp TEXT, exp TEXT, PRIMARY KEY(hizmetTipi, mamAnaGrp))');
            });
        }).then(function () {
            _this.addInitialValuesToApplicationTables(db);
        });
    };
    ;
    DatabaseProvider.prototype.addInitialValuesToApplicationTables = function (db) {
        return new Promise(function (resolve, reject) {
            db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_ANAGRP_TNM", -1, 0]);
            db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_TNM", -1, 0]);
            db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_ISC_ISLARZGRP_TNM", -1, 0]);
            db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_ISC_TNM", -1, 0]);
            db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["SER_MAM_MLZ_TNM", -1, 0]);
            db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["OFFLINE_ISC_FIYAT", -1, 0]);
            db.executeSql("INSERT INTO OFF_VERSIYON_TAKIP (tablo_adi, versiyon, first ) VALUES (?, ?, ?)", ["OFFLINE_MLZ_FIYAT", -1, 0]);
        });
    };
    DatabaseProvider.prototype.setDefaultVersions = function () {
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_ANA_GRUP)))
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.URUN_ANA_GRUP, "-1");
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.URUN)))
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.URUN, "-1");
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_ISCILIK)))
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.URUN_ISCILIK, "-1");
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_MALZEME)))
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.URUN_MALZEME, "-1");
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK)))
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.ISLEM_ARIZA_ISCILIK, "-1");
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.MALZEME_FIYAT)))
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.MALZEME_FIYAT, "-1");
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.ISCILIK_FIYAT)))
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.ISCILIK_FIYAT, "-1");
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.SEHIR_TNM))) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.SEHIR_TNM, "-1");
        }
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.ILCE_TNM))) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.ILCE_TNM, "-1");
        }
        if (this.util.isEmpty(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.MAHALLE_TNM))) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT.MAHALLE_TNM, "-1");
        }
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__["a" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__["a" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _d || Object])
    ], DatabaseProvider);
    return DatabaseProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_garanti_sorgu_garanti_sorgu__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_garanti_sonuc_garanti_sonuc__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_fiyat_sorgu_fiyat_sorgu__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_urun_search_urun_search__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_urun_iscilik_search_urun_iscilik_search__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_zebra_printer_zebra_printer__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_malzeme_search_malzeme_search__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_anket_anket__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_spinner_spinner__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModulePage */],
                __WEBPACK_IMPORTED_MODULE_3__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_garanti_sonuc_garanti_sonuc__["a" /* GarantiSonucComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_fiyat_sorgu_fiyat_sorgu__["a" /* FiyatSorguComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_urun_search_urun_search__["a" /* UrunSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_urun_iscilik_search_urun_iscilik_search__["a" /* UrunIscilikSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_malzeme_search_malzeme_search__["a" /* MalzemeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_anket_anket__["a" /* AnketComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_spinner_spinner__["a" /* SpinnerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__components_header_header__["a" /* HeaderComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_garanti_sonuc_garanti_sonuc__["a" /* GarantiSonucComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_fiyat_sorgu_fiyat_sorgu__["a" /* FiyatSorguComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_urun_search_urun_search__["a" /* UrunSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_urun_iscilik_search_urun_iscilik_search__["a" /* UrunIscilikSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_malzeme_search_malzeme_search__["a" /* MalzemeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_anket_anket__["a" /* AnketComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_spinner_spinner__["a" /* SpinnerComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared-module.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pageable; });
/**
 * @author malisahin
 * @date 2018-04-08
 */
var Pageable = (function () {
    function Pageable() {
        this.first = 0;
        this.pageSize = 10;
        this.listLength = -1;
        this.isFirstPage = false;
        this.isLastPage = false;
        this.pageList = [];
    }
    Pageable.prototype.compute = function () {
        var firstItemOfLastPage;
        var bolumdenKalan = this.listLength % Number(this.pageSize);
        if (bolumdenKalan == 0) {
            firstItemOfLastPage = this.listLength - Number(this.pageSize);
        }
        else {
            firstItemOfLastPage = this.listLength - bolumdenKalan;
        }
        if (this.tip == 'BEGINNING') {
        }
        else if (this.tip == 'PREVIOUS') {
            this.first -= Number(this.pageSize);
            if (this.first < 0) {
                this.first = 0;
            }
        }
        else if (this.tip == 'NEXT') {
            this.first += Number(this.pageSize);
            if (this.first > this.listLength)
                this.first = Number(firstItemOfLastPage);
        }
        else if (this.tip == 'FIRST') {
            this.first = 0;
        }
        else if (this.tip == 'LAST') {
            this.first = Number(firstItemOfLastPage);
        }
        else if (this.tip == 'LIST_LENGTH') {
            this.first = 0;
        }
        else if (this.tip == 'TO_PAGE') {
            this.first = (Number(this.pageNo) - 1) * Number(this.pageSize);
        }
        this.isFirstPage = false;
        this.isLastPage = false;
        if (this.first == 0) {
            this.isFirstPage = true;
        }
        /*
         if (firstItemOfLastPage + Number(this.pageSize) >= this.listLength) {
         this.isLastPage = true;
         }*/
        if (Number(this.pageSize) >= this.listLength) {
            this.isLastPage = true;
        }
        else if (this.listLength > 2 * Number(this.pageSize) + this.first) {
            this.isLastPage = true;
        }
        this.preparePageList();
        this.pageNo = (Number(this.first) / Number(this.pageSize)) + 1;
        return this;
    };
    Pageable.prototype.preparePageList = function () {
        this.pageList = [];
        var size = (Number(this.listLength) / Number(this.pageSize));
        for (var i = 0; i < size; i++) {
            this.pageList.push(i + 1);
        }
    };
    return Pageable;
}());

//# sourceMappingURL=Pageable.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var User = (function () {
    function User() {
        this.userCode = "";
        this.userName = "";
        this.password = "";
        this.servis = "";
        this.servisUnvani = "";
        this.ikKod = "";
        this.ikAd = "";
        this.durum = "";
        this.userType = "";
        this.adi = "";
        this.soyadi = "";
        this.orgKod = "";
        this.dilKod = "";
        this.pb = "";
        this.ikBrans = "";
        this.hatirla = "";
        this.labels = {};
        this.systemParams = {};
        this.keys = {
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
            labels: "labels",
            systemParams: "systemParams"
        };
    }
    User.prototype.fillUser = function (item) {
        item = item.message;
        var user = new User();
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
        user.pb = item.pB;
        user.systemParams = item.systemParams;
        this.saveUserData(user);
        console.table(user);
        return user;
    };
    User.prototype.saveUserData = function (user) {
        var pattern = new User();
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
        localStorage.setItem(pattern.keys.labels, JSON.stringify(user.labels));
        localStorage.setItem(pattern.keys.systemParams, JSON.stringify(user.systemParams));
    };
    User.prototype.getUserCode = function () {
        return localStorage.getItem(this.keys.userCode);
    };
    User.prototype.getUserName = function () {
        return localStorage.getItem(this.keys.userName);
    };
    User.prototype.getPb = function () {
        return localStorage.getItem(this.keys.pb);
    };
    User.prototype.getOrgKod = function () {
        return localStorage.getItem(this.keys.orgKod);
    };
    User.prototype.getSerKod = function () {
        return localStorage.getItem(this.keys.servis);
    };
    User.prototype.getDilKod = function () {
        return localStorage.getItem(this.keys.dilKod);
    };
    User.prototype.getIkAd = function () {
        return localStorage.getItem(this.keys.ikAd);
    };
    User.prototype.getIkKod = function () {
        return localStorage.getItem(this.keys.ikKod);
    };
    User.prototype.getPassword = function () {
        return localStorage.getItem(this.keys.password);
    };
    User.prototype.getServisUnvani = function () {
        return localStorage.getItem(this.keys.servisUnvani);
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrup; });
/* unused harmony export BasvuruListe */
/* unused harmony export CozumListe */
/* unused harmony export UrunAnaGrupListe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var UrunAnaGrup = (function () {
    function UrunAnaGrup(tip) {
        this.cozumListe = [];
        this.basvuruListe = [];
        this.liste = [];
        this.neden = "";
        this.mamAnaGrp = "";
        this.ad = "";
        this.durum = "";
        this.kod = "";
        this.tip = "";
        this.tip = tip;
    }
    UrunAnaGrup.prototype.fillUrunAnaGrup = function (res) {
        res = res.message;
        var urunAnaGrpList = [];
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_ANA_GRUP, res.versiyon);
        var cozumListe = new CozumListe();
        var basvuruListe = new BasvuruListe();
        var liste = new UrunAnaGrupListe();
        urunAnaGrpList = (cozumListe.fillCozumListe(res.cozumListe, urunAnaGrpList));
        urunAnaGrpList = (basvuruListe.fillBasvuruListe(res.basvuruListe, urunAnaGrpList));
        urunAnaGrpList = (liste.fillMamAnaGrpListe(res.liste, urunAnaGrpList));
        return new Promise(function (resolve) { return resolve(urunAnaGrpList); });
    };
    return UrunAnaGrup;
}());

var BasvuruListe = (function () {
    function BasvuruListe() {
        this.basvuruNeden = "";
        this.mamAnagrp = "";
        this.ad = "";
        this.durum = "";
        this.tip = "";
    }
    BasvuruListe.prototype.fillBasvuruListe = function (list, mainList) {
        list.forEach(function (item) {
            var anaGrp = new UrunAnaGrup(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
            anaGrp.neden = item.basvuruNeden;
            anaGrp.mamAnaGrp = item.mamAnagrp;
            anaGrp.ad = item.ad;
            anaGrp.durum = item.durum;
            mainList.push(anaGrp);
        });
        return mainList;
    };
    return BasvuruListe;
}());

var CozumListe = (function () {
    function CozumListe() {
        this.kod = "";
        this.ad = "";
        this.tip = "";
    }
    CozumListe.prototype.fillCozumListe = function (list, mainList) {
        list.forEach(function (item) {
            var anaGrp = new UrunAnaGrup(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.COZUM_LISTE);
            anaGrp.kod = item.kod;
            anaGrp.ad = item.ad;
            mainList.push(anaGrp);
        });
        return mainList;
    };
    return CozumListe;
}());

var UrunAnaGrupListe = (function () {
    function UrunAnaGrupListe() {
        this.tip = "liste";
    }
    UrunAnaGrupListe.prototype.fillMamAnaGrpListe = function (list, mainList) {
        list.forEach(function (item) {
            var anaGrp = new UrunAnaGrup(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
            anaGrp.mamAnaGrp = item.mamAnaGrp;
            anaGrp.durum = item.durum;
            anaGrp.ad = item.Adi;
            mainList.push(anaGrp);
        });
        return mainList;
    };
    return UrunAnaGrupListe;
}());

//# sourceMappingURL=urunAnaGrup.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_spinner_spinner__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UtilProvider = (function () {
    function UtilProvider(toast, network, modalCtrl, logger, themeProvider) {
        this.toast = toast;
        this.network = network;
        this.modalCtrl = modalCtrl;
        this.logger = logger;
        this.themeProvider = themeProvider;
        this.isLoaderRunning = false;
        this.isSpinnerRunning = false;
        __WEBPACK_IMPORTED_MODULE_3_moment___default.a.locale("tr");
        this.init();
    }
    UtilProvider.prototype.init = function () {
    };
    UtilProvider.prototype.isEmpty = function (item) {
        if (typeof item == "number")
            item = String(item);
        return typeof item == "undefined" || item == null || item == "";
    };
    UtilProvider.prototype.emptyIfNull = function (item) {
        if (this.isEmpty(item))
            item = "";
        return item;
    };
    UtilProvider.prototype.isNotEmpty = function (item) {
        if (typeof item == "number")
            item = String(item);
        return !(typeof item == "undefined" || item == null || item == "");
    };
    UtilProvider.prototype.isNotEmptyRows = function (res) {
        return (this.isNotEmpty(res) && this.isNotEmpty(res.rows) && res.rows.length > 0);
    };
    UtilProvider.prototype.prepareForLike = function (key, value) {
        return key + " LIKE '%" + value.split("").join("%") + "%'";
    };
    UtilProvider.prototype.prepareForEqual = function (key, value) {
        return key + "='" + value + "'";
    };
    UtilProvider.prototype.prepareWhereQuery = function (type, key, value) {
        return type == __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT
            ? this.prepareForEqual(key, value)
            : this.prepareForLike(key, value);
    };
    UtilProvider.prototype.prepareQuery = function (query, whereQueries, searchType) {
        var AndOr = searchType == __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT ? " AND " : " OR ";
        if (whereQueries.length > 0) {
            query += " AND (";
            query += whereQueries.join(AndOr);
            query += ")";
        }
        return query;
    };
    UtilProvider.prototype.getDuration = function () {
        var duration = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].MESSAGE_DURATION);
        if (this.isEmpty(duration)) {
            duration = __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].DEFAULT_MESSAGE_DURATION;
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].MESSAGE_DURATION, duration);
        }
        return Number(duration) * 1000;
    };
    UtilProvider.prototype.success = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-success"
        });
        toast.present();
    };
    UtilProvider.prototype.info = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-info"
        });
        toast.present();
    };
    UtilProvider.prototype.warn = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-warn"
        });
        toast.present();
    };
    UtilProvider.prototype.error = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: this.getDuration(),
            position: "top",
            cssClass: "toast-error"
        });
        toast.present();
    };
    UtilProvider.prototype.dateFormat = function (dateString, format) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()(dateString).format(format);
    };
    UtilProvider.prototype.dateFormatRegex = function (x, y) {
        if (this.isEmpty(x))
            return "";
        x = new Date(x);
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? "0" : "") + eval("z." + v.slice(-1))).slice(-2);
        });
        return y.replace(/(y+)/g, function (v) {
            return x
                .getFullYear()
                .toString()
                .slice(-v.length);
        });
    };
    UtilProvider.prototype.newDateTime = function (dateString) {
        if (this.isNotEmpty(dateString) && typeof dateString == "number")
            return dateString;
        if (this.isNotEmpty(dateString)) {
            var index = dateString.indexOf('.');
            if (index > -1)
                dateString = dateString.substr(0, index).replace(/-/g, "/");
            else
                dateString = dateString.replace(/-/g, "/");
            return new Date(dateString).getTime();
        }
        return null;
    };
    UtilProvider.prototype.addMinutes = function (dateStr, addition) {
        return new Date(dateStr.setTime(dateStr.getTime() + 1000 * 60 * addition));
    };
    // FIXME: Pluginden alınan bilgiye göre cevap dönecek
    UtilProvider.prototype.isOnline = function () {
        var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].ACCESS_TOKEN);
        return this.isNotEmpty(token);
    };
    UtilProvider.prototype.ifOffline = function () {
        this.error("Bu işlemi yapabilmek için internet bağlantısı gereklidir.");
        this.loaderEnd();
    };
    UtilProvider.prototype.getSystemParam = function (param) {
        return this.getLocalStorageParam("systemParams", param);
    };
    UtilProvider.prototype.getSystemLabel = function (param) {
        return this.getLocalStorageParam("labels", param);
    };
    UtilProvider.prototype.getLocalStorageParam = function (type, param) {
        var value = "";
        var systemParams = localStorage.getItem(type);
        if (systemParams != null) {
            var paramList = JSON.parse(systemParams);
            paramList.forEach(function (item) {
                if (item.kod != null && item.kod == param) {
                    value = item.ad;
                }
            });
        }
        return value;
    };
    UtilProvider.prototype.translateTurkishCharacters = function (text) {
        var z = "";
        if (text != null && text != "") {
            var y = text.split("");
            for (var i = 0; y.length > i; i++) {
                switch (y[i]) {
                    case "Ç":
                        z += y[i].replace("Ç", "C");
                        break;
                    case "ç":
                        z += y[i].replace("ç", "c");
                        break;
                    case "Ğ":
                        z += y[i].replace("Ğ", "G");
                        break;
                    case "ğ":
                        z += y[i].replace("ğ", "g");
                        break;
                    case "İ":
                        z += y[i].replace("İ", "I");
                        break;
                    case "ı":
                        z += y[i].replace("ı", "i");
                        break;
                    case "Ö":
                        z += y[i].replace("Ö", "O");
                        break;
                    case "ö":
                        z += y[i].replace("ö", "o");
                        break;
                    case "Ş":
                        z += y[i].replace("Ş", "S");
                        break;
                    case "ş":
                        z += y[i].replace("ş", "s");
                        break;
                    case "Ü":
                        z += y[i].replace("Ü", "U");
                        break;
                    case "ü":
                        z += y[i].replace("ü", "u");
                        break;
                    default:
                        z += y[i];
                        break;
                }
            }
        }
        return z;
    };
    UtilProvider.prototype.pushErrorMessages = function (result) {
        var _this = this;
        result.errorMessages.forEach(function (val, index) {
            console.error(val, index);
            _this.error(val);
        });
    };
    UtilProvider.prototype.pushInfoMessages = function (result) {
        var _this = this;
        result.infoMessages.forEach(function (val, index) {
            console.warn(val, index);
            _this.warn(val);
        });
    };
    UtilProvider.prototype.pushAllMessages = function (result) {
        this.pushErrorMessages(result);
        this.pushInfoMessages(result);
    };
    UtilProvider.prototype.loaderStart = function (showPercentage) {
        if (!this.isSpinnerRunning) {
            this.spinner = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_spinner_spinner__["a" /* SpinnerComponent */], { showPercentage: showPercentage }, { enableBackdropDismiss: false, cssClass: this.getSelectedTheme() });
            this.spinner.present();
        }
        this.isSpinnerRunning = true;
    };
    UtilProvider.prototype.loaderEnd = function () {
        /*if (this.isLoaderRunning) this.loader.dismissAll();
         this.isLoaderRunning = false;
         */
        if (this.isSpinnerRunning)
            this.spinner.dismiss();
        this.isSpinnerRunning = false;
    };
    UtilProvider.prototype.timerStart = function (name) {
        console.time(name);
    };
    UtilProvider.prototype.timerEnd = function (name) {
        console.timeEnd(name);
    };
    UtilProvider.prototype.phoneMask = function (tel) {
        var maskedValue = "";
        if (this.isNotEmpty(tel)) {
            var missing = 10 - tel.length;
            for (var i = 0; i < missing; i++) {
                tel += " ";
            }
            maskedValue =
                "(" +
                    tel.substring(0, 3) +
                    ") " +
                    tel.substring(3, 6) +
                    "-" +
                    tel.substring(6, 10);
            return maskedValue;
        }
    };
    UtilProvider.prototype.getSelectedTheme = function () {
        return this.themeProvider.getSelectedTheme();
    };
    UtilProvider.prototype.getConnectionStatus = function () {
        var loggedIn = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].LOGGED_IN) == "true";
        var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].ACCESS_TOKEN);
        if (this.isNotEmpty(token)) {
            return __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].NETWORK.ONLINE;
        }
        else if (loggedIn) {
            return __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].NETWORK.OFFLINE;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].NETWORK.NONE;
        }
    };
    UtilProvider.prototype.assign = function (item) {
        if (this.isEmpty(item))
            return null;
        return Object.assign({}, item);
    };
    UtilProvider.prototype.assignList = function (list) {
        var _this = this;
        var newList = [];
        list.forEach(function (item) {
            newList.push(_this.assign(item));
        });
        return newList;
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_7__theme_theme__["a" /* ThemeProvider */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetayKayit; });
/**
 * @author  mali.sahin
 * @date   2018-04-15
 *
 */
var DetayKayit = (function () {
    function DetayKayit() {
        this.miktar = 1;
        this.olcuBrm = "";
        this.satirHata = "";
    }
    return DetayKayit;
}());

//# sourceMappingURL=DetayKayit.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ilce; });
var Ilce = (function () {
    function Ilce() {
        this.sehirKodu = "";
        this.ilceKodu = "";
        this.ilceAdi = "";
    }
    return Ilce;
}());

//# sourceMappingURL=Ilce.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunMalzemeDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UrunMalzemeDao = (function () {
    function UrunMalzemeDao(http, dbProvider, util, baseDao) {
        this.http = http;
        this.dbProvider = dbProvider;
        this.util = util;
        this.baseDao = baseDao;
    }
    UrunMalzemeDao.prototype.insertOne = function (item) {
        var INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum, kdvOran) VALUES (?,?,?,?,?)";
        var params = [item.mamKod, item.mlzKod, item.mlzAdi, item.durum, item.kdvOran];
        return this.baseDao.execute(INSERT_QUERY, params);
    };
    UrunMalzemeDao.prototype.deleteAll = function () {
        var query = "DELETE FROM OFF_MAM_MLZ_TNM ";
        return this.baseDao.execute(query, []);
    };
    UrunMalzemeDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        if (list.length == 0)
            return new Promise(function (res) { return res(0); });
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO OFF_MAM_MLZ_TNM (mamKod,mlzKod,mlzAdi,durum, kdvOran) VALUES (?,?,?,?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.mamKod, item.mlzKod, item.mlzAdi, item.durum, item.kdvOran];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    UrunMalzemeDao.prototype.getList = function (filter, searchType, pageable) {
        var query = this.prepareGetListQuery(filter, searchType);
        return this.baseDao.getList(query, "mamKod", filter, searchType, pageable.first, pageable.pageSize, true);
    };
    UrunMalzemeDao.prototype.prepareGetListQuery = function (filter, searchType) {
        var query = " SELECT * FROM OFF_MAM_MLZ_TNM WHERE 1=1 ";
        var searchQuery = [];
        if (this.util.isNotEmpty(filter.mamKod))
            query += " AND mamKod = '" + filter.mamKod + "' ";
        if (this.util.isNotEmpty(filter.mlzKod))
            searchQuery.push(this.util.prepareWhereQuery(searchType, "mlzKod", filter.mlzKod));
        if (this.util.isNotEmpty(filter.mlzAdi))
            searchQuery.push(this.util.prepareWhereQuery(searchType, "mlzAdi", filter.mlzAdi));
        return this.util.prepareQuery(query, searchQuery, searchType);
    };
    UrunMalzemeDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__["a" /* BaseDao */]])
    ], UrunMalzemeDao);
    return UrunMalzemeDao;
}());

//# sourceMappingURL=urun-malzeme-dao.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemArizaIscilikProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_islem_ariza_iscilik__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */







var IslemArizaIscilikProvider = (function () {
    function IslemArizaIscilikProvider(http, tokenProvider, api, util, islemArizaIscilikDao) {
        this.http = http;
        this.tokenProvider = tokenProvider;
        this.api = api;
        this.util = util;
        this.islemArizaIscilikDao = islemArizaIscilikDao;
    }
    IslemArizaIscilikProvider.prototype.downloadIslemArizaIscilik = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var header, data, islemArizaIscilik, item, res_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenProvider.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getDataFromApi(first, header)];
                    case 2:
                        data = _a.sent();
                        islemArizaIscilik = new __WEBPACK_IMPORTED_MODULE_3__entities_islem_ariza_iscilik__["a" /* IslemArizaIscilik */]();
                        return [4 /*yield*/, islemArizaIscilik.fillIslemArizaIscilik(data)];
                    case 3:
                        item = _a.sent();
                        return [4 /*yield*/, this.islemArizaIscilikDao.insertList(item)];
                    case 4:
                        res_1 = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res_1);
                            })];
                    case 5:
                        this.util.ifOffline();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    IslemArizaIscilikProvider.prototype.getDataFromApi = function (first, header) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = this.api.islemArizaIscilikDownloadUrl(first);
                return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
            });
        });
    };
    IslemArizaIscilikProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */]])
    ], IslemArizaIscilikProvider);
    return IslemArizaIscilikProvider;
}());

//# sourceMappingURL=islem-ariza-iscilik.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemArizaIscilik; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityUtil__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var IslemArizaIscilik = (function (_super) {
    __extends(IslemArizaIscilik, _super);
    function IslemArizaIscilik() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IslemArizaIscilik.prototype.fillIslemArizaIscilik = function (data) {
        var parsedList = [];
        var list = data.message[0].liste;
        var versiyon = data.message[0].versiyon;
        /**
         *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
         */
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK, versiyon);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.ISLEM_ARIZA_ISCILIK, list.length);
        this.indirilenVeriyiHesapla(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK, list.length);
        list.forEach(function (obj) {
            var item = new IslemArizaIscilik();
            item.mamAnaGrp = obj.mamAnaGrp;
            item.islGrp = obj.islGrp;
            item.islGrpAd = obj.islGrpAd;
            item.arzGrp = obj.arzGrp;
            item.arzGrpAd = obj.arzGrpAd;
            item.iscKod = obj.iscKod;
            item.durum = obj.durum;
            parsedList.push(item);
        });
        return new Promise(function (resolve) {
            resolve(parsedList);
        });
    };
    return IslemArizaIscilik;
}(__WEBPACK_IMPORTED_MODULE_1__EntityUtil__["a" /* EntityUtil */]));

//# sourceMappingURL=islem-ariza-iscilik.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adres_dao_adres_dao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Sehir__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Ilce__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_mahalle__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_EntityUtil__ = __webpack_require__(55);
/**
 * @author malisahin
 * @since 2018-04-14
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var AdresProvider = (function () {
    function AdresProvider(http, api, token, adresDao, util, logger) {
        this.http = http;
        this.api = api;
        this.token = token;
        this.adresDao = adresDao;
        this.util = util;
        this.logger = logger;
    }
    AdresProvider.prototype.downloadSehirData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, header, apiData, sehirList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getSehirIlceUrl(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 3];
                        this.util.loaderStart(true);
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        apiData = _a.sent();
                        sehirList = this.fillSehirList(apiData);
                        this.logger.dir(apiData);
                        return [2 /*return*/, this.adresDao.insertSehirList(sehirList)];
                    case 3:
                        this.util.ifOffline();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdresProvider.prototype.downloadIlceData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, header, apiData, ilceList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getSehirIlceUrl(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 3];
                        this.util.loaderStart(true);
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        apiData = _a.sent();
                        ilceList = this.fillIlceList(apiData);
                        return [2 /*return*/, this.adresDao.insertIlceList(ilceList)];
                    case 3:
                        this.util.ifOffline();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdresProvider.prototype.downloadMahalleData = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header, apiData, mahalleList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getMahalleTnmUrl(first);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 3];
                        this.util.loaderStart(true);
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        apiData = _a.sent();
                        mahalleList = this.fillMahalleList(apiData);
                        return [2 /*return*/, this.adresDao.insertMahalleList(mahalleList)];
                    case 3:
                        this.util.ifOffline();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdresProvider.prototype.fillSehirList = function (item) {
        var sehirList = new Array();
        var list = item.message.data;
        var versiyon = item.message.versiyon;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.SEHIR_TNM, versiyon);
        list.forEach(function (row) {
            var sehir = new __WEBPACK_IMPORTED_MODULE_6__entities_Sehir__["a" /* Sehir */]();
            sehir.sehirAdi = row.sehirAdi;
            sehir.sehirKodu = row.sehirKodu;
            sehirList.push(sehir);
        });
        return sehirList;
    };
    AdresProvider.prototype.fillIlceList = function (item) {
        var ilceList = new Array();
        var list = item.message.data;
        var versiyon = item.message.versiyon;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.ILCE_TNM, versiyon);
        list.forEach(function (row) {
            var ilce = new __WEBPACK_IMPORTED_MODULE_7__entities_Ilce__["a" /* Ilce */]();
            ilce.ilceAdi = row.ilceAdi;
            ilce.ilceKodu = row.ilceKodu;
            ilce.sehirKodu = row.sehirKodu;
            ilceList.push(ilce);
        });
        return ilceList;
    };
    AdresProvider.prototype.fillMahalleList = function (item) {
        var mahalleList = new Array();
        var list = item.message.data;
        var versiyon = item.message.versiyon;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].VERSIYON.SERVER.MAHALLE_TNM, versiyon);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].GELEN_VERI.MAHALLE_TNM, item.message.data.length.toString());
        var entityUtil = new __WEBPACK_IMPORTED_MODULE_11__entities_EntityUtil__["a" /* EntityUtil */]();
        entityUtil.indirilenVeriyiHesapla(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM, item.message.data.length);
        list.forEach(function (row) {
            var mahalle = new __WEBPACK_IMPORTED_MODULE_8__entities_mahalle__["a" /* Mahalle */]();
            mahalle.sehirKodu = row.sehirKodu;
            mahalle.ilceKodu = row.ilceKodu;
            mahalle.mahalleAdi = row.mahalleAdi;
            mahalle.mahalleKodu = row.mahalleKodu;
            mahalleList.push(mahalle);
        });
        return mahalleList;
    };
    AdresProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_9__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_4__adres_dao_adres_dao__["a" /* AdresDao */],
            __WEBPACK_IMPORTED_MODULE_10__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */]])
    ], AdresProvider);
    return AdresProvider;
}());

//# sourceMappingURL=adres.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiSorguComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__urun_search_urun_search__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_GarantiSorgu__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_garanti_sorgu_garanti_sorgu__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_util_plugin_util_plugin__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var GarantiSorguComponent = (function () {
    function GarantiSorguComponent(urunAnaGrupDao, modalController, util, garantiSorguProvider, plugins, http) {
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.modalController = modalController;
        this.util = util;
        this.garantiSorguProvider = garantiSorguProvider;
        this.plugins = plugins;
        this.http = http;
        this.data = { type: "", nerden: "BILGI_SORGU" };
        this.urunAnaGrup = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
        this.urun = new __WEBPACK_IMPORTED_MODULE_3__entities_urun__["a" /* Urun */]();
        this.ionViewDidLoad();
    }
    GarantiSorguComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.urunAnaGrupDao.getPage(this.urunAnaGrup, __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, 0, 10).then(function (list) {
            _this.urunAnaGrupList = list.rows;
        });
    };
    GarantiSorguComponent.prototype.urunAnaGrupSorgula = function () {
        var _this = this;
        this.data.type = __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */], { data: this.data }, { cssClass: this.util.getSelectedTheme() });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data))
                _this.urunAnaGrup = data;
        });
        aramaModal.present();
    };
    GarantiSorguComponent.prototype.urunSorgula = function () {
        var _this = this;
        this.data.type = __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_8__urun_search_urun_search__["a" /* UrunSearchComponent */], { data: this.data }, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data))
                _this.urun = data;
        });
        aramaModal.present();
    };
    GarantiSorguComponent.prototype.garantiSorgula = function () {
        if (this.util.isEmpty(this.faturaTarihi)) {
            this.util.error("Fatura tarihi boş bırakılamaz");
            return false;
        }
        if (this.util.isEmpty(this.barkodNo)) {
            this.util.error("Barkod No Boş bırakılamaz");
            return false;
        }
        this.util.success("Garanti Sorgulandı");
        var sorguData = new __WEBPACK_IMPORTED_MODULE_10__entities_GarantiSorgu__["a" /* GarantiSorgu */]();
        var user = new __WEBPACK_IMPORTED_MODULE_12__entities_user__["a" /* User */]();
        sorguData.mamKod = this.urun.mamKod;
        sorguData.satisTarihi = this.faturaTarihi.toString();
        sorguData.orgKod = "ECA"; //user.getOrgKod();
        sorguData.mamSeriNo = this.barkodNo;
        sorguData.islemTarihi = this.faturaTarihi.toString(); // new Date().toString();
        sorguData.serKod = "ECA_TEST"; //user.getSerKod();
        sorguData.dilKod = "T"; //user.getDilKod();
        this.garantiSorguProvider.fetchDataFromApi(sorguData);
    };
    GarantiSorguComponent.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plugins.scanBarcode()];
                    case 1:
                        result = _a.sent();
                        if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.text)) {
                            this.util.success(" Barcode Alındı: " + result.text);
                            this.barkodNo = result.text;
                        }
                        else {
                            this.util.error(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GarantiSorguComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'garanti-sorgu',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\garanti-sorgu\garanti-sorgu.html"*/'<!-- Generated template for the HizmetBilgileriComponent component -->\n\n\n\n<ion-row>\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Ürün Ana Grubu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="text" [(ngModel)]="urunAnaGrup.ad" (ionFocus)="urunAnaGrupSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Ürün Kodu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="text" [(ngModel)]="urun.mamKod" (ionFocus)="urunSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Barkod Numarası:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-6 col-md-6>\n\n    <ion-input type="text" [(ngModel)]="barkodNo" required></ion-input>\n\n  </ion-col>\n\n  <ion-col col-2 col-md-4>\n\n    <button item-left ion-button icon-start full round (click)="scanBarcode()" style="margin-top: 8px;">\n\n      <span>\n\n        <i item-right class="fas fa-barcode"></i>\n\n      </span>\n\n    </button>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Fatura Tarihi:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="faturaTarihi" required></ion-datetime>\n\n  </ion-col>\n\n\n\n  <ion-col col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n    <button ion-button icon-start full round (click)="garantiSorgula();">\n\n      <ion-icon name="search"></ion-icon>\n\n      Garanti Sorgula\n\n    </button>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\garanti-sorgu\garanti-sorgu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_util_plugin_util_plugin__["a" /* UtilPlugin */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]])
    ], GarantiSorguComponent);
    return GarantiSorguComponent;
}());

//# sourceMappingURL=garanti-sorgu.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyarlarPageModule", function() { return AyarlarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ayarlar__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AyarlarPageModule = (function () {
    function AyarlarPageModule() {
    }
    AyarlarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */]), __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ayarlar__["a" /* AyarlarPage */]
            ]
        })
    ], AyarlarPageModule);
    return AyarlarPageModule;
}());

//# sourceMappingURL=ayarlar.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyarlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cagrilar_cagrilar__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guncelleme_guncelleme__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_tasks_tasks__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_theme_theme__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */












var AyarlarPage = (function () {
    function AyarlarPage(navCtrl, navParams, util, baseDao, tasks, fiyatDao, hizmetDao, themeProvider, logger) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.baseDao = baseDao;
        this.tasks = tasks;
        this.fiyatDao = fiyatDao;
        this.hizmetDao = hizmetDao;
        this.themeProvider = themeProvider;
        this.logger = logger;
        this.activePage = "silme";
        this.deletedVersion = (-1).toString();
        this.DEFAULT_SYNC_TIME = 2;
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.onChangeSyncTime('TS');
        this.selectedTheme = this.themeProvider.getSelectedTheme();
        this.onChangeTheme();
    }
    AyarlarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyarlarPage');
        this.onChangeMessageDuration('TS');
    };
    AyarlarPage.prototype.deleteUrunler = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN)];
                    case 1:
                        _a.sent();
                        this.util.info("Ürün Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteUrunAnaGrup = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP)];
                    case 1:
                        _a.sent();
                        this.util.info("Ürün Ana Grup Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteUrunIscilik = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK)];
                    case 1:
                        _a.sent();
                        this.util.info("Ürün Ana Grup Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteUrunMalzeme = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME)];
                    case 1:
                        _a.sent();
                        this.util.info("Ürün Malzeme Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteIslemArizaIscilik = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK)];
                    case 1:
                        _a.sent();
                        this.util.info("Işlem Arıza İşçilik Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteMalzemeFiyat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fiyatDao.deleteAllByTip(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT)];
                    case 1:
                        _a.sent();
                        this.util.info("Malzeme Fiyat Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteIscilikFiyat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fiyatDao.deleteAllByTip(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT)];
                    case 1:
                        _a.sent();
                        this.util.info("Işçilik Fiyat Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteSehirList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM)];
                    case 1:
                        _a.sent();
                        this.util.info("Şehir Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteIlceList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM)];
                    case 1:
                        _a.sent();
                        this.util.info("Ilçe Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteMahalleList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM)];
                    case 1:
                        _a.sent();
                        this.util.info("Mahalle Listesi Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteAllServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.hizmetDao.deleteList()];
                    case 1:
                        _a.sent();
                        this.util.info("Çağrı Listesi Silindi");
                        setTimeout(function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cagrilar_cagrilar__["a" /* CagrilarPage */]);
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.deleteAllRecords = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteUrunler()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.deleteUrunAnaGrup()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.deleteUrunIscilik()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.deleteUrunMalzeme()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.deleteIslemArizaIscilik()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.deleteMalzemeFiyat()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.deleteIscilikFiyat()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.deleteSehirList()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.deleteIlceList()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.deleteMahalleList()];
                    case 10:
                        _a.sent();
                        this.util.info("Tüm Kayıtlar Silindi.");
                        setTimeout(function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__guncelleme_guncelleme__["a" /* GuncellemePage */]);
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.onChangeSyncTime = function (nerden) {
        var permanentSyncTime = Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].SYNC.TIME));
        if (this.util.isEmpty(this.syncTime)) {
            if (this.util.isEmpty(permanentSyncTime)) {
                this.syncTime = this.DEFAULT_SYNC_TIME;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].SYNC.TIME, String(this.DEFAULT_SYNC_TIME));
            }
            else {
                this.syncTime = Number(permanentSyncTime);
            }
        }
        else {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].SYNC.TIME, String(this.syncTime));
            if (nerden == 'HTML') {
                this.util.success("Senkronize süresi değiştirildi. Atanan değer " + String(this.syncTime) + " dk.");
                this.tasks.killAndStartTasks();
            }
        }
    };
    AyarlarPage.prototype.onChangeTheme = function () {
        /* if (this.util.isEmpty(this.selectedTheme)) {
           this.logger.log("Tema seçilmemiş default set edilir.");
           this.themeProvider.setTheme();
         } else {
           this.logger.log("Tema değiştirildi. Yeni tema" + this.selectedTheme);
           this.themeProvider.changeTheme(this.selectedTheme);
         }
     
         */
    };
    AyarlarPage.prototype.onChangeMessageDuration = function (nerden) {
        if (this.util.isEmpty(this.messageDuration)) {
            var duration = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].MESSAGE_DURATION);
            if (this.util.isEmpty(duration)) {
                duration = __WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DEFAULT_MESSAGE_DURATION;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].MESSAGE_DURATION, duration);
            }
            this.messageDuration = Number(duration);
        }
        if (nerden == "HTML") {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].MESSAGE_DURATION, String(this.messageDuration));
            var degisimSonrasiUyari = "Uyarı Süresi Değiştirildi. Atanan Değer : " + this.messageDuration;
            this.util.success(degisimSonrasiUyari);
            this.logger.info(degisimSonrasiUyari);
        }
    };
    AyarlarPage.prototype.showLogs = function () {
        //this.navCtrl.push(LogPage);
    };
    AyarlarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ayarlar',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\ayarlar\ayarlar.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-md-12>\n\n      <ion-title class="page-title"> Silme İşlemleri</ion-title>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <button ion-button primary round full (click)="deleteUrunler();">\n\n      <span item-left style="width: 95%">Ürünler</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteUrunAnaGrup();">\n\n      <span item-left style="width: 95%">Ürün Ana Grupları</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteUrunIscilik();">\n\n      <span item-left style="width: 95%">Ürün Işçilik</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteUrunMalzeme();">\n\n      <span item-left style="width: 95%">Ürün-Malzeme</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteIslemArizaIscilik();">\n\n      <span item-left style="width: 95%">İşlem-Arıza-Işçilik</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteMalzemeFiyat();">\n\n      <span item-left style="width: 95%">Malzeme Fiyatları</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteIscilikFiyat();">\n\n      <span item-left style="width: 95%">İşçilik Fiyatları</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteSehirList();">\n\n      <span item-left style="width: 95%">Şehir Listesi</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteIlceList();">\n\n      <span item-left style="width: 95%">İlçe Listesi</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n\n\n    <button ion-button primary round full (click)="deleteMahalleList();">\n\n      <span item-left style="width: 95%">Mahalle Listesi</span>\n\n      <span item-right style="width: 5%">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </span>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button round full (click)="deleteAllRecords();" style="background: rgba(204, 0, 0, 0.8)">\n\n        <span item-left style="width: 95%">Tüm Kayıtlar</span>\n\n        <span item-right style="width: 5%">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </span>\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <button ion-button round full (click)="deleteAllServices();" style="background: rgba(204, 0, 0, 0.8)">\n\n        <span item-left style="width: 95%">Tüm Çağrılar</span>\n\n        <span item-right style="width: 5%">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </span>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-6 col-md-3>\n\n      <ion-label>Senkronize Süresi(Dakika):</ion-label>\n\n    </ion-col>\n\n    <ion-col col-6 col-md-9>\n\n      <ion-select [(ngModel)]="syncTime" interface="popover" (ionChange)="onChangeSyncTime(\'HTML\')">\n\n        <ion-option value="0.5">0.5</ion-option>\n\n        <ion-option value="1">1</ion-option>\n\n        <ion-option value="2">2</ion-option>\n\n        <ion-option value="3">3</ion-option>\n\n        <ion-option value="5">5</ion-option>\n\n        <ion-option value="10">10</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-6 col-md-3>\n\n      <ion-label>Tema Seçiniz:</ion-label>\n\n    </ion-col>\n\n    <ion-col col-6 col-md-9>\n\n      <ion-select [(ngModel)]="selectedTheme" interface="popover" (ionChange)="onChangeTheme()">\n\n        <ion-option value="BLUE">Mavi</ion-option>\n\n        <ion-option value="GREEN">Yeşil</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-6 col-md-3>\n\n      <ion-label>Uyarı Süresi(Saniye):</ion-label>\n\n    </ion-col>\n\n    <ion-col col-6 col-md-9>\n\n      <ion-select [(ngModel)]="messageDuration" interface="popover" (ionChange)="onChangeMessageDuration(\'HTML\')">\n\n        <ion-option value="2">2</ion-option>\n\n        <ion-option value="3">3</ion-option>\n\n        <ion-option value="4">4</ion-option>\n\n        <ion-option value="5">5</ion-option>\n\n        <ion-option value="10">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button primary round full (click)="showLogs()">\n\n        <span item-left style="width: 95%">Log\'ları Görüntüle</span>\n\n        <span item-right style="width: 5%">\n\n          <i class="fas fa-file-alt"></i>\n\n        </span>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\ayarlar\ayarlar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_base_dao_base_dao__["a" /* BaseDao */],
            __WEBPACK_IMPORTED_MODULE_9__providers_tasks_tasks__["a" /* TasksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
            __WEBPACK_IMPORTED_MODULE_6__providers_hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_10__providers_theme_theme__["a" /* ThemeProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__["a" /* LoggerProvider */]])
    ], AyarlarPage);
    return AyarlarPage;
}());

//# sourceMappingURL=ayarlar.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BildirimlerPageModule", function() { return BildirimlerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bildirimler__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mesaj_detail_mesaj_detail__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BildirimlerPageModule = (function () {
    function BildirimlerPageModule() {
    }
    BildirimlerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bildirimler__["a" /* BildirimlerPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_mesaj_detail_mesaj_detail__["a" /* MesajDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bildirimler__["a" /* BildirimlerPage */]), __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"]
            ],
        })
    ], BildirimlerPageModule);
    return BildirimlerPageModule;
}());

//# sourceMappingURL=bildirimler.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilgiSorguPageModule", function() { return BilgiSorguPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bilgi_sorgu__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BilgiSorguPageModule = (function () {
    function BilgiSorguPageModule() {
    }
    BilgiSorguPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bilgi_sorgu__["a" /* BilgiSorguPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bilgi_sorgu__["a" /* BilgiSorguPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"]
            ],
        })
    ], BilgiSorguPageModule);
    return BilgiSorguPageModule;
}());

//# sourceMappingURL=bilgi-sorgu.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CagriDetayPageModule", function() { return CagriDetayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagri_detay__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cagri_detay_Components_hizmet_bilgileri_hizmet_bilgileri__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cagri_detay_Components_musteri_bilgileri_musteri_bilgileri__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cagri_detay_components_servis_bilgileri_servis_bilgileri__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cagri_detay_Components_urun_bilgileri_urun_bilgileri__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cagri_detay_components_detay_bilgileri_detay_bilgileri__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cagri_detay_components_servis_bilgileri_islem_tarih_islem_tarih__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cagri_detay_components_servis_bilgileri_servis_islem_tarihce_servis_islem_tarihce__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module_shared_module_module__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_hizmet_detay_hizmet_detay__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_detay_piy_search_detay_piy_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_urun_ana_grup_update_urun_ana_grup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CagriDetayPageModule = (function () {
    function CagriDetayPageModule() {
    }
    CagriDetayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cagri_detay__["a" /* CagriDetayPage */],
                __WEBPACK_IMPORTED_MODULE_3__components_cagri_detay_Components_hizmet_bilgileri_hizmet_bilgileri__["a" /* HizmetBilgileriComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_cagri_detay_Components_musteri_bilgileri_musteri_bilgileri__["a" /* MusteriBilgileriComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_cagri_detay_components_servis_bilgileri_servis_bilgileri__["a" /* ServisBilgileriComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_cagri_detay_Components_urun_bilgileri_urun_bilgileri__["a" /* UrunBilgileriComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_cagri_detay_components_detay_bilgileri_detay_bilgileri__["a" /* DetayBilgileriComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_cagri_detay_components_servis_bilgileri_islem_tarih_islem_tarih__["a" /* IslemTarihComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_cagri_detay_components_servis_bilgileri_servis_islem_tarihce_servis_islem_tarihce__["a" /* ServisIslemTarihceComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_hizmet_detay_hizmet_detay__["a" /* HizmetDetayComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_detay_piy_search_detay_piy_search__["a" /* DetayPiySearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_update_urun_ana_grup_update_urun_ana_grup__["a" /* UpdateUrunAnaGrupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cagri_detay__["a" /* CagriDetayPage */]), __WEBPACK_IMPORTED_MODULE_10__shared_module_shared_module_module__["SharedModule"], __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CagriDetayPageModule);
    return CagriDetayPageModule;
}());

//# sourceMappingURL=cagri-detay.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriNoSorguProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * @author : mali.sahin
 * @since  : 18.06.2018
 */
var SeriNoSorguProvider = (function () {
    function SeriNoSorguProvider(http, api, util, tokenProvider, logger) {
        this.http = http;
        this.api = api;
        this.util = util;
        this.tokenProvider = tokenProvider;
        this.logger = logger;
    }
    SeriNoSorguProvider.prototype.fetchData = function (mamKod) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header, res_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.seriNoSorguUrl(mamKod);
                        this.logger.warn(url);
                        return [4 /*yield*/, this.tokenProvider.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        res_1 = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res_1);
                            })];
                    case 3:
                        this.util.ifOffline();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SeriNoSorguProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */]])
    ], SeriNoSorguProvider);
    return SeriNoSorguProvider;
}());

//# sourceMappingURL=seri-no-sorgu.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BransDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BransDao = (function () {
    function BransDao(dbProvider, util, logger, baseDao) {
        this.dbProvider = dbProvider;
        this.util = util;
        this.logger = logger;
        this.baseDao = baseDao;
    }
    BransDao.prototype.insertList = function (list) {
        var _this = this;
        var insertedItems = 0;
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO OFF_BRANS_LIST (hizmetTipi, mamAnaGrp, exp) VALUES (?,?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.hizmetTipi, item.mamAnaGrp, item.exp];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            this.logger.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    BransDao.prototype.getList = function (filter) {
        var searchType = __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT;
        var query = this.prepareListQuery(filter, searchType);
        return this.baseDao.getList(query, "hizmetTipi, mamAnaGrp", "", searchType, 0, 100, true);
    };
    BransDao.prototype.prepareListQuery = function (filter, searchType) {
        var query = "SELECT * FROM OFF_BRANS_LIST WHERE 1=1 ";
        if (this.util.isNotEmpty(filter.hizmetTipi))
            query += " AND hizmetTipi = '" + filter.hizmetTipi + "'";
        if (this.util.isNotEmpty(filter.mamAnaGrp))
            query += " AND mamAnaGrp = '" + filter.mamAnaGrp + "'";
        return query;
    };
    BransDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__["a" /* BaseDao */]])
    ], BransDao);
    return BransDao;
}());

//# sourceMappingURL=brans-dao.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brans; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var Brans = (function () {
    function Brans() {
    }
    Brans.create = function (hizmetTipi, mamAnaGrp, exp) {
        var brans = new Brans();
        brans.hizmetTipi = hizmetTipi;
        brans.mamAnaGrp = mamAnaGrp;
        brans.exp = exp;
        return brans;
    };
    return Brans;
}());

//# sourceMappingURL=Brans.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_zebra_printer_zebra_printer__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_profil__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PrinterService = (function () {
    function PrinterService(http, modalCtrl, util) {
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.seperator = "..............................................";
        this.profil = new __WEBPACK_IMPORTED_MODULE_8__entities_profil__["a" /* Profil */]();
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_2__entities_user__["a" /* User */]();
        this.init();
    }
    PrinterService.prototype.init = function () {
    };
    PrinterService.prototype.showPrinterList = function (hizmet) {
        this.hizmet = hizmet;
        var text = this.getPrintText();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */], { text: text }, { cssClass: this.util.getSelectedTheme() });
        modal.present();
    };
    PrinterService.prototype.getPrintText = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__entities_profil__["a" /* Profil */].getActiveProfil().orgKod == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].ORG_KODS.ECA) {
            return this.prepareDataEmar();
        }
        else if (__WEBPACK_IMPORTED_MODULE_8__entities_profil__["a" /* Profil */].getActiveProfil().orgKod == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].ORG_KODS.BAY) {
            return this.prepareDataBaymak();
        }
    };
    PrinterService.prototype.prepareAnketData = function () {
        var anketPrintText = "";
        var anket = this.hizmet.anket;
        if (this.util.isNotEmpty(anket)) {
            anket.anketSorular.forEach(function (soru) {
                anketPrintText += soru.serSoruTnm.soruText + " : ";
                anket.anketCevaplar
                    .filter(function (filter) { return soru.soruId == filter.soruId; })
                    .forEach(function (cevap) {
                    anketPrintText += cevap.cevapText;
                });
                anketPrintText += "\n\r";
            });
        }
        return anketPrintText;
    };
    PrinterService.prototype.prepareAdres = function () {
        var adres = [];
        if (this.util.isNotEmpty(this.hizmet.semt))
            adres.push(" Semt: " + this.hizmet.semt);
        if (this.util.isNotEmpty(this.hizmet.mahalle))
            adres.push(" Mahalle: " + this.hizmet.mahalle);
        if (this.util.isNotEmpty(this.hizmet.cadde))
            adres.push(" Cadde: " + this.hizmet.cadde);
        if (this.util.isNotEmpty(this.hizmet.sokak))
            adres.push(" Sokak: " + this.hizmet.sokak);
        if (this.util.isNotEmpty(this.hizmet.aparman))
            adres.push(" Apartman: " + this.hizmet.aparman);
        if (this.util.isNotEmpty(this.hizmet.apartmanNo))
            adres.push(" Apartman No: " + this.hizmet.apartmanNo);
        if (this.util.isNotEmpty(this.hizmet.blok))
            adres.push(" Blok: " + this.hizmet.blok);
        if (this.util.isNotEmpty(this.hizmet.daireNo))
            adres.push(" Daire No: " + this.hizmet.daireNo);
        return adres.join("/");
    };
    PrinterService.prototype.prepareDataEmar = function () {
        var data = "";
        var toplamTutar = 0;
        var kdv = 0;
        data += "! U1 SETLP 5 0 24";
        data += "\n! U1 SETBOLD 2";
        data += "\n      " + this.util.getSystemLabel("MOBIL_PRINT_HEADER1_LABEL") + "";
        data += "\n! U1 SETBOLD 0";
        data += "\n! U1 SETBOLD 2";
        data += "\n\r    " + this.util.getSystemLabel("YETKILI_SERVIS_HIZMET_FISI_LABEL") + "";
        data += "\n! U1 SETBOLD 0";
        data += "\n! U1 SETLP 7 0 24";
        data += "\n! U1 SETBOLD 2";
        data += "\n\r BASVURU BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Hizmet Tipi         : " + this.util.translateTurkishCharacters(this.hizmet.hizmetTipiAdi);
        data += "\n\r  Mamul Ana Grubu     : " + this.util.translateTurkishCharacters(this.hizmet.mamAnaGrpAdi);
        data += "\n\r  Basvuru Nedeni      : " + this.util.translateTurkishCharacters(this.hizmet.basvuruNedenAdi);
        data += "\n! U1 SETBOLD 2";
        data += "\n\r  Hizmet Formu No     : " + this.hizmet.seqNo;
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Cagri No            : " + this.util.emptyIfNull(this.hizmet.cmNo);
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r SERVIS BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Servis Kodu / Adi   : " + this.hizmet.serKod + "-" + this.util.translateTurkishCharacters(this.user.getServisUnvani());
        data += "\n\r  Teknisyen           : " + this.hizmet.ikKod + "-" + this.util.translateTurkishCharacters(this.user.getIkAd());
        data += "\n\r  Randevu Tarihi      : " + this.util.dateFormatRegex(this.hizmet.randevuTarihi, "dd-MM-yyyy hh:mm");
        data += "\n\r  Islem Bit. Tarihi   : " + this.util.dateFormatRegex(this.hizmet.islemBitTarihi, "dd-MM-yyyy hh:mm");
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r MUSTERI BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  MRK MUSTERI NO      : " + this.hizmet.crmNo;
        data += "\n\r  Musteri Adi Soyadi  : " + this.util.translateTurkishCharacters(this.hizmet.adi) + " " +
            this.util.translateTurkishCharacters(this.hizmet.soyadi) +
            this.util.translateTurkishCharacters(this.hizmet.firmaUnvani);
        data += "\n\r  Musteri Adresi      : " + this.util.translateTurkishCharacters(this.prepareAdres());
        data += "\n\r  Il/Ilce             : " + this.util.translateTurkishCharacters(this.hizmet.sehir) + "/"
            + this.util.translateTurkishCharacters(this.hizmet.ilceAdi);
        data += "\n\r  Musteri Telefonu    : " + this.util.emptyIfNull(this.hizmet.evTel);
        data += "\n\r  Cep Telefonu        : " + this.util.emptyIfNull(this.hizmet.gsmNo);
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r URUN BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Urun Kodu           : " + this.hizmet.mamKod;
        data += "\n\r  Urun Adi            : " + this.util.translateTurkishCharacters(this.hizmet.mamAdi);
        data += "\n\r  Seri                : " + this.hizmet.mamSeriNo;
        if (this.hizmet.seriMetod == "2")
            data += "\n\r  Seri 2              : " + this.hizmet.mamSeriNo2;
        data += "\n\r" + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r TEKNIK DEGERLER';
        data += '\n! U1 SETBOLD 0';
        // Anket Cevapları
        data += '\n\r' + this.util.translateTurkishCharacters(this.prepareAnketData());
        data += '\n\r' + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r GARANTI DURUMU ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Islem                : " + (this.hizmet.garanti == "VAR" ? "Garanti Dahili" : "Garanti Disi");
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r VERILEN HIZMETLER ";
        data += "\n! U1 SETBOLD 0";
        data += "\n! U1 SETBOLD 2";
        data += "\n\r  Adi                    Miktar          " + (this.hizmet.garanti == "VAR" ? "" : "Tutar");
        data += "\n! U1 SETBOLD 0";
        var iscilik = "";
        var parca = "";
        var yol = "";
        var diger = "";
        if (this.util.isNotEmpty(this.hizmet.detayDtoList))
            for (var k = 0; this.hizmet.detayDtoList.length > k; k++) {
                var item = this.hizmet.detayDtoList[k];
                toplamTutar = toplamTutar + item.tutar;
                kdv = kdv + (item.tutar / 100) * item.kdvOran;
                var detaySatir = "\n\r " + item.mlzIscKod + "-" + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) +
                    "   " + item.miktar + "-" + item.olcuBrm + "    " + (this.hizmet.garanti != "VAR" ? item.tutar : "");
                var isIscilik = item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.ISCILIK && item.mlzIscKod != "999977" && item.mlzIscKod != "999988";
                if (isIscilik) {
                    iscilik += detaySatir;
                }
                if (item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.MALZEME) {
                    parca += detaySatir;
                }
                if (item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.YOL &&
                    item.mlzIscKod == "999988") {
                    yol += detaySatir;
                }
                if (item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.DIGER &&
                    item.mlzIscKod == "999977") {
                    diger += detaySatir;
                }
            }
        if (iscilik != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Iscilikler ";
            data += "\n! U1 SETBOLD 0";
            data += iscilik;
        }
        if (parca != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Parcalar ";
            data += "\n! U1 SETBOLD 0";
            data += parca;
        }
        if (yol != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Yol ";
            data += "\n! U1 SETBOLD 0";
            data += yol;
        }
        if (diger != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Diger ";
            data += "\n! U1 SETBOLD 0";
            data += diger;
        }
        data += "\n\r" + this.seperator;
        if (this.hizmet.garanti == "VAR") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Toplam Hizmet Tutari  :   Garanti Dahili Islem ";
            data += "\n! U1 SETBOLD 0";
        }
        else {
            data += "\n! U1 SETBOLD 2";
            //data += '\n\r Toplam Hizmet Tutari  :   ' + (toplamTutar).toFixed(2);
            data += "\n! U1 SETBOLD 0";
        }
        if (this.hizmet.garanti == "VAR") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r KDV                   :   Garanti Dahili Islem ";
            data += "\n! U1 SETBOLD 0";
        }
        else {
            data += "\n! U1 SETBOLD 2";
            //data += '\n\r KDV                   :   ' + (kdv).toFixed(2);
            data += "\n! U1 SETBOLD 0";
        }
        if (this.hizmet.garanti == "VAR") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Genel Toplam          :   Garanti Dahili Islem ";
            data += "\n! U1 SETBOLD 0";
        }
        else {
            data += "\n! U1 SETBOLD 2";
            //  data += '\n\r Genel Toplam          :   ' + (kdv + toplamTutar).toFixed(2);
            data += "\n! U1 SETBOLD 0";
        }
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r Aciklama ";
        data += "\n! U1 SETBOLD 0";
        data +=
            "\n\r " + this.util.translateTurkishCharacters(this.hizmet.aciklama);
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        // data += '\n\r Iletisim Istek ';
        data += "\n! U1 SETBOLD 0";
        var note = "Elginkan Toplulugu Sirketleri tarafindan sesli mesaj, sms, e-posta, vb. tum elektronik iletisim vasitalari kullanilarak " +
            "tarafima bilgilendirme ve tanitim yapilmasini kabul ediyorum.";
        data += "\n! U1 SETBOLD 2";
        data += "\n\r " + note;
        if (this.hizmet.iletisimIstek == "H")
            data += "\n\r  EVET []  HAYIR[X] ";
        else
            data += "\n\r  EVET [X]  HAYIR[] ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r TEKNISYEN ADI/IMZA           MUSTERI ADI/IMZA ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r " + this.util.translateTurkishCharacters(this.user.getIkAd());
        data += "\n\r\n\r\n! U1 SETBOLD 2";
        data +=
            "\n\r " +
                this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER1_LABEL"));
        data += "\n! U1 SETBOLD 0";
        data += "\n\r\n\r\n! U1 SETBOLD 2";
        data +=
            "\n\r " +
                this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER2_LABEL")) +
                "\n\r ";
        data += "\n! U1 SETBOLD 0";
        return data;
    };
    PrinterService.prototype.prepareDataBaymak = function () {
        var data = "";
        var toplamTutar = 0;
        var kdv = 0;
        data += "! U1 SETLP 5 0 24";
        data += "\n! U1 SETBOLD 2";
        data += "\n      " + this.util.getSystemLabel("MOBIL_PRINT_HEADER1_LABEL") + "";
        data += "\n! U1 SETBOLD 0";
        data += "\n! U1 SETBOLD 2";
        data += "\n\r    " + this.util.getSystemLabel("YETKILI_SERVIS_HIZMET_FISI_LABEL") + "";
        data += "\n! U1 SETBOLD 0";
        data += "\n! U1 SETLP 7 0 24";
        data += "\n! U1 SETBOLD 2";
        data += "\n\r BASVURU BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Hizmet Tipi         : " + this.util.translateTurkishCharacters(this.hizmet.hizmetTipiAdi);
        data += "\n\r  Mamul Ana Grubu     : " + this.util.translateTurkishCharacters(this.hizmet.mamAnaGrpAdi);
        data += "\n\r  Basvuru Nedeni      : " + this.util.translateTurkishCharacters(this.hizmet.basvuruNedenAdi);
        data += "\n! U1 SETBOLD 2";
        data += "\n\r  Hizmet Formu No     : " + this.hizmet.seqNo;
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Cagri No            : " + this.util.emptyIfNull(this.hizmet.cmNo);
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r SERVIS BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Servis Kodu / Adi   : " + this.hizmet.serKod + "-" + this.util.translateTurkishCharacters(this.user.getServisUnvani());
        data += "\n\r  Teknisyen           : " + this.hizmet.ikKod + "-" + this.util.translateTurkishCharacters(this.user.getIkAd());
        data += "\n\r  Randevu Tarihi      : " + this.util.dateFormatRegex(this.hizmet.randevuTarihi, "dd-MM-yyyy hh:mm");
        data += "\n\r  Islem Bit. Tarihi   : " + this.util.dateFormatRegex(this.hizmet.islemBitTarihi, "dd-MM-yyyy hh:mm");
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r MUSTERI BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  MRK MUSTERI NO      : " + this.hizmet.crmNo;
        data += "\n\r  Musteri Adi Soyadi  : " + this.util.translateTurkishCharacters(this.hizmet.adi) + " " +
            this.util.translateTurkishCharacters(this.hizmet.soyadi) +
            this.util.translateTurkishCharacters(this.hizmet.firmaUnvani);
        data += "\n\r  Musteri Adresi      : " + this.util.translateTurkishCharacters(this.prepareAdres());
        data += "\n\r  Il/Ilce             : " + this.util.translateTurkishCharacters(this.hizmet.sehir) + "/"
            + this.util.translateTurkishCharacters(this.hizmet.ilceAdi);
        data += "\n\r  Musteri Telefonu    : " + this.util.emptyIfNull(this.hizmet.evTel);
        data += "\n\r  Cep Telefonu        : " + this.util.emptyIfNull(this.hizmet.gsmNo);
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r URUN BILGILERI ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Urun Kodu           : " + this.hizmet.mamKod;
        data += "\n\r  Urun Adi            : " + this.util.translateTurkishCharacters(this.hizmet.mamAdi);
        data += "\n\r  Seri                : " + this.hizmet.mamSeriNo;
        if (this.hizmet.seriMetod == "2")
            data += "\n\r  Seri 2              : " + this.hizmet.mamSeriNo2;
        data += "\n\r" + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r TEKNIK DEGERLER';
        data += '\n! U1 SETBOLD 0';
        // Anket Cevapları
        data += '\n\r' + this.util.translateTurkishCharacters(this.prepareAnketData());
        data += '\n\r' + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r GARANTI DURUMU ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r  Islem                : " + (this.hizmet.garanti == "VAR" ? "Garanti Dahili" : "Garanti Disi");
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r VERILEN HIZMETLER ";
        data += "\n! U1 SETBOLD 0";
        data += "\n! U1 SETBOLD 2";
        data += "\n\r  Adi                    Miktar          " + (this.hizmet.garanti == "VAR" ? "" : "Tutar");
        data += "\n! U1 SETBOLD 0";
        var iscilik = "";
        var parca = "";
        var yol = "";
        var diger = "";
        if (this.util.isNotEmpty(this.hizmet.detayDtoList))
            for (var k = 0; this.hizmet.detayDtoList.length > k; k++) {
                var item = this.hizmet.detayDtoList[k];
                toplamTutar = toplamTutar + item.tutar;
                kdv = kdv + (item.tutar / 100) * item.kdvOran;
                var detaySatir = "\n\r " + item.mlzIscKod + "-" + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) +
                    "   " + item.miktar + "-" + item.olcuBrm + "    " + (this.hizmet.garanti != "VAR" ? item.tutar : "");
                var isIscilik = item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.ISCILIK && item.mlzIscKod != "999977" && item.mlzIscKod != "999988";
                if (isIscilik) {
                    iscilik += detaySatir;
                }
                if (item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.MALZEME) {
                    parca += detaySatir;
                }
                if (item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.YOL &&
                    item.mlzIscKod == "999988") {
                    yol += detaySatir;
                }
                if (item.mlzIsc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].DETAY_TIPI.DIGER &&
                    item.mlzIscKod == "999977") {
                    diger += detaySatir;
                }
            }
        if (iscilik != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Iscilikler ";
            data += "\n! U1 SETBOLD 0";
            data += iscilik;
        }
        if (parca != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Parcalar ";
            data += "\n! U1 SETBOLD 0";
            data += parca;
        }
        if (yol != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Yol ";
            data += "\n! U1 SETBOLD 0";
            data += yol;
        }
        if (diger != "") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Diger ";
            data += "\n! U1 SETBOLD 0";
            data += diger;
        }
        data += "\n\r" + this.seperator;
        if (this.hizmet.garanti == "VAR") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Toplam Hizmet Tutari  :   Garanti Dahili Islem ";
            data += "\n! U1 SETBOLD 0";
        }
        else {
            data += "\n! U1 SETBOLD 2";
            //data += '\n\r Toplam Hizmet Tutari  :   ' + (toplamTutar).toFixed(2);
            data += "\n! U1 SETBOLD 0";
        }
        if (this.hizmet.garanti == "VAR") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r KDV                   :   Garanti Dahili Islem ";
            data += "\n! U1 SETBOLD 0";
        }
        else {
            data += "\n! U1 SETBOLD 2";
            //data += '\n\r KDV                   :   ' + (kdv).toFixed(2);
            data += "\n! U1 SETBOLD 0";
        }
        if (this.hizmet.garanti == "VAR") {
            data += "\n! U1 SETBOLD 2";
            data += "\n\r Genel Toplam          :   Garanti Dahili Islem ";
            data += "\n! U1 SETBOLD 0";
        }
        else {
            data += "\n! U1 SETBOLD 2";
            //  data += '\n\r Genel Toplam          :   ' + (kdv + toplamTutar).toFixed(2);
            data += "\n! U1 SETBOLD 0";
        }
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r Aciklama ";
        data += "\n! U1 SETBOLD 0";
        data +=
            "\n\r " + this.util.translateTurkishCharacters(this.hizmet.aciklama);
        data += "\n\r" + this.seperator;
        data += "\n! U1 SETBOLD 2";
        data += "\n\r TEKNISYEN ADI/IMZA           MUSTERI ADI/IMZA ";
        data += "\n! U1 SETBOLD 0";
        data += "\n\r " + this.util.translateTurkishCharacters(this.user.getIkAd());
        data += "\n\r\n\r\n! U1 SETBOLD 2";
        data +=
            "\n\r " +
                this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER1_LABEL"));
        data += "\n! U1 SETBOLD 0";
        data += "\n\r\n\r\n! U1 SETBOLD 2";
        data +=
            "\n\r " +
                this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER2_LABEL")) +
                "\n\r ";
        data += "\n! U1 SETBOLD 0";
        return data;
    };
    PrinterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */]])
    ], PrinterService);
    return PrinterService;
}());

//# sourceMappingURL=printer-service.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CagriAramaModalPageModule", function() { return CagriAramaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagri_arama_modal__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CagriAramaModalPageModule = (function () {
    function CagriAramaModalPageModule() {
    }
    CagriAramaModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cagri_arama_modal__["a" /* CagriAramaModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cagri_arama_modal__["a" /* CagriAramaModalPage */]),
            ],
        })
    ], CagriAramaModalPageModule);
    return CagriAramaModalPageModule;
}());

//# sourceMappingURL=cagri-arama-modal.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CagrilarPageModule", function() { return CagrilarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagrilar__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CagrilarPageModule = (function () {
    function CagrilarPageModule() {
    }
    CagrilarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cagrilar__["a" /* CagrilarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cagrilar__["a" /* CagrilarPage */]), __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cagrilar__["a" /* CagrilarPage */]]
        })
    ], CagrilarPageModule);
    return CagrilarPageModule;
}());

//# sourceMappingURL=cagrilar.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuncellemePageModule", function() { return GuncellemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guncelleme__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GuncellemePageModule = (function () {
    function GuncellemePageModule() {
    }
    GuncellemePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__guncelleme__["a" /* GuncellemePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__guncelleme__["a" /* GuncellemePage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"]
            ],
        })
    ], GuncellemePageModule);
    return GuncellemePageModule;
}());

//# sourceMappingURL=guncelleme.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KampanyalarPageModule", function() { return KampanyalarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kampanyalar__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var KampanyalarPageModule = (function () {
    function KampanyalarPageModule() {
    }
    KampanyalarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kampanyalar__["a" /* KampanyalarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kampanyalar__["a" /* KampanyalarPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"]
            ],
        })
    ], KampanyalarPageModule);
    return KampanyalarPageModule;
}());

//# sourceMappingURL=kampanyalar.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KampanyalarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


var KampanyalarPage = (function () {
    function KampanyalarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KampanyalarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KampanyalarPage');
    };
    KampanyalarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-kampanyalar',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\kampanyalar\kampanyalar.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button primary>\n\n      <ion-icon name="list"></ion-icon>\n\n    </button>\n\n    <ion-title class="page-title">Kampanyalar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\kampanyalar\kampanyalar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], KampanyalarPage);
    return KampanyalarPage;
}());

//# sourceMappingURL=kampanyalar.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KutuphanePageModule", function() { return KutuphanePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kutuphane__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KutuphanePageModule = (function () {
    function KutuphanePageModule() {
    }
    KutuphanePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__kutuphane__["a" /* KutuphanePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__kutuphane__["a" /* KutuphanePage */]),
            ],
        })
    ], KutuphanePageModule);
    return KutuphanePageModule;
}());

//# sourceMappingURL=kutuphane.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @since 2018/04/25
 */






var LoginProvider = (function () {
    function LoginProvider(token, tasks, util) {
        this.token = token;
        this.tasks = tasks;
        this.util = util;
        this.DEFAULT_SYNC_TIME = 10;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__entities_user__["a" /* User */]();
    }
    LoginProvider.prototype.login = function (userCode, password) {
        var _this = this;
        this.user.userCode = userCode;
        this.user.password = password;
        return this.token.getToken(userCode, password).then(function (res) {
            localStorage.setItem(_this.user.keys.userCode, userCode);
            localStorage.setItem(_this.user.keys.password, password);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].IS_ONLINE, String(true));
            _this.setDefaultSettings();
            _this.tasks.runTasks();
        });
    };
    LoginProvider.prototype.setDefaultSettings = function () {
        var syncTime = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SYNC.TIME);
        if (this.util.isEmpty(syncTime)) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SYNC.TIME, String(this.DEFAULT_SYNC_TIME));
        }
        var syncMoment = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SYNC.MOMENT);
        if (this.util.isEmpty(syncMoment)) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SYNC.MOMENT, String(new Date().getTime()));
        }
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__token_token__["a" /* TokenProvider */], __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__["a" /* TasksProvider */], __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_dao_user_dao__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_user__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brans_brans__ = __webpack_require__(201);
/**
 * @author mali.sahin
 * @since 2018/04/25
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var UserProvider = (function () {
    function UserProvider(http, logger, util, api, bransProvider, userDao) {
        this.http = http;
        this.logger = logger;
        this.util = util;
        this.api = api;
        this.bransProvider = bransProvider;
        this.userDao = userDao;
        this.user = new __WEBPACK_IMPORTED_MODULE_6__entities_user__["a" /* User */]();
    }
    UserProvider.prototype.getDataFromApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getKullaniciUrl();
                        return [4 /*yield*/, this.api.getHeader()];
                    case 1:
                        header = _a.sent();
                        return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
                }
            });
        });
    };
    UserProvider.prototype.getUser = function (userCode, password) {
        return __awaiter(this, void 0, void 0, function () {
            var userApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.dir(this.user);
                        this.user.password = password;
                        this.user.userCode = userCode;
                        if (!this.util.isOnline()) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getDataFromApi()];
                    case 1:
                        userApi = _a.sent();
                        if (!(this.util.isNotEmpty(userApi) && this.util.isNotEmpty(userApi.message))) return [3 /*break*/, 5];
                        userApi.message.password = password;
                        this.user = this.user.fillUser(userApi);
                        return [4 /*yield*/, this.bransProvider.insertList(this.user.ikBrans)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.userDao.insertOne(this.user)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getUserFromDB(this.user)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        this.util.error(userApi.description);
                        _a.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.getUserFromDB(this.user)];
                    case 8: return [2 /*return*/, _a.sent()];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.getUserFromDB = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userDao.getList(user)];
                    case 1:
                        result = _a.sent();
                        this.logger.dir(result);
                        if (result.res.rows.length > 0) {
                            return [2 /*return*/, result.res.rows.item(0)];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_7__brans_brans__["a" /* BransProvider */],
            __WEBPACK_IMPORTED_MODULE_3__user_dao_user_dao__["a" /* UserDao */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(6);
/**
 * @author mali.sahin
 * @since  2018/04/25
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDao = (function () {
    function UserDao(http, util, baseDao) {
        this.http = http;
        this.util = util;
        this.baseDao = baseDao;
    }
    UserDao.prototype.insertOne = function (item) {
        var INSERT_QUERY = "INSERT OR REPLACE INTO OFF_USER_DEF (user, userCode, pass,servis,hatirla,ikKod, ikAd,durum,userType,userName,orgKod,dilKod,pB) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        var params = [item.userName, item.userCode, item.password, item.servis, item.hatirla, item.ikKod, item.ikAd, item.durum, item.userType, item.adi, item.orgKod, item.dilKod, item.pb];
        return this.baseDao.execute(INSERT_QUERY, params);
    };
    UserDao.prototype.getList = function (user) {
        var query = this.prepareSelectQuery(user);
        return this.baseDao.getList(query, "userName", user, __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, 0, 100, true);
    };
    UserDao.prototype.prepareSelectQuery = function (user) {
        var query = 'SELECT * FROM OFF_USER_DEF WHERE 1=1';
        var searchQuery = [];
        if (this.util.isNotEmpty(user.userName))
            searchQuery.push(this.util.prepareWhereQuery(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, 'user', user.userName));
        if (this.util.isNotEmpty(user.userCode))
            searchQuery.push(this.util.prepareWhereQuery(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, 'userCode', user.userCode));
        if (this.util.isNotEmpty(user.password))
            searchQuery.push(this.util.prepareWhereQuery(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, 'pass', user.password));
        return this.util.prepareQuery(query, searchQuery, __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT);
    };
    UserDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__["a" /* BaseDao */]])
    ], UserDao);
    return UserDao;
}());

//# sourceMappingURL=user-dao.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableTotalElementsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TableTotalElementsProvider = (function () {
    function TableTotalElementsProvider(http, util, logger, api, token) {
        this.http = http;
        this.util = util;
        this.logger = logger;
        this.api = api;
        this.token = token;
        this.isSyncNecessary = true;
    }
    TableTotalElementsProvider.prototype.fetchDateFromApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var header, url, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 3];
                        url = this.api.getTotalTableElementsUrl();
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        data = _a.sent();
                        this.saveData(data);
                        return [3 /*break*/, 4];
                    case 3:
                        this.util.ifOffline();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TableTotalElementsProvider.prototype.saveData = function (data) {
        this.logger.dir2(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS.ALL_DATA, data);
        if (this.util.isNotEmpty(data) && this.util.isNotEmpty(data.message)) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS.ALL_DATA, JSON.stringify(data.message));
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS.SYNC_DAY, String(new Date().getDate()));
        }
    };
    TableTotalElementsProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkSync();
                        if (!this.isSyncNecessary) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fetchDateFromApi()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TableTotalElementsProvider.prototype.checkSync = function () {
        var syncDayOfMonth = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS.SYNC_DAY);
        var moment = new Date().getDate();
        if (this.util.isNotEmpty(syncDayOfMonth) && Number(syncDayOfMonth) == moment) {
            this.isSyncNecessary = false;
        }
    };
    TableTotalElementsProvider.prototype.getData = function (tip) {
        var data = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS.ALL_DATA));
        if (this.util.isNotEmpty(data)) {
            return data[__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].TABLE_TOTAL_ELEMENTS[tip]];
        }
        return 0;
    };
    TableTotalElementsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */]])
    ], TableTotalElementsProvider);
    return TableTotalElementsProvider;
}());

//# sourceMappingURL=table-total-elements.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IndirilenVeri */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity__ = __webpack_require__(614);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IndirilenVeri = (function () {
    function IndirilenVeri() {
    }
    return IndirilenVeri;
}());

var EntityUtil = (function (_super) {
    __extends(EntityUtil, _super);
    function EntityUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntityUtil.prototype.indirilenVeriyiHesapla = function (tip, miktar) {
        var saklananVeriString = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].INDIRILEN_VERI);
        var saklananVeri;
        if (this.isNotEmpty(saklananVeriString)) {
            saklananVeri = JSON.parse(saklananVeriString);
        }
        else {
            saklananVeri = new IndirilenVeri();
            saklananVeri.miktari = 0;
        }
        saklananVeri.miktari += miktar;
        saklananVeri.tipi = tip;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].INDIRILEN_VERI, JSON.stringify(saklananVeri));
    };
    EntityUtil.prototype.indirilenVeriyiSifirla = function () {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].INDIRILEN_VERI, "");
    };
    EntityUtil.prototype.getIndirilenVeri = function () {
        var veri = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].INDIRILEN_VERI);
        if (this.isNotEmpty(veri)) {
            return JSON.parse(veri);
        }
        else {
            return null;
        }
    };
    return EntityUtil;
}(__WEBPACK_IMPORTED_MODULE_1__BaseEntity__["a" /* BaseEntity */]));

//# sourceMappingURL=EntityUtil.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bildirimler_bildirimler__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cagrilar_cagrilar__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_guncelleme_guncelleme__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_kampanyalar_kampanyalar__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_kutuphane_kutuphane__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cagri_detay_cagri_detay__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login_login__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_urun_urun__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_urun_iscilik_urun_iscilik__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_urun_malzeme_urun_malzeme__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_islem_ariza_iscilik_islem_ariza_iscilik__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_fiyat_fiyat__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cagrilar_cagri_arama_modal_cagri_arama_modal__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_hizmet_hizmet__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_list_list__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_versiyon_versiyon__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_mesajlar_mesajlar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_bilgi_sorgu_bilgi_sorgu__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_urun_dao_urun_dao__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_urun_malzeme_dao_urun_malzeme_dao__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_toast__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_urun_iscilik_dao_urun_iscilik_dao__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_mesajlar_dao_mesajlar_dao__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_urun_search_urun_search__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_garanti_sorgu_garanti_sorgu__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_shared_module_shared_module_module__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_cagrilar_cagrilar_module__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_guncelleme_guncelleme_module__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_kampanyalar_kampanyalar_module__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_kutuphane_kutuphane_module__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_cagri_detay_cagri_detay_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_bilgi_sorgu_bilgi_sorgu_module__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_bildirimler_bildirimler_module__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_adres_adres__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_adres_dao_adres_dao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_garanti_sonuc_garanti_sonuc__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_garanti_sorgu_garanti_sorgu__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_hizmet_detay_hizmet_detay__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_detay_piy_search_detay_piy_search__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_user_user__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_user_dao_user_dao__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_network__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_anasayfa_anasayfa__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_anasayfa_anasayfa_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_mesaj_detail_mesaj_detail__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_header_header__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_printer_service_printer_service__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_zebra_printer_zebra_printer__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__providers_seri_no_sorgu_seri_no_sorgu__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_update_urun_ana_grup_update_urun_ana_grup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_urun_iscilik_search_urun_iscilik_search__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__providers_tasks_tasks__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__providers_theme_theme__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_deeplinks__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__providers_deeplink_printer_deeplink_printer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_login_login_module__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_cagrilar_cagri_arama_modal_cagri_arama_modal_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__components_malzeme_search_malzeme_search__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__providers_brans_brans__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__providers_brans_dao_brans_dao__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ionic_native_call_number__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__ionic_native_calendar__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__providers_util_plugin_util_plugin__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ionic_native_barcode_scanner__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__providers_anket_service_anket_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__components_anket_anket__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__components_spinner_spinner__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__providers_table_total_elements_table_total_elements__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90_intl__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_90_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91_intl_locale_data_jsonp_en__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91_intl_locale_data_jsonp_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_91_intl_locale_data_jsonp_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__ionic_native_sqlite__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__pipes_pipes_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__providers_base_base__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95_ionic_cache__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__providers_cache_cache__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































































































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_26__components_list_list__["a" /* ListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_93__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/anasayfa/anasayfa.module#AnasayfaPageModule', name: 'Anasayfa', segment: 'anasayfa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayarlar/ayarlar.module#AyarlarPageModule', name: 'AyarlarPage', segment: 'ayarlar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bildirimler/bildirimler.module#BildirimlerPageModule', name: 'BildirimlerPage', segment: 'bildirimler', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bilgi-sorgu/bilgi-sorgu.module#BilgiSorguPageModule', name: 'BilgiSorguPage', segment: 'bilgi-sorgu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cagri-detay/cagri-detay.module#CagriDetayPageModule', name: 'CagriDetayPage', segment: 'cagri-detay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cagrilar/cagri-arama-modal/cagri-arama-modal.module#CagriAramaModalPageModule', name: 'CagriAramaModalPage', segment: 'cagri-arama-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cagrilar/cagrilar.module#CagrilarPageModule', name: 'CagrilarPage', segment: 'cagrilar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guncelleme/guncelleme.module#GuncellemePageModule', name: 'GuncellemePage', segment: 'guncelleme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kampanyalar/kampanyalar.module#KampanyalarPageModule', name: 'KampanyalarPage', segment: 'kampanyalar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kutuphane/kutuphane.module#KutuphanePageModule', name: 'KutuphanePage', segment: 'kutuphane', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shared-module/shared-module.module#SharedModule', name: 'SharedModulePage', segment: 'shared-module', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_95_ionic_cache__["a" /* CacheModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_46__pages_shared_module_shared_module_module__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_cagrilar_cagrilar_module__["CagrilarPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_guncelleme_guncelleme_module__["GuncellemePageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_kampanyalar_kampanyalar_module__["KampanyalarPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_kutuphane_kutuphane_module__["KutuphanePageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_cagri_detay_cagri_detay_module__["CagriDetayPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_bilgi_sorgu_bilgi_sorgu_module__["BilgiSorguPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_bildirimler_bildirimler_module__["BildirimlerPageModule"],
                __WEBPACK_IMPORTED_MODULE_65__pages_anasayfa_anasayfa_module__["AnasayfaPageModule"],
                __WEBPACK_IMPORTED_MODULE_77__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_78__pages_cagrilar_cagri_arama_modal_cagri_arama_modal_module__["CagriAramaModalPageModule"]
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bildirimler_bildirimler__["a" /* BildirimlerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cagrilar_cagrilar__["a" /* CagrilarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_guncelleme_guncelleme__["a" /* GuncellemePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_kampanyalar_kampanyalar__["a" /* KampanyalarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_kutuphane_kutuphane__["a" /* KutuphanePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cagri_detay_cagri_detay__["a" /* CagriDetayPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cagrilar_cagri_arama_modal_cagri_arama_modal__["a" /* CagriAramaModalPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_list_list__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_bilgi_sorgu_bilgi_sorgu__["a" /* BilgiSorguPage */],
                __WEBPACK_IMPORTED_MODULE_44__components_urun_search_urun_search__["a" /* UrunSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_garanti_sonuc_garanti_sonuc__["a" /* GarantiSonucComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_hizmet_detay_hizmet_detay__["a" /* HizmetDetayComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_detay_piy_search_detay_piy_search__["a" /* DetayPiySearchComponent */],
                __WEBPACK_IMPORTED_MODULE_64__pages_anasayfa_anasayfa__["a" /* Anasayfa */],
                __WEBPACK_IMPORTED_MODULE_66__components_mesaj_detail_mesaj_detail__["a" /* MesajDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_69__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */],
                __WEBPACK_IMPORTED_MODULE_71__components_update_urun_ana_grup_update_urun_ana_grup__["a" /* UpdateUrunAnaGrupComponent */],
                __WEBPACK_IMPORTED_MODULE_72__components_urun_iscilik_search_urun_iscilik_search__["a" /* UrunIscilikSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_79__components_malzeme_search_malzeme_search__["a" /* MalzemeSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_87__components_anket_anket__["a" /* AnketComponent */],
                __WEBPACK_IMPORTED_MODULE_88__components_spinner_spinner__["a" /* SpinnerComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_63__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_92__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                //{ provide: SQLite, useClass: SQLiteMock },
                __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_token_token__["a" /* TokenProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_urun_urun__["a" /* UrunProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_urun_ana_grp_urun_ana_grp__["a" /* UrunAnaGrpProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_urun_iscilik_urun_iscilik__["a" /* UrunIscilikProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_urun_malzeme_urun_malzeme__["a" /* UrunMalzemeProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_islem_ariza_iscilik_islem_ariza_iscilik__["a" /* IslemArizaIscilikProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_fiyat_fiyat__["a" /* FiyatProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_hizmet_hizmet__["a" /* HizmetProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
                __WEBPACK_IMPORTED_MODULE_28__providers_base_dao_base_dao__["a" /* BaseDao */],
                __WEBPACK_IMPORTED_MODULE_29__providers_fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
                __WEBPACK_IMPORTED_MODULE_30__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
                __WEBPACK_IMPORTED_MODULE_31__providers_versiyon_versiyon__["a" /* VersiyonProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_versiyon_versiyon__["a" /* VersiyonProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_mesajlar_mesajlar__["a" /* MesajlarProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */],
                __WEBPACK_IMPORTED_MODULE_36__providers_urun_dao_urun_dao__["a" /* UrunDao */],
                __WEBPACK_IMPORTED_MODULE_37__providers_urun_malzeme_dao_urun_malzeme_dao__["a" /* UrunMalzemeDao */],
                __WEBPACK_IMPORTED_MODULE_38__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */],
                __WEBPACK_IMPORTED_MODULE_39__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_41__providers_urun_iscilik_dao_urun_iscilik_dao__["a" /* UrunIscilikDao */],
                __WEBPACK_IMPORTED_MODULE_42__providers_mesajlar_dao_mesajlar_dao__["a" /* MesajlarDao */],
                __WEBPACK_IMPORTED_MODULE_45__providers_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_adres_adres__["a" /* AdresProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_adres_dao_adres_dao__["a" /* AdresDao */],
                __WEBPACK_IMPORTED_MODULE_56__providers_logger_logger__["a" /* LoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_61__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_62__providers_user_dao_user_dao__["a" /* UserDao */],
                __WEBPACK_IMPORTED_MODULE_67__providers_header_header__["a" /* HeaderProvider */],
                __WEBPACK_IMPORTED_MODULE_68__providers_printer_service_printer_service__["a" /* PrinterService */],
                __WEBPACK_IMPORTED_MODULE_70__providers_seri_no_sorgu_seri_no_sorgu__["a" /* SeriNoSorguProvider */],
                __WEBPACK_IMPORTED_MODULE_73__providers_tasks_tasks__["a" /* TasksProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_versiyon_versiyon__["a" /* VersiyonProvider */],
                __WEBPACK_IMPORTED_MODULE_74__providers_theme_theme__["a" /* ThemeProvider */],
                __WEBPACK_IMPORTED_MODULE_75__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_76__providers_deeplink_printer_deeplink_printer__["a" /* DeeplinkPrinterProvider */],
                __WEBPACK_IMPORTED_MODULE_80__providers_brans_brans__["a" /* BransProvider */],
                __WEBPACK_IMPORTED_MODULE_81__providers_brans_dao_brans_dao__["a" /* BransDao */],
                __WEBPACK_IMPORTED_MODULE_82__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_83__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_84__providers_util_plugin_util_plugin__["a" /* UtilPlugin */],
                __WEBPACK_IMPORTED_MODULE_85__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_86__providers_anket_service_anket_service__["a" /* AnketService */],
                __WEBPACK_IMPORTED_MODULE_89__providers_table_total_elements_table_total_elements__["a" /* TableTotalElementsProvider */],
                __WEBPACK_IMPORTED_MODULE_94__providers_base_base__["a" /* BaseProvider */],
                __WEBPACK_IMPORTED_MODULE_96__providers_cache_cache__["a" /* CacheProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/**
 * @author malisahin
 * @date 2018-04-08
 */
var Constants = (function () {
    function Constants() {
    }
    Constants.ORG_KODS = {
        ECA: "ECA",
        BAY: "BAY",
        SOS: "SOS",
        DAI: "DAI"
    };
    Constants.CACHE_KEYS = {
        LOG: "LOG",
        INFO: "INFO",
        ERROR: "ERROR",
        WARN: "WARN",
        SUCCESS: "SUCCESS",
        DIR: "DIR"
    };
    Constants.COUNTS = {
        CAGRILAR: "CAGRILAR_COUNT",
        GUNCELLEME: "GUNCELLEME_COUNT",
        UYARILAR: "UYARILAR_COUNT",
        DUYURULAR: "DUYURULAR_COUNT"
    };
    Constants.REMEMBER_ME = "REMEMBER_ME";
    Constants.CLICKED_REMEMBER_ME = "CLICKED_REMEMBER_ME";
    Constants.INDIRILEN_VERI = "INDIRILEN_VERI";
    Constants.USER_INFO = "USER_INFO";
    Constants.API_PAGE_SIZE = 10000;
    Constants.MESSAGE_DURATION = "MESSAGE_DURATION";
    Constants.DEFAULT_MESSAGE_DURATION = "3";
    Constants.NERDEN = {
        INIT: "INIT",
        HTML: "HTML"
    };
    Constants.CALLED_FROM = {
        TASKS: "TASKS",
        BILDIRIMLER_PAGE: "BILDIRIMLER_PAGE"
    };
    Constants.SYNC_TIME = "SYNC_TIME";
    Constants.SYNC = {
        TIME: "SYNC_TIME",
        MOMENT: "SYNC_MOMENT"
    };
    Constants.LENGTHS = {
        HIZMET_LIST: "HIZMET_LIST_LENGTH"
    };
    Constants.ORDER_BY = {
        RANDEVU_TAR_ASCENDES: " randevuTarihi ASC ",
        RANDEVU_TAR_DESCENDES: " randevuTarihi DESC "
    };
    Constants.SELECTED_THEME = "SELECTED_THEME";
    Constants.DATE_FORMAT = "yyyy-MM-dd hh:mm:ss";
    Constants.ACCESS_TOKEN = "ACCESS_TOKEN";
    Constants.IS_ONLINE = "IS_ONLINE";
    Constants.LOGGED_IN = "LOGGED_IN";
    Constants.NETWORK = {
        ONLINE: "ONLINE",
        OFFLINE: "OFFLINE",
        NONE: "NONE"
    };
    Constants.STATUS = {
        SUCCESS: "SUCCESS",
        ERROR: "ERROR"
    };
    Constants.DETAY_TIPI = {
        MALZEME: "MLZ",
        ISCILIK: "ISC",
        YOL: "KM",
        DIGER: "DGR"
    };
    Constants.URUN_ANA_GRUP_TYPE = {
        ANA_GRUP_LISTE: "ANA_GRUP_LISTE",
        BASVURU_LISTE: "BASVURU_LISTE",
        COZUM_LISTE: "COZUM_LISTE"
    };
    Constants.TABLE_NAME = {
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
    Constants.SEARCH_TYPE = { LIKE: "LIKE", EXACT: "EXACT" };
    Constants.DATA_TYPE = {
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
    Constants.GELEN_VERI = {
        URUN: "GELEN_URUN",
        URUN_ANA_GRUP: "GELEN_URUN_ANA_GRUP",
        URUN_ISCILIK: "GELEN_URUN_ISCILIK",
        URUN_MALZEME: "GELEN_URUN_MALZEME",
        ISLEM_ARIZA_ISCILIK: "GELEN_ISLEM_ARIZA_ISCILIK",
        MALZEME_FIYAT: "GELEN_MALZEME_FIYAT",
        ISCILIK_FIYAT: "GELEN_ISCILIK_FIYAT",
        SEHIR_TNM: "GELEN_SEHIR_TNM",
        ILCE_TNM: "GELEN_ILCE_TNM",
        MAHALLE_TNM: "GELEN_MAHALLE_TNM"
    };
    Constants.VERSIYON = {
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
    Constants.TABLE_TOTAL_ELEMENTS = {
        ALL_DATA: "TABLE_TOTAL_ELEMENTS_DATA",
        URUN: "serMamTnm",
        URUN_ANA_GRUP: "serMamAnaGrpTnm",
        URUN_ISCILIK: "serMamIscTnm",
        URUN_MALZEME: "serMamMlzTnm",
        ISLEM_ARIZA_ISCILIK: "serIscIslArzGrpTnm",
        MALZEME_FIYAT: "mlzFiyat",
        ISCILIK_FIYAT: "iscFiyat",
        SEHIR_TNM: "serSehirTnm",
        ILCE_TNM: "serIlceTnm",
        MAHALLE_TNM: "serMahalleTnm",
        SYNC_DAY: "SYNC_TABLES_TOTAL_ELEMENTS"
    };
    Constants.COLORS = {
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
    Constants.ICONS = {
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
    Constants.TABLE_SERVER_EQUIVALENT = {
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
    return Constants;
}());

//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 291,
	"./af.js": 291,
	"./ar": 292,
	"./ar-dz": 293,
	"./ar-dz.js": 293,
	"./ar-kw": 294,
	"./ar-kw.js": 294,
	"./ar-ly": 295,
	"./ar-ly.js": 295,
	"./ar-ma": 296,
	"./ar-ma.js": 296,
	"./ar-sa": 297,
	"./ar-sa.js": 297,
	"./ar-tn": 298,
	"./ar-tn.js": 298,
	"./ar.js": 292,
	"./az": 299,
	"./az.js": 299,
	"./be": 300,
	"./be.js": 300,
	"./bg": 301,
	"./bg.js": 301,
	"./bm": 302,
	"./bm.js": 302,
	"./bn": 303,
	"./bn.js": 303,
	"./bo": 304,
	"./bo.js": 304,
	"./br": 305,
	"./br.js": 305,
	"./bs": 306,
	"./bs.js": 306,
	"./ca": 307,
	"./ca.js": 307,
	"./cs": 308,
	"./cs.js": 308,
	"./cv": 309,
	"./cv.js": 309,
	"./cy": 310,
	"./cy.js": 310,
	"./da": 311,
	"./da.js": 311,
	"./de": 312,
	"./de-at": 313,
	"./de-at.js": 313,
	"./de-ch": 314,
	"./de-ch.js": 314,
	"./de.js": 312,
	"./dv": 315,
	"./dv.js": 315,
	"./el": 316,
	"./el.js": 316,
	"./en-au": 317,
	"./en-au.js": 317,
	"./en-ca": 318,
	"./en-ca.js": 318,
	"./en-gb": 319,
	"./en-gb.js": 319,
	"./en-ie": 320,
	"./en-ie.js": 320,
	"./en-il": 321,
	"./en-il.js": 321,
	"./en-nz": 322,
	"./en-nz.js": 322,
	"./eo": 323,
	"./eo.js": 323,
	"./es": 324,
	"./es-do": 325,
	"./es-do.js": 325,
	"./es-us": 326,
	"./es-us.js": 326,
	"./es.js": 324,
	"./et": 327,
	"./et.js": 327,
	"./eu": 328,
	"./eu.js": 328,
	"./fa": 329,
	"./fa.js": 329,
	"./fi": 330,
	"./fi.js": 330,
	"./fo": 331,
	"./fo.js": 331,
	"./fr": 332,
	"./fr-ca": 333,
	"./fr-ca.js": 333,
	"./fr-ch": 334,
	"./fr-ch.js": 334,
	"./fr.js": 332,
	"./fy": 335,
	"./fy.js": 335,
	"./gd": 336,
	"./gd.js": 336,
	"./gl": 337,
	"./gl.js": 337,
	"./gom-latn": 338,
	"./gom-latn.js": 338,
	"./gu": 339,
	"./gu.js": 339,
	"./he": 340,
	"./he.js": 340,
	"./hi": 341,
	"./hi.js": 341,
	"./hr": 342,
	"./hr.js": 342,
	"./hu": 343,
	"./hu.js": 343,
	"./hy-am": 344,
	"./hy-am.js": 344,
	"./id": 345,
	"./id.js": 345,
	"./is": 346,
	"./is.js": 346,
	"./it": 347,
	"./it.js": 347,
	"./ja": 348,
	"./ja.js": 348,
	"./jv": 349,
	"./jv.js": 349,
	"./ka": 350,
	"./ka.js": 350,
	"./kk": 351,
	"./kk.js": 351,
	"./km": 352,
	"./km.js": 352,
	"./kn": 353,
	"./kn.js": 353,
	"./ko": 354,
	"./ko.js": 354,
	"./ky": 355,
	"./ky.js": 355,
	"./lb": 356,
	"./lb.js": 356,
	"./lo": 357,
	"./lo.js": 357,
	"./lt": 358,
	"./lt.js": 358,
	"./lv": 359,
	"./lv.js": 359,
	"./me": 360,
	"./me.js": 360,
	"./mi": 361,
	"./mi.js": 361,
	"./mk": 362,
	"./mk.js": 362,
	"./ml": 363,
	"./ml.js": 363,
	"./mn": 364,
	"./mn.js": 364,
	"./mr": 365,
	"./mr.js": 365,
	"./ms": 366,
	"./ms-my": 367,
	"./ms-my.js": 367,
	"./ms.js": 366,
	"./mt": 368,
	"./mt.js": 368,
	"./my": 369,
	"./my.js": 369,
	"./nb": 370,
	"./nb.js": 370,
	"./ne": 371,
	"./ne.js": 371,
	"./nl": 372,
	"./nl-be": 373,
	"./nl-be.js": 373,
	"./nl.js": 372,
	"./nn": 374,
	"./nn.js": 374,
	"./pa-in": 375,
	"./pa-in.js": 375,
	"./pl": 376,
	"./pl.js": 376,
	"./pt": 377,
	"./pt-br": 378,
	"./pt-br.js": 378,
	"./pt.js": 377,
	"./ro": 379,
	"./ro.js": 379,
	"./ru": 380,
	"./ru.js": 380,
	"./sd": 381,
	"./sd.js": 381,
	"./se": 382,
	"./se.js": 382,
	"./si": 383,
	"./si.js": 383,
	"./sk": 384,
	"./sk.js": 384,
	"./sl": 385,
	"./sl.js": 385,
	"./sq": 386,
	"./sq.js": 386,
	"./sr": 387,
	"./sr-cyrl": 388,
	"./sr-cyrl.js": 388,
	"./sr.js": 387,
	"./ss": 389,
	"./ss.js": 389,
	"./sv": 390,
	"./sv.js": 390,
	"./sw": 391,
	"./sw.js": 391,
	"./ta": 392,
	"./ta.js": 392,
	"./te": 393,
	"./te.js": 393,
	"./tet": 394,
	"./tet.js": 394,
	"./tg": 395,
	"./tg.js": 395,
	"./th": 396,
	"./th.js": 396,
	"./tl-ph": 397,
	"./tl-ph.js": 397,
	"./tlh": 398,
	"./tlh.js": 398,
	"./tr": 399,
	"./tr.js": 399,
	"./tzl": 400,
	"./tzl.js": 400,
	"./tzm": 401,
	"./tzm-latn": 402,
	"./tzm-latn.js": 402,
	"./tzm.js": 401,
	"./ug-cn": 403,
	"./ug-cn.js": 403,
	"./uk": 404,
	"./uk.js": 404,
	"./ur": 405,
	"./ur.js": 405,
	"./uz": 406,
	"./uz-latn": 407,
	"./uz-latn.js": 407,
	"./uz.js": 406,
	"./vi": 408,
	"./vi.js": 408,
	"./x-pseudo": 409,
	"./x-pseudo.js": 409,
	"./yo": 410,
	"./yo.js": 410,
	"./zh-cn": 411,
	"./zh-cn.js": 411,
	"./zh-hk": 412,
	"./zh-hk.js": 412,
	"./zh-tw": 413,
	"./zh-tw.js": 413
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 610;

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseEntity; });
var BaseEntity = (function () {
    function BaseEntity() {
    }
    BaseEntity.prototype.isEmpty = function (item) {
        if (typeof item == "number")
            item = String(item);
        return typeof item == "undefined" || item == null || item == "";
    };
    BaseEntity.prototype.emptyIfNull = function (item) {
        if (this.isEmpty(item))
            item = "";
        return item;
    };
    BaseEntity.prototype.isNotEmpty = function (item) {
        if (typeof item == "number")
            item = String(item);
        return !(typeof item == "undefined" || item == null || item == "");
    };
    return BaseEntity;
}());

//# sourceMappingURL=BaseEntity.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrupDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UrunAnaGrupDao = (function () {
    function UrunAnaGrupDao(dbProvider, util, logger, baseDao) {
        this.dbProvider = dbProvider;
        this.util = util;
        this.logger = logger;
        this.baseDao = baseDao;
        this.logger.log("Urun Ana Grup Constractor");
    }
    UrunAnaGrupDao.prototype.insertOne = function (item) {
        var query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden) VALUES (?,?,?,?,?,?)';
        var params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.neden];
        return this.baseDao.execute(query, params);
    };
    UrunAnaGrupDao.prototype.getPage = function (item, searchType, first, pageSize) {
        var query = this.prepareQuery(item, searchType);
        return this.baseDao.getList(query, "mamAnaGrp", item, searchType, first, pageSize, true);
    };
    UrunAnaGrupDao.prototype.getList = function (item, searchType) {
        var query = this.prepareQuery(item, searchType);
        return this.baseDao.execute(query, []);
    };
    UrunAnaGrupDao.prototype.insertList = function (list) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var insertedItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        insertedItems = 0;
                        return [4 /*yield*/, this.deleteAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.dbProvider.transaction().then(function (db) {
                                    db.transaction(function (tx) {
                                        var query = 'INSERT OR REPLACE INTO OFF_MAM_ANAGRP_TNM (tip,mamAnaGrp,ad,durum,kod, neden) VALUES (?,?,?,?,?,?)';
                                        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                                            var item = list_1[_i];
                                            var params = [item.tip, item.mamAnaGrp, item.ad, item.durum, item.kod, item.neden];
                                            tx.executeSql(query, params, function (tx, res) {
                                                insertedItems += 1;
                                                if (list.length == insertedItems) {
                                                    resolve(res);
                                                }
                                            }, function (err, mes) {
                                                console.error("Error" + mes.message + " Code: " + mes.code);
                                                reject(err);
                                            });
                                        }
                                    });
                                });
                            })];
                }
            });
        });
    };
    UrunAnaGrupDao.prototype.prepareQuery = function (item, searchType) {
        var query = "SELECT * FROM OFF_MAM_ANAGRP_TNM WHERE tip = '" + item.tip + "'";
        var whereQuery = [];
        if (this.util.isNotEmpty(item.ad)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'ad', item.ad));
        }
        if (this.util.isNotEmpty(item.neden)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'neden', item.neden));
        }
        if (this.util.isNotEmpty(item.mamAnaGrp)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'mamAnaGrp', item.mamAnaGrp));
        }
        if (this.util.isNotEmpty(item.kod)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'kod', item.kod));
        }
        if (this.util.isNotEmpty(item.durum)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, 'durum', item.durum));
        }
        console.warn("Ürün Ana Grup Sorgu " + query);
        return this.util.prepareQuery(query, whereQuery, searchType);
    };
    UrunAnaGrupDao.prototype.deleteAll = function () {
        var query = "DELETE FROM OFF_MAM_ANAGRP_TNM ";
        return this.baseDao.execute(query, []);
    };
    UrunAnaGrupDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__["a" /* BaseDao */]])
    ], UrunAnaGrupDao);
    return UrunAnaGrupDao;
}());

//# sourceMappingURL=urun-ana-grup-dao.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */






var HizmetDao = (function () {
    function HizmetDao(baseDao, logger, util) {
        this.baseDao = baseDao;
        this.logger = logger;
        this.util = util;
        this.INSERT_QUERY = "INSERT INTO OFF_HIZ_MST(seqNo, randevuTarihi, hizmetTipiAdi, mamAnaGrpAdi, basvuruNedeni, durum, adi, soyadi, firmaUnvani, evTel, isTel, gsmNo, data) " +
            " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ";
        this.UPDATE_QUERY = "UPDATE OFF_HIZ_MST SET seqNo =?, randevuTarihi=?, hizmetTipiAdi=?, mamAnaGrpAdi=?, basvuruNedeni=?, durum=?, adi=?, soyadi=?, firmaUnvani=?" +
            ", evTel =?, isTel=?, gsmNo=?, data=? WHERE seqNo=?  ";
        this.DELETE_QUERY = "DELETE FROM OFF_HIZ_MST";
        this.insertedRow = 0;
    }
    // Listede her bir item kayit edilir ve liste tekrar cagrilir.Cagrilmadan once kayit edilen item listeden silinir.
    HizmetDao.prototype.insertList = function (list) {
        var array = [];
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            array.push(this.insertOne(item));
        }
        return Promise.all(array).then(function (res) {
            console.log("Çağrı Listesi Kayıt Edildi");
            return res;
        });
    };
    HizmetDao.prototype.insertOne = function (hizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var hizmetObject, isHizmetExist, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hizmet = this.filterToSaveHizmet(hizmet);
                        hizmetObject = JSON.stringify(hizmet);
                        this.logger.warn("Randevu Tarihi => " + hizmet.randevuTarihi);
                        return [4 /*yield*/, this.isHizmetExist(hizmet.seqNo)];
                    case 1:
                        isHizmetExist = _a.sent();
                        if (!isHizmetExist) {
                            params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
                                hizmet.durum, hizmet.adi, hizmet.soyadi, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmetObject];
                            return [2 /*return*/, this.baseDao.execute(this.INSERT_QUERY, params)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetDao.prototype.updateHizmet = function (hizmet) {
        hizmet = this.filterToSaveHizmet(hizmet);
        var hizmetObject = JSON.stringify(hizmet);
        var params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
            hizmet.durum, hizmet.adi, hizmet.soyadi, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmetObject, hizmet.seqNo];
        return this.baseDao.execute(this.UPDATE_QUERY, params);
    };
    HizmetDao.prototype.filterToSaveHizmet = function (hizmet) {
        /*if (this.util.isNotEmpty(hizmet.randevuTarihi))
          hizmet.randevuTarihi = this.util.newDateTime(hizmet.randevuTarihi);
    
        if (this.util.isNotEmpty(hizmet.cagriTarihi))
          hizmet.cagriTarihi = this.util.newDateTime(hizmet.cagriTarihi);
    */
        return hizmet;
    };
    HizmetDao.prototype.find = function (item, orderBy, pageable) {
        var query = this.prepareSelectQuery(item);
        this.logger.info("Query ==> " + query + "/ ORDER BY ==> " + orderBy);
        return this.search(query, orderBy, pageable);
    };
    HizmetDao.prototype.findOne = function (seqNo) {
        var query = "SELECT * FROM OFF_HIZ_MST WHERE 1=1 AND seqNo='" + seqNo + "'";
        return this.baseDao.execute(query, []);
    };
    HizmetDao.prototype.search = function (query, orderBy, pageable) {
        return this.baseDao.getList(query, orderBy, "", "EXACT", pageable.first, pageable.pageSize, true);
    };
    HizmetDao.prototype.findWithQuery = function (query) {
        return this.baseDao.execute(query, []);
    };
    HizmetDao.prototype.isHizmetExist = function (seqNo) {
        return __awaiter(this, void 0, void 0, function () {
            var hizmet, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
                        hizmet.seqNo = seqNo;
                        return [4 /*yield*/, this.baseDao.execute(this.prepareSelectQuery(hizmet), [])];
                    case 1:
                        res = _a.sent();
                        this.logger.dir(res);
                        return [2 /*return*/, res.rows.length > 0];
                }
            });
        });
    };
    HizmetDao.prototype.prepareSelectQuery = function (item) {
        var query = "SELECT * FROM OFF_HIZ_MST WHERE 1=1 ";
        if (item.seqNo != null && item.seqNo != "")
            query += " AND seqNo= '" + item.seqNo + "' ";
        // TODO: Randevu Tarihi between date yapilacak sekilde duzenlenmeli
        if (this.util.isNotEmpty(item.randevuTarihi))
            query += " AND randevuTarihi='" + item.randevuTarihi + "'";
        if (item.hizmetTipiAdi != null && item.hizmetTipiAdi != "")
            query += " AND hizmetTipiAdi='" + item.hizmetTipiAdi + "'";
        if (item.mamAnaGrpAdi != null && item.mamAnaGrpAdi != "")
            query += " AND mamAnaGrpAdi='" + item.mamAnaGrpAdi + "'";
        if (item.basvuruNedeni != null && item.basvuruNedeni != "")
            query += " AND basvuruNedeni='" + item.basvuruNedeni + "'";
        if (item.durum != null && item.durum != "")
            query += " AND durum='" + item.durum + "'";
        if (item.adi != null && item.adi != "")
            query += " AND adi='" + item.adi + "'";
        if (item.soyadi != null && item.soyadi != "")
            query += " AND soyadi='" + item.soyadi + "'";
        if (item.firmaUnvani != null && item.firmaUnvani != "")
            query += " AND firmaUnvani='" + item.firmaUnvani + "'";
        if (item.evTel != null && item.evTel != "")
            query += " AND evTel='" + item.evTel + "'";
        if (item.isTel != null && item.isTel != "")
            query += " AND isTel='" + item.isTel + "'";
        if (item.gsmNo != null && item.gsmNo != "")
            query += " AND gsmNo='" + item.gsmNo + "'";
        return query;
    };
    HizmetDao.prototype.deleteList = function () {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].LENGTHS.HIZMET_LIST, String(0));
        return this.baseDao.execute(this.DELETE_QUERY, []);
    };
    HizmetDao.prototype.deleteHizmet = function (seqNo) {
        var query = this.DELETE_QUERY + " WHERE seqNo='" + seqNo + "'";
        return this.baseDao.execute(query, []);
    };
    HizmetDao.prototype.deleteHizmetList = function (list) {
        var seqNoList = [];
        list.forEach(function (item) { return seqNoList.push("'" + String(item) + "'"); });
        var seqNoListStr = seqNoList.join(",");
        var query = this.DELETE_QUERY + " WHERE seqNo in (" + seqNoListStr + ")";
        return this.baseDao.execute(query, []);
    };
    HizmetDao.prototype.findAcikHizmetSayisi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM OFF_HIZ_MST where durum not in('KAPALI', 'IPTAL')";
                        return [4 /*yield*/, this.baseDao.execute(query, [])];
                    case 1:
                        result = _a.sent();
                        count = result.rows.length;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(count);
                            })];
                }
            });
        });
    };
    HizmetDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__["a" /* BaseDao */], __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */], __WEBPACK_IMPORTED_MODULE_5__util_util__["a" /* UtilProvider */]])
    ], HizmetDao);
    return HizmetDao;
}());

//# sourceMappingURL=hizmet-dao.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagrilarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagri_detay_cagri_detay__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cagri_arama_modal_cagri_arama_modal__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_hizmet__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_util_plugin_util_plugin__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_theme_theme__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_logger_logger__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
















var CagrilarPage = (function () {
    function CagrilarPage(navCtrl, navParams, modalController, cagriProvider, hizmetService, plugins, util, themeProvider, logger) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.cagriProvider = cagriProvider;
        this.hizmetService = hizmetService;
        this.plugins = plugins;
        this.util = util;
        this.themeProvider = themeProvider;
        this.logger = logger;
        this.cagrilar = [];
        this.searchQuery = "";
        this.searchType = "BEGINNING";
        this.searchParams = [];
        this.orderBy = __WEBPACK_IMPORTED_MODULE_11__entities_Constants__["a" /* Constants */].ORDER_BY.RANDEVU_TAR_DESCENDES;
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.pageable = new __WEBPACK_IMPORTED_MODULE_9__entities_Pageable__["a" /* Pageable */]();
        this.getListLength();
    }
    CagrilarPage.prototype.ionViewDidLoad = function () {
        this.title = "Çağrılar";
        this.fetchList(this.searchType);
    };
    CagrilarPage.prototype.getListLength = function () {
        var length = Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_11__entities_Constants__["a" /* Constants */].LENGTHS.HIZMET_LIST));
        if (this.util.isEmpty(length))
            length = 0;
        this.pageable.listLength = length;
    };
    CagrilarPage.prototype.cagriDetayinaGit = function (event, seqNo) {
        event.stopPropagation();
        var params = { seqNo: seqNo };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagri_detay_cagri_detay__["a" /* CagriDetayPage */], params);
    };
    CagrilarPage.prototype.cagriSorgula = function () {
        var _this = this;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__cagri_arama_modal_cagri_arama_modal__["a" /* CagriAramaModalPage */], {}, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data) && _this.util.isNotEmpty(data.orderBy)) {
                _this.orderBy = data.orderBy;
                _this.searchQuery = data.query;
                _this.searchParams = data.params;
                _this.fetchList(_this.searchType);
            }
        });
        aramaModal.present();
    };
    CagrilarPage.prototype.fetchList = function (tip) {
        return __awaiter(this, void 0, void 0, function () {
            var list, hizmet, i, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cagrilar = [];
                        this.pageable.tip = tip;
                        this.pageable = this.pageable.compute();
                        if (!(this.util.isNotEmpty(this.searchQuery) &&
                            this.util.isNotEmpty(this.orderBy))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.hizmetService.fetchHizmetWithQuery(this.searchQuery, this.orderBy, this.pageable)];
                    case 1:
                        list = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        hizmet = new __WEBPACK_IMPORTED_MODULE_7__entities_hizmet_hizmet__["a" /* Hizmet */]();
                        hizmet.durum = "ACIK";
                        return [4 /*yield*/, this.hizmetService.fetchHizmetWithPage(hizmet, __WEBPACK_IMPORTED_MODULE_11__entities_Constants__["a" /* Constants */].ORDER_BY.RANDEVU_TAR_DESCENDES, this.pageable)];
                    case 3:
                        list = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (this.util.isNotEmpty(list.res.rows)) {
                            this.pageable.listLength = list.listLength;
                            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_11__entities_Constants__["a" /* Constants */].COUNTS.CAGRILAR, String(list.listLength));
                            for (i = 0; i < list.res.rows.length; i++) {
                                data = JSON.parse(list.res.rows.item(i).data);
                                this.cagrilar.push(data);
                            }
                            this.formatCagriList();
                        }
                        this.searchQuery = "";
                        return [2 /*return*/];
                }
            });
        });
    };
    CagrilarPage.prototype.cagriGuncelle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cagriProvider.downloadCagriList().then(function (res) {
                            if (_this.util.isNotEmpty(res)) {
                                _this.fetchList(_this.searchType);
                                _this.util.success("Çağrılar Güncellendi.");
                            }
                        })];
                    case 1:
                        _a.sent();
                        this.util.loaderEnd();
                        this.header.updateHeader();
                        return [2 /*return*/];
                }
            });
        });
    };
    CagrilarPage.prototype.formatCagriList = function () {
        var _this = this;
        this.cagrilar.forEach(function (cagri) {
            cagri = _this.formatAdres(cagri);
        });
    };
    CagrilarPage.prototype.formatAdres = function (cagri) {
        cagri.adres = this.cagriProvider.getAdres(cagri);
        cagri.ilIlce = this.cagriProvider.getIlIlce(cagri);
        return cagri;
    };
    CagrilarPage.prototype.callPhoneNumber = function (event, tel) {
        event.stopPropagation();
        this.plugins.callPhoneNumber(tel);
    };
    CagrilarPage.prototype.formatDate = function (date) {
        this.logger.info("Çağrılar sayfası => " + date);
        return __WEBPACK_IMPORTED_MODULE_14_moment__(date, "YYYY-MM-DD HH:mm:ss").toDate();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("header"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__components_header_header__["a" /* HeaderComponent */])
    ], CagrilarPage.prototype, "header", void 0);
    CagrilarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-cagrilar",template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\cagrilar\cagrilar.html"*/'<ion-header class="header-content">\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content cagri-content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-title class="page-title">{{title}}</ion-title>\n\n\n\n  <ion-row>\n\n    <ion-col col-6 col-6 col-sm>\n\n      <button ion-button id="btnCagriSorgu" round full cgrArama (click)="cagriSorgula();">\n\n        <span class="icon-right">\n\n          <i class="fas fa-search"></i>\n\n        </span>Sorgula\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-6 col-6 col-sm>\n\n      <button ion-button id="btnCagriGuncelle" round full cgrGuncelle (click)="cagriGuncelle();">\n\n        <span class="icon-right">\n\n          <i class="fas fa-sync-alt"></i>\n\n        </span> Güncelle\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="util.isNotEmpty(pageable.pageNo)  && pageable.pageNo > 0">\n\n    <ion-col col-9 col-md-8></ion-col>\n\n\n\n    <ion-col col-3 col-md-4>\n\n      <ion-select [(ngModel)]="pageable.pageNo" (ionChange)="fetchList(\'TO_PAGE\')" interface="popover">\n\n\n\n        <ion-option *ngFor="let page of pageable.pageList" [value]="page">\n\n          {{page}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="this.searchParams != \'\'">\n\n    <ion-chip *ngFor="let sorgu of searchParams">\n\n      <label>{{sorgu}}</label>\n\n    </ion-chip>\n\n  </ion-row>\n\n\n\n  <ion-card *ngFor="let cagri of cagrilar" (click)="cagriDetayinaGit($event, cagri.seqNo)" class="card-box1">\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-1>\n\n        <i class="far fa-clock"></i>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <label>\n\n          {{cagri.randevuTarihi | FormatDate}}\n\n        </label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-1>\n\n        <i class="fas fa-user"></i>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <label>\n\n          <strong>{{cagri.adi }} {{cagri.soyadi}} </strong>({{cagri.seqNo}}) - ({{cagri.crmNo}})</label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-1>\n\n        <i class="fas fa-cog"></i>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <label>{{cagri.mamAnaGrpAdi}} | {{cagri.hizmetTipiAdi}} | {{cagri.basvuruNedenAdi}}</label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row class="row-border">\n\n      <ion-col col-1>\n\n        <i class="fas fa-phone"></i>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <span class="text-color" *ngIf="cagri.gsmNo  != null && cagri.gsmNo != \'\' ">\n\n          <a (click)="callPhoneNumber($event,cagri.gsmNo)"> {{cagri.gsmNo}} /</a>\n\n        </span>\n\n\n\n        <span class="text-color" *ngIf="cagri.evTel  != null && cagri.evTel != \'\' ">\n\n          <a (click)="callPhoneNumber($event,cagri.evTel)">{{cagri.evTel}} /</a>\n\n        </span>\n\n\n\n        <span class="text-color" *ngIf="cagri.isTel  != null && cagri.isTel != \'\' ">\n\n          <a (click)="callPhoneNumber($event,cagri.isTel)">{{cagri.isTel}}</a>\n\n        </span>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-1>\n\n        <i class="fas fa-location-arrow adres-box"></i>\n\n      </ion-col>\n\n      <ion-col col-11>\n\n        <span class="adres-box" *ngIf="cagri.semt != null && cagri.semt != \'\'">Semt: {{cagri.semt}}</span>\n\n        <span class="adres-box"\n\n              *ngIf="cagri.mahalleAdi != null && cagri.mahalleAdi !=\'\'">Mahalle: {{cagri.mahalleAdi}}</span>\n\n        <span class="adres-box" *ngIf="cagri.cadde != null && cagri.cadde !=\'\'">Cadde: {{cagri.cadde}} </span>\n\n        <span class="adres-box" *ngIf="cagri.sokak != null && cagri.sokak !=\'\'">Sokak: {{cagri.sokak}}</span>\n\n        <span class="adres-box" *ngIf="cagri.aparman!= null && cagri.aparman !=\'\'">Apartman: {{cagri.aparman}}</span>\n\n        <span class="adres-box" *ngIf="cagri.apartmanNo!= null && cagri.apartmanNo !=\'\'">{{cagri.apartmanNo}}</span>\n\n        <span class="adres-box" *ngIf="cagri.blok != null && cagri.blok!=\'\'">Blok: {{cagri.blok}}</span>\n\n        <span class="adres-box" *ngIf="cagri.daireNo != null && cagri.daireNo!=\'\'">Daire No: {{cagri.daireNo}}</span>\n\n        <span class="adres-box"\n\n              *ngIf="cagri.ilceAdi != null && cagri.ilceAdi!=\'\'">{{cagri.ilceAdi}} /{{cagri.sehir}}</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-row>\n\n\n\n        <ion-col col-6 col-md-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-left" (click)="fetchList(\'FIRST\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-double-left"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-md-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-left" (click)="fetchList(\'PREVIOUS\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-left"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-row>\n\n        <ion-col col-6 col-md-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-right" (click)="fetchList(\'NEXT\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-right"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-md-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-right" (click)="fetchList(\'LAST\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-double-right"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\cagrilar\cagrilar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_hizmet__["a" /* HizmetProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_util_plugin_util_plugin__["a" /* UtilPlugin */],
            __WEBPACK_IMPORTED_MODULE_8__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_theme_theme__["a" /* ThemeProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_logger_logger__["a" /* LoggerProvider */]])
    ], CagrilarPage);
    return CagrilarPage;
}());

//# sourceMappingURL=cagrilar.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * @author mali.sahin
 * @since 14-08-2018
 */
var BaseProvider = (function () {
    function BaseProvider() {
    }
    BaseProvider.prototype.isEmpty = function (item) {
        item = String(item);
        return typeof item == "undefined" || item == null || item == "";
    };
    BaseProvider.prototype.emptyIfNull = function (item) {
        if (this.isEmpty(item))
            item = "";
        return item;
    };
    BaseProvider.prototype.isNotEmpty = function (item) {
        item = String(item);
        return !(typeof item == "undefined" || item == null || item == "");
    };
    BaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], BaseProvider);
    return BaseProvider;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hizmet_dao_hizmet_dao__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_hizmet_DetayKayit__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__urun_ana_grp_urun_ana_grp__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_Ilce__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__adres_dao_adres_dao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__anket_service_anket_service__ = __webpack_require__(182);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var HizmetProvider = (function () {
    function HizmetProvider(http, api, hizmetDao, token, urunAnaGrpProvider, logger, adresDao, anketService, util) {
        this.http = http;
        this.api = api;
        this.hizmetDao = hizmetDao;
        this.token = token;
        this.urunAnaGrpProvider = urunAnaGrpProvider;
        this.logger = logger;
        this.adresDao = adresDao;
        this.anketService = anketService;
        this.util = util;
    }
    HizmetProvider.prototype.downloadCagriList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var header, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 5];
                        this.util.loaderStart(false);
                        return [4 /*yield*/, this.fetchDataFromApi(header)];
                    case 2:
                        res = _a.sent();
                        if (!this.util.isNotEmpty(res)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.insertComingData(res)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.util.error("Çağrılar yalnızca online durumda güncellenebilir.");
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HizmetProvider.prototype.getMevcutCagriSeqNoList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var seqNoList, query, res, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seqNoList = [];
                        query = " SELECT seqNo FROM OFF_HIZ_MST WHERE durum = 'ACIK' ";
                        return [4 /*yield*/, this.hizmetDao.findWithQuery(query)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmptyRows(res)) {
                            for (i = 0; i < res.rows.length; i++) {
                                seqNoList.push(res.rows.item(i).seqNo);
                            }
                        }
                        return [2 /*return*/, seqNoList];
                }
            });
        });
    };
    HizmetProvider.prototype.updateCagri = function (hizmet, durum) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.setCagriUrl(durum);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (this.util.isOnline()) {
                            return [2 /*return*/, this.http.post(url, hizmet, { headers: header }).toPromise()];
                        }
                        else {
                            this.util.ifOffline();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetProvider.prototype.fetchDataFromApi = function (header) {
        return __awaiter(this, void 0, void 0, function () {
            var url, seqNoList, res_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getCagriListUrl();
                        return [4 /*yield*/, this.getMevcutCagriSeqNoList()];
                    case 1:
                        seqNoList = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.http.post(url, { seqNoListe: seqNoList }, { headers: header })
                                .toPromise()];
                    case 3:
                        res_1 = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res_1);
                            })];
                    case 4:
                        e_1 = _a.sent();
                        this.logger.error("Çağrı indirme hatası ==> ");
                        this.logger.dir(e_1);
                        this.util.error("Çağrıları indirirken bir hata oluştu. Lütfen tekrar deneyiniz.");
                        this.util.loaderEnd();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HizmetProvider.prototype.insertComingData = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var hizmetList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.seperateCagri(res)];
                    case 1:
                        hizmetList = _a.sent();
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_10__entities_Constants__["a" /* Constants */].LENGTHS.HIZMET_LIST, String(hizmetList.length));
                        return [4 /*yield*/, this.hizmetBosAlanlariDoldur(hizmetList)];
                    case 2:
                        hizmetList = _a.sent();
                        return [2 /*return*/, this.hizmetDao.insertList(hizmetList)];
                }
            });
        });
    };
    HizmetProvider.prototype.updateComingData = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var hizmetList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.seperateCagri(res)];
                    case 1:
                        hizmetList = _a.sent();
                        return [4 /*yield*/, hizmetList.forEach(function (item) {
                                _this.hizmetDao.updateHizmet(item);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetProvider.prototype.seperateCagri = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var hizmetList, list, silinmesiGerekenCagrilar, _i, list_1, item, cgr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hizmetList = [];
                        list = [];
                        silinmesiGerekenCagrilar = [];
                        if (!(this.util.isNotEmpty(obj.message) && this.util.isNotEmpty(obj.message.silinmesiGerekenCagrilar))) return [3 /*break*/, 2];
                        silinmesiGerekenCagrilar = obj.message.silinmesiGerekenCagrilar;
                        return [4 /*yield*/, this.silinmesiGerekenCagrilariSil(silinmesiGerekenCagrilar)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.util.isNotEmpty(obj.message) && this.util.isNotEmpty(obj.message.hizmetDtoList)) {
                            list = obj.message.hizmetDtoList;
                            for (_i = 0, list_1 = list; _i < list_1.length; _i++) {
                                item = list_1[_i];
                                cgr = this.fillHizmet(item);
                                hizmetList.push(cgr);
                            }
                        }
                        return [2 /*return*/, hizmetList];
                }
            });
        });
    };
    HizmetProvider.prototype.silinmesiGerekenCagrilariSil = function (silinmesiGerekenCagrilar) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.hizmetDao.deleteHizmetList(silinmesiGerekenCagrilar)];
            });
        });
    };
    HizmetProvider.prototype.fillHizmet = function (obj) {
        /**
         *
         * @type fromServer
         *  @description Hem Sunucudan gelen veri hem de uygulama içerisindeki veri bu fonksiyon ile dolduruluyor.
         *  Sunucu ile Client verisi hazırlanırken ufak bir farklılık mevcut. Bu farklılığı 'fromServer' ile yönetiyoruz.
         */
        var fromServer = false;
        /*  farklılık:
         *    server : detayDtoList : [][]
         *    client : detayDtoList : []
         *
         */
        //DeepClone amaçlı önce String'e sonra da JSON Obje'ye dönüşüm olmuştur.
        //Bu entity içerisinde metod eklenir ise bu dönüşüm ile KAYBOLACAKTIR!!
        var objString = JSON.stringify(obj);
        obj = JSON.parse(objString);
        var item = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        item.aciklama = obj.aciklama;
        item.adi = obj.adi;
        item.anket = this.anketService.fillAnket(obj.anket);
        item.aparman = obj.aparman;
        item.apartmanNo = obj.apartmanNo;
        item.basvuruNedenAdi = obj.basvuruNedenAdi;
        item.basvuruNedeni = obj.basvuruNedeni;
        item.bayiKod = obj.bayiKod;
        item.blok = obj.blok;
        item.cadde = obj.cadde;
        item.cagriTarihi = this.util.newDateTime(obj.cagriTarihi);
        item.cmNo = obj.cmNo;
        item.cmTarihi = this.util.newDateTime(obj.cmTarihi);
        item.cozumKodu = obj.cozumKodu;
        item.daireNo = obj.daireNo;
        if (obj.detayDtoList != null && obj.detayDtoList.length > 0) {
            fromServer = Array.isArray(obj.detayDtoList[0]);
            // Sunucudan matris geldiği için obj.detayDtoList[0] kullanmak gerekti. Uygulama da normal array kullanılıyor.
            if (fromServer)
                item.detayDtoList = this.fillHizmetDetay(obj.detayDtoList[0], obj.seqNo);
            else {
                item.detayDtoList = this.fillHizmetDetay(obj.detayDtoList, obj.seqNo);
            }
        }
        item.durum = obj.durum;
        item.eposta = obj.eposta;
        item.evTel = obj.evTel;
        item.firmaUnvani = obj.firmaUnvani;
        item.garanti = obj.garanti;
        item.gsmNo = obj.gsmNo;
        item.hizmetTipi = obj.hizmetTipi;
        item.hizmetTipiAdi = obj.hizmetTipiAdi;
        item.ikKod = obj.ikKod;
        item.ilceKod = obj.ilceKod;
        item.iletisimIstek = obj.iletisimIstek;
        item.isTel = obj.isTel;
        item.islemBitTarihi = this.util.newDateTime(obj.islemBitTarihi);
        if (obj.islemList != null && obj.islemList.length > 0) {
            fromServer = Array.isArray(obj.islemList[0]);
            item.islemList = this.fillIslemList(fromServer, obj); //fromServer ? obj.islemList[0] : obj.islemList;
        }
        item.islemTarihi = this.util.newDateTime(obj.islemTarihi);
        item.kapatmaKodu = obj.kapatmaKodu;
        item.mahalle = obj.mahalle;
        item.mahalleKodu = obj.mahalleKodu;
        item.mamAdi = obj.mamAdi;
        item.mamAnaGrp = obj.mamAnaGrp;
        item.mamAnaGrpAdi = obj.mamAnaGrpAdi;
        item.mamKod = obj.mamKod;
        item.mamSeriNo = obj.mamSeriNo;
        item.mamSeriNo2 = obj.mamSeriNo2;
        item.merkezNotu = obj.merkezNotu;
        item.mesguliyet = obj.mesguliyet;
        item.musId = obj.musId;
        item.musKod = obj.musKod;
        item.musTip = obj.musTip;
        item.nobet = obj.nobet;
        item.odemeTipi = obj.odemeTipi;
        item.randevuTarihi = this.util.newDateTime(obj.randevuTarihi);
        item.sattar = this.util.newDateTime(obj.sattar);
        item.sehir = obj.sehir;
        item.sehirKod = obj.sehirKod;
        item.semt = obj.semt;
        item.seqNo = obj.seqNo;
        item.serAd = obj.serAdi;
        item.serKod = obj.serKod;
        item.servisNotu = obj.servisNotu;
        item.sokak = obj.sokak;
        item.soyadi = obj.soyadi;
        item.crmNo = obj.crmNo;
        return item;
    };
    HizmetProvider.prototype.fillIslemList = function (fromServer, obj) {
        var _this = this;
        var islemList = fromServer ? obj.islemList[0] : obj.islemList;
        if (this.util.isNotEmpty(islemList)) {
            islemList.forEach(function (item) {
                item.basTar = _this.util.newDateTime(item.basTar);
                item.bitTar = _this.util.newDateTime(item.bitTar);
            });
        }
        return islemList;
    };
    HizmetProvider.prototype.fillHizmetDetay = function (detayList, seqNo) {
        var detayDtoList = [];
        detayList.forEach(function (res) {
            var det = new __WEBPACK_IMPORTED_MODULE_6__entities_hizmet_DetayKayit__["a" /* DetayKayit */]();
            det.seqNo = seqNo;
            det.satirNo = res.satirNo;
            det.islemKod = res.islemKod;
            det.arizaKod = res.arizaKod;
            det.mlzIsc = res.mlzIsc;
            det.mlzIscKod = res.mlzIscKod;
            det.aciklama = res.aciklama;
            det.miktar = Number(res.miktar);
            det.birimFiyat = Number(res.birimFiyat);
            det.kdvOran = 18;
            det.tutar = Number(res.tutar);
            det.olcuBrm = "";
            det.satirHata = "";
            detayDtoList.push(det);
        });
        return detayDtoList;
    };
    HizmetProvider.prototype.hizmetBosAlanlariDoldur = function (hizmetList) {
        return __awaiter(this, void 0, void 0, function () {
            var i, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.util.isNotEmpty(hizmetList)) return [3 /*break*/, 6];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < hizmetList.length)) return [3 /*break*/, 6];
                        item = hizmetList[i];
                        return [4 /*yield*/, this.mamAnaGrpDoldur(item)];
                    case 2:
                        item = _a.sent();
                        return [4 /*yield*/, this.basvuruNedenDoldur(item)];
                    case 3:
                        item = _a.sent();
                        return [4 /*yield*/, this.ilceDoldur(item)];
                    case 4:
                        item = _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, hizmetList];
                }
            });
        });
    };
    HizmetProvider.prototype.mamAnaGrpDoldur = function (hizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = new __WEBPACK_IMPORTED_MODULE_9__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_10__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
                        if (!this.util.isNotEmpty(hizmet.mamAnaGrp)) return [3 /*break*/, 2];
                        filter.mamAnaGrp = hizmet.mamAnaGrp;
                        return [4 /*yield*/, this.urunAnaGrpProvider.findUrunAnaGrp(filter)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.ad)) {
                            hizmet.mamAnaGrpAdi = res.ad;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, hizmet];
                }
            });
        });
    };
    HizmetProvider.prototype.basvuruNedenDoldur = function (hizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = new __WEBPACK_IMPORTED_MODULE_9__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_10__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
                        if (!this.util.isNotEmpty(hizmet.basvuruNedeni)) return [3 /*break*/, 2];
                        filter.mamAnaGrp = hizmet.mamAnaGrp;
                        filter.neden = hizmet.basvuruNedeni;
                        return [4 /*yield*/, this.urunAnaGrpProvider.findUrunAnaGrp(filter)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.ad)) {
                            hizmet.basvuruNedenAdi = res.ad;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, hizmet];
                }
            });
        });
    };
    HizmetProvider.prototype.fillAnket = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    HizmetProvider.prototype.ilceDoldur = function (hizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.util.isNotEmpty(hizmet.sehirKod) && this.util.isNotEmpty(hizmet.ilceKod))) return [3 /*break*/, 2];
                        filter = new __WEBPACK_IMPORTED_MODULE_12__entities_Ilce__["a" /* Ilce */]();
                        filter.sehirKodu = hizmet.sehirKod;
                        filter.ilceKodu = hizmet.ilceKod;
                        return [4 /*yield*/, this.adresDao.getIlce(filter)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmptyRows(res)) {
                            hizmet.ilceAdi = res.rows.item(0).ilceAdi;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, hizmet];
                }
            });
        });
    };
    HizmetProvider.prototype.getAdres = function (item) {
        var adres = "";
        if (this.util.isNotEmpty(item.semt))
            adres += "Semt: " + item.semt + " ";
        if (this.util.isNotEmpty(item.mahalle))
            adres += "Mah: " + item.mahalle + " ";
        if (this.util.isNotEmpty(item.cadde))
            adres += "Cadde: " + item.cadde + " ";
        if (this.util.isNotEmpty(item.sokak))
            adres += "Sokak: " + item.sokak + " ";
        if (this.util.isNotEmpty(item.aparman))
            adres += "Apt: " + item.aparman + " ";
        if (this.util.isNotEmpty(item.apartmanNo))
            adres += " " + item.apartmanNo + " ";
        if (this.util.isNotEmpty(item.daireNo))
            adres += "Daire: " + item.daireNo + " ";
        return adres;
    };
    HizmetProvider.prototype.getIlIlce = function (item) {
        var ilIlce = "";
        if (this.util.isNotEmpty(item.ilceAdi))
            ilIlce += item.ilceAdi;
        if (this.util.isNotEmpty(item.sehir))
            ilIlce += "/" + item.sehir;
        return ilIlce;
    };
    HizmetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1__hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_3__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_8__urun_ana_grp_urun_ana_grp__["a" /* UrunAnaGrpProvider */],
            __WEBPACK_IMPORTED_MODULE_11__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__adres_dao_adres_dao__["a" /* AdresDao */],
            __WEBPACK_IMPORTED_MODULE_14__anket_service_anket_service__["a" /* AnketService */],
            __WEBPACK_IMPORTED_MODULE_7__util_util__["a" /* UtilProvider */]])
    ], HizmetProvider);
    return HizmetProvider;
}());

//# sourceMappingURL=hizmet.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(5);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var UrunAnaGrpProvider = (function () {
    function UrunAnaGrpProvider(http, api, token, util, urunAnaGrupDao) {
        this.http = http;
        this.api = api;
        this.token = token;
        this.util = util;
        this.urunAnaGrupDao = urunAnaGrupDao;
    }
    UrunAnaGrpProvider.prototype.downloadUrunAnaGrup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var header, item, anaGrp, anaGrpList, res_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (!this.util.isOnline()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getDataFromApi(header)];
                    case 2:
                        item = _a.sent();
                        anaGrp = new __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__["a" /* UrunAnaGrup */]("");
                        return [4 /*yield*/, anaGrp.fillUrunAnaGrup(item)];
                    case 3:
                        anaGrpList = _a.sent();
                        return [4 /*yield*/, this.urunAnaGrupDao.insertList(anaGrpList)];
                    case 4:
                        res_1 = _a.sent();
                        return [2 /*return*/, new Promise((function (resolve, reject) {
                                resolve(res_1);
                            }))];
                    case 5:
                        this.util.ifOffline();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UrunAnaGrpProvider.prototype.getDataFromApi = function (header) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = this.api.urunAnagrupDownloadUrl();
                return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
            });
        });
    };
    UrunAnaGrpProvider.prototype.updateMamAnaGrp = function (hizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.updateMamAnaGrupUrl();
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        if (this.util.isOnline()) {
                            return [2 /*return*/, this.http.post(url, hizmet, { headers: header }).toPromise()];
                        }
                        else {
                            this.util.ifOffline();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UrunAnaGrpProvider.prototype.findUrunAnaGrp = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var urunAnaGrp, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.urunAnaGrupDao.getList(filter, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT)];
                    case 1:
                        res = _a.sent();
                        if (res.rows.length > 0) {
                            urunAnaGrp = this.util.isNotEmpty(res.rows) ? res.rows.item(0) : "";
                        }
                        return [2 /*return*/, urunAnaGrp];
                }
            });
        });
    };
    UrunAnaGrpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_7__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */]])
    ], UrunAnaGrpProvider);
    return UrunAnaGrpProvider;
}());

//# sourceMappingURL=urun-ana-grp.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UtilPlugin = (function () {
    function UtilPlugin(util, logger, callNumber, barcodeScanner) {
        this.util = util;
        this.logger = logger;
        this.callNumber = callNumber;
        this.barcodeScanner = barcodeScanner;
    }
    UtilPlugin.prototype.callPhoneNumber = function (tel) {
        var _this = this;
        if (this.util.isNotEmpty(tel)) {
            tel = "0" + tel;
            this.callNumber
                .callNumber(tel, true)
                .then(function (res) { return _this.logger.info("Launched dialer! " + res); })
                .catch(function (err) { return _this.logger.error("Error launching dialer ==> " + err); });
        }
    };
    UtilPlugin.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.barcodeScanner.scan({
                        preferFrontCamera: false,
                        showFlipCameraButton: true,
                        showTorchButton: true,
                        torchOn: true,
                        prompt: "Place a barcode inside the scan area",
                        //resultDisplayDuration: 2500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                        formats: "CODE_128, CODE_39",
                        //orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                        disableAnimations: true,
                        disableSuccessBeep: false // iOS and Android
                    })];
            });
        });
    };
    UtilPlugin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], UtilPlugin);
    return UtilPlugin;
}());

//# sourceMappingURL=util-plugin.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuncellemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_urun_urun__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urun_iscilik_urun_iscilik__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_urun_malzeme_urun_malzeme__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fiyat_fiyat__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_islem_ariza_iscilik_islem_ariza_iscilik__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_adres_adres__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_versiyon_versiyon__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_tasks_tasks__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__entities_EntityUtil__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_theme_theme__ = __webpack_require__(18);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var GuncellemePage = (function () {
    function GuncellemePage(navCtrl, navParams, urunProvider, urunAnaGrpProvider, urunIscilikProvider, urunMalzemeProvider, islemArizaIscilikProvider, fiyatProvider, adresProvider, logger, versiyonProvider, tasks, util, themeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.urunProvider = urunProvider;
        this.urunAnaGrpProvider = urunAnaGrpProvider;
        this.urunIscilikProvider = urunIscilikProvider;
        this.urunMalzemeProvider = urunMalzemeProvider;
        this.islemArizaIscilikProvider = islemArizaIscilikProvider;
        this.fiyatProvider = fiyatProvider;
        this.adresProvider = adresProvider;
        this.logger = logger;
        this.versiyonProvider = versiyonProvider;
        this.tasks = tasks;
        this.util = util;
        this.themeProvider = themeProvider;
        this.isAndroid = false;
        this.activePage = "guncelleme";
        this.pageSize = 10000;
        this.colors = __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].COLORS;
        this.icons = __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].ICONS;
        this.firstForUrunIscilik = 0;
        this.firstForUrunMalzeme = 0;
        this.firstForUrunler = 0;
        this.firstForIslemArizaIscilik = 0;
        this.firstForIscilikFiyat = 0;
        this.firstForMalzemeFiyat = 0;
        this.firstForMahalleTnm = 0;
        this.counter = 0;
        this.ionViewDidLoad();
        this.backGroundImage = this.themeProvider.getBackgroundImage();
    }
    GuncellemePage.prototype.downloadUrunler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.onDownloadStart();
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN);
                        return [4 /*yield*/, this.urunProvider.downloadUrunler(this.firstForUrunler)];
                    case 1:
                        res = _a.sent();
                        this.logger.success("downloadUrunler ==> " + res);
                        if (this.util.isNotEmpty(res)) {
                            if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.URUN)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                                this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN, "Ürünler Kayıt Edildi.");
                            }
                            else {
                                this.firstForUrunler += this.pageSize;
                                this.downloadUrunler();
                            }
                        }
                        else {
                            this.onComplete();
                        }
                        this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.catchException(e_1, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GuncellemePage.prototype.downloadUrunAnaGrup = function () {
        var _this = this;
        try {
            this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP);
            this.onDownloadStart();
            this.urunAnaGrpProvider.downloadUrunAnaGrup().then(function (res) {
                if (_this.util.isNotEmpty(res))
                    _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP, "Ürün Ana grup Kayıt Edildi.");
                else
                    _this.onComplete();
            });
            this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP);
        }
        catch (e) {
            this.catchException(e, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP);
        }
    };
    GuncellemePage.prototype.downloadUrunIscilik = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK);
                        this.onDownloadStart();
                        return [4 /*yield*/, this.urunIscilikProvider.downloadUrunIscilik(this.firstForUrunIscilik)];
                    case 1:
                        res = _a.sent();
                        this.logger.success("downloadUrunIscilik ==> " + res);
                        if (this.util.isNotEmpty(res)) {
                            if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.URUN_ISCILIK)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                                this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK, "Ürün İşçilik Kayıt Edildi.");
                            }
                            else {
                                this.firstForUrunIscilik += this.pageSize;
                                this.downloadUrunIscilik();
                            }
                        }
                        else {
                            this.onComplete();
                        }
                        this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        this.catchException(e_2, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GuncellemePage.prototype.downloadUrunMalzeme = function () {
        var _this = this;
        try {
            this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME);
            this.onDownloadStart();
            this.urunMalzemeProvider.downloadUrunMalzeme(this.firstForUrunMalzeme).then(function (res) {
                _this.logger.success("downloadUrunMalzeme ==> " + res);
                if (_this.util.isNotEmpty(res)) {
                    if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.URUN_MALZEME)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                        _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME, "Ürün İşçilik Kayıt Edildi.");
                    }
                    else {
                        _this.firstForUrunMalzeme += _this.pageSize;
                        _this.downloadUrunMalzeme();
                    }
                }
                else {
                    _this.onComplete();
                }
            });
            this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME);
        }
        catch (e) {
            this.catchException(e, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME);
            this.onComplete();
        }
    };
    GuncellemePage.prototype.downloadIslemArizaIscilik = function () {
        var _this = this;
        try {
            this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK);
            this.onDownloadStart();
            this.islemArizaIscilikProvider.downloadIslemArizaIscilik(this.firstForIslemArizaIscilik).then(function (res) {
                _this.logger.success("downloadIslemArizaIscilik ==> " + res);
                if (_this.util.isNotEmpty(res)) {
                    if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.ISLEM_ARIZA_ISCILIK)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                        _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK, "Islem Ariza Iscilik Kayıt Edildi.");
                    }
                    else {
                        _this.firstForIslemArizaIscilik += _this.pageSize;
                        _this.downloadIslemArizaIscilik();
                    }
                }
                else {
                    _this.onComplete();
                }
            });
            this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK);
        }
        catch (e) {
            this.catchException(e, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK);
        }
    };
    GuncellemePage.prototype.downloadMalzemeFiyat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT);
                        this.onDownloadStart();
                        return [4 /*yield*/, this.fiyatProvider.downloadMalzemeFiyat(this.firstForMalzemeFiyat)];
                    case 1:
                        res = _a.sent();
                        this.logger.success("downloadMalzemeFiyat ==> " + res);
                        if (this.util.isNotEmpty(res)) {
                            if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.MALZEME_FIYAT)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                                this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT, "Malzeme Fiyatı Kayıt Edildi.");
                            }
                            else {
                                this.firstForMalzemeFiyat += this.pageSize;
                                this.downloadMalzemeFiyat();
                            }
                        }
                        else {
                            this.onComplete();
                        }
                        this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        this.catchException(e_3, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GuncellemePage.prototype.downloadIscilikFiyat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT);
                        this.onDownloadStart();
                        return [4 /*yield*/, this.fiyatProvider.downloadIscilikFiyat(this.firstForIscilikFiyat).then(function (res) {
                                if (_this.util.isNotEmpty(res)) {
                                    _this.logger.success("downloadIscilikFiyat ==> " + res);
                                    if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.ISCILIK_FIYAT)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                                        _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT, "Iscilik Fiyatı Kayıt Edildi.");
                                    }
                                    else {
                                        _this.firstForIscilikFiyat += _this.pageSize;
                                        _this.downloadIscilikFiyat();
                                    }
                                }
                                else {
                                    _this.onComplete();
                                }
                            })];
                    case 1:
                        _a.sent();
                        this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT);
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        this.catchException(e_4, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GuncellemePage.prototype.downloadSehirList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM);
                        this.onDownloadStart();
                        return [4 /*yield*/, this.adresProvider.downloadSehirData().then(function (res) {
                                _this.logger.success("downloadSehirList ==> " + res);
                                if (_this.util.isNotEmpty(res))
                                    _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM, "Şehir listesi güncellendi.");
                                else {
                                    _this.onComplete();
                                }
                            })];
                    case 1:
                        _a.sent();
                        this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM);
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        this.catchException(e_5, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GuncellemePage.prototype.downloadIlceList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM);
                        this.onDownloadStart();
                        return [4 /*yield*/, this.adresProvider.downloadIlceData().then(function (res) {
                                _this.logger.success("downloadIlceList ==> " + res);
                                if (_this.util.isNotEmpty(res)) {
                                    _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM, "Ilçe listesi güncellendi.");
                                }
                                else {
                                    _this.onComplete();
                                }
                            })];
                    case 1:
                        _a.sent();
                        this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM);
                        return [3 /*break*/, 3];
                    case 2:
                        e_6 = _a.sent();
                        this.catchException(e_6, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GuncellemePage.prototype.downloadMahalleList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM);
                        this.onDownloadStart();
                        return [4 /*yield*/, this.adresProvider.downloadMahalleData(this.firstForMahalleTnm).then(function (res) {
                                _this.logger.success("downloadMahalleList ==> " + res);
                                if (_this.util.isNotEmpty(res)) {
                                    if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.MAHALLE_TNM)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                                        _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM, "Mahalle Bilgisi Kayıt Edildi.");
                                    }
                                    else {
                                        _this.firstForMahalleTnm += _this.pageSize;
                                        _this.downloadMahalleList();
                                    }
                                }
                                else {
                                    _this.onComplete();
                                }
                            })];
                    case 1:
                        _a.sent();
                        this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM);
                        return [3 /*break*/, 3];
                    case 2:
                        e_7 = _a.sent();
                        this.catchException(e_7, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GuncellemePage.prototype.ionViewDidLoad = function () {
        this.setButtonsStyle();
        this.setVersiyon();
    };
    GuncellemePage.prototype.setButtonsStyle = function () {
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM);
        this.setButtonStyle(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM);
    };
    GuncellemePage.prototype.setButtonStyle = function (type) {
        var clientVersiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT[type]);
        var serverVersiyon = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].VERSIYON.SERVER[type]);
        var gelenVeri = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI[type]);
        this.logger.info({
            mes: "Kayıtlı Miktar ==> " + type + " ==> " + localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI[type]),
            valid: false
        });
        this.logger.info({
            mes: "type ==> " + type + "; Constants.GELEN_VERI[type] ==> " + __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI[type],
            valid: false
        });
        if (this.util.isNotEmpty(serverVersiyon)) {
            if ((serverVersiyon == clientVersiyon)) {
                __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].COLORS[type] = "downloaded";
                __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].ICONS[type] = "done-all";
            }
        }
        else if ((serverVersiyon == clientVersiyon) && serverVersiyon != "-1") {
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].COLORS[type] = "downloaded";
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].ICONS[type] = "done-all";
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].COLORS[type] = "notDownloaded";
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].ICONS[type] = "download";
        }
    };
    GuncellemePage.prototype.updateHeader = function () {
        var _this = this;
        setTimeout(function () {
            _this.header.updateHeader();
        }, 200);
    };
    GuncellemePage.prototype.catchException = function (e, place) {
        this.logger.error(e);
        this.util.error("Indirme işleminde Hata oluştu lütfen tekrar deneyiniz." + place);
        this.onComplete();
    };
    GuncellemePage.prototype.doWhenDataDownloaded = function (type, message) {
        var _this = this;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT[type], localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].VERSIYON.SERVER[type]));
        this.colors[type] = "downloaded";
        this.icons[type] = "done-all";
        setTimeout(function () {
            _this.util.success(message);
        }, 500);
        this.onComplete();
    };
    GuncellemePage.prototype.onComplete = function () {
        this.util.loaderEnd();
        this.updateHeader();
        this.setVersiyon();
        this.tasks.startTasks();
        this.counter = 0;
        var entityUtil = new __WEBPACK_IMPORTED_MODULE_15__entities_EntityUtil__["a" /* EntityUtil */]();
        entityUtil.indirilenVeriyiSifirla();
    };
    GuncellemePage.prototype.onDownloadStart = function () {
        if (this.counter == 0) {
            this.tasks.killTasks();
            this.util.loaderStart(true);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].INDIRILEN_VERI, "");
        }
        this.counter += 1;
    };
    GuncellemePage.prototype.setVersiyon = function () {
        this.urunlerVersiyon = this.getVersiyon(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN);
        this.urunAnaGrupVersiyon = this.getVersiyon(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP);
        this.urunIscilikVersiyon = this.getVersiyon(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK);
        this.urunMalzemeVersiyon = this.getVersiyon(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME);
        this.islemArizaIscilikVersiyon = this.getVersiyon(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK);
        this.malzemeFiyatVersiyon = this.getVersiyon(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT);
        this.iscilikFiyatVersiyon = this.getVersiyon(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT);
    };
    GuncellemePage.prototype.getVersiyon = function (tip) {
        var versiyonText = "";
        var res = this.versiyonProvider.getVersiyonClientAndServer(tip);
        if (this.util.isNotEmpty(res)) {
            if (this.util.isNotEmpty(res.server))
                versiyonText += res.server;
            else
                versiyonText += "-1";
            versiyonText += " / ";
            if (this.util.isNotEmpty(res.client))
                versiyonText += res.client;
            else
                versiyonText += "-1";
        }
        return versiyonText;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("header"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__components_header_header__["a" /* HeaderComponent */])
    ], GuncellemePage.prototype, "header", void 0);
    GuncellemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-guncelleme',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\guncelleme\guncelleme.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-title class="page-title">Güncelleme</ion-title>\n\n\n\n  <ion-toolbar class="main-tabs">\n\n    <ion-segment [(ngModel)]="activePage">\n\n      <ion-segment-button value="guncelleme" class="seg-button">\n\n        Güncelleme\n\n      </ion-segment-button>\n\n      <ion-segment-button value="versiyon" class="seg-button">\n\n        Versiyon\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="activePage">\n\n    <div *ngSwitchCase="\'guncelleme\'">\n\n\n\n      <ion-list>\n\n        <button ion-button primary round full [color]="colors.URUN" (click)="downloadUrunler();" round full>\n\n          <span item-left style="width: 95%">Ürünler</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.URUN_ANA_GRUP" (click)="downloadUrunAnaGrup();" round full>\n\n          <span item-left style="width: 95%">Ürün Ana Grupları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN_ANA_GRUP"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.URUN_ISCILIK" (click)="downloadUrunIscilik();" round full>\n\n          <span item-left style="width: 95%">Ürün işçilik</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN_ISCILIK"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.URUN_MALZEME" (click)="downloadUrunMalzeme();" round full>\n\n          <span item-left style="width: 95%">Ürün-Malzeme</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN_MALZEME"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.ISLEM_ARIZA_ISCILIK" (click)="downloadIslemArizaIscilik();" round full>\n\n          <span item-left style="width: 95%">İşlem-Arıza-İşçilik</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.ISLEM_ARIZA_ISCILIK"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.MALZEME_FIYAT" (click)="downloadMalzemeFiyat();" round full>\n\n          <span item-left style="width: 95%">Malzeme Fiyatları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.MALZEME_FIYAT"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.ISCILIK_FIYAT" (click)="downloadIscilikFiyat();" round full>\n\n          <span item-left style="width: 95%">İşçilik Fiyatları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.ISCILIK_FIYAT"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.SEHIR_TNM" (click)="downloadSehirList();" round full>\n\n          <span item-left style="width: 95%">Şehir Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.SEHIR_TNM"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.ILCE_TNM" (click)="downloadIlceList();" round full>\n\n          <span item-left style="width: 95%">İlçe Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.ILCE_TNM"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.MAHALLE_TNM" (click)="downloadMahalleList();" round full>\n\n          <span item-left style="width: 95%"> Mahalle Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.MAHALLE_TNM" class="mr-icon"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n      </ion-list>\n\n\n\n\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'versiyon\'">\n\n\n\n      <button ion-button primary round full>\n\n        <span item-left style="width: 80%">Ürünler</span>\n\n        <span item-right style="width: 20%">{{urunlerVersiyon}}</span>\n\n      </button>\n\n\n\n      <button ion-button primary round full>\n\n        <span item-left style="width: 80%">Ürün Ana Grupları</span>\n\n        <span item-right style="width: 20%">{{urunAnaGrupVersiyon}}</span>\n\n      </button>\n\n\n\n      <button ion-button primary round full>\n\n        <span item-left style="width: 80%">Ürün İşçilik</span>\n\n        <span item-right style="width: 20%">{{urunIscilikVersiyon}}</span>\n\n      </button>\n\n\n\n      <button ion-button primary round full>\n\n        <span item-left style="width: 80%">Ürün-Malzeme</span>\n\n        <span item-right style="width: 20%">{{urunMalzemeVersiyon}}</span>\n\n      </button>\n\n\n\n      <button ion-button primary round full>\n\n        <span item-left style="width: 80%">İşlem-Arıza-İşçilik</span>\n\n        <span item-right style="width: 20%">{{islemArizaIscilikVersiyon}}</span>\n\n      </button>\n\n\n\n      <button ion-button round full>\n\n        <span item-left style="width: 80%">Malzeme Fiyatları</span>\n\n        <span item-right style="width: 20%">{{malzemeFiyatVersiyon}}</span>\n\n      </button>\n\n\n\n      <button ion-button primary round full>\n\n        <span item-left style="width: 80%">İşçilik Fiyatları</span>\n\n        <span item-right style="width: 20%">{{iscilikFiyatVersiyon}}</span>\n\n      </button>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\guncelleme\guncelleme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_urun_urun__["a" /* UrunProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_urun_ana_grp_urun_ana_grp__["a" /* UrunAnaGrpProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_urun_iscilik_urun_iscilik__["a" /* UrunIscilikProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_urun_malzeme_urun_malzeme__["a" /* UrunMalzemeProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_islem_ariza_iscilik_islem_ariza_iscilik__["a" /* IslemArizaIscilikProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_fiyat_fiyat__["a" /* FiyatProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_adres_adres__["a" /* AdresProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_versiyon_versiyon__["a" /* VersiyonProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_tasks_tasks__["a" /* TasksProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_theme_theme__["a" /* ThemeProvider */]])
    ], GuncellemePage);
    return GuncellemePage;
}());

//# sourceMappingURL=guncelleme.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Urun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityUtil__ = __webpack_require__(55);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
var Urun = (function (_super) {
    __extends(Urun, _super);
    function Urun() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mamAnagrp = "";
        _this.mamKod = "";
        _this.mamAdi = "";
        _this.seriMetod = "";
        _this.surec = "";
        _this.durum = "";
        return _this;
    }
    Urun.prototype.fillUrun = function (res) {
        var parsedList = [];
        var urunList = res.message[0].liste;
        var urunVersiyon = res.message[0].versiyon;
        /**
         *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
         */
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.URUN, urunVersiyon);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.URUN, urunList.length);
        this.indirilenVeriyiHesapla(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].DATA_TYPE.URUN, urunList.length);
        urunList.forEach(function (item) {
            var urun = new Urun();
            urun.mamAnagrp = item.mamAnagrp;
            urun.mamKod = item.urunKodu;
            urun.mamAdi = item.urunAdi;
            urun.seriMetod = item.seriMetod;
            urun.durum = item.durum;
            parsedList.push(urun);
        });
        return new Promise(function (resolve) { return resolve(parsedList); });
    };
    return Urun;
}(__WEBPACK_IMPORTED_MODULE_1__EntityUtil__["a" /* EntityUtil */]));

//# sourceMappingURL=urun.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiyatDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */





var FiyatDao = (function () {
    function FiyatDao(baseDao, dbProvider, util) {
        this.baseDao = baseDao;
        this.dbProvider = dbProvider;
        this.util = util;
        this.INSERT_QUERY = "INSERT OR REPLACE INTO OFF_FIYAT (mamKod,iscMlz,iscMlzKod,fiyat,gdfiyat,versiyon) VALUES (?,?,?,?,?,?)";
        this.UPDATE_QUERY = "UPDATE OFF_FIYAT SET fiyat = ?,gdfiyat=?, versiyon=? WHERE mamKod=? AND iscMlz = ? and iscMlzKod = ?";
        this.SELECT_QUERY = "SELECT * FROM OFF_FIYAT WHERE mamKod = ? and iscMlzKod = ?";
    }
    FiyatDao.prototype.insertOne = function (item) {
        var params = [item.mamKod, item.iscMlz, item.iscMlzKod, item.fiyat, item.gdFiyat, item.versiyon];
        return this.baseDao.execute(this.INSERT_QUERY, params);
    };
    FiyatDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
        if (list.length == 0)
            return new Promise(function (res) { return res(0); });
        return new Promise(function (resolve, reject) {
            _this.dbProvider.transaction().then(function (db) {
                db.transaction(function (tx) {
                    var query = "INSERT OR REPLACE INTO OFF_FIYAT (mamKod,iscMlz,iscMlzKod,fiyat,gdfiyat,versiyon) VALUES (?,?,?,?,?,?)";
                    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                        var item = list_1[_i];
                        var params = [item.mamKod, item.iscMlz, item.iscMlzKod, item.fiyat, item.gdFiyat, item.versiyon];
                        tx.executeSql(query, params, function (tx, res) {
                            insertedItems += 1;
                            if (list.length == insertedItems) {
                                resolve(res);
                            }
                        }, function (err, mes) {
                            console.error("Error" + mes.message + " Code: " + mes.code);
                            reject(err);
                        });
                    }
                });
            });
        });
    };
    FiyatDao.prototype.findFiyat = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                query = this.prepareSearchQuery(item, __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT);
                return [2 /*return*/, this.baseDao.execute(query, [])];
            });
        });
    };
    FiyatDao.prototype.prepareSearchQuery = function (item, searchType) {
        var query = "SELECT * FROM OFF_FIYAT WHERE 1=1 ";
        var whereQuery = [];
        if (this.util.isNotEmpty(item.fiyat))
            whereQuery.push(this.util.prepareWhereQuery(searchType, "fiyat", item.fiyat.toString()));
        if (this.util.isNotEmpty(item.gdFiyat))
            whereQuery.push(this.util.prepareWhereQuery(searchType, "gdFiyat", item.gdFiyat.toString()));
        if (this.util.isNotEmpty(item.iscMlz))
            whereQuery.push(this.util.prepareWhereQuery(searchType, "iscMlz", item.iscMlz));
        if (this.util.isNotEmpty(item.iscMlzKod))
            whereQuery.push(this.util.prepareWhereQuery(searchType, "iscMlzKod", item.iscMlzKod));
        if (this.util.isNotEmpty(item.mamKod)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "mamKod", item.mamKod));
        }
        return this.util.prepareQuery(query, whereQuery, searchType);
    };
    FiyatDao.prototype.update = function () {
        return null;
    };
    FiyatDao.prototype.deleteAllByTip = function (tip) {
        var query = " DELETE FROM OFF_FIYAT WHERE 1=1 ";
        if (tip == __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT) {
            query += " AND iscMlz ='ISC'";
        }
        else if (tip == __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT) {
            query += " AND iscMlz ='MLZ'";
        }
        this.baseDao.resetVersion(tip);
        return this.baseDao.execute(query, []);
    };
    FiyatDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__["a" /* BaseDao */],
            __WEBPACK_IMPORTED_MODULE_2__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */]])
    ], FiyatDao);
    return FiyatDao;
}());

//# sourceMappingURL=fiyat-dao.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_urun__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UrunSearchComponent = (function () {
    function UrunSearchComponent(viewCtrl, params, urunDao, util, themeProvider) {
        this.viewCtrl = viewCtrl;
        this.urunDao = urunDao;
        this.util = util;
        this.themeProvider = themeProvider;
        this.list = [];
        this.selectedItem = { key: "", value: "" };
        this.searchText = "";
        this.pageable = new __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__["a" /* Pageable */]();
        this.backGroundImage = this.themeProvider.getBackgroundImage();
        this.data = params.get('data');
        this.urun = new __WEBPACK_IMPORTED_MODULE_6__entities_urun__["a" /* Urun */]();
        this.searchType = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE;
        this.ionViewDidLoad();
    }
    UrunSearchComponent.prototype.closeModal = function () {
        this.ionChange({ key: '', value: '' });
    };
    UrunSearchComponent.prototype.ionViewDidLoad = function () {
        this.fetchList('BEGINNING');
    };
    UrunSearchComponent.prototype.fetchList = function (type) {
        this.pageable.tip = type;
        this.pageable = this.pageable.compute();
        this.list = [];
        this.fetchUrunList();
    };
    UrunSearchComponent.prototype.fetchUrunList = function () {
        var _this = this;
        var urunSearch = this.prepareSearchUrun();
        this.urunDao.getList(urunSearch, __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(function (data) {
            _this.fillList(data);
        });
    };
    UrunSearchComponent.prototype.prepareSearchUrun = function () {
        var filter = new __WEBPACK_IMPORTED_MODULE_6__entities_urun__["a" /* Urun */]();
        filter.mamAdi = this.searchText;
        filter.mamKod = this.searchText;
        if (this.util.isNotEmpty(this.data.mamAnagrp)) {
            filter.mamAnagrp = this.data.mamAnagrp;
        }
        if (this.util.isNotEmpty(this.data.searchType)) {
            this.searchType = this.data.searchType;
        }
        return filter;
    };
    UrunSearchComponent.prototype.fillList = function (data) {
        var res = data.res.rows;
        this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
        for (var i = 0; i < res.length; i++) {
            this.fillItemByType(res.item(i));
        }
        console.dir(res);
    };
    UrunSearchComponent.prototype.fillItemByType = function (item) {
        this.list.push({ key: item.mamAdi, value: item.mamKod, data: item });
    };
    UrunSearchComponent.prototype.ionChange = function (item) {
        this.prepareUrunReturnValue(item);
        this.viewCtrl.dismiss(this.returnObject);
    };
    UrunSearchComponent.prototype.prepareUrunReturnValue = function (item) {
        this.urun.mamAdi = this.util.isEmpty(item.key) ? '' : item.key;
        this.urun.mamKod = this.util.isEmpty(item.value) ? '' : item.value;
        if (this.util.isNotEmpty(item.data) && this.util.isNotEmpty(item.data.seriMetod))
            this.urun.seriMetod = item.data.seriMetod;
        this.returnObject = this.urun;
    };
    UrunSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'urun-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\urun-search\urun-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-10 col-md-10>\n\n        <ion-title>Ürün Arama</ion-title>\n\n      </ion-col>\n\n      <ion-col col-2 col-md-2>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content" [ngStyle]="{ \'background-image\': \'url(\' + backGroundImage + \')\' }">\n\n\n\n  <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list" class="row-border">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-row>\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-left" (click)="fetchList(\'FIRST\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-double-left"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-left" (click)="fetchList(\'PREVIOUS\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-left"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-4>\n\n      <ion-row>\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-right" (click)="fetchList(\'NEXT\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-right"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6>\n\n          <button ion-button color="light" class="pull-right" (click)="fetchList(\'LAST\')">\n\n            <ion-label>\n\n              <i class="fas fa-angle-double-right"></i>\n\n            </ion-label>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\urun-search\urun-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__["a" /* UrunDao */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_theme_theme__["a" /* ThemeProvider */]])
    ], UrunSearchComponent);
    return UrunSearchComponent;
}());

//# sourceMappingURL=urun-search.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Domain; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var Domain = (function () {
    function Domain() {
    }
    return Domain;
}());

//# sourceMappingURL=domain.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedModulePage = (function () {
    function SharedModulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SharedModulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharedModulePage');
    };
    SharedModulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shared-module',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\shared-module\shared-module.html"*/'<!--\n\n  Generated template for the SharedModulePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SharedModule</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\pages\shared-module\shared-module.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SharedModulePage);
    return SharedModulePage;
}());

//# sourceMappingURL=shared-module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EProfiles; });
var EProfiles;
(function (EProfiles) {
    EProfiles["LOCAL_DEV"] = "LOCAL_DEV";
    EProfiles["LOCAL_TEST"] = "LOCAL_TEST";
    EProfiles["ECA"] = "ECA";
    EProfiles["BAYMAK"] = "BAYMAK";
    EProfiles["CUSTOMER3"] = "CUSTOMER3";
})(EProfiles || (EProfiles = {}));
//# sourceMappingURL=eProfil.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tablo; });
/**
 * @author mali.sahin
 * @date on 16-03-18.
 */
var Tablo = (function () {
    function Tablo() {
        this.client_version = "";
        this.server_version = "";
    }
    Tablo.prototype.SER_MAM_ANAGRP_TNM = function () {
        var tablo = new Tablo();
        tablo.client_version = "SER_MAM_ANAGRP_TNM_CLIENT_VERSION";
        tablo.server_version = "SER_MAM_ANAGRP_TNM_SERVER_VERSION";
        return tablo;
    };
    Tablo.prototype.SER_MAM_TNM = function () {
        var tablo = new Tablo();
        tablo.client_version = "SER_MAM_TNM_CLIENT_VERSION";
        tablo.server_version = "SER_MAM_TNM_SERVER_VERSION";
        return tablo;
    };
    Tablo.prototype.SER_ISC_ISLARZGRP_TNM = function () {
        var tablo = new Tablo();
        tablo.client_version = "SER_MAM_TNM_CLIENT_VERSION";
        tablo.server_version = "SER_MAM_TNM_SERVER_VERSION";
        return tablo;
    };
    Tablo.prototype.SER_MAM_ISC_TNM = function () {
        var tablo = new Tablo();
        tablo.client_version = "SER_MAM_ISC_TNM_CLIENT_VERSION";
        tablo.server_version = "SER_MAM_ISC_TNM_SERVER_VERSION";
        return tablo;
    };
    Tablo.prototype.SER_MAM_MLZ_TNM = function () {
        var tablo = new Tablo();
        tablo.client_version = "SER_MAM_MLZ_TNM_CLIENT_VERSION";
        tablo.server_version = "SER_MAM_MLZ_TNM_SERVER_VERSION";
        return tablo;
    };
    Tablo.prototype.OFFLINE_ISC_FIYAT = function () {
        var tablo = new Tablo();
        tablo.client_version = "OFFLINE_ISC_FIYAT_CLIENT_VERSION";
        tablo.server_version = "OFFLINE_ISC_FIYAT_SERVER_VERSION";
        return tablo;
    };
    Tablo.prototype.OFFLINE_MLZ_FIYAT = function () {
        var tablo = new Tablo();
        tablo.client_version = "OFFLINE_MLZ_FIYAT_CLIENT_VERSION";
        tablo.server_version = "OFFLINE_MLZ_FIYAT_SERVER_VERSION";
        return tablo;
    };
    return Tablo;
}());

//# sourceMappingURL=Tablo.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Token; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(6);

var Token = (function () {
    function Token() {
    }
    Token.prototype.fillToken = function (obj) {
        var item = new Token();
        if (obj.access_token != null) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].LOGGED_IN, String(true));
        }
        item.access_token = obj.access_token != null ? obj.access_token : "";
        item.error = obj.error != null ? obj.error : "";
        item.error_description = obj.error_description != null ? obj.error_descriptio : "";
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].ACCESS_TOKEN, item.access_token);
        return item;
    };
    return Token;
}());

//# sourceMappingURL=token.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anket; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var Anket = (function () {
    function Anket() {
    }
    return Anket;
}());

//# sourceMappingURL=Anket.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnketSoru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SerSoruTnm; });
/**
 * @author mali.sahin
 * @since  03-Aug-18.
 */
var AnketSoru = (function () {
    function AnketSoru() {
    }
    return AnketSoru;
}());

var SerSoruTnm = (function () {
    function SerSoruTnm() {
    }
    return SerSoruTnm;
}());

//# sourceMappingURL=AnketSoru.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnketMst; });
/**
 * @author mali.sahin
 * @since  03-Aug-18.
 */
var AnketMst = (function () {
    function AnketMst() {
        this.durum = "";
        this.hedefGrp = "";
        this.hedefKod = "";
        this.orgKod = "";
        this.refKod = "";
        this.refNo = "";
        this.sorumlu = "";
        this.anketAdi = "";
    }
    return AnketMst;
}());

//# sourceMappingURL=AnketMst.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetSearch; });
/**
 * @author mehmets
 * @since 16-May-18.
 */
var HizmetSearch = (function () {
    function HizmetSearch() {
        this.durum = "";
        this.aciklama = "";
        this.adi = "";
        this.soyadi = "";
        this.unvani = "";
        this.telefon = "";
    }
    return HizmetSearch;
}());

//# sourceMappingURL=HizmetSearch.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache_cache__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Constants__ = __webpack_require__(6);
/**
 * @author malisahin
 * @date 2018-04-14
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoggerProvider = (function (_super) {
    __extends(LoggerProvider, _super);
    function LoggerProvider(cacheService) {
        var _this = _super.call(this) || this;
        _this.cacheService = cacheService;
        _this.isLogEnabled = true;
        return _this;
    }
    LoggerProvider.prototype.consoleLog = function (message, color) {
        console.log("%c " + message, color);
    };
    LoggerProvider.prototype.info = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.consoleLog(res, "color: #0096ff");
                return [2 /*return*/];
            });
        });
    };
    LoggerProvider.prototype.success = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("%c " + res, "color: #00ff4b");
                        if (!this.isLogEnabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cacheService.saveLog(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].CACHE_KEYS.SUCCESS, res)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoggerProvider.prototype.log = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var mes, valid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mes = "";
                        valid = true;
                        console.log(res);
                        if (!this.isLogEnabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cacheService.saveLog(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].CACHE_KEYS.LOG, res)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoggerProvider.prototype.log2 = function (mes, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(mes, res);
                        if (!this.isLogEnabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cacheService.saveLog(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].CACHE_KEYS.LOG, res)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoggerProvider.prototype.dir = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.dir(res);
                        if (!this.isLogEnabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cacheService.saveLog(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].CACHE_KEYS.DIR, res)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoggerProvider.prototype.dir2 = function (mes, res) {
        console.dir(mes, res);
    };
    LoggerProvider.prototype.error = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.error(res);
                        if (!this.isLogEnabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cacheService.saveLog(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].CACHE_KEYS.ERROR, res)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoggerProvider.prototype.error2 = function (mes, res) {
        console.error(mes, res);
    };
    LoggerProvider.prototype.warn = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.warn(res);
                        if (!this.isLogEnabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cacheService.saveLog(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].CACHE_KEYS.WARN, res)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoggerProvider.prototype.table = function (res) {
        console.table(res);
    };
    LoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cache_cache__["a" /* CacheProvider */]])
    ], LoggerProvider);
    return LoggerProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sehir; });
var Sehir = (function () {
    function Sehir() {
        this.sehirKodu = "";
        this.sehirAdi = "";
    }
    return Sehir;
}());

//# sourceMappingURL=Sehir.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mahalle; });
var Mahalle = (function () {
    function Mahalle() {
        this.sehirKodu = "";
        this.ilceKodu = "";
        this.mahalleAdi = "";
        this.mahalleKodu = "";
    }
    return Mahalle;
}());

//# sourceMappingURL=mahalle.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiyatSorguComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_urun_malzeme__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_urun_iscilik__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__urun_search_urun_search__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__urun_iscilik_search_urun_iscilik_search__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__entities_fiyat__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__malzeme_search_malzeme_search__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var FiyatSorguComponent = (function () {
    function FiyatSorguComponent(modalController, util, fiyatDao, logger) {
        this.modalController = modalController;
        this.util = util;
        this.fiyatDao = fiyatDao;
        this.logger = logger;
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_13__entities_fiyat__["a" /* Fiyat */]();
        this.data = {};
        this.urunAnaGrup = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
        this.urun = new __WEBPACK_IMPORTED_MODULE_3__entities_urun__["a" /* Urun */]();
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_7__entities_urun_iscilik__["a" /* UrunIscilik */]();
        this.islemTipi = '';
        this.malzeme = new __WEBPACK_IMPORTED_MODULE_4__entities_urun_malzeme__["a" /* UrunMalzeme */]();
    }
    FiyatSorguComponent.prototype.urunAnaGrupSorgula = function () {
        var _this = this;
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_7__entities_urun_iscilik__["a" /* UrunIscilik */]();
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_13__entities_fiyat__["a" /* Fiyat */]();
        this.urun = new __WEBPACK_IMPORTED_MODULE_3__entities_urun__["a" /* Urun */]();
        this.data.type = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_8__urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */], { data: this.data }, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data))
                _this.urunAnaGrup = data;
        });
        aramaModal.present();
    };
    FiyatSorguComponent.prototype.urunSorgula = function () {
        var _this = this;
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_7__entities_urun_iscilik__["a" /* UrunIscilik */]();
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_13__entities_fiyat__["a" /* Fiyat */]();
        this.data.type = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_9__urun_search_urun_search__["a" /* UrunSearchComponent */], { data: this.data }, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data))
                _this.urun = data;
        });
        aramaModal.present();
    };
    FiyatSorguComponent.prototype.malzemeSorgula = function () {
        var _this = this;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_14__malzeme_search_malzeme_search__["a" /* MalzemeSearchComponent */], { data: this.malzeme }, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data))
                _this.fillMalzemeSorguFilter(data);
        });
        aramaModal.present();
    };
    FiyatSorguComponent.prototype.fillMalzemeSorguFilter = function (data) {
        if (this.util.isNotEmpty(data)) {
            if (this.util.isNotEmpty(data.mlzKod))
                this.malzeme.mlzKod = data.mlzKod;
            if (this.util.isNotEmpty(data.mlzAdi)) {
                this.malzeme.mlzAdi = data.mlzAdi;
            }
        }
    };
    FiyatSorguComponent.prototype.urunIscilikSorgula = function () {
        var _this = this;
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_13__entities_fiyat__["a" /* Fiyat */]();
        if (this.util.isEmpty(this.urun.mamKod)) {
            this.util.warn("Önce ürünü seçiniz.");
            return false;
        }
        this.data.type = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK;
        this.data.mamKod = this.urun.mamKod;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_10__urun_iscilik_search_urun_iscilik_search__["a" /* UrunIscilikSearchComponent */], { data: this.data }, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data))
                _this.urunIscilik = data;
        });
        aramaModal.present();
    };
    FiyatSorguComponent.prototype.fiyatSorgula = function () {
        if (this.islemTipi == 'ISC') {
            this.iscilikFiyatSorgula();
        }
        else {
            this.malzemeFiyatSorgula();
        }
    };
    FiyatSorguComponent.prototype.IslemTipiChange = function () {
    };
    FiyatSorguComponent.prototype.iscilikFiyatSorgula = function () {
        if (this.util.isEmpty(this.urun.mamKod) || this.util.isEmpty(this.urunIscilik.iscKod)) {
            this.util.warn("Önce İşçilik/Malzeme seçiniz.");
        }
        else {
            this.logger.warn("Işçilik Fiyat Bulma");
            this.fiyatBul(this.urun.mamKod, this.urunIscilik.iscKod);
        }
    };
    FiyatSorguComponent.prototype.fiyatBul = function (mamKod, iscMlzKod) {
        return __awaiter(this, void 0, void 0, function () {
            var filter, query, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = new __WEBPACK_IMPORTED_MODULE_13__entities_fiyat__["a" /* Fiyat */]();
                        filter.mamKod = mamKod;
                        filter.iscMlzKod = iscMlzKod;
                        return [4 /*yield*/, this.fiyatDao.findFiyat(filter)];
                    case 1:
                        query = _a.sent();
                        if (this.util.isNotEmpty(query) && query.rows.length > 0) {
                            this.logger.dir(query.rows);
                            res = query.rows.item(0);
                            this.fiyat.fiyat = Number((Number(res.fiyat) * 1.18).toFixed(2));
                            this.fiyat.gdFiyat = Number((Number(res.gdfiyat) * 1.18).toFixed(2));
                            this.fiyat.mamKod = res.mamKod;
                        }
                        else {
                            this.util.warn("Fiyat Bulunamadı.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FiyatSorguComponent.prototype.malzemeFiyatSorgula = function () {
        if (this.util.isEmpty(this.malzeme.mlzKod)) {
            this.util.warn("Önce Ürün/Kodu seçiniz.");
        }
        else {
            this.fiyatBul("MLZ", this.malzeme.mlzKod);
        }
    };
    FiyatSorguComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fiyat-sorgu',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\fiyat-sorgu\fiyat-sorgu.html"*/'<!-- Generated template for the HizmetBilgileriComponent component -->\n\n\n\n<ion-row>\n\n  <ion-col col-12 *ngIf="islemTipi==\'\' || islemTipi==null" style="text-align: center;">\n\n    <ion-label>\n\n      <strong>Önce işlem tipini seçiniz</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>İşlem Tipi:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-select [(ngModel)]="islemTipi" interface="popover" (ionChange)="IslemTipiChange()">\n\n      <ion-option value="" selected="true"></ion-option>\n\n      <ion-option value="ISC">İşçilik</ion-option>\n\n      <ion-option value="MLZ">Malzeme</ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-label>\n\n      <strong>Ürün Ana Grubu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-input type="text" [(ngModel)]="urunAnaGrup.ad" (ionFocus)="urunAnaGrupSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi == \'ISC\'">\n\n    <ion-label>\n\n      <strong>Ürün Kodu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi == \'ISC\'">\n\n    <ion-input type="text" [(ngModel)]="urun.mamKod" (ionFocus)="urunSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi == \'MLZ\'">\n\n    <ion-label>\n\n      <strong>Malzeme Kodu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi == \'MLZ\'">\n\n    <ion-input type="text" [(ngModel)]="malzeme.mlzKod" (ionFocus)="malzemeSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi == \'MLZ\'">\n\n    <ion-label>\n\n      <strong>Malzeme Adı:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi == \'MLZ\'">\n\n    <ion-input type="text" [(ngModel)]="malzeme.mlzAdi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-label>\n\n      <strong>Ürün İşçilik:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-input type="text" [(ngModel)]="urunIscilik.iscAdi" (ionFocus)="urunIscilikSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n    <button ion-button icon-start full round (click)="fiyatSorgula();">\n\n      <ion-icon name="search"></ion-icon>\n\n      Fiyat Sorgula\n\n    </button>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<ion-row *ngIf="fiyat.fiyat != null" class="card-box">\n\n  <ion-col col-7 col-md-7 class="row-border border-right">\n\n    <ion-label>\n\n      <strong>(KDV Dahil) Garanti Fiyat:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-5 col-md-5 class="row-border">\n\n    <ion-label>{{fiyat.fiyat}}</ion-label>\n\n  </ion-col>\n\n\n\n  <ion-col col-7 col-md-7 class="border-right">\n\n    <ion-label>\n\n      <strong>(KDV Dahil) Garanti Dışı Fiyat:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-5 col-md-5>\n\n    <ion-label>{{fiyat.gdFiyat}}</ion-label>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\fiyat-sorgu\fiyat-sorgu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
            __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__["a" /* LoggerProvider */]])
    ], FiyatSorguComponent);
    return FiyatSorguComponent;
}());

//# sourceMappingURL=fiyat-sorgu.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnketCevap; });
/**
 * @author mali.sahin
 * @since  03-Aug-18.
 */
var AnketCevap = (function () {
    function AnketCevap() {
    }
    return AnketCevap;
}());

//# sourceMappingURL=AnketCevap.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__ = __webpack_require__(9);
/**
 * @author [malisahin]
 * @email [mehmetalisahinogullari@gmail.com]
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var HizmetBilgileriComponent = (function () {
    function HizmetBilgileriComponent(hizmetService, urunAnaGrpProvider, logger, util) {
        this.hizmetService = hizmetService;
        this.urunAnaGrpProvider = urunAnaGrpProvider;
        this.logger = logger;
        this.util = util;
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.hizmet = this.hizmetService.getHizmet();
        this.getHizmet();
    }
    HizmetBilgileriComponent.prototype.fetchHizmet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.util.isNotEmpty(this.hizmet)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.getHizmetBySeqNo(this.hizmet.seqNo)];
                    case 1:
                        _a.hizmet = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HizmetBilgileriComponent.prototype.getHizmet = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchHizmet()];
                    case 1:
                        _a.sent();
                        this.hizmetService.setHizmet(this.hizmet);
                        this.randevuTarihi = this.util.dateFormatRegex(this.hizmet.randevuTarihi, __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].DATE_FORMAT);
                        this.cagriTarihi = this.util.dateFormatRegex(this.hizmet.cagriTarihi, __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].DATE_FORMAT);
                        return [4 /*yield*/, this.findUrunAnaGrpProvider()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.findBasvuruNedeni()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetBilgileriComponent.prototype.findUrunAnaGrpProvider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filter, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.util.isEmpty(this.hizmet.mamAnaGrpAdi) && this.util.isNotEmpty(this.hizmet.mamAnaGrp))) return [3 /*break*/, 2];
                        filter = new __WEBPACK_IMPORTED_MODULE_5__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
                        filter.mamAnaGrp = this.hizmet.mamAnaGrp;
                        return [4 /*yield*/, this.urunAnaGrpProvider.findUrunAnaGrp(filter)];
                    case 1:
                        result = _a.sent();
                        this.logger.dir(result);
                        if (this.util.isNotEmpty(result)) {
                            this.hizmet.mamAnaGrpAdi = result.ad;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HizmetBilgileriComponent.prototype.findBasvuruNedeni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filter, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.util.isNotEmpty(this.hizmet.basvuruNedeni) && this.util.isEmpty(this.hizmet.basvuruNedenAdi))) return [3 /*break*/, 2];
                        filter = new __WEBPACK_IMPORTED_MODULE_5__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
                        filter.neden = this.hizmet.basvuruNedeni;
                        filter.mamAnaGrp = this.hizmet.mamAnaGrp;
                        return [4 /*yield*/, this.urunAnaGrpProvider.findUrunAnaGrp(filter)];
                    case 1:
                        result = _a.sent();
                        if (this.util.isNotEmpty(result)) {
                            this.hizmet.basvuruNedenAdi = result.ad;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HizmetBilgileriComponent.prototype.formatDate = function (date) {
        /*  this.logger.info("Hizmet  Bilgileri => " + date);
    
          if(typeof date == "string") {
            date = date.replace(" ", "T");
          }
          let formattedDate = moment(date, "YYYY-MM-DD HH:mm:ss").toDate();
          this.logger.info("Formatted Date => "+ formattedDate);
          return formattedDate;*/
        return new Date(date);
    };
    HizmetBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hizmet-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-Components\hizmet-bilgileri\hizmet-bilgileri.html"*/'<ion-row>\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Randevu Tarihi:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-label class="text-input">{{hizmet.randevuTarihi | FormatDate}}</ion-label>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Çağrı Açılış Tarihi:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-label class="text-input">\n\n      {{hizmet.cagriTarihi | FormatDate}}\n\n    </ion-label>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Hizmet Tipi:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.hizmetTipiAdi" [disabled]="hizmet.durum != \'ACIK\'" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Ürün Ana Grubu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.mamAnaGrpAdi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Başvuru Neden:</strong>i</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.basvuruNedenAdi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Hizmet Formu No:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.seqNo" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Durum:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.durum" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Çağrı No:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.cmNo" readonly></ion-input>\n\n  </ion-col>\n\n\n\n</ion-row>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-Components\hizmet-bilgileri\hizmet-bilgileri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grp_urun_ana_grp__["a" /* UrunAnaGrpProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], HizmetBilgileriComponent);
    return HizmetBilgileriComponent;
}());

//# sourceMappingURL=hizmet-bilgileri.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusteriBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_adres_dao_adres_dao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_plugin_util_plugin__ = __webpack_require__(85);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MusteriBilgileriComponent = (function () {
    function MusteriBilgileriComponent(hizmetService, adresDao, logger, plugins, util) {
        this.hizmetService = hizmetService;
        this.adresDao = adresDao;
        this.logger = logger;
        this.plugins = plugins;
        this.util = util;
        this.adSoyad = "";
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.sehirler = [];
        this.ilceler = [];
        this.mahalleler = [];
        this.hizmet = this.hizmetService.getHizmet();
        this.getSehirList();
        this.getIlceList(this.hizmet.sehirKod);
        this.getMahalleList(this.hizmet.ilceKod);
        this.init();
    }
    MusteriBilgileriComponent.prototype.init = function () {
        this.evTel = this.hizmet.evTel;
        this.isTel = this.hizmet.isTel;
        this.cepTel = this.hizmet.gsmNo;
        this.adSoyad = "";
        if (this.util.isNotEmpty(this.hizmet.adi))
            this.adSoyad += this.hizmet.adi;
        if (this.util.isNotEmpty(this.hizmet.soyadi))
            this.adSoyad += " " + this.hizmet.soyadi;
    };
    MusteriBilgileriComponent.prototype.getSehirList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sehirler = [];
                        return [4 /*yield*/, this.adresDao.getSehirList().then(function (res) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    _this.sehirler.push(res.rows.item(i));
                                }
                                _this.logger.dir(res);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getIlceList(this.hizmet.sehirKod)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.onChangeSehir = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hizmet.ilceKod = "";
                        return [4 /*yield*/, this.getIlceList(this.hizmet.sehirKod)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.getIlceList = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var res, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.util.isNotEmpty(this.hizmet.sehirKod)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.adresDao.getIlceList(this.hizmet.sehirKod)];
                    case 1:
                        res = _a.sent();
                        this.ilceler = [];
                        for (i = 0; i < res.rows.length; i++) {
                            this.ilceler.push(res.rows.item(i));
                        }
                        this.setIlceValues();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.setIlceValues = function () {
        var _this = this;
        if (this.util.isNotEmpty(this.hizmet.ilceKod)) {
            var res = this.ilceler.filter(function (res) { return res.ilceKodu == _this.hizmet.ilceKod; });
            if (this.util.isNotEmpty(res) && res.length > 0) {
                this.hizmet.ilceAdi = res[0].ilceAdi;
            }
        }
    };
    MusteriBilgileriComponent.prototype.onChangeIlce = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hizmet.mahalleKodu = "";
                        this.setIlceValues();
                        return [4 /*yield*/, this.getMahalleList(this.hizmet.ilceKod)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.getMahalleList = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mahalleler = [];
                        return [4 /*yield*/, this.adresDao.getMahalleList(this.hizmet.ilceKod).then(function (res) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    _this.mahalleler.push(res.rows.item(i));
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.onChangeMahalle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onHizmetChange()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.onHizmetChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.logger.log("Musteri-Bilgileri- OnHizmetChange");
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _a.hizmet = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.isHizmetDisabled = function () {
        return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
    };
    MusteriBilgileriComponent.prototype.callPhoneNumber = function (tel) {
        this.plugins.callPhoneNumber(tel);
    };
    MusteriBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'musteri-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-Components\musteri-bilgileri\musteri-bilgileri.html"*/'<ion-row>\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Müşteri:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="adSoyad" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Ev Telefonu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <button ion-button icon-start full round (click)="callPhoneNumber(evTel)">\n\n      {{evTel}}\n\n    </button>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>İş Telefonu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <button ion-button icon-start full round (click)="callPhoneNumber(isTel)">\n\n      {{isTel}}\n\n    </button>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Cep Telefonu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <button ion-button icon-start full round (click)="callPhoneNumber(cepTel)">\n\n      {{cepTel}}\n\n    </button>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>E-Posta:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.eposta" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Şehir:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-select [(ngModel)]="hizmet.sehirKod" (ionChange)="onChangeSehir()" interface="popover">\n\n\n\n      <ion-option *ngFor="let sehir of sehirler" [disabled]="isHizmetDisabled()" [value]="sehir.sehirKodu">\n\n        {{sehir.sehirKodu}} - {{sehir.sehirAdi}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>İlçe:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-select [(ngModel)]="hizmet.ilceKod" (ionChange)="onChangeIlce()" interface="popover">\n\n\n\n      <ion-option *ngFor="let ilce of ilceler" [value]="ilce.ilceKodu" [disabled]="isHizmetDisabled()">\n\n        {{ilce.ilceKodu}} - {{ilce.ilceAdi}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Semt/Köy:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.semt" [disabled]="hizmet.durum != \'ACIK\'" (ionBlur)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Mahalle:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-select [(ngModel)]="hizmet.mahalleKodu" (ionChange)="onChangeMahalle()" interface="popover">\n\n\n\n      <ion-option *ngFor="let mahalle of mahalleler" [value]="mahalle.mahalleKodu" [disabled]="isHizmetDisabled()">\n\n        {{mahalle.mahalleKodu}} - {{mahalle.mahalleAdi}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Cadde:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.cadde" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Sokak:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.sokak" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Apartman/Site:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.aparman" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Apartman No:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.apartmanNo" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Blok:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.blok" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Daire No:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-input [(ngModel)]="hizmet.daireNo" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Servis Uyarı Notu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-textarea [(ngModel)]="hizmet.servisNotu" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()" readonly></ion-textarea>\n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-4 col-md-3>\n\n    <ion-label>\n\n      <strong>Merkez Uyarı Notu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-9>\n\n    <ion-textarea [(ngModel)]="hizmet.merkezNotu" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()" readonly></ion-textarea>\n\n  </ion-col>\n\n</ion-row>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-Components\musteri-bilgileri\musteri-bilgileri.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_adres_dao_adres_dao__["a" /* AdresDao */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_plugin_util_plugin__["a" /* UtilPlugin */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */]])
    ], MusteriBilgileriComponent);
    return MusteriBilgileriComponent;
}());

//# sourceMappingURL=musteri-bilgileri.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServisBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/



var ServisBilgileriComponent = (function () {
    function ServisBilgileriComponent(hizmetService) {
        this.hizmetService = hizmetService;
        this.activePage = "servis";
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__["a" /* Hizmet */]();
    }
    ServisBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'servis-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-bilgileri.html"*/'<ion-toolbar class="main-tabs">\n\n  <ion-segment [(ngModel)]="activePage" style="padding-top: 10px;">\n\n    <ion-segment-button value="servis">\n\n      İşlem Tarihleri\n\n    </ion-segment-button>\n\n\n\n    <ion-segment-button value="tarihce">\n\n      Tarihçe Bilgisi\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-toolbar>\n\n\n\n\n\n<div [ngSwitch]="activePage">\n\n  <div *ngSwitchCase="\'servis\'">\n\n    <islem-tarih></islem-tarih>\n\n  </div>\n\n\n\n  <div *ngSwitchCase="\'tarihce\'">\n\n    <servis-islem-tarihce></servis-islem-tarihce>\n\n  </div>\n\n</div>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-bilgileri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__["a" /* HizmetService */]])
    ], ServisBilgileriComponent);
    return ServisBilgileriComponent;
}());

//# sourceMappingURL=servis-bilgileri.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_search_urun_search__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_garanti_sorgu_garanti_sorgu__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_GarantiSorgu__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_seri_no_sorgu_seri_no_sorgu__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__update_urun_ana_grup_update_urun_ana_grup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__entities_ProcessResults__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_urun_urun__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__entities_urun__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__entities_Pageable__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_util_plugin_util_plugin__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



















var UrunBilgileriComponent = (function () {
    function UrunBilgileriComponent(modalController, hizmetService, logger, garantiSorguProvider, util, seriNoSorguProvider, urunProvider, plugins, urunAnaGrpDao) {
        this.modalController = modalController;
        this.hizmetService = hizmetService;
        this.logger = logger;
        this.garantiSorguProvider = garantiSorguProvider;
        this.util = util;
        this.seriNoSorguProvider = seriNoSorguProvider;
        this.urunProvider = urunProvider;
        this.plugins = plugins;
        this.urunAnaGrpDao = urunAnaGrpDao;
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.seriNoSayisi = 1;
        this.hizmet = this.hizmetService.getHizmet();
        this.init();
        this.findUrunAnaGrp();
        this.loadSeriNo2();
    }
    UrunBilgileriComponent.prototype.init = function () {
        this.garanti = this.util.isNotEmpty(this.hizmet.garanti) && this.hizmet.garanti == "VAR";
        this.mesguliyet = this.util.isNotEmpty(this.hizmet.mesguliyet) && this.hizmet.mesguliyet == "VAR";
        this.sattar = this.util.dateFormatRegex(this.hizmet.sattar, "yyyy-MM-dd");
        this.mesguliyetChange(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].NERDEN.INIT);
        this.garantiChange(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].NERDEN.INIT);
        this.faturaTarihiChange(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].NERDEN.INIT);
    };
    UrunBilgileriComponent.prototype.urunListesiniGetir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mamAnagrp, searchType, aramaModal;
            return __generator(this, function (_a) {
                mamAnagrp = this.hizmet.mamAnaGrp;
                searchType = __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT;
                aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__urun_search_urun_search__["a" /* UrunSearchComponent */], { data: { mamAnagrp: mamAnagrp, searchType: searchType } }, { cssClass: this.util.getSelectedTheme() });
                aramaModal.onDidDismiss(function (data) {
                    if (_this.util.isNotEmpty(data)) {
                        if (_this.util.isNotEmpty(data.mamKod))
                            _this.hizmet.mamKod = data.mamKod;
                        if (_this.util.isNotEmpty(data.mamAdi))
                            _this.hizmet.mamAdi = data.mamAdi;
                        if (_this.util.isNotEmpty(data.seriMetod)) {
                            _this.seriNoSayisi = Number(data.seriMetod);
                            _this.hizmet.seriMetod = data.seriMetod;
                        }
                        _this.saveHizmet();
                    }
                });
                aramaModal.present();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.urunAnaGrupDegistir = function () {
        var _this = this;
        var processResult = this.urunAnaGrupDegistirmeKontrol();
        if (processResult.isErrorMessagesNull()) {
            var anaGrpUpdateModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_13__update_urun_ana_grup_update_urun_ana_grup__["a" /* UpdateUrunAnaGrupComponent */], { hizmet: this.hizmet }, { cssClass: this.util.getSelectedTheme(), enableBackdropDismiss: false });
            anaGrpUpdateModal.onDidDismiss(function (res) {
                if (_this.util.isNotEmpty(res) && _this.util.isNotEmpty(res.hizmet)) {
                    _this.hizmet = res.hizmet;
                    _this.findUrunAnaGrp();
                }
            });
            anaGrpUpdateModal.present();
        }
        else {
            this.util.pushErrorMessages(processResult);
        }
    };
    UrunBilgileriComponent.prototype.urunAnaGrupDegistirmeKontrol = function () {
        var res = new __WEBPACK_IMPORTED_MODULE_14__entities_ProcessResults__["a" /* ProcessResults */]();
        var mamKodVarMi = this.util.isNotEmpty(this.hizmet.mamKod);
        if (mamKodVarMi) {
            res.addErrorMessage("Ürün Ana grubuna bağlı ürün bulundu.Önce ürünü siliniz.");
        }
        return res;
    };
    UrunBilgileriComponent.prototype.findUrunAnaGrp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var urunAnaGrp;
            return __generator(this, function (_a) {
                urunAnaGrp = new __WEBPACK_IMPORTED_MODULE_9__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
                urunAnaGrp.mamAnaGrp = this.hizmet.mamAnaGrp;
                this.urunAnaGrpDao.getList(urunAnaGrp, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT)
                    .then(function (res) {
                    if (res.rows.length > 0)
                        _this.hizmet.mamAnaGrpAdi = _this.util.isNotEmpty(res.rows) ? res.rows.item(0).ad : "";
                    _this.mamAnaGrpValue = _this.hizmet.mamAnaGrp + " - " + _this.hizmet.mamAnaGrpAdi;
                });
                this.saveHizmet();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.urunSil = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.util.isNotEmpty(this.hizmet.detayDtoList) &&
                    this.hizmet.detayDtoList.length > 0) {
                    this.util.error("Ürüne bağlı Parça/İşçilik/Yol mevcut.Silinemez.");
                    return [2 /*return*/, false];
                }
                this.hizmet.mamKod = "";
                this.hizmet.mamAdi = "";
                this.hizmet.mamSeriNo = "";
                this.hizmet.mamSeriNo2 = "";
                this.hizmet.seriMetod = null;
                this.seriNoSayisi = 1;
                this.saveHizmet();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.garantiSorgula = function () {
        var sorguData = new __WEBPACK_IMPORTED_MODULE_11__entities_GarantiSorgu__["a" /* GarantiSorgu */]();
        sorguData.mamKod = this.hizmet.mamKod;
        sorguData.dilKod = "T";
        sorguData.serKod = this.hizmet.serKod;
        sorguData.satisTarihi = this.util.dateFormat(new Date(this.hizmet.sattar), "YYYY-MM-DD");
        sorguData.mamSeriNo = this.hizmet.mamSeriNo;
        sorguData.islemTarihi = this.util.dateFormat(new Date(this.hizmet.islemTarihi), "YYYY-MM-DD");
        sorguData.orgKod = "ECA";
        var processResults = this.garantiSorgulaValidation(sorguData);
        if (processResults.isErrorMessagesNotNull())
            this.util.pushAllMessages(processResults);
        else
            this.garantiSorguProvider.fetchDataFromApi(sorguData);
    };
    UrunBilgileriComponent.prototype.garantiSorgulaValidation = function (sorguData) {
        var processResults = new __WEBPACK_IMPORTED_MODULE_14__entities_ProcessResults__["a" /* ProcessResults */]();
        if (this.util.isEmpty(sorguData.mamKod)) {
            processResults.addErrorMessage("Ürün kodu alanı boş olamaz.");
        }
        if (this.util.isEmpty(sorguData.mamSeriNo)) {
            processResults.addErrorMessage("Seri no alanı boş olamaz.");
        }
        if (this.util.isEmpty(this.hizmet.sattar)) {
            processResults.addErrorMessage("Fatura tarihi boş olamaz.");
        }
        if (this.util.isEmpty(this.hizmet.islemTarihi)) {
            processResults.addErrorMessage("Işlem tarihi boş olamaz.");
        }
        return processResults;
    };
    UrunBilgileriComponent.prototype.seriNoSorgula = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.util.isNotEmpty(this.hizmet.mamSeriNo)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.seriNoSorguProvider.fetchData(this.hizmet.mamSeriNo)];
                    case 1:
                        res = _a.sent();
                        this.logger.warn(res);
                        if (this.util.isOnline()) {
                            this.setSeriSorguResult(res);
                        }
                        else {
                            this.util.ifOffline();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.util.error("Seri No alanı sorgu için zorunludur.");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UrunBilgileriComponent.prototype.scanBarcode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plugins.scanBarcode()];
                    case 1:
                        result = _a.sent();
                        if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.text)) {
                            this.util.success(" Barcode Alındı: " + result.text);
                            this.hizmet.mamSeriNo = result.text;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UrunBilgileriComponent.prototype.setSeriSorguResult = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var item, anagrp, urunAnaGrp, mes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res.message))) return [3 /*break*/, 5];
                        item = res.message[0];
                        if (!(item.mamAnagrp == this.hizmet.mamAnaGrp)) return [3 /*break*/, 2];
                        this.hizmet.mamKod = item.mamKod;
                        this.hizmet.mamAdi = item.mamAdi;
                        this.hizmet.mamSeriNo = item.mamSerino;
                        return [4 /*yield*/, this.findSeriMetodSayisi(item.mamKod)];
                    case 1:
                        _a.sent();
                        this.util.info("Ürün bilgileri seri No bilgisine bağlı olarak değiştirildi.");
                        this.saveHizmet();
                        return [3 /*break*/, 4];
                    case 2:
                        anagrp = new __WEBPACK_IMPORTED_MODULE_9__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
                        anagrp.mamAnaGrp = item.mamAnagrp;
                        return [4 /*yield*/, this.urunAnaGrpDao.getList(anagrp, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT)];
                    case 3:
                        urunAnaGrp = _a.sent();
                        this.logger.warn(urunAnaGrp);
                        mes = "Sorguladığınız Seri No ";
                        if (urunAnaGrp.rows.length > 0) {
                            urunAnaGrp = urunAnaGrp.rows.item(0);
                            mes += urunAnaGrp.ad;
                        }
                        else {
                            mes += "başka bir";
                        }
                        this.util.warn(mes + " ana grubuna bağlıdır. Önce Ana Grubu Değiştiriniz.");
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.util.error("Bu Seri Numarasına bağlı ürün bulunamadı.Tekrar kontrol ediniz.");
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UrunBilgileriComponent.prototype.findSeriMetodSayisi = function (mamKod) {
        return __awaiter(this, void 0, void 0, function () {
            var res, seriMetod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.urunProvider.getUrunAndUrunAnaGrup(mamKod)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmptyRows(res)) {
                            seriMetod = res.rows.item(0).seriMetod;
                            if (this.util.isNotEmpty(seriMetod)) {
                                this.seriNoSayisi = Number(seriMetod);
                                this.hizmet.seriMetod = seriMetod;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UrunBilgileriComponent.prototype.mesguliyetChange = function (nerden) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.hizmet.mesguliyet = this.mesguliyet == true ? "VAR" : "YOK";
                if (nerden != __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].NERDEN.INIT)
                    this.saveHizmet();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.garantiChange = function (nerden) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.hizmet.garanti = this.garanti == true ? "VAR" : "YOK";
                if (nerden != __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].NERDEN.INIT)
                    this.saveHizmet();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.faturaTarihiChange = function (nerden) {
        this.hizmet.sattar = this.util.newDateTime(this.sattar);
        if (this.util.isNotEmpty(nerden) && nerden != __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].NERDEN.INIT)
            this.saveHizmet();
    };
    UrunBilgileriComponent.prototype.saveHizmet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _a.hizmet = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UrunBilgileriComponent.prototype.isHizmetDisabled = function () {
        return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
    };
    UrunBilgileriComponent.prototype.loadSeriNo2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.util.isNotEmpty(this.hizmet.seriMetod)) return [3 /*break*/, 1];
                        this.seriNoSayisi = Number(this.hizmet.seriMetod);
                        return [3 /*break*/, 3];
                    case 1:
                        if (!this.util.isNotEmpty(this.hizmet.mamKod)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.findUrunBilgileri()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UrunBilgileriComponent.prototype.findUrunBilgileri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filter, result, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filter = new __WEBPACK_IMPORTED_MODULE_16__entities_urun__["a" /* Urun */]();
                        filter.mamKod = this.hizmet.mamKod;
                        return [4 /*yield*/, this.urunProvider.getList(filter, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT, new __WEBPACK_IMPORTED_MODULE_17__entities_Pageable__["a" /* Pageable */]())];
                    case 1:
                        result = _a.sent();
                        if (this.util.isNotEmptyRows(result.res)) {
                            this.logger.dir(result.res);
                            item = result.res.rows.item(0);
                            if (this.util.isNotEmpty(item.seriMetod)) {
                                this.hizmet.seriMetod = item.seriMetod;
                                this.seriNoSayisi = Number(item.seriMetod);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UrunBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "urun-bilgileri",template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-Components\urun-bilgileri\urun-bilgileri.html"*/'<!-- Generated template for the UrunBilgileriComponent component -->\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="urunListesiniGetir()" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="list"></ion-icon>\n\n        Ürün Seç\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="urunSil()" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Ürün Sil\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="urunAnaGrupDegistir()" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="md-refresh"></ion-icon>\n\n        Ürün Ana Grup Değiştir\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="garantiSorgula()">\n\n        <ion-icon name="md-search"></ion-icon>\n\n        Garanti Sorgula\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n<ion-row class="urun-bilgileri">\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Ürün Ana Grubu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="mamAnaGrpValue" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Ürün Kodu:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.mamKod" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Ürün Adı:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.mamAdi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Seri No:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.mamSeriNo" (ionBlur)="saveHizmet()" [disabled]="isHizmetDisabled()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="seriNoSayisi != null && seriNoSayisi != 1">\n\n    <ion-label>\n\n      <strong>Seri No2:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="seriNoSayisi != null && seriNoSayisi != 1">\n\n    <ion-input [(ngModel)]="hizmet.mamSeriNo2" (ionBlur)="saveHizmet()" [disabled]="isHizmetDisabled()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6>\n\n    <button item-left ion-button icon-start full round (click)="seriNoSorgula()" [disabled]="isHizmetDisabled()" style="margin-top:13px;">\n\n      <span class="icon-right">\n\n        <i item-right class="fas fa-search"></i>\n\n      </span>\n\n      Seri No Sorgula\n\n    </button>\n\n  </ion-col>\n\n  <ion-col col-6 col-sm-12 col-md-6 col-lg-6 col-xl-6>\n\n    <button item-left ion-button icon-start full round (click)="scanBarcode()" [disabled]="isHizmetDisabled()" style="margin-top:13px;">\n\n      <span class="icon-right">\n\n        <i item-right class="fas fa-barcode"></i>\n\n      </span>Barkod Oku\n\n    </button>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Fatura Tarihi:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-datetime [(ngModel)]="sattar" (ionChange)="faturaTarihiChange(\'HTML\')" [disabled]="isHizmetDisabled()" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Garanti:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-6 col-md-10>\n\n    <ion-label class="radio-btn pull-left" style="text-align: end;position: relative;">\n\n      {{garanti == true ? \'VAR\' : \'YOK\'}}\n\n    </ion-label>\n\n    <ion-toggle [(ngModel)]="garanti" (ionChange)="garantiChange(\'HTML\')" class="toggle-btn pull-left"></ion-toggle>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label>\n\n      <strong>Meşguliyet:</strong>\n\n    </ion-label>\n\n  </ion-col>\n\n  <ion-col col-6 col-md-10>\n\n    <ion-label class="radio-btn pull-left" style="text-align: end;position: relative;">\n\n      {{mesguliyet == true ? \'VAR\' : \'YOK\'}}\n\n    </ion-label>\n\n    <ion-toggle [(ngModel)]="mesguliyet" (ionChange)="mesguliyetChange(\'HTML\')" class="toggle-btn pull-left"></ion-toggle>\n\n  </ion-col>\n\n\n\n\n\n</ion-row>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-Components\urun-bilgileri\urun-bilgileri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_seri_no_sorgu_seri_no_sorgu__["a" /* SeriNoSorguProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_urun_urun__["a" /* UrunProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_util_plugin_util_plugin__["a" /* UtilPlugin */],
            __WEBPACK_IMPORTED_MODULE_8__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */]])
    ], UrunBilgileriComponent);
    return UrunBilgileriComponent;
}());

//# sourceMappingURL=urun-bilgileri.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetayBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_urunAnaGrup__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hizmet_detay_hizmet_detay__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_printer_service_printer_service__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_hizmet_hizmet__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_ProcessResults__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_fiyat_fiyat__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__anket_anket__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_anket_service_anket_service__ = __webpack_require__(182);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var DURUM;
(function (DURUM) {
    DURUM["ACIK"] = "ACIK";
    DURUM["KAPALI"] = "KAPALI";
    DURUM["IPTAL"] = "IPTAL";
})(DURUM || (DURUM = {}));
var ISTEK;
(function (ISTEK) {
    ISTEK["EVET"] = "E";
    ISTEK["HAYIR"] = "H";
})(ISTEK || (ISTEK = {}));
var DetayBilgileriComponent = (function () {
    function DetayBilgileriComponent(hizmetService, urunAnaGrupDao, modalCtrl, util, logger, alertCtrl, nav, hizmetProvider, fiyatProvider, anketService, printService) {
        this.hizmetService = hizmetService;
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.logger = logger;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.hizmetProvider = hizmetProvider;
        this.fiyatProvider = fiyatProvider;
        this.anketService = anketService;
        this.printService = printService;
        this.showDetails = 1;
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.cozumKoduList = [];
        this.verilerSunucuyaKayitEdildiMi = false;
        this.toplamTutar = 0;
        this.isAnketExist = false;
        this.hizmet = this.hizmetService.getHizmet();
        this.loadCozumKoduList();
        this.loadletisimIstek();
        this.loadDetayFiyatlari();
        this.loadAnketBilgileri();
    }
    DetayBilgileriComponent.prototype.getHizmet = function () {
        this.hizmet = this.hizmetService.getHizmet();
    };
    DetayBilgileriComponent.prototype.toggleDetails = function () {
        this.showDetails = -1 * this.showDetails;
    };
    DetayBilgileriComponent.prototype.loadDetayList = function () {
        var _this = this;
        if (this.util.isNotEmpty(this.hizmet.detayDtoList)) {
            this.detayList = this.hizmet.detayDtoList;
            this.toplamTutar = 0;
            this.detayList.forEach(function (item) {
                if (_this.util.isNotEmpty(item.tutar))
                    _this.toplamTutar += Number(item.tutar);
            });
            this.toplamTutar = Number((this.toplamTutar * 1.18).toFixed(2));
        }
    };
    DetayBilgileriComponent.prototype.loadCozumKoduList = function () {
        var _this = this;
        var filter = new __WEBPACK_IMPORTED_MODULE_5__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.COZUM_LISTE);
        this.urunAnaGrupDao.getList(filter, __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT).then(function (res) {
            _this.logger.dir(res);
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this.cozumKoduList.push(res.rows.item(i));
                }
            }
        });
    };
    DetayBilgileriComponent.prototype.hizmetDetayaGit = function () {
        var _this = this;
        if (this.util.isNotEmpty(this.hizmet.mamKod)) {
            var detayModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__hizmet_detay_hizmet_detay__["a" /* HizmetDetayComponent */], { data: { detay: "" } }, { cssClass: this.util.getSelectedTheme() });
            detayModal.onDidDismiss(function (res) {
                _this.logger.dir(res);
                _this.updateHizmet('INSERT');
            });
            detayModal.present();
        }
        else {
            this.util.warn('Ürün bilgisi seçilmeden detay girilemez.');
        }
    };
    DetayBilgileriComponent.prototype.updateHizmetDetay = function (item) {
        var _this = this;
        var detayModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__hizmet_detay_hizmet_detay__["a" /* HizmetDetayComponent */], { data: { hizmetDetay: item } }, { cssClass: this.util.getSelectedTheme() });
        detayModal.onDidDismiss(function (res) {
            _this.logger.dir(res);
            _this.updateHizmet('NEW');
        });
        detayModal.present();
    };
    DetayBilgileriComponent.prototype.deleteHizmetDetay = function (item) {
        var index = this.detayList.indexOf(item);
        if (index > -1) {
            this.detayList.splice(index, 1);
        }
        this.hizmet.detayDtoList = this.detayList;
        this.updateHizmet('DELETE');
    };
    DetayBilgileriComponent.prototype.yazdir = function () {
        this.printService.showPrinterList(this.hizmet);
    };
    DetayBilgileriComponent.prototype.kapat = function (durum) {
        return __awaiter(this, void 0, void 0, function () {
            var result, kapatmaHizmet, isAnketKayitOK;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = this.kapatmaKontrol();
                        if (!result.isErrorMessagesNull()) return [3 /*break*/, 5];
                        kapatmaHizmet = this.util.assign(this.hizmet);
                        return [4 /*yield*/, this.anketVerileriniKaydet(kapatmaHizmet)];
                    case 1:
                        isAnketKayitOK = _a.sent();
                        if (!isAnketKayitOK) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.hizmetiSunucuyaKaydet(durum, kapatmaHizmet)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.logger.error("Anket Kayıt Sırasında hata oluştu.");
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.util.pushAllMessages(result);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.hizmetiSunucuyaKaydet = function (durum, kapatmaHizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        kapatmaHizmet = this.hizmetService.sunucuyaKayitIcinHazirla(kapatmaHizmet);
                        kapatmaHizmet.durum = durum;
                        this.verilerSunucuyaKayitEdildiMi = durum != DURUM.ACIK;
                        this.util.loaderStart(false);
                        return [4 /*yield*/, this.hizmetProvider.updateCagri(kapatmaHizmet, "HAYIR")];
                    case 1:
                        res = _a.sent();
                        this.util.loaderEnd();
                        this.logger.dir(res);
                        if (this.util.isOnline()) {
                            this.setCagriKapatSonuc(res, kapatmaHizmet);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.anketVerileriniKaydet = function (hizmetData) {
        return __awaiter(this, void 0, void 0, function () {
            var anketKayitSonuc, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.anketService.saveDataToApi(hizmetData)];
                    case 1:
                        anketKayitSonuc = _a.sent();
                        status = __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].STATUS.ERROR;
                        if (this.util.isNotEmpty(anketKayitSonuc) && anketKayitSonuc == __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].STATUS.SUCCESS) {
                            this.logger.success("Anket Kayıt Edildi");
                            status = __WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].STATUS.SUCCESS;
                        }
                        else {
                            this.logger.error("Anket kayıt edilirken hata alındı.");
                        }
                        return [2 /*return*/, new Promise(function (res) { return res(status); })];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.setCagriKapatSonuc = function (res, kapatmaHizmet) {
        return __awaiter(this, void 0, void 0, function () {
            var hizmetFormuKapatildiMi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (res.responseCode == "FAIL") {
                            this.util.error(res.description);
                            this.hizmet.durum = DURUM.ACIK;
                        }
                        else {
                            if (kapatmaHizmet.durum != DURUM.KAPALI)
                                this.kapat(DURUM.KAPALI);
                        }
                        hizmetFormuKapatildiMi = this.verilerSunucuyaKayitEdildiMi
                            && this.util.isNotEmpty(res.responseCode)
                            && res.responseCode == "SUCCESS"
                            && res.description == "CLOSED";
                        return [4 /*yield*/, this.hizmetService.hizmetDurumunuDegistir(this.hizmet, res)];
                    case 1:
                        _a.sent();
                        if (hizmetFormuKapatildiMi) {
                            this.navigate("CagrilarPage", "Çağrı Kayıt Edildi.");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.siparisOlustur = function () {
        return __awaiter(this, void 0, void 0, function () {
            var siparisHizmet, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.util.loaderStart(false);
                        siparisHizmet = this.hizmetService.sunucuyaKayitIcinHazirla(this.hizmet);
                        return [4 /*yield*/, this.hizmetProvider.updateCagri(siparisHizmet, "EVET")];
                    case 1:
                        res = _a.sent();
                        if (this.util.isOnline()) {
                            this.setSiparisOlusturmaSonuc(res);
                        }
                        this.logger.dir(res);
                        this.util.loaderEnd();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.setSiparisOlusturmaSonuc = function (res) {
        if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode)) {
            if (res.responseCode == "FAIL") {
                if (this.util.isEmpty(res.description) || res.description == "null")
                    res.description = "Sipariş oluşturma da hata oluştu.";
                this.util.error(res.description);
                this.fillHizmet(res);
            }
            else if (res.responseCode == "SUCCESS") {
                this.util.success("Siparişiniz başarıyla oluşturuldu.");
                this.fillHizmet(res);
            }
            else {
                this.util.error("Sipariş oluşturmada bir hata oluştu.");
            }
        }
    };
    DetayBilgileriComponent.prototype.fillHizmet = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.util.isNotEmpty(res.message)) return [3 /*break*/, 2];
                        this.hizmet.durum = res.message.durum;
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _a.hizmet = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.updateHizmet = function (nerden) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(nerden == 'DELETE')) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _a.hizmet = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.hizmetService.getHizmetBySeqNo(this.hizmet.seqNo)];
                    case 3:
                        _b.hizmet = _c.sent();
                        _c.label = 4;
                    case 4:
                        this.loadDetayList();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.kapatmaKontrol = function () {
        this.logger.dir(this.hizmet);
        var result = new __WEBPACK_IMPORTED_MODULE_12__entities_ProcessResults__["a" /* ProcessResults */]();
        if (this.util.isEmpty(this.hizmet.sattar)) {
            result.addErrorMessage("Fatura tarihi boş bırakılamaz.");
        }
        if (this.util.isEmpty(this.hizmet.detayDtoList) || !(this.hizmet.detayDtoList.length > 0)) {
            result.addErrorMessage("Parça/Işçilik/Yol Seçilmelidir.");
        }
        if (this.util.isEmpty(this.hizmet.aciklama)) {
            result.addErrorMessage("Açıklama alanı boş bırakılamaz.");
        }
        if (this.util.isEmpty(this.hizmet.kapatmaKodu)) {
            result.addErrorMessage("Kapatma şekli boş bırakılamaz.");
        }
        if (this.util.isEmpty(this.hizmet.odemeTipi)) {
            result.addErrorMessage("Ödeme tipi boş bırakılamaz.");
        }
        if (this.util.isEmpty(this.hizmet.cozumKodu)) {
            result.addErrorMessage("Çözüm Kodu boş bırakılamaz.");
        }
        if (this.util.isEmpty(this.hizmet.islemBitTarihi)) {
            result.addErrorMessage("Işlem bitiş tarihi boş bırakılamaz.");
        }
        result = this.checkAnketIsFull(result);
        return result;
    };
    DetayBilgileriComponent.prototype.checkAnketIsFull = function (result) {
        var anket = this.hizmet.anket;
        if (this.isAnketExist) {
            if (this.util.isEmpty(anket.anketCevaplar) || anket.anketCevaplar.length != anket.anketSorular.length) {
                result.addErrorMessage("Anket Sorularının tamamı cevaplanması gerekiyor!");
            }
        }
        return result;
    };
    DetayBilgileriComponent.prototype.iletisimIstekChange = function () {
        this.hizmet.iletisimIstek = this.iletisimIstek ? ISTEK.EVET : ISTEK.HAYIR;
    };
    DetayBilgileriComponent.prototype.loadletisimIstek = function () {
        var istek = this.util.getSystemParam("ILET_IST_DFALT");
        this.logger.warn("Iletişim Istek: " + this.hizmet.iletisimIstek + " Default : " + istek);
        if (this.util.isEmpty(this.hizmet.iletisimIstek)) {
            this.iletisimIstek = istek == 'E';
            this.hizmet.iletisimIstek = this.iletisimIstek ? ISTEK.EVET : ISTEK.HAYIR;
        }
        else {
            this.iletisimIstek = this.hizmet.iletisimIstek == ISTEK.EVET;
        }
    };
    DetayBilgileriComponent.prototype.hizmetSilKontrol = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Silmek Istediğinizden Emin misiniz?',
            message: 'Yaptığınız değişiklikleri kaybedeceksiniz.',
            buttons: [
                {
                    text: 'Sil',
                    handler: function () {
                        _this.logger.warn("Silme Işlemi Onaylandı.");
                        _this.hizmetiSil();
                    }
                },
                {
                    text: 'Iptal',
                    handler: function () {
                        _this.logger.warn("Silme Işlemi Iptal Edildi");
                    }
                }
            ]
        });
        alert.present();
    };
    DetayBilgileriComponent.prototype.hizmetiSil = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.util.loaderStart(false);
                        return [4 /*yield*/, this.hizmetService.deleteHizmet(this.hizmet.seqNo)];
                    case 1:
                        _a.sent();
                        this.util.loaderEnd();
                        this.navigate('CagrilarPage', "Çağrı Silindi");
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.hizmetIptalKontrol = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Iptal etmek istediğinize emin misiniz?',
            message: 'Bu işlemi geri alamazsınız.',
            buttons: [
                {
                    text: 'EVET',
                    handler: function () {
                        _this.logger.warn("Iptal Işlemi Onaylandı.");
                        _this.hizmetIptal();
                    }
                },
                {
                    text: 'Iptal',
                    handler: function () {
                        _this.logger.warn("Hizmet Iptal Işlemi Iptal Edildi");
                    }
                }
            ]
        });
        alert.present();
    };
    DetayBilgileriComponent.prototype.hizmetIptal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var iptalHizmet, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.util.loaderStart(false);
                        this.hizmet.durum = DURUM.IPTAL;
                        iptalHizmet = this.hizmetService.sunucuyaKayitIcinHazirla(this.hizmet);
                        return [4 /*yield*/, this.hizmetProvider.updateCagri(iptalHizmet, "HAYIR")];
                    case 1:
                        res = _a.sent();
                        this.logger.dir(res);
                        if (this.util.isOnline()) {
                            this.setHizmetIptalSonuc(res);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.setHizmetIptalSonuc = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode) && res.responseCode == "SUCCESS")) return [3 /*break*/, 2];
                        this.hizmet.durum = DURUM.IPTAL;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _c.sent();
                        this.util.loaderEnd();
                        this.navigate('CagrilarPage', "Çağrı iptal edildi.");
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode))) return [3 /*break*/, 4];
                        this.hizmet.durum = DURUM.ACIK;
                        this.util.error(res.description);
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 3:
                        _a.hizmet = _c.sent();
                        this.util.loaderEnd();
                        return [3 /*break*/, 6];
                    case 4:
                        _b = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 5:
                        _b.hizmet = _c.sent();
                        this.util.error("Iptal etme işlemi sırasında hata oluştu.");
                        this.util.loaderEnd();
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.navigate = function (path, message) {
        var _this = this;
        this.logger.warn("Navigating: " + path);
        setTimeout(function () { return _this.nav.push(path); }, 1000);
        if (this.util.isNotEmpty(message))
            this.util.info(message);
    };
    DetayBilgileriComponent.prototype.onHizmetChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _a.hizmet = _b.sent();
                        this.logger.warn("Hizmet Durumu" + this.hizmet.durum);
                        return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.isHizmetDisabled = function () {
        return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
    };
    DetayBilgileriComponent.prototype.loadDetayFiyatlari = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dtoList, i, dto;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dtoList = this.hizmet.detayDtoList;
                        if (!this.util.isNotEmpty(dtoList)) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < dtoList.length)) return [3 /*break*/, 4];
                        dto = dtoList[i];
                        return [4 /*yield*/, this.findDetayFiyat(dto)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.loadDetayList();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.findDetayFiyat = function (detay) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.util.isEmpty(detay.birimFiyat) || detay.birimFiyat == 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fiyatProvider.findFiyat(detay, this.hizmet.mamKod)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmpty(res)) {
                            detay.birimFiyat = res.fiyat;
                            detay.garFiyat = res.gdfiyat;
                            detay.tutar = Number(detay.birimFiyat) * detay.miktar;
                            detay.garTutar = String(Number(detay.garFiyat) * detay.miktar);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.loadAnketBilgileri = function () {
        if (this.util.isNotEmpty(this.hizmet.anket) && this.util.isNotEmpty(this.hizmet.anket.anketMst)) {
            this.isAnketExist = true;
        }
    };
    DetayBilgileriComponent.prototype.goToAnketPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__anket_anket__["a" /* AnketComponent */], { data: { hizmet: this.hizmet } }, { cssClass: this.util.getSelectedTheme() });
        modal.present();
    };
    DetayBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'detay-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\detay-bilgileri\detay-bilgileri.html"*/'<ion-grid class="detay">\n\n  <ion-row>\n\n    <ion-col col-5 col-md-5 col-sm>\n\n      <button ion-button primary round full (click)="hizmetDetayaGit()" [disabled]="isHizmetDisabled()">\n\n        <span class="icon-right">\n\n          <i class="fas fa-plus"></i>\n\n        </span>\n\n        Yeni\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-7 col-sm>\n\n      <button ion-button primary round full [disabled]="isHizmetDisabled()" (click)="siparisOlustur()">\n\n        <span class="icon-right">\n\n          <ion-icon class="mr-icon" name="basket"></ion-icon>\n\n        </span>\n\n        Sipariş Oluştur\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-grid *ngIf="detayList != null && detayList.length > 0" class="card-box1 detail-item">\n\n  <!--ion-row style="font-weight: bold" class="row-border">\n\n    <ion-item>\n\n      <ion-label>İşlem Tipi</ion-label>\n\n      <ion-label>İşlem Kodu</ion-label>\n\n      <ion-label>Miktar</ion-label>\n\n      <ion-label>Tutar</ion-label>\n\n    </ion-item>\n\n\n\n  </ion-row-->\n\n\n\n  <ion-list class="detail-item-list">\n\n\n\n    <ion-item class="detail-list-header">\n\n      <div style="width: 15%; float: left; font-weight: bold;">Tip</div>\n\n      <div style="width: 60%; float: left; font-weight: bold;">İşlem Kodu</div>\n\n      <div style="width: 10%; float: left; font-weight: bold;">M.</div>\n\n      <div style="width: 15%; float: left; font-weight: bold;">Tutar</div>\n\n    </ion-item>\n\n\n\n    <ion-item-sliding class="detay-list-sliding" *ngFor="let detay of detayList" #item>\n\n      <ion-item class="detay-list-item">\n\n\n\n        <div style="width: 15%; float: left;">{{detay.mlzIsc}}</div>\n\n        <div style="width: 60%; float: left; white-space: normal">\n\n          {{detay.mlzIscKod}} - {{detay.aciklama}}\n\n        </div>\n\n\n\n        <div style="width: 10%; float: left;">{{detay.miktar}}</div>\n\n        <div style="width: 15%; float: left;">{{detay.tutar}}</div>\n\n\n\n      </ion-item>\n\n\n\n      <ion-item-options class="green" side="right">\n\n        <button ion-button icon-only (click)="updateHizmetDetay(detay)" [disabled]="isHizmetDisabled()"\n\n                style="background-color:#f89406; width: 20%">\n\n          <i class="fas fa-edit" style="margin-right:0"></i>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="deleteHizmetDetay(detay)" [disabled]="isHizmetDisabled()"\n\n                style="background-color:#bd362f; width: 20%">\n\n          <i class="fas fa-trash-alt" style="margin-right:0"></i>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <!--ion-row *ngFor="let detay of detayList" class="row-border">\n\n    <ion-col col-md-2 col-lg-2 col-xl-2 col-sm-2>\n\n      <ion-label>{{detay.mlzIsc}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-md-4 col-lg-4 col-xl-4 col-sm-4 style="overflow: overlay; white-space: nowrap;">\n\n      <ion-label>{{detay.mlzIscKod}} - {{detay.aciklama}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-md-2 col-lg-2 col-xl-2 col-sm-2 style="text-align: right">\n\n      <ion-label>{{detay.miktar}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-md-2 col-lg-2 col-xl-2 col-sm-2 style="text-align: right">\n\n      <ion-label>{{detay.tutar}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-md-2 col-lg-2 col-xl-2 col-sm-2>\n\n      <ion-row>\n\n\n\n        <ion-col col-6>\n\n          <button ion-button icon-only (click)="updateHizmetDetay(detay)" table-button style="width: 100%"\n\n                  [disabled]="isHizmetDisabled()"\n\n                  color="colorinfo">\n\n            <i class="fas fa-edit" style="margin-right:0"></i>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6>\n\n          <button ion-button icon-only (click)="deleteHizmetDetay(detay)" table-button style="width: 100%"\n\n                  color="colorerror" [disabled]="isHizmetDisabled()">\n\n            <i class="fas fa-trash-alt" style="margin-right:0"></i>\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row-->\n\n\n\n  <ion-row>\n\n\n\n    <ion-col col-md-10 col-lg-10 col-xl-10 col-sm-10>\n\n      <ion-label>KDV\'li Toplam Tutar</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-md-2 col-lg-2 col-xl-2 col-sm-2 >\n\n      <ion-label>{{toplamTutar}}</ion-label>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-sm class="detay">\n\n      <button ion-button primary round full (click)="toggleDetails()">\n\n        <span class="icon-right">\n\n          <ion-icon name="arrow-down" class="mr-icon"></ion-icon>\n\n        </span>\n\n        Kapatma İşlemleri\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div id="divKapatmaIslemleri" class="card-box1" *ngIf="showDetails == -1">\n\n    <ion-grid>\n\n      <ion-row>\n\n\n\n        <ion-col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2>\n\n          <button ion-button round (click)="kapat(\'ACIK\')" [disabled]="isHizmetDisabled()" full>\n\n            <span class="icon-right">\n\n              <i class="fas fa-times"></i>\n\n            </span>\n\n            Kapat\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2>\n\n          <button ion-button round [disabled]="isHizmetDisabled()" (click)="hizmetIptalKontrol()" full>\n\n            <span class="icon-right">\n\n              <i class="fas fa-ban"></i>\n\n            </span>İptal\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2>\n\n          <button ion-button round (click)="yazdir()" full>\n\n            <span class="icon-right">\n\n              <i class="fas fa-print"></i>\n\n            </span>Yazdır\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2>\n\n          <button ion-button round [disabled]="isHizmetDisabled()" (click)="hizmetSilKontrol()" full>\n\n            <span class="icon-right">\n\n              <i class="fas fa-trash-alt"></i>\n\n            </span>\n\n            Sil\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 *ngIf="isAnketExist">\n\n          <button ion-button round (click)="goToAnketPage()" full>\n\n            <span class="icon-right">\n\n              <i class="fas fa-clipboard-list"></i>\n\n            </span> Anket\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label>\n\n          <strong>Açıklama:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-textarea [(ngModel)]="hizmet.aciklama" [disabled]="isHizmetDisabled()"\n\n                      (ionBlur)="onHizmetChange()"></ion-textarea>\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label>\n\n          <strong>Kapatma Şekli:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-select [(ngModel)]="hizmet.kapatmaKodu" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"\n\n                    interface="popover">\n\n          <ion-option value="NORMAL">Normal Kapatma</ion-option>\n\n          <ion-option value="MESGULIYET">Meşguliyet Kapatma</ion-option>\n\n        </ion-select>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label>\n\n          <strong>Ödeme Tipi:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-select [(ngModel)]="hizmet.odemeTipi" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"\n\n                    interface="popover">\n\n          <ion-option value="NAKIT">Nakit</ion-option>\n\n          <ion-option value="KREDIKARTI">Kredi Kartı</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label>\n\n          <strong>Çözüm Kodu:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-select [(ngModel)]="hizmet.cozumKodu" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"\n\n                    interface="popover">\n\n          <ion-option *ngFor="let cozum of cozumKoduList" [value]="cozum.kod">{{cozum.ad}}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label>\n\n          <strong>İletişim İstek:</strong>\n\n        </ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 col-md-4>\n\n\n\n        <ion-label color="primary" class="radio-btn pull-left" style="text-align: end;position: relative;">\n\n          {{iletisimIstek == true ? \'EVET\' : \'HAYIR\'}}\n\n\n\n        </ion-label>\n\n        <ion-toggle (ionChange)="iletisimIstekChange()" class="toggle-btn pull-left" style="text-align: end;"\n\n                    [disabled]="isHizmetDisabled()"\n\n                    [(ngModel)]="iletisimIstek"></ion-toggle>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </div>\n\n</ion-list>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\detay-bilgileri\detay-bilgileri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_hizmet_hizmet__["a" /* HizmetProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_fiyat_fiyat__["a" /* FiyatProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_anket_service_anket_service__["a" /* AnketService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_printer_service_printer_service__["a" /* PrinterService */]])
    ], DetayBilgileriComponent);
    return DetayBilgileriComponent;
}());

//# sourceMappingURL=detay-bilgileri.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemTarihComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_islemList__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_ProcessResults__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__ = __webpack_require__(9);
/**
 * @author malisahin
 * @since 17.04.2018
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var Durum;
(function (Durum) {
    Durum["BASLA"] = "BASLA";
    Durum["BEKLE"] = "BEKLE";
    Durum["BITIR"] = "BITIR";
    Durum["OK"] = "OK";
})(Durum || (Durum = {}));
var IslemTarihComponent = (function () {
    function IslemTarihComponent(hizmetService, logger, util) {
        this.hizmetService = hizmetService;
        this.logger = logger;
        this.util = util;
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.isenabled = true;
        this.islemBitmisMi = "";
        this.buttonStatus = Durum.BASLA;
        this.islemList = [];
        this.hizmet = this.hizmetService.getHizmet();
        this.formatIslemListDates();
        this.init();
    }
    IslemTarihComponent.prototype.init = function () {
        if (this.util.isNotEmpty(this.hizmet.islemList)) {
            this.islemList = this.hizmet.islemList;
        }
        this.loadTarihce();
    };
    IslemTarihComponent.prototype.islemBaslat = function () {
        this.sonIslem.basTar = new Date().getTime();
        this.hizmet.islemTarihi = this.sonIslem.basTar;
        this.checkStatus();
        this.setButtonStatus();
        this.logger.log("Işlem Başlatıldı. Başlatma Anı" + this.sonIslem.basTar);
    };
    IslemTarihComponent.prototype.islemBeklet = function () {
        var res = this.islemBeklemeKontrol();
        if (res.isErrorMessagesNotNull()) {
            this.util.pushErrorMessages(res);
        }
        else {
            this.sonIslem.bitTar = this.util.addMinutes(new Date, 1).getTime();
            this.sonIslem.durum = Durum.BEKLE;
            this.checkStatus();
            this.sonIslem = new __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_islemList__["a" /* IslemList */]();
            this.setButtonStatus();
            this.logger.log("Işlem Bekletildi. Bekleme Nedeni :" + this.sonIslem.beklemeNeden + " Bekleme Kaynağı: " + this.sonIslem.bekleKaynak + " Bekletilme Anı" + this.sonIslem.basTar);
        }
    };
    IslemTarihComponent.prototype.islemBeklemeKontrol = function () {
        var res = new __WEBPACK_IMPORTED_MODULE_5__entities_ProcessResults__["a" /* ProcessResults */]();
        if (this.util.isEmpty(this.sonIslem.bekleKaynak)) {
            res.errorMessages.push("Bekleme kaynağı boş olamaz");
        }
        else if (this.util.isEmpty(this.sonIslem.beklemeNeden)) {
            res.errorMessages.push("Bekleme Nedeni boş olamaz.");
        }
        return res;
    };
    IslemTarihComponent.prototype.islemBitir = function () {
        this.sonIslem.bitTar = this.util.addMinutes(new Date, 1).getTime();
        this.sonIslem.durum = Durum.BITIR;
        this.hizmet.islemBitTarihi = this.sonIslem.bitTar;
        this.checkStatus();
        this.setButtonStatus();
        this.logger.log("Işlem Bitirildi. Bitirilme Anı" + this.sonIslem.bitTar);
    };
    IslemTarihComponent.prototype.loadTarihce = function () {
        var islemKaydiVarMi = this.util.isNotEmpty(this.islemList) && this.islemList.length > 0;
        if (islemKaydiVarMi) {
            this.sonIslemiBul();
        }
        else {
            this.yeniIslemEkle("1");
        }
    };
    IslemTarihComponent.prototype.yeniIslemEkle = function (islemSira) {
        this.sonIslem = new __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_islemList__["a" /* IslemList */]();
        this.sonIslem.islSira = islemSira;
        this.sonIslem.seqNo = this.hizmet.seqNo;
        this.islemList.push(this.sonIslem);
        this.checkStatus();
    };
    IslemTarihComponent.prototype.sonIslemiBul = function () {
        var _this = this;
        var sonIslemSira = 0;
        this.islemList.forEach(function (islem) {
            if (Number(islem.islSira) > sonIslemSira) {
                _this.sonIslem = islem;
            }
        });
        if (this.sonIslem.durum != Durum.BITIR && this.util.isNotEmpty(this.sonIslem.basTar) && this.util.isNotEmpty(this.sonIslem.bitTar)) {
            this.yeniIslemEkle(String(Number(this.sonIslem.islSira) + 1));
        }
        this.setButtonStatus();
    };
    IslemTarihComponent.prototype.checkStatus = function () {
        this.logger.dir(this.sonIslem);
        var beklemeParamSecilmisMi = this.util.isNotEmpty(this.sonIslem.bekleKaynak) || this.util.isNotEmpty(this.sonIslem.beklemeNeden);
        if (beklemeParamSecilmisMi) {
            this.sonIslem.durum = Durum.BEKLE;
        }
        else if (this.util.isNotEmpty(this.sonIslem.bitTar)) {
            this.sonIslem.durum = Durum.BITIR;
        }
        this.updateTarihceList();
        this.setButtonStatus();
    };
    IslemTarihComponent.prototype.setButtonStatus = function () {
        var beklemeParamSecilmisMi = this.util.isNotEmpty(this.sonIslem.bekleKaynak) || this.util.isNotEmpty(this.sonIslem.beklemeNeden);
        if (this.util.isEmpty(this.sonIslem.basTar)) {
            this.buttonStatus = Durum.BASLA;
        }
        else if (beklemeParamSecilmisMi) {
            this.buttonStatus = Durum.BEKLE;
        }
        else if (this.util.isEmpty(this.sonIslem.bitTar)) {
            this.buttonStatus = Durum.BITIR;
        }
        else {
            this.buttonStatus = Durum.OK;
        }
        if (this.util.isNotEmpty(this.sonIslem)) {
            if (this.util.isNotEmpty(this.sonIslem.basTar)) {
                this.hizmet.islemTarihi = this.sonIslem.basTar;
            }
            if (this.util.isNotEmpty(this.sonIslem.bitTar) && (this.sonIslem.durum == Durum.BITIR || this.sonIslem.durum == Durum.OK)) {
                this.hizmet.islemBitTarihi = this.sonIslem.bitTar;
            }
        }
    };
    IslemTarihComponent.prototype.updateTarihceList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.checkIslemKayitEdilebilme()) return [3 /*break*/, 2];
                        /* this.hizmet.islemList.forEach(item => {
                         if (item.islSira == this.sonIslem.islSira) {
                         item = this.sonIslem;
                         }
                         });*/
                        this.hizmet.islemList = this.islemList;
                        //this.logger.table(this.hizmet.islemList);
                        return [4 /*yield*/, this.hizmetService.saveHizmet()];
                    case 1:
                        //this.logger.table(this.hizmet.islemList);
                        _a.sent();
                        this.loadTarihce();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    IslemTarihComponent.prototype.checkIslemKayitEdilebilme = function () {
        var saveable = false;
        var islemBaslatKosullari = this.sonIslem.durum == Durum.BASLA && this.util.isNotEmpty(this.sonIslem.basTar);
        var islemBekletmeKosullari = this.sonIslem.durum == Durum.BEKLE && this.util.isNotEmpty(this.sonIslem.bitTar)
            && this.util.isNotEmpty(this.sonIslem.bekleKaynak) && this.util.isNotEmpty(this.sonIslem.beklemeNeden);
        var islemBitirmeKosullari = this.sonIslem.durum == Durum.BITIR && this.util.isNotEmpty(this.sonIslem.bitTar);
        if (islemBaslatKosullari || islemBekletmeKosullari || islemBitirmeKosullari) {
            this.logger.log("Işlem Kayıt Ediliyor. Yeni DURUM : " + this.sonIslem.durum);
            saveable = true;
        }
        return saveable;
    };
    IslemTarihComponent.prototype.formatIslemListDates = function () {
        var _this = this;
        if (this.util.isNotEmpty(this.hizmet.islemList)) {
            this.hizmet.islemList.forEach(function (item) {
                if (_this.util.isNotEmpty(item.basTar)) {
                    //item.basTar = this.util.dateFormatRegex(new Date(item.basTar), this.DATE_FORMAT);
                }
                if (_this.util.isNotEmpty(item.bitTar)) {
                    //item.bitTar = this.util.dateFormatRegex(new Date(item.bitTar), this.DATE_FORMAT);
                }
            });
        }
    };
    IslemTarihComponent.prototype.isHizmetDisabled = function () {
        return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
    };
    IslemTarihComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'islem-tarih',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\islem-tarih\islem-tarih.html"*/'<ion-card class="card-box1">\n\n  <ion-row class="row-border">\n\n    <ion-col col-4 class="border-right">\n\n      <ion-label>\n\n        <strong>İşlem Başlangıç Tarihi:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-label>{{sonIslem.basTar | FormatDate}}</ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row class="row-border">\n\n    <ion-col col-4 class="border-right">\n\n      <ion-label>\n\n        <strong>İşlem Bitiş Tarihi:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-label>{{sonIslem.bitTar | FormatDate}}</ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row class="row-border" *ngIf="sonIslem.basTar != null && sonIslem.bitTar == null">\n\n    <ion-col col-4 class="border-right">\n\n      <ion-label>\n\n        <strong>Bekleme Nedeni:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-select [(ngModel)]="sonIslem.beklemeNeden" interface="popover" (ionChange)="checkStatus()">\n\n        <ion-option value="" selected="true"></ion-option>\n\n        <ion-option value="SERVIS">Servis</ion-option>\n\n        <ion-option value="MUSTERI">Müşteri</ion-option>\n\n        <ion-option value="BAYI">Bayi</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row class="row-border" *ngIf="sonIslem.basTar  != null && sonIslem.bitTar == null && sonIslem.beklemeNeden ==\'SERVIS\'">\n\n    <ion-col col-4 class="border-right">\n\n      <ion-label>\n\n        <strong>Bekleme Kaynağı:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-select [(ngModel)]="sonIslem.bekleKaynak" interface="popover" (ionChange)="checkStatus()" [disabled]=isHizmetDisabled()>\n\n        <ion-option value="" selected="true"></ion-option>\n\n        <ion-option value="NEDEN1">Yedek parça bekleniyor.</ion-option>\n\n\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row class="row-border" *ngIf="sonIslem.basTar  != null && sonIslem.bitTar == null && sonIslem.beklemeNeden ==\'MUSTERI\'">\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Bekleme Kaynağı:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-select [(ngModel)]="sonIslem.bekleKaynak" interface="popover" (ionChange)="checkStatus()" [disabled]=isHizmetDisabled()>\n\n        <ion-option value="" selected="true"></ion-option>\n\n        <ion-option value="NEDEN1">Müşteri Uygun Değil</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row class="row-border" *ngIf="sonIslem.basTar  != null && sonIslem.bitTar == null && sonIslem.beklemeNeden == \'BAYI\'">\n\n    <ion-col col-4>\n\n      <ion-label>\n\n        <strong>Bekleme Kaynağı:</strong>\n\n      </ion-label>\n\n    </ion-col>\n\n    <ion-col col-8>\n\n      <ion-select [(ngModel)]="sonIslem.bekleKaynak" interface="popover" (ionChange)="checkStatus()" [disabled]=isHizmetDisabled()>\n\n        <ion-option value="" selected="true"></ion-option>\n\n        <ion-option value="NEDEN1">Tesisat Kaynaklı</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 *ngIf="buttonStatus == \'BASLA\'">\n\n      <button ion-button primary round full (click)="islemBaslat()" [disabled]=isHizmetDisabled()>\n\n        <span class="icon-right">\n\n          <i class="fas fa-play"></i>\n\n        </span> İşlem Başlat\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 *ngIf="buttonStatus == \'BEKLE\'">\n\n      <button ion-button primary round full (click)="islemBeklet()" [disabled]=isHizmetDisabled()>\n\n        <span class="icon-right">\n\n          <i class="fas fa-play"></i>\n\n        </span> Bekleme Başlat\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 *ngIf="buttonStatus == \'BITIR\'">\n\n      <button ion-button primary round full (click)="islemBitir()" [disabled]=isHizmetDisabled()>\n\n        <span class="icon-right">\n\n          <i class="fas fa-times"></i>\n\n        </span> Bitir\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-card>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\islem-tarih\islem-tarih.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], IslemTarihComponent);
    return IslemTarihComponent;
}());

//# sourceMappingURL=islem-tarih.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemList; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var IslemList = (function () {
    function IslemList() {
        this.bekleKaynak = "";
        this.beklemeNeden = "";
        this.durum = "BASLA";
    }
    return IslemList;
}());

//# sourceMappingURL=islemList.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServisIslemTarihceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ServisIslemTarihceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ServisIslemTarihceComponent = (function () {
    function ServisIslemTarihceComponent(hizmetService, util) {
        this.hizmetService = hizmetService;
        this.util = util;
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.hizmet = this.hizmetService.getHizmet();
        this.tarihceList = [];
        this.loadTarihce();
    }
    ServisIslemTarihceComponent.prototype.loadTarihce = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tempIslemList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.util.isNotEmpty(this.hizmet.islemList)) return [3 /*break*/, 2];
                        tempIslemList = this.util.assignList(this.hizmet.islemList);
                        if (!this.util.isNotEmpty(tempIslemList)) return [3 /*break*/, 2];
                        tempIslemList
                            .filter(function (islem) { return _this.util.isNotEmpty(islem.basTar); })
                            .forEach(function (islem) { return _this.tarihceList.push(islem); });
                        this.hizmet.islemList = this.util.assignList(this.tarihceList);
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ServisIslemTarihceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'servis-islem-tarihce',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-islem-tarihce\servis-islem-tarihce.html"*/'<ion-card class="card-box1" *ngFor="let tarihce of tarihceList">\n\n  <ion-row>\n\n    <ion-col col-6 class="row-border border-right">\n\n      <strong>Sıra No: </strong>\n\n    </ion-col>\n\n    <ion-col col-6 class="row-border">\n\n      {{tarihce.islSira}}\n\n    </ion-col>\n\n\n\n    <ion-col col-6 class="row-border border-right">\n\n      <strong>Durum: </strong>\n\n    </ion-col>\n\n    <ion-col col-6 class="row-border">\n\n      {{tarihce.durum}}\n\n    </ion-col>\n\n\n\n    <ion-col col-6 class="row-border border-right">\n\n      <strong>İşlem Tarihi: </strong>\n\n    </ion-col>\n\n    <ion-col col-6 class="row-border">\n\n      {{tarihce.basTar | FormatDate}}\n\n    </ion-col>\n\n\n\n    <ion-col col-6 class="border-right">\n\n      <strong>İşlem Bitiş Tarihi: </strong>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      {{tarihce.bitTar | FormatDate}}\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-card>\n\n\n\n<!--<ion-row *ngFor="let tarihce of tarihceList">\n\n    <ion-col col-12 class="row-border">\n\n      <ion-label>{{tarihce.islSira}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 class="row-border">\n\n      <ion-label>{{tarihce.durum}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 class="row-border">\n\n      <ion-label>{{tarihce.basTar | FormatDate}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <ion-label>{{tarihce.bitTar | FormatDate}}</ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-card>-->'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-islem-tarihce\servis-islem-tarihce.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], ServisIslemTarihceComponent);
    return ServisIslemTarihceComponent;
}());

//# sourceMappingURL=servis-islem-tarihce.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        console.log(this.sanitized.bypassSecurityTrustHtml(value));
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safeHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safe-html.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util_util__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @author mali.sahin
 * @since 12.08.2018
 */
var DateFormatPipe = (function () {
    /**
     * Takes a number as time and convert to date.
     */
    function DateFormatPipe(util) {
        this.util = util;
    }
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.util.isNotEmpty(value)) {
            var time = this.util.dateFormatRegex(new Date(value), "dd-MM-yyyy hh:mm");
            //console.log("Formatted Date => " + time);
            return time;
        }
        return "";
    };
    DateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'FormatDate',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_util_util__["a" /* UtilProvider */]])
    ], DateFormatPipe);
    return DateFormatPipe;
}());

//# sourceMappingURL=date-format.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cagrilar_cagrilar__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bildirimler_bildirimler__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_guncelleme_guncelleme__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_kutuphane_kutuphane__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ayarlar_ayarlar__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bilgi_sorgu_bilgi_sorgu__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_theme_theme__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_logger_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_deeplink_printer_deeplink_printer__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, logger, themeProvider, deepLinkPrinter, db) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.logger = logger;
        this.themeProvider = themeProvider;
        this.deepLinkPrinter = deepLinkPrinter;
        this.db = db;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
        this.enableProductionMode();
        this.initializeApp();
        this.selectedTheme = this.themeProvider.getSelectedTheme();
        this.logger.warn("SELECTED DEFAULT THEME" + this.selectedTheme);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
            _this.db.createDatabase();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, page.param);
    };
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () { return _this.deepLinkPrinter.init(); });
    };
    MyApp.prototype.sideMenu = function () {
        this.pages = [
            { title: 'Çağrılar', component: __WEBPACK_IMPORTED_MODULE_4__pages_cagrilar_cagrilar__["a" /* CagrilarPage */], active: true, icon: 'home', param: {} },
            { title: 'Duyurular', component: __WEBPACK_IMPORTED_MODULE_5__pages_bildirimler_bildirimler__["a" /* BildirimlerPage */], active: false, icon: 'map', param: { type: 'WARN' } },
            { title: 'Uyarılar', component: __WEBPACK_IMPORTED_MODULE_5__pages_bildirimler_bildirimler__["a" /* BildirimlerPage */], active: false, icon: 'ionic', param: { type: 'URGENT' } },
            { title: 'Güncelleme', component: __WEBPACK_IMPORTED_MODULE_6__pages_guncelleme_guncelleme__["a" /* GuncellemePage */], active: false, icon: 'ionic', param: {} },
            { title: 'Bilgi Sorgu', component: __WEBPACK_IMPORTED_MODULE_11__pages_bilgi_sorgu_bilgi_sorgu__["a" /* BilgiSorguPage */], active: false, icon: 'body', param: {} },
            { title: 'E-Kütüphane', component: __WEBPACK_IMPORTED_MODULE_7__pages_kutuphane_kutuphane__["a" /* KutuphanePage */], active: false, icon: 'bookmarks', param: {} },
            { title: 'Ayarlar', component: __WEBPACK_IMPORTED_MODULE_8__pages_ayarlar_ayarlar__["a" /* AyarlarPage */], active: false, icon: 'book', param: {} }
        ];
    };
    MyApp.prototype.enableProductionMode = function () {
        /* if (this.platform.is('ios') || this.platform.is('android') || this.platform.is('windows')) {
         enableProdMode();
         }*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <!--\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Pages</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n      <ion-list>\n\n        <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  -->\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_theme_theme__["a" /* ThemeProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_deeplink_printer_deeplink_printer__["a" /* DeeplinkPrinterProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


var User = (function () {
    function User(name, email) {
        this.email = email;
        this.name = name;
    }
    return User;
}());

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var access = (credentials.passwordd === 'pass' && credentials.email === 'email');
                _this.currentUser = new User('Ali', '1234');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthService.prototype.register = function (credentials) {
        if (credentials.email === null || credentials === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__ = __webpack_require__(934);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent() {
        this.list = [
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName1', 'Code1'),
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName2', 'Code2'),
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName3', 'Code3'),
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName4', 'Code4')
        ];
    }
    ListComponent.prototype.itemSelected = function () {
        console.log("Item selected");
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'list',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\list\list.html"*/'<!-- Generated template for the ListComponent component -->\n\n<div>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of list" (click)=" itemSelected(item) ">\n\n      {{ item.name }} -- {{ item.code }}\n\n    </button>\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v4\Ionic-Offline-App\src\components\list\list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItem; });
var ListItem = (function () {
    function ListItem(name, code) {
        this.name = name;
        this.code = code;
    }
    return ListItem;
}());

//# sourceMappingURL=ListItem.js.map

/***/ }),

/***/ 939:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[578]);
//# sourceMappingURL=main.js.map