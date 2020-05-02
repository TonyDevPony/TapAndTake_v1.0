(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-pages-login-page-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/login.page/login.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/login.page/login.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content class=\"animated fadeInLeft fast\">\n  <ion-row class=\"Login\" id=\"login\">\n    <ion-col size=\"1\">\n    </ion-col>\n    <ion-col>\n      <span>Вход</span>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"Description\">\n    <ion-col size=\"1\">\n    </ion-col>\n    <ion-col>\n      <span>Заполните поля</span>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"Email\" id=\"email\">\n    <ion-col size=\"1\" class=\"icons\">\n      <i class=\"far fa-envelope\"></i>\n    </ion-col>\n    <ion-col>\n      <input type=\"email\" class=\"form__field\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"emailInp\" id='emailInp' pattern=\"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$\"/>\n      <label for=\"emailInp\" class=\"form__label\">Email</label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"Password\">\n    <ion-col size=\"1\" class=\"icons\">\n      <i class=\"fas fa-unlock-alt\"></i>\n    </ion-col>\n    <ion-col>\n      <input type=\"password\" class=\"form__field\" placeholder=\"Пароль\" minlength=\"6\" [(ngModel)]=\"password\" name=\"pass\" id='pass' />\n      <label for=\"pass\" class=\"form__label\">Пароль</label>\n      <div class=\"forgot\" (click)=\"forgotPass()\">\n        <span>ЗАБЫЛИ?</span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"rowButton\">\n    <ion-button (click)=\"Login()\">Войти\n      <div class=\"arrow\">\n      </div>\n    </ion-button>\n  </ion-row>\n  <ion-row class=\"text animated fadeInDown fast\" id=\"text\">\n    <span>Не зарегистрированы?&nbsp;</span><span (click)=\"Register()\">Регистрация</span>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/auth.pages/login.page/login-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth.pages/login.page/login-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth.pages/login.page/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/auth.pages/login.page/login.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth.pages/login.page/login.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth.pages/login.page/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth.pages/login.page/login.page.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/header.component/header.component.module */ "./src/app/components/header.component/header.component.module.ts");
/* harmony import */ var src_app_components_alert_component_alert_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/alert.component/alert.component.module */ "./src/app/components/alert.component/alert.component.module.ts");
/* harmony import */ var src_app_components_alert_component_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/alert.component/alert.component */ "./src/app/components/alert.component/alert.component.ts");











let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__["HeaderComponentModule"],
            src_app_components_alert_component_alert_component_module__WEBPACK_IMPORTED_MODULE_9__["AlertComponentModule"],
        ],
        providers: [
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"],
            src_app_components_alert_component_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth.pages/login.page/login.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth.pages/login.page/login.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Login {\n  margin-top: 15vh;\n  font-size: 30pt;\n  font-weight: bold;\n}\n\n.Description {\n  font-size: 14pt;\n  color: #A4B0BE;\n}\n\n.Email, .Password {\n  height: 50px;\n  margin-top: 10px;\n}\n\n.Email > ion-col, .Password > ion-col {\n  height: 100%;\n}\n\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n}\n\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field::placeholder {\n  color: transparent;\n}\n\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\n\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.forgot {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n  padding: 5px;\n}\n\n.forgot > span {\n  display: block;\n  font-size: 8pt;\n  color: #FAC35E;\n  font-weight: bold;\n}\n\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.rowButton > ion-button {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 120px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.text > span {\n  display: block;\n  color: #A4B0BE;\n}\n\n.text > span:last-child {\n  color: #FBA232;\n}\n\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.text_hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvYXV0aC5wYWdlcy9sb2dpbi5wYWdlL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC5wYWdlcy9sb2dpbi5wYWdlL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDT0o7O0FETkk7RUFDSSxrQkFBQTtBQ1FSOztBRFRJO0VBQ0ksa0JBQUE7QUNRUjs7QURUSTtFQUNJLGtCQUFBO0FDUVI7O0FEVEk7RUFDSSxrQkFBQTtBQ1FSOztBRE5JO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNRUjs7QURMQTtFQVVJLGdDQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRFRJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDV047O0FETkE7RUFVSSxnQ0FBQTtBQ0FKOztBRFRJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDV1I7O0FETEk7RUFBdUIsNEJBQUE7QUNTM0I7O0FEUEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNXSjs7QURUQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ1lKOztBRFZBO0VBQ0kseURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNhSjs7QURYQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2NKOztBRFpBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNlSjs7QURiQTtFQUNJLGNBQUE7QUNnQko7O0FEZEE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNpQko7O0FEZkE7RUFDSSxhQUFBO0FDa0JKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC5wYWdlcy9sb2dpbi5wYWdlL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Mb2dpbiB7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICBmb250LXNpemU6IDMwcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uRGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi5FbWFpbCwgLlBhc3N3b3Jke1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLkVtYWlsPmlvbi1jb2wsIC5QYXNzd29yZD5pb24tY29se1xuICAgIGhlaWdodDogMTAwJTtcbn1cbml7XG4gICAgY29sb3I6ICNBNEIwQkU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcm1fX2xhYmVse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgY29sb3I6ICNBNEIwQkU7XG59XG4uZm9ybV9fZmllbGR7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAmOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgfVxufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgICB+IC5mb3JtX19sYWJlbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC01cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfSBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgIGNvbG9yOiAjRkJBMjMyO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH0gXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG59XG5cbi5mb3JtX19maWVsZHtcbiAgICAmOnJlcXVpcmVkLCY6aW52YWxpZCB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7IH1cbn1cbi5pY29uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9yZ290e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLmZvcmdvdD5zcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogOHB0O1xuICAgIGNvbG9yOiAjRkFDMzVFO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm93QnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yb3dCdXR0b24+aW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZCREM5NSwgI0ZCQTIzMik7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGV4dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0PnNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNBNEIwQkU7XG59XG4udGV4dD5zcGFuOmxhc3QtY2hpbGR7XG4gICAgY29sb3I6ICNGQkEyMzI7XG59XG4uYXJyb3d7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyb3cucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4udGV4dF9oaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4iLCIuTG9naW4ge1xuICBtYXJnaW4tdG9wOiAxNXZoO1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4uRW1haWwsIC5QYXNzd29yZCB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLkVtYWlsID4gaW9uLWNvbCwgLlBhc3N3b3JkID4gaW9uLWNvbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaSB7XG4gIGNvbG9yOiAjQTRCMEJFO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybV9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTdweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi5mb3JtX19maWVsZCB7XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mb3JtX19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybV9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMgfiAuZm9ybV9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6ICNGQkEyMzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjRkJBMjMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9ybV9fZmllbGQ6cmVxdWlyZWQsIC5mb3JtX19maWVsZDppbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3Jnb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmZvcmdvdCA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4cHQ7XG4gIGNvbG9yOiAjRkFDMzVFO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvd0J1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnJvd0J1dHRvbiA+IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZCREM5NSwgI0ZCQTIzMik7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0ID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI0E0QjBCRTtcbn1cblxuLnRleHQgPiBzcGFuOmxhc3QtY2hpbGQge1xuICBjb2xvcjogI0ZCQTIzMjtcbn1cblxuLmFycm93IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9hcnJvdy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnRleHRfaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth.pages/login.page/login.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth.pages/login.page/login.page.ts ***!
  \*****************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fileStorageForUser.service/file-storage-for-user.service */ "./src/app/services/fileStorageForUser.service/file-storage-for-user.service.ts");
/* harmony import */ var src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network.connection.service/network-connection.service */ "./src/app/services/network.connection.service/network-connection.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");








const STORAGE_KEY_FOR_USER_INFO = 'user_info';
let LoginPage = class LoginPage {
    constructor(keyboard, alertController, nav, http, loadingController, toastController, plt, networkService, network, storageService) {
        this.keyboard = keyboard;
        this.alertController = alertController;
        this.nav = nav;
        this.http = http;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.plt = plt;
        this.networkService = networkService;
        this.network = network;
        this.storageService = storageService;
        this.email = '';
        this.password = '';
        this.err_message = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            // Выполняется проверка на покдключение к интернету 
            if (!this.networkService.initializeConnection()) {
                let massage = '<i class="fas fa-exclamation-circle"></i>&#32;Подключение к интернету отсутсвует';
                this.openAlert(massage);
                this.conection = false;
            }
            else {
                this.conection = true;
            }
            this.network.onConnect().subscribe(() => {
                this.conection = true;
            });
            this.network.onDisconnect().subscribe(() => {
                this.conection = false;
            });
        });
        this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
        this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
    }
    forgotPass() {
        this.nav.navigateRoot(['/forgot-password']);
    }
    Register() {
        this.nav.navigateRoot(['/register']);
    }
    checkConection() {
        let massage = '<i class="fas fa-exclamation-circle"></i>&#32;Проверте подключение к интернету';
        if (this.conection) {
            return true;
        }
        this.openAlert(massage);
        return false;
    }
    validate() {
        let form_input_invalid = document.querySelectorAll('.form__field:invalid');
        let count_err = 0;
        let form_input = document.querySelectorAll('input');
        // НА ВРЕМЯ РАЗРАБОТКИ-------
        if (form_input[0].value == 'admin' || form_input[1].value == 'admin') {
            return true;
        }
        //---------------------------
        if (form_input[0].value == '' || form_input[1].value == '') {
            this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Заполните все поля');
            count_err++;
        }
        else if (form_input_invalid.length == 2) {
            this.err_message.push(`<i class="fas fa-exclamation-circle"></i>&#32;Проверте правильность введеных данных: 
                            <br> Неверно введен логин... 
                            <br> Пароль меньше 6 символов...`);
            count_err++;
        }
        else if (form_input_invalid.length == 1 && form_input_invalid[0].id == 'emailInp') {
            this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Неверно введен email... ');
            count_err++;
        }
        else if (form_input_invalid.length == 1 && form_input_invalid[0].id == 'pass') {
            this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Пароль меньше 6 символов...');
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
    Login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password } = this;
            this.data = { email, password };
            if (this.checkConection() && this.validate()) {
                const loading = yield this.loadingController.create({
                    cssClass: 'spinerColor',
                    message: "Вход...",
                    spinner: "lines",
                });
                yield loading.present();
                this.http.post('https://sc.grekagreka25.had.su/auth/in', this.data, {}).then(data => {
                    loading.dismiss();
                    let dataJson = JSON.parse(data.data);
                    if (dataJson.hasOwnProperty('error')) {
                        this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Такого пользователя не существует!!!');
                        this.openAlert(this.err_message);
                        return;
                    }
                    if (this.err_message.length == 0) {
                        let toStorageData = {
                            id_user: dataJson.id_user,
                            user_sid: dataJson.sid,
                        };
                        this.storageService.setUserToStorage(STORAGE_KEY_FOR_USER_INFO, JSON.stringify(toStorageData));
                        this.goHome(dataJson);
                    }
                });
            }
        });
    }
    goHome(data) {
        this.nav.navigateRoot(['/home']);
        setTimeout(() => {
            this.presentToast(data.name);
        }, 300);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_6__["NetworkConnectionService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_5__["FileStorageForUserService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth.pages/login.page/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/auth.pages/login.page/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        src_app_services_network_connection_service_network_connection_service__WEBPACK_IMPORTED_MODULE_6__["NetworkConnectionService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
        src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_5__["FileStorageForUserService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=auth-pages-login-page-login-module-es2015.js.map