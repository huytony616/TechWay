"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var angular_jwt_1 = require("@auth0/angular-jwt");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.requestHeader = new http_1.HttpHeaders({ 'No-Auth': 'True' });
        this.helper = new angular_jwt_1.JwtHelperService();
    }
    UserService.prototype.setRoles = function (roles) {
        localStorage.setItem('roles', JSON.stringify(roles));
    };
    UserService.prototype.getRoles = function () {
        return JSON.parse(localStorage.getItem('roles') || '{}');
    };
    UserService.prototype.setToken = function (jwtToken) {
        localStorage.setItem('jwtToken', jwtToken);
        this.decodedToken = this.helper.decodeToken(localStorage.getItem('jwtToken') || '{}');
        console.log(this.decodedToken);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('jwtToken') || '{}';
    };
    UserService.prototype.clear = function () {
        localStorage.clear();
    };
    UserService.prototype.isLoggedIn = function () {
        var Token = localStorage.getItem('jwtToken');
        return !this.helper.isTokenExpired(Token) && this.getToken();
    };
    UserService.prototype.loginWithEmail = function (userInfo) {
        return this.http.post("", userInfo);
    };
    UserService.prototype.signUp = function (user) {
        return this.http.post('http://localhost:8080/api/v1/auth/registration', user);
    };
    UserService.prototype.signIn = function (user) {
        return this.http.post('http://localhost:8080/api/v1/auth/login', user, {
            headers: this.requestHeader
        });
    };
    UserService.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var userRoles = this.getRoles();
        if (userRoles != null && userRoles) {
            for (var i = 0; i < userRoles.length; i++) {
                for (var j = 0; j < allowedRoles.length; j++) {
                    if (userRoles[i].roleName === allowedRoles[j]) {
                        isMatch = true;
                        return isMatch;
                    }
                    else {
                        return isMatch;
                    }
                }
            }
        }
        return isMatch;
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
