"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var home_component_1 = require("./components/main/home/home.component");
var product_component_1 = require("./components/main/product/product.component");
var signin_component_1 = require("./components/main/signin/signin.component");
var sigup_component_1 = require("./components/main/sigup/sigup.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var upload_img_component_1 = require("./components/main/upload-img/upload-img.component");
var animations_1 = require("@angular/platform-browser/animations");
var grid_list_1 = require("@angular/material/grid-list");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                product_component_1.ProductComponent,
                signin_component_1.SigninComponent,
                sigup_component_1.SigupComponent,
                upload_img_component_1.UploadIMGComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                grid_list_1.MatGridListModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
