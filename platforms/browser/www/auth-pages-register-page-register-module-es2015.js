(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-pages-register-page-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/register.page/register.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/register.page/register.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content class=\"animated fadeInLeft fast\">\n\n\n    <ion-row class=\"Register\" id=\"Register\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col>\n          <span>Регистрация</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"Description\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col>\n          <p>Заполните поля для регистрации</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-signature\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"text\" class=\"form__field\" [(ngModel)]=\"name\" placeholder=\"full name\" name=\"full_name\" id='full_name' pattern=\"^[^-0-9]{1,}$\"/>\n            <label for=\"full_name\" class=\"form__label\">Полное имя</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"far fa-envelope\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"email\" class=\"form__field\" placeholder=\"Email\"  [(ngModel)]=\"email\" name=\"Email\" id='emailInp' pattern=\"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$\"/>\n            <label for=\"emailInp\" class=\"form__label\">Email</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-mobile-alt\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"tel\" [textMask]=\"{mask: mask}\" class=\"form__field\" [(ngModel)]=\"phone\" placeholder=\"phone_number\" name=\"phone_number\" id='phone_number' pattern=\"\\(\\d{3,5}\\)\\s+\\d{3}-\\d{2}-\\d{2}\"/>\n            <label for=\"phone_number\" class=\"form__label\">Номер телефона</label>\n        </ion-col>\n      </ion-row>\n      \n\n\n      <ion-row class=\"form_item\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-unlock-alt\"></i>\n        </ion-col>\n        <ion-col>\n          <input type=\"password\" class=\"form__field\" placeholder=\"Пароль\" minlength=\"6\" [(ngModel)]=\"password\" name=\"pass\" id='pass' />\n          <label for=\"pass\" class=\"form__label\">Пароль</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-unlock-alt\"></i>\n        </ion-col>\n        <ion-col>\n          <input type=\"password\" class=\"form__field\" placeholder=\"Подтверждения пароля\" minlength=\"6\" [(ngModel)]=\"confirmpass\" name=\"confirm_pass\" id='confirm_pass' />\n          <label for=\"confirm_pass\" class=\"form__label\">Подтверждения пароля</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"rowButton\">\n        <ion-button (click)=\"Register()\">Зарегестрироватся\n          <div class=\"arrow\">\n          </div>\n        </ion-button>\n      </ion-row>\n      <ion-row class=\"text animated fadeInDown fast\" id=\"text\">\n        <span>Уже есть аккаунт?&nbsp;</span><span (click)=\"Login()\">Войти</span>\n      </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/auth.pages/register.page/register-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth.pages/register.page/register-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/auth.pages/register.page/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/auth.pages/register.page/register.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth.pages/register.page/register.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/auth.pages/register.page/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth.pages/register.page/register.page.ts");
/* harmony import */ var _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header.component/header.component.module */ "./src/app/components/header.component/header.component.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);









let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"],
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/auth.pages/register.page/register.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/auth.pages/register.page/register.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Register {\n  margin-top: 15%;\n  font-size: 26pt;\n  font-weight: bold;\n}\n\n.Description {\n  font-size: 14pt;\n  color: #A4B0BE;\n}\n\n.form_item {\n  height: 50px;\n  margin-top: 10px;\n}\n\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n}\n\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field::placeholder {\n  color: transparent;\n}\n\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\n\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.forgot {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n  padding: 5px;\n}\n\n.forgot > span {\n  display: block;\n  font-size: 8pt;\n  color: #FAC35E;\n  font-weight: bold;\n}\n\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.rowButton > ion-button {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 240px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.text > span {\n  display: block;\n  color: #A4B0BE;\n}\n\n.text > span:last-child {\n  color: #FBA232;\n}\n\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.text_hide {\n  display: none;\n}\n\n.role {\n  color: #FBA232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvYXV0aC5wYWdlcy9yZWdpc3Rlci5wYWdlL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC5wYWdlcy9yZWdpc3Rlci5wYWdlL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNLSjs7QURKSTtFQUNJLGtCQUFBO0FDTVI7O0FEUEk7RUFDSSxrQkFBQTtBQ01SOztBRFBJO0VBQ0ksa0JBQUE7QUNNUjs7QURQSTtFQUNJLGtCQUFBO0FDTVI7O0FESkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ01SOztBREhBO0VBWUksZ0NBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUEk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QUNRTjs7QURGQTtFQVdJLGdDQUFBO0FDTEo7O0FETEk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNUjs7QURBSTtFQUF1Qiw0QkFBQTtBQ0kzQjs7QURGQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNPSjs7QURKQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDT0o7O0FETEE7RUFDSSx5REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1FKOztBRE5BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ1VKOztBRFJBO0VBQ0ksY0FBQTtBQ1dKOztBRFRBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDWUo7O0FEVkE7RUFDSSxhQUFBO0FDYUo7O0FEWEE7RUFDSSxjQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoLnBhZ2VzL3JlZ2lzdGVyLnBhZ2UvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlZ2lzdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgZm9udC1zaXplOiAyNnB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLkRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgY29sb3I6ICNBNEIwQkU7XG59XG4uZm9ybV9pdGVte1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaXtcbiAgICBjb2xvcjogI0E0QjBCRTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uZm9ybV9fbGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIC8vIGZvbnQtc2l6ZTogNXB0O1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi5mb3JtX19maWVsZHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMge1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgY29sb3I6ICNGQkEyMzI7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH0gXG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xufVxuXG4uZm9ybV9fZmllbGR7XG4gICAgJjpyZXF1aXJlZCwmOmludmFsaWQgeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkOyB9XG59XG4uaWNvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcmdvdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5mb3Jnb3Q+c3BhbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDhwdDtcbiAgICBjb2xvcjogI0ZBQzM1RTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvd0J1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucm93QnV0dG9uPmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGV4dD5zcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjQTRCMEJFO1xufVxuLnRleHQ+c3BhbjpsYXN0LWNoaWxke1xuICAgIGNvbG9yOiAjRkJBMjMyO1xufVxuLmFycm93e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnRleHRfaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnJvbGV7XG4gICAgY29sb3I6ICNGQkEyMzI7XG59XG4iLCIuUmVnaXN0ZXIge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMjZwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5EZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi5mb3JtX2l0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmkge1xuICBjb2xvcjogI0E0QjBCRTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICB3aWR0aDogOTUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybV9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmZvcm1fX2ZpZWxkOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjRkJBMjMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9ybV9fZmllbGQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbn1cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IC5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjb2xvcjogI0ZCQTIzMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9yZ290IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5mb3Jnb3QgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBjb2xvcjogI0ZBQzM1RTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb3dCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yb3dCdXR0b24gPiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dCA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi50ZXh0ID4gc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICNGQkEyMzI7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyb3cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50ZXh0X2hpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucm9sZSB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth.pages/register.page/register.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth.pages/register.page/register.page.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");






let RegisterPage = class RegisterPage {
    constructor(activatedRoute, keyboard, nav, http, alertController, loadingController, toastController) {
        this.activatedRoute = activatedRoute;
        this.keyboard = keyboard;
        this.nav = nav;
        this.http = http;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
        this.regExp = '^\([0-9]{3}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}\s$';
        this.err_message = [];
    }
    ngOnInit() {
        this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
        this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
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
            this.err_message = [];
        });
    }
    validate(data) {
        let form_input = document.querySelectorAll('input');
        let form_input_invalid = document.querySelectorAll('.form__field:invalid');
        let count_err = 0;
        form_input.forEach(item => {
            item;
            if (item.value == '' && count_err == 0) {
                this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Не все поля заполнены');
                count_err++;
            }
        });
        if (form_input_invalid.length == 5) {
            this.err_message.push(`<i class="fas fa-exclamation-circle"></i>&#32;Проверте правильность введеных данных: 
                              <br> Неверно введен логин...
                              <br> Неверный формат телефона... 
                              <br> Пароль меньше 6 символов...`);
            count_err++;
        }
        form_input_invalid.forEach(item => {
            if (item.id == 'full_name') {
                this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пожалуйста, введите настоящее имя');
                count_err++;
            }
            if (item.id == 'emailInp') {
                this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Неверно введен email');
                count_err++;
            }
            if (item.id == 'phone_number') {
                this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Неверно введен номер телефона');
                count_err++;
            }
            if (item.id == 'pass') {
                this.err_message.push('<br/><i class="fas fa-exclamation-circle"></i>&#32;Пароль меньше 6 символов');
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
        }
        else {
            return true;
        }
    }
    presentToast(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `Приветсвую, ${name}`,
                duration: 1000,
                cssClass: 'toast',
            });
            toast.present();
        });
    }
    Register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { name, email, phone, password, confirmpass } = this;
            this.data = { name, email, phone, password, confirmpass };
            if (this.validate(this.data)) {
                console.log(this.data);
                const loading = yield this.loadingController.create({
                    cssClass: 'spinerColor',
                    message: "Вход...",
                    spinner: "lines",
                });
                yield loading.present();
                this.http.post('https://sc.grekagreka25.had.su/reg/in', this.data, {}).then(data => {
                    loading.dismiss();
                    console.log(data.data);
                    let dataJson = JSON.parse(data.data);
                    console.log(dataJson);
                    if (dataJson.error == 902) {
                        this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Такой пользователь уже существует!!!');
                        this.openAlert(this.err_message);
                        return;
                    }
                    if (this.err_message.length == 0) {
                        this.nav.navigateRoot(['/home']);
                        setTimeout(() => {
                            this.presentToast(dataJson.name);
                        }, 300);
                    }
                }).catch(error => {
                    console.log(error.error);
                });
            }
        });
    }
    Login() {
        this.nav.navigateRoot(['/login']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/register.page/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/auth.pages/register.page/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=auth-pages-register-page-register-module-es2015.js.map