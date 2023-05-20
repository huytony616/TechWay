"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var angular_jwt_1 = require("@auth0/angular-jwt");
var AppComponent = /** @class */ (function () {
    function AppComponent(authSVC) {
        this.authSVC = authSVC;
        this.helper = new angular_jwt_1.JwtHelperService();
        this.title = 'TechWay';
        this.str = '';
        this.givRole = [];
        this.acpRole = ['ROLE_DIRE', 'ROLE_STAFF'];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Token = localStorage.getItem('jwtToken');
        if (Token != null && Token != '') {
            this.authSVC.decodedToken = this.helper.decodeToken(Token);
        }
        if (this.authSVC.isLoggedIn() && Token != null) {
            var dcdToken = this.helper.decodeToken(Token);
            this.str = dcdToken.roles;
            this.givRole = this.str.substring(1, this.str.length - 1).split(',');
            var containsAny = this.givRole.every(function (item) { return _this.acpRole.includes(item); });
            if (containsAny) {
                this.authSVC.decodedToken = dcdToken;
                this.authSVC.hasRole = true;
            }
            else {
                this.authSVC.hasRole = false;
            }
        }
        else {
            this.authSVC.hasRole = false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
