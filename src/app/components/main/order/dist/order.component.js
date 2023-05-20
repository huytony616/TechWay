"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vi_1 = require("@angular/common/locales/vi");
common_1.registerLocaleData(vi_1["default"], 'vi');
var OrderComponent = /** @class */ (function () {
    function OrderComponent(prodService, snack) {
        this.prodService = prodService;
        this.snack = snack;
        this.filtersLoaded = Promise.resolve(false);
        this.displayedColumns = [
            'id',
            'fullname',
            'address',
            'phone',
            'orderDate',
            'total',
            'shippingStatus',
        ];
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrderComponent.prototype.getOrders = function () {
        var _this = this;
        this.prodService.getOrderByUser().subscribe(function (res) {
            _this.dataSource = res;
            _this.filtersLoaded = Promise.resolve(true);
            console.log(res);
        }, function (err) {
            console.log(err);
            _this.snack.open('Fail With Error: ' + err.name + '\n Message: ' + err.message, 'OK', {
                panelClass: ['dg-snackbar'],
                verticalPosition: 'bottom'
            });
        });
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'app-order',
            templateUrl: './order.component.html',
            styleUrls: ['./order.component.css']
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
