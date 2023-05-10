"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var vi_1 = require("@angular/common/locales/vi");
var common_1 = require("@angular/common");
common_1.registerLocaleData(vi_1["default"], 'vi');
var HomeComponent = /** @class */ (function () {
    function HomeComponent(prodService, snack, authSVC) {
        this.prodService = prodService;
        this.snack = snack;
        this.authSVC = authSVC;
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
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllProd();
    };
    HomeComponent.prototype.getImage0 = function (imgLst) {
        return imgLst.split(">")[0];
    };
    HomeComponent.prototype.getAllProd = function () {
        var _this = this;
        this.prodService.getAllProd().subscribe(function (res) {
            _this.FeaLst = res.slice(0, 10);
            console.log(_this.FeaLst);
        }, function (err) {
            console.log(err);
            _this.snack.open('Fail With Error: ' + err.name + '\n Message: ' + err.message, 'OK', {
                panelClass: ['dg-snackbar'],
                verticalPosition: 'bottom'
            });
        });
    };
    HomeComponent.prototype.addToCart = function (pid) {
        var _this = this;
        this.prodService.addToCart(pid).subscribe(function (res) {
            _this.snack.open("Successfully Added This Product To Your Cart !!! \n Let's Buy More", 'OK', {
                panelClass: ['sc-snackbar'],
                verticalPosition: 'bottom'
            });
            console.log(res);
        }, function (err) {
            _this.snack.open('Fail With Error: ' + err.name + '\n Message: ' + err.message, 'OK', {
                panelClass: ['dg-snackbar'],
                verticalPosition: 'bottom'
            });
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
