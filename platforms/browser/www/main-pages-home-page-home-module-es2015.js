(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-home-page-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/coffee-house.component/coffee-house.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/coffee-house.component/coffee-house.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  coffee-house works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites.component/favorites.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites.component/favorites.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  favorites works!\n</p>\n");

/***/ }),

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/home.page/home.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/home.page/home.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n    <ion-row class=\"row_buttons\">\n        <ion-col class=\"col_buttons animated fadeInLeft fast\">\n            <button (click)=\"viewFavorites()\" class=\"choise_button active\" id=\"favorites\">Избранные</button>\n        </ion-col>\n        <ion-col class=\"col_buttons animated fadeInRight fast\">\n            <button (click)=\"viewCoffeeHouses()\" class=\"choise_button\" id=\"coffee_house\">Кофейни</button>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"animated fadeIn fast\">\n        <ion-slides [options]=\"slideOpts\" #mySlider (ionSlideDidChange)=\"setButton()\">\n            <ion-slide>\n              <app-favorites></app-favorites>\n            </ion-slide>\n            <ion-slide>\n              <app-coffee-house></app-coffee-house>\n            </ion-slide>\n          </ion-slides>\n    </ion-row>\n</ion-content>\n<div class=\"toolbar animated fadeInUp fast\">\n    <div class=\"settings\" id=\"settings\" (click)=\"goUserSettings()\">\n        <img src=\"../../assets/img/home/settings.svg\" alt=\"\" class=\"toolbar_img\">\n    </div>\n    <div class=\"qr_code\" id=\"qr_code\" (click)=\"goQrPage()\">\n        <img src=\"../../assets/img/home/qr-code.svg\" alt=\"\" class=\"toolbar_img\">\n    </div>\n    <div class=\"business\" id=\"business\">\n        <img src=\"../../../assets/img/home/business-coffee.svg\" alt=\"\" (click)=\"goToAdminCoffeeHouses()\" class=\"toolbar_img\">\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/components/coffee-house.component/coffee-house.component.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/coffee-house.component/coffee-house.component.module.ts ***!
  \************************************************************************************/
/*! exports provided: CoffeeHouseComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeHouseComponentModule", function() { return CoffeeHouseComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _coffee_house_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coffee-house.component */ "./src/app/components/coffee-house.component/coffee-house.component.ts");





let CoffeeHouseComponentModule = class CoffeeHouseComponentModule {
};
CoffeeHouseComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        declarations: [_coffee_house_component__WEBPACK_IMPORTED_MODULE_4__["CoffeeHouseComponent"]],
        exports: [_coffee_house_component__WEBPACK_IMPORTED_MODULE_4__["CoffeeHouseComponent"]]
    })
], CoffeeHouseComponentModule);



/***/ }),

/***/ "./src/app/components/coffee-house.component/coffee-house.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/coffee-house.component/coffee-house.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29mZmVlLWhvdXNlLmNvbXBvbmVudC9jb2ZmZWUtaG91c2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/coffee-house.component/coffee-house.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coffee-house.component/coffee-house.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CoffeeHouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoffeeHouseComponent", function() { return CoffeeHouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoffeeHouseComponent = class CoffeeHouseComponent {
    constructor() { }
    ngOnInit() { }
};
CoffeeHouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coffee-house',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coffee-house.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/coffee-house.component/coffee-house.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coffee-house.component.scss */ "./src/app/components/coffee-house.component/coffee-house.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CoffeeHouseComponent);



/***/ }),

/***/ "./src/app/components/favorites.component/favorites.component.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/favorites.component/favorites.component.module.ts ***!
  \******************************************************************************/
/*! exports provided: FavoritesComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponentModule", function() { return FavoritesComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites.component */ "./src/app/components/favorites.component/favorites.component.ts");





let FavoritesComponentModule = class FavoritesComponentModule {
};
FavoritesComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"]],
        exports: [_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"]]
    })
], FavoritesComponentModule);



/***/ }),

/***/ "./src/app/components/favorites.component/favorites.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/favorites.component/favorites.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzLmNvbXBvbmVudC9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/favorites.component/favorites.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/favorites.component/favorites.component.ts ***!
  \***********************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FavoritesComponent = class FavoritesComponent {
    constructor() { }
    ngOnInit() { }
};
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites.component/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.scss */ "./src/app/components/favorites.component/favorites.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FavoritesComponent);



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

/***/ "./src/app/main.pages/home.page/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/main.pages/home.page/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/main.pages/home.page/home.page.ts");
/* harmony import */ var _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header.component/header.component.module */ "./src/app/components/header.component/header.component.module.ts");
/* harmony import */ var _components_coffee_house_component_coffee_house_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/coffee-house.component/coffee-house.component.module */ "./src/app/components/coffee-house.component/coffee-house.component.module.ts");
/* harmony import */ var _components_favorites_component_favorites_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/favorites.component/favorites.component.module */ "./src/app/components/favorites.component/favorites.component.module.ts");










let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"],
            _components_coffee_house_component_coffee_house_component_module__WEBPACK_IMPORTED_MODULE_8__["CoffeeHouseComponentModule"],
            _components_favorites_component_favorites_component_module__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/main.pages/home.page/home.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/main.pages/home.page/home.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n}\n\n.toolbar {\n  width: 100%;\n  height: 70px;\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.qr_code, .settings, .business {\n  border-radius: 50px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#FBDC95), to(#FBA232));\n  background: linear-gradient(to bottom, #FBDC95, #FBA232);\n  box-shadow: 0 1px rgba(255, 255, 255, 0.2), 0 3px 5px rgba(0, 1, 6, 0.5);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.qr_code {\n  width: 70px;\n  height: 70px;\n}\n\n.qr_code > img {\n  width: 60%;\n  height: 60%;\n}\n\n.settings {\n  width: 50px;\n  height: 50px;\n  margin-right: 15px;\n}\n\n.business {\n  width: 50px;\n  height: 50px;\n  margin-left: 15px;\n}\n\n.business > img {\n  width: 55%;\n  height: 55%;\n}\n\n.toolbar_img {\n  width: 60%;\n  height: 60%;\n}\n\n#settings > img {\n  width: 70%;\n  height: 70%;\n}\n\nion-slides {\n  width: 100%;\n}\n\n.row_buttons {\n  margin-top: 40px;\n  height: 50px;\n}\n\n.col_buttons {\n  display: -webkit-box;\n  display: flex;\n}\n\n.col_buttons:first-child {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-left: 10px;\n}\n\n.col_buttons:nth-child(2) {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.choise_button {\n  width: 135px;\n  background: none;\n  font-size: 16pt;\n  font-weight: bold;\n  color: #929292;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n  padding: 4px;\n}\n\n.active {\n  color: #484848;\n  border-bottom: 1px solid #484848;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvbWFpbi5wYWdlcy9ob21lLnBhZ2UvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4ucGFnZXMvaG9tZS5wYWdlL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQWMsT0FBQTtFQUFTLFFBQUE7RUFDdkIsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtFQUNBLHVGQUFBO0VBQUEsd0RBQUE7RUFDQSx3RUFDSTtFQUVKLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDT0o7O0FETEE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRE5BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7QUNVSjs7QURSQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDWUo7O0FEVEE7RUFDSSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxrQkFBQTtBQ2FKOztBRFhBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWkE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9tYWluLnBhZ2VzL2hvbWUucGFnZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50b29sYmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4OyBsZWZ0OiAwOyByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnFyX2NvZGUsIC5zZXR0aW5ncywgLmJ1c2luZXNze1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZCREM5NSwgI0ZCQTIzMik7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgICAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMiksXG4gICAgICAgIDAgM3B4IDVweCByZ2JhKDAsMSw2LC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXJfY29kZXtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgXG59XG4ucXJfY29kZSA+IGltZyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cbi5zZXR0aW5nc3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmJ1c2luZXNze1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5idXNpbmVzcz5pbWd7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBoZWlnaHQ6IDU1JTtcbn1cbi50b29sYmFyX2ltZ3tcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xufVxuI3NldHRpbmdzPmltZ3tcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzAlO1xufVxuaW9uLXNsaWRlc3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5yb3dfYnV0dG9uc3tcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5jb2xfYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxufVxuLmNvbF9idXR0b25zOmZpcnN0LWNoaWxke1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jb2xfYnV0dG9uczpudGgtY2hpbGQoMil7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2hvaXNlX2J1dHRvbntcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM5MjkyOTI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIHBhZGRpbmc6IDRweDtcbn1cbi5hY3RpdmV7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ4NDg7XG4gICAgb3V0bGluZTogbm9uZTtcbn0iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvb2xiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5xcl9jb2RlLCAuc2V0dGluZ3MsIC5idXNpbmVzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGQkRDOTUsICNGQkEyMzIpO1xuICBib3gtc2hhZG93OiAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgM3B4IDVweCByZ2JhKDAsIDEsIDYsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXJfY29kZSB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5xcl9jb2RlID4gaW1nIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG5cbi5zZXR0aW5ncyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmJ1c2luZXNzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5idXNpbmVzcyA+IGltZyB7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogNTUlO1xufVxuXG4udG9vbGJhcl9pbWcge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuI3NldHRpbmdzID4gaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvd19idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29sX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sX2J1dHRvbnM6Zmlyc3QtY2hpbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29sX2J1dHRvbnM6bnRoLWNoaWxkKDIpIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hvaXNlX2J1dHRvbiB7XG4gIHdpZHRoOiAxMzVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0ODQ4O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main.pages/home.page/home.page.ts":
/*!***************************************************!*\
  !*** ./src/app/main.pages/home.page/home.page.ts ***!
  \***************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



const coffehouse_list = [
    { id_coffehouse: '1', logo: '', name_coffehouse: 'Sharikava', is_favorite: '1', count_cups_purchased: '2', count_of_cups: '10' },
    { id_coffehouse: '2', logo: '', name_coffehouse: 'Sho', is_favorite: '0', count_cups_purchased: '0', count_of_cups: '10' },
    { id_coffehouse: '3', logo: '', name_coffehouse: 'Kaviati', is_favorite: '0', count_cups_purchased: '0', count_of_cups: '8' },
    { id_coffehouse: '4', logo: '', name_coffehouse: 'Caffeggio', is_favorite: '1', count_cups_purchased: '10', count_of_cups: '10' },
    { id_coffehouse: '5', logo: '', name_coffehouse: 'Marmelad', is_favorite: '0', count_cups_purchased: '0', count_of_cups: '8' },
    { id_coffehouse: '6', logo: '', name_coffehouse: 'Coffee & Sandwich', is_favorite: '1', count_cups_purchased: '5', count_of_cups: '10' },
];
let HomePage = class HomePage {
    constructor(nav) {
        this.nav = nav;
        this.slideOpts = {};
    }
    setButton() {
        new Promise((resolve, reject) => {
            resolve(this.slides.getActiveIndex());
        }).then(result => this.changeButtonColor(result));
        return true;
    }
    changeButtonColor(buttonNumb) {
        if (buttonNumb === 0) {
            document.getElementById('favorites').classList.value = 'choise_button active';
            document.getElementById('coffee_house').classList.value = 'choise_button';
        }
        if (buttonNumb === 1) {
            document.getElementById('coffee_house').classList.value = 'choise_button active';
            document.getElementById('favorites').classList.value = 'choise_button';
        }
    }
    viewFavorites() {
        this.slides.slideTo(0, 600);
        this.changeButtonColor(0);
        return true;
    }
    viewCoffeeHouses() {
        this.slides.slideTo(1, 600);
        this.changeButtonColor(1);
        return true;
    }
    goQrPage() {
        this.nav.navigateRoot(['/qr']);
    }
    goUserSettings() {
        this.nav.navigateRoot(['/user-settings']);
    }
    goToAdminCoffeeHouses() {
        this.nav.navigateRoot(['/admin-coffee-houses']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], HomePage.prototype, "slides", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/home.page/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/main.pages/home.page/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=main-pages-home-page-home-module-es2015.js.map