"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductResolveService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ProductResolveService = /** @class */ (function () {
    function ProductResolveService(productService) {
        this.productService = productService;
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
    }
    ProductResolveService.prototype.resolve = function (route, state) {
        var pid = route.paramMap.get('prodId');
        var cid = route.paramMap.get('prodId');
        if (pid && cid) {
            //then we have to fetch details from backend
            if (Number(cid) == 2) {
                return this.productService.getProdDetail(pid);
            }
            else {
            }
        }
        else {
            // return empty product observable.
            return rxjs_1.of(this.prod);
        }
    };
    ProductResolveService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductResolveService);
    return ProductResolveService;
}());
exports.ProductResolveService = ProductResolveService;
