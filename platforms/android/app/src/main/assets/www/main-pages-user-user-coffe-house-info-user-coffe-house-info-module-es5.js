function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-user-user-coffe-house-info-user-coffe-house-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPagesUserUserCoffeHouseInfoUserCoffeHouseInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>userCoffeHouseInfo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: UserCoffeHouseInfoPageRoutingModule */

  /***/
  function srcAppMainPagesUserUserCoffeHouseInfoUserCoffeHouseInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCoffeHouseInfoPageRoutingModule", function () {
      return UserCoffeHouseInfoPageRoutingModule;
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


    var _user_coffe_house_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-coffe-house-info.page */
    "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.ts");

    var routes = [{
      path: '',
      component: _user_coffe_house_info_page__WEBPACK_IMPORTED_MODULE_3__["UserCoffeHouseInfoPage"]
    }];

    var UserCoffeHouseInfoPageRoutingModule = function UserCoffeHouseInfoPageRoutingModule() {
      _classCallCheck(this, UserCoffeHouseInfoPageRoutingModule);
    };

    UserCoffeHouseInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserCoffeHouseInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: UserCoffeHouseInfoPageModule */

  /***/
  function srcAppMainPagesUserUserCoffeHouseInfoUserCoffeHouseInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCoffeHouseInfoPageModule", function () {
      return UserCoffeHouseInfoPageModule;
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


    var _user_coffe_house_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-coffe-house-info-routing.module */
    "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info-routing.module.ts");
    /* harmony import */


    var _user_coffe_house_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-coffe-house-info.page */
    "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.ts");

    var UserCoffeHouseInfoPageModule = function UserCoffeHouseInfoPageModule() {
      _classCallCheck(this, UserCoffeHouseInfoPageModule);
    };

    UserCoffeHouseInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_coffe_house_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserCoffeHouseInfoPageRoutingModule"]],
      declarations: [_user_coffe_house_info_page__WEBPACK_IMPORTED_MODULE_6__["UserCoffeHouseInfoPage"]]
    })], UserCoffeHouseInfoPageModule);
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPagesUserUserCoffeHouseInfoUserCoffeHouseInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4ucGFnZXMvdXNlci91c2VyLWNvZmZlLWhvdXNlLWluZm8vdXNlci1jb2ZmZS1ob3VzZS1pbmZvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: UserCoffeHouseInfoPage */

  /***/
  function srcAppMainPagesUserUserCoffeHouseInfoUserCoffeHouseInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCoffeHouseInfoPage", function () {
      return UserCoffeHouseInfoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserCoffeHouseInfoPage = /*#__PURE__*/function () {
      function UserCoffeHouseInfoPage() {
        _classCallCheck(this, UserCoffeHouseInfoPage);
      }

      _createClass(UserCoffeHouseInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserCoffeHouseInfoPage;
    }();

    UserCoffeHouseInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-coffe-house-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-coffe-house-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-coffe-house-info.page.scss */
      "./src/app/main.pages/user/user-coffe-house-info/user-coffe-house-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserCoffeHouseInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=main-pages-user-user-coffe-house-info-user-coffe-house-info-module-es5.js.map