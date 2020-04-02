function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-page-login-module~register-page-register-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register-alert.component/register-alert.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-alert.component/register-alert.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterAlertComponentRegisterAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alert animated fadeIn faster\">\n  <ion-row class=\"alert_title\">\n    <ion-col class=\"title\">\n      <p class=\"bold p_title\">Выберите вариант регистрации</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"alert_body\">\n    <ion-col>\n      <div class=\"customer_div business animated fadeIn fast\">\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class=\"client_div client animated fadeIn fast\">\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"alert_footer\">\n    <ion-col>\n      <p class=\"p_footer business animated fadeIn fast\">Бизнес</p>\n    </ion-col>\n    <ion-col>\n      <p class=\"p_footer client animated fadeIn fast\">Клиент</p>\n    </ion-col>\n  </ion-row>\n</div>\n\n<div class=\"background_opacity\" (click)=\"closeModal()\">\n\n</div>";
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
  "./src/app/register-alert.component/register-alert.component.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/register-alert.component/register-alert.component.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: RegisterAlertComponentModule */

  /***/
  function srcAppRegisterAlertComponentRegisterAlertComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterAlertComponentModule", function () {
      return RegisterAlertComponentModule;
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


    var _register_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register-alert.component */
    "./src/app/register-alert.component/register-alert.component.ts");

    var RegisterAlertComponentModule = function RegisterAlertComponentModule() {
      _classCallCheck(this, RegisterAlertComponentModule);
    };

    RegisterAlertComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      declarations: [_register_alert_component__WEBPACK_IMPORTED_MODULE_4__["RegisterAlertComponent"]],
      exports: [_register_alert_component__WEBPACK_IMPORTED_MODULE_4__["RegisterAlertComponent"]]
    })], RegisterAlertComponentModule);
    /***/
  },

  /***/
  "./src/app/register-alert.component/register-alert.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/register-alert.component/register-alert.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterAlertComponentRegisterAlertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alert {\n  width: 95%;\n  height: 240px;\n  background-color: #fff;\n  position: absolute;\n  border-radius: 20px;\n  box-shadow: 0px 3px 20px 0px rgba(77, 77, 77, 0.52);\n  z-index: 1000;\n  display: none;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.background_opacity {\n  width: 100%;\n  height: 100%;\n  background-color: #999999;\n  position: absolute;\n  z-index: 700;\n  top: 0;\n  display: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.active {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n}\n\n.background_active {\n  display: block;\n  opacity: 0.5;\n}\n\nion-row {\n  width: 100%;\n}\n\n.alert_title {\n  height: 25%;\n}\n\n.alert_body {\n  height: 50%;\n}\n\n.alert_footer {\n  height: 25%;\n}\n\n.title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0;\n}\n\n.p_title {\n  margin: 0;\n}\n\n.bold {\n  font-weight: bold;\n  font-size: 14pt;\n}\n\n.customer_div, .client_div {\n  height: 100%;\n  width: 70%;\n  border-radius: 42px;\n  display: block;\n  background-size: 90% 90%;\n  background-repeat: no-repeat;\n  background-position: 50% 0%;\n}\n\n.customer_div {\n  background-color: #FAC35E;\n  background-image: url('busines.svg');\n}\n\n.client_div {\n  background-color: #484848;\n  background-image: url('user(T&T).svg');\n  background-position: 100% 50%;\n}\n\n.p_footer {\n  font-size: 14pt;\n  font-weight: bold;\n  margin-top: 10px;\n  color: #484848;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvcmVnaXN0ZXItYWxlcnQuY29tcG9uZW50L3JlZ2lzdGVyLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci1hbGVydC5jb21wb25lbnQvcmVnaXN0ZXItYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUdBLG1EQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUFRLE9BQUE7RUFBUyxTQUFBO0VBQVcsUUFBQTtBQ0loQzs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7QUNJSjs7QURGQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7QUNVSjs7QURSQTtFQUNJLHlCQUFBO1VBQUEsbUJBQUE7QUNXSjs7QURUQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxVQUFBO0FDWUo7O0FEVkE7RUFDSSxTQUFBO0FDYUo7O0FEWEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNjSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDY0o7O0FEWkE7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0FDZUo7O0FEWkE7RUFDSSx5QkFBQTtFQUNBLHNDQUFBO0VBRUEsNkJBQUE7QUNjSjs7QURaQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2VKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItYWxlcnQuY29tcG9uZW50L3JlZ2lzdGVyLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0e1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCAyMHB4IDBweCByZ2JhKDc3LCA3NywgNzcsIDAuNTIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogICAgMHB4IDNweCAyMHB4IDBweCByZ2JhKDc3LCA3NywgNzcsIDAuNTIpO1xuICAgIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDNweCAyMHB4IDBweCByZ2JhKDc3LCA3NywgNzcsIDAuNTIpO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwOyBsZWZ0OiAwOyBib3R0b206IDA7IHJpZ2h0OiAwO1xufVxuLmJhY2tncm91bmRfb3BhY2l0eXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNzAwO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cbi5hY3RpdmV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5iYWNrZ3JvdW5kX2FjdGl2ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5pb24tcm93e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmFsZXJ0X3RpdGxle1xuICAgIGhlaWdodDogMjUlO1xufVxuLmFsZXJ0X2JvZHl7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG4uYWxlcnRfZm9vdGVye1xuICAgIGhlaWdodDogMjUlO1xufVxuLnRpdGxle1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cbi5wX3RpdGxle1xuICAgIG1hcmdpbjogMDtcbn1cbi5ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbn1cbi5jdXN0b21lcl9kaXYsIC5jbGllbnRfZGl2e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiA0MnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtc2l6ZTogOTAlIDkwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAwJTtcbn1cbi5jdXN0b21lcl9kaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBQzM1RTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIvYnVzaW5lcy5zdmcnKTtcbiAgICBcbn1cbi5jbGllbnRfZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3JlZ2lzdGVyL3VzZXIoVCZUKS5zdmcnKTtcbiAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG59XG4ucF9mb290ZXJ7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59IiwiLmFsZXJ0IHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggMjBweCAwcHggcmdiYSg3NywgNzcsIDc3LCAwLjUyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDIwcHggMHB4IHJnYmEoNzcsIDc3LCA3NywgMC41Mik7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAwcHggcmdiYSg3NywgNzcsIDc3LCAwLjUyKTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5iYWNrZ3JvdW5kX29wYWNpdHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDcwMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYmFja2dyb3VuZF9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC41O1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hbGVydF90aXRsZSB7XG4gIGhlaWdodDogMjUlO1xufVxuXG4uYWxlcnRfYm9keSB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uYWxlcnRfZm9vdGVyIHtcbiAgaGVpZ2h0OiAyNSU7XG59XG5cbi50aXRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLnBfdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuLmN1c3RvbWVyX2RpdiwgLmNsaWVudF9kaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlci1yYWRpdXM6IDQycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLXNpemU6IDkwJSA5MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAwJTtcbn1cblxuLmN1c3RvbWVyX2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUMzNUU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIvYnVzaW5lcy5zdmdcIik7XG59XG5cbi5jbGllbnRfZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDg0ODtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9yZWdpc3Rlci91c2VyKFQmVCkuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcbn1cblxuLnBfZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register-alert.component/register-alert.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/register-alert.component/register-alert.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RegisterAlertComponent */

  /***/
  function srcAppRegisterAlertComponentRegisterAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterAlertComponent", function () {
      return RegisterAlertComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var RegisterAlertComponent = /*#__PURE__*/function () {
      function RegisterAlertComponent(router, nav) {
        _classCallCheck(this, RegisterAlertComponent);

        this.router = router;
        this.nav = nav;
      }

      _createClass(RegisterAlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var business = document.querySelectorAll('.business');
          business.forEach(function (item) {
            return item.addEventListener('click', function () {
              _this.goRegistration('bisnesess');
            });
          });
          var client = document.querySelectorAll('.client');
          client.forEach(function (item) {
            item.addEventListener('click', function () {
              _this.goRegistration('client');
            });
          });
        }
      }, {
        key: "goRegistration",
        value: function goRegistration(role) {
          this.closeModal(); //this.router.navigate(['/register', { role }]);

          this.nav.navigateRoot(['/register', {
            role: role
          }]);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alertDiv, backgroundDiv;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    alertDiv = document.querySelector('.alert');
                    backgroundDiv = document.querySelector('.background_opacity');
                    backgroundDiv.setAttribute('style', "opacity: 0;");
                    alertDiv.classList.remove('active');
                    backgroundDiv.classList.remove('background_active');
                    backgroundDiv.setAttribute('style', '');

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return RegisterAlertComponent;
    }();

    RegisterAlertComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    RegisterAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register-alert.component/register-alert.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-alert.component.scss */
      "./src/app/register-alert.component/register-alert.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])], RegisterAlertComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~login-page-login-module~register-page-register-module-es5.js.map