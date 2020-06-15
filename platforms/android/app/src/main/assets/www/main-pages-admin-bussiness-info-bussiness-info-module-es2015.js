(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-admin-bussiness-info-bussiness-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header.component/header.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header.component/header.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"animated fadeInDown fast\">\n  <ng-container *ngIf=\"this.buttonIsActive\">\n    <div (click)=\"goBack()\" class=\"backButton animated fadeInLeft fast\"></div>\n  </ng-container>\n  <span class=\"TapWord\">Tap&nbsp;</span><span class=\"TakeWord\">& Take</span>\n</ion-header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/bussiness-info/bussiness-info.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/bussiness-info/bussiness-info.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n  <section class=\"coffeeHouseLogo animated fadeInDown fast\">\n    <ion-row class=\"logoRow animated fadeIn fast\">\n      <!--Вставить src динамичное взятое из сервера-->\n      <img src=\"../../../../assets/img/stub/stub_logo.png\" alt=\"\" class=\"logo\">\n    </ion-row>\n    <ion-row class=\"titleRow\">\n       <!--Вставить название из сервера-->\n      <h3 class=\"title\">ShariKava</h3>\n    </ion-row>\n  </section>\n  <section class=\"coffeeHouseInfo\">\n    <ion-row>\n      <h2 class=\"titleInfo animated fadeIn fast\">Информация</h2>\n    </ion-row>\n    <ion-row class=\"descriptionRow animated fadeInLeft fast\">\n      <ion-col class=\"description\" size=\"8\">К-ство клиентов</ion-col>\n      <ion-col size=\"3\" class=\"count\">0</ion-col>\n    </ion-row>\n    <!-- <ion-row class=\"descriptionRow animated fadeInRight fast\">\n      <ion-col class=\"description\" size=\"8\">Совершено покупок</ion-col>\n      <ion-col size=\"3\" class=\"count\">0</ion-col>\n    </ion-row>\n    <ion-row class=\"descriptionRow animated fadeInLeft fast\">\n      <ion-col class=\"description\" size=\"8\">Бесплатных напитков выдано</ion-col>\n      <ion-col size=\"3\" class=\"count\">0</ion-col>\n    </ion-row> -->\n  </section>\n</ion-content>\n<div class=\"toolbar animated fadeInUp fast\" id=\"toolbar\">\n  <div class=\"settings\" id=\"settings\" (click)=\"goAdminSettings()\">\n      <img src=\"../../assets/img/home/settings.svg\" alt=\"\" class=\"toolbar_img\">\n  </div>\n  <div class=\"qr_code\" id=\"qr_code\" (click)=\"goScanQrPage()\">\n      <img src=\"../../../../assets/img/admin_coffeeHouses/scan-qr-code.svg\" alt=\"\" class=\"toolbar_img\">\n  </div>\n  <div class=\"home\" id=\"home\">\n      <img src=\"../../../../assets/img/admin_coffeeHouses/login.svg\" alt=\"\" (click)=\"goToHomePage()\" class=\"toolbar_img\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/components/header.component/header.component.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/header.component/header.component.module.ts ***!
  \************************************************************************/
/*! exports provided: HeaderComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentModule", function() { return HeaderComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header.component/header.component.ts");





let HeaderComponentModule = class HeaderComponentModule {
};
HeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]]
    })
], HeaderComponentModule);



/***/ }),

/***/ "./src/app/components/header.component/header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/header.component/header.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  height: 10vh;\n  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);\n  border-bottom-right-radius: 42px;\n  border-bottom-left-radius: 42px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --ion-font-family: \"FredokaOne-Regular\"!important;\n  font-family: \"FredokaOne-Regular\" !important;\n  font-size: 20pt;\n}\n\nion-header:after {\n  display: none;\n}\n\n.TapWord {\n  color: #FAC35E;\n}\n\n.TakeWord, .Login {\n  color: #484848;\n}\n\n.backButton {\n  position: absolute;\n  left: 10px;\n  display: -webkit-box;\n  display: flex;\n  background-image: url('arrow.svg');\n  background-repeat: no-repeat;\n  background-size: 60%;\n  background-position: center;\n  width: 50px;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFHQSxnREFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm94LXNoYWRvdzogICAgICAgICAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICAnRnJlZG9rYU9uZS1SZWd1bGFyJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICAnRnJlZG9rYU9uZS1SZWd1bGFyJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbn1cbmlvbi1oZWFkZXI6YWZ0ZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5UYXBXb3JkIHtcbiAgICBjb2xvcjogI0ZBQzM1RTtcbn1cbi5UYWtlV29yZCwgLkxvZ2lue1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuLmJhY2tCdXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIvYXJyb3cuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA3MCU7XG59IiwiaW9uLWhlYWRlciB7XG4gIGhlaWdodDogMTB2aDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiRnJlZG9rYU9uZS1SZWd1bGFyXCIhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJGcmVkb2thT25lLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbmlvbi1oZWFkZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uVGFwV29yZCB7XG4gIGNvbG9yOiAjRkFDMzVFO1xufVxuXG4uVGFrZVdvcmQsIC5Mb2dpbiB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4uYmFja0J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9yZWdpc3Rlci9hcnJvdy5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDcwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header.component/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/header.component/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.noBackButtonRoute = [
            'forgot-password',
            'qr',
            'password-reset',
            'user-settings',
            'admin-coffee-houses',
            'admin-settings',
            'bussiness-info',
        ];
        this.buttonIsActive = false;
    }
    ngOnInit() {
        if (this.noBackButtonRoute.includes(this.router.url.slice(1))) {
            this.buttonIsActive = true;
        }
    }
    goBack() {
        this.navCtrl.back();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header.component/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header.component/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/main.pages/admin/bussiness-info/bussiness-info-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: BussinessInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessInfoPageRoutingModule", function() { return BussinessInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bussiness_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bussiness-info.page */ "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts");




const routes = [
    {
        path: '',
        component: _bussiness_info_page__WEBPACK_IMPORTED_MODULE_3__["BussinessInfoPage"]
    }
];
let BussinessInfoPageRoutingModule = class BussinessInfoPageRoutingModule {
};
BussinessInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BussinessInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/main.pages/admin/bussiness-info/bussiness-info.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info.module.ts ***!
  \**************************************************************************/
/*! exports provided: BussinessInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessInfoPageModule", function() { return BussinessInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bussiness_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bussiness-info-routing.module */ "./src/app/main.pages/admin/bussiness-info/bussiness-info-routing.module.ts");
/* harmony import */ var _bussiness_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bussiness-info.page */ "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts");
/* harmony import */ var src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header.component/header.component.module */ "./src/app/components/header.component/header.component.module.ts");








let BussinessInfoPageModule = class BussinessInfoPageModule {
};
BussinessInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bussiness_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["BussinessInfoPageRoutingModule"],
            src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"],
        ],
        declarations: [_bussiness_info_page__WEBPACK_IMPORTED_MODULE_6__["BussinessInfoPage"]]
    })
], BussinessInfoPageModule);



/***/ }),

/***/ "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".coffeeHouseLogo {\n  width: 100%;\n  height: 40vh;\n  margin-top: -20px;\n  border-bottom-left-radius: 42px;\n  border-bottom-right-radius: 42px;\n  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);\n  position: relative;\n}\n\n.logoRow {\n  height: 20vh;\n  width: 100%;\n  top: 60px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n}\n\n.logo {\n  height: 100%;\n  display: block;\n  border-radius: 50%;\n}\n\n.titleRow {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 100%;\n  bottom: 7%;\n}\n\n.title {\n  --ion-font-family: \"FredokaOne-Regular\"!important;\n  font-family: \"FredokaOne-Regular\" !important;\n  font-size: 3vh;\n  display: block;\n}\n\n.coffeeHouseInfo {\n  margin-top: 1vh;\n}\n\n.titleInfo {\n  margin-left: 15px;\n  font-size: 3vh;\n  color: #484848;\n}\n\n.descriptionRow {\n  margin-top: 20px;\n}\n\n.descriptionRow::after {\n  content: \"\";\n  display: block;\n  width: 85%;\n  border: 1px solid #707070;\n  margin: 0 auto;\n  margin-top: 1vh;\n}\n\n.description {\n  margin-left: 15px;\n  font-size: 2vh;\n}\n\n.count {\n  text-align: end;\n}\n\n.toolbar {\n  width: 100%;\n  height: 70px;\n  position: absolute;\n  bottom: 2vh;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.qr_code, .settings, .home {\n  border-radius: 50px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#FBDC95), to(#FBA232));\n  background: linear-gradient(to bottom, #FBDC95, #FBA232);\n  box-shadow: 0 1px rgba(255, 255, 255, 0.2), 0 3px 5px rgba(0, 1, 6, 0.5);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.qr_code {\n  width: 10vh;\n  height: 10vh;\n}\n\n.qr_code > img {\n  width: 60%;\n  height: 60%;\n}\n\n.settings {\n  width: 7vh;\n  height: 7vh;\n  margin-right: 15px;\n}\n\n.home {\n  width: 7vh;\n  height: 7vh;\n  margin-left: 15px;\n}\n\n.home > img {\n  width: 55%;\n  height: 55%;\n  margin-left: 5px;\n}\n\n.toolbar_img {\n  width: 60%;\n  height: 60%;\n}\n\n#settings > img {\n  width: 70%;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvbWFpbi5wYWdlcy9hZG1pbi9idXNzaW5lc3MtaW5mby9idXNzaW5lc3MtaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4ucGFnZXMvYWRtaW4vYnVzc2luZXNzLWluZm8vYnVzc2luZXNzLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFHQSxnREFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNJSjs7QURGQTtFQUNJLGlEQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBYSxPQUFBO0VBQVMsUUFBQTtFQUN0QixZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0FDY0o7O0FEWkE7RUFDSSxtQkFBQTtFQUNBLHVGQUFBO0VBQUEsd0RBQUE7RUFDQSx3RUFDSTtFQUVKLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDYUo7O0FEWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFhBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNjSjs7QURaQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNlSjs7QURiQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNnQko7O0FEZEE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDaUJKOztBRGZBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNrQko7O0FEaEJBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNtQkoiLCJmaWxlIjoic3JjL2FwcC9tYWluLnBhZ2VzL2FkbWluL2J1c3NpbmVzcy1pbmZvL2J1c3NpbmVzcy1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2ZmZWVIb3VzZUxvZ28ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MnB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dvUm93IHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubG9nbyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi50aXRsZVJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDclO1xufVxuLnRpdGxlIHtcbiAgICAtLWlvbi1mb250LWZhbWlseTogICdGcmVkb2thT25lLVJlZ3VsYXInIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogICdGcmVkb2thT25lLVJlZ3VsYXInICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAzdmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY29mZmVlSG91c2VJbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAxdmg7XG59XG4udGl0bGVJbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmb250LXNpemU6IDN2aDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cbi5kZXNjcmlwdGlvblJvdyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5kZXNjcmlwdGlvblJvdzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDF2aDtcbn1cbi5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAydmg7XG59XG4uY291bnQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cbi50b29sYmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAydmg7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuLnFyX2NvZGUsIC5zZXR0aW5ncywgLmhvbWV7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgICAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4yKSxcbiAgICAgICAgMCAzcHggNXB4IHJnYmEoMCwxLDYsLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xcl9jb2Rle1xuICAgIHdpZHRoOiAxMHZoO1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBcbn1cbi5xcl9jb2RlID4gaW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xufVxuLnNldHRpbmdze1xuICAgIHdpZHRoOiA3dmg7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmhvbWV7XG4gICAgd2lkdGg6IDd2aDtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5ob21lPmltZ3tcbiAgICB3aWR0aDogNTUlO1xuICAgIGhlaWdodDogNTUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4udG9vbGJhcl9pbWd7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cbiNzZXR0aW5ncz5pbWd7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbn0iLCIuY29mZmVlSG91c2VMb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nb1JvdyB7XG4gIGhlaWdodDogMjB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50aXRsZVJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDclO1xufVxuXG4udGl0bGUge1xuICAtLWlvbi1mb250LWZhbWlseTogXCJGcmVkb2thT25lLVJlZ3VsYXJcIiFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2FPbmUtUmVndWxhclwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvZmZlZUhvdXNlSW5mbyB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLnRpdGxlSW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDN2aDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5kZXNjcmlwdGlvblJvdyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5kZXNjcmlwdGlvblJvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMnZoO1xufVxuXG4uY291bnQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi50b29sYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDJ2aDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuLnFyX2NvZGUsIC5zZXR0aW5ncywgLmhvbWUge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgYm94LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDNweCA1cHggcmdiYSgwLCAxLCA2LCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnFyX2NvZGUge1xuICB3aWR0aDogMTB2aDtcbiAgaGVpZ2h0OiAxMHZoO1xufVxuXG4ucXJfY29kZSA+IGltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uc2V0dGluZ3Mge1xuICB3aWR0aDogN3ZoO1xuICBoZWlnaHQ6IDd2aDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaG9tZSB7XG4gIHdpZHRoOiA3dmg7XG4gIGhlaWdodDogN3ZoO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmhvbWUgPiBpbWcge1xuICB3aWR0aDogNTUlO1xuICBoZWlnaHQ6IDU1JTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRvb2xiYXJfaW1nIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbiNzZXR0aW5ncyA+IGltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts ***!
  \************************************************************************/
/*! exports provided: BussinessInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessInfoPage", function() { return BussinessInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");






let BussinessInfoPage = class BussinessInfoPage {
    constructor(nav, barcodeScaner, router, route, http, loading) {
        this.nav = nav;
        this.barcodeScaner = barcodeScaner;
        this.router = router;
        this.route = route;
        this.http = http;
        this.loading = loading;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.route.queryParamMap.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.coffehouseId = this.router.getCurrentNavigation().extras.state.coffehouseId;
                }
            });
            console.log(this.coffehouseId);
            this.getCoffehouse();
        });
    }
    goAdminSettings() {
        alert("__method: goAdminSettings()");
    }
    getCoffehouse() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.http.get('https://sc.grekagreka25.had.su/coffeehouse/getOne/', { id: this.coffehouseId }, {}).then(answer => {
                console.log("Request to accepted....");
                console.log("Data return....");
                let parsedData = JSON.parse(answer.data);
                console.log(parsedData);
            });
        });
    }
    goScanQrPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.barcodeScaner.scan().then(barcodeData => {
                this.scannedCode = barcodeData;
            });
            this.id_user = this.getIdUserFromCode();
            console.log(this.id_user);
            const loading = yield this.loading.create({
                cssClass: 'spinerColor',
                message: "Зачисление напитка...",
                spinner: "lines",
            });
            loading.present();
            this.requestToSetClients();
            setTimeout(() => {
                loading.dismiss();
            }, 600);
        });
    }
    requestToSetClients() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.http.get('https://sc.grekagreka25.had.su/coffeehouse/qrCode/', { userId: this.id_user, coffeehouseId: this.coffehouseId }, {})
                .then(answer => {
                console.log("Request to accepted....");
                console.log("Data return....");
                let parsedData = JSON.parse(answer.data);
                if (parsedData.status == 'error') {
                    console.log('error');
                }
                else {
                    console.log('success');
                }
            });
        });
    }
    getIdUserFromCode() {
        return this.scannedCode.text;
    }
    goToHomePage() {
        this.nav.navigateRoot('/home');
    }
};
BussinessInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
BussinessInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bussiness-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bussiness-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/bussiness-info/bussiness-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bussiness-info.page.scss */ "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], BussinessInfoPage);



/***/ })

}]);
//# sourceMappingURL=main-pages-admin-bussiness-info-bussiness-info-module-es2015.js.map