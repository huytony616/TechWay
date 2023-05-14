"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var vi_1 = require("@angular/common/locales/vi");
var common_1 = require("@angular/common");
common_1.registerLocaleData(vi_1["default"], 'vi');
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authSVC, prodService, snack, router) {
        this.authSVC = authSVC;
        this.prodService = prodService;
        this.snack = snack;
        this.router = router;
        this.CartCount = 0;
        this.CartAmount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getCartInfo();
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    };
    HeaderComponent.prototype.getCartInfo = function () {
        var _this = this;
        if (this.authSVC.isLoggedIn()) {
            this.prodService.getCartByUser().subscribe(function (res) {
                try {
                    _this.CartCount = res.cartItems.length;
                    _this.CartAmount = res.totalValue;
                }
                catch (error) {
                    _this.CartCount = 0;
                    _this.CartAmount = 0;
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    HeaderComponent.prototype.cart = function () {
        if (this.authSVC.isLoggedIn()) {
            this.router.navigate(['/cart']);
        }
        else {
            this.snack.open('Please Login to proceed this action !', 'OK', {
                panelClass: ['dg-snackbar'],
                verticalPosition: 'bottom'
            });
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
