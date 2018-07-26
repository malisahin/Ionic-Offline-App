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
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
import { Component } from '@angular/core';
import { HizmetService } from '../../../../providers/hizmet-service/hizmet-service';
import { Hizmet } from '../../../../entities/hizmet/hizmet';
import { UtilProvider } from "../../../../providers/util/util";
import { IslemList } from "../../../../entities/hizmet/islemList";
import { ProcessResults } from "../../../../entities/ProcessResults";
import { LoggerProvider } from "../../../../providers/logger/logger";
var Durum;
(function (Durum) {
    Durum[Durum["BASLA"] = 'BASLA'] = "BASLA";
    Durum[Durum["BEKLE"] = 'BEKLE'] = "BEKLE";
    Durum[Durum["BITIR"] = 'BITIR'] = "BITIR";
    Durum[Durum["OK"] = 'OK'] = "OK";
})(Durum || (Durum = {}));
export var IslemTarihComponent = (function () {
    function IslemTarihComponent(hizmetService, logger, util) {
        this.hizmetService = hizmetService;
        this.logger = logger;
        this.util = util;
        this.DATE_FORMAT = "dd.MM.yyyy hh:mm";
        this.hizmet = new Hizmet();
        this.isenabled = true;
        this.islemBitmisMi = "";
        this.buttonStatus = Durum.BASLA;
        this.islemList = [];
        this.hizmet = this.hizmetService.getHizmet();
        this.logger.table(this.hizmet.islemList);
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
        this.sonIslem.basTar = this.util.dateFormatRegex(new Date(), this.DATE_FORMAT);
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
            this.sonIslem.bitTar = this.util.dateFormatRegex(this.util.addMinutes(new Date, 1), this.DATE_FORMAT);
            this.sonIslem.durum = Durum.BEKLE;
            this.checkStatus();
            this.sonIslem = new IslemList();
            this.setButtonStatus();
            this.logger.log("Işlem Bekletildi. Bekleme Nedeni :" + this.sonIslem.beklemeNeden + " Bekleme Kaynağı: " + this.sonIslem.bekleKaynak + " Bekletilme Anı" + this.sonIslem.basTar);
        }
    };
    IslemTarihComponent.prototype.islemBeklemeKontrol = function () {
        var res = new ProcessResults();
        if (this.util.isEmpty(this.sonIslem.bekleKaynak)) {
            res.errorMessages.push("Bekleme kaynağı boş olamaz");
        }
        else if (this.util.isEmpty(this.sonIslem.beklemeNeden)) {
            res.errorMessages.push("Bekleme Nedeni boş olamaz.");
        }
        return res;
    };
    IslemTarihComponent.prototype.islemBitir = function () {
        this.sonIslem.bitTar = this.util.dateFormatRegex(this.util.addMinutes(new Date, 1), this.DATE_FORMAT);
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
        this.sonIslem = new IslemList();
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
        return __awaiter(this, void 0, void 0, function* () {
            if (this.checkIslemKayitEdilebilme()) {
                /* this.hizmet.islemList.forEach(item => {
                 if (item.islSira == this.sonIslem.islSira) {
                 item = this.sonIslem;
                 }
                 });*/
                this.hizmet.islemList = this.islemList;
                this.logger.table(this.hizmet.islemList);
                yield this.hizmetService.saveHizmet();
                this.loadTarihce();
            }
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
                    item.basTar = _this.util.dateFormatRegex(new Date(item.basTar), _this.DATE_FORMAT);
                }
                if (_this.util.isNotEmpty(item.bitTar)) {
                    item.bitTar = _this.util.dateFormatRegex(new Date(item.bitTar), _this.DATE_FORMAT);
                }
            });
        }
    };
    IslemTarihComponent.prototype.isHizmetDisabled = function () {
        return this.hizmet.durum == "KAPALI" || this.hizmet.durum == "IPTAL";
    };
    IslemTarihComponent = __decorate([
        Component({
            selector: 'islem-tarih',
            templateUrl: 'islem-tarih.html'
        }), 
        __metadata('design:paramtypes', [HizmetService, LoggerProvider, UtilProvider])
    ], IslemTarihComponent);
    return IslemTarihComponent;
}());
//# sourceMappingURL=islem-tarih.js.map