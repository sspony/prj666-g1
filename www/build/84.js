webpackJsonp([84],{

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLayout1Module", function() { return RangeLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_layout_1__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RangeLayout1Module = (function () {
    function RangeLayout1Module() {
    }
    RangeLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RangeLayout1Module);
    return RangeLayout1Module;
}());

//# sourceMappingURL=range-layout-1.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RangeLayout1 = (function () {
    function RangeLayout1() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    RangeLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], RangeLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], RangeLayout1.prototype, "events", void 0);
    RangeLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'range-button-layout-1',template:/*ion-inline-start:"/Users/xoxo/Downloads/prj666-g1/src/components/range/layout-1/range.html"*/'<!-- RANGE COMPONENTS - Basic -->\n\n<ion-list no-margin *ngIf="data != null">\n\n    <ion-list-header no-lines no-margin text-uppercase>\n\n        <p ion-text>{{data.title}}</p>\n\n        <ion-badge item-end>{{data.value}}</ion-badge>\n\n    </ion-list-header>\n\n    <ion-item>\n\n        <ion-range [(ngModel)]="data.value" (ionChange)="onEvent(\'onChange\', data.value, $event)">\n\n        </ion-range>\n\n    </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"/Users/xoxo/Downloads/prj666-g1/src/components/range/layout-1/range.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RangeLayout1);
    return RangeLayout1;
}());

//# sourceMappingURL=range-layout-1.js.map

/***/ })

});
//# sourceMappingURL=84.js.map