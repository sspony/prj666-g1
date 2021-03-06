webpackJsonp([115],{

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/action-sheet/layout-1/action-sheet-layout-1.module": [
		615,
		38
	],
	"../components/action-sheet/layout-2/action-sheet-layout-2.module": [
		548,
		37
	],
	"../components/action-sheet/layout-3/action-sheet-layout-3.module": [
		549,
		114
	],
	"../components/check-box/layout-1/check-box-layout-1.module": [
		550,
		113
	],
	"../components/check-box/layout-2/check-box-layout-2.module": [
		551,
		112
	],
	"../components/check-box/layout-3/check-box-layout-3.module": [
		616,
		111
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		552,
		110
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		553,
		109
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		554,
		108
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		555,
		107
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		556,
		106
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		557,
		105
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		558,
		104
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		559,
		103
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		560,
		102
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		561,
		101
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		562,
		100
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		563,
		99
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		564,
		98
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		565,
		97
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		566,
		96
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		567,
		95
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		568,
		94
	],
	"../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		569,
		3
	],
	"../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		570,
		2
	],
	"../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		571,
		1
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		572,
		93
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		573,
		92
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		574,
		91
	],
	"../components/login/layout-1/login-layout-1.module": [
		575,
		90
	],
	"../components/login/layout-2/login-layout-2.module": [
		576,
		89
	],
	"../components/maps/layout-1/maps-layout-1.module": [
		577,
		6
	],
	"../components/maps/layout-2/maps-layout-2.module": [
		578,
		8
	],
	"../components/maps/layout-3/maps-layout-3.module": [
		579,
		7
	],
	"../components/parallax/layout-1/parallax-layout-1.module": [
		580,
		36
	],
	"../components/parallax/layout-2/parallax-layout-2.module": [
		581,
		35
	],
	"../components/parallax/layout-3/parallax-layout-3.module": [
		582,
		34
	],
	"../components/parallax/layout-4/parallax-layout-4.module": [
		583,
		33
	],
	"../components/qrcode/layout-1/qrcode-layout-1.module": [
		584,
		88
	],
	"../components/radio-button/layout-1/radio-button-layout-1.module": [
		585,
		87
	],
	"../components/radio-button/layout-2/radio-button-layout-2.module": [
		586,
		86
	],
	"../components/radio-button/layout-3/radio-button-layout-3.module": [
		587,
		85
	],
	"../components/range/layout-1/range-layout-1.module": [
		588,
		84
	],
	"../components/range/layout-2/range-layout-2.module": [
		589,
		83
	],
	"../components/range/layout-3/range-layout-3.module": [
		590,
		82
	],
	"../components/range/layout-4/range-layout-4.module": [
		591,
		81
	],
	"../components/register/layout-1/register-layout-1.module": [
		592,
		80
	],
	"../components/register/layout-2/register-layout-2.module": [
		593,
		79
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		594,
		78
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		595,
		77
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		596,
		76
	],
	"../components/select/layout-1/select-layout-1.module": [
		597,
		75
	],
	"../components/select/layout-2/select-layout-2.module": [
		598,
		74
	],
	"../components/select/layout-3/select-layout-3.module": [
		599,
		73
	],
	"../components/select/layout-4/select-layout-4.module": [
		600,
		72
	],
	"../components/select/layout-5/select-layout-5.module": [
		601,
		71
	],
	"../components/select/layout-6/select-layout-6.module": [
		602,
		70
	],
	"../components/spinner/spinner.module": [
		603,
		69
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		604,
		68
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		605,
		67
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		606,
		66
	],
	"../components/sub-image-gallery/sub-image-gallery.module": [
		546,
		65
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		607,
		64
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		608,
		63
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		609,
		62
	],
	"../components/toggle/layout-1/toggle-layout-1.module": [
		610,
		61
	],
	"../components/toggle/layout-2/toggle-layout-2.module": [
		611,
		60
	],
	"../components/toggle/layout-3/toggle-layout-3.module": [
		612,
		59
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		547,
		58
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		613,
		57
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		614,
		56
	],
	"../pages/home/home.module": [
		617,
		53
	],
	"../pages/intro-page/intro-page.module": [
		618,
		28
	],
	"../pages/item-details-action-sheet/item-details-action-sheet.module": [
		619,
		13
	],
	"../pages/item-details-appearance-animation/item-details-appearance-animation.module": [
		620,
		10
	],
	"../pages/item-details-check-box/item-details-check-box.module": [
		621,
		25
	],
	"../pages/item-details-drag-and-drop/item-details-drag-and-drop.module": [
		622,
		23
	],
	"../pages/item-details-expandable/item-details-expandable.module": [
		623,
		22
	],
	"../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module": [
		624,
		32
	],
	"../pages/item-details-google-card/item-details-google-card.module": [
		625,
		21
	],
	"../pages/item-details-image-gallery/item-details-image-gallery.module": [
		626,
		24
	],
	"../pages/item-details-login/item-details-login.module": [
		627,
		27
	],
	"../pages/item-details-maps/item-details-maps.module": [
		628,
		4
	],
	"../pages/item-details-parallax/item-details-parallax.module": [
		629,
		11
	],
	"../pages/item-details-qrcode/item-details-qrcode.module": [
		630,
		31
	],
	"../pages/item-details-radio-button/item-details-radio-button.module": [
		631,
		19
	],
	"../pages/item-details-range/item-details-range.module": [
		632,
		12
	],
	"../pages/item-details-register/item-details-register.module": [
		633,
		26
	],
	"../pages/item-details-search-bar/item-details-search-bar.module": [
		634,
		18
	],
	"../pages/item-details-select/item-details-select.module": [
		635,
		9
	],
	"../pages/item-details-spinner/item-details-spinner.module": [
		636,
		30
	],
	"../pages/item-details-splash-screen/item-details-splash-screen.module": [
		637,
		17
	],
	"../pages/item-details-sticky-list-header/item-details-sticky-list-header.module": [
		638,
		0
	],
	"../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module": [
		639,
		29
	],
	"../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module": [
		640,
		20
	],
	"../pages/item-details-tabs/item-details-tabs.module": [
		641,
		16
	],
	"../pages/item-details-text-view/item-details-text-view.module": [
		642,
		55
	],
	"../pages/item-details-toggle/item-details-toggle.module": [
		643,
		15
	],
	"../pages/item-details-wizard/item-details-wizard.module": [
		644,
		14
	],
	"../pages/item-details/item-details.module": [
		645,
		54
	],
	"../pages/items/items.module": [
		660,
		5
	],
	"../pages/tab-page-1/tab-page-1.module": [
		646,
		52
	],
	"../pages/tab-page-10/tab-page-10.module": [
		647,
		51
	],
	"../pages/tab-page-11/tab-page-11.module": [
		648,
		50
	],
	"../pages/tab-page-12/tab-page-12.module": [
		649,
		49
	],
	"../pages/tab-page-13/tab-page-13.module": [
		650,
		48
	],
	"../pages/tab-page-14/tab-page-14.module": [
		651,
		47
	],
	"../pages/tab-page-2/tab-page-2.module": [
		652,
		46
	],
	"../pages/tab-page-3/tab-page-3.module": [
		653,
		45
	],
	"../pages/tab-page-4/tab-page-4.module": [
		654,
		44
	],
	"../pages/tab-page-5/tab-page-5.module": [
		655,
		43
	],
	"../pages/tab-page-6/tab-page-6.module": [
		656,
		42
	],
	"../pages/tab-page-7/tab-page-7.module": [
		657,
		41
	],
	"../pages/tab-page-8/tab-page-8.module": [
		658,
		40
	],
	"../pages/tab-page-9/tab-page-9.module": [
		659,
		39
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_toast_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_loading_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/action-sheet/layout-2/action-sheet-layout-2.module#ActionSheetLayout2Module', name: 'ActionSheetLayout2', segment: 'action-sheet-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-3/action-sheet-layout-3.module#ActionSheetLayout3Module', name: 'ActionSheetLayout3', segment: 'action-sheet-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-1/check-box-layout-1.module#CheckBoxLayout1Module', name: 'CheckBoxLayout1', segment: 'check-box-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-2/check-box-layout-2.module#CheckBoxLayout2Module', name: 'CheckBoxLayout2', segment: 'check-box-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module#StickyListHeaderLayout2Module', name: 'StickyListHeaderLayout2', segment: 'sticky-list-header-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module#StickyListHeaderLayout3Module', name: 'StickyListHeaderLayout3', segment: 'sticky-list-header-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-1/maps-layout-1.module#MapsLayout1Module', name: 'MapsLayout1', segment: 'maps-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-2/maps-layout-2.module#MapsLayout2Module', name: 'MapsLayout2', segment: 'maps-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-3/maps-layout-3.module#MapsLayout3Module', name: 'MapsLayout3', segment: 'maps-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-1/parallax-layout-1.module#ParallaxLayout1Module', name: 'ParallaxLayout1', segment: 'parallax-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-2/parallax-layout-2.module#ParallaxLayout2Module', name: 'ParallaxLayout2', segment: 'parallax-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-3/parallax-layout-3.module#ParallaxLayout3Module', name: 'ParallaxLayout3', segment: 'parallax-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-4/parallax-layout-4.module#ParallaxLayout4Module', name: 'ParallaxLayout4', segment: 'parallax-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/qrcode/layout-1/qrcode-layout-1.module#QRcodeLayout1Module', name: 'QRcodeLayout1', segment: 'qrcode-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/sub-image-gallery.module#SubImageGalleryModule', name: 'SubImageGallery', segment: 'sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-page/intro-page.module#IntroPageModule', name: 'IntroPage', segment: 'intro-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-action-sheet/item-details-action-sheet.module#ItemDetailsPageActionSheetModule', name: 'ItemDetailsPageActionSheet', segment: 'item-details-action-sheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-appearance-animation/item-details-appearance-animation.module#ItemDetailsPageAppearanceAnimationModule', name: 'ItemDetailsPageAppearanceAnimation', segment: 'item-details-appearance-animation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-check-box/item-details-check-box.module#ItemDetailsPageCheckBoxModule', name: 'ItemDetailsPageCheckBox', segment: 'item-details-check-box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-drag-and-drop/item-details-drag-and-drop.module#ItemDetailsPageDragAndDropModule', name: 'ItemDetailsPageDragAndDrop', segment: 'item-details-drag-and-drop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-expandable/item-details-expandable.module#ItemDetailsPageExpandableModule', name: 'ItemDetailsPageExpandable', segment: 'item-details-expandable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module#ItemDetailsPageFullScreenGalleryModule', name: 'ItemDetailsPageFullScreenGallery', segment: 'item-details-full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-google-card/item-details-google-card.module#ItemDetailsPageGoogleCardModule', name: 'ItemDetailsPageGoogleCard', segment: 'item-details-google-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-image-gallery/item-details-image-gallery.module#ItemDetailsPageImageGalleryModule', name: 'ItemDetailsPageImageGallery', segment: 'item-details-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-login/item-details-login.module#ItemDetailsPageLoginModule', name: 'ItemDetailsPageLogin', segment: 'item-details-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-maps/item-details-maps.module#ItemDetailsPageMapsModule', name: 'ItemDetailsPageMaps', segment: 'item-details-maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-parallax/item-details-parallax.module#ItemDetailsPageParallaxModule', name: 'ItemDetailsPageParallax', segment: 'item-details-parallax', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-qrcode/item-details-qrcode.module#ItemDetailsPageQRCodeModule', name: 'ItemDetailsPageQRCode', segment: 'item-details-qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-radio-button/item-details-radio-button.module#ItemDetailsPageRadioButtonModule', name: 'ItemDetailsPageRadioButton', segment: 'item-details-radio-button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-range/item-details-range.module#ItemDetailsPageRangeModule', name: 'ItemDetailsPageRange', segment: 'item-details-range', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-register/item-details-register.module#ItemDetailsPageRegisterModule', name: 'ItemDetailsPageRegister', segment: 'item-details-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-search-bar/item-details-search-bar.module#ItemDetailsPageSearchBarModule', name: 'ItemDetailsPageSearchBar', segment: 'item-details-search-bar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-select/item-details-select.module#ItemDetailsPageSelectModule', name: 'ItemDetailsPageSelect', segment: 'item-details-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-spinner/item-details-spinner.module#ItemDetailsPageSpinnerModule', name: 'ItemDetailsPageSpinner', segment: 'item-details-spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-splash-screen/item-details-splash-screen.module#ItemDetailsPageSplashScreenModule', name: 'ItemDetailsPageSplashScreen', segment: 'item-details-splash-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-sticky-list-header/item-details-sticky-list-header.module#ItemDetailsPageStickyListHeaderModule', name: 'ItemDetailsPageStickyListHeader', segment: 'item-details-sticky-list-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module#ItemDetailsPageSubImageGalleryModule', name: 'ItemDetailsPageSubImageGallery', segment: 'item-details-sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module#ItemDetailsPageSwipeToDismissModule', name: 'ItemDetailsPageSwipeToDismiss', segment: 'item-details-swipe-to-dismiss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-tabs/item-details-tabs.module#ItemDetailsPageTabsModule', name: 'ItemDetailsPageTabs', segment: 'item-details-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-text-view/item-details-text-view.module#ItemDetailsPageTextViewModule', name: 'ItemDetailsPageTextView', segment: 'item-details-text-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-toggle/item-details-toggle.module#ItemDetailsPageToggleModule', name: 'ItemDetailsPageToggle', segment: 'item-details-toggle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-wizard/item-details-wizard.module#ItemDetailsPageWizardModule', name: 'ItemDetailsPageWizard', segment: 'item-details-wizard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details/item-details.module#ItemDetailsPageModule', name: 'ItemDetailsPage', segment: 'item-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-1/tab-page-1.module#TabPage1Module', name: 'TabPage1', segment: 'tab-page-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-10/tab-page-10.module#TabPage10Module', name: 'TabPage10', segment: 'tab-page-10', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-11/tab-page-11.module#TabPage11Module', name: 'TabPage11', segment: 'tab-page-11', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-12/tab-page-12.module#TabPage12Module', name: 'TabPage12', segment: 'tab-page-12', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-13/tab-page-13.module#TabPage13Module', name: 'TabPage13', segment: 'tab-page-13', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-14/tab-page-14.module#TabPage14Module', name: 'TabPage14', segment: 'tab-page-14', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-2/tab-page-2.module#TabPage2Module', name: 'TabPage2', segment: 'tab-page-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-3/tab-page-3.module#TabPage3Module', name: 'TabPage3', segment: 'tab-page-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-4/tab-page-4.module#TabPage4Module', name: 'TabPage4', segment: 'tab-page-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-5/tab-page-5.module#TabPage5Module', name: 'TabPage5', segment: 'tab-page-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-6/tab-page-6.module#TabPage6Module', name: 'TabPage6', segment: 'tab-page-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-7/tab-page-7.module#TabPage7Module', name: 'TabPage7', segment: 'tab-page-7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-8/tab-page-8.module#TabPage8Module', name: 'TabPage8', segment: 'tab-page-8', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-9/tab-page-9.module#TabPage9Module', name: 'TabPage9', segment: 'tab-page-9', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-1/action-sheet-layout-1.module#ActionSheetLayout1Module', name: 'ActionSheetLayout1', segment: 'action-sheet-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-3/check-box-layout-3.module#CheckBoxLayout3Module', name: 'CheckBoxLayout3', segment: 'check-box-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__services_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["a" /* AngularFirestoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_11__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_service__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_settings__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, splashScreen, statusBar, menu, menuService, modalCtrl) {
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.menuService = menuService;
        this.modalCtrl = modalCtrl;
        this.rootPage = "HomePage";
        this.initializeApp();
        this.pages = menuService.getAllThemes();
        this.leftMenuTitle = menuService.getTitle();
        this.menuService.load(null).subscribe(function (snapshot) {
            _this.params = snapshot;
        });
        if (__WEBPACK_IMPORTED_MODULE_5__services_app_settings__["a" /* AppSettings */].SHOW_START_WIZARD) {
            this.presentProfileModal();
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    };
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create("IntroPage");
        profileModal.present();
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        // navigate to the new page if it is not the current page
        if (page.singlePage) {
            this.menu.open();
            this.nav.push(this.getPageForOpen(page.theme), {
                service: this.getServiceForPage(page.theme),
                page: page,
                componentName: page.theme
            });
        }
        else {
            this.nav.setRoot("ItemsPage", {
                componentName: page.theme
            });
        }
    };
    MyApp.prototype.getPageForOpen = function (value) {
        return null;
    };
    MyApp.prototype.getServiceForPage = function (value) {
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/xoxo/Downloads/prj666-g1/src/app/app.html"*/'<!---Settings Main Header-->\n\n<ion-split-pane when="md">\n\n    <!-- Menu Main Top -->\n\n    <ion-menu [content]="content" *ngIf="params != null">\n\n        <ion-header>\n\n            <div header-background-image padding [ngStyle]="{\'background-image\': \'url(\' + params.background + \')\'}">\n\n                <img [src]="params.image">\n\n                <h2 ion-text header-title>{{params.title}}</h2>\n\n                <p>{{params.description}}</p>\n\n            </div>\n\n        </ion-header>\n\n        <!-- Menu Main List -->\n\n        <ion-content>\n\n            <ion-list no-margin>\n\n                <button menuClose ion-item item-title main-menu no-lines border *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon icon-small item-left>\n\n          <i class="icon {{p.icon}}"></i>\n\n        </ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"/Users/xoxo/Downloads/prj666-g1/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = (function () {
    function MenuService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'menu'; };
        this.getTitle = function () { return 'UIAppTemplate'; };
        this.getAllThemes = function () {
            return [
                { "title": "Parallax", "theme": "parallax", "icon": "icon-format-line-spacing", "listView": false, "component": "", "singlePage": false },
                { "title": "Login", "theme": "login", "icon": "icon-lock-open-outline", "listView": false, "component": "", "singlePage": false },
                { "title": "Register", "theme": "register", "icon": "icon-comment-account", "listView": false, "component": "", "singlePage": false },
                { "title": "Maps", "theme": "maps", "icon": "icon-google-maps", "listView": false, "component": "", "singlePage": false },
            ];
        };
        this.getDataForTheme = function () {
            return {
                "background": _this.getRandomBackground(),
                "image": _this.getProfilePic(),
                //"title": "",
                "description": _this.getUsername(),
            };
        };
        this.getRandomBackground = function () {
            var rand = Math.ceil(Math.random() * 17);
            return "assets/images/images/" + rand + ".jpg";
        };
        this.getUsername = function () {
            return "Username";
        };
        this.getProfilePic = function () {
            return "assets/images/avatar/25.png";
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: {},
                events: _this.getEventsForTheme(item)
            };
        };
    }
    MenuService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('menu')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme());
                observer.complete();
            });
        }
    };
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": false,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
        "authDomain": "meetogether-prj666g1.firebaseapp.com",
        "databaseURL": "https://meetogether-prj666g1.firebaseio.com",
        "projectId": "meetogether-prj666g1",
        "storageBucket": "meetogether-prj666g1.appspot.com",
        "messagingSenderId": "719772453281"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map