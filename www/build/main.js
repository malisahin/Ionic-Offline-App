webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesajlarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesajlar_dao_mesajlar_dao__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(6);
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
        console.log('Hello MesajlarProvider Provider');
    }
    MesajlarProvider.prototype.setAlertFirst = function () {
        this.util.message("Token  is Ok");
    };
    MesajlarProvider.prototype.setAlertLast = function () {
        this.util.message("Notifications is Ok");
    };
    MesajlarProvider.prototype.getDataFromApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, header, res, mesaj, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getMesajlarUrl();
                        return [4 /*yield*/, this.tokenProvider.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        res = _a.sent();
                        mesaj = new __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__["a" /* Mesaj */]();
                        return [4 /*yield*/, mesaj.fillMesajlar(res)];
                    case 3:
                        list = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.mesajDao.insertList(list).then(function (item) {
                                    resolve(item);
                                });
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

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Urun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(8);

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/
var Urun = (function () {
    function Urun() {
        this.mamAnagrp = "";
        this.mamKod = "";
        this.mamAdi = "";
        this.seriMetod = "";
        this.surec = "";
        this.durum = "";
    }
    Urun.prototype.fillUrun = function (res) {
        var parsedList = [];
        var urunList = res.message[0].liste;
        var urunVersiyon = res.message[0].versiyon;
        /**
         *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
         */
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.URUN, urunVersiyon);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.GELEN_URUN, urunList.length);
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
}());

//# sourceMappingURL=urun.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(6);
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

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(6);
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
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getDataFromApi().then(function (item) {
                var anaGrp = new __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__["a" /* UrunAnaGrup */]("");
                anaGrp.fillUrunAnaGrup(item).then(function (anaGrpList) {
                    _this.urunAnaGrupDao.insertList(anaGrpList).then(function (res) {
                        resolve("success");
                    });
                });
            });
        });
    };
    UrunAnaGrpProvider.prototype.getDataFromApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.urunAnagrupDownloadUrl();
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
                }
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
                        return [2 /*return*/, this.http.post(url, hizmet, { headers: header }).toPromise()];
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemArizaIscilikDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(8);
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
        console.log('Hello IslemArizaIscilikDaoProvider Provider');
    }
    //tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ISC_ISLARZGRP_TNM (mamAnaGrp, islemGrp, islemGrpAdi, arizaGrp, arizaGrpAdi, iscKod, durum, PRIMARY KEY (mamAnaGrp,islemGrp,arizaGrp, iscKod))', []);
    IslemArizaIscilikDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(6);
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
var ThemeProvider = (function () {
    function ThemeProvider(util) {
        this.util = util;
        console.log('Hello ThemeProvider Provider');
    }
    ThemeProvider.prototype.setTheme = function () {
        var permanentTheme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SELECTED_THEME);
        if (this.util.isEmpty(permanentTheme)) {
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
        var permanentTheme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].SELECTED_THEME);
        var selectedTheme = "";
        if (this.util.isEmpty(permanentTheme) || permanentTheme == THEME.BLUE) {
            selectedTheme = 'BLUE';
        }
        else if (permanentTheme == THEME.GREEN) {
            selectedTheme = 'GREEN';
        }
        return selectedTheme;
    };
    ThemeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */]])
    ], ThemeProvider);
    return ThemeProvider;
}());

//# sourceMappingURL=theme.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**
 * @author malisahin
 * @date 2018-04-14
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

var LoggerProvider = (function () {
    function LoggerProvider() {
    }
    LoggerProvider.prototype.log = function (res) {
        console.log(res);
    };
    LoggerProvider.prototype.dir = function (res) {
        console.dir(res);
    };
    LoggerProvider.prototype.error = function (res) {
        console.error(res);
    };
    LoggerProvider.prototype.warn = function (res) {
        console.warn(res);
    };
    LoggerProvider.prototype.table = function (res) {
        console.table(res);
    };
    LoggerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoggerProvider);
    return LoggerProvider;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderProvider = (function () {
    function HeaderProvider(alert, platform) {
        this.alert = alert;
        this.platform = platform;
    }
    HeaderProvider.prototype.closeApplicationConfirm = function () {
        var _this = this;
        var alert = this.alert.create({
            title: "Çıkmak istediğinizden emin misiniz?",
            enableBackdropDismiss: true,
            buttons: [{
                    text: "Evet",
                    handler: function () { return _this.platform.exitApp(); }
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
            if ((serverVersiyon == clientVersiyon) && serverVersiyon != "-1") {
                guncellemeSayisi -= 1;
            }
        }
        return guncellemeSayisi;
    };
    HeaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], HeaderProvider);
    return HeaderProvider;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagriDetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
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
    function CagriDetayPage(navCtrl, navParams, hizmetService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hizmetService = hizmetService;
        this.activePage = "hizmet";
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.hizmet.seqNo = this.navParams.get('seqNo');
        this.setHizmet();
    }
    CagriDetayPage.prototype.getHizmet = function () {
        var _this = this;
        return this.hizmetService.fetchHizmet(this.hizmet).then(function (res) {
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
        this.navCtrl.pop();
    };
    CagriDetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cagri-detay',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\cagri-detay\cagri-detay.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n\n\n    <icon-header></icon-header>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content blue-theme">\n\n  <ion-row>\n\n    <ion-col col-2 col-md-2>\n\n      <button ion-button>\n\n        <ion-icon name="ios-arrow-back" (click)="goback()" class="pull-right close-icon"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-10 col-md-10>\n\n      <ion-title class="page-title">Çağrı Detay</ion-title>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n\n\n  <ion-toolbar no-border-top class="main-tabs">\n\n    <ion-segment [(ngModel)]="activePage">\n\n\n\n      <ion-segment-button value="hizmet" (ionSelect)="whenTabChange()">\n\n        Hizmet Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="musteri" (ionSelect)="whenTabChange()">\n\n        Müşteri Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="urun" (ionSelect)="whenTabChange()">\n\n        Ürün Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="servis" (ionSelect)="whenTabChange()">\n\n        Servis Bilgileri\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="detay" (ionSelect)="whenTabChange()">\n\n        Detaylar\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="activePage">\n\n\n\n    <div *ngSwitchCase="\'hizmet\'">\n\n      <hizmet-bilgileri></hizmet-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'musteri\'">\n\n      <musteri-bilgileri></musteri-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'urun\'">\n\n      <urun-bilgileri></urun-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'servis\'">\n\n      <servis-bilgileri></servis-bilgileri>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'detay\'">\n\n      <detay-bilgileri class="blue-theme"></detay-bilgileri>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\cagri-detay\cagri-detay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__["a" /* HizmetService */]])
    ], CagriDetayPage);
    return CagriDetayPage;
}());

//# sourceMappingURL=cagri-detay.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesajDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_mesajlar__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_mesajlar_mesajlar__ = __webpack_require__(100);
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
    function MesajDetailComponent(params, viewCtrl, util, mesajProvider) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.mesajProvider = mesajProvider;
        this.mesaj = new __WEBPACK_IMPORTED_MODULE_1__entities_mesajlar__["a" /* Mesaj */]();
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
            selector: 'mesaj-detail',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\mesaj-detail\mesaj-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title>Mesaj Detayı</ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-row>\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Gönderen</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{mesaj.gonderen}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Konu</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{mesaj.subject}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-card>\n\n      <ion-card-content class="card-box">\n\n        {{mesaj.aciklama}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\mesaj-detail\mesaj-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* UtilProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_mesajlar_mesajlar__["a" /* MesajlarProvider */]])
    ], MesajDetailComponent);
    return MesajDetailComponent;
}());

//# sourceMappingURL=mesaj-detail.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilik; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(8);

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var UrunIscilik = (function () {
    function UrunIscilik() {
        this.mamKod = '';
        this.iscKod = '';
        this.iscAdi = '';
        this.durum = '';
        this.fiyat = '';
        this.gdFiyat = '';
        this.iscMikFlag = '';
        this.maxIscMiktar = '';
    }
    UrunIscilik.prototype.fillUrunIscilik = function (res) {
        var parsedList = [];
        var urunIscilikList = res.message[0].liste;
        var urunIscilikVersiyon = res.message[0].versiyon;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.GELEN_URUN_ISCILIK, urunIscilikList.length);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_ISCILIK, urunIscilikVersiyon);
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
}());

//# sourceMappingURL=urun-iscilik.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilikDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__ = __webpack_require__(31);
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
    function UrunIscilikDao(dbProvider, baseDao) {
        this.dbProvider = dbProvider;
        this.baseDao = baseDao;
        console.log('Hello UrunIscilikDaoProvider Provider');
    }
    UrunIscilikDao.prototype.insertList = function (list) {
        var _this = this;
        var response;
        var insertedItems = 0;
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
        return this.baseDao.getList("OFF_MAM_ISC_TNM", "iscKod", item, type, first, pageSize, false);
    };
    UrunIscilikDao.prototype.deleteAll = function () {
        var query = "DELETE FROM OFF_MAM_ISC_TNM ";
        return this.baseDao.execute(query, []);
    };
    UrunIscilikDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__["a" /* BaseDao */]])
    ], UrunIscilikDao);
    return UrunIscilikDao;
}());

//# sourceMappingURL=urun-iscilik-dao.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fiyat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(8);

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var Fiyat = (function () {
    function Fiyat() {
        this.mamKod = null;
        this.iscMlz = null;
        this.iscMlzKod = null;
        this.fiyat = null;
        this.gdFiyat = null;
        this.versiyon = null;
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
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.GELEN_MALZEME_FIYAT, fiyatList.length);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.MALZEME_FIYAT, versiyon);
        }
        else if (tip == 'ISC' || tip == "iscilikFiyatListesi") {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.GELEN_ISCILIK_FIYAT, fiyatList.length);
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.ISCILIK_FIYAT, versiyon);
        }
        return new Promise(function (res) { return res(parsedList); });
    };
    return Fiyat;
}());

//# sourceMappingURL=fiyat.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdresDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__ = __webpack_require__(31);
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
    function AdresDao(http, dbProvider, baseDao) {
        this.http = http;
        this.dbProvider = dbProvider;
        this.baseDao = baseDao;
        console.log('Hello AdresDaoProvider Provider');
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
    AdresDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__["a" /* BaseDao */]])
    ], AdresDao);
    return AdresDao;
}());

//# sourceMappingURL=adres-dao.js.map

/***/ }),

/***/ 161:
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiSorguProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_garanti_sonuc_garanti_sonuc__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__token_token__ = __webpack_require__(29);
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
                        return [2 /*return*/, this.http.post(url, data, { headers: header }).subscribe(function (res) {
                                console.log(res);
                                _this.showGarantiSonuc(res);
                            })];
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
            this.util.message(res.description);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiSonucComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_GarantiSorgu__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__ = __webpack_require__(102);
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
    function GarantiSonucComponent(viewCtrl, params, util, urunDao) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.util = util;
        this.urunDao = urunDao;
        this.mamanaGrp = "";
        this.mamKod = "";
        this.mamAdi = "";
        this.garantiSuresi = "";
        this.garantiTipi = "";
        this.ekGaranti = "";
        this.aciklama = "";
        this.sonuc = "";
        console.log('Hello GarantiSonucComponent Component');
        this.garanti = new __WEBPACK_IMPORTED_MODULE_2__entities_GarantiSorgu__["a" /* GarantiSorgu */]();
        this.data = params.get('data');
        this.loadData();
    }
    GarantiSonucComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    GarantiSonucComponent.prototype.loadData = function () {
        var _this = this;
        debugger;
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
            selector: 'garanti-sonuc',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\garanti-sonuc\garanti-sonuc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title>Garanti Sonucu</ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n\n\n  <ion-row>\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Ürün Ana Grubu</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{mamanaGrp}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Ürün Kodu ve Adı</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{mamKod}} - {{mamAdi}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Garanti Başlangıç Tarihi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{garantiBasTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Garanti Süresi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{garantiSuresi}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Standart Garanti Bitiş Tarihi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{stdGarantiBitisTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Garanti Tipi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{garantiTipi}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Ek Garanti</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{ekGaranti}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Ek Garanti Süresi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{ekGarantiSuresi}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Ek Garanti Başlangıç Tarihi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{ekGarantiBasTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Garanti Bitiş Tarihi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-label>{{ekGarantiBitisTar | date: \'dd-MM-yyyy\'}}</ion-label>\n\n    </ion-col>\n\n\n\n    <ion-card>\n\n      <ion-card-content class="card-box">\n\n        {{aciklama}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content class="card-box">\n\n        {{sonuc}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\garanti-sonuc\garanti-sonuc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__["a" /* UrunDao */]])
    ], GarantiSonucComponent);
    return GarantiSonucComponent;
}());

//# sourceMappingURL=garanti-sonuc.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilikSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urun_iscilik__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_urun_iscilik_dao_urun_iscilik_dao__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(8);
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
    function UrunIscilikSearchComponent(viewCtrl, params, util, urunIscilikDao) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.urunIscilikDao = urunIscilikDao;
        this.list = [];
        this.selectedItem = { key: "", value: "" };
        this.searchText = "";
        this.pageable = new __WEBPACK_IMPORTED_MODULE_2__entities_Pageable__["a" /* Pageable */]();
        this.data = params.get('data');
        this.ionViewDidLoad();
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_1__entities_urun_iscilik__["a" /* UrunIscilik */]();
    }
    UrunIscilikSearchComponent.prototype.closeModal = function () {
        this.ionChange({ key: '', value: '' });
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
        this.urunIscilikDao.getList(urunSearch, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE, this.pageable.first, this.pageable.pageSize).then(function (data) {
            _this.fillList(data);
        });
        ;
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
            selector: 'urun-iscilik-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\urun-iscilik-search\urun-iscilik-search.html"*/'<ion-header>\n\n  <button ion-button round (click)="closeModal()">Iptal</button>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>Searchbar</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n  <ion-toolbar>\n\n    <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n      <ion-icon name="arrow-dropleft"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n      <ion-icon name="arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\urun-iscilik-search\urun-iscilik-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_urun_iscilik_dao_urun_iscilik_dao__["a" /* UrunIscilikDao */]])
    ], UrunIscilikSearchComponent);
    return UrunIscilikSearchComponent;
}());

//# sourceMappingURL=urun-iscilik-search.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZebraPrinterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = __webpack_require__(12);
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
    function ZebraPrinterComponent(util, platform, viewCtrl, logger, navParams) {
        this.util = util;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.logger = logger;
        this.navParams = navParams;
        this.printerList = [];
        this.text = navParams.get("text");
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
        if (this.util.isNotEmpty(list))
            this.printerList = list.split(",");
    };
    ZebraPrinterComponent.prototype.fnSuccess = function () {
        this.util.message("Hizmet Formu çıktısı başarılı bir şekilde alındı.");
    };
    ZebraPrinterComponent.prototype.fnError = function () {
        this.util.message("Çıktı alınırken hata oluştu.");
    };
    ZebraPrinterComponent.prototype.androidList = function () {
        window.printer.list(this.androidSetPrinterList.bind(this), this.fnError.bind(this));
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
        window.plugins.CordovaPrinter.getPrinters(this.fnSuccess.bind(this), this.fnError.bind(this));
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
            selector: 'zebra-printer',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\zebra-printer\zebra-printer.html"*/'<ion-header>\n\n  <button ion-button round (click)="closeModal()">Iptal</button>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>Searchbar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- Generated template for the ListComponent component -->\n\n  <div>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let item of printerList" (click)="yazdir(item) ">\n\n        {{ item }}\n\n      </button>\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\zebra-printer\zebra-printer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */]])
    ], ZebraPrinterComponent);
    return ZebraPrinterComponent;
}());

//# sourceMappingURL=zebra-printer.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mesajlar_mesajlar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__versiyon_versiyon__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(8);
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
        this.init();
    }
    TasksProvider.prototype.init = function () {
        this.TASK_TIME_INTERVAL = Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].SYNC_TIME));
        this.TASK_TIME_INTERVAL = this.TASK_TIME_INTERVAL * 60 * 1000;
    };
    TasksProvider.prototype.runTasks = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.logger.warn("Tasks running command is given.");
            var token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].ACCESS_TOKEN);
            if (_this.util.isNotEmpty(token)) {
                _this.versiyonTask();
                _this.messageTask();
            }
        }, this.TASK_TIME_INTERVAL);
    };
    TasksProvider.prototype.killAndStartTasks = function () {
        this.logger.warn("Task Killed. [" + String(this.interval) + "]");
        clearInterval(this.interval);
        this.init();
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
                        return [4 /*yield*/, this.mesajProvider.getDataFromApi()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BilgiSorguPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(36);
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
    function BilgiSorguPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.activePage = "garantiSorguSegment";
    }
    BilgiSorguPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BilgiSorguPage');
    };
    BilgiSorguPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bilgi-sorgu',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\bilgi-sorgu\bilgi-sorgu.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n\n\n  <ion-title class="page-title">Bilgi Sorgu</ion-title>\n\n\n\n  <ion-toolbar class="main-tabs">\n\n    <ion-segment [(ngModel)]="activePage">\n\n\n\n      <ion-segment-button value="garantiSorguSegment" class="seg-button">\n\n        Garanti Sorgu\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="fiyatSorguSegment" class="seg-button">\n\n        Fiyat Sorgu\n\n      </ion-segment-button>\n\n\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="activePage">\n\n\n\n    <div *ngSwitchCase="\'garantiSorguSegment\'">\n\n      <garanti-sorgu></garanti-sorgu>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'fiyatSorguSegment\'">\n\n      <fiyat-sorgu></fiyat-sorgu>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\bilgi-sorgu\bilgi-sorgu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], BilgiSorguPage);
    return BilgiSorguPage;
}());

//# sourceMappingURL=bilgi-sorgu.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUrunAnaGrupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_hizmet_hizmet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
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
    function UpdateUrunAnaGrupComponent(util, logger, viewCtrl, modalController, urunAnaGrupProvider, navParams, hizmetService, hizmetProvider, urunAnaGrupDao) {
        this.util = util;
        this.logger = logger;
        this.viewCtrl = viewCtrl;
        this.modalController = modalController;
        this.urunAnaGrupProvider = urunAnaGrupProvider;
        this.navParams = navParams;
        this.hizmetService = hizmetService;
        this.hizmetProvider = hizmetProvider;
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.basvuruNedeni = "";
        this.basvuruNedeniList = [];
        this.data = {};
        this.urunAnaGrup = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
        this.logger.dir(this.navParams.data);
        this.hizmet = this.navParams.get("hizmet");
    }
    UpdateUrunAnaGrupComponent.prototype.urunAnaGrupSorgula = function () {
        var _this = this;
        this.data.type = __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */], { data: this.data });
        aramaModal.onDidDismiss(function (data) {
            if (_this.util.isNotEmpty(data)) {
                _this.urunAnaGrup = data;
            }
            _this.prepareBasvuruList();
        });
        aramaModal.present();
    };
    UpdateUrunAnaGrupComponent.prototype.prepareBasvuruList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var basvuruNeden, res, i, item, anaGrp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.basvuruNedeniList = [];
                        basvuruNeden = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
                        basvuruNeden.mamAnaGrp = this.urunAnaGrup.mamAnaGrp;
                        return [4 /*yield*/, this.urunAnaGrupDao.getList(basvuruNeden, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT)];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmpty(res)) {
                            for (i = 0; i < res.rows.length; i++) {
                                item = res.rows.item(i);
                                anaGrp = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.BASVURU_LISTE);
                                anaGrp.mamAnaGrp = item.mamAnaGrp;
                                anaGrp.ad = item.ad;
                                anaGrp.neden = item.neden;
                                this.basvuruNedeniList.push(anaGrp);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent.prototype.kaydet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hizmet.mamAnaGrp = this.urunAnaGrup.mamAnaGrp;
                        this.hizmet.basvuruNedeni = this.basvuruNedeni;
                        return [4 /*yield*/, this.urunAnaGrupProvider.updateMamAnaGrp(this.hizmet)];
                    case 1:
                        res = _a.sent();
                        this.logger.warn(res);
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.hizmetProvider.updateComingData(res)];
                    case 2:
                        _a.sent();
                        this.logger.log(res);
                        return [4 /*yield*/, this.getUpdatedHizmet()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.iptal();
                        this.util.error("Ürün Ana Grubu değiştirirken hata oluştu.Verileri kontrol ediniz.");
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UpdateUrunAnaGrupComponent.prototype.getUpdatedHizmet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchData, fetchedData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchData = new __WEBPACK_IMPORTED_MODULE_9__entities_hizmet_hizmet__["a" /* Hizmet */]();
                        searchData.seqNo = this.hizmet.seqNo;
                        return [4 /*yield*/, this.hizmetService.fetchHizmet(searchData)];
                    case 1:
                        fetchedData = _a.sent();
                        if (this.util.isNotEmpty(fetchedData) && this.util.isNotEmpty(fetchedData.res.rows) && fetchedData.res.rows.length > 0) {
                            this.hizmet = JSON.parse(fetchedData.res.rows.item(0).data);
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
    UpdateUrunAnaGrupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'update-urun-ana-grup',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\update-urun-ana-grup\update-urun-ana-grup.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- Generated template for the HizmetBilgileriComponent component -->\n\n  <ion-list inset>\n\n    <ion-item>\n\n      <ion-label>Ürün Ana Grup</ion-label>\n\n      <ion-input type="text" [(ngModel)]="urunAnaGrup.ad" (focus)="urunAnaGrupSorgula()">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Başvuru Nedeni</ion-label>\n\n      <ion-select [(ngModel)]="basvuruNedeni">\n\n        <ion-option *ngFor="let neden of basvuruNedeniList" [value]="neden.neden">\n\n          {{neden.ad }} ({{neden.neden}})\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm>\n\n          <button ion-button round full (click)="kaydet();" color="secondary">\n\n            Kaydet\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-12 col-sm>\n\n          <button ion-button round full (click)="iptal();" color="secondary">\n\n            Iptal\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\update-urun-ana-grup\update-urun-ana-grup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_urun_ana_grp_urun_ana_grp__["a" /* UrunAnaGrpProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_11__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_hizmet_hizmet__["a" /* HizmetProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */]])
    ], UpdateUrunAnaGrupComponent);
    return UpdateUrunAnaGrupComponent;
}());

//# sourceMappingURL=update-urun-ana-grup.js.map

/***/ }),

/***/ 181:
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetDetayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_DetayKayit__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detay_piy_search_detay_piy_search__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_fiyat__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_islem_ariza_iscilik__ = __webpack_require__(402);
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
    function HizmetDetayComponent(viewCtrl, params, modalController, util, logger, fiyatDao, islemArizaIscilikDao, hizmetService) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.modalController = modalController;
        this.util = util;
        this.logger = logger;
        this.fiyatDao = fiyatDao;
        this.islemArizaIscilikDao = islemArizaIscilikDao;
        this.hizmetService = hizmetService;
        this.islemAdi = "";
        this.arizaAdi = "";
        this.mlzIscAdi = "";
        this.islemTipi = "";
        this.hizmet = this.hizmetService.getHizmet();
        this.hizmetDetay = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_DetayKayit__["a" /* DetayKayit */]();
        this.data = params.get('data');
        this.detayTutari = new __WEBPACK_IMPORTED_MODULE_7__entities_fiyat__["a" /* Fiyat */]();
        this.init();
    }
    HizmetDetayComponent.prototype.init = function () {
        if (this.util.isNotEmpty(this.data.hizmetDetay)) {
            this.hizmetDetay = this.data.hizmetDetay;
            this.islemAdi = this.hizmetDetay.islemKod;
            this.arizaAdi = this.hizmetDetay.arizaKod;
            this.mlzIscAdi = this.hizmetDetay.mlzIscKod;
            this.birimfiyat = this.hizmetDetay.tutar / this.hizmetDetay.miktar;
            this.loadHizmetDetay();
        }
    };
    HizmetDetayComponent.prototype.detayKaydet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.util.isEmpty(this.hizmetDetay.satirNo)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fiyatBul()];
                    case 1:
                        _a.sent();
                        if (this.util.isNotEmpty(this.hizmetDetay.tutar)) {
                            if (this.util.isEmpty(this.hizmet.detayDtoList))
                                this.hizmet.detayDtoList = [];
                            this.hizmetDetay.seqNo = this.hizmet.seqNo;
                            this.hizmet.detayDtoList.push(this.hizmetDetay);
                            this.satirNoBelirle();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.hizmet.detayDtoList.filter(function (det) {
                            if (det.satirNo) {
                                det = _this.hizmetDetay;
                            }
                        });
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 4:
                        result = _a.sent();
                        this.logger.dir(result);
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.satirNoBelirle = function () {
        for (var i = 0; i < this.hizmet.detayDtoList.length; i++) {
            this.hizmet.detayDtoList[i].satirNo = i;
        }
    };
    HizmetDetayComponent.prototype.fiyatBul = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fiyatRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.hizmetDetay.mlzIsc != "DGR")) return [3 /*break*/, 2];
                        this.detayTutari.mamKod = this.hizmet.mamKod;
                        this.detayTutari.iscMlzKod = this.hizmetDetay.mlzIscKod;
                        return [4 /*yield*/, this.fiyatDao.findFiyat(this.detayTutari)];
                    case 1:
                        fiyatRes = _a.sent();
                        if (fiyatRes.rows.length > 0) {
                            this.hizmetDetay.birimFiyat = fiyatRes.rows.item(0).fiyat;
                            this.hizmetDetay.garFiyat = fiyatRes.rows.item(0).gdfiyat;
                            this.hizmetDetay.tutar = this.hizmetDetay.miktar * this.hizmetDetay.birimFiyat;
                        }
                        else {
                            this.util.message("Fiyat Bulunamadı");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.hizmetDetay.tutar = this.hizmetDetay.miktar * this.birimfiyat;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.IslemArizaIscilikBul = function (tip) {
        var _this = this;
        var piyModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_5__detay_piy_search_detay_piy_search__["a" /* DetayPiySearchComponent */], {
            data: {
                dataType: tip,
                filter: this.hizmetDetay
            }
        });
        piyModal.onDidDismiss(function (res) {
            _this.logger.dir(res);
            if (tip == "ISLEM") {
                _this.hizmetDetay.islemKod = res.data.key;
                _this.islemAdi = res.data.key + " - " + res.data.value;
            }
            if (tip == "ARIZA") {
                _this.hizmetDetay.arizaKod = res.data.key;
                _this.arizaAdi = res.data.key + " - " + res.data.value;
            }
            if (tip == "PIY") {
                _this.hizmetDetay.mlzIscKod = res.data.key;
                _this.hizmetDetay.aciklama = res.data.value;
                _this.mlzIscAdi = res.data.key + " - " + res.data.value;
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
                        islemArizaIscilik = new __WEBPACK_IMPORTED_MODULE_10__entities_islem_ariza_iscilik__["a" /* IslemArizaIscilik */]();
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
                                }
                            })];
                    case 2:
                        _a.sent();
                        this.mlzIscAdi = this.mlzIscAdi + " - " + this.hizmetDetay.aciklama;
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetDetayComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    HizmetDetayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hizmet-detay',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\hizmet-detay\hizmet-detay.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title>Hizmet detay</ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<!-- Generated template for the HizmetBilgileriComponent component -->\n\n<ion-content class="content ">\n\n  <ion-row>\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">İşlem Tipi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-select [(ngModel)]="hizmetDetay.mlzIsc" (ionChange)="onChangeIslemTipi()" interface="popover">\n\n        <ion-option value="" selected="true"></ion-option>\n\n        <ion-option value="ISC">İşçilik</ion-option>\n\n        <ion-option value="MLZ">Malzeme</ion-option>\n\n        <ion-option value="KM">Yol</ion-option>\n\n        <ion-option value="DGR">Diğer</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">İşlem Kodu</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="islemAdi" (ionChange)="onChangeIslemKodu()" (ionFocus)="IslemArizaIscilikBul(\'ISLEM\')"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">Arıza Kodu</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="arizaAdi" (ionChange)="onChangeArizaKodu()" (ionFocus)="IslemArizaIscilikBul(\'ARIZA\')"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">P/I/Y Kodu</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="mlzIsckod" (ionChange)="onChangeParcaIscilikYol()" (ionFocus)="IslemArizaIscilikBul(\'PIY\')"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2>\n\n      <ion-label color="primary">P/I/Y Açıklama</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10>\n\n      <ion-input type="text" [(ngModel)]="aciklama"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2 *ngIf="hizmetDetay.mlzIsc == \'DGR\' || hizmetDetay.mlzIsc == \'KM\' || hizmetDetay.mlzIsc ==\'MLZ\'">\n\n      <ion-label color="primary">Miktar</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10 *ngIf="hizmetDetay.mlzIsc == \'DGR\' || hizmetDetay.mlzIsc == \'KM\' || hizmetDetay.mlzIsc ==\'MLZ\'">\n\n      <ion-input type="number" [(ngModel)]="hizmetDetay.miktar"></ion-input>\n\n    </ion-col>\n\n\n\n    <ion-col col-4 col-md-2 *ngIf="hizmetDetay.mlzIsc == \'DGR\'">\n\n      <ion-label color="primary">Birim Fiyat</ion-label>\n\n    </ion-col>\n\n    <ion-col col-8 col-md-10 *ngIf="hizmetDetay.mlzIsc == \'DGR\'">\n\n      <ion-input type="number" [(ngModel)]="birimfiyat"></ion-input>\n\n    </ion-col>\n\n\n\n\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-md-12>\n\n      <button ion-button icon-end [color]="primary" (click)="detayKaydet()" round full>\n\n        Kaydet\n\n        <span item-right>\n\n          <ion-icon name="ion-plus-round"></ion-icon>\n\n        </span>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\hizmet-detay\hizmet-detay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
            __WEBPACK_IMPORTED_MODULE_9__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */],
            __WEBPACK_IMPORTED_MODULE_8__providers_hizmet_service_hizmet_service__["a" /* HizmetService */]])
    ], HizmetDetayComponent);
    return HizmetDetayComponent;
}());

//# sourceMappingURL=hizmet-detay.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetayPiySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetayPiySearchComponent = (function () {
    function DetayPiySearchComponent(viewCtrl, params, util, hizmetService, islemArizaIscilikDao) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.util = util;
        this.hizmetService = hizmetService;
        this.islemArizaIscilikDao = islemArizaIscilikDao;
        this.list = [];
        this.selectedItem = { key: "", value: "", data: {} };
        this.searchText = "";
        this.text = 'Hello World';
        this.pageable = new __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__["a" /* Pageable */]();
        this.data = params.get('data');
        this.dataType = this.data.dataType;
        this.hizmet = this.hizmetService.getHizmet();
        this.filter = this.data.filter;
    }
    DetayPiySearchComponent.prototype.closeModal = function () {
        this.ionChange({ key: '', value: '' });
    };
    DetayPiySearchComponent.prototype.ionViewDidLoad = function () {
        this.fetchList('BEGINNING');
    };
    DetayPiySearchComponent.prototype.fetchList = function (type) {
        var _this = this;
        this.pageable.tip = type;
        this.pageable = this.pageable.compute();
        this.list = [];
        this.prepareSearchItem();
        if (this.dataType == "ISLEM") {
            this.islemArizaIscilikDao.getIslemGrupPage(this.filter, this.searchText).then(function (data) {
                _this.pageable.listLength = data.listLength;
                _this.fillList(data);
            });
        }
        if (this.dataType == "ARIZA") {
            this.islemArizaIscilikDao.getArizaGrupPage(this.filter, this.searchText).then(function (data) {
                _this.pageable.listLength = data.listLength;
                _this.fillList(data);
            });
        }
        if (this.dataType == "PIY") {
            this.islemArizaIscilikDao.getPIYKoduPage(this.filter, this.hizmet.mamKod, this.searchText).then(function (data) {
                _this.pageable.listLength = data.listLength;
                _this.fillList(data);
            });
        }
    };
    DetayPiySearchComponent.prototype.prepareSearchItem = function () {
        this.filter.mamAnaGrp = this.hizmet.mamAnaGrp;
        this.filter.islGrp = this.util.isNotEmpty(this.data.filter.islemKod) ? this.data.filter.islemKod : "";
        this.filter.arzGrp = this.util.isNotEmpty(this.data.filter.arizaKod) ? this.data.filter.arizaKod : "";
    };
    DetayPiySearchComponent.prototype.fillList = function (data) {
        var res = data.rows;
        this.pageable.listLength = this.pageable.listLength == -1 ? data.listLength : this.pageable.listLength;
        for (var i = 0; i < res.length; i++) {
            this.fillItemByType(res.item(i));
        }
        console.dir(res);
    };
    DetayPiySearchComponent.prototype.fillItemByType = function (item) {
        if (this.dataType == "ISLEM") {
            this.list.push({ key: item.islemGrp, value: item.islemGrpAdi, data: item });
        }
        if (this.dataType == "ARIZA")
            this.list.push({ key: item.arizaGrp, value: item.arizaGrpAdi, data: item });
        if (this.dataType == "PIY")
            this.list.push({ key: item.iscKod, value: item.iscAdi, data: item });
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
            selector: 'detay-piy-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\detay-piy-search\detay-piy-search.html"*/'<ion-header>\n\n  <button ion-button round (click)="closeModal()">Iptal</button>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>Searchbar</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n  <!--ion-toolbar>\n\n    <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n      <ion-icon name="arrow-dropleft"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n      <ion-icon name="arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-toolbar-->\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\detay-piy-search\detay-piy-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */]])
    ], DetayPiySearchComponent);
    return DetayPiySearchComponent;
}());

//# sourceMappingURL=detay-piy-search.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KutuphanePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-kutuphane',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\kutuphane\kutuphane.html"*/'<!--\n\n  Generated template for the KutuphanePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button primary>\n\n      <ion-icon name="list"></ion-icon>\n\n    </button>\n\n    <ion-title class="page-title">E-Kütüphane</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\kutuphane\kutuphane.html"*/,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagriAramaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_HizmetSearch__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(8);
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
    function CagriAramaModalPage(viewCtrl, util) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.searchParams = [];
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_HizmetSearch__["a" /* HizmetSearch */]();
    }
    CagriAramaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CagriAramaModalPage');
    };
    CagriAramaModalPage.prototype.closeModal = function () {
        var data = { query: this.query, params: this.searchParams };
        this.viewCtrl.dismiss(data);
    };
    CagriAramaModalPage.prototype.search = function () {
        this.query = " SELECT * FROM OFF_HIZ_MST WHERE 1=1";
        var whereQuery = [];
        var searchType = __WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SEARCH_TYPE.LIKE;
        if (this.util.isNotEmpty(this.filter.randevuTarFirst)) {
            this.query += " AND randevuTarihi > '" + this.filter.randevuTarFirst + " 00:00:00' ";
            this.searchParams.push("Randevu Tarihi Başlangıç: " + this.filter.randevuTarFirst);
        }
        if (this.util.isNotEmpty(this.filter.randevuTarLast)) {
            this.query += " AND randevuTarihi < '" + this.filter.randevuTarLast + " 23:59:59' ";
            this.searchParams.push("Randevu Tarihi Bitiş: " + this.filter.randevuTarLast);
        }
        if (this.util.isNotEmpty(this.filter.seqNo)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "seqNo", this.filter.seqNo));
            this.searchParams.push("Hizmet Form No: " + this.filter.seqNo);
        }
        if (this.util.isNotEmpty(this.filter.durum)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "durum", this.filter.durum));
            this.searchParams.push("Çağrı Durumu: " + this.filter.durum);
        }
        if (this.util.isNotEmpty(this.filter.adi)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "adi", this.filter.adi));
            this.searchParams.push(" Müşteri Adı: " + this.filter.adi);
        }
        if (this.util.isNotEmpty(this.filter.soyadi)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "soyadi", this.filter.soyadi));
            this.searchParams.push("Müşteri Soyadı: " + this.filter.soyadi);
        }
        if (this.util.isNotEmpty(this.filter.unvani)) {
            whereQuery.push(this.util.prepareWhereQuery(searchType, "firmaUnvani", this.filter.unvani));
            this.searchParams.push("Müşteri Ünvanı: " + this.filter.unvani);
        }
        this.query = this.util.prepareQuery(this.query, whereQuery, searchType);
        if (this.util.isNotEmpty(this.filter.telefon)) {
            this.query += " AND ( evTel like '%" + this.filter.telefon + "%' " +
                "OR isTel like '%" + this.filter.telefon + "%' " +
                "OR gsmNo like '%" + this.filter.telefon + "%' )";
            this.searchParams.push("Telefon: " + this.filter.telefon);
        }
        this.closeModal();
    };
    CagriAramaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cagri-arama-modal',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\cagrilar\cagri-arama-modal\cagri-arama-modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title class="page-title">Çağrı Arama Paneli</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item>\n\n    <ion-label>Çağrı No</ion-label>\n\n    <ion-input [(ngModel)]="filter.seqNo"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Çağrı Durumu</ion-label>\n\n    <ion-select [(ngModel)]="filter.durum">\n\n      <ion-option value="ACIK" checked>Açık</ion-option>\n\n      <ion-option value="KAPALI">Kapalı</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Randevu Tarihi</ion-label>\n\n    <ion-datetime [(ngModel)]="filter.randevuTarFirst" displayFormat="DD.MM.YYYY"></ion-datetime>\n\n    <ion-datetime [(ngModel)]="filter.randevuTarLast" displayFormat="DD.MM.YYYY"></ion-datetime>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Müşteri Adı</ion-label>\n\n    <ion-input [(ngModel)]="filter.adi"></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Müşteri Soyadı</ion-label>\n\n    <ion-input [(ngModel)]="filter.soyadi"></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Müşteri Ünvanı</ion-label>\n\n    <ion-input [(ngModel)]="filter.unvani"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Telefon No</ion-label>\n\n    <ion-input [(ngModel)]="filter.telefon"></ion-input>\n\n  </ion-item>\n\n\n\n  <button id="btnModalIptal" ion-button round (click)="closeModal()">Iptal</button>\n\n  <button id="btnModalAra" ion-button round (click)="search()">Ara</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\cagrilar\cagri-arama-modal\cagri-arama-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], CagriAramaModalPage);
    return CagriAramaModalPage;
}());

//# sourceMappingURL=cagri-arama-modal.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_user__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__anasayfa_anasayfa__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_Constants__ = __webpack_require__(8);
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










var LoginPage = (function () {
    function LoginPage(nav, util, alertCtrl, userProvider, loadingCtrl, logger, loginProvider, themeProvider) {
        this.nav = nav;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.loginProvider = loginProvider;
        this.themeProvider = themeProvider;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.userCode = "ECAMERKEZ";
        this.password = "EMAR6464";
        this.hasLoginPermission = false;
        this.themeProvider.setTheme();
        this.user = new __WEBPACK_IMPORTED_MODULE_6__entities_user__["a" /* User */]();
    }
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.util.loaderStart();
                        localStorage.setItem(this.user.keys.userCode, this.userCode);
                        localStorage.setItem(this.user.keys.password, this.password);
                        this.checkLoginInfo();
                        return [4 /*yield*/, this.loginProvider.login(this.userCode, this.password)];
                    case 1:
                        token = _b.sent();
                        this.logger.log("Username: " + this.userCode + " Password: " + this.password);
                        token = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].ACCESS_TOKEN);
                        if (!this.util.isNotEmpty(token)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.userProvider.getUser(this.userCode, this.password)];
                    case 2:
                        _a.user = _b.sent();
                        this.hasLoginPermission = this.user != null;
                        return [3 /*break*/, 4];
                    case 3:
                        this.hasLoginPermission = false;
                        _b.label = 4;
                    case 4:
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
        }
        else {
            this.util.message("Giriş bilgileriniz yanlış lütfen kontrol ediniz.");
        }
        this.util.loaderEnd();
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.checkLoginInfo = function () {
        if (this.util.isEmpty(this.userCode)) {
            this.util.message("Kullanıcı Adı boş olamaz.");
            return false;
        }
        if (this.util.isEmpty(this.password)) {
            this.util.message("Şifre boş olamaz.");
            return false;
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\login\login.html"*/'<ion-content class="content-background login-content" padding>\n\n\n\n  <ion-row>\n\n    <ion-col></ion-col>\n\n    <ion-col class="logo">\n\n      <ion-icon name="contact"></ion-icon>\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n\n\n          <ion-list>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Kullanıcı Adı" name="email" [(ngModel)]="userCode" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input  [type]="passwordType" placeholder="Şifre" name="password" [(ngModel)]="password" required></ion-input>\n\n              <!--<ion-icon item-right [name]="passwordIcon" class="password-icon passIcon" (click)=\'hideShowPassword()\'></ion-icon>-->\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_theme_theme__["a" /* ThemeProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 219:
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
webpackEmptyAsyncContext.id = 219;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_profil__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_enums_eProfil__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Tablo__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_user__ = __webpack_require__(57);
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
        this.profil = new __WEBPACK_IMPORTED_MODULE_1__entities_profil__["a" /* Profil */]();
        this.first = 0;
        this.loginUrl = "";
        this.pageSize = __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].API_PAGE_SIZE;
        this.ACTIVE_PROFIL = __WEBPACK_IMPORTED_MODULE_2__entities_enums_eProfil__["a" /* EProfiles */].LOCAL_DEV;
        this.urlPrefixHizmet = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/hizmet/';
        this.urlPrefixOffline = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/offline/';
        this.urlPrefixKullanici = this.profil.getActiveProfil(this.ACTIVE_PROFIL).domainUrl + '/sos-api/endpointrest/kullanici/';
        this.tables = new __WEBPACK_IMPORTED_MODULE_3__entities_Tablo__["a" /* Tablo */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_6__entities_user__["a" /* User */]();
    }
    ApiProvider.prototype.getTokenUrl = function (userCode, password) {
        var tokenUrl = this.profil.getActiveProfil(this.ACTIVE_PROFIL).securityUrl + '/sos-security-service/oauth/token?grant_type=password&client_id=sos-api-enduser-mobile-client&client_secret=somesecret&';
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

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anasayfa/anasayfa.module": [
		264
	],
	"../pages/ayarlar/ayarlar.module": [
		405
	],
	"../pages/bildirimler/bildirimler.module": [
		497
	],
	"../pages/bilgi-sorgu/bilgi-sorgu.module": [
		498
	],
	"../pages/cagri-detay/cagri-detay.module": [
		499
	],
	"../pages/cagrilar/cagri-arama-modal/cagri-arama-modal.module": [
		907,
		2
	],
	"../pages/cagrilar/cagrilar.module": [
		502
	],
	"../pages/guncelleme/guncelleme.module": [
		503
	],
	"../pages/kampanyalar/kampanyalar.module": [
		504
	],
	"../pages/kutuphane/kutuphane.module": [
		506
	],
	"../pages/list/list.module": [
		908,
		1
	],
	"../pages/login/login.module": [
		909,
		0
	],
	"../pages/shared-module/shared-module.module": [
		41
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
webpackAsyncContext.id = 263;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnasayfaPageModule", function() { return AnasayfaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anasayfa__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ayarlar_ayarlar_module__ = __webpack_require__(405);
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

/***/ 28:
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
        this.cagriTarihi = "";
        this.cmNo = "";
        this.cmTarihi = "";
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
        this.islemBitTarihi = "";
        this.islemTarihi = "";
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
        this.randevuTarihi = "";
        this.sattar = "";
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
        this.seriMetod = "1";
    }
    return Hizmet;
}());

//# sourceMappingURL=hizmet.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_token__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_user__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_Constants__ = __webpack_require__(8);
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
        console.log('Hello TokenProvider Provider');
        this.results = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_8__entities_user__["a" /* User */]();
        this.userCode = localStorage.getItem(this.user.keys.userCode);
        this.password = localStorage.getItem(this.user.keys.password);
        this.getTokenInside();
    }
    TokenProvider.prototype.getToken = function (userCode, password) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUrl, token, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenUrl = this.api.getTokenUrl(userCode, password);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(tokenUrl, {}, {}).toPromise()];
                    case 2:
                        token = _a.sent();
                        this.logger.dir(token);
                        return [2 /*return*/, this.extractData(token)];
                    case 3:
                        e_1 = _a.sent();
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_9__entities_Constants__["a" /* Constants */].ACCESS_TOKEN, "");
                        this.logger.error(e_1);
                        if (e_1.error.error = "invalid_grant") {
                            this.util.message("Giriş bilgileriniz yanlış lütfen kontrol ediniz.");
                        }
                        else {
                            this.util.message("Bağlantı hatası.");
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hizmet_dao_hizmet_dao__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hizmet_hizmet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
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
    }
    HizmetService.prototype.fetchHizmetWithPage = function (hizmet, pageable) {
        return this.hizmetDao.find(hizmet, pageable);
    };
    HizmetService.prototype.fetchHizmet = function (hizmet) {
        return this.hizmetDao.find(hizmet, new __WEBPACK_IMPORTED_MODULE_4__entities_Pageable__["a" /* Pageable */]());
    };
    HizmetService.prototype.fetchHizmetWithQuery = function (query, pageable) {
        return this.hizmetDao.search(query, pageable);
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
            var hizmet, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hizmet = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__["a" /* Hizmet */]();
                        hizmet.seqNo = seqNo;
                        return [4 /*yield*/, this.fetchHizmet(hizmet)];
                    case 1:
                        result = _a.sent();
                        if (this.util.isNotEmpty(result) && this.util.isNotEmpty(result.res.rows) && result.res.rows.length > 0) {
                            hizmet = JSON.parse(result.res.rows.item(0).data);
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
    HizmetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__hizmet_hizmet__["a" /* HizmetProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(14);
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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseProvider = (function () {
    function DatabaseProvider(platform, util) {
        this.platform = platform;
        this.util = util;
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
                .catch(function (e) { return console.log(e); });
        });
    };
    DatabaseProvider.prototype.transaction = function () {
        return new Promise(function (resolve, reject) {
            var tx = window.openDatabase("sos", "1", "SOS DB", 1000000);
            resolve(tx);
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
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_ALERT( bitisTarihi, aciklama, gonderen, id, basTarihi, status, subject, type, valid,  PRIMARY KEY (id))', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_HIZ_MST (seqNo PRIMARY KEY,randevuTarihi DATE,hizmetTipiAdi,mamAnaGrpAdi, basvuruNedeni,durum,' +
                    'adi,soyadi, firmaUnvani, evTel,isTel, gsmNo, data)', []);
                tx.executeSql('CREATE TABLE IF NOT EXISTS  SEHIR_TNM(sehirKodu,sehirAdi, PRIMARY KEY(sehirKodu))');
                tx.executeSql('CREATE TABLE IF NOT EXISTS  ILCE_TNM(sehirKodu, ilceKodu, ilceAdi, PRIMARY KEY(sehirKodu, ilceKodu))');
                tx.executeSql('CREATE TABLE IF NOT EXISTS  MAHALLE_TNM(sehirKodu, ilceKodu, mahalleAdi, mahalleKodu, PRIMARY KEY(sehirKodu, ilceKodu, mahalleKodu))');
                tx.executeSql('CREATE TABLE IF NOT EXISTS OFF_USER_DEF (user TEXT,userCode TEXT, pass TEXT,servis TEXT ,hatirla TEXT, ikKod TEXT, ikAd ,durum TEXT,userType TEXT,userName TEXT,orgKod Text,dilKod TEXT, pB TEXT, dilObjeDetaylari , PRIMARY KEY(user))');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EProfiles; });
var EProfiles;
(function (EProfiles) {
    EProfiles["LOCAL_DEV"] = "LOCAL_DEV";
    EProfiles["LOCAL_TEST"] = "LOCAL_TEST";
    EProfiles["CUSTOMER1"] = "CUSTOMER1";
    EProfiles["CUSTOMER2"] = "CUSTOMER2";
    EProfiles["CUSTOMER3"] = "CUSTOMER3";
})(EProfiles || (EProfiles = {}));
//# sourceMappingURL=eProfil.js.map

/***/ }),

/***/ 394:
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

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_dao_urun_dao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(8);
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
            var data, urun, list, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDataFromApi(first)];
                    case 1:
                        data = _a.sent();
                        urun = new __WEBPACK_IMPORTED_MODULE_3__entities_urun__["a" /* Urun */]();
                        return [4 /*yield*/, urun.fillUrun(data)];
                    case 2:
                        list = _a.sent();
                        if (!(this.util.isNotEmpty(list) && list.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.urunDao.insertList(list)];
                    case 3:
                        item = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].STATUS.SUCCESS);
                            reject(__WEBPACK_IMPORTED_MODULE_7__entities_Constants__["a" /* Constants */].STATUS.ERROR);
                        })];
                }
            });
        });
    };
    UrunProvider.prototype.getDataFromApi = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var header, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        url = this.api.downloadUrunUrl(first);
                        return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
                }
            });
        });
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

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunIscilikProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_urun_iscilik__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__urun_iscilik_dao_urun_iscilik_dao__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__token_token__ = __webpack_require__(29);
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
    function UrunIscilikProvider(http, api, urunIscilikDao, token) {
        this.http = http;
        this.api = api;
        this.urunIscilikDao = urunIscilikDao;
        this.token = token;
        this.INSERT_QUERY = "INSERT OR REPLACE INTO OFF_MAM_ISC_TNM (mamKod,iscKod,iscAdi,durum,iscMikFlag,maxIscMiktar,fiyat,gdfiyat) VALUES(?,?,?,?,?,?,?,?)";
    }
    UrunIscilikProvider.prototype.downloadUrunIscilik = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var item, urunIscilik, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDataFromApi(first)];
                    case 1:
                        item = _a.sent();
                        urunIscilik = new __WEBPACK_IMPORTED_MODULE_4__entities_urun_iscilik__["a" /* UrunIscilik */]();
                        return [4 /*yield*/, urunIscilik.fillUrunIscilik(item)];
                    case 2:
                        list = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.urunIscilikDao.insertList(list).then(function (count) {
                                    console.log(count);
                                    resolve(__WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].STATUS.SUCCESS);
                                });
                            })];
                }
            });
        });
    };
    UrunIscilikProvider.prototype.getDataFromApi = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.urunIscilikDownloadUrl(first);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
                }
            });
        });
    };
    UrunIscilikProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_6__urun_iscilik_dao_urun_iscilik_dao__["a" /* UrunIscilikDao */],
            __WEBPACK_IMPORTED_MODULE_7__token_token__["a" /* TokenProvider */]])
    ], UrunIscilikProvider);
    return UrunIscilikProvider;
}());

//# sourceMappingURL=urun-iscilik.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunMalzemeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun_malzeme__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_malzeme_dao_urun_malzeme_dao__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(8);
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
    function UrunMalzemeProvider(http, urunMalzemeDao, token, api) {
        this.http = http;
        this.urunMalzemeDao = urunMalzemeDao;
        this.token = token;
        this.api = api;
        console.log('Hello UrunMalzemeProvider Provider');
    }
    UrunMalzemeProvider.prototype.downloadUrunMalzeme = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, urunMalzeme, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDataFromApi(first)];
                    case 1:
                        data = _a.sent();
                        urunMalzeme = new __WEBPACK_IMPORTED_MODULE_3__entities_urun_malzeme__["a" /* UrunMalzeme */]();
                        return [4 /*yield*/, urunMalzeme.fillUrunMalzeme(data)];
                    case 2:
                        list = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.urunMalzemeDao.insertList(list).then(function (res) {
                                    resolve(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].STATUS.SUCCESS);
                                    reject(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].STATUS.ERROR);
                                });
                            })];
                }
            });
        });
    };
    UrunMalzemeProvider.prototype.getDataFromApi = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.urunMalzemeDownloadUrl(first);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
                }
            });
        });
    };
    UrunMalzemeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__urun_malzeme_dao_urun_malzeme_dao__["a" /* UrunMalzemeDao */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */]])
    ], UrunMalzemeProvider);
    return UrunMalzemeProvider;
}());

//# sourceMappingURL=urun-malzeme.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunMalzemeDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__ = __webpack_require__(31);
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
    function UrunMalzemeDao(http, dbProvider, baseDao) {
        this.http = http;
        this.dbProvider = dbProvider;
        this.baseDao = baseDao;
        console.log('Hello UrunMalzemeDaoProvider Provider');
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
    UrunMalzemeDao = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__base_dao_base_dao__["a" /* BaseDao */]])
    ], UrunMalzemeDao);
    return UrunMalzemeDao;
}());

//# sourceMappingURL=urun-malzeme-dao.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiyatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_fiyat__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fiyat_dao_fiyat_dao__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(6);
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
    function FiyatProvider(http, api, util, fiyatDao, token) {
        this.http = http;
        this.api = api;
        this.util = util;
        this.fiyatDao = fiyatDao;
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
            var url, header, data, fiyatlar, list, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.fiyatlarDownloadUrl(first, tip);
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        data = _a.sent();
                        fiyatlar = new __WEBPACK_IMPORTED_MODULE_3__entities_fiyat__["a" /* Fiyat */]();
                        return [4 /*yield*/, fiyatlar.fillFiyat(data, tip)];
                    case 3:
                        list = _a.sent();
                        if (!(this.util.isNotEmpty(list) && list.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.fiyatDao.insertList(list)];
                    case 4:
                        item = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].STATUS.SUCCESS);
                            reject(__WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].STATUS.ERROR);
                        })];
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
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */]])
    ], FiyatProvider);
    return FiyatProvider;
}());

//# sourceMappingURL=fiyat.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemArizaIscilikProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_islem_ariza_iscilik__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__token_token__ = __webpack_require__(29);
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
    function IslemArizaIscilikProvider(http, tokenProvider, api, islemArizaIscilikDao) {
        this.http = http;
        this.tokenProvider = tokenProvider;
        this.api = api;
        this.islemArizaIscilikDao = islemArizaIscilikDao;
        console.log('Hello IslemArizaIscilikProvider Provider');
    }
    IslemArizaIscilikProvider.prototype.downloadIslemArizaIscilik = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, islemArizaIscilik, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDataFromApi(first)];
                    case 1:
                        data = _a.sent();
                        islemArizaIscilik = new __WEBPACK_IMPORTED_MODULE_3__entities_islem_ariza_iscilik__["a" /* IslemArizaIscilik */]();
                        return [4 /*yield*/, islemArizaIscilik.fillIslemArizaIscilik(data)];
                    case 2:
                        item = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.islemArizaIscilikDao.insertList(item).then(function (res) {
                                    resolve(res);
                                });
                            })];
                }
            });
        });
    };
    IslemArizaIscilikProvider.prototype.getDataFromApi = function (first) {
        return __awaiter(this, void 0, void 0, function () {
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.islemArizaIscilikDownloadUrl(first);
                        return [4 /*yield*/, this.tokenProvider.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [2 /*return*/, this.http.get(url, { headers: header }).toPromise()];
                }
            });
        });
    };
    IslemArizaIscilikProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */]])
    ], IslemArizaIscilikProvider);
    return IslemArizaIscilikProvider;
}());

//# sourceMappingURL=islem-ariza-iscilik.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemArizaIscilik; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(8);

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var IslemArizaIscilik = (function () {
    function IslemArizaIscilik() {
    }
    IslemArizaIscilik.prototype.fillIslemArizaIscilik = function (data) {
        var parsedList = [];
        var list = data.message[0].liste;
        var versiyon = data.message[0].versiyon;
        /**
         *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
         */
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.ISLEM_ARIZA_ISCILIK, versiyon);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.GELEN_ISLEM_ARIZA_ISCILIK, list.length);
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
}());

//# sourceMappingURL=islem-ariza-iscilik.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdresProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adres_dao_adres_dao__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Sehir__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Ilce__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_mahalle__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__token_token__ = __webpack_require__(29);
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
    function AdresProvider(http, api, token, adresDao, logger) {
        this.http = http;
        this.api = api;
        this.token = token;
        this.adresDao = adresDao;
        this.logger = logger;
        console.log('Hello AdresProvider Provider');
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
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        apiData = _a.sent();
                        sehirList = this.fillSehirList(apiData);
                        this.logger.dir(apiData);
                        return [2 /*return*/, this.adresDao.insertSehirList(sehirList)];
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
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        apiData = _a.sent();
                        ilceList = this.fillIlceList(apiData);
                        return [2 /*return*/, this.adresDao.insertIlceList(ilceList)];
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
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        apiData = _a.sent();
                        mahalleList = this.fillMahalleList(apiData);
                        return [2 /*return*/, this.adresDao.insertMahalleList(mahalleList)];
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
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_MAHALLE_TNM, item.message.data.length.toString());
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
            __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */]])
    ], AdresProvider);
    return AdresProvider;
}());

//# sourceMappingURL=adres.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarantiSorguComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__urun_search_urun_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entities_GarantiSorgu__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_garanti_sorgu_garanti_sorgu__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_user__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var GarantiSorguComponent = (function () {
    function GarantiSorguComponent(urunAnaGrupDao, modalController, util, garantiSorguProvider, http) {
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.modalController = modalController;
        this.util = util;
        this.garantiSorguProvider = garantiSorguProvider;
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
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */], { data: this.data });
        aramaModal.onDidDismiss(function (data) {
            _this.urunAnaGrup = data;
        });
        aramaModal.present();
    };
    GarantiSorguComponent.prototype.urunSorgula = function () {
        var _this = this;
        this.data.type = __WEBPACK_IMPORTED_MODULE_5__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_8__urun_search_urun_search__["a" /* UrunSearchComponent */], { data: this.data });
        aramaModal.onDidDismiss(function (data) {
            _this.urun = data;
        });
        aramaModal.present();
    };
    GarantiSorguComponent.prototype.garantiSorgula = function () {
        if (this.util.isEmpty(this.faturaTarihi)) {
            this.util.message("Fatura tarihi boş bırakılamaz");
            return false;
        }
        if (this.util.isEmpty(this.barkodNo)) {
            this.util.message("Barkod No Boş bırakılamaz");
            return false;
        }
        this.util.message("Garanti Sorgulandı");
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
    GarantiSorguComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'garanti-sorgu',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\garanti-sorgu\garanti-sorgu.html"*/'<!-- Generated template for the HizmetBilgileriComponent component -->\n\n\n\n<ion-row>\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Ürün Ana Grubu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="text" [(ngModel)]="urunAnaGrup.ad" (focus)="urunAnaGrupSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Ürün Kodu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="text" [(ngModel)]="urun.mamKod" (focus)="urunSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Barkod Numarası</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="text" [(ngModel)]="barkodNo" required></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Fatura Tarihi</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="faturaTarihi" required></ion-datetime>\n\n  </ion-col>\n\n\n\n  <ion-col col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n    <button ion-button icon-start full round (click)="garantiSorgula();">\n\n      <ion-icon name="md-help"></ion-icon>\n\n      Garanti Sorgula\n\n    </button>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\garanti-sorgu\garanti-sorgu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguProvider */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]])
    ], GarantiSorguComponent);
    return GarantiSorguComponent;
}());

//# sourceMappingURL=garanti-sorgu.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyarlarPageModule", function() { return AyarlarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ayarlar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(41);
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

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyarlarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cagrilar_cagrilar__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guncelleme_guncelleme__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_tasks_tasks__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_theme_theme__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_logger_logger__ = __webpack_require__(14);
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
        this.onChangeSyncTime('IN');
        this.selectedTheme = this.themeProvider.getSelectedTheme();
        this.onChangeTheme();
    }
    AyarlarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AyarlarPage');
    };
    AyarlarPage.prototype.deleteUrunler = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.baseDao.deleteAll(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN)];
                    case 1:
                        _a.sent();
                        this.util.message("Ürün Listesi Silindi");
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
                        this.util.message("Ürün Ana Grup Listesi Silindi");
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
                        this.util.message("Ürün Ana Grup Listesi Silindi");
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
                        this.util.message("Ürün Malzeme Listesi Silindi");
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
                        this.util.message("Işlem Arıza İşçilik Listesi Silindi");
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
                        this.util.message("Malzeme Fiyat Listesi Silindi");
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
                        this.util.message("Işçilik Fiyat Listesi Silindi");
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
                        this.util.message("Şehir Listesi Silindi");
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
                        this.util.message("Ilçe Listesi Silindi");
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
                        this.util.message("Mahalle Listesi Silindi");
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
                        this.util.message("Çağrı Listesi Silindi");
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
                        this.util.message("Tüm Kayıtlar Silindi.");
                        setTimeout(function () {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__guncelleme_guncelleme__["a" /* GuncellemePage */]);
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    AyarlarPage.prototype.onChangeSyncTime = function (nerden) {
        var permanentSyncTime = Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].SYNC_TIME));
        if (this.util.isEmpty(this.syncTime)) {
            if (this.util.isEmpty(permanentSyncTime)) {
                this.syncTime = this.DEFAULT_SYNC_TIME;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].SYNC_TIME, String(this.DEFAULT_SYNC_TIME));
            }
            else {
                this.syncTime = Number(permanentSyncTime);
            }
        }
        else {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__entities_Constants__["a" /* Constants */].SYNC_TIME, String(this.syncTime));
            if (nerden == 'OUT') {
                this.util.message("Senkronize süresi değiştirildi. Atanan değer " + String(this.syncTime) + " dk.");
                this.tasks.killAndStartTasks();
            }
        }
    };
    AyarlarPage.prototype.onChangeTheme = function () {
        if (this.util.isEmpty(this.selectedTheme)) {
            this.logger.log("Tema seçilmemiş default set edilir.");
            this.themeProvider.setTheme();
        }
        else {
            this.logger.log("Tema değiştirildi. Yeni tema" + this.selectedTheme);
            this.themeProvider.changeTheme(this.selectedTheme);
        }
    };
    AyarlarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ayarlar',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\ayarlar\ayarlar.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n\n\n  <ion-title class="page-title">Ayarlar</ion-title>\n\n\n\n  <ion-toolbar class="main-tabs">\n\n    <ion-segment [(ngModel)]="activePage">\n\n      <ion-segment-button value="silme" class="seg-button">\n\n        Silme Işlemleri\n\n      </ion-segment-button>\n\n      <ion-segment-button value="versiyon" class="seg-button">\n\n        Versiyon\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n  <div [ngSwitch]="activePage">\n\n    <div *ngSwitchCase="\'silme\'">\n\n      <ion-list>\n\n        <button ion-button primary round full (click)="deleteUrunler();">\n\n          <span item-left style="width: 95%">Ürünler</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteUrunAnaGrup();">\n\n          <span item-left style="width: 95%">Ürün Ana Grupları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteUrunIscilik();">\n\n          <span item-left style="width: 95%">Ürün Işçilik</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteUrunMalzeme();">\n\n          <span item-left style="width: 95%">Ürün-Malzeme</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteIslemArizaIscilik();">\n\n          <span item-left style="width: 95%">Işlem-Arıza-Işçilik</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteMalzemeFiyat();">\n\n          <span item-left style="width: 95%">Malzeme Fiyatları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteIscilikFiyat();">\n\n          <span item-left style="width: 95%">Işçilik Fiyatları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteSehirList();">\n\n          <span item-left style="width: 95%">Şehir Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteIlceList();">\n\n          <span item-left style="width: 95%">Ilçe Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full (click)="deleteMahalleList();">\n\n          <span item-left style="width: 95%">Mahalle Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <button ion-button round full (click)="deleteAllRecords();" color="danger">\n\n          <span item-left style="width: 95%">Tüm Kayıtlar</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button round full (click)="deleteAllServices();" color="danger">\n\n          <span item-left style="width: 95%">Tüm Çağrılar</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n      </ion-list>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 col-md-12>\n\n          <ion-title class="page-title"> Arka Plan Ayarları</ion-title>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 col-md-3>\n\n          <ion-label>Senkronize Süresi(Dakika)</ion-label>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-9>\n\n          <ion-select [(ngModel)]="syncTime" interface="popover" (ionChange)="onChangeSyncTime(\'OUT\')">\n\n            <ion-option value="0.5">0.5</ion-option>\n\n            <ion-option value="1">1</ion-option>\n\n            <ion-option value="2">2</ion-option>\n\n            <ion-option value="3">3</ion-option>\n\n            <ion-option value="5">5</ion-option>\n\n            <ion-option value="10">10</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-12 col-md-12>\n\n          <ion-title class="page-title"> Tema Ayarları</ion-title>\n\n        </ion-col>\n\n\n\n\n\n        <ion-col col-12 col-md-12>\n\n          <ion-select [(ngModel)]="selectedTheme" interface="popover" (ionChange)="onChangeTheme()">\n\n            <ion-option value="BLUE">Mavi</ion-option>\n\n            <ion-option value="GREEN">Yeşil</ion-option>\n\n          </ion-select>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'versiyon\'" class="versiyon">\n\n      <button ion-button primary round full>Ürünler</button>\n\n\n\n      <button ion-button primary round full>Ürün Ana Grupları</button>\n\n\n\n      <button ion-button primary round full>Ürün Işçilik</button>\n\n\n\n      <button ion-button primary round full>Ürün-Malzeme</button>\n\n\n\n      <button ion-button primary round full>Işlem-Arıza-Işçilik</button>\n\n\n\n      <button ion-button primary round full>Malzeme Fiyatları</button>\n\n\n\n      <button ion-button primary round full>Işçilik Fiyatları</button>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\ayarlar\ayarlar.html"*/,
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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersiyonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(8);
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
        console.log('Hello VersiyonProvider Provider');
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
                        this.logger.table(res);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_garanti_sorgu_garanti_sorgu__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_garanti_sonuc_garanti_sonuc__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_fiyat_sorgu_fiyat_sorgu__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_urun_search_urun_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_urun_iscilik_search_urun_iscilik_search__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_zebra_printer_zebra_printer__ = __webpack_require__(165);
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
                __WEBPACK_IMPORTED_MODULE_10__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */]
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
                __WEBPACK_IMPORTED_MODULE_10__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared-module.module.js.map

/***/ }),

/***/ 45:
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
        this.pageSize = 20;
        this.listLength = -1;
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
        else if (this.tip == 'PAGENO') {
            this.first = Number(this.pageSize) * Number(this.pageSize);
        }
        return this;
    };
    return Pageable;
}());

//# sourceMappingURL=Pageable.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BildirimlerPageModule", function() { return BildirimlerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bildirimler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mesaj_detail_mesaj_detail__ = __webpack_require__(156);
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

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilgiSorguPageModule", function() { return BilgiSorguPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bilgi_sorgu__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(41);
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

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CagriDetayPageModule", function() { return CagriDetayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagri_detay__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cagri_detay_Components_hizmet_bilgileri_hizmet_bilgileri__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cagri_detay_Components_musteri_bilgileri_musteri_bilgileri__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cagri_detay_components_servis_bilgileri_servis_bilgileri__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cagri_detay_Components_urun_bilgileri_urun_bilgileri__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cagri_detay_components_detay_bilgileri_detay_bilgileri__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cagri_detay_components_servis_bilgileri_islem_tarih_islem_tarih__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cagri_detay_components_servis_bilgileri_servis_islem_tarihce_servis_islem_tarihce__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module_shared_module_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_hizmet_detay_hizmet_detay__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_detay_piy_search_detay_piy_search__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_update_urun_ana_grup_update_urun_ana_grup__ = __webpack_require__(180);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cagri_detay__["a" /* CagriDetayPage */]), __WEBPACK_IMPORTED_MODULE_10__shared_module_shared_module_module__["SharedModule"]
            ],
        })
    ], CagriDetayPageModule);
    return CagriDetayPageModule;
}());

//# sourceMappingURL=cagri-detay.module.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriNoSorguProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(14);
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
                        if (!this.util.isNotEmpty(mamKod)) return [3 /*break*/, 3];
                        url = this.api.seriNoSorguUrl(mamKod);
                        this.logger.warn(url);
                        return [4 /*yield*/, this.tokenProvider.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [4 /*yield*/, this.http.get(url, { headers: header }).toPromise()];
                    case 2:
                        res_1 = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                resolve(res_1);
                            })];
                    case 3:
                        this.util.error("Seri No alanı sorgu için zorunludur.");
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

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_user__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_zebra_printer_zebra_printer__ = __webpack_require__(165);
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
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.user = new __WEBPACK_IMPORTED_MODULE_2__entities_user__["a" /* User */]();
        this.init();
    }
    PrinterService.prototype.init = function () {
    };
    PrinterService.prototype.showPrinterList = function (hizmet) {
        this.hizmet = hizmet;
        var text = this.getPrintText();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */], { text: text });
        modal.present();
    };
    PrinterService.prototype.getPrintText = function () {
        if (this.user.getOrgKod() == "ECA") {
            return this.prepareDataEmar();
        }
        else if (this.user.getOrgKod() == "BAY") {
            return this.prepareDataBaymak();
        }
    };
    PrinterService.prototype.prepareDataEmar = function () {
        var data = "";
        var toplamTutar = 0;
        var kdv = 0;
        data += '! U1 SETLP 5 0 24';
        data += '\n! U1 SETBOLD 2';
        data += '\n      ' + this.util.getSystemLabel("MOBIL_PRINT_HEADER1_LABEL") + '';
        data += '\n! U1 SETBOLD 0';
        data += '\n! U1 SETBOLD 2';
        data += '\n\r    ' + this.util.getSystemLabel("YETKILI_SERVIS_HIZMET_FISI_LABEL") + '';
        data += '\n! U1 SETBOLD 0';
        data += '\n! U1 SETLP 7 0 24';
        data += '\n! U1 SETBOLD 2';
        data += '\n\r BASVURU BILGILERI ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r  Hizmet Tipi         : ' + this.util.translateTurkishCharacters(this.hizmet.hizmetTipiAdi);
        data += '\n\r  Mamul Ana Grubu     : ' + this.util.translateTurkishCharacters(this.hizmet.mamAnaGrpAdi);
        data += '\n\r  Basvuru Nedeni      : ' + this.util.translateTurkishCharacters(this.hizmet.basvuruNedenAdi);
        data += '\n! U1 SETBOLD 2';
        data += '\n\r  Hizmet Formu No     : ' + this.hizmet.seqNo;
        data += '\n! U1 SETBOLD 0';
        data += '\n\r  Cagri No            : ' + this.hizmet.cmNo;
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r SERVIS BILGILERI ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r  Servis Kodu / Adi   : ' + this.hizmet.serKod + '-' + this.util.translateTurkishCharacters(this.hizmet.serAd);
        data += '\n\r  Teknisyen           : ' + this.hizmet.ikKod + '-' + this.util.translateTurkishCharacters(this.user.getIkAd());
        data += '\n\r  Randevu Tarihi      : ' + this.hizmet.randevuTarihi;
        data += '\n\r  Islem Bit. Tarihi   : ' + this.hizmet.islemBitTarihi;
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r MUSTERI BILGILERI ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r  MRK MUSTERI NO      : ' + this.hizmet.crmNo;
        data += '\n\r  Musteri Adi Soyadi  : ' + this.util.translateTurkishCharacters(this.hizmet.adi) + " " + this.util.translateTurkishCharacters(this.hizmet.soyadi) + this.util.translateTurkishCharacters(this.hizmet.firmaUnvani);
        data += '\n\r  Musteri Adresi      : ' + this.util.translateTurkishCharacters(this.hizmet.toString());
        data += '\n\r  Il/Ilce             : ' + this.util.translateTurkishCharacters(this.hizmet.sehir) + "-" + this.util.translateTurkishCharacters(this.hizmet.ilceKod);
        data += '\n\r  Musteri Telefonu    : ' + this.hizmet.evTel;
        data += '\n\r  Cep Telefonu        : ' + this.hizmet.gsmNo;
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r URUN BILGILERI ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r  Urun Kodu           : ' + this.hizmet.mamKod;
        data += '\n\r  Urun Adi            : ' + this.util.translateTurkishCharacters(this.hizmet.mamAdi);
        data += '\n\r  Seri                : ' + this.hizmet.mamSeriNo;
        if (this.hizmet.seriMetod == '2')
            data += '\n\r  Seri 2              : ' + this.hizmet.mamSeriNo2;
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r GARANTI DURUMU ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r  Islem                : ' + (this.hizmet.garanti == 'VAR' ? 'Garanti Dahili' : 'Garanti Disi');
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r VERILEN HIZMETLER ';
        data += '\n! U1 SETBOLD 0';
        data += '\n! U1 SETBOLD 2';
        data += '\n\r  Adi                    Miktar          ' + (this.hizmet.garanti == 'VAR' ? '' : 'Tutar');
        data += '\n! U1 SETBOLD 0';
        var iscilik = "";
        var parca = "";
        var yol = "";
        var diger = "";
        for (var k = 0; this.hizmet.detayDtoList.length > k; k++) {
            var item = this.hizmet.detayDtoList[k];
            toplamTutar = toplamTutar + item.tutar;
            kdv = kdv + (item.tutar / 100 * item.kdvOran);
            if (item.mlzIsc == "ISC" && item.mlzIscKod != "999977" && item.mlzIscKod != "999988") {
                iscilik += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar) : '');
            }
            else if (item.mlzIsc == "MLZ") {
                parca += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar) : '');
            }
            else if (item.mlzIsc == "KM" && item.mlzIscKod == "999988") {
                yol += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar) : '');
            }
            else if (item.mlzIsc == "DGR" && item.mlzIscKod == "999977") {
                diger += '\n\r ' + item.mlzIscKod + '-' + this.util.translateTurkishCharacters(item.aciklama.substring(0, 20)) + '   ' + item.miktar + '-' + item.olcuBrm + '    ' + (this.hizmet.garanti != 'VAR' ? (item.tutar) : '');
            }
            if (iscilik != "") {
                data += '\n! U1 SETBOLD 2';
                data += '\n\r Iscilikler ';
                data += '\n! U1 SETBOLD 0';
                data += iscilik;
            }
            if (parca != "") {
                data += '\n! U1 SETBOLD 2';
                data += '\n\r Parcalar ';
                data += '\n! U1 SETBOLD 0';
                data += parca;
            }
            if (yol != "") {
                data += '\n! U1 SETBOLD 2';
                data += '\n\r Yol ';
                data += '\n! U1 SETBOLD 0';
                data += yol;
            }
            if (diger != "") {
                data += '\n! U1 SETBOLD 2';
                data += '\n\r Diger ';
                data += '\n! U1 SETBOLD 0';
                data += diger;
            }
        }
        data += '\n\r' + this.seperator;
        if (this.hizmet.garanti == 'VAR') {
            data += '\n! U1 SETBOLD 2';
            data += '\n\r Toplam Hizmet Tutari  :   Garanti Dahili Islem ';
            data += '\n! U1 SETBOLD 0';
        }
        else {
            data += '\n! U1 SETBOLD 2';
            //data += '\n\r Toplam Hizmet Tutari  :   ' + (toplamTutar).toFixed(2);
            data += '\n! U1 SETBOLD 0';
        }
        if (this.hizmet.garanti == 'VAR') {
            data += '\n! U1 SETBOLD 2';
            data += '\n\r KDV                   :   Garanti Dahili Islem ';
            data += '\n! U1 SETBOLD 0';
        }
        else {
            data += '\n! U1 SETBOLD 2';
            //data += '\n\r KDV                   :   ' + (kdv).toFixed(2);
            data += '\n! U1 SETBOLD 0';
        }
        if (this.hizmet.garanti == 'VAR') {
            data += '\n! U1 SETBOLD 2';
            data += '\n\r Genel Toplam          :   Garanti Dahili Islem ';
            data += '\n! U1 SETBOLD 0';
        }
        else {
            data += '\n! U1 SETBOLD 2';
            //  data += '\n\r Genel Toplam          :   ' + (kdv + toplamTutar).toFixed(2);
            data += '\n! U1 SETBOLD 0';
        }
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r Aciklama ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r ' + this.util.translateTurkishCharacters(this.hizmet.aciklama);
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        // data += '\n\r Iletisim Istek ';
        data += '\n! U1 SETBOLD 0';
        var note = "Elginkan Toplulugu Sirketleri tarafindan sesli mesaj, sms, e-posta, vb. tum elektronik iletisim vasitalari kullanilarak " +
            "tarafima bilgilendirme ve tanitim yapilmasini kabul ediyorum.";
        data += '\n! U1 SETBOLD 2';
        data += '\n\r ' + note;
        if (this.hizmet.iletisimIstek == 'H')
            data += '\n\r  EVET []  HAYIR[X] ';
        else
            data += '\n\r  EVET [X]  HAYIR[] ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r' + this.seperator;
        data += '\n! U1 SETBOLD 2';
        data += '\n\r TEKNISYEN ADI/IMZA           MUSTERI ADI/IMZA ';
        data += '\n! U1 SETBOLD 0';
        data += '\n\r ' + this.util.translateTurkishCharacters(this.user.getIkAd());
        data += '\n\r\n\r\n! U1 SETBOLD 2';
        data += '\n\r ' + this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER1_LABEL"));
        data += '\n! U1 SETBOLD 0';
        data += '\n\r\n\r\n! U1 SETBOLD 2';
        data += '\n\r ' + this.util.translateTurkishCharacters(this.util.getSystemLabel("MOBIL_PRINT_FOOTER2_LABEL")) + '\n\r ';
        data += '\n!\ U1 SETBOLD 0';
        return data;
    };
    PrinterService.prototype.prepareDataBaymak = function () {
        return "";
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CagrilarPageModule", function() { return CagrilarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagrilar__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(41);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cagrilar__["a" /* CagrilarPage */]), __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__["SharedModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__cagrilar__["a" /* CagrilarPage */]]
        })
    ], CagrilarPageModule);
    return CagrilarPageModule;
}());

//# sourceMappingURL=cagrilar.module.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuncellemePageModule", function() { return GuncellemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guncelleme__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(41);
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

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KampanyalarPageModule", function() { return KampanyalarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kampanyalar__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module_shared_module_module__ = __webpack_require__(41);
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

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KampanyalarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-kampanyalar',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\kampanyalar\kampanyalar.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button primary>\n\n      <ion-icon name="list"></ion-icon>\n\n    </button>\n\n    <ion-title class="page-title">Kampanyalar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\kampanyalar\kampanyalar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], KampanyalarPage);
    return KampanyalarPage;
}());

//# sourceMappingURL=kampanyalar.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KutuphanePageModule", function() { return KutuphanePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kutuphane__ = __webpack_require__(184);
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

/***/ 507:
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

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_user__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_tasks__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(6);
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
        this.DEFAULT_SYNC_TIME = 2;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__entities_user__["a" /* User */]();
    }
    LoginProvider.prototype.login = function (userCode, password) {
        var _this = this;
        this.user.userCode = userCode;
        this.user.password = password;
        return this.token.getToken(userCode, password).then(function (res) {
            localStorage.setItem(_this.user.keys.userCode, userCode);
            localStorage.setItem(_this.user.keys.password, password);
            _this.setDefaultSettings();
            _this.tasks.runTasks();
        });
    };
    LoginProvider.prototype.setDefaultSettings = function () {
        var syncTime = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SYNC_TIME);
        if (this.util.isEmpty(syncTime)) {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__entities_Constants__["a" /* Constants */].SYNC_TIME, String(this.DEFAULT_SYNC_TIME));
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

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_dao_user_dao__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_user__ = __webpack_require__(57);
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
    function UserProvider(http, logger, util, api, userDao) {
        this.http = http;
        this.logger = logger;
        this.util = util;
        this.api = api;
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
                        if (!this.util.isOnline()) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getDataFromApi()];
                    case 1:
                        userApi = _a.sent();
                        userApi.message.password = password;
                        this.user = this.user.fillUser(userApi);
                        return [4 /*yield*/, this.userDao.insertOne(this.user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getDataFromDB()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [4 /*yield*/, this.getDataFromDB()];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserProvider.prototype.getDataFromDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userDao.getList(this.user)];
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
            __WEBPACK_IMPORTED_MODULE_3__user_dao_user_dao__["a" /* UserDao */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrup; });
/* unused harmony export BasvuruListe */
/* unused harmony export CozumListe */
/* unused harmony export UrunAnaGrupListe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(8);

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

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(8);
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

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.pageSize = 10;
        console.log('Hello ListComponent Component');
        this.text = 'Hello World';
        this.list = [
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName1', 'Code1'),
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName2', 'Code2'),
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName3', 'Code3'),
            new __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__["a" /* ListItem */]('ItemName4', 'Code4')
        ];
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    ListPage.prototype.itemSelected = function () {
        console.log("Item selected");
        var obje = {
            sample: 'hello'
        };
        this.viewCtrl.dismiss(obje);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\list\list.html"*/'<!--\n\n  Generated template for the ListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>list</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of list" (click)=" itemSelected(item) ">\n\n      {{ item.name }} -- {{ item.code }}\n\n    </button>\n\n  </ion-list>\n\n  <ion-footer>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 col-sm>\n\n\n\n          <ion-toolbar>\n\n            <button ion-button round>\n\n              <ion-icon name="skip-backward"></ion-icon>\n\n            </button>\n\n            <button ion-button round>\n\n              <ion-icon name="arrow-dropleft"></ion-icon>\n\n            </button>\n\n            <ion-item>\n\n              <ion-select [(ngModel)]="pageSize">\n\n                <ion-option value="10">10</ion-option>\n\n                <ion-option value="20">20</ion-option>\n\n                <ion-option value="50">50</ion-option>\n\n                <ion-option value="100">100</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <button ion-button round>\n\n              <ion-icon name="arrow-dropright"></ion-icon>\n\n            </button>\n\n            <button ion-button round>\n\n              <ion-icon name="skip-forward"></ion-icon>\n\n            </button>\n\n          </ion-toolbar>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-footer>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_view_controller__["a" /* ViewController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(557);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cagrilar_cagrilar__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bildirimler_bildirimler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cagrilar_cagrilar__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_guncelleme_guncelleme__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_kampanyalar_kampanyalar__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_kutuphane_kutuphane__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cagri_detay_cagri_detay__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_login_login__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_urun_urun__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_urun_iscilik_urun_iscilik__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_urun_malzeme_urun_malzeme__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_islem_ariza_iscilik_islem_ariza_iscilik__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_fiyat_fiyat__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cagrilar_cagri_arama_modal_cagri_arama_modal__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_hizmet_hizmet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_list_list__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_list_list__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_sqlite_porter__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_versiyon_versiyon__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_native_storage__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_mesajlar_mesajlar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_bilgi_sorgu_bilgi_sorgu__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_urun_dao_urun_dao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_urun_malzeme_dao_urun_malzeme_dao__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_toast__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_urun_iscilik_dao_urun_iscilik_dao__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_mesajlar_dao_mesajlar_dao__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_urun_search_urun_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_garanti_sorgu_garanti_sorgu__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_shared_module_shared_module_module__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_cagrilar_cagrilar_module__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_guncelleme_guncelleme_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_kampanyalar_kampanyalar_module__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_kutuphane_kutuphane_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_cagri_detay_cagri_detay_module__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_bilgi_sorgu_bilgi_sorgu_module__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_bildirimler_bildirimler_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_adres_adres__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_adres_dao_adres_dao__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_garanti_sonuc_garanti_sonuc__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_garanti_sorgu_garanti_sorgu__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_hizmet_detay_hizmet_detay__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_detay_piy_search_detay_piy_search__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__providers_user_user__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_user_dao_user_dao__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_network__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_anasayfa_anasayfa__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_anasayfa_anasayfa_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_mesaj_detail_mesaj_detail__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__providers_header_header__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__providers_printer_service_printer_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_zebra_printer_zebra_printer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__providers_seri_no_sorgu_seri_no_sorgu__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__components_update_urun_ana_grup_update_urun_ana_grup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__components_urun_iscilik_search_urun_iscilik_search__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__providers_tasks_tasks__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__providers_theme_theme__ = __webpack_require__(105);
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
                __WEBPACK_IMPORTED_MODULE_7__components_cagrilar_cagrilar__["a" /* CagrilarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cagrilar_cagri_arama_modal_cagri_arama_modal__["a" /* CagriAramaModalPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_list_list__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_list_list__["a" /* ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
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
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shared-module/shared-module.module#SharedModule', name: 'SharedModulePage', segment: 'shared-module', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_37__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_51__pages_shared_module_shared_module_module__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_cagrilar_cagrilar_module__["CagrilarPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_guncelleme_guncelleme_module__["GuncellemePageModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_kampanyalar_kampanyalar_module__["KampanyalarPageModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_kutuphane_kutuphane_module__["KutuphanePageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_cagri_detay_cagri_detay_module__["CagriDetayPageModule"],
                __WEBPACK_IMPORTED_MODULE_57__pages_bilgi_sorgu_bilgi_sorgu_module__["BilgiSorguPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_bildirimler_bildirimler_module__["BildirimlerPageModule"],
                __WEBPACK_IMPORTED_MODULE_70__pages_anasayfa_anasayfa_module__["AnasayfaPageModule"]
            ],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__components_cagrilar_cagrilar__["a" /* CagrilarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_bildirimler_bildirimler__["a" /* BildirimlerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cagrilar_cagrilar__["a" /* CagrilarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_guncelleme_guncelleme__["a" /* GuncellemePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_kampanyalar_kampanyalar__["a" /* KampanyalarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_kutuphane_kutuphane__["a" /* KutuphanePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cagri_detay_cagri_detay__["a" /* CagriDetayPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cagrilar_cagri_arama_modal_cagri_arama_modal__["a" /* CagriAramaModalPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_list_list__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_bilgi_sorgu_bilgi_sorgu__["a" /* BilgiSorguPage */],
                __WEBPACK_IMPORTED_MODULE_49__components_urun_search_urun_search__["a" /* UrunSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_garanti_sonuc_garanti_sonuc__["a" /* GarantiSonucComponent */],
                __WEBPACK_IMPORTED_MODULE_63__components_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguComponent */],
                __WEBPACK_IMPORTED_MODULE_64__components_hizmet_detay_hizmet_detay__["a" /* HizmetDetayComponent */],
                __WEBPACK_IMPORTED_MODULE_65__components_detay_piy_search_detay_piy_search__["a" /* DetayPiySearchComponent */],
                __WEBPACK_IMPORTED_MODULE_69__pages_anasayfa_anasayfa__["a" /* Anasayfa */],
                __WEBPACK_IMPORTED_MODULE_71__components_mesaj_detail_mesaj_detail__["a" /* MesajDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_74__components_zebra_printer_zebra_printer__["a" /* ZebraPrinterComponent */],
                __WEBPACK_IMPORTED_MODULE_76__components_update_urun_ana_grup_update_urun_ana_grup__["a" /* UpdateUrunAnaGrupComponent */],
                __WEBPACK_IMPORTED_MODULE_77__components_urun_iscilik_search_urun_iscilik_search__["a" /* UrunIscilikSearchComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                //{ provide: SQLite, useClass: SQLiteMock },
                __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_token_token__["a" /* TokenProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_urun_urun__["a" /* UrunProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_urun_ana_grp_urun_ana_grp__["a" /* UrunAnaGrpProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_urun_iscilik_urun_iscilik__["a" /* UrunIscilikProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_urun_malzeme_urun_malzeme__["a" /* UrunMalzemeProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_islem_ariza_iscilik_islem_ariza_iscilik__["a" /* IslemArizaIscilikProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_fiyat_fiyat__["a" /* FiyatProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_hizmet_hizmet__["a" /* HizmetProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
                __WEBPACK_IMPORTED_MODULE_31__providers_base_dao_base_dao__["a" /* BaseDao */],
                __WEBPACK_IMPORTED_MODULE_32__providers_fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
                __WEBPACK_IMPORTED_MODULE_33__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_versiyon_versiyon__["a" /* VersiyonProvider */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_35__providers_versiyon_versiyon__["a" /* VersiyonProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_mesajlar_mesajlar__["a" /* MesajlarProvider */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_34__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                __WEBPACK_IMPORTED_MODULE_40__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */],
                __WEBPACK_IMPORTED_MODULE_41__providers_urun_dao_urun_dao__["a" /* UrunDao */],
                __WEBPACK_IMPORTED_MODULE_42__providers_urun_malzeme_dao_urun_malzeme_dao__["a" /* UrunMalzemeDao */],
                __WEBPACK_IMPORTED_MODULE_43__providers_islem_ariza_iscilik_dao_islem_ariza_iscilik_dao__["a" /* IslemArizaIscilikDao */],
                __WEBPACK_IMPORTED_MODULE_44__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_46__providers_urun_iscilik_dao_urun_iscilik_dao__["a" /* UrunIscilikDao */],
                __WEBPACK_IMPORTED_MODULE_47__providers_mesajlar_dao_mesajlar_dao__["a" /* MesajlarDao */],
                __WEBPACK_IMPORTED_MODULE_50__providers_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_adres_adres__["a" /* AdresProvider */],
                __WEBPACK_IMPORTED_MODULE_60__providers_adres_dao_adres_dao__["a" /* AdresDao */],
                __WEBPACK_IMPORTED_MODULE_61__providers_logger_logger__["a" /* LoggerProvider */],
                __WEBPACK_IMPORTED_MODULE_66__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_67__providers_user_dao_user_dao__["a" /* UserDao */],
                __WEBPACK_IMPORTED_MODULE_72__providers_header_header__["a" /* HeaderProvider */],
                __WEBPACK_IMPORTED_MODULE_73__providers_printer_service_printer_service__["a" /* PrinterService */],
                __WEBPACK_IMPORTED_MODULE_75__providers_seri_no_sorgu_seri_no_sorgu__["a" /* SeriNoSorguProvider */],
                __WEBPACK_IMPORTED_MODULE_78__providers_tasks_tasks__["a" /* TasksProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_versiyon_versiyon__["a" /* VersiyonProvider */],
                __WEBPACK_IMPORTED_MODULE_79__providers_theme_theme__["a" /* ThemeProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
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
        localStorage.setItem(pattern.keys.ikBrans, JSON.stringify(user.ikBrans));
        localStorage.setItem(pattern.keys.labels, JSON.stringify(user.labels));
        localStorage.setItem(pattern.keys.systemParams, JSON.stringify(user.systemParams));
    };
    User.prototype.getUserCode = function () {
        return localStorage.getItem("userCode");
    };
    User.prototype.getUserName = function () {
        return localStorage.getItem("userName");
    };
    User.prototype.getPb = function () {
        return localStorage.getItem("pb");
    };
    User.prototype.getOrgKod = function () {
        return localStorage.getItem("orgKod");
    };
    User.prototype.getSerKod = function () {
        return localStorage.getItem("servis");
    };
    User.prototype.getDilKod = function () {
        return localStorage.getItem("dilKod");
    };
    User.prototype.getIkAd = function () {
        return localStorage.getItem("ikAd");
    };
    User.prototype.getIkKod = function () {
        return localStorage.getItem("ikKod");
    };
    User.prototype.getPassword = function () {
        return localStorage.getItem("password");
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 267,
	"./af.js": 267,
	"./ar": 268,
	"./ar-dz": 269,
	"./ar-dz.js": 269,
	"./ar-kw": 270,
	"./ar-kw.js": 270,
	"./ar-ly": 271,
	"./ar-ly.js": 271,
	"./ar-ma": 272,
	"./ar-ma.js": 272,
	"./ar-sa": 273,
	"./ar-sa.js": 273,
	"./ar-tn": 274,
	"./ar-tn.js": 274,
	"./ar.js": 268,
	"./az": 275,
	"./az.js": 275,
	"./be": 276,
	"./be.js": 276,
	"./bg": 277,
	"./bg.js": 277,
	"./bm": 278,
	"./bm.js": 278,
	"./bn": 279,
	"./bn.js": 279,
	"./bo": 280,
	"./bo.js": 280,
	"./br": 281,
	"./br.js": 281,
	"./bs": 282,
	"./bs.js": 282,
	"./ca": 283,
	"./ca.js": 283,
	"./cs": 284,
	"./cs.js": 284,
	"./cv": 285,
	"./cv.js": 285,
	"./cy": 286,
	"./cy.js": 286,
	"./da": 287,
	"./da.js": 287,
	"./de": 288,
	"./de-at": 289,
	"./de-at.js": 289,
	"./de-ch": 290,
	"./de-ch.js": 290,
	"./de.js": 288,
	"./dv": 291,
	"./dv.js": 291,
	"./el": 292,
	"./el.js": 292,
	"./en-au": 293,
	"./en-au.js": 293,
	"./en-ca": 294,
	"./en-ca.js": 294,
	"./en-gb": 295,
	"./en-gb.js": 295,
	"./en-ie": 296,
	"./en-ie.js": 296,
	"./en-il": 297,
	"./en-il.js": 297,
	"./en-nz": 298,
	"./en-nz.js": 298,
	"./eo": 299,
	"./eo.js": 299,
	"./es": 300,
	"./es-do": 301,
	"./es-do.js": 301,
	"./es-us": 302,
	"./es-us.js": 302,
	"./es.js": 300,
	"./et": 303,
	"./et.js": 303,
	"./eu": 304,
	"./eu.js": 304,
	"./fa": 305,
	"./fa.js": 305,
	"./fi": 306,
	"./fi.js": 306,
	"./fo": 307,
	"./fo.js": 307,
	"./fr": 308,
	"./fr-ca": 309,
	"./fr-ca.js": 309,
	"./fr-ch": 310,
	"./fr-ch.js": 310,
	"./fr.js": 308,
	"./fy": 311,
	"./fy.js": 311,
	"./gd": 312,
	"./gd.js": 312,
	"./gl": 313,
	"./gl.js": 313,
	"./gom-latn": 314,
	"./gom-latn.js": 314,
	"./gu": 315,
	"./gu.js": 315,
	"./he": 316,
	"./he.js": 316,
	"./hi": 317,
	"./hi.js": 317,
	"./hr": 318,
	"./hr.js": 318,
	"./hu": 319,
	"./hu.js": 319,
	"./hy-am": 320,
	"./hy-am.js": 320,
	"./id": 321,
	"./id.js": 321,
	"./is": 322,
	"./is.js": 322,
	"./it": 323,
	"./it.js": 323,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mn": 340,
	"./mn.js": 340,
	"./mr": 341,
	"./mr.js": 341,
	"./ms": 342,
	"./ms-my": 343,
	"./ms-my.js": 343,
	"./ms.js": 342,
	"./mt": 344,
	"./mt.js": 344,
	"./my": 345,
	"./my.js": 345,
	"./nb": 346,
	"./nb.js": 346,
	"./ne": 347,
	"./ne.js": 347,
	"./nl": 348,
	"./nl-be": 349,
	"./nl-be.js": 349,
	"./nl.js": 348,
	"./nn": 350,
	"./nn.js": 350,
	"./pa-in": 351,
	"./pa-in.js": 351,
	"./pl": 352,
	"./pl.js": 352,
	"./pt": 353,
	"./pt-br": 354,
	"./pt-br.js": 354,
	"./pt.js": 353,
	"./ro": 355,
	"./ro.js": 355,
	"./ru": 356,
	"./ru.js": 356,
	"./sd": 357,
	"./sd.js": 357,
	"./se": 358,
	"./se.js": 358,
	"./si": 359,
	"./si.js": 359,
	"./sk": 360,
	"./sk.js": 360,
	"./sl": 361,
	"./sl.js": 361,
	"./sq": 362,
	"./sq.js": 362,
	"./sr": 363,
	"./sr-cyrl": 364,
	"./sr-cyrl.js": 364,
	"./sr.js": 363,
	"./ss": 365,
	"./ss.js": 365,
	"./sv": 366,
	"./sv.js": 366,
	"./sw": 367,
	"./sw.js": 367,
	"./ta": 368,
	"./ta.js": 368,
	"./te": 369,
	"./te.js": 369,
	"./tet": 370,
	"./tet.js": 370,
	"./tg": 371,
	"./tg.js": 371,
	"./th": 372,
	"./th.js": 372,
	"./tl-ph": 373,
	"./tl-ph.js": 373,
	"./tlh": 374,
	"./tlh.js": 374,
	"./tr": 375,
	"./tr.js": 375,
	"./tzl": 376,
	"./tzl.js": 376,
	"./tzm": 377,
	"./tzm-latn": 378,
	"./tzm-latn.js": 378,
	"./tzm.js": 377,
	"./ug-cn": 379,
	"./ug-cn.js": 379,
	"./uk": 380,
	"./uk.js": 380,
	"./ur": 381,
	"./ur.js": 381,
	"./uz": 382,
	"./uz-latn": 383,
	"./uz-latn.js": 383,
	"./uz.js": 382,
	"./vi": 384,
	"./vi.js": 384,
	"./x-pseudo": 385,
	"./x-pseudo.js": 385,
	"./yo": 386,
	"./yo.js": 386,
	"./zh-cn": 387,
	"./zh-cn.js": 387,
	"./zh-hk": 388,
	"./zh-hk.js": 388,
	"./zh-tw": 389,
	"./zh-tw.js": 389
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
webpackContext.id = 578;

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrupDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_logger__ = __webpack_require__(14);
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

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-shared-module',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\shared-module\shared-module.html"*/'<!--\n\n  Generated template for the SharedModulePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SharedModule</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\shared-module\shared-module.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SharedModulePage);
    return SharedModulePage;
}());

//# sourceMappingURL=shared-module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_eProfil__ = __webpack_require__(393);
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
*/


var Profil = (function () {
    function Profil() {
    }
    Profil.prototype.getActiveProfil = function (ACTIVE_PROFIL) {
        if (ACTIVE_PROFIL == __WEBPACK_IMPORTED_MODULE_1__enums_eProfil__["a" /* EProfiles */].LOCAL_DEV) {
            return this.getlocalDev();
        }
        else if (ACTIVE_PROFIL == __WEBPACK_IMPORTED_MODULE_1__enums_eProfil__["a" /* EProfiles */].LOCAL_TEST) {
            return this.getlocalTest();
        }
        else if (ACTIVE_PROFIL == __WEBPACK_IMPORTED_MODULE_1__enums_eProfil__["a" /* EProfiles */].CUSTOMER1) {
            return this.getCustomer1();
        }
        else if (ACTIVE_PROFIL == __WEBPACK_IMPORTED_MODULE_1__enums_eProfil__["a" /* EProfiles */].LOCAL_DEV) {
            return this.getCustomer2();
        }
        else if (ACTIVE_PROFIL == __WEBPACK_IMPORTED_MODULE_1__enums_eProfil__["a" /* EProfiles */].LOCAL_DEV) {
            return this.getCustomer3();
        }
    };
    Profil.prototype.getlocalDev = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://sos.ecaservis.com.tr:7003";
        domain.securityUrl = "http://sos.ecaservis.com.tr:7003";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        };
        return domain;
    };
    Profil.prototype.getlocalTest = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        };
        return domain;
    };
    Profil.prototype.getCustomer1 = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = "BAY";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "http://sos.baymak.com.tr:7008";
        domain.securityUrl = "http://sos.baymak.com.tr:7008";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        };
        return domain;
    };
    Profil.prototype.getCustomer2 = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        };
        return domain;
    };
    Profil.prototype.getCustomer3 = function () {
        var domain = new __WEBPACK_IMPORTED_MODULE_0__domain__["a" /* Domain */]();
        domain.orgKod = "SAHIN";
        domain.kod = 'SECRET';
        domain.name = 'Development';
        domain.domainUrl = "";
        domain.securityUrl = "";
        domain.activeTabCss = "'background', '#65c8f7','border-bottom','3px solid #65c8f7'";
        domain.passiveTabCss = "'background', '#244085','border-bottom','3px solid #244085'";
        domain.downloadedButtonCss = {
            'background-color': '#004186',
            'color': '#dde5ec'
        };
        domain.notDownloadedButtonCss = {
            'background-color': '#dde5ec',
            'color': '#004186',
            'border': '1px solid #004186',
            'border-bottom': '0px'
        };
        return domain;
    };
    return Profil;
}());

//# sourceMappingURL=profil.js.map

/***/ }),

/***/ 587:
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

/***/ 588:
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

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Token; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(8);

var Token = (function () {
    function Token() {
    }
    Token.prototype.fillToken = function (obj) {
        var item = new Token();
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

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetSearch; });
/**
 * @author mehmets
 * @since 16-May-18.
 */
var HizmetSearch = (function () {
    function HizmetSearch() {
        this.seqNo = "";
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

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunMalzeme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(8);

/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var UrunMalzeme = (function () {
    function UrunMalzeme() {
        this.mamKod = null;
        this.mlzKod = null;
        this.mlzAdi = null;
        this.durum = null;
        this.kdvOran = null;
    }
    UrunMalzeme.prototype.fillUrunMalzeme = function (res) {
        var parsedList = [];
        var urunMalzemeList = res.message[0].liste;
        var urunMalzemeVersiyon = res.message[0].versiyon;
        /**
         *   Versiyon ve Ne kadar verinin geldiği burdan kontrol edilir
         */
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].GELEN_VERI.GELEN_URUN_MALZEME, urunMalzemeList.length);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* Constants */].VERSIYON.SERVER.URUN_MALZEME, urunMalzemeVersiyon);
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
}());

//# sourceMappingURL=urun-malzeme.js.map

/***/ }),

/***/ 592:
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

/***/ 593:
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

/***/ 594:
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

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiyatSorguComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urun__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_urun_iscilik__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__urun_ana_grup_search_urun_ana_grup_search__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__urun_search_urun_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__urun_iscilik_search_urun_iscilik_search__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_fiyat_dao_fiyat_dao__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_fiyat__ = __webpack_require__(159);
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
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_12__entities_fiyat__["a" /* Fiyat */]();
        console.log('Hello FiyatSorguComponent Component');
        this.data = {};
        this.urunAnaGrup = new __WEBPACK_IMPORTED_MODULE_1__entities_urunAnaGrup__["a" /* UrunAnaGrup */](__WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].URUN_ANA_GRUP_TYPE.ANA_GRUP_LISTE);
        this.urun = new __WEBPACK_IMPORTED_MODULE_3__entities_urun__["a" /* Urun */]();
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_6__entities_urun_iscilik__["a" /* UrunIscilik */]();
        this.islemTipi = '';
    }
    FiyatSorguComponent.prototype.urunAnaGrupSorgula = function () {
        var _this = this;
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_6__entities_urun_iscilik__["a" /* UrunIscilik */]();
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_12__entities_fiyat__["a" /* Fiyat */]();
        this.urun = new __WEBPACK_IMPORTED_MODULE_3__entities_urun__["a" /* Urun */]();
        this.data.type = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__urun_ana_grup_search_urun_ana_grup_search__["a" /* UrunAnaGrupSearchComponent */], { data: this.data });
        aramaModal.onDidDismiss(function (data) {
            _this.urunAnaGrup = data;
        });
        aramaModal.present();
    };
    FiyatSorguComponent.prototype.urunSorgula = function () {
        var _this = this;
        this.urunIscilik = new __WEBPACK_IMPORTED_MODULE_6__entities_urun_iscilik__["a" /* UrunIscilik */]();
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_12__entities_fiyat__["a" /* Fiyat */]();
        this.data.type = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_8__urun_search_urun_search__["a" /* UrunSearchComponent */], { data: this.data });
        aramaModal.onDidDismiss(function (data) {
            _this.urun = data;
        });
        aramaModal.present();
    };
    FiyatSorguComponent.prototype.urunIscilikSorgula = function () {
        var _this = this;
        this.fiyat = new __WEBPACK_IMPORTED_MODULE_12__entities_fiyat__["a" /* Fiyat */]();
        if (this.util.isEmpty(this.urun.mamKod)) {
            this.util.message("Önce ürünü seçiniz.");
            return false;
        }
        this.data.type = __WEBPACK_IMPORTED_MODULE_2__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK;
        this.data.mamKod = this.urun.mamKod;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_9__urun_iscilik_search_urun_iscilik_search__["a" /* UrunIscilikSearchComponent */], { data: this.data });
        aramaModal.onDidDismiss(function (data) {
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
            this.util.message("Önce İşçilik/Malzeme seçiniz.");
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
                        filter = new __WEBPACK_IMPORTED_MODULE_12__entities_fiyat__["a" /* Fiyat */]();
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
        if (this.util.isEmpty(this.urun.mamKod)) {
            this.util.message("Önce Ürün/Kodu seçiniz.");
        }
        else {
            this.fiyatBul("MLZ", this.urun.mamKod);
        }
    };
    FiyatSorguComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fiyat-sorgu',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\fiyat-sorgu\fiyat-sorgu.html"*/'<!-- Generated template for the HizmetBilgileriComponent component -->\n\n\n\n<ion-row>\n\n  <ion-col col-6 col-md-2>\n\n    <ion-label color="primary">Önce işlem tipini seçiniz</ion-label>\n\n  </ion-col>\n\n  <ion-col col-6 col-md-10>\n\n    <ion-select [(ngModel)]="islemTipi" interface="popover" (ionChange)="IslemTipiChange()">\n\n      <ion-option value="" selected="true"></ion-option>\n\n      <ion-option value="ISC">İşçilik</ion-option>\n\n      <ion-option value="MLZ">Malzeme</ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-label color="primary">Ürün ana Grubu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-input type="text" [(ngModel)]="urunAnaGrup.ad" (focus)="urunAnaGrupSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi == \'ISC\' || islemTipi == \'MLZ\'">\n\n    <ion-label color="primary">Ürün Kodu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi == \'ISC\' || islemTipi == \'MLZ\'">\n\n    <ion-input type="text" [(ngModel)]="urun.mamKod" (focus)="urunSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-label color="primary">Ürün İşçilik</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-input type="text" [(ngModel)]="urunIscilik.iscAdi" (focus)="urunIscilikSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-label color="primary">Ürün İşçilik</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10 *ngIf="islemTipi != \'\' && islemTipi==\'ISC\'">\n\n    <ion-input type="text" [(ngModel)]="urunIscilik.iscAdi" (focus)="urunIscilikSorgula()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n    <button ion-button icon-start full round (click)="fiyatSorgula();">\n\n      <ion-icon name="md-help"></ion-icon>\n\n      Fiyat Sorgula\n\n    </button>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<ion-row *ngIf="fiyat.fiyat != null">\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">(KDV Dahil) Garanti Fiyat</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-label>{{fiyat.fiyat}}</ion-label>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">(KDV Dahil) Garanti Dışı Fiyat</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-label>{{fiyat.gdFiyat}}</ion-label>\n\n  </ion-col>\n\n\n\n</ion-row>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\fiyat-sorgu\fiyat-sorgu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_fiyat_dao_fiyat_dao__["a" /* FiyatDao */],
            __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__["a" /* LoggerProvider */]])
    ], FiyatSorguComponent);
    return FiyatSorguComponent;
}());

//# sourceMappingURL=fiyat-sorgu.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logger_logger__ = __webpack_require__(14);
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
    function UtilProvider(toast, network, logger, loadingController) {
        this.toast = toast;
        this.network = network;
        this.logger = logger;
        this.loadingController = loadingController;
        this.isLoaderRunning = false;
        __WEBPACK_IMPORTED_MODULE_3_moment___default.a.locale('tr');
    }
    UtilProvider.prototype.isEmpty = function (item) {
        return (typeof item == 'undefined' || item == null || item == "");
    };
    UtilProvider.prototype.isNotEmpty = function (item) {
        return !(typeof item == 'undefined' || item == null || item == "");
    };
    UtilProvider.prototype.prepareForLike = function (key, value) {
        return key + " LIKE '%" + value.split('').join('%') + "%'";
    };
    UtilProvider.prototype.prepareForEqual = function (key, value) {
        return key + "='" + value + "'";
    };
    UtilProvider.prototype.prepareWhereQuery = function (type, key, value) {
        return type == __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT ? this.prepareForEqual(key, value) : this.prepareForLike(key, value);
    };
    UtilProvider.prototype.prepareQuery = function (query, whereQueries, searchType) {
        var AndOr = searchType == __WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT ? ' AND ' : ' OR ';
        if (whereQueries.length > 0) {
            query += " AND (";
            query += whereQueries.join(AndOr);
            query += ")";
        }
        return query;
    };
    UtilProvider.prototype.message = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    };
    UtilProvider.prototype.info = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    };
    UtilProvider.prototype.warn = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 3000,
            position: 'top',
        });
        toast.present();
    };
    UtilProvider.prototype.error = function (message) {
        var toast = this.toast.create({
            message: message,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    };
    UtilProvider.prototype.dateFormat = function (dateString, format) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()(dateString).format(format);
    };
    UtilProvider.prototype.dateFormatRegex = function (x, y) {
        x = new Date(x);
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
        });
        return y.replace(/(y+)/g, function (v) {
            return x.getFullYear().toString().slice(-v.length);
        });
    };
    UtilProvider.prototype.addMinutes = function (dateStr, addition) {
        return new Date(dateStr.setTime(dateStr.getTime() + 1000 * 60 * addition));
    };
    // FIXME: Pluginden alınan bilgiye göre cevap dönecek
    UtilProvider.prototype.isOnline = function () {
        var connection = true;
        var connectionType = this.network.type;
        this.logger.warn(connectionType);
        return connection;
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
        if (text != null && text != '') {
            var y = text.split('');
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
    UtilProvider.prototype.loaderStart = function () {
        if (!this.isLoaderRunning) {
            this.loader = this.loadingController.create({ spinner: 'dots' });
            this.isLoaderRunning = true;
            this.loader.present();
        }
    };
    UtilProvider.prototype.loaderEnd = function () {
        if (this.isLoaderRunning)
            this.loader.dismissAll();
        this.isLoaderRunning = false;
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
            maskedValue = "(" + tel.substring(0, 3) + ") " + tel.substring(3, 6) + "-" + tel.substring(6, 10);
            return maskedValue;
        }
    };
    UtilProvider.prototype.getSelectedTheme = function () {
        var theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__entities_Constants__["a" /* Constants */].SELECTED_THEME);
        if (this.isEmpty) {
            theme = 'blue-theme';
        }
        return theme;
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger_logger__ = __webpack_require__(14);
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
    function HizmetDao(baseDao, logger) {
        this.baseDao = baseDao;
        this.logger = logger;
        this.INSERT_QUERY = "INSERT INTO OFF_HIZ_MST(seqNo, randevuTarihi, hizmetTipiAdi, mamAnaGrpAdi, basvuruNedeni, durum, adi, soyadi, firmaUnvani, evTel, isTel, gsmNo, data) " +
            " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ";
        this.UPDATE_QUERY = "UPDATE OFF_HIZ_MST SET seqNo =?, randevuTarihi=?, hizmetTipiAdi=?, mamAnaGrpAdi=?, basvuruNedeni=?, durum=?, adi=?, soyadi=?, firmaUnvani=?" +
            ", evTel =?, isTel=?, gsmNo=?, data=? WHERE seqNo=?  ";
        this.DELETE_QUERY = "DELETE FROM OFF_HIZ_MST";
        this.insertedRow = 0;
    }
    // Listede her bir item kayit edilir ve liste tekrar cagrilir.Cagrilmadan once kayit edilen item listeden silinir.
    HizmetDao.prototype.insertList = function (list) {
        var array = new Array();
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
                        hizmetObject = JSON.stringify(hizmet);
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
        var hizmetObject = JSON.stringify(hizmet);
        var params = [hizmet.seqNo, hizmet.randevuTarihi, hizmet.hizmetTipiAdi, hizmet.mamAnaGrpAdi, hizmet.basvuruNedeni,
            hizmet.durum, hizmet.adi, hizmet.soyadi, hizmet.firmaUnvani, hizmet.evTel, hizmet.isTel, hizmet.gsmNo, hizmetObject, hizmet.seqNo];
        return this.baseDao.execute(this.UPDATE_QUERY, params);
    };
    HizmetDao.prototype.find = function (item, pageable) {
        var query = this.prepareSelectQuery(item);
        return this.search(query, pageable);
    };
    HizmetDao.prototype.search = function (query, pageable) {
        return this.baseDao.getList(query, "seqNo", "", "EXACT", pageable.first, pageable.pageSize, true);
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
        if (item.randevuTarihi != null && item.randevuTarihi != "")
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
        return this.baseDao.execute(this.DELETE_QUERY, []);
    };
    HizmetDao.prototype.deleteHizmet = function (seqNo) {
        var query = this.DELETE_QUERY + " WHERE seqNo='" + seqNo + "'";
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__["a" /* BaseDao */], __WEBPACK_IMPORTED_MODULE_3__logger_logger__["a" /* LoggerProvider */]])
    ], HizmetDao);
    return HizmetDao;
}());

//# sourceMappingURL=hizmet-dao.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagrilarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cagri_detay_cagri_detay__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cagri_arama_modal_cagri_arama_modal__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_hizmet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header__ = __webpack_require__(98);
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
    function CagrilarPage(navCtrl, navParams, modalController, cagriProvider, hizmetService, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.cagriProvider = cagriProvider;
        this.hizmetService = hizmetService;
        this.util = util;
        this.cagrilar = [];
        this.searchQuery = "";
        this.searchType = "BEGINNING";
        this.searchParams = [];
        this.pageable = new __WEBPACK_IMPORTED_MODULE_9__entities_Pageable__["a" /* Pageable */]();
    }
    CagrilarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CagrilarPage');
        this.title = 'Çağrılar';
        this.fetchList(this.searchType);
    };
    CagrilarPage.prototype.cagriDetayinaGit = function (event, seqNo) {
        event.stopPropagation();
        var params = { seqNo: seqNo };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cagri_detay_cagri_detay__["a" /* CagriDetayPage */], params);
    };
    CagrilarPage.prototype.cagriSorgula = function () {
        var _this = this;
        var aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__cagri_arama_modal_cagri_arama_modal__["a" /* CagriAramaModalPage */]);
        aramaModal.onDidDismiss(function (data) {
            _this.searchQuery = data.query;
            _this.searchParams = data.params;
            _this.fetchList(_this.searchType);
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
                        if (!this.util.isNotEmpty(this.searchQuery)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.hizmetService.fetchHizmetWithQuery(this.searchQuery, this.pageable)];
                    case 1:
                        list = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        hizmet = new __WEBPACK_IMPORTED_MODULE_7__entities_hizmet_hizmet__["a" /* Hizmet */]();
                        hizmet.durum = 'ACIK';
                        return [4 /*yield*/, this.hizmetService.fetchHizmetWithPage(hizmet, this.pageable)];
                    case 3:
                        list = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (this.util.isNotEmpty(list.res.rows)) {
                            this.pageable.listLength = list.listLength;
                            for (i = 0; i < list.res.rows.length; i++) {
                                data = JSON.parse(list.res.rows.item(i).data);
                                this.cagrilar.push(data);
                            }
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
                    case 0:
                        this.util.loaderStart();
                        return [4 /*yield*/, this.cagriProvider.downloadCagriList().then(function (res) {
                                _this.fetchList(_this.searchType);
                                _this.util.message("Çağrılar Güncellendi.");
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("header"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__components_header_header__["a" /* HeaderComponent */])
    ], CagrilarPage.prototype, "header", void 0);
    CagrilarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cagrilar',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\cagrilar\cagrilar.html"*/'<ion-header class="header-content">\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="content cagri-content">\n\n\n\n  <ion-title class="page-title">{{title}}</ion-title>\n\n\n\n  <ion-row class="mb-20">\n\n    <ion-col col-6 col-6 col-sm>\n\n      <button ion-button id="btnCagriSorgu" round full cgrArama (click)="cagriSorgula();" color="secondary">Sorgula\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-6 col-6 col-sm>\n\n      <button ion-button id="btnCagriGuncelle" round full cgrGuncelle (click)="cagriGuncelle();" color="secondary">\n\n        Güncelle\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="this.searchParams != \'\'">\n\n    <ion-chip *ngFor="let sorgu of searchParams">\n\n      <ion-label>{{sorgu}}</ion-label>\n\n    </ion-chip>\n\n  </ion-row>\n\n\n\n  <ion-card *ngFor="let cagri of cagrilar" (click)="cagriDetayinaGit($event, cagri.seqNo)" class="card-box">\n\n    <label>\n\n      <strong>\n\n        <i class="fas fa-user"></i>\n\n        {{cagri.adi }} {{cagri.soyadi}} ({{cagri.seqNo}}) - ({{cagri.crmNo}})\n\n      </strong>\n\n    </label>\n\n    <p>\n\n      <i class="fas fa-cog"></i>\n\n      {{cagri.mamAnaGrpAdi}} | {{cagri.hizmetTipiAdi}} | {{cagri.basvuruNedenAdi}}\n\n    </p>\n\n    <p>\n\n      <i class="fas fa-phone"></i>{{cagri.gsmNo}} | {{cagri.evTel}} | {{cagri.evTel}}\n\n    </p>\n\n    <p class="call-date">\n\n      <i class="far fa-clock"></i> {{cagri.randevuTarihi | date: \'dd-MM-yyyy HH:mm\'}} </p>\n\n    <p>{{cagri.Adres}}</p>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-row>\n\n    <ion-col col-4 col-md-2>\n\n      <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n        <ion-icon name="arrow-dropleft"></ion-icon>\n\n      </button>\n\n      <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-8>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-2>\n\n      <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n      <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n        <ion-icon name="arrow-dropright"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\cagrilar\cagrilar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_hizmet_hizmet__["a" /* HizmetProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_util_util__["a" /* UtilProvider */]])
    ], CagrilarPage);
    return CagrilarPage;
}());

//# sourceMappingURL=cagrilar.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hizmet_dao_hizmet_dao__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__token_token__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_api__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_hizmet_DetayKayit__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_util__ = __webpack_require__(6);
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
    function HizmetProvider(http, api, hizmetDao, token, util) {
        this.http = http;
        this.api = api;
        this.hizmetDao = hizmetDao;
        this.token = token;
        this.util = util;
        console.log('Hello CagriProvider Provider');
    }
    HizmetProvider.prototype.downloadCagriList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fetchDataFromApi()
                .then(function (res) { return _this.insertComingData(res); })
                .then(function (res) { return resolve("SUCCESS"); });
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
                        return [2 /*return*/, this.http.post(url, hizmet, { headers: header }).toPromise()];
                }
            });
        });
    };
    HizmetProvider.prototype.fetchDataFromApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, header;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.api.getCagriListUrl();
                        return [4 /*yield*/, this.token.callTokenAndGetHeader()];
                    case 1:
                        header = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.http.get(url, { headers: header }).toPromise().then(function (res) {
                                    resolve(res);
                                });
                            })];
                }
            });
        });
    };
    HizmetProvider.prototype.insertComingData = function (res) {
        var hizmetList;
        hizmetList = this.seperateCagri(res);
        return this.hizmetDao.insertList(hizmetList);
    };
    HizmetProvider.prototype.updateComingData = function (res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var hizmetList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hizmetList = this.seperateCagri(res);
                        return [4 /*yield*/, hizmetList.forEach(function (item) {
                                _this.hizmetDao.updateHizmet(item);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HizmetProvider.prototype.seperateCagri = function (obj) {
        var hizmetList = [];
        var list = [];
        list = obj.message.hizmetDtoList;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            debugger;
            var cgr = this.fillHizmet(item);
            hizmetList.push(cgr);
        }
        return hizmetList;
    };
    HizmetProvider.prototype.fillHizmet = function (obj) {
        /**
         *
         * @type fromServer
         *  @description Hem Sunucudan gelen veri hem de uygulama içerisindeki veri bu fonksiyon ile dolduruluyor.
         *  Sunucu ile Client verisi hazırlanırken ufak bir farklılık mevcut. Bu farklılığı 'fromServer' ile yönetiyoruz.
         *  farklılık:
         *    server : detayDtoList : [][]
         *    client : detayDtoList : []
         *
         */
        var fromServer = false;
        var item = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        item.aciklama = obj.aciklama;
        item.adi = obj.adi;
        //item.anket = Anket[];
        item.aparman = obj.aparman;
        item.apartmanNo = obj.apartmanNo;
        item.basvuruNedenAdi = obj.basvuruNedenAdi;
        item.basvuruNedeni = obj.basvuruNedeni;
        item.bayiKod = obj.bayiKod;
        item.blok = obj.blok;
        item.cadde = obj.cadde;
        item.cagriTarihi = obj.cagriTarihi;
        item.cmNo = obj.cmNo;
        item.cmTarihi = obj.cmTarihi;
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
        item.islemBitTarihi = obj.islemBitTarihi;
        if (obj.islemList != null && obj.islemList.length > 0) {
            fromServer = Array.isArray(obj.islemList[0]);
            item.islemList = fromServer ? obj.islemList[0] : obj.islemList;
        }
        item.islemTarihi = obj.islemTarihi;
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
        item.randevuTarihi = obj.randevuTarihi;
        item.sattar = obj.sattar;
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
    HizmetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1__hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_3__token_token__["a" /* TokenProvider */],
            __WEBPACK_IMPORTED_MODULE_7__util_util__["a" /* UtilProvider */]])
    ], HizmetProvider);
    return HizmetProvider;
}());

//# sourceMappingURL=hizmet.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuncellemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_urun_urun__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urun_iscilik_urun_iscilik__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_urun_malzeme_urun_malzeme__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_fiyat_fiyat__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_islem_ariza_iscilik_islem_ariza_iscilik__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_adres_adres__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header__ = __webpack_require__(98);
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
    function GuncellemePage(navCtrl, navParams, urunProvider, urunAnaGrpProvider, urunIscilikProvider, urunMalzemeProvider, islemArizaIscilikProvider, fiyatProvider, adresProvider, logger, util) {
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
        this.util = util;
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
        this.ionViewDidLoad();
    }
    GuncellemePage.prototype.downloadUrunler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN);
                        this.util.loaderStart();
                        return [4 /*yield*/, this.urunProvider.downloadUrunler(this.firstForUrunler)];
                    case 1:
                        res = _a.sent();
                        this.logger.warn("downloadUrunler ==> " + res);
                        if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_URUN)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                            this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN, "Ürünler Kayıt Edildi.");
                        }
                        else {
                            this.firstForUrunler += this.pageSize;
                            this.downloadUrunler();
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
            this.util.loaderStart();
            this.urunAnaGrpProvider.downloadUrunAnaGrup().then(function (res) {
                _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ANA_GRUP, "Ürün Ana grup Kayıt Edildi.");
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
                        this.util.loaderStart();
                        return [4 /*yield*/, this.urunIscilikProvider.downloadUrunIscilik(this.firstForUrunIscilik)];
                    case 1:
                        res = _a.sent();
                        this.logger.warn("downloadUrunIscilik ==> " + res);
                        if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_URUN_ISCILIK)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                            this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_ISCILIK, "Ürün İşçilik Kayıt Edildi.");
                        }
                        else {
                            this.firstForUrunIscilik += this.pageSize;
                            this.downloadUrunIscilik();
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
            this.util.loaderStart();
            this.urunMalzemeProvider.downloadUrunMalzeme(this.firstForUrunMalzeme).then(function (res) {
                _this.logger.warn("downloadUrunMalzeme ==> " + res);
                if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_URUN_MALZEME)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                    _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME, "Ürün İşçilik Kayıt Edildi.");
                }
                else {
                    _this.firstForUrunMalzeme += _this.pageSize;
                    _this.downloadUrunMalzeme();
                }
            });
            this.util.timerEnd(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME);
        }
        catch (e) {
            this.catchException(e, __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.URUN_MALZEME);
        }
    };
    GuncellemePage.prototype.downloadIslemArizaIscilik = function () {
        var _this = this;
        try {
            this.util.timerStart(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK);
            this.util.loaderStart();
            this.islemArizaIscilikProvider.downloadIslemArizaIscilik(this.firstForIslemArizaIscilik).then(function (res) {
                _this.logger.warn("downloadIslemArizaIscilik ==> " + res);
                if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_ISLEM_ARIZA_ISCILIK)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                    _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISLEM_ARIZA_ISCILIK, "Islem Ariza Iscilik Kayıt Edildi.");
                }
                else {
                    _this.firstForIslemArizaIscilik += _this.pageSize;
                    _this.downloadIslemArizaIscilik();
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
                        this.util.loaderStart();
                        return [4 /*yield*/, this.fiyatProvider.downloadMalzemeFiyat(this.firstForMalzemeFiyat)];
                    case 1:
                        res = _a.sent();
                        this.logger.warn("downloadMalzemeFiyat ==> " + res);
                        if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_MALZEME_FIYAT)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                            this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MALZEME_FIYAT, "Malzeme Fiyatı Kayıt Edildi.");
                        }
                        else {
                            this.firstForMalzemeFiyat += this.pageSize;
                            this.downloadMalzemeFiyat();
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
                        this.util.loaderStart();
                        return [4 /*yield*/, this.fiyatProvider.downloadIscilikFiyat(this.firstForIscilikFiyat).then(function (res) {
                                _this.logger.warn("downloadIscilikFiyat ==> " + res);
                                if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_ISCILIK_FIYAT)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                                    _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ISCILIK_FIYAT, "Iscilik Fiyatı Kayıt Edildi.");
                                }
                                else {
                                    _this.firstForIscilikFiyat += _this.pageSize;
                                    _this.downloadIscilikFiyat();
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
                        this.util.loaderStart();
                        return [4 /*yield*/, this.adresProvider.downloadSehirData().then(function (res) {
                                _this.logger.warn("downloadSehirList ==> " + res);
                                _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.SEHIR_TNM, "Şehir listesi güncellendi.");
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
                        this.util.loaderStart();
                        return [4 /*yield*/, this.adresProvider.downloadIlceData().then(function (res) {
                                _this.logger.warn("downloadIlceList ==> " + res);
                                _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.ILCE_TNM, "Ilçe listesi güncellendi.");
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
                        this.util.loaderStart();
                        return [4 /*yield*/, this.adresProvider.downloadMahalleData(this.firstForMahalleTnm).then(function (res) {
                                _this.logger.warn("downloadMahalleList ==> " + res);
                                if (Number(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].GELEN_VERI.GELEN_MAHALLE_TNM)) < __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].API_PAGE_SIZE) {
                                    _this.doWhenDataDownloaded(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].DATA_TYPE.MAHALLE_TNM, "Mahalle Bilgisi Kayıt Edildi.");
                                }
                                else {
                                    _this.firstForMahalleTnm += _this.pageSize;
                                    _this.downloadMahalleList();
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
        if (serverVersiyon == '-1' || clientVersiyon != serverVersiyon || (this.util.isNotEmpty(gelenVeri) && gelenVeri != "0")) {
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].COLORS[type] = "notDownloaded";
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].ICONS[type] = "download";
        }
        else {
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].COLORS[type] = "downloaded";
            __WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].ICONS[type] = "done-all";
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
        this.updateHeader();
        this.util.error("Indirme işleminde Hata oluştu lütfen tekrar deneyiniz." + place);
        this.util.loaderEnd();
    };
    GuncellemePage.prototype.doWhenDataDownloaded = function (type, message) {
        var _this = this;
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].VERSIYON.CLIENT[type], localStorage.getItem(__WEBPACK_IMPORTED_MODULE_8__entities_Constants__["a" /* Constants */].VERSIYON.SERVER[type]));
        this.colors[type] = "downloaded";
        this.icons[type] = "done-all";
        this.util.loaderEnd();
        this.updateHeader();
        setTimeout(function () {
            _this.util.message(message);
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("header"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__components_header_header__["a" /* HeaderComponent */])
    ], GuncellemePage.prototype, "header", void 0);
    GuncellemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-guncelleme',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\guncelleme\guncelleme.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n\n\n  <ion-title class="page-title">Güncelleme</ion-title>\n\n\n\n  <ion-toolbar class="main-tabs">\n\n    <ion-segment [(ngModel)]="activePage">\n\n      <ion-segment-button value="guncelleme" class="seg-button">\n\n        Güncelleme\n\n      </ion-segment-button>\n\n      <ion-segment-button value="versiyon" class="seg-button">\n\n        Versiyon\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n  <div [ngSwitch]="activePage">\n\n    <div *ngSwitchCase="\'guncelleme\'">\n\n\n\n      <ion-list>\n\n        <button ion-button primary round full [color]="colors.URUN" (click)="downloadUrunler();" round full>\n\n          <span item-left style="width: 95%">Ürünler</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.URUN_ANA_GRUP" (click)="downloadUrunAnaGrup();" round full>\n\n          <span item-left style="width: 95%">Ürün Ana Grupları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN_ANA_GRUP"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.URUN_ISCILIK" (click)="downloadUrunIscilik();" round full>\n\n          <span item-left style="width: 95%">Ürün Işçilik</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN_ISCILIK"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.URUN_MALZEME" (click)="downloadUrunMalzeme();" round full>\n\n          <span item-left style="width: 95%">Ürün-Malzeme</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.URUN_MALZEME"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.ISLEM_ARIZA_ISCILIK" (click)="downloadIslemArizaIscilik();" round full>\n\n          <span item-left style="width: 95%">İşlem-Arıza-İşçilik</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.ISLEM_ARIZA_ISCILIK"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.MALZEME_FIYAT" (click)="downloadMalzemeFiyat();" round full>\n\n          <span item-left style="width: 95%">Malzeme Fiyatları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.MALZEME_FIYAT"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.ISCILIK_FIYAT" (click)="downloadIscilikFiyat();" round full>\n\n          <span item-left style="width: 95%">İşçilik Fiyatları</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.ISCILIK_FIYAT"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.SEHIR_TNM" (click)="downloadSehirList();" round full>\n\n          <span item-left style="width: 95%">Şehir Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.SEHIR_TNM"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.ILCE_TNM" (click)="downloadIlceList();" round full>\n\n          <span item-left style="width: 95%">İİlçe Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.ILCE_TNM"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n        <button ion-button primary round full [color]="colors.MAHALLE_TNM" (click)="downloadMahalleList();" round full>\n\n          <span item-left style="width: 95%"> Mahalle Listesi</span>\n\n          <span item-right style="width: 5%">\n\n            <ion-icon [name]="icons.MAHALLE_TNM" class="mr-icon"></ion-icon>\n\n          </span>\n\n        </button>\n\n\n\n      </ion-list>\n\n\n\n\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'versiyon\'">\n\n      <button ion-button primary round full [color]="light">Ürünler</button>\n\n      <button ion-button primary round full [color]="light">Ürün Ana Grupları</button>\n\n      <button ion-button primary round full [color]="light">Ürün İşçilik</button>\n\n      <button ion-button primary round full [color]="light">Ürün-Malzeme</button>\n\n      <button ion-button primary round full [color]="light">İşlem-Arıza-İşçilik</button>\n\n      <button ion-button primary round full [color]="light">Malzeme Fiyatları</button>\n\n      <button ion-button primary round full [color]="light">İşçilik Fiyatları</button>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\guncelleme\guncelleme.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_11__providers_util_util__["a" /* UtilProvider */]])
    ], GuncellemePage);
    return GuncellemePage;
}());

//# sourceMappingURL=guncelleme.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiyatDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(8);
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
        if (this.util.isNotEmpty(item.mamKod))
            whereQuery.push(this.util.prepareWhereQuery(searchType, "mamKod", item.mamKod));
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunAnaGrupSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(7);
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
    function UrunAnaGrupSearchComponent(viewCtrl, params, util, urunAnaGrupDao) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.list = [];
        this.selectedItem = { key: "", value: "" };
        this.searchText = "";
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
        debugger;
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
            selector: 'urun-ana-grup-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\urun-ana-grup-search\urun-ana-grup-search.html"*/'<ion-header>\n\n  <button ion-button round (click)="closeModal()">Iptal</button>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>Searchbar</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n  <ion-toolbar>\n\n    <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n      <ion-icon name="arrow-dropleft"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n      <ion-icon name="arrow-back"></ion-icon>\n\n    </button>\n\n\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n    <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n      <ion-icon name="arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\urun-ana-grup-search\urun-ana-grup-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */]])
    ], UrunAnaGrupSearchComponent);
    return UrunAnaGrupSearchComponent;
}());

//# sourceMappingURL=urun-ana-grup-search.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_urun__ = __webpack_require__(101);
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
    function UrunSearchComponent(viewCtrl, params, urunDao, util) {
        this.viewCtrl = viewCtrl;
        this.urunDao = urunDao;
        this.util = util;
        this.list = [];
        this.selectedItem = { key: "", value: "" };
        this.searchText = "";
        this.pageable = new __WEBPACK_IMPORTED_MODULE_1__entities_Pageable__["a" /* Pageable */]();
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
        this.list.push({ key: item.mamAdi, value: item.mamKod });
    };
    UrunSearchComponent.prototype.ionChange = function (item) {
        this.prepareUrunReturnValue(item);
        this.viewCtrl.dismiss(this.returnObject);
    };
    UrunSearchComponent.prototype.prepareUrunReturnValue = function (item) {
        this.urun.mamAdi = this.util.isEmpty(item.key) ? '' : item.key;
        this.urun.mamKod = this.util.isEmpty(item.value) ? '' : item.value;
        this.returnObject = this.urun;
    };
    UrunSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'urun-search',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\urun-search\urun-search.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-row class="modal-title">\n\n      <ion-col col-11 col-md-11>\n\n        <ion-title>Ürün Arama</ion-title>\n\n      </ion-col>\n\n      <ion-col col-1 col-md-1>\n\n        <ion-icon name="close" (click)="closeModal()" class="pull-right close-icon"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="content">\n\n\n\n  <ion-searchbar placeholder="Ara" [(ngModel)]="searchText" (ionInput)="fetchList()"></ion-searchbar>\n\n\n\n  <ion-list radio-group [(ngModel)]="selectedItem">\n\n    <ion-item *ngFor="let item of list">\n\n      <ion-label>{{item.key}} - {{item.value}}</ion-label>\n\n      <ion-radio (ionSelect)="ionChange(item)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n\n\n\n\n  <ion-row>\n\n    <ion-col col-4 col-md-2>\n\n      <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n        <ion-icon name="arrow-dropleft"></ion-icon>\n\n      </button>\n\n      <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-8>\n\n      <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n        <ion-option value="10" selected="true">10</ion-option>\n\n        <ion-option value="20">20</ion-option>\n\n        <ion-option value="50">50</ion-option>\n\n      </ion-select>\n\n    </ion-col>\n\n    <ion-col col-4 col-md-2>\n\n      <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n      <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n        <ion-icon name="arrow-dropright"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\urun-search\urun-search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_urun_dao_urun_dao__["a" /* UrunDao */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], UrunSearchComponent);
    return UrunSearchComponent;
}());

//# sourceMappingURL=urun-search.js.map

/***/ }),

/***/ 8:
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
    Constants.API_PAGE_SIZE = 10000;
    Constants.SYNC_TIME = "SYNC_TIME";
    Constants.SELECTED_THEME = "SELECTED_THEME";
    Constants.DATE_FORMAT = "dd.MM.yyyy hh:mm:ss";
    Constants.ACCESS_TOKEN = "ACCESS_TOKEN";
    Constants.STATUS = {
        SUCCESS: "SUCCESS",
        ERROR: "ERROR"
    };
    Constants.MASK = {
        PHONE_NUMBER: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        CARD_NUMBER: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        CARD_EXPIRY: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
        ORDER_CODE: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
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
            MAHALLE_TNM: "MAHALLE_TNM_SERVER_VERSIYON",
        }
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
        SER_MAHALLE_TNM: Constants.VERSIYON.SERVER.MAHALLE_TNM,
    };
    return Constants;
}());

//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HizmetBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grp_urun_ana_grp__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__ = __webpack_require__(14);
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
        this.text = 'Hello World';
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
    HizmetBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hizmet-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-Components\hizmet-bilgileri\hizmet-bilgileri.html"*/'<ion-row>\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Randevu Tarihi</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="randevuTarihi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Çağrı Açılış Tarihi</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="cagriTarihi" [disabled]="hizmet.durum != \'ACIK\'" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Hizmet Tipi</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.hizmetTipiAdi" [disabled]="hizmet.durum != \'ACIK\'" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Ürün Ana Grubu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.mamAnaGrpAdi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Başvuru Nedeni</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.basvuruNedenAdi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Hizmet Formu No</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.seqNo" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Durum</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.durum" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col col-4 col-md-2>\n\n    <ion-label color="primary">Çağrı No</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.cmNo" readonly></ion-input>\n\n  </ion-col>\n\n\n\n</ion-row>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-Components\hizmet-bilgileri\hizmet-bilgileri.html"*/
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

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusteriBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_adres_dao_adres_dao__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(6);
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
    function MusteriBilgileriComponent(hizmetService, adresDao, logger, util) {
        this.hizmetService = hizmetService;
        this.adresDao = adresDao;
        this.logger = logger;
        this.util = util;
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
        this.evTel = this.util.phoneMask(this.hizmet.evTel);
        this.isTel = this.util.phoneMask(this.hizmet.isTel);
        this.cepTel = this.util.phoneMask(this.hizmet.gsmNo);
    };
    MusteriBilgileriComponent.prototype.ionViewWillLeave = function () {
        this.hizmetService.saveAndFetchHizmet(this.hizmet);
    };
    MusteriBilgileriComponent.prototype.ionViewDidLeave = function () {
        this.logger.log("ionViewDidLeave");
        this.hizmetService.saveAndFetchHizmet(this.hizmet);
    };
    MusteriBilgileriComponent.prototype.getSehirList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adresDao.getSehirList().then(function (res) {
                            for (var i = 0; i < res.rows.length; i++) {
                                _this.sehirler.push(res.rows.item(i));
                            }
                            _this.logger.dir(res);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MusteriBilgileriComponent.prototype.getIlceList = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hizmet.ilceKod = "";
                        if (!this.util.isNotEmpty(this.hizmet.sehirKod)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.adresDao.getIlceList(this.hizmet.sehirKod).then(function (res) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    _this.ilceler.push(res.rows.item(i));
                                }
                                _this.onHizmetChange();
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
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
                        this.hizmet.mahalleKodu = "";
                        return [4 /*yield*/, this.adresDao.getMahalleList(this.hizmet.ilceKod).then(function (res) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    _this.mahalleler.push(res.rows.item(i));
                                }
                                _this.onHizmetChange();
                            })];
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
    MusteriBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'musteri-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-Components\musteri-bilgileri\musteri-bilgileri.html"*/'<ion-row>\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Müşteri</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.adi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Ev Telefonu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="tel" [(ngModel)]="evTel" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">İş Telefonu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="tel" [(ngModel)]="isTel" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Cep Telefonu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input type="tel" [(ngModel)]="cepTel" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">E-Posta</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.eposta" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Şehir</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-select [(ngModel)]="hizmet.sehirKod" (ionChange)="getIlceList(sehir)" interface="popover">\n\n      <ion-option *ngFor="let sehir of sehirler" [value]="sehir.sehirKodu">\n\n        {{sehir.sehirKodu}} - {{sehir.sehirAdi}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">İlçe</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-select [(ngModel)]="hizmet.ilceKod" (ionChange)="getMahalleList(ilce)" interface="popover"\n\n                [disabled]="isHizmetDisabled()"\n\n                interface="popover">\n\n      <ion-option *ngFor="let ilce of ilceler" [value]="ilce.ilceKodu">\n\n        {{ilce.ilceKodu}} - {{ilce.ilceAdi}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Semt/Köy</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.semt" [disabled]="hizmet.durum != \'ACIK\'" (ionBlur)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Mahalle</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-select [(ngModel)]="hizmet.mahalleKodu" (ionChange)="onHizmetChange()" interface="popover">\n\n      <ion-option *ngFor="let mahalle of mahalleler" [value]="mahalle.mahalleKodu" [disabled]="isHizmetDisabled()">\n\n        {{mahalle.mahalleKodu}} - {{mahalle.mahalleAdi}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Cadde</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.cadde" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Sokak</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.sokak" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Apartman/Site</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.aparman" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Apartman No</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.apartmanNo" [disabled]="isHizmetDisabled()"\n\n               (ionChange)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Blok</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.blok" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Daire No</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.daireNo" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()"></ion-input>\n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Servis Uyarı Notu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-textarea [(ngModel)]="hizmet.servisNotu" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()"></ion-textarea>\n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Merkez Uyarı Notu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-textarea [(ngModel)]="hizmet.merkezNotu" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()"></ion-textarea>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-Components\musteri-bilgileri\musteri-bilgileri.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_adres_dao_adres_dao__["a" /* AdresDao */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */]])
    ], MusteriBilgileriComponent);
    return MusteriBilgileriComponent;
}());

//# sourceMappingURL=musteri-bilgileri.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServisBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(28);
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
        console.log('Hello ServisBilgileriComponent Component');
        this.text = 'Hello World';
    }
    ServisBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'servis-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-bilgileri.html"*/'<ion-toolbar class="main-tabs">\n\n  <ion-segment [(ngModel)]="activePage" style="padding-top: 10px;">\n\n    <ion-segment-button value="servis">\n\n      İşlem Tarihleri\n\n    </ion-segment-button>\n\n\n\n    <ion-segment-button value="tarihce">\n\n      Tarihçe Bilgisi\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n\n\n  <div [ngSwitch]="activePage">\n\n    <div *ngSwitchCase="\'servis\'">\n\n      <islem-tarih></islem-tarih>\n\n    </div>\n\n\n\n    <div *ngSwitchCase="\'tarihce\'">\n\n      <servis-islem-tarihce></servis-islem-tarihce>\n\n    </div>\n\n  </div>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-bilgileri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__["a" /* HizmetService */]])
    ], ServisBilgileriComponent);
    return ServisBilgileriComponent;
}());

//# sourceMappingURL=servis-bilgileri.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrunBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urun_search_urun_search__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_garanti_sorgu_garanti_sorgu__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__entities_GarantiSorgu__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_seri_no_sorgu_seri_no_sorgu__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__update_urun_ana_grup_update_urun_ana_grup__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__entities_ProcessResults__ = __webpack_require__(181);
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
    function UrunBilgileriComponent(modalController, hizmetService, logger, garantiSorguProvider, util, seriNoSorguProvider, urunAnaGrpDao) {
        this.modalController = modalController;
        this.hizmetService = hizmetService;
        this.logger = logger;
        this.garantiSorguProvider = garantiSorguProvider;
        this.util = util;
        this.seriNoSorguProvider = seriNoSorguProvider;
        this.urunAnaGrpDao = urunAnaGrpDao;
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.mesguliyet = false;
        this.garanti = false;
        this.hizmet = this.hizmetService.getHizmet();
        this.init();
        this.findUrunAnaGrp();
    }
    UrunBilgileriComponent.prototype.init = function () {
        this.garanti = this.util.isNotEmpty(this.hizmet.garanti) && this.hizmet.garanti == 'VAR';
        this.mesguliyet = this.util.isNotEmpty(this.hizmet.mesguliyet) && this.hizmet.mesguliyet == 'VAR';
        this.mesguliyetChange();
        this.garantiChange();
    };
    UrunBilgileriComponent.prototype.urunListesiniGetir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mamAnagrp, searchType, aramaModal;
            return __generator(this, function (_a) {
                mamAnagrp = this.hizmet.mamAnaGrp;
                searchType = __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT;
                aramaModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__urun_search_urun_search__["a" /* UrunSearchComponent */], {
                    data: {
                        mamAnagrp: mamAnagrp,
                        searchType: searchType
                    }
                }, {
                    cssClass: this.util.getSelectedTheme()
                });
                aramaModal.onDidDismiss(function (data) {
                    if (_this.util.isNotEmpty(data.mamKod))
                        _this.hizmet.mamKod = data.mamKod;
                    if (_this.util.isNotEmpty(data.mamAdi))
                        _this.hizmet.mamAdi = data.mamAdi;
                    _this.saveHizmet();
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
            var anaGrpUpdateModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_13__update_urun_ana_grup_update_urun_ana_grup__["a" /* UpdateUrunAnaGrupComponent */], {
                hizmet: this.hizmet
            });
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
                this.urunAnaGrpDao.getList(urunAnaGrp, __WEBPACK_IMPORTED_MODULE_6__entities_Constants__["a" /* Constants */].SEARCH_TYPE.EXACT).then(function (res) {
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
                if (this.util.isNotEmpty(this.hizmet.detayDtoList) && this.hizmet.detayDtoList.length > 0) {
                    this.util.message("Ürüne bağlı Parça/İşçilik/Yol mevcut.Silinemez.");
                    return [2 /*return*/, false];
                }
                this.hizmet.mamKod = "";
                this.hizmet.mamAdi = "";
                this.saveHizmet();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.garantiSorgula = function () {
        var sorguData = new __WEBPACK_IMPORTED_MODULE_11__entities_GarantiSorgu__["a" /* GarantiSorgu */]();
        sorguData.mamKod = this.hizmet.mamKod;
        sorguData.dilKod = 'T';
        sorguData.serKod = this.hizmet.serKod;
        sorguData.satisTarihi = this.util.dateFormat(new Date(this.hizmet.sattar), "YYYY-MM-DD");
        sorguData.mamSeriNo = this.hizmet.mamSeriNo;
        sorguData.islemTarihi = this.util.dateFormat(new Date(this.hizmet.islemTarihi), "YYYY-MM-DD");
        sorguData.orgKod = 'ECA';
        this.garantiSorguProvider.fetchDataFromApi(sorguData);
    };
    UrunBilgileriComponent.prototype.seriNoSorgula = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, item, anagrp, urunAnaGrp, mes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.seriNoSorguProvider.fetchData(this.hizmet.mamSeriNo)];
                    case 1:
                        res = _a.sent();
                        this.logger.warn(res);
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res.message))) return [3 /*break*/, 5];
                        item = res.message[0];
                        if (!(item.mamAnagrp == this.hizmet.mamAnaGrp)) return [3 /*break*/, 2];
                        this.hizmet.mamKod = item.mamKod;
                        this.hizmet.mamAdi = item.mamAdi;
                        this.hizmet.mamSeriNo = item.mamSerino;
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
    UrunBilgileriComponent.prototype.mesguliyetChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.hizmet.mesguliyet = this.mesguliyet == true ? 'VAR' : 'YOK';
                this.saveHizmet();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.garantiChange = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.hizmet.garanti = this.garanti == true ? 'VAR' : 'YOK';
                this.saveHizmet();
                return [2 /*return*/];
            });
        });
    };
    UrunBilgileriComponent.prototype.faturaTarihiChange = function () {
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
    UrunBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'urun-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-Components\urun-bilgileri\urun-bilgileri.html"*/'<!-- Generated template for the UrunBilgileriComponent component -->\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="urunListesiniGetir()" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="list"></ion-icon>\n\n        Ürün Seç\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="urunSil()" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Ürün Sil\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="urunAnaGrupDegistir()" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="md-refresh"></ion-icon>\n\n        Ürün Ana Grup Değiştir\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-sm-12 col-md-6 col-lg-3 col-xl-3>\n\n      <button ion-button icon-start full round (click)="garantiSorgula()">\n\n        <ion-icon style="width: 5%" name="md-help"></ion-icon>\n\n        Garanti Sorgula\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n<ion-row class="urun-bilgileri">\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Ürün Ana Grubu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="mamAnaGrpValue" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Ürün Kodu</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.mamKod" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Ürün Adı</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-input [(ngModel)]="hizmet.mamAdi" readonly></ion-input>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Seri No</ion-label>\n\n  </ion-col>\n\n  <ion-col col-5 col-md-8>\n\n    <ion-input [(ngModel)]="hizmet.mamSeriNo" [disabled]="isHizmetDisabled()"></ion-input>\n\n  </ion-col>\n\n  <ion-col col-3 col-md-2>\n\n    <button ion-button icon-start full round (click)="seriNoSorgula()" [disabled]="isHizmetDisabled()" style="margin-top:13px;">\n\n      <ion-icon name="search"></ion-icon>\n\n    </button>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-2>\n\n    <ion-label color="primary">Fatura Tarihi</ion-label>\n\n  </ion-col>\n\n  <ion-col col-8 col-md-10>\n\n    <ion-datetime [(ngModel)]="hizmet.sattar" [disabled]="isHizmetDisabled()" (ionChange)="faturaTarihiChange()" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n  </ion-col>\n\n\n\n  <ion-col col-4 col-md-4>\n\n    <ion-label color="primary">Garanti</ion-label>\n\n  </ion-col>\n\n  <ion-col col-6 col-md-6>\n\n    <ion-label color="primary" class="radio-btn" style="text-align: end;position: relative;">{{garanti == true ? \'VAR\' : \'YOK\'}}</ion-label>\n\n  </ion-col>\n\n  <ion-col col-2 col-md-2>\n\n    <ion-toggle [(ngModel)]="garanti" (ionChange)="garantiChange()" class="toggle-btn"></ion-toggle>\n\n  </ion-col>\n\n\n\n\n\n  <ion-col col-4 col-md-4>\n\n    <ion-label color="primary">Meşguliyet</ion-label>\n\n  </ion-col>\n\n  <ion-col col-6 col-md-6>\n\n    <ion-label color="primary" class="radio-btn" style="text-align: end;position: relative;">{{mesguliyet == true ? \'VAR\' : \'YOK\'}}</ion-label>\n\n  </ion-col>\n\n  <ion-col col-2 col-md-2>\n\n    <ion-toggle [(ngModel)]="mesguliyet" (ionChange)="mesguliyetChange()" class="toggle-btn"></ion-toggle>\n\n  </ion-col>\n\n</ion-row>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-Components\urun-bilgileri\urun-bilgileri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_garanti_sorgu_garanti_sorgu__["a" /* GarantiSorguProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_seri_no_sorgu_seri_no_sorgu__["a" /* SeriNoSorguProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */]])
    ], UrunBilgileriComponent);
    return UrunBilgileriComponent;
}());

//# sourceMappingURL=urun-bilgileri.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetayBilgileriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_urunAnaGrup__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grup_dao_urun_ana_grup_dao__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hizmet_detay_hizmet_detay__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_printer_service_printer_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_hizmet_hizmet__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entities_ProcessResults__ = __webpack_require__(181);
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
    function DetayBilgileriComponent(hizmetService, urunAnaGrupDao, modalCtrl, util, logger, alertCtrl, nav, hizmetProvider, printService) {
        this.hizmetService = hizmetService;
        this.urunAnaGrupDao = urunAnaGrupDao;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.logger = logger;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.hizmetProvider = hizmetProvider;
        this.printService = printService;
        this.showDetails = 1;
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_1__entities_hizmet_hizmet__["a" /* Hizmet */]();
        this.cozumKoduList = [];
        this.verilerSunucuyaKayitEdildiMi = false;
        this.toplamTutar = 0;
        this.hizmet = this.hizmetService.getHizmet();
        this.loadDetayList();
        this.loadCozumKoduList();
        this.loadletisimIstek();
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
                _this.toplamTutar = Number((_this.toplamTutar * 1.18).toFixed(2));
            });
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
            var detayModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__hizmet_detay_hizmet_detay__["a" /* HizmetDetayComponent */], {
                data: {
                    detay: ""
                }
            }, {
                cssClass: this.util.getSelectedTheme()
            });
            detayModal.onDidDismiss(function (res) {
                _this.logger.dir(res);
                _this.updateHizmet('INSERT');
            });
            detayModal.present();
        }
        else {
            this.util.message('Ürün bilgisi seçilmeden detay girilemez.');
        }
    };
    DetayBilgileriComponent.prototype.updateHizmetDetay = function (item) {
        var _this = this;
        var detayModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__hizmet_detay_hizmet_detay__["a" /* HizmetDetayComponent */], {
            data: {
                hizmetDetay: item
            }
        });
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
            var result, kapatmaHizmet, res, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        result = this.kapatmaKontrol();
                        if (!result.isErrorMessagesNull()) return [3 /*break*/, 4];
                        kapatmaHizmet = this.hizmet;
                        if (!this.verilerSunucuyaKayitEdildiMi) {
                            kapatmaHizmet = this.sunucuyaKayitIcinHazirla(kapatmaHizmet);
                        }
                        kapatmaHizmet.durum = durum;
                        this.util.loaderStart();
                        return [4 /*yield*/, this.hizmetProvider.updateCagri(kapatmaHizmet, "HAYIR")];
                    case 1:
                        res = _b.sent();
                        this.util.loaderEnd();
                        this.logger.dir(res);
                        if (res.responseCode == "FAIL") {
                            this.util.error(res.description);
                            this.hizmet.durum = DURUM.ACIK;
                        }
                        else {
                            this.verilerSunucuyaKayitEdildiMi = true;
                            if (kapatmaHizmet.durum != DURUM.KAPALI)
                                this.kapat(DURUM.KAPALI);
                        }
                        if (!(this.util.isNotEmpty(res.responseCode) && res.responseCode == "SUCCESS" && this.util.isNotEmpty(res.description) && res.description == "CLOSED")) return [3 /*break*/, 3];
                        this.hizmet.durum = DURUM.KAPALI;
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 2:
                        _a.hizmet = _b.sent();
                        this.navigate("CagrilarPage", "Çağrı Kayıt Edildi.");
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        this.util.pushAllMessages(result);
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DetayBilgileriComponent.prototype.siparisOlustur = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.util.loaderStart();
                        return [4 /*yield*/, this.hizmetProvider.updateCagri(this.hizmet, "EVET")];
                    case 1:
                        res = _a.sent();
                        if (this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode)) {
                            if (res.responseCode == "FAIL") {
                                this.util.error(res.description);
                            }
                            else if (res.responseCode == "SUCCESS") {
                                this.util.message(res.description);
                            }
                            else {
                                this.util.error("Sipariş oluşturmada bir hata oluştu.");
                            }
                        }
                        this.logger.dir(res);
                        this.util.loaderEnd();
                        return [2 /*return*/];
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
    DetayBilgileriComponent.prototype.sunucuyaKayitIcinHazirla = function (hizmet) {
        var _this = this;
        var DATE_FORMAT = "dd.MM.yyyy hh:mm:ss";
        if (this.util.isNotEmpty(hizmet.islemList)) {
            hizmet.islemList.forEach(function (islem) {
                if (_this.util.isNotEmpty(islem.basTar)) {
                    islem.basTar = _this.util.dateFormatRegex(islem.basTar, DATE_FORMAT);
                }
                if (_this.util.isNotEmpty(islem.bitTar)) {
                    islem.bitTar = _this.util.dateFormatRegex(islem.bitTar, DATE_FORMAT);
                }
            });
        }
        hizmet.randevuTarihi = this.util.dateFormatRegex(hizmet.randevuTarihi, DATE_FORMAT);
        hizmet.islemTarihi = this.util.dateFormatRegex(hizmet.islemTarihi, DATE_FORMAT);
        hizmet.islemBitTarihi = this.util.dateFormatRegex(hizmet.islemBitTarihi, DATE_FORMAT);
        return hizmet;
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
                        this.util.loaderStart();
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
            var iptalHizmet, res, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.util.loaderStart();
                        iptalHizmet = this.hizmetProvider.fillHizmet(this.hizmet);
                        iptalHizmet.durum = DURUM.IPTAL;
                        iptalHizmet = this.sunucuyaKayitIcinHazirla(iptalHizmet);
                        return [4 /*yield*/, this.hizmetProvider.updateCagri(iptalHizmet, "HAYIR")];
                    case 1:
                        res = _c.sent();
                        this.logger.dir(res);
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode) && res.responseCode == "SUCCESS")) return [3 /*break*/, 3];
                        this.hizmet.durum = DURUM.IPTAL;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 2:
                        _c.sent();
                        this.util.loaderEnd();
                        this.navigate('CagrilarPage', "Çağrı iptal edildi.");
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(this.util.isNotEmpty(res) && this.util.isNotEmpty(res.responseCode))) return [3 /*break*/, 5];
                        this.hizmet.durum = DURUM.ACIK;
                        this.util.error(res.description);
                        _a = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 4:
                        _a.hizmet = _c.sent();
                        this.util.loaderEnd();
                        return [3 /*break*/, 7];
                    case 5:
                        _b = this;
                        return [4 /*yield*/, this.hizmetService.saveAndFetchHizmet(this.hizmet)];
                    case 6:
                        _b.hizmet = _c.sent();
                        this.util.error("Iptal etme işlemi sırasında hata oluştu.");
                        this.util.loaderEnd();
                        _c.label = 7;
                    case 7: return [2 /*return*/];
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
    DetayBilgileriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'detay-bilgileri',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\detay-bilgileri\detay-bilgileri.html"*/'<ion-grid class="detay">\n\n  <ion-row>\n\n    <ion-col col-12 col-md-12 col-sm>\n\n      <button ion-button primary round full (click)="hizmetDetayaGit()" [disabled]="isHizmetDisabled()">\n\n        <ion-label>\n\n          <ion-icon name="add-circle" class="mr-icon"></ion-icon> Yeni</ion-label>\n\n      </button>\n\n    </ion-col>\n\n\n\n    <ion-col col-12 col-sm>\n\n      <button ion-button primary round full [disabled]="isHizmetDisabled()" (click)="siparisOlustur()">\n\n        <ion-label>\n\n          <ion-icon class="mr-icon" name="basket"></ion-icon> Sipariş Oluştur</ion-label>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-grid *ngIf="detayList != null && detayList.length > 0">\n\n  <ion-row>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>İşlem Tipi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>İşlem Kodu</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>Miktar</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>Tutar</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngFor="let detay of detayList">\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{detay.mlzIsc}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{detay.mlzIscKod}} - {{detay.aciklama}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{detay.miktar}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{detay.tutar}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <button ion-button icon-only (click)="updateHizmetDetay(detay)" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="create" small></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="deleteHizmetDetay(detay)" [disabled]="isHizmetDisabled()">\n\n        <ion-icon name="close-circle" small></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label></ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label></ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>KDV\'li Toplam Tutar</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{toplamTutar}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-sm class="detay">\n\n      <button ion-button primary round full (click)="toggleDetails()">\n\n        <ion-label>\n\n          <ion-icon name="arrow-down" class="mr-icon"></ion-icon> Kapatma İşlemleri</ion-label>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div id="divKapatmaIslemleri" class="gray-box" *ngIf="showDetails == -1">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 col-md-6 col-sm>\n\n          <button ion-button round color="secondary" (click)="kapat(\'ACIK\')" [disabled]="isHizmetDisabled()" full>Kapat\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-6 col-sm>\n\n          <button ion-button round color="secondary" [disabled]="isHizmetDisabled()" (click)="hizmetIptalKontrol()" full>\n\n            İptal\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-6 col-sm>\n\n          <button ion-button round color="secondary" (click)="yazdir()" full>Yazdır</button>\n\n        </ion-col>\n\n        <ion-col col-6 col-md-6 col-sm>\n\n          <button ion-button round color="secondary" [disabled]="isHizmetDisabled()" (click)="hizmetSilKontrol()" full>\n\n            Sil\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n    </ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label color="primary">Açıklama</ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-textarea [(ngModel)]="hizmet.aciklama" [disabled]="isHizmetDisabled()" (ionBlur)="onHizmetChange()"></ion-textarea>\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label color="primary">Kapatma Şekli</ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-select [(ngModel)]="hizmet.kapatmaKodu" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()">\n\n          <ion-option value="NORMAL">Normal Kapatma</ion-option>\n\n          <ion-option value="MESGULIYET">Meşguliyet Kapatma</ion-option>\n\n        </ion-select>\n\n\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label color="primary">Ödeme Tipi</ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-select [(ngModel)]="hizmet.odemeTipi" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()">\n\n          <ion-option value="NAKIT">Nakit</ion-option>\n\n          <ion-option value="KREDIKARTI">Kredi Kartı</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label color="primary">Çözüm Kodu</ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-8 col-md-10>\n\n        <ion-select [(ngModel)]="hizmet.cozumKodu" [disabled]="isHizmetDisabled()" (ionChange)="onHizmetChange()">\n\n          <ion-option *ngFor="let cozum of cozumKoduList" [value]="cozum.kod">{{cozum.ad}}</ion-option>\n\n        </ion-select>\n\n      </ion-col>\n\n\n\n      <ion-col col-4 col-md-2>\n\n        <ion-label color="primary">İletişim Istek</ion-label>\n\n      </ion-col>\n\n\n\n      <ion-col col-6 col-md-9>\n\n\n\n        <ion-label color="primary" class="radio-btn" style="text-align: end;position: relative;">{{iletisimIstek == true ? \'EVET\' : \'HAYIR\'}}</ion-label>\n\n\n\n      </ion-col>\n\n      <ion-col col-2 col-md-1>\n\n        <ion-toggle (ionChange)="iletisimIstekChange()" class="toggle-btn" style="text-align: end;" [disabled]="isHizmetDisabled()"\n\n          [(ngModel)]="iletisimIstek"></ion-toggle>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </div>\n\n</ion-list>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\detay-bilgileri\detay-bilgileri.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_urun_ana_grup_dao_urun_ana_grup_dao__["a" /* UrunAnaGrupDao */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_hizmet_hizmet__["a" /* HizmetProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_printer_service_printer_service__["a" /* PrinterService */]])
    ], DetayBilgileriComponent);
    return DetayBilgileriComponent;
}());

//# sourceMappingURL=detay-bilgileri.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemTarihComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entities_hizmet_islemList__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_ProcessResults__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__ = __webpack_require__(14);
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
        this.DATE_FORMAT = "yyyy-MM-dd hh:mm:ss";
        this.hizmet = new __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__["a" /* Hizmet */]();
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
                        this.logger.table(this.hizmet.islemList);
                        return [4 /*yield*/, this.hizmetService.saveHizmet()];
                    case 1:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'islem-tarih',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\islem-tarih\islem-tarih.html"*/'<ion-list inset>\n\n\n\n  <ion-item>\n\n    <ion-label>İşlem Başlangıç Tarihi</ion-label>\n\n    <ion-label>{{sonIslem.basTar | date: \'dd-MM-yyyy HH:mm\'}}</ion-label>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>İşlem Bitiş Tarihi</ion-label>\n\n    <ion-label>{{sonIslem.bitTar | date: \'dd-MM-yyyy HH:mm\'}}</ion-label>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="sonIslem.basTar != null && sonIslem.bitTar == null">\n\n    <ion-label>Bekleme Nedeni</ion-label>\n\n    <ion-select [(ngModel)]="sonIslem.beklemeNeden" interface="popover" (ionChange)="checkStatus()">\n\n      <ion-option value="" selected="true"></ion-option>\n\n      <ion-option value="SERVIS">Servis</ion-option>\n\n      <ion-option value="MUSTERI">Müşteri</ion-option>\n\n      <ion-option value="BAYI">Bayi</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="sonIslem.basTar  != null && sonIslem.bitTar == null">\n\n    <ion-label>Bekleme Kaynağı</ion-label>\n\n    <ion-select [(ngModel)]="sonIslem.bekleKaynak" interface="popover" (ionChange)="checkStatus()" [disabled]=isHizmetDisabled()>\n\n      <ion-option value="" selected="true"></ion-option>\n\n      <ion-option value="SERVIS">Servis</ion-option>\n\n      <ion-option value="MUSTERI">Müşteri</ion-option>\n\n      <ion-option value="BAYI">Bayi</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item *ngIf="buttonStatus == \'BASLA\'">\n\n    <button ion-button primary round full (click)="islemBaslat()" [disabled]=isHizmetDisabled()>İşlem Başlat\n\n    </button>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="buttonStatus == \'BEKLE\'">\n\n    <button ion-button primary round full (click)="islemBeklet()" [disabled]=isHizmetDisabled()>Bekleme Başlat\n\n    </button>\n\n  </ion-item>\n\n\n\n  <ion-item *ngIf="buttonStatus == \'BITIR\'">\n\n    <button ion-button primary round full (click)="islemBitir()" [disabled]=isHizmetDisabled()>Bitir\n\n    </button>\n\n  </ion-item>\n\n\n\n\n\n</ion-list>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\islem-tarih\islem-tarih.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], IslemTarihComponent);
    return IslemTarihComponent;
}());

//# sourceMappingURL=islem-tarih.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslemList; });
/**
 * @author malisahin
 * @email mehmetalisahinogullari@gmail.com
 */
var IslemList = (function () {
    function IslemList() {
        this.durum = "BASLA";
    }
    return IslemList;
}());

//# sourceMappingURL=islemList.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServisIslemTarihceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_hizmet_hizmet__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(6);
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
        if (this.util.isNotEmpty(this.hizmet.islemList))
            this.tarihceList = this.hizmet.islemList;
    };
    ServisIslemTarihceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'servis-islem-tarihce',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-islem-tarihce\servis-islem-tarihce.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>Sıra No</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>Durum</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>İşlem Tarihi</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>İşlem Bitiş Tarihi</ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngFor="let tarihce of tarihceList">\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{tarihce.islSira}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{tarihce.durum}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{tarihce.basTar | date : \'dd-MM-yyyy HH:mm\'}}</ion-label>\n\n    </ion-col>\n\n    <ion-col col-12 col-sm>\n\n      <ion-label>{{tarihce.bitTar | date : \'dd-MM-yyyy HH:mm\'}}</ion-label>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-grid>\n\n'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagri-detay-components\servis-bilgileri\servis-islem-tarihce\servis-islem-tarihce.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_hizmet_service_hizmet_service__["a" /* HizmetService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* UtilProvider */]])
    ], ServisIslemTarihceComponent);
    return ServisIslemTarihceComponent;
}());

//# sourceMappingURL=servis-islem-tarihce.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cagrilar_cagrilar__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bildirimler_bildirimler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_guncelleme_guncelleme__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_kutuphane_kutuphane__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ayarlar_ayarlar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bilgi_sorgu_bilgi_sorgu__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_theme_theme__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_logger_logger__ = __webpack_require__(14);
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
    function MyApp(platform, menu, statusBar, splashScreen, logger, themeProvider, db) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.logger = logger;
        this.themeProvider = themeProvider;
        this.db = db;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.selectedTheme = this.themeProvider.setTheme();
        this.logger.warn("SELECTED DEFAULT THEME" + this.selectedTheme);
        this.pages = [
            { title: 'Çağrılar', component: __WEBPACK_IMPORTED_MODULE_4__pages_cagrilar_cagrilar__["a" /* CagrilarPage */], active: true, icon: 'home', param: {} },
            { title: 'Duyurular', component: __WEBPACK_IMPORTED_MODULE_5__pages_bildirimler_bildirimler__["a" /* BildirimlerPage */], active: false, icon: 'map', param: { type: 'WARN' } },
            { title: 'Uyarılar', component: __WEBPACK_IMPORTED_MODULE_5__pages_bildirimler_bildirimler__["a" /* BildirimlerPage */], active: false, icon: 'ionic', param: { type: 'URGENT' } },
            { title: 'Güncelleme', component: __WEBPACK_IMPORTED_MODULE_6__pages_guncelleme_guncelleme__["a" /* GuncellemePage */], active: false, icon: 'ionic', param: {} },
            { title: 'Bilgi Sorgu', component: __WEBPACK_IMPORTED_MODULE_11__pages_bilgi_sorgu_bilgi_sorgu__["a" /* BilgiSorguPage */], active: false, icon: 'body', param: {} },
            { title: 'E-Kütüphane', component: __WEBPACK_IMPORTED_MODULE_7__pages_kutuphane_kutuphane__["a" /* KutuphanePage */], active: false, icon: 'bookmarks', param: {} },
            { title: 'Ayarlar', component: __WEBPACK_IMPORTED_MODULE_8__pages_ayarlar_ayarlar__["a" /* AyarlarPage */], active: false, icon: 'book', param: {} }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.db.createDatabase();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, page.param);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <!--\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Pages</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n      <ion-list>\n\n        <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  -->\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__providers_logger_logger__["a" /* LoggerProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_theme_theme__["a" /* ThemeProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 900:
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

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CagrilarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the CagrilarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CagrilarComponent = (function () {
    function CagrilarComponent() {
        console.log('Hello CagrilarComponent Component');
        this.text = 'Hello World';
    }
    CagrilarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cagrilar',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagrilar\cagrilar.html"*/'<!-- Generated template for the CagrilarComponent component -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Social Card</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg social-cards">\n\n\n\n<ion-card>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="assets/img/marty-avatar.png">\n\n    </ion-avatar>\n\n    <h2>Marty McFly</h2>\n\n    <p>November 5, 1955</p>\n\n  </ion-item>\n\n\n\n  <img src="assets/img/advance-card-bttf.png">\n\n\n\n  <ion-card-content>\n\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button color="primary" clear small icon-start>\n\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n\n        12 Likes\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button color="primary" clear small icon-start>\n\n        <ion-icon name=\'text\'></ion-icon>\n\n        4 Comments\n\n      </button>\n\n    </ion-col>\n\n    <ion-col align-self-center text-center>\n\n      <ion-note>\n\n        11h ago\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="assets/img/sarah-avatar.png.jpeg">\n\n    </ion-avatar>\n\n    <h2>Sarah Connor</h2>\n\n    <p>May 12, 1984</p>\n\n  </ion-item>\n\n\n\n  <img src="assets/img/advance-card-tmntr.jpg">\n\n\n\n  <ion-card-content>\n\n    <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button color="primary" clear small icon-start>\n\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n\n        30 Likes\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button color="primary" clear small icon-start>\n\n        <ion-icon name=\'text\'></ion-icon>\n\n        64 Comments\n\n      </button>\n\n    </ion-col>\n\n    <ion-col align-self-center text-center>\n\n      <ion-note>\n\n        30yr ago\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="assets/img/ian-avatar.png">\n\n    </ion-avatar>\n\n    <h2>Dr. Ian Malcolm</h2>\n\n    <p>June 28, 1990</p>\n\n  </ion-item>\n\n\n\n  <img src="assets/img/advance-card-jp.jpg">\n\n\n\n  <ion-card-content>\n\n    <p>Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button color="primary" clear small icon-start>\n\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n\n        46 Likes\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button color="primary" clear small icon-start>\n\n        <ion-icon name=\'text\'></ion-icon>\n\n        66 Comments\n\n      </button>\n\n    </ion-col>\n\n    <ion-col align-self-center text-center>\n\n      <ion-note>\n\n        2d ago\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>\n\n\n\n\n\n</ion-content>\n\n\n\n<style>\n\n  .social-cards ion-col {\n\n    padding: 0;\n\n  }\n\n</style>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\cagrilar\cagrilar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CagrilarComponent);
    return CagrilarComponent;
}());

//# sourceMappingURL=cagrilar.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_ListItem__ = __webpack_require__(507);
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
        console.log('Hello ListComponent Component');
        this.text = 'Hello World';
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
            selector: 'list',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\list\list.html"*/'<!-- Generated template for the ListComponent component -->\n\n<div>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of list" (click)=" itemSelected(item) ">\n\n      {{ item.name }} -- {{ item.code }}\n\n    </button>\n\n  </ion-list>\n\n</div>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\list\list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anasayfa; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_header_header__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mesajlar_dao_mesajlar_dao__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(61);
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
    function Anasayfa(navCtrl, navParams, headerProvider, mesajDao, hizmetDao) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.headerProvider = headerProvider;
        this.mesajDao = mesajDao;
        this.hizmetDao = hizmetDao;
        this.cagriSayisi = 0;
        this.duyuruSayisi = 0;
        this.uyariSayisi = 0;
        this.guncellemeSayisi = 10;
        this.loadGuncellemeSayisi();
        this.loadMesajSayilari();
        this.loadHizmetSayisi();
    }
    Anasayfa.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Anasayfa');
    };
    Anasayfa.prototype.sayfayaGit = function (page, param) {
        this.navCtrl.push(page, param);
    };
    Anasayfa.prototype.loadGuncellemeSayisi = function () {
        this.guncellemeSayisi = this.headerProvider.loadGuncellemeSayisi();
    };
    Anasayfa.prototype.loadMesajSayilari = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.mesajDao.loadDuyuruSayisi()];
                    case 1:
                        _a.duyuruSayisi = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.mesajDao.loadUyariSayisi()];
                    case 2:
                        _b.uyariSayisi = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
    Anasayfa = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-anasayfa',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\anasayfa\anasayfa.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content-background home-content">\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3>\n\n        <ion-card (click)="sayfayaGit(\'CagrilarPage\',{})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="ios-call" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Çağrılar</span>\n\n            </div>\n\n          </ion-item>\n\n          <div class="announcements">\n\n            {{cagriSayisi}}\n\n          </div>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3>\n\n        <ion-card (click)="sayfayaGit(\'BildirimlerPage\', {type:\'WARN\'})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="notifications" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Duyurular</span>\n\n            </div>\n\n          </ion-item>\n\n\n\n\n\n          <div class="announcements">\n\n            {{duyuruSayisi}}\n\n          </div>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3>\n\n        <ion-card (click)="sayfayaGit(\'BildirimlerPage\',{type:\'URGENT\'})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="notifications" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Uyarılar</span>\n\n            </div>\n\n          </ion-item>\n\n\n\n          <div class="announcements">\n\n            {{uyariSayisi}}\n\n          </div>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3>\n\n        <ion-card (click)="sayfayaGit(\'GuncellemePage\',{})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="md-refresh" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Güncelleme </span>\n\n            </div>\n\n          </ion-item>\n\n\n\n          <div class="announcements">\n\n            {{guncellemeSayisi}}\n\n          </div>\n\n\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3>\n\n        <ion-card (click)="sayfayaGit(\'BilgiSorguPage\', {})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="md-help" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span> Bilgi Sorgu</span>\n\n            </div>\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3>\n\n        <ion-card (click)="sayfayaGit(\'AyarlarPage\',{})">\n\n\n\n          <ion-item>\n\n            <div class="icon-box">\n\n              <ion-icon name="settings" item-start xlarge></ion-icon>\n\n            </div>\n\n            <div class="text-box">\n\n              <span>Ayarlar</span>\n\n            </div>\n\n          </ion-item>\n\n\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-item float-left style="width: 40%">\n\n    <ion-label class="pull-left">SISTEK© 2018</ion-label>\n\n  </ion-item>\n\n  <ion-item float-right style="width: 60%">\n\n    <ion-label class="pull-right">Servis Otomasyon Sistemi</ion-label>\n\n  </ion-item>\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\anasayfa\anasayfa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_header_header__["a" /* HeaderProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_mesajlar_dao_mesajlar_dao__["a" /* MesajlarDao */],
            __WEBPACK_IMPORTED_MODULE_4__providers_hizmet_dao_hizmet_dao__["a" /* HizmetDao */]])
    ], Anasayfa);
    return Anasayfa;
}());

//# sourceMappingURL=anasayfa.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesajlarDao; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_mesajlar__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_dao_base_dao__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entities_Constants__ = __webpack_require__(8);
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
                        var params = [item.id, item.bitisTarihi, item.aciklama, item.gonderen, item.basTarihi, item.status, item.subject, item.type, item.valid];
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

/***/ 97:
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_dao_mesajlar_dao__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_dao_hizmet_dao__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_header_header__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cagrilar_cagrilar__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bildirimler_bildirimler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_guncelleme_guncelleme__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_anasayfa_anasayfa__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_logger_logger__ = __webpack_require__(14);
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
    function HeaderComponent(nav, mesajDao, hizmetDao, headerProvider, logger) {
        this.nav = nav;
        this.mesajDao = mesajDao;
        this.hizmetDao = hizmetDao;
        this.headerProvider = headerProvider;
        this.logger = logger;
        this.index = 1;
        this.cagriSayisi = 0;
        this.duyuruSayisi = 0;
        this.uyariSayisi = 0;
        this.guncellemeSayisi = 10;
        logger.warn("Gidilen sayfa " + String(this.index));
        this.updateHeader();
    }
    HeaderComponent.prototype.ionViewDidLoad = function () {
        this.logger.warn("****************HEADER****************");
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
                        _b = this;
                        return [4 /*yield*/, this.mesajDao.loadUyariSayisi()];
                    case 2:
                        _b.uyariSayisi = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.loadHizmetSayisi = function () {
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
    HeaderComponent.prototype.updateHeader = function () {
        this.loadGuncellemeSayisi();
        this.loadMesajSayilari();
        this.loadHizmetSayisi();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'icon-header',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\header\header.html"*/'<ion-grid>\n\n  <ion-row style=" display: inline-block;">\n\n\n\n    <div float-left class="header-bar">\n\n      <ion-buttons>\n\n        <button ion-button item-left icon-only (click)="sayfayaGit(\'CagrilarPage\',{})">\n\n          <ion-icon name="ios-call"></ion-icon>\n\n          <div class="bar-announcements">{{cagriSayisi}}</div>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="sayfayaGit(\'BildirimlerPage\',{type:\'WARN\'})">\n\n          <ion-icon name="volume-up"></ion-icon>\n\n          <div class="bar-announcements">{{duyuruSayisi}}</div>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="sayfayaGit(\'BildirimlerPage\',{type:\'URGENT\'})">\n\n          <ion-icon name="notifications"></ion-icon>\n\n          <div class="bar-announcements">{{uyariSayisi}}</div>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="sayfayaGit(\'GuncellemePage\',{})">\n\n          <ion-icon name="md-refresh"></ion-icon>\n\n          <div class="bar-announcements">{{guncellemeSayisi}}</div>\n\n        </button>\n\n      </ion-buttons>\n\n    </div>\n\n\n\n    <div float-right class="header-bar">\n\n      <ion-buttons>\n\n        <button ion-button icon-only (click)="sayfayaGit(\'Anasayfa\',{})">\n\n          <ion-icon name="home"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button icon-only (click)="closeApplicationConfirm()">\n\n          <ion-icon name="exit"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </div>\n\n\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n\n\n<!--\n\n<ion-tabs tabs-only [selectedIndex]="index" color="primary">\n\n\n\n  <ion-tab tabIcon="list-box" [root]="cagrilarPage" tabBadge="{{cagriSayisi}}" tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <ion-tab tabIcon="volume-up" [root]="bildirimlerPage" tabBadge="{{duyuruSayisi}}" tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <ion-tab tabIcon="notifications" [root]="bildirimlerPage" tabBadge="{{uyariSayisi}}" tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <ion-tab tabIcon="md-refresh" [root]="guncellemePage" tabBadge="{{guncellemeSayisi}}"\n\n           tabBadgeStyle="danger"></ion-tab>\n\n\n\n  <div float-right>\n\n    <ion-tab tabIcon="home" [root]="anaSayfa"></ion-tab>\n\n    &lt;!&ndash;<ion-tab tabIcon="exit" [root]="closeApplicationConfirm"></ion-tab>&ndash;&gt;\n\n  </div>\n\n\n\n</ion-tabs>-->'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\components\header\header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_dao_mesajlar_dao__["a" /* MesajlarDao */],
            __WEBPACK_IMPORTED_MODULE_3__providers_hizmet_dao_hizmet_dao__["a" /* HizmetDao */],
            __WEBPACK_IMPORTED_MODULE_4__providers_header_header__["a" /* HeaderProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_logger_logger__["a" /* LoggerProvider */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BildirimlerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_mesajlar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_mesajlar__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mesaj_detail_mesaj_detail__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Pageable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header__ = __webpack_require__(98);
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
    function BildirimlerPage(navCtrl, navParams, mesajProvider, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mesajProvider = mesajProvider;
        this.modalController = modalController;
        this.mesajList = [];
        this.searchTip = "BEGINNING";
        this.mesajTip = this.navParams.data.type;
        this.pageable = new __WEBPACK_IMPORTED_MODULE_5__entities_Pageable__["a" /* Pageable */]();
        this.fetchList(this.searchTip);
    }
    BildirimlerPage.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mesajProvider.getDataFromApi()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fetchList(this.searchTip)];
                    case 2:
                        _a.sent();
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
        var detailComponent = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__components_mesaj_detail_mesaj_detail__["a" /* MesajDetailComponent */], data);
        detailComponent.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("header"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__components_header_header__["a" /* HeaderComponent */])
    ], BildirimlerPage.prototype, "header", void 0);
    BildirimlerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bildirimler',template:/*ion-inline-start:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\bildirimler\bildirimler.html"*/'<ion-header>\n\n\n\n  <ion-navbar hideBackButton="true">\n\n    <icon-header #header></icon-header>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n  <ion-title class="page-title">{{mesajBaslik}}</ion-title>\n\n\n\n  <ion-row>\n\n    <ion-col col-12 col-sm>\n\n      <button ion-button round full (click)="guncelle();" color="secondary">\n\n        Güncelle\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-card *ngFor="let mesaj of mesajList" class="card-box" (click)="mesajDetayinaGit($event, mesaj.id)">\n\n    <p>\n\n      <label>\n\n        <i class="fas fa-user"></i>\n\n        <strong> {{mesaj.gonderen}} </strong>\n\n      </label>\n\n    </p>\n\n    <p>\n\n      <label>\n\n        <i class="fas fa-envelope"></i>\n\n        <strong>{{mesaj.subject}} </strong>\n\n      </label>\n\n    </p>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col col-sm-2 col-md-2 col-lg-2 col-xl-2>\n\n        <button ion-button color="light" (click)="fetchList(\'FIRST\')">\n\n          <ion-icon name="arrow-dropleft"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-sm-2 col-md-2 col-lg-2 col-xl-2>\n\n        <button ion-button color="light" (click)="fetchList(\'PREVIOUS\')">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-sm-4 col-md-4 col-lg-4 col-xl-4>\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="pageable.pageSize" (ionChange)="fetchList(\'PAGE_NO\')" interface="popover">\n\n            <ion-option value="10" selected="true">10</ion-option>\n\n            <ion-option value="20">20</ion-option>\n\n            <ion-option value="50">50</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-col>\n\n\n\n      <ion-col col-sm-2 col-md-2 col-lg-2 col-xl-2>\n\n        <button ion-button color="light" (click)="fetchList(\'NEXT\')">\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n      <ion-col col-sm-2 col-md-2 col-lg-2 col-xl-2>\n\n        <button ion-button color="light" (click)="fetchList(\'LAST\')">\n\n          <ion-icon name="arrow-dropright"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-footer>'/*ion-inline-end:"D:\DEVELOPMENT\GIT\Teknisyen Mobile\Ionic-Offline-App-v2\Ionic-Offline-App\src\pages\bildirimler\bildirimler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_mesajlar_mesajlar__["a" /* MesajlarProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], BildirimlerPage);
    return BildirimlerPage;
}());

//# sourceMappingURL=bildirimler.js.map

/***/ })

},[552]);
//# sourceMappingURL=main.js.map