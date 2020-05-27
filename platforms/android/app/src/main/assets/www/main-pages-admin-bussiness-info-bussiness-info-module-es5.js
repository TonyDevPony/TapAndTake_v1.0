function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-admin-bussiness-info-bussiness-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/bussiness-info/bussiness-info.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/bussiness-info/bussiness-info.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPagesAdminBussinessInfoBussinessInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>bussinessInfo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main.pages/admin/bussiness-info/bussiness-info-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: BussinessInfoPageRoutingModule */

  /***/
  function srcAppMainPagesAdminBussinessInfoBussinessInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BussinessInfoPageRoutingModule", function () {
      return BussinessInfoPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _bussiness_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bussiness-info.page */
    "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts");

    var routes = [{
      path: '',
      component: _bussiness_info_page__WEBPACK_IMPORTED_MODULE_3__["BussinessInfoPage"]
    }];

    var BussinessInfoPageRoutingModule = function BussinessInfoPageRoutingModule() {
      _classCallCheck(this, BussinessInfoPageRoutingModule);
    };

    BussinessInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BussinessInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main.pages/admin/bussiness-info/bussiness-info.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info.module.ts ***!
    \**************************************************************************/

  /*! exports provided: BussinessInfoPageModule */

  /***/
  function srcAppMainPagesAdminBussinessInfoBussinessInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BussinessInfoPageModule", function () {
      return BussinessInfoPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _bussiness_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bussiness-info-routing.module */
    "./src/app/main.pages/admin/bussiness-info/bussiness-info-routing.module.ts");
    /* harmony import */


    var _bussiness_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bussiness-info.page */
    "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts");

    var BussinessInfoPageModule = function BussinessInfoPageModule() {
      _classCallCheck(this, BussinessInfoPageModule);
    };

    BussinessInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bussiness_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["BussinessInfoPageRoutingModule"]],
      declarations: [_bussiness_info_page__WEBPACK_IMPORTED_MODULE_6__["BussinessInfoPage"]]
    })], BussinessInfoPageModule);
    /***/
  },

  /***/
  "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPagesAdminBussinessInfoBussinessInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4ucGFnZXMvYWRtaW4vYnVzc2luZXNzLWluZm8vYnVzc2luZXNzLWluZm8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/main.pages/admin/bussiness-info/bussiness-info.page.ts ***!
    \************************************************************************/

  /*! exports provided: BussinessInfoPage */

  /***/
  function srcAppMainPagesAdminBussinessInfoBussinessInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BussinessInfoPage", function () {
      return BussinessInfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BussinessInfoPage = /*#__PURE__*/function () {
      function BussinessInfoPage() {
        _classCallCheck(this, BussinessInfoPage);
      }

      _createClass(BussinessInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BussinessInfoPage;
    }();

    BussinessInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bussiness-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bussiness-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/bussiness-info/bussiness-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bussiness-info.page.scss */
      "./src/app/main.pages/admin/bussiness-info/bussiness-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BussinessInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=main-pages-admin-bussiness-info-bussiness-info-module-es5.js.map