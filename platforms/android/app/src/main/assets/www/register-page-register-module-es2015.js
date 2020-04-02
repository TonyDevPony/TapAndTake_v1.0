(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-page-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register.page/register.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register.page/register.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content class=\"animated fadeInLeft fast\">\n\n\n    <ion-row class=\"Register\" id=\"Register\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col>\n          <span>Регистрация</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"Description\">\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col>\n          <p>Зарегестрирйтесь как  <span (click)=\"register_alert()\" class=\"role\">{{ this.role == 'client' ? 'Клиент' : 'Бизнес' }}</span></p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-signature\"></i>\n        </ion-col>\n        <ion-col>\n          <ng-container *ngIf=\"this.role == 'client'\" >\n            <input type=\"text\" class=\"form__field\" placeholder=\"full name\" name=\"full_name\" id='full_name'  pattern=\"/^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/\"/>\n            <label for=\"full_name\" class=\"form__label\">Полное имя</label>\n          </ng-container>\n          <ng-container *ngIf=\"this.role == 'bisnesess'\">\n            <input type=\"text\" class=\"form__field\" placeholder=\"Name\" name=\"Name\" id='Name_of_bussiness' />\n            <label for=\"Name_of_bussiness\" class=\"form__label\">Название</label>\n          </ng-container>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"far fa-envelope\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"email\" class=\"form__field\" placeholder=\"Email\" name=\"Email\" id='Email' />\n            <label for=\"Email\" class=\"form__label\">Email</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\" id=\"email\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-mobile-alt\"></i>\n        </ion-col>\n        <ion-col>\n            <input type=\"number\" class=\"form__field\" placeholder=\"phone_number\" name=\"phone_number\" id='phone_number' />\n            <label for=\"phone_number\" class=\"form__label\">Номер телефона</label>\n        </ion-col>\n      </ion-row>\n      \n\n\n      <ion-row class=\"form_item\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-unlock-alt\"></i>\n        </ion-col>\n        <ion-col>\n          <input type=\"password\" class=\"form__field\" placeholder=\"Пароль\" name=\"pass\" id='pass' />\n          <label for=\"pass\" class=\"form__label\">Пароль</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"form_item\">\n        <ion-col size=\"1\" class=\"icons\">\n          <i class=\"fas fa-unlock-alt\"></i>\n        </ion-col>\n        <ion-col>\n          <input type=\"password\" class=\"form__field\" placeholder=\"Подтверждения пароля\" name=\"confirm_pass\" id='confirm_pass' />\n          <label for=\"confirm_pass\" class=\"form__label\">Подтверждения пароля</label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"rowButton\">\n        <ion-button (click)=\"goHome()\">Зарегестрироватся\n          <div class=\"arrow\">\n          </div>\n        </ion-button>\n      </ion-row>\n      <ion-row class=\"text\" id=\"text\">\n        <span>Уже есть аккаунт?&nbsp;</span><span (click)=\"Login()\">Войти</span>\n      </ion-row>\n</ion-content>\n<app-register-alert></app-register-alert>");

/***/ }),

/***/ "./src/app/register.page/register-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/register.page/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register.page/register.page.ts");




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

/***/ "./src/app/register.page/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/register.page/register.module.ts ***!
  \**************************************************/
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
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register.page/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register.page/register.page.ts");
/* harmony import */ var _header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header.component/header.component.module */ "./src/app/header.component/header.component.module.ts");
/* harmony import */ var _register_alert_component_register_alert_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../register-alert.component/register-alert.component.module */ "./src/app/register-alert.component/register-alert.component.module.ts");









let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"],
            _header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"],
            _register_alert_component_register_alert_component_module__WEBPACK_IMPORTED_MODULE_8__["RegisterAlertComponentModule"],
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register.page/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/register.page/register.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Register {\n  margin-top: 15%;\n  font-size: 26pt;\n  font-weight: bold;\n}\n\n.Description {\n  font-size: 14pt;\n  color: #A4B0BE;\n}\n\n.form_item {\n  height: 50px;\n  margin-top: 10px;\n}\n\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n}\n\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field::placeholder {\n  color: transparent;\n}\n\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\n\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.forgot {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n  padding: 5px;\n}\n\n.forgot > span {\n  display: block;\n  font-size: 8pt;\n  color: #FAC35E;\n  font-weight: bold;\n}\n\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.rowButton > ion-button {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 240px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.text > span {\n  display: block;\n  color: #A4B0BE;\n}\n\n.text > span:last-child {\n  color: #FBA232;\n}\n\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.text_hide {\n  display: none;\n}\n\n.role {\n  color: #FBA232;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvcmVnaXN0ZXIucGFnZS9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyLnBhZ2UvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREpJO0VBQ0ksa0JBQUE7QUNNUjs7QURQSTtFQUNJLGtCQUFBO0FDTVI7O0FEUEk7RUFDSSxrQkFBQTtBQ01SOztBRFBJO0VBQ0ksa0JBQUE7QUNNUjs7QURKSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDTVI7O0FESEE7RUFZSSxnQ0FBQTtFQUNBLGFBQUE7QUNMSjs7QURQSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ1FOOztBREZBO0VBV0ksZ0NBQUE7QUNMSjs7QURMSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ01SOztBREFJO0VBQXVCLDRCQUFBO0FDSTNCOztBREZBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ09KOztBREpBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNPSjs7QURMQTtFQUNJLHlEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDUUo7O0FETkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDVUo7O0FEUkE7RUFDSSxjQUFBO0FDV0o7O0FEVEE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNZSjs7QURWQTtFQUNJLGFBQUE7QUNhSjs7QURYQTtFQUNJLGNBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLnBhZ2UvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlZ2lzdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgZm9udC1zaXplOiAyNnB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLkRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgY29sb3I6ICNBNEIwQkU7XG59XG4uZm9ybV9pdGVte1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaXtcbiAgICBjb2xvcjogI0E0QjBCRTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uZm9ybV9fbGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIC8vIGZvbnQtc2l6ZTogNXB0O1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi5mb3JtX19maWVsZHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMge1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgY29sb3I6ICNGQkEyMzI7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH0gXG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xufVxuXG4uZm9ybV9fZmllbGR7XG4gICAgJjpyZXF1aXJlZCwmOmludmFsaWQgeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkOyB9XG59XG4uaWNvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcmdvdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5mb3Jnb3Q+c3BhbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDhwdDtcbiAgICBjb2xvcjogI0ZBQzM1RTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvd0J1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucm93QnV0dG9uPmlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGV4dD5zcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjQTRCMEJFO1xufVxuLnRleHQ+c3BhbjpsYXN0LWNoaWxke1xuICAgIGNvbG9yOiAjRkJBMjMyO1xufVxuLmFycm93e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnRleHRfaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnJvbGV7XG4gICAgY29sb3I6ICNGQkEyMzI7XG59XG4iLCIuUmVnaXN0ZXIge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMjZwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5EZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi5mb3JtX2l0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmkge1xuICBjb2xvcjogI0E0QjBCRTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICB3aWR0aDogOTUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybV9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmZvcm1fX2ZpZWxkOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjRkJBMjMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9ybV9fZmllbGQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbn1cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IC5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjb2xvcjogI0ZCQTIzMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9yZ290IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5mb3Jnb3QgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBjb2xvcjogI0ZBQzM1RTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb3dCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yb3dCdXR0b24gPiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dCA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi50ZXh0ID4gc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICNGQkEyMzI7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYXJyb3cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50ZXh0X2hpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucm9sZSB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register.page/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/register.page/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let RegisterPage = class RegisterPage {
    constructor(activatedRoute, nav) {
        this.activatedRoute = activatedRoute;
        this.nav = nav;
    }
    ngOnInit() {
        this.role = this.activatedRoute.snapshot.paramMap.get('role');
        console.log(this.role);
    }
    Login() {
        this.nav.navigateRoot(['/login']);
    }
    register_alert() {
        document.querySelector('app-register-alert').firstElementChild.classList.add('active');
        document.querySelector('app-register-alert').lastElementChild.classList.add('background_active');
    }
    goHome() {
        this.nav.navigateRoot(['/home']);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register.page/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register.page/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-page-register-module-es2015.js.map