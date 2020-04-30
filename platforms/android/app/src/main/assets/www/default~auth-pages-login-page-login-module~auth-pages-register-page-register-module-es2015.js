(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-pages-login-page-login-module~auth-pages-register-page-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert.component/alert.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert.component/alert.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert animated fadeIn faster\">\n  <ion-row class=\"alert_header\">\n    <h4>Введите код</h4>\n  </ion-row>\n  <ion-row class=\"alert_body\">\n    <input type=\"text\" class=\"input_form\" placeholder=\"Код подтверждения\"  [(ngModel)]=\"code\" name=\"code\" id='code' maxlength=\"12\">\n  </ion-row>\n  <ion-row class=\"description\">\n    <p><i class=\"fas fa-exclamation-circle\"></i>&#32;Вам на почту был отпрален код, пожалуйста введите его, в течении 10 минут.</p>\n  </ion-row>\n  <ion-row class=\"alert_footer\">\n    <ion-button class=\"submit_button\" (click)=\"sendCode()\">Подтвердить</ion-button>\n  </ion-row>\n</div>\n\n<div class=\"background_opacity\" (click)=\"closeModal()\">\n\n</div>");

/***/ }),

/***/ "./src/app/components/alert.component/alert.component.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/alert.component/alert.component.module.ts ***!
  \**********************************************************************/
/*! exports provided: AlertComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponentModule", function() { return AlertComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.component */ "./src/app/components/alert.component/alert.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AlertComponentModule = class AlertComponentModule {
};
AlertComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["TextMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]]
    })
], AlertComponentModule);



/***/ }),

/***/ "./src/app/components/alert.component/alert.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/alert.component/alert.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert {\n  width: 95%;\n  height: 290px;\n  background-color: #fff;\n  position: absolute;\n  border-radius: 20px;\n  box-shadow: 0px 3px 20px 0px rgba(77, 77, 77, 0.52);\n  z-index: 1000;\n  display: none;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.background_opacity {\n  width: 100%;\n  height: 100%;\n  background-color: #999999;\n  position: absolute;\n  z-index: 700;\n  top: 0;\n  display: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.active {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n.background_active {\n  display: block;\n  opacity: 0.5;\n}\n\n.alert_header > h4 {\n  color: #484848;\n}\n\n.alert_header, .alert_footer, .alert_body {\n  width: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.alert_body {\n  padding-left: 10px;\n  margin-top: -35px;\n}\n\n.submit_button {\n  position: absolute;\n  height: 50px;\n  width: 150px;\n  bottom: 10px;\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.error {\n  color: #FBA232;\n  font-size: 14pt;\n  font-weight: bold;\n  width: 90%;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #A4B0BE;\n}\n\n.error_icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.fas {\n  color: #A4B0BE;\n}\n\n.description > p {\n  text-align: center;\n  color: #A4B0BE;\n}\n\n.input_form {\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  font-size: 14pt;\n  text-align: center;\n}\n\n.input_form::-webkit-input-placeholder {\n  text-align: center;\n}\n\n.input_form::-moz-placeholder {\n  text-align: center;\n}\n\n.input_form::-ms-input-placeholder {\n  text-align: center;\n}\n\n.input_form::placeholder {\n  text-align: center;\n}\n\n.input_form:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvY29tcG9uZW50cy9hbGVydC5jb21wb25lbnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQuY29tcG9uZW50L2FsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSxtREFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQVMsU0FBQTtFQUFXLFFBQUE7QUNJaEM7O0FERkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0FDSUo7O0FERkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUEsZUFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDT0o7O0FETEE7RUFFSSxrQkFBQTtFQUVBLGlCQUFBO0FDTUo7O0FESkE7RUFDRyxrQkFBQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDUUo7O0FETkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1NKOztBRFBBO0VBQ0ksY0FBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDV0o7O0FEVEE7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0FDYUo7O0FEZEE7RUFDSSxrQkFBQTtBQ2FKOztBRGRBO0VBQ0ksa0JBQUE7QUNhSjs7QURkQTtFQUNJLGtCQUFBO0FDYUo7O0FEWEE7RUFDSSxhQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsZXJ0LmNvbXBvbmVudC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggMjBweCAwcHggcmdiYSg3NywgNzcsIDc3LCAwLjUyKTtcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAzcHggMjBweCAwcHggcmdiYSg3NywgNzcsIDc3LCAwLjUyKTtcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDBweCAzcHggMjBweCAwcHggcmdiYSg3NywgNzcsIDc3LCAwLjUyKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDsgbGVmdDogMDsgYm90dG9tOiAwOyByaWdodDogMDtcbn1cbi5iYWNrZ3JvdW5kX29wYWNpdHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDcwMDtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG4uYWN0aXZle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5iYWNrZ3JvdW5kX2FjdGl2ZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAwLjU7XG59XG4uYWxlcnRfaGVhZGVyPmg0e1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuLmFsZXJ0X2hlYWRlciwgLmFsZXJ0X2Zvb3RlciwgLmFsZXJ0X2JvZHl7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWxlcnRfYm9keSB7XG4gICAgXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xufVxuLnN1Ym1pdF9idXR0b257XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5lcnJvcntcbiAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xufVxuLmVycm9yX2ljb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZhc3tcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi5kZXNjcmlwdGlvbiA+IHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi5pbnB1dF9mb3JtIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnB1dF9mb3JtOjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlucHV0X2Zvcm06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59IiwiLmFsZXJ0IHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAyOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggMjBweCAwcHggcmdiYSg3NywgNzcsIDc3LCAwLjUyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDIwcHggMHB4IHJnYmEoNzcsIDc3LCA3NywgMC41Mik7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMjBweCAwcHggcmdiYSg3NywgNzcsIDc3LCAwLjUyKTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5iYWNrZ3JvdW5kX29wYWNpdHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDcwMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYmFja2dyb3VuZF9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uYWxlcnRfaGVhZGVyID4gaDQge1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmFsZXJ0X2hlYWRlciwgLmFsZXJ0X2Zvb3RlciwgLmFsZXJ0X2JvZHkge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbGVydF9ib2R5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbn1cblxuLnN1Ym1pdF9idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3R0b206IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNGQkEyMzI7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xufVxuXG4uZXJyb3JfaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmFzIHtcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbi5kZXNjcmlwdGlvbiA+IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4uaW5wdXRfZm9ybSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXRfZm9ybTo6cGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dF9mb3JtOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/alert.component/alert.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/alert.component/alert.component.ts ***!
  \***************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service/auth.service */ "./src/app/services/auth.service/auth.service.ts");






let AlertComponent = class AlertComponent {
    constructor(router, nav, http, alertController, authService, toastController) {
        this.router = router;
        this.nav = nav;
        this.http = http;
        this.alertController = alertController;
        this.authService = authService;
        this.toastController = toastController;
        this.err_message = [];
    }
    ngOnInit() {
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
    sendCode() {
        const { code } = this;
        this.data = {
            code,
        };
        this.http.post('https://sc.grekagreka25.had.su/reg/confirm/', this.data, {}).then(data => {
            let parseData = JSON.parse(data.data);
            if (parseData.error == 907) {
                this.err_message.push('<i class="fas fa-exclamation-circle"></i>&#32;Не верно введен код подтвержения или код просрочен');
                this.openAlert(this.err_message);
            }
            else {
                this.authService.setUser(parseData);
                this.nav.navigateRoot(['/home']);
                setTimeout(() => {
                    this.presentToast(parseData.name);
                }, 300);
            }
        });
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alertDiv = document.querySelector('.alert');
            let backgroundDiv = document.querySelector('.background_opacity');
            backgroundDiv.setAttribute('style', "opacity: 0;");
            alertDiv.classList.remove('active');
            backgroundDiv.classList.remove('background_active');
            backgroundDiv.setAttribute('style', '');
        });
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert.component/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/components/alert.component/alert.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], AlertComponent);



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
//# sourceMappingURL=default~auth-pages-login-page-login-module~auth-pages-register-page-register-module-es2015.js.map