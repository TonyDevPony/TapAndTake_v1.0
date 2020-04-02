function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/coffee-house.component/coffee-house.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coffee-house.component/coffee-house.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoffeeHouseComponentCoffeeHouseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  coffee-house works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites.component/favorites.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites.component/favorites.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesComponentFavoritesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  favorites works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header.component/header.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header.component/header.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderComponentHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"animated fadeInDown fast\">\n  <span class=\"TapWord\">Tap&nbsp;</span><span class=\"TakeWord\">& Take</span>\n</ion-header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home.page/home.page.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home.page/home.page.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n    <ion-row class=\"row_buttons\">\n        <ion-col class=\"col_buttons animated fadeInLeft fast\">\n            <button (click)=\"viewFavorites()\" class=\"choise_button active\" id=\"favorites\">Избранные</button>\n        </ion-col>\n        <ion-col class=\"col_buttons animated fadeInRight fast\">\n            <button (click)=\"viewCoffeeHouses()\" class=\"choise_button\" id=\"coffee_house\">Кофейни</button>\n        </ion-col>\n    </ion-row>\n    <ion-row class=\"animated fadeIn fast\">\n        <ion-slides [options]=\"slideOpts\" #mySlider (ionSlideDidChange)=\"setButton()\">\n            <ion-slide>\n              <app-favorites></app-favorites>\n            </ion-slide>\n            <ion-slide>\n              <app-coffee-house></app-coffee-house>\n            </ion-slide>\n          </ion-slides>\n    </ion-row>\n</ion-content>\n<div class=\"toolbar animated fadeInUp fast\">\n    <div class=\"settings\" id=\"settings\">\n        <img src=\"../../assets/img/home/settings.svg\" alt=\"\" class=\"toolbar_img\">\n    </div>\n    <div class=\"qr_code\" id=\"qr_code\" (click)=\"goQrPage()\">\n        <img src=\"../../assets/img/home/qr-code.svg\" alt=\"\" class=\"toolbar_img\">\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/coffee-house.component/coffee-house.component.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/coffee-house.component/coffee-house.component.module.ts ***!
    \*************************************************************************/

  /*! exports provided: CoffeeHouseComponentModule */

  /***/
  function srcAppCoffeeHouseComponentCoffeeHouseComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoffeeHouseComponentModule", function () {
      return CoffeeHouseComponentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _coffee_house_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./coffee-house.component */
    "./src/app/coffee-house.component/coffee-house.component.ts");

    var CoffeeHouseComponentModule = function CoffeeHouseComponentModule() {
      _classCallCheck(this, CoffeeHouseComponentModule);
    };

    CoffeeHouseComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      declarations: [_coffee_house_component__WEBPACK_IMPORTED_MODULE_4__["CoffeeHouseComponent"]],
      exports: [_coffee_house_component__WEBPACK_IMPORTED_MODULE_4__["CoffeeHouseComponent"]]
    })], CoffeeHouseComponentModule);
    /***/
  },

  /***/
  "./src/app/coffee-house.component/coffee-house.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/coffee-house.component/coffee-house.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoffeeHouseComponentCoffeeHouseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZmZlZS1ob3VzZS5jb21wb25lbnQvY29mZmVlLWhvdXNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/coffee-house.component/coffee-house.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/coffee-house.component/coffee-house.component.ts ***!
    \******************************************************************/

  /*! exports provided: CoffeeHouseComponent */

  /***/
  function srcAppCoffeeHouseComponentCoffeeHouseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoffeeHouseComponent", function () {
      return CoffeeHouseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CoffeeHouseComponent = /*#__PURE__*/function () {
      function CoffeeHouseComponent() {
        _classCallCheck(this, CoffeeHouseComponent);
      }

      _createClass(CoffeeHouseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoffeeHouseComponent;
    }();

    CoffeeHouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-coffee-house',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./coffee-house.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/coffee-house.component/coffee-house.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./coffee-house.component.scss */
      "./src/app/coffee-house.component/coffee-house.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CoffeeHouseComponent);
    /***/
  },

  /***/
  "./src/app/favorites.component/favorites.component.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/favorites.component/favorites.component.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FavoritesComponentModule */

  /***/
  function srcAppFavoritesComponentFavoritesComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponentModule", function () {
      return FavoritesComponentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./favorites.component */
    "./src/app/favorites.component/favorites.component.ts");

    var FavoritesComponentModule = function FavoritesComponentModule() {
      _classCallCheck(this, FavoritesComponentModule);
    };

    FavoritesComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"]],
      exports: [_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"]]
    })], FavoritesComponentModule);
    /***/
  },

  /***/
  "./src/app/favorites.component/favorites.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/favorites.component/favorites.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesComponentFavoritesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy5jb21wb25lbnQvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/favorites.component/favorites.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/favorites.component/favorites.component.ts ***!
    \************************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppFavoritesComponentFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FavoritesComponent = /*#__PURE__*/function () {
      function FavoritesComponent() {
        _classCallCheck(this, FavoritesComponent);
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites.component/favorites.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.component.scss */
      "./src/app/favorites.component/favorites.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FavoritesComponent);
    /***/
  },

  /***/
  "./src/app/header.component/header.component.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/header.component/header.component.module.ts ***!
    \*************************************************************/

  /*! exports provided: HeaderComponentModule */

  /***/
  function srcAppHeaderComponentHeaderComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentModule", function () {
      return HeaderComponentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/header.component/header.component.ts");

    var HeaderComponentModule = function HeaderComponentModule() {
      _classCallCheck(this, HeaderComponentModule);
    };

    HeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      declarations: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
      exports: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]]
    })], HeaderComponentModule);
    /***/
  },

  /***/
  "./src/app/header.component/header.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/header.component/header.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderComponentHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  height: 10vh;\n  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);\n  border-bottom-right-radius: 42px;\n  border-bottom-left-radius: 42px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --ion-font-family: \"FredokaOne-Regular\"!important;\n  font-family: \"FredokaOne-Regular\" !important;\n  font-size: 20pt;\n}\n\nion-header:after {\n  display: none;\n}\n\n.TapWord {\n  color: #FAC35E;\n}\n\n.TakeWord, .Login {\n  color: #484848;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvaGVhZGVyLmNvbXBvbmVudC9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci5jb21wb25lbnQvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUdBLGdEQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci5jb21wb25lbnQvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm94LXNoYWRvdzogICAgICAgICAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICAnRnJlZG9rYU9uZS1SZWd1bGFyJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICAnRnJlZG9rYU9uZS1SZWd1bGFyJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbn1cbmlvbi1oZWFkZXI6YWZ0ZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5UYXBXb3JkIHtcbiAgICBjb2xvcjogI0ZBQzM1RTtcbn1cbi5UYWtlV29yZCwgLkxvZ2lue1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuIiwiaW9uLWhlYWRlciB7XG4gIGhlaWdodDogMTB2aDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiRnJlZG9rYU9uZS1SZWd1bGFyXCIhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJGcmVkb2thT25lLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbmlvbi1oZWFkZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uVGFwV29yZCB7XG4gIGNvbG9yOiAjRkFDMzVFO1xufVxuXG4uVGFrZVdvcmQsIC5Mb2dpbiB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header.component/header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/header.component/header.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderComponentHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(navCtrl) {
        _classCallCheck(this, HeaderComponent);

        this.navCtrl = navCtrl;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header.component/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header.component/header.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home.page/home.module.ts":
  /*!******************************************!*\
    !*** ./src/app/home.page/home.module.ts ***!
    \******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomePageHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home.page/home.page.ts");
    /* harmony import */


    var _header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../header.component/header.component.module */
    "./src/app/header.component/header.component.module.ts");
    /* harmony import */


    var _coffee_house_component_coffee_house_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../coffee-house.component/coffee-house.component.module */
    "./src/app/coffee-house.component/coffee-house.component.module.ts");
    /* harmony import */


    var _favorites_component_favorites_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../favorites.component/favorites.component.module */
    "./src/app/favorites.component/favorites.component.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"], _coffee_house_component_coffee_house_component_module__WEBPACK_IMPORTED_MODULE_8__["CoffeeHouseComponentModule"], _favorites_component_favorites_component_module__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home.page/home.page.scss":
  /*!******************************************!*\
    !*** ./src/app/home.page/home.page.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  position: relative;\n}\n\n.toolbar {\n  width: 140px;\n  height: 70px;\n  position: absolute;\n  left: 0;\n  right: 50px;\n  bottom: 20px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.qr_code, .settings {\n  border-radius: 50px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#FBDC95), to(#FBA232));\n  background: linear-gradient(to bottom, #FBDC95, #FBA232);\n  box-shadow: 0 1px rgba(255, 255, 255, 0.2), 0 3px 5px rgba(0, 1, 6, 0.5);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.qr_code {\n  width: 70px;\n  height: 70px;\n}\n\n.settings {\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n}\n\n.toolbar_img {\n  width: 60%;\n  height: 60%;\n}\n\n#settings > img {\n  width: 70%;\n  height: 70%;\n}\n\nion-slides {\n  width: 100%;\n}\n\n.row_buttons {\n  margin-top: 40px;\n  height: 50px;\n}\n\n.col_buttons {\n  display: -webkit-box;\n  display: flex;\n}\n\n.col_buttons:first-child {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-left: 10px;\n}\n\n.col_buttons:last-child {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-right: 10px;\n}\n\n.choise_button {\n  width: 135px;\n  background: none;\n  font-size: 16pt;\n  font-weight: bold;\n  color: #929292;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n  padding: 4px;\n}\n\n.active {\n  color: #484848;\n  border-bottom: 1px solid #484848;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvaG9tZS5wYWdlL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLnBhZ2UvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFBUyxXQUFBO0VBQWEsWUFBQTtFQUN0QixZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0VBQ0EsdUZBQUE7RUFBQSx3REFBQTtFQUNBLHdFQUNJO0VBRUosb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSUo7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDU0o7O0FETkE7RUFDSSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURQQTtFQUNJLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxZQUFBO0FDV0o7O0FEVEE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9ob21lLnBhZ2UvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9vbGJhcntcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwOyByaWdodDogNTBweDsgYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xcl9jb2RlLCAuc2V0dGluZ3N7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgICBib3gtc2hhZG93OlxuICAgICAgICAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LC4yKSxcbiAgICAgICAgMCAzcHggNXB4IHJnYmEoMCwxLDYsLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xcl9jb2Rle1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBcbn1cbi5zZXR0aW5nc3tcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRvb2xiYXJfaW1ne1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG59XG4jc2V0dGluZ3M+aW1ne1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG5pb24tc2xpZGVze1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnJvd19idXR0b25ze1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLmNvbF9idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG59XG4uY29sX2J1dHRvbnM6Zmlyc3QtY2hpbGR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmNvbF9idXR0b25zOmxhc3QtY2hpbGR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2hvaXNlX2J1dHRvbntcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM5MjkyOTI7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgIHBhZGRpbmc6IDRweDtcbn1cbi5hY3RpdmV7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0ODQ4NDg7XG4gICAgb3V0bGluZTogbm9uZTtcbn0iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvb2xiYXIge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5xcl9jb2RlLCAuc2V0dGluZ3Mge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgYm94LXNoYWRvdzogMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCAwIDNweCA1cHggcmdiYSgwLCAxLCA2LCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnFyX2NvZGUge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uc2V0dGluZ3Mge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50b29sYmFyX2ltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4jc2V0dGluZ3MgPiBpbWcge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm93X2J1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jb2xfYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb2xfYnV0dG9uczpmaXJzdC1jaGlsZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jb2xfYnV0dG9uczpsYXN0LWNoaWxkIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hvaXNlX2J1dHRvbiB7XG4gIHdpZHRoOiAxMzVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDg0ODQ4O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home.page/home.page.ts":
  /*!****************************************!*\
    !*** ./src/app/home.page/home.page.ts ***!
    \****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomePageHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var coffehouse_list = [{
      id_coffehouse: '1',
      logo: '',
      name_coffehouse: 'Sharikava',
      is_favorite: '1',
      count_cups_purchased: '2',
      count_of_cups: '10'
    }, {
      id_coffehouse: '2',
      logo: '',
      name_coffehouse: 'Sho',
      is_favorite: '0',
      count_cups_purchased: '0',
      count_of_cups: '10'
    }, {
      id_coffehouse: '3',
      logo: '',
      name_coffehouse: 'Kaviati',
      is_favorite: '0',
      count_cups_purchased: '0',
      count_of_cups: '8'
    }, {
      id_coffehouse: '4',
      logo: '',
      name_coffehouse: 'Caffeggio',
      is_favorite: '1',
      count_cups_purchased: '10',
      count_of_cups: '10'
    }, {
      id_coffehouse: '5',
      logo: '',
      name_coffehouse: 'Marmelad',
      is_favorite: '0',
      count_cups_purchased: '0',
      count_of_cups: '8'
    }, {
      id_coffehouse: '6',
      logo: '',
      name_coffehouse: 'Coffee & Sandwich',
      is_favorite: '1',
      count_cups_purchased: '5',
      count_of_cups: '10'
    }];

    var HomePage = /*#__PURE__*/function () {
      function HomePage(nav) {
        _classCallCheck(this, HomePage);

        this.nav = nav;
        this.slideOpts = {};
      }

      _createClass(HomePage, [{
        key: "setButton",
        value: function setButton() {
          var _this = this;

          new Promise(function (resolve, reject) {
            resolve(_this.slides.getActiveIndex());
          }).then(function (result) {
            return _this.changeButtonColor(result);
          });
          return true;
        }
      }, {
        key: "changeButtonColor",
        value: function changeButtonColor(buttonNumb) {
          if (buttonNumb === 0) {
            document.getElementById('favorites').classList.value = 'choise_button active';
            document.getElementById('coffee_house').classList.value = 'choise_button';
          }

          if (buttonNumb === 1) {
            document.getElementById('coffee_house').classList.value = 'choise_button active';
            document.getElementById('favorites').classList.value = 'choise_button';
          }
        }
      }, {
        key: "viewFavorites",
        value: function viewFavorites() {
          this.slides.slideTo(0, 600);
          this.changeButtonColor(0);
          return true;
        }
      }, {
        key: "viewCoffeeHouses",
        value: function viewCoffeeHouses() {
          this.slides.slideTo(1, 600);
          this.changeButtonColor(1);
          return true;
        }
      }, {
        key: "goQrPage",
        value: function goQrPage() {
          this.nav.navigateRoot(['/qr']);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], HomePage.prototype, "slides", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home.page/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home.page/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-page-home-module-es5.js.map