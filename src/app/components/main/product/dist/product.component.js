"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var vi_1 = require("@angular/common/locales/vi");
var common_1 = require("@angular/common");
common_1.registerLocaleData(vi_1["default"], 'vi');
var ProductComponent = /** @class */ (function () {
    function ProductComponent(prodSVC, route, snack) {
        this.prodSVC = prodSVC;
        this.route = route;
        this.snack = snack;
        this.prod = {
            id: 0,
            product: {
                id: 0,
                productNo: '',
                name: '',
                images: '',
                price: 0,
                available: false,
                category: {
                    id: 0,
                    categoryNo: '',
                    categoryName: ''
                },
                manufacturer: {
                    id: 0,
                    manufacturerName: ''
                },
                color: {
                    id: 0,
                    color: ''
                }
            },
            cpu: '',
            core: 0,
            thread: 0,
            cpuSpeed: 0,
            cpuMaxSpeed: 0,
            cache: 0,
            ram: 0,
            type: '',
            busRAM: 0,
            maxRAM: 0,
            ssd: '',
            screenWidth: 0,
            screenResolution: '',
            hz: 0,
            screenTechs: [
                {
                    id: 0,
                    name: ''
                },
            ],
            screenCard: '',
            sound: ''
        };
        this.prodE = {
            id: 0,
            product: {
                id: 0,
                productNo: '',
                name: '',
                images: '',
                price: 0,
                available: false,
                category: {
                    id: 0,
                    categoryNo: '',
                    categoryName: ''
                },
                manufacturer: {
                    id: 0,
                    manufacturerName: ''
                },
                color: {
                    id: 0,
                    color: ''
                }
            },
            screenTech: {
                id: 0,
                name: ''
            },
            screenResolution: '',
            screenWidth: 0,
            maxLight: '',
            glass: '',
            backCameraResolution: '',
            frontCameraResolution: '',
            flash: 0,
            backCameraFeatures: [
                {
                    id: 0,
                    name: ''
                },
            ],
            frontCameraFeatures: [
                {
                    id: 0,
                    name: ''
                },
            ],
            os: '',
            cpu: '',
            cpuSpeed: '',
            gpu: '',
            ram: 0,
            rom: 0,
            romUseable: 0,
            contacts: '',
            mobileNetwork: '',
            sim: '',
            bluetooth: '',
            port: '',
            jackPhone: '',
            pinCapacity: 0,
            pinType: '',
            maxChargingSupport: 0,
            advancedSecurities: [
                {
                    id: 0,
                    name: ''
                },
            ],
            specialFeatures: [
                {
                    id: 0,
                    name: ''
                },
            ],
            design: '',
            material: '',
            dimensionAndWeight: ''
        };
        this.filtersLoaded = Promise.resolve(false);
        this.imgLst = [];
        this.selectedProductIndex = 0;
        this.isLT = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.loadDeatail();
    };
    ProductComponent.prototype.loadDeatail = function () {
        var _this = this;
        var pid = this.route.snapshot.paramMap.get('prodId');
        var cid = this.route.snapshot.paramMap.get('catId');
        if (pid && cid) {
            if (Number(cid) == 2) {
                this.isLT = true;
                this.prodSVC.getProdDetail(pid).subscribe(function (res) {
                    var data = res.product.images.split(">");
                    data.splice(data.length - 1, 1);
                    data.forEach(function (url) {
                        _this.imgLst.push({ url: url });
                    });
                    _this.product = res;
                    console.log(_this.product);
                    _this.filtersLoaded = Promise.resolve(true);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                this.prodSVC.getProdEDetail(pid).subscribe(function (res) {
                    var data = res.product.images.split(">");
                    data.splice(data.length - 1, 1);
                    data.forEach(function (url) {
                        _this.imgLst.push({ url: url });
                    });
                    _this.product = res;
                    console.log(res);
                    _this.filtersLoaded = Promise.resolve(true);
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.snack.open('STW', 'OK', {
                panelClass: ['dg-snackbar'],
                verticalPosition: 'bottom'
            });
        }
    };
    ProductComponent.prototype.editProd = function (form) {
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
