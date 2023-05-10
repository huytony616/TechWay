"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserAuthService = void 0;
var core_1 = require("@angular/core");
var angular_jwt_1 = require("@auth0/angular-jwt");
var UserAuthService = /** @class */ (function () {
    function UserAuthService(userSVC) {
        this.helper = new angular_jwt_1.JwtHelperService();
    }
    UserAuthService.prototype.setRoles = function (roles) {
        localStorage.setItem('roles', JSON.stringify(roles));
    };
    UserAuthService.prototype.getRoles = function () {
        return JSON.parse(localStorage.getItem('roles') || '{}');
    };
    UserAuthService.prototype.setToken = function (jwtToken) {
        localStorage.setItem('jwtToken', jwtToken);
        this.decodedToken = this.helper.decodeToken(localStorage.getItem('jwtToken') || '{}');
        console.log(this.decodedToken);
    };
    UserAuthService.prototype.getToken = function () {
        return localStorage.getItem('jwtToken') || '{}';
    };
    UserAuthService.prototype.clear = function () {
        localStorage.clear();
    };
    UserAuthService.prototype.isLoggedIn = function () {
        var Token = localStorage.getItem('jwtToken');
        return !this.helper.isTokenExpired(Token) && this.getToken();
    };
    UserAuthService.prototype.isAdmin = function () {
    };
    UserAuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserAuthService);
    return UserAuthService;
}());
exports.UserAuthService = UserAuthService;
