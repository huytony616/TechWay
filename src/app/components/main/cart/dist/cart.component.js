"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var vi_1 = require("@angular/common/locales/vi");
var common_1 = require("@angular/common");
common_1.registerLocaleData(vi_1["default"], 'vi');
var CartComponent = /** @class */ (function () {
    function CartComponent(prodSVC, snack, router) {
        this.prodSVC = prodSVC;
        this.snack = snack;
        this.router = router;
        this.orderDetails = { cartItems: [
                {
                    id: 0,
                    quantity: 0,
                    product: {
                        id: 0,
                        name: '',
                        price: 0,
                        image: ''
                    }
                }
            ],
            shipping: 0,
            address: '',
            phone: '' };
        this.filtersLoaded = Promise.resolve(false);
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    CartComponent.prototype.getCart = function () {
        var _this = this;
        this.prodSVC.getCartByUser().subscribe(function (res) {
            _this.cartDetails = res;
            _this.cartItems = res.cartItems;
            console.log(_this.cartDetails.totalValue);
        }, function (err) {
            console.log(err);
        });
    };
    CartComponent.prototype.placeOrder = function (form) {
        var _this = this;
        this.orderDetails.cartItems = this.cartItems;
        this.prodSVC.placeOrder(this.orderDetails).subscribe(function (res) {
            _this.snack.open("Successfully Placed Order !!! \n Please check your email for confirmation", 'OK', {
                panelClass: ['sc-snackbar'],
                verticalPosition: 'bottom'
            });
            _this.router.navigate(['/TechWay']);
            console.log(res);
        }, function (err) {
            _this.snack.open('Fail With Error: ' + err.name + '\n Message: ' + err.message, 'OK', {
                panelClass: ['dg-snackbar'],
                verticalPosition: 'bottom'
            });
        });
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
