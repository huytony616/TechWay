"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.requestHeader = new http_1.HttpHeaders({ 'No-Auth': 'True' });
    }
    ProductsService.prototype.addProd = function (prod) {
        console.log(prod);
        return this.http.post('http://localhost:8080/api/v1/products', prod);
    };
    ProductsService.prototype.getAllProd = function () {
        return this.http.get('http://localhost:8080/api/v1/products/name', {
            headers: this.requestHeader
        });
    };
    ProductsService.prototype.delProd = function (id) {
        return this.http["delete"]('http://localhost:8080/api/v1/products/' + id);
    };
    ProductsService.prototype.editProd = function (prod, id) {
        return this.http.put('http://localhost:8080/api/v1/products/' + id, prod);
    };
    ProductsService.prototype.getScrTech = function () {
        return this.http.get('http://localhost:8080/api/v1/screentechs');
    };
    ProductsService.prototype.getCamFet = function () {
        return this.http.get('http://localhost:8080/api/v1/camera-featurers');
    };
    ProductsService.prototype.getSpcFet = function () {
        return this.http.get('http://localhost:8080/api/v1/special-features');
    };
    ProductsService.prototype.getAdcSec = function () {
        return this.http.get('http://localhost:8080/api/v1/advanced-securities');
    };
    ProductsService.prototype.addToCart = function (pid) {
        return this.http.post('http://localhost:8080/api/v1/cart/product/' + pid, null);
    };
    ProductsService.prototype.getCartByUser = function () {
        return this.http.get('http://localhost:8080/api/v1/cart');
    };
    ProductsService.prototype.getProdDetail = function (id) {
        return this.http.get('http://localhost:8080/api/v1/laptopdetails/' + id);
    };
    ProductsService.prototype.getProdEDetail = function (id) {
        return this.http.get('http://localhost:8080/api/v1/phone-details/' + id);
    };
    ProductsService.prototype.placeOrder = function (order) {
        return this.http.post('http://localhost:8080/api/v1/orders', order);
    };
    ProductsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
