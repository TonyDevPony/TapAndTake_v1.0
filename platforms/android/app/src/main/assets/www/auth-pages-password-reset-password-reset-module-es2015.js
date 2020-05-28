(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-pages-password-reset-password-reset-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/password-reset/password-reset.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/password-reset/password-reset.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n</app-header>\n<ion-content>\n  <section class=\"forgot_section\">\n    <ion-row class=\"forgot_section_item animated fadeInLeft fast\">\n      <h4>Сброс пароля</h4>\n    </ion-row>\n    <ion-row class=\"forgot_section_item animated fadeInLeft fast\">\n      <p>Введите пожалуйста новый пароль</p>\n    </ion-row>\n    <ion-row class=\"forgot_section_item Email animated fadeInRight fast\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"fas fa-unlock-alt\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"password\" class=\"form__field\" placeholder=\"Пароль\" name=\"pass\" id='pass' />\n        <label for=\"pass\" class=\"form__label\">Новый пароль</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"forgot_section_item Email animated fadeInLeft fast\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"fas fa-unlock-alt\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"password\" class=\"form__field\" placeholder=\"Подтверждения пароля\" name=\"confirm_pass\" id='confirm_pass' />\n        <label for=\"confirm_pass\" class=\"form__label\">Подтверждения пароля</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"rowButton animated fadeInLeft fast\">\n      <ion-button>Применить\n        <div class=\"arrow\">\n        </div>\n      </ion-button>\n    </ion-row>\n    <ion-row class=\"text animated fadeInDown fast\" id=\"text\">\n      <span>Возникли проблемы?&nbsp;</span><span>Тех. поддержка</span>\n    </ion-row>\n  </section>\n</ion-content>\n");

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

/***/ "./src/app/auth.pages/password-reset/password-reset-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/auth.pages/password-reset/password-reset-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PasswordResetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageRoutingModule", function() { return PasswordResetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset.page */ "./src/app/auth.pages/password-reset/password-reset.page.ts");




const routes = [
    {
        path: '',
        component: _password_reset_page__WEBPACK_IMPORTED_MODULE_3__["PasswordResetPage"]
    }
];
let PasswordResetPageRoutingModule = class PasswordResetPageRoutingModule {
};
PasswordResetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PasswordResetPageRoutingModule);



/***/ }),

/***/ "./src/app/auth.pages/password-reset/password-reset.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth.pages/password-reset/password-reset.module.ts ***!
  \********************************************************************/
/*! exports provided: PasswordResetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPageModule", function() { return PasswordResetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-reset-routing.module */ "./src/app/auth.pages/password-reset/password-reset-routing.module.ts");
/* harmony import */ var _password_reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-reset.page */ "./src/app/auth.pages/password-reset/password-reset.page.ts");
/* harmony import */ var src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header.component/header.component.module */ "./src/app/components/header.component/header.component.module.ts");








let PasswordResetPageModule = class PasswordResetPageModule {
};
PasswordResetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _password_reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["PasswordResetPageRoutingModule"],
            src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"],
        ],
        declarations: [_password_reset_page__WEBPACK_IMPORTED_MODULE_6__["PasswordResetPage"]]
    })
], PasswordResetPageModule);



/***/ }),

/***/ "./src/app/auth.pages/password-reset/password-reset.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/auth.pages/password-reset/password-reset.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".forgot_section {\n  margin-top: 15vh;\n}\n\n.forgot_section_item > h4 {\n  padding: 0 0 10px 10px;\n  font-size: 25pt;\n  font-weight: bold;\n  margin: 0;\n}\n\n.forgot_section_item > p {\n  font-size: 14pt;\n  color: #A4B0BE;\n  padding-left: 10px;\n  margin: 0;\n}\n\n.Email {\n  height: 50px;\n  margin-top: 10px;\n}\n\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n\n.Email > ion-col {\n  height: 100%;\n}\n\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n}\n\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field::placeholder {\n  color: transparent;\n}\n\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\n\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.rowButton > ion-button {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 170px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.text > span {\n  display: block;\n  color: #A4B0BE;\n}\n\n.text > span:last-child {\n  color: #FBA232;\n}\n\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.text_hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvYXV0aC5wYWdlcy9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgucGFnZXMvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ09KOztBRE5JO0VBQ0ksa0JBQUE7QUNRUjs7QURUSTtFQUNJLGtCQUFBO0FDUVI7O0FEVEk7RUFDSSxrQkFBQTtBQ1FSOztBRFRJO0VBQ0ksa0JBQUE7QUNRUjs7QUROSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDUVI7O0FETEE7RUFZSSxnQ0FBQTtFQUNBLGFBQUE7QUNISjs7QURUSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ1VOOztBREpBO0VBV0ksZ0NBQUE7QUNISjs7QURQSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ1FSOztBREZJO0VBQXVCLDRCQUFBO0FDTTNCOztBREpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDUUo7O0FETkE7RUFDSSx5REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVUo7O0FEUkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ1dKOztBRFRBO0VBQ0ksY0FBQTtBQ1lKOztBRFZBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDYUo7O0FEWEE7RUFDSSxhQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoLnBhZ2VzL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3Rfc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbn1cbi5mb3Jnb3Rfc2VjdGlvbl9pdGVtID4gaDQge1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAyNXB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbn1cbi5mb3Jnb3Rfc2VjdGlvbl9pdGVtID4gcCB7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGNvbG9yOiAjQTRCMEJFO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDA7XG59XG4uRW1haWx7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pe1xuICAgIGNvbG9yOiAjQTRCMEJFO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5FbWFpbD5pb24tY29se1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5mb3JtX19sYWJlbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxN3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgLy8gZm9udC1zaXplOiA1cHQ7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICAgIGNvbG9yOiAjQTRCMEJFO1xufVxuLmZvcm1fX2ZpZWxke1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgJjpwbGFjZWhvbGRlci1zaG93biB+IC5mb3JtX19sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgIH1cbn1cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gICAgfiAuZm9ybV9fbGFiZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgIC8vICAgZm9udC1zaXplOiA1cHQ7XG4gICAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfSBcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybV9fZmllbGQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil7XG4gICAgfiAuZm9ybV9fbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgIC8vICAgZm9udC1zaXplOiA1cHQ7XG4gICAgICAgIGNvbG9yOiAjRkJBMjMyO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH0gXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG59XG5cbi5mb3JtX19maWVsZHtcbiAgICAmOnJlcXVpcmVkLCY6aW52YWxpZCB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7IH1cbn1cbi5pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJvd0J1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucm93QnV0dG9uPmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGV4dD5zcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjQTRCMEJFO1xufVxuLnRleHQ+c3BhbjpsYXN0LWNoaWxke1xuICAgIGNvbG9yOiAjRkJBMjMyO1xufVxuLmFycm93e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnRleHRfaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufSIsIi5mb3Jnb3Rfc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE1dmg7XG59XG5cbi5mb3Jnb3Rfc2VjdGlvbl9pdGVtID4gaDQge1xuICBwYWRkaW5nOiAwIDAgMTBweCAxMHB4O1xuICBmb250LXNpemU6IDI1cHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb3Jnb3Rfc2VjdGlvbl9pdGVtID4gcCB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6ICNBNEIwQkU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uRW1haWwge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmkge1xuICBjb2xvcjogI0E0QjBCRTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVtYWlsID4gaW9uLWNvbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICB3aWR0aDogOTUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybV9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmZvcm1fX2ZpZWxkOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjRkJBMjMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9ybV9fZmllbGQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbn1cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IC5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjb2xvcjogI0ZCQTIzMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucm93QnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucm93QnV0dG9uID4gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4udGV4dCA+IHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufVxuXG4uYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udGV4dF9oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth.pages/password-reset/password-reset.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/auth.pages/password-reset/password-reset.page.ts ***!
  \******************************************************************/
/*! exports provided: PasswordResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetPage", function() { return PasswordResetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");



let PasswordResetPage = class PasswordResetPage {
    constructor(keyboard) {
        this.keyboard = keyboard;
    }
    ngOnInit() {
        this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
        this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
    }
};
PasswordResetPage.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"] }
];
PasswordResetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/password-reset/password-reset.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset.page.scss */ "./src/app/auth.pages/password-reset/password-reset.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"]])
], PasswordResetPage);



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



/***/ })

}]);
//# sourceMappingURL=auth-pages-password-reset-password-reset-module-es2015.js.map