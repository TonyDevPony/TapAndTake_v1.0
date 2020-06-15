(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-home-page-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/coffee-house.component/coffee-house.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/coffee-house.component/coffee-house.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section_coffee_houses\" (ionScroll)=\"scrol()\">\n    <ng-container *ngFor=\"let houses of coffeeHouses\">\n      \n      <ion-row class=\"card_coffeehouses_main animated fadeInLeft fast\">\n        <ion-col class=\"card_coffeehouses_main_logo_wraper\" size=\"4\">\n          <div class=\"card_coffeehouses_main_logo\"></div>\n        </ion-col>\n        <ion-col class=\"card_body\">\n          <div class=\"name_coffehouse\">{{ houses.name }}</div>\n          <div class=\"coffee_cups\">\n            <ng-container *ngFor=\"let cup of countCups\">\n              <div class=\"cupps empty_cup\"></div>\n              <!-- <ng-container *ngIf=\"cup.is_full\">\n                <div class=\"cupps full_cup\"></div>\n              </ng-container>\n              <ng-container *ngIf=\"!cup.is_full\">\n                <div class=\"cupps empty_cup\"></div>\n              </ng-container> -->\n            </ng-container>\n          </div>\n        </ion-col>\n        <ion-col size=\"3\" class=\"result_cup_wrapper\">\n          <ng-container>\n            <div class=\"relsult_cup empty_cup\"></div>\n          </ng-container>\n        </ion-col>\n      </ion-row>\n      \n    </ng-container>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites.component/favorites.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites.component/favorites.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

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
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content scrollY=\"false\">\n    <ion-row class=\"row_buttons\">\n        <ion-col class=\"col_buttons animated fadeInLeft fast\">\n            <button (click)=\"viewCoffeeHouses()\" class=\"choise_button active\" id=\"favorites\">Кофейни</button>\n        </ion-col>\n        <ion-col class=\"col_buttons animated fadeInRight fast\">\n            <button (click)=\"viewFavorites()\" class=\"choise_button\" id=\"coffee_house\">Избранные</button>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"animated fadeIn fast\">\n        <ion-slides [options]=\"slideOpts\" #mySlider (ionSlideDidChange)=\"setButton()\">\n            <ion-slide>\n                <app-coffee-house></app-coffee-house>\n            </ion-slide>\n            <ion-slide>\n                <app-favorites></app-favorites>\n            </ion-slide>\n          </ion-slides>\n    </ion-row>\n</ion-content>\n<div class=\"toolbar animated fadeInUp fast\" id=\"toolbar\">\n    <div class=\"settings\" id=\"settings\" (click)=\"goUserSettings()\">\n        <img src=\"../../assets/img/home/settings.svg\" alt=\"\" class=\"toolbar_img\">\n    </div>\n    <div class=\"qr_code\" id=\"qr_code\" (click)=\"goQrPage()\">\n        <img src=\"../../assets/img/home/qr-code.svg\" alt=\"\" class=\"toolbar_img\">\n    </div>\n    <div class=\"business\" id=\"business\">\n        <img src=\"../../../assets/img/home/business-coffee.svg\" alt=\"\" (click)=\"goToAdminCoffeeHouses()\" class=\"toolbar_img\">\n    </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.section_coffee_houses {\n  width: 100vw;\n  height: 80vh;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n  overflow: scroll;\n  scroll-behavior: smooth;\n}\n.card_coffeehouses_main {\n  width: 90%;\n  height: 120px;\n  margin-top: 15px;\n  border-radius: 42px;\n  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.16);\n}\n.card_coffeehouses_main:last-child {\n  margin-bottom: 120px;\n}\n.card_coffeehouses_main_logo_wraper {\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.card_coffeehouses_main_logo {\n  border-radius: 50%;\n  width: 70%;\n  height: 70%;\n  background-image: url('stub_logo.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.name_coffehouse {\n  padding: 10px 0 0 0;\n  font-size: 17pt;\n  font-weight: bold;\n}\n.card_body {\n  padding: 0;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  box-shadow: 12px 0 0 -10px #707070;\n}\n.coffee_cups {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  position: absolute;\n  -webkit-box-pack: center;\n          justify-content: center;\n  bottom: 20px;\n}\n.cupps {\n  width: 18%;\n  height: 25px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 70%;\n}\n.full_cup {\n  background-image: url('cups_full.svg');\n}\n.empty_cup {\n  background-image: url('empty_cups.svg');\n}\n.result_cup_wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.relsult_cup {\n  width: 90%;\n  height: 90%;\n  background-repeat: no-repeat;\n  background-position: left;\n  background-size: 90%;\n}\n.relsult_cup::after {\n  content: \"Бесплатно\";\n  font-size: 2.7vw;\n  display: block;\n  position: absolute;\n  bottom: 10px;\n  left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2ZmZWUtaG91c2UuY29tcG9uZW50L2NvZmZlZS1ob3VzZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvY29tcG9uZW50cy9jb2ZmZWUtaG91c2UuY29tcG9uZW50L2NvZmZlZS1ob3VzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FERUo7QUNBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUdBLGdEQUFBO0FER0o7QUNEQTtFQUNJLG9CQUFBO0FESUo7QUNGQTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBREtKO0FDSEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FETUo7QUNKQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FET0o7QUNMQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQ0FBQTtBRFFKO0FDTkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QURTSjtBQ1BBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QURVSjtBQ1JBO0VBQ0ksc0NBQUE7QURXSjtBQ1RBO0VBQ0ksdUNBQUE7QURZSjtBQ1ZBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QURhSjtBQ1hBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QURjSjtBQ1pBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUVELFlBQUE7RUFBYyxVQUFBO0FEY2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2ZmZWUtaG91c2UuY29tcG9uZW50L2NvZmZlZS1ob3VzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zZWN0aW9uX2NvZmZlZV9ob3VzZXMge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogODB2aDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5jYXJkX2NvZmZlZWhvdXNlc19tYWluIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNDJweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG5cbi5jYXJkX2NvZmZlZWhvdXNlc19tYWluOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbn1cblxuLmNhcmRfY29mZmVlaG91c2VzX21haW5fbG9nb193cmFwZXIge1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmRfY29mZmVlaG91c2VzX21haW5fbG9nbyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvc3R1Yi9zdHViX2xvZ28ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLm5hbWVfY29mZmVob3VzZSB7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTdwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkX2JvZHkge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAxMnB4IDAgMCAtMTBweCAjNzA3MDcwO1xufVxuXG4uY29mZmVlX2N1cHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3R0b206IDIwcHg7XG59XG5cbi5jdXBwcyB7XG4gIHdpZHRoOiAxOCU7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcbn1cblxuLmZ1bGxfY3VwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9jYXJkcy9jdXBzL2Z1bGwvY3Vwc19mdWxsLnN2Z1wiKTtcbn1cblxuLmVtcHR5X2N1cCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY2FyZHMvY3Vwcy9lbXB0eS9lbXB0eV9jdXBzLnN2Z1wiKTtcbn1cblxuLnJlc3VsdF9jdXBfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVsc3VsdF9jdXAge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG59XG5cbi5yZWxzdWx0X2N1cDo6YWZ0ZXIge1xuICBjb250ZW50OiBcItCR0LXRgdC/0LvQsNGC0L3QvlwiO1xuICBmb250LXNpemU6IDIuN3Z3O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDE1cHg7XG59IiwiLnNlY3Rpb25fY29mZmVlX2hvdXNlcyB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogODB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG4uY2FyZF9jb2ZmZWVob3VzZXNfbWFpbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDJweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDBweCA2cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cbi5jYXJkX2NvZmZlZWhvdXNlc19tYWluOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xufVxuLmNhcmRfY29mZmVlaG91c2VzX21haW5fbG9nb193cmFwZXJ7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZF9jb2ZmZWVob3VzZXNfbWFpbl9sb2dvIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvc3R1Yi9zdHViX2xvZ28ucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5uYW1lX2NvZmZlaG91c2Uge1xuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gICAgZm9udC1zaXplOiAxN3B0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmRfYm9keXtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6ICAxMnB4IDAgMCAtMTBweCAjNzA3MDcwO1xufVxuLmNvZmZlZV9jdXBzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm90dG9tOiAyMHB4O1xufVxuLmN1cHBze1xuICAgIHdpZHRoOiAxOCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzAlO1xufVxuLmZ1bGxfY3VwIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY2FyZHMvY3Vwcy9mdWxsL2N1cHNfZnVsbC5zdmcnKTtcbn1cbi5lbXB0eV9jdXAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jYXJkcy9jdXBzL2VtcHR5L2VtcHR5X2N1cHMuc3ZnJyk7XG59XG4ucmVzdWx0X2N1cF93cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yZWxzdWx0X2N1cCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG59XG4ucmVsc3VsdF9jdXA6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcItCR0LXRgdC/0LvQsNGC0L3QvlwiO1xuICAgIGZvbnQtc2l6ZTogMi43dnc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIC8vIHJpZ2h0OiAtMTNweDsgdG9wOiA1NXB4O1xuICAgYm90dG9tOiAxMHB4OyBsZWZ0OiAxNXB4O1xufVxuIl19 */");

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
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");



let CoffeeHouseComponent = class CoffeeHouseComponent {
    constructor(http) {
        this.http = http;
        this.path_to_empty_cups = "background-image: url('../../../assets/img/cards/cups/full/empty_cups.svg')";
        this.path_to_full_cups = "background-image: url('../../../assets/img/cards/cups/full/cups_full.svg')";
        // Общая инфа о кофейне
        // coffeeHouses = [
        //   {
        //     id_coffeehouse: 1, 
        //     promotional_cups: 10,
        //   },
        //   {
        //     id_coffeehouse: 2, 
        //     promotional_cups: 7,
        //   },
        //   {
        //     id_coffeehouse: 3, 
        //     promotional_cups: 8,
        //   },
        //   {
        //     id_coffeehouse: 4, 
        //     promotional_cups: 10,
        //   },
        //   {
        //     id_coffeehouse: 5, 
        //     promotional_cups: 7,
        //   },
        //   {
        //     id_coffeehouse: 6, 
        //     promotional_cups: 8,
        //   },
        //   {
        //     id_coffeehouse: 7, 
        //     promotional_cups: 10,
        //   },
        //   {
        //     id_coffeehouse: 8, 
        //     promotional_cups: 7,
        //   },
        //   {
        //     id_coffeehouse: 9, 
        //     promotional_cups: 8,
        //   },
        //   {
        //     id_coffeehouse: 10, 
        //     promotional_cups: 10,
        //   },
        // ];
        // // Инфа о кофейне с привязкой к юзеру
        // coffeeCups = [
        //   {
        //     id_coffeehouse: 1,
        //     cups_bought: 6,
        //   },
        //   {
        //     id_coffeehouse: 7,
        //     cups_bought: 10,
        //   },    
        //   {
        //     id_coffeehouse: 8,
        //     cups_bought: 3,
        //   },
        //   {
        //     id_coffeehouse: 9,
        //     cups_bought: 4,
        //   },
        //   {
        //     id_coffeehouse: 10,
        //     cups_bought: 6,
        //   },
        // ];
        // coffeeCupsTest = [
        //   {is_full: true},
        //   {is_full: true},
        //   {is_full: true},
        //   {is_full: true},
        //   {is_full: true},
        //   {is_full: false},
        //   {is_full: false},
        //   {is_full: false},
        //   {is_full: false},
        //   {is_full: false},
        // ]
        this.coffeeHouses = [];
        this.coffeeHousesTmp = [];
        this.coffeeCups = [];
        this.countCups = [];
    }
    ngOnInit() {
        let toolbar = document.querySelector('#toolbar');
        let isScrolling;
        document.querySelector('.section_coffee_houses')
            .addEventListener('scroll', function (e) {
            /*
              Отлавливание остановки скролинга
              Путем создания наперед таймаута
              И с последуйщим срабатыванием ивента 'scroll'
              отменяем текущий таймаут и устанавливаем следуйщий
              если таймаут не удалился, значит скрол остановился
            */
            toolbar.style.display = 'none';
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(function () {
                toolbar.style.display = 'flex';
            }, 66);
        });
        this.getCoffeeHousess().then(() => {
            console.log(this.coffeeHouses);
            this.setCoffeehousesCups();
        });
    }
    getCoffeeHousess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.http.post('https://sc.grekagreka25.had.su/coffeehouse/getAll', {}, {}).then(answer => {
                console.log('Answer from server...');
                console.log("Answer params: ");
                let dataParse = JSON.parse(answer.data);
                for (let i = 0; i < dataParse.length; i++) {
                    this.coffeeHouses[i] = dataParse[i];
                }
            }).catch(err => { console.log('Error: ' + err); });
        });
    }
    setCoffeehousesCups() {
        this.countCups.length = 10;
        // for(let i = 0; i < this.coffeeHouses.length; i++){
        //   this.countCups.length = +this.coffeeHouses[i]['promoCups'];
        //   for(let j = 0; j < this.countCups.length; j++){
        //     this.countCups[i] = 1;
        //   }
        //   this.coffeeHousesTmp[i] = { coffehousesId: this.coffeeHouses[i]['coffehousesId'], 
        //                               name: this.coffeeHouses[i]['name'],
        //                               description: this.coffeeHouses[i]['description'],
        //                               creatorId: this.coffeeHouses[i]['creatorId'],
        //                               pathLogo: this.coffeeHouses[i]['pathLogo'],
        //                               clients: this.coffeeHouses[i]['clients'],
        //                               promoCups: this.countCups,
        //                               socialNetworks: this.coffeeHouses[i]['socialNetworks']
        //                             }
        //   this.countCups = [];
        // }
        // console.log(this.coffeeHousesTmp);
    }
};
CoffeeHouseComponent.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] }
];
CoffeeHouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coffee-house',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coffee-house.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/coffee-house.component/coffee-house.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coffee-house.component.scss */ "./src/app/components/coffee-house.component/coffee-house.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]])
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
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service/auth.service */ "./src/app/services/auth.service/auth.service.ts");




let FavoritesComponent = class FavoritesComponent {
    constructor(http, Auth) {
        this.http = http;
        this.Auth = Auth;
        this.coffeeHouses = [];
        this.coffeeCups = [];
        this.countCups = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let toolbar = <HTMLElement>document.querySelector('#toolbar');
            // let isScrolling;
            // document.querySelector('.section_coffee_houses')
            //         .addEventListener('scroll', function (e) {
            //             /* 
            //               Отлавливание остановки скролинга
            //               Путем создания наперед таймаута
            //               И с последуйщим срабатыванием ивента 'scroll'
            //               отменяем текущий таймаут и устанавливаем следуйщий
            //               если таймаут не удалился, значит скрол остановился
            //             */
            //            toolbar.style.display = 'none';
            //             window.clearTimeout(isScrolling);
            //             isScrolling = setTimeout( function() {
            //               toolbar.style.display = 'flex';
            //             }, 66);
            //         });
            // this.getCoffeeHousess();
            // setTimeout(() => {
            //   this.user = this.Auth.getAthConf();
            //   this.creatorId = this.user.user_id;
            //   this.favoriteCoffehouse = this.getCoffeeHousess();
            // }, 1600);
            // this.creatorId = this.user.user_id;
        });
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites.component/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../coffee-house.component/coffee-house.component.scss */ "./src/app/components/coffee-house.component/coffee-house.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"], src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n  overflow: hidden;\n}\n\n.toolbar {\n  width: 100%;\n  height: 70px;\n  position: absolute;\n  bottom: 20px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.qr_code, .settings, .business {\n  border-radius: 50px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#FBDC95), to(#FBA232));\n  background: linear-gradient(to bottom, #FBDC95, #FBA232);\n  box-shadow: 0 1px rgba(255, 255, 255, 0.2), 0 3px 5px rgba(0, 1, 6, 0.5);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.qr_code {\n  width: 10vh;\n  height: 10vh;\n}\n\n.qr_code > img {\n  width: 60%;\n  height: 60%;\n}\n\n.settings {\n  width: 7vh;\n  height: 7vh;\n  margin-right: 15px;\n}\n\n.business {\n  width: 7vh;\n  height: 7vh;\n  margin-left: 15px;\n}\n\n.business > img {\n  width: 55%;\n  height: 55%;\n}\n\n.toolbar_img {\n  width: 60%;\n  height: 60%;\n}\n\n#settings > img {\n  width: 70%;\n  height: 70%;\n}\n\nion-slides {\n  width: 100%;\n}\n\n.row_buttons {\n  margin-top: 40px;\n  height: 50px;\n}\n\n.col_buttons {\n  display: -webkit-box;\n  display: flex;\n}\n\n.col_buttons:first-child {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-left: 10px;\n}\n\n.col_buttons:nth-child(2) {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.choise_button {\n  width: 135px;\n  background: none;\n  font-size: 16pt;\n  font-weight: bold;\n  color: #929292;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n  padding: 4px;\n  outline: none;\n}\n\n.active {\n  color: #484848;\n  border-bottom: 1px solid #484848;\n  outline: none;\n}\n\n.hidden_toolbar {\n  bottom: -100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvbWFpbi5wYWdlcy9ob21lLnBhZ2UvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4ucGFnZXMvaG9tZS5wYWdlL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFBYyxPQUFBO0VBQVMsUUFBQTtFQUN2QixZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtFQUNBLHVGQUFBO0VBQUEsd0RBQUE7RUFDQSx3RUFDSTtFQUVKLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDT0o7O0FETEE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRE5BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7QUNVSjs7QURSQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDWUo7O0FEVEE7RUFDSSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWQTtFQUNJLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxrQkFBQTtBQ2FKOztBRFhBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2NKOztBRFpBO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQ2VKOztBRGJBO0VBQ0ksY0FBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL21haW4ucGFnZXMvaG9tZS5wYWdlL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4udG9vbGJhcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDsgbGVmdDogMDsgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG4ucXJfY29kZSwgLnNldHRpbmdzLCAuYnVzaW5lc3N7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgICAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4yKSxcbiAgICAgICAgMCAzcHggNXB4IHJnYmEoMCwxLDYsLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xcl9jb2Rle1xuICAgIHdpZHRoOiAxMHZoO1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBcbn1cbi5xcl9jb2RlID4gaW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xufVxuLnNldHRpbmdze1xuICAgIHdpZHRoOiA3dmg7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmJ1c2luZXNze1xuICAgIHdpZHRoOiA3dmg7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uYnVzaW5lc3M+aW1ne1xuICAgIHdpZHRoOiA1NSU7XG4gICAgaGVpZ2h0OiA1NSU7XG59XG4udG9vbGJhcl9pbWd7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cbiNzZXR0aW5ncz5pbWd7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbn1cbmlvbi1zbGlkZXN7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucm93X2J1dHRvbnN7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4uY29sX2J1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbn1cbi5jb2xfYnV0dG9uczpmaXJzdC1jaGlsZHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY29sX2J1dHRvbnM6bnRoLWNoaWxkKDIpe1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNob2lzZV9idXR0b257XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjOTI5MjkyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5hY3RpdmV7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ4NDg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5oaWRkZW5fdG9vbGJhciB7XG4gICAgYm90dG9tOiAtMTAwcHg7XG59XG5cbiIsImlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9vbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xufVxuXG4ucXJfY29kZSwgLnNldHRpbmdzLCAuYnVzaW5lc3Mge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgYm94LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDNweCA1cHggcmdiYSgwLCAxLCA2LCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnFyX2NvZGUge1xuICB3aWR0aDogMTB2aDtcbiAgaGVpZ2h0OiAxMHZoO1xufVxuXG4ucXJfY29kZSA+IGltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uc2V0dGluZ3Mge1xuICB3aWR0aDogN3ZoO1xuICBoZWlnaHQ6IDd2aDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYnVzaW5lc3Mge1xuICB3aWR0aDogN3ZoO1xuICBoZWlnaHQ6IDd2aDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5idXNpbmVzcyA+IGltZyB7XG4gIHdpZHRoOiA1NSU7XG4gIGhlaWdodDogNTUlO1xufVxuXG4udG9vbGJhcl9pbWcge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbn1cblxuI3NldHRpbmdzID4gaW1nIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvd19idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY29sX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sX2J1dHRvbnM6Zmlyc3QtY2hpbGQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY29sX2J1dHRvbnM6bnRoLWNoaWxkKDIpIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hvaXNlX2J1dHRvbiB7XG4gIHdpZHRoOiAxMzVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgcGFkZGluZzogNHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0ODQ4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaGlkZGVuX3Rvb2xiYXIge1xuICBib3R0b206IC0xMDBweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service/auth.service */ "./src/app/services/auth.service/auth.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/fileStorageForUser.service/file-storage-for-user.service */ "./src/app/services/fileStorageForUser.service/file-storage-for-user.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/network.connection.service/network-connection.service */ "./src/app/services/network.connection.service/network-connection.service.ts");









;
let HomePage = class HomePage {
    constructor(nav, route, authService, http, loadingController, storageService, toastController, network, networkService, alertController) {
        this.nav = nav;
        this.route = route;
        this.authService = authService;
        this.http = http;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.toastController = toastController;
        this.network = network;
        this.networkService = networkService;
        this.alertController = alertController;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userConf = this.authService.getAthConf();
            this.user = this.authService.getUser();
            if (this.networkService.initializeConnection()) {
                this.connecticon = true;
                this.checkUserAndGoRequest();
            }
            else {
                this.connecticon = false;
                let message = '<i class="fas fa-exclamation-circle"></i>&#32;Подключение к интернету отсутсвует';
                this.openAlert(message);
            }
            document.addEventListener('offline', () => {
                this.connecticon = false;
                this.presentToast('Вы отключились от интернета');
                console.log('offline');
            });
            document.addEventListener('online', () => {
                this.connecticon = true;
                this.presentToast('Подключение востановлено');
                if (!this.authService.getUser()) {
                    this.checkUserAndGoRequest();
                }
            });
        });
    }
    checkUserAndGoRequest() {
        if (this.user == null && this.userConf.user_id != -1 && this.userConf.user_sid != '') {
            this.getUserFromServer({ id_user: this.userConf.user_id, sid: this.userConf.user_sid });
        }
    }
    openAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Упс...',
                message,
                cssClass: 'alert',
                buttons: [{
                        text: 'OK',
                        cssClass: 'alertButton'
                    }]
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1200,
                cssClass: 'toast',
            });
            toast.present();
        });
    }
    getUserFromServer(dataForServer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.http.post('https://sc.grekagreka25.had.su/user/get/', dataForServer, {}).then(answer => {
                console.log('Answer from server...');
                console.log("Answer params: ");
                console.log(answer);
                let answerParse;
                answerParse = JSON.parse(answer.data);
                if (answerParse.success) {
                    var user = Object.assign(dataForServer, answerParse.data);
                    this.authService.setUser(user);
                }
            }).catch(err => { console.log('Error: ' + err); });
        });
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
    viewCoffeeHouses() {
        this.slides.slideTo(0, 600);
        this.changeButtonColor(0);
        return true;
    }
    viewFavorites() {
        this.slides.slideTo(1, 600);
        this.changeButtonColor(1);
        return true;
    }
    goQrPage() {
        this.nav.navigateRoot(['/qr']);
    }
    goUserSettings() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.connecticon) {
                let message = '<i class="fas fa-exclamation-circle"></i>&#32;Возможно отсутсвует подключение к интернету, попробуйте еще раз...';
                this.openAlert(message);
                return false;
            }
            if (this.authService.getUser()) {
                this.nav.navigateRoot(['/user-settings']);
            }
            else {
                const load = yield this.loadingController.create({
                    cssClass: 'spinerColor',
                    message: "Секунду...",
                    spinner: "lines",
                });
                setTimeout(() => {
                    load.dismiss();
                    this.nav.navigateRoot(['/user-settings']);
                }, 250);
            }
        });
    }
    goToAdminCoffeeHouses() {
        if (!this.connecticon) {
            let message = '<i class="fas fa-exclamation-circle"></i>&#32;Возможно отсутсвует подключение к интернету, попробуйте еще раз...';
            this.openAlert(message);
            return false;
        }
        this.nav.navigateRoot(['/admin-coffee-houses']);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_6__["FileStorageForUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_8__["NetworkConnectionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_6__["FileStorageForUserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
        src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_8__["NetworkConnectionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/network.connection.service/network-connection.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/services/network.connection.service/network-connection.service.ts ***!
  \***********************************************************************************/
/*! exports provided: NetworkConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkConnectionService", function() { return NetworkConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");



let NetworkConnectionService = class NetworkConnectionService {
    constructor(network) {
        this.network = network;
    }
    initializeConnection() {
        if (this.network.type == 'none') {
            console.log('network is disconnected');
            return false;
        }
        return true;
    }
};
NetworkConnectionService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"] }
];
NetworkConnectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"]])
], NetworkConnectionService);



/***/ })

}]);
//# sourceMappingURL=main-pages-home-page-home-module-es2015.js.map