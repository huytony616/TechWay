"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.__esModule = true;
exports.ProductsComponent = void 0;
var core_1 = require("@angular/core");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(prodService, imgbbService, sanitizer) {
        this.prodService = prodService;
        this.imgbbService = imgbbService;
        this.sanitizer = sanitizer;
        this.isAvailabled = false;
        this.hh = '';
        this.imgLst = { imgItem: [] };
        this.prod = {
            id: -1,
            productNo: '',
            name: '',
            image: '',
            price: 0,
            available: false,
            categoryId: 0,
            manufacturerId: 0,
            colorId: 0
        };
    }
    ProductsComponent.prototype.onInput = function (e) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var input, lght, field, loader, sleep, i;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        input = e.target;
                        lght = (_a = input.files) === null || _a === void 0 ? void 0 : _a.length;
                        field = document.getElementById('inputField');
                        loader = document.getElementById('grLoader');
                        sleep = function (ms) { return new Promise(function (r) { return setTimeout(r, ms); }); };
                        if (!(loader != null && lght != null && lght != 0)) return [3 /*break*/, 2];
                        field === null || field === void 0 ? void 0 : field.setAttribute('disabled', '');
                        loader.style.display = 'block';
                        for (i = 0; i < lght; i++) {
                            this.imgbbService
                                .upload(input.files[i])
                                .subscribe(function (url) { return (_this.imgLst.imgItem.push(url), (_this.hh += url + '>'), _this.prod.image += _this.hh); });
                        }
                        return [4 /*yield*/, sleep(5000)];
                    case 1:
                        _b.sent();
                        field === null || field === void 0 ? void 0 : field.removeAttribute('disabled');
                        loader.style.display = 'none';
                        _b.label = 2;
                    case 2:
                        console.log(this.hh);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.removeImg = function (i) {
        this.imgLst.imgItem.splice(i, 1);
        console.log(this.hh);
    };
    ProductsComponent.prototype.addProd = function (addProdForm) {
        var _this = this;
        this.prodService.addProd(this.prod).subscribe(function (res) {
            console.log(res);
            console.log(_this.prod);
        });
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
