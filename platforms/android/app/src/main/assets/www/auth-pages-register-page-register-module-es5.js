function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-pages-register-page-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/register.page/register.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/register.page/register.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthPagesRegisterPageRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content class=\"animated fadeInLeft fast\">\n\n\n    <ion-row class=\"Register\" id=\"Register\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col>\n          <span>Регистрация</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"Description\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col>\n          <p>Заполните поля для регистрации</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-signature\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"text\" class=\"form__field\" (keyup)=\"submit($event)\" [(ngModel)]=\"name\" placeholder=\"full name\" name=\"full_name\" id='full_name' pattern=\"^[^-0-9]{1,}$\"/>\n            <label for=\"full_name\" class=\"form__label\">Полное имя</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"far fa-envelope\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"email\" class=\"form__field\" (keyup)=\"submit($event)\" placeholder=\"Email\"  [(ngModel)]=\"email\" name=\"Email\" id='emailInp' pattern=\"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$\"/>\n            <label for=\"emailInp\" class=\"form__label\">Email</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-mobile-alt\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"tel\" [textMask]=\"{mask: mask}\" (keyup)=\"submit($event)\" class=\"form__field\" [(ngModel)]=\"phone\" placeholder=\"phone_number\" name=\"phone_number\" id='phone_number' pattern=\"\\(\\d{3,5}\\)\\s+\\d{3}-\\d{2}-\\d{2}\"/>\n            <label for=\"phone_number\" class=\"form__label\">Номер телефона</label>\n        </ion-col>\n      </ion-row>\n      \n\n\n      <ion-row class=\"form_item\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-unlock-alt\"></i>\n        </ion-col>\n        <ion-col>\n          <input type=\"password\" class=\"form__field\" (keyup)=\"submit($event)\" placeholder=\"Пароль\" minlength=\"6\" [(ngModel)]=\"password\" name=\"pass\" id='pass' />\n          <label for=\"pass\" class=\"form__label\">Пароль</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-unlock-alt\"></i>\n        </ion-col>\n        <ion-col>\n          <input type=\"password\" class=\"form__field\" (keyup)=\"submit($event)\" placeholder=\"Подтверждения пароля\" minlength=\"6\" [(ngModel)]=\"confirmpass\" name=\"confirm_pass\" id='confirm_pass' />\n          <label for=\"confirm_pass\" class=\"form__label\">Подтверждения пароля</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"rowButton\">\n        <ion-button (click)=\"Register()\">Зарегестрироватся\n          <div class=\"arrow\">\n          </div>\n        </ion-button>\n      </ion-row>\n      <ion-row class=\"text animated fadeInDown fast\" id=\"text\">\n        <span>Уже есть аккаунт?&nbsp;</span><span (click)=\"Login()\">Войти</span>\n      </ion-row>\n</ion-content>\n<app-alert></app-alert>";
    /***/
  },

  /***/
  "./src/app/auth.pages/register.page/register-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/auth.pages/register.page/register-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppAuthPagesRegisterPageRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/auth.pages/register.page/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth.pages/register.page/register.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/auth.pages/register.page/register.module.ts ***!
    \*************************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppAuthPagesRegisterPageRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/auth.pages/register.page/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/auth.pages/register.page/register.page.ts");
    /* harmony import */


    var _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/header.component/header.component.module */
    "./src/app/components/header.component/header.component.module.ts");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var src_app_components_alert_component_alert_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/components/alert.component/alert.component.module */
    "./src/app/components/alert.component/alert.component.module.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"], _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"], src_app_components_alert_component_alert_component_module__WEBPACK_IMPORTED_MODULE_9__["AlertComponentModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/auth.pages/register.page/register.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/auth.pages/register.page/register.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthPagesRegisterPageRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Register {\n  margin-top: 15%;\n  font-size: 26pt;\n  font-weight: bold;\n}\n\n.Description {\n  font-size: 14pt;\n  color: #A4B0BE;\n}\n\n.form_item {\n  height: 50px;\n  margin-top: 10px;\n}\n\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n}\n\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field::placeholder {\n  color: transparent;\n}\n\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\n\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.forgot {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n  padding: 5px;\n}\n\n.forgot > span {\n  display: block;\n  font-size: 8pt;\n  color: #FAC35E;\n  font-weight: bold;\n}\n\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.rowButton > ion-button {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 240px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.text > span {\n  display: block;\n  color: #A4B0BE;\n}\n\n.text > span:last-child {\n  color: #FBA232;\n}\n\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.text_hide {\n  display: none;\n}\n\n.role {\n  color: #FBA232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvYXV0aC5wYWdlcy9yZWdpc3Rlci5wYWdlL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC5wYWdlcy9yZWdpc3Rlci5wYWdlL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNLSjs7QURKSTtFQUNJLGtCQUFBO0FDTVI7O0FEUEk7RUFDSSxrQkFBQTtBQ01SOztBRFBJO0VBQ0ksa0JBQUE7QUNNUjs7QURQSTtFQUNJLGtCQUFBO0FDTVI7O0FESkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ01SOztBREhBO0VBWUksZ0NBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUEk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QUNRTjs7QURGQTtFQVdJLGdDQUFBO0FDTEo7O0FETEk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNUjs7QURBSTtFQUF1Qiw0QkFBQTtBQ0kzQjs7QURGQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURKQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDT0o7O0FETEE7RUFDSSx5REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1FKOztBRE5BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ1VKOztBRFJBO0VBQ0ksY0FBQTtBQ1dKOztBRFRBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDWUo7O0FEVkE7RUFDSSxhQUFBO0FDYUo7O0FEWEE7RUFDSSxjQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoLnBhZ2VzL3JlZ2lzdGVyLnBhZ2UvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlZ2lzdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgZm9udC1zaXplOiAyNnB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLkRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgY29sb3I6ICNBNEIwQkU7XG59XG4uZm9ybV9pdGVte1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaXtcbiAgICBjb2xvcjogI0E0QjBCRTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uZm9ybV9fbGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIC8vIGZvbnQtc2l6ZTogNXB0O1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi5mb3JtX19maWVsZHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMge1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgY29sb3I6ICNGQkEyMzI7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH0gXG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xufVxuXG4uZm9ybV9fZmllbGR7XG4gICAgJjpyZXF1aXJlZCwmOmludmFsaWQgeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkOyB9XG59XG4uaWNvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcmdvdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5mb3Jnb3Q+c3BhbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDhwdDtcbiAgICBjb2xvcjogI0ZBQzM1RTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvd0J1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucm93QnV0dG9uPmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGV4dD5zcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjQTRCMEJFO1xufVxuLnRleHQ+c3BhbjpsYXN0LWNoaWxke1xuICAgIGNvbG9yOiAjRkJBMjMyO1xufVxuLmFycm93e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnRleHRfaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnJvbGV7XG4gICAgY29sb3I6ICNGQkEyMzI7XG59XG4iLCIuUmVnaXN0ZXIge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMjZwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5EZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi5mb3JtX2l0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmkge1xuICBjb2xvcjogI0E0QjBCRTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICB3aWR0aDogOTUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybV9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmZvcm1fX2ZpZWxkOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjRkJBMjMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9ybV9fZmllbGQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbn1cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IC5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjb2xvcjogI0ZCQTIzMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9yZ290IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5mb3Jnb3QgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBjb2xvcjogI0ZBQzM1RTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb3dCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yb3dCdXR0b24gPiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dCA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi50ZXh0ID4gc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICNGQkEyMzI7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyb3cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50ZXh0X2hpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucm9sZSB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth.pages/register.page/register.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth.pages/register.page/register.page.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppAuthPagesRegisterPageRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service/auth.service */
    "./src/app/services/auth.service/auth.service.ts");
    /* harmony import */


    var src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/network.connection.service/network-connection.service */
    "./src/app/services/network.connection.service/network-connection.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(activatedRoute, keyboard, nav, http, alertController, loadingController, toastController, authService, plt, networkService, network) {
        _classCallCheck(this, RegisterPage);

        this.activatedRoute = activatedRoute;
        this.keyboard = keyboard;
        this.nav = nav;
        this.http = http;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.authService = authService;
        this.plt = plt;
        this.networkService = networkService;
        this.network = network;
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.regExp = '^\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}\s$';
        this.err_message = [];
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.plt.ready().then(function () {
            if (!_this.networkService.initializeConnection()) {
              var massage = '<i class="fas fa-exclamation-circle"></i>&#32;Подключение к интернету отсутсвует';

              _this.openAlert(massage);

              _this.conection = false;
            } else {
              _this.conection = true;
            }

            _this.network.onConnect().subscribe(function () {
              _this.conection = true;
            });

            _this.network.onDisconnect().subscribe(function () {
              _this.conection = false;
            });
          });
          this.keyboard.onKeyboardWillShow().subscribe(function () {
            document.getElementById('text').style.display = 'none';
          });
          this.keyboard.onKeyboardWillHide().subscribe(function () {
            document.getElementById('text').style.display = 'flex';
          });
        }
      }, {
        key: "submit",
        value: function submit(e) {
          if (e.key == "Enter") {
            this.keyboard.hide();
          }
        }
      }, {
        key: "openAlert",
        value: function openAlert(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Упс...',
                      message: message,
                      cssClass: 'alert',
                      buttons: [{
                        text: 'OK',
                        cssClass: 'alertButton'
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                    this.err_message = [];

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "checkConection",
        value: function checkConection() {
          var massage = '<i class="fas fa-exclamation-circle"></i>&#32;Проверте подключение к интернету';

          if (this.conection) {
            return true;
          }

          this.openAlert(massage);
          return false;
        }
      }, {
        key: "validate",
        value: function validate(data) {
          var _this2 = this;

          var form_input = document.querySelectorAll('input');
          var form_input_invalid = document.querySelectorAll('.form__field:invalid');
          var count_err = 0;
          form_input.forEach(function (item) {
            item;

            if (item.value == '' && count_err == 0 && item.id != 'code') {
              console.log(item);

              _this2.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Не все поля заполнены');

              count_err++;
            }
          });

          if (form_input_invalid.length == 5) {
            this.err_message.push("<i class=\"fas fa-exclamation-circle\"></i>&#32;\u041F\u0440\u043E\u0432\u0435\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445: \n                              <br> \u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0432\u0432\u0435\u0434\u0435\u043D \u043B\u043E\u0433\u0438\u043D...\n                              <br> \u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430... \n                              <br> \u041F\u0430\u0440\u043E\u043B\u044C \u043C\u0435\u043D\u044C\u0448\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432...");
            count_err++;
          }

          form_input_invalid.forEach(function (item) {
            if (item.id == 'full_name') {
              _this2.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пожалуйста, введите настоящее имя');

              count_err++;
            }

            if (item.id == 'emailInp') {
              _this2.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Неверно введен email');

              count_err++;
            }

            if (item.id == 'phone_number') {
              _this2.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Неверно введен номер телефона');

              count_err++;
            }

            if (item.id == 'pass') {
              _this2.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пароль меньше 6 символов');

              count_err++;
            }
          });

          if (data.password != data.confirmpass) {
            this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пароли не совпадают');
            count_err++;
          }

          if (count_err > 0) {
            this.openAlert(this.err_message);
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "Register",
        value: function Register() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var name, email, phone, password, confirmpass, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    name = this.name, email = this.email, phone = this.phone, password = this.password, confirmpass = this.confirmpass;
                    this.data = {
                      name: name,
                      email: email,
                      phone: phone,
                      password: password,
                      confirmpass: confirmpass
                    };

                    if (!(this.checkConection() && this.validate(this.data))) {
                      _context2.next = 10;
                      break;
                    }

                    console.log(this.data);
                    _context2.next = 6;
                    return this.loadingController.create({
                      cssClass: 'spinerColor',
                      message: "Вход...",
                      spinner: "lines"
                    });

                  case 6:
                    loading = _context2.sent;
                    _context2.next = 9;
                    return loading.present();

                  case 9:
                    this.http.post('https://sc.grekagreka25.had.su/reg/in', this.data, {}).then(function (data) {
                      loading.dismiss();
                      console.log("data afte request reg/in");
                      console.log(data.data);
                      var dataJson = JSON.parse(data.data);
                      console.log(dataJson);

                      if (dataJson.error == 902) {
                        _this3.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Такой пользователь уже существует!!!');

                        _this3.openAlert(_this3.err_message);

                        return;
                      }

                      if (_this3.err_message.length == 0) {
                        _this3.alert();
                      }
                    }).catch(function (error) {
                      console.log(error.error);
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "alert",
        value: function alert() {
          document.querySelector('app-alert').firstElementChild.classList.add('active');
          document.querySelector('app-alert').lastElementChild.classList.add('background_active');
        }
      }, {
        key: "Login",
        value: function Login() {
          this.nav.navigateRoot(['/login']);
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_7__["NetworkConnectionService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/register.page/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/auth.pages/register.page/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_7__["NetworkConnectionService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-pages-register-page-register-module-es5.js.map