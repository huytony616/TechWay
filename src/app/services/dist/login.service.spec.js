"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var user_service_1 = require("./user.service");
describe('LoginService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(user_service_1.LoginService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
