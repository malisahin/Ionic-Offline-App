var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { HizmetService } from "../../../../providers/hizmet-service/hizmet-service";
import { Hizmet } from "../../../../entities/hizmet/hizmet";
import { UtilProvider } from "../../../../providers/util/util";
/**
 * Generated class for the ServisIslemTarihceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
export var ServisIslemTarihceComponent = (function () {
    function ServisIslemTarihceComponent(hizmetService, util) {
        this.hizmetService = hizmetService;
        this.util = util;
        this.hizmet = new Hizmet();
        this.hizmet = this.hizmetService.getHizmet();
        this.tarihceList = [];
        this.loadTarihce();
    }
    ServisIslemTarihceComponent.prototype.loadTarihce = function () {
        if (this.util.isNotEmpty(this.hizmet.islemList))
            this.tarihceList = this.hizmet.islemList;
    };
    ServisIslemTarihceComponent = __decorate([
        Component({
            selector: 'servis-islem-tarihce',
            templateUrl: 'servis-islem-tarihce.html'
        }), 
        __metadata('design:paramtypes', [HizmetService, UtilProvider])
    ], ServisIslemTarihceComponent);
    return ServisIslemTarihceComponent;
}());
//# sourceMappingURL=servis-islem-tarihce.js.map