webpackJsonp([98],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableLayout2Module", function() { return ExpandableLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_2__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpandableLayout2Module = (function () {
    function ExpandableLayout2Module() {
    }
    ExpandableLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_2__["a" /* ExpandableLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expandable_layout_2__["a" /* ExpandableLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_2__["a" /* ExpandableLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ExpandableLayout2Module);
    return ExpandableLayout2Module;
}());

//# sourceMappingURL=expandable-layout-2.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout2; });
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


var ExpandableLayout2 = (function () {
    function ExpandableLayout2() {
    }
    ExpandableLayout2.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout2.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    ExpandableLayout2.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout2.prototype.isGroupShown = function (group) {
        return group.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ExpandableLayout2.prototype, "content", void 0);
    ExpandableLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'expandable-layout-2',template:/*ion-inline-start:"/Users/xoxo/Downloads/prj666-g1/src/components/list-view/expandable/layout-2/expandable.html"*/'<!-- Themes Expandable - Full image with CTA -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12 no-padding no-margin>\n\n        <ion-list>\n\n          <ul no-margin no-padding class="collapsible">\n\n            <li margin *ngFor="let group of data.items;">\n\n              <!-- Expandable Full image with CTA Header-->\n\n              <div class="collapsible-header" (click)="toggleGroup(group)">\n\n                <ion-item no-margin padding no-lines background-size\n\n                [ngStyle]="{\'background-image\': \'url(\' + group.backgroundImage + \')\'}">\n\n                  <!-- Subtitle Card -->\n\n                  <h3 ion-text text-wrap text-capitalize item-subtitle>{{group.subtitle}}</h3>\n\n                  <!-- Title Card -->\n\n                  <h1 ion-text text-wrap header-title>{{group.title}}</h1>\n\n                  <!-- Icon And Text For Read More-->\n\n                  <div read-more>\n\n                    <ion-icon icon-medium float-left name="{{group.icon}}"></ion-icon>\n\n                    <span span-medium>{{group.iconText}}</span>\n\n                  </div>\n\n                </ion-item>\n\n              </div>\n\n              <!-- Expandable Full image with CTA Body -->\n\n              <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n\n                <ion-item text-wrap no-lines>\n\n                  <!-- Icon Rating Star -->\n\n                  <ion-icon float-left *ngFor="let item of group.expandItems.iconsStars;let i = index"\n\n                  (click)="onStarClass(group.expandItems.iconsStars, i, $event);">\n\n                    <i icon-small *ngIf="item.isActive" class="icon {{item.iconActive}}"></i>\n\n                    <i icon-small *ngIf="!item.isActive" class="icon {{item.iconInactive}}"></i>\n\n                  </ion-icon>\n\n                  <!-- Reviews Star -->\n\n                  <span span-small>{{group.expandItems.reviews}}</span>\n\n                  <div (click)="onEvent(\'onItemClick\', group, $event)">\n\n                    <!-- Titile -->\n\n                    <h2 margin-top subitem-title>{{group.expandItems.title}}</h2>\n\n                    <!-- Description -->\n\n                    <p subitem-subtitle>{{group.expandItems.description}}</p>\n\n                  </div>\n\n                </ion-item>\n\n              </div>\n\n            </li>\n\n          </ul>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/xoxo/Downloads/prj666-g1/src/components/list-view/expandable/layout-2/expandable.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout2);
    return ExpandableLayout2;
}());

//# sourceMappingURL=expandable-layout-2.js.map

/***/ })

});
//# sourceMappingURL=98.js.map