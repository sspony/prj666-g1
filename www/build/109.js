webpackJsonp([109],{

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryLayout1Module", function() { return ImageGalleryLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageGalleryLayout1Module = (function () {
    function ImageGalleryLayout1Module() {
    }
    ImageGalleryLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__["a" /* ImageGalleryLayout1 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__["a" /* ImageGalleryLayout1 */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_gallery_layout_1__["a" /* ImageGalleryLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ImageGalleryLayout1Module);
    return ImageGalleryLayout1Module;
}());

//# sourceMappingURL=image-gallery-layout-1.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageGalleryLayout1 = (function () {
    function ImageGalleryLayout1(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.openSubGallery = function (group, index) {
            _this.navCtrl.push(group.subGallery, {
                'group': group.items[index],
                'events': _this.events,
                'layout': 1
            });
        };
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    ImageGalleryLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageGalleryLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageGalleryLayout1.prototype, "events", void 0);
    ImageGalleryLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'image-gallery-layout-1',template:/*ion-inline-start:"/Users/xoxo/Downloads/prj666-g1/src/components/image-gallery/layout-1/image-gallery-layout-1.html"*/'<!--Theme Gallery for Full gallery 1-->\n\n<ion-grid *ngIf="data != null">\n\n    <ion-row no-padding>\n\n        <ion-col col-6 col-sm-3 col-md-6 col-lg-4 col-xl-3 *ngFor="let group of data.items;let i = index;">\n\n            <ion-card background-size (click)="openSubGallery(data, i)" [ngStyle]="{\'background-image\': \'url(\' + group.image + \')\'}">\n\n                <div gallery-description>\n\n                    <h6 gallery-subtitle>{{group.items.length}} image(s)</h6>\n\n                    <h2 gallery-title text-wrap>{{group.title}}</h2>\n\n                </div>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/xoxo/Downloads/prj666-g1/src/components/image-gallery/layout-1/image-gallery-layout-1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ImageGalleryLayout1);
    return ImageGalleryLayout1;
}());

//# sourceMappingURL=image-gallery-layout-1.js.map

/***/ })

});
//# sourceMappingURL=109.js.map