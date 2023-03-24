"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImgBBUploadService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ImgBBUploadService = /** @class */ (function () {
    function ImgBBUploadService(httpCient) {
        this.httpCient = httpCient;
        this.apiKey = '1975df687d24ced8cf9805976c3cc75e';
    }
    ImgBBUploadService.prototype.upload = function (file) {
        var fd = new FormData();
        fd.append('image', file);
        return this.httpCient
            .post('/upload', fd, { params: { key: this.apiKey } })
            .pipe(operators_1.map(function (response) { return response['data']['url']; }));
    };
    ImgBBUploadService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], ImgBBUploadService);
    return ImgBBUploadService;
}());
exports.ImgBBUploadService = ImgBBUploadService;
