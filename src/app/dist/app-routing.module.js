"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/main/home/home.component");
var product_component_1 = require("./components/main/product/product.component");
var signin_component_1 = require("./components/main/signin/signin.component");
var sigup_component_1 = require("./components/main/sigup/sigup.component");
var cart_component_1 = require("./components/main/cart/cart.component");
var order_component_1 = require("./components/main/order/order.component");
var routes = [
    { path: 'TechWay', component: home_component_1.HomeComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: sigup_component_1.SigupComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'order', component: order_component_1.OrderComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
