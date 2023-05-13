"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImageSliderComponent = void 0;
var core_1 = require("@angular/core");
var ImageSliderComponent = /** @class */ (function () {
    function ImageSliderComponent() {
        this.slides = [];
        this.currentIndex = 0;
    }
    ImageSliderComponent.prototype.ngOnInit = function () {
        this.resetTimer();
    };
    ImageSliderComponent.prototype.ngOnDestroy = function () {
        window.clearTimeout(this.timeoutId);
    };
    ImageSliderComponent.prototype.resetTimer = function () {
        var _this = this;
        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
        }
        this.timeoutId = window.setTimeout(function () { return _this.goToNext(); }, 3000);
    };
    ImageSliderComponent.prototype.goToPrevious = function () {
        var isFirstSlide = this.currentIndex === 0;
        var newIndex = isFirstSlide
            ? this.slides.length - 1
            : this.currentIndex - 1;
        this.resetTimer();
        this.currentIndex = newIndex;
    };
    ImageSliderComponent.prototype.goToNext = function () {
        var isLastSlide = this.currentIndex === this.slides.length - 1;
        var newIndex = isLastSlide ? 0 : this.currentIndex + 1;
        this.resetTimer();
        this.currentIndex = newIndex;
    };
    ImageSliderComponent.prototype.goToSlide = function (slideIndex) {
        this.resetTimer();
        this.currentIndex = slideIndex;
    };
    ImageSliderComponent.prototype.getCurrentSlideUrl = function () {
        return "url('" + this.slides[this.currentIndex].url + "')";
    };
    __decorate([
        core_1.Input()
    ], ImageSliderComponent.prototype, "slides");
    ImageSliderComponent = __decorate([
        core_1.Component({
            selector: 'image-slider',
            templateUrl: './imageSlider.component.html',
            styleUrls: ['./imageSlider.component.css']
        })
    ], ImageSliderComponent);
    return ImageSliderComponent;
}());
exports.ImageSliderComponent = ImageSliderComponent;
