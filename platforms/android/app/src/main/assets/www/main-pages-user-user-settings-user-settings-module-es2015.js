(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-user-user-settings-user-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-settings/user-settings.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-settings/user-settings.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n  <section>\n    <ion-row>\n      <h4>Настройки</h4>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"user_name\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"far fa-user\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"text\" class=\"form__field\" placeholder=\"FullName\" name=\"fullname\" id='fullname' [value]=\"this.userSettingsInfo.name\"/> <!--[value]=\"this.userSettingsInfo.name\"-->\n        <label for=\"fullname\" class=\"form__label\">Имя/Фамилия</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInRight fast\" id=\"email\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"far fa-envelope\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"text\" class=\"form__field\" placeholder=\"Email\" name=\"emailInp\" id='emailInp'  pattern=\"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$\" [value]=\"this.userSettingsInfo.email\"/> <!--[value]=\"this.userSettingsInfo.email\"-->\n        <label for=\"emailInp\" class=\"form__label\">Email</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"phone_number\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"fas fa-mobile-alt\"></i>\n      </ion-col>\n      <ion-col>\n        <input [textMask]=\"{mask: mask}\" type=\"tel\" class=\"form__field\" placeholder=\"(___)___-___\" name=\"Tellephone\" id='tellephone'  pattern=\"^\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}$\" [value]=\"this.userSettingsInfo.phone\"/><!--[value]=\"this.userSettingsInfo.phone\"-->\n        <label for=\"tellephone\" class=\"form__label\">Телефон</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInRight fast\" id=\"birthday\">\n      <ion-col size=\"1\" class=\"icons date\">\n        <i class=\"far fa-calendar-alt\"></i>\n      </ion-col>\n      <ion-col>\n        <ion-label class=\"date_label\">Дата рождения</ion-label>\n        <ion-datetime displayFormat=\"MM.DD.YYYY\" placeholder=\"Выберете Дату\" cancelText=\"Отменить\" doneText=\"Применить\"></ion-datetime>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"gender\">\n      <ion-col size=\"1\" class=\"icons gender\">\n        <i class=\"fas fa-venus-mars\"></i>\n      </ion-col>\n      <ion-col>\n        <ion-label class=\"gender_label\">Пол</ion-label>\n        <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Не выбрано\" class=\"select_button\" cancelText=\"Отменить\">\n            <ion-select-option value=\"male\">Мужской</ion-select-option>\n            <ion-select-option value=\"female\">Женский</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"rowButton animated fadeInRight fast\">\n      <ion-button class=\"logOutButton\" (click)=\"Logout()\">Выйти\n        <div class=\"logOutIcon\">\n        </div>\n      </ion-button>\n      <ion-button class=\"saveButton\" (click)=\"saveSettings()\">Сохранить\n        <div class=\"arrow\">\n        </div>\n      </ion-button>\n    </ion-row>\n    <ion-row class=\"text animated fadeInDown fast\" id=\"text\">\n      <span>Возникли проблемы?&nbsp;</span><span>Тех. поддержка</span>\n    </ion-row>\n  </section>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/main.pages/user/user-settings/user-settings-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main.pages/user/user-settings/user-settings-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UserSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageRoutingModule", function() { return UserSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-settings.page */ "./src/app/main.pages/user/user-settings/user-settings.page.ts");




const routes = [
    {
        path: '',
        component: _user_settings_page__WEBPACK_IMPORTED_MODULE_3__["UserSettingsPage"]
    }
];
let UserSettingsPageRoutingModule = class UserSettingsPageRoutingModule {
};
UserSettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserSettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/main.pages/user/user-settings/user-settings.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main.pages/user/user-settings/user-settings.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPageModule", function() { return UserSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-settings-routing.module */ "./src/app/main.pages/user/user-settings/user-settings-routing.module.ts");
/* harmony import */ var _user_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-settings.page */ "./src/app/main.pages/user/user-settings/user-settings.page.ts");
/* harmony import */ var src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header.component/header.component.module */ "./src/app/components/header.component/header.component.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);









let UserSettingsPageModule = class UserSettingsPageModule {
};
UserSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSettingsPageRoutingModule"],
            src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"],
        ],
        declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_6__["UserSettingsPage"]]
    })
], UserSettingsPageModule);



/***/ }),

/***/ "./src/app/main.pages/user/user-settings/user-settings.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main.pages/user/user-settings/user-settings.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  font-size: 20pt;\n  font-weight: bold;\n  padding: 20px 0 5px 10px;\n  color: #484848;\n}\n\n.section_row_item {\n  height: 50px;\n  margin-top: 10px;\n}\n\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n  color: #484848;\n}\n\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field::placeholder {\n  color: transparent;\n}\n\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\ninput[type=tel]:focus::-webkit-input-placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\ninput[type=tel]:focus::-moz-placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\ninput[type=tel]:focus::-ms-input-placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\ninput[type=tel]:focus::placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\n\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n\ninput[type=date] {\n  background: none;\n}\n\n.date_label, .gender_label {\n  color: #FBA232;\n}\n\n.date, .gender {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-bottom: 15px;\n}\n\nion-datetime {\n  padding: 10px 0 5px 0;\n  width: 95%;\n  border-bottom: 1px solid #A4B0BE;\n  font-size: 14pt;\n  --placeholder-color: #A4B0BE;\n}\n\nion-datetime:not(::-webkit-input-placeholder) {\n  color: red;\n}\n\nion-datetime:not(::-moz-placeholder) {\n  color: red;\n}\n\nion-datetime:not(::-ms-input-placeholder) {\n  color: red;\n}\n\nion-datetime:not(::placeholder) {\n  color: red;\n}\n\nion-datetime::-webkit-input-placeholder {\n  color: red;\n}\n\nion-datetime::-moz-placeholder {\n  color: red;\n}\n\nion-datetime::-ms-input-placeholder {\n  color: red;\n}\n\nion-datetime::placeholder {\n  color: red;\n}\n\n#gender {\n  margin-top: 30px;\n}\n\n.select_button {\n  width: 95%;\n  padding: 10px 0 5px 0;\n  border-bottom: 1px solid #A4B0BE;\n}\n\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.rowButton > .saveButton {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 160px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.logOutButton {\n  height: 45px;\n  width: 120px;\n  font-weight: bold;\n  position: absolute;\n  color: #484848;\n  left: 30px;\n  --background: none;\n  --background-activated: none;\n  --background-focused: none;\n  --box-shadow: none;\n  --border-radius: 20px;\n}\n\n.logOutIcon {\n  width: 15px;\n  height: 15px;\n  margin-left: 10px;\n  background-image: url('logout.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.text > span {\n  display: block;\n  color: #A4B0BE;\n}\n\n.text > span:last-child {\n  color: #FBA232;\n}\n\n.gender_button_select {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvbWFpbi5wYWdlcy91c2VyL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4ucGFnZXMvdXNlci91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREZJO0VBQ0ksa0JBQUE7QUNJUjs7QURMSTtFQUNJLGtCQUFBO0FDSVI7O0FETEk7RUFDSSxrQkFBQTtBQ0lSOztBRExJO0VBQ0ksa0JBQUE7QUNJUjs7QURGSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDSVI7O0FEREE7RUFZSSxnQ0FBQTtFQUNBLGFBQUE7QUNQSjs7QURMSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ01OOztBREFBO0VBV0ksZ0NBQUE7QUNQSjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ0lSOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FETEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRExBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURBSTtFQUF1Qiw0QkFBQTtBQ0kzQjs7QURGQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0FDUUo7O0FETkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esb0JBQUE7QUNTSjs7QUROQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDU0o7O0FEUEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEUEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEUkE7RUFDSSxnQkFBQTtBQ1dKOztBRFJBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNXSjs7QURUQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDWUo7O0FEVkE7RUFDSSx5REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2FKOztBRFZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDYUo7O0FEWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNjSjs7QURYQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ2NKOztBRFpBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZUo7O0FEYkE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ2dCSjs7QURkQTtFQUNJLGNBQUE7QUNpQko7O0FEZkE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDa0JKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi5wYWdlcy91c2VyL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNHtcbiAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMjBweCAwIDVweCAxMHB4O1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuLnNlY3Rpb25fcm93X2l0ZW17XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZm9ybV9fbGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTdweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIC8vIGZvbnQtc2l6ZTogNXB0O1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi5mb3JtX19maWVsZHtcbiAgICB3aWR0aDogOTUlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICY6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICB9XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMge1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgY29sb3I6ICNGQkEyMzI7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH0gXG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pe1xuICAgIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAvLyAgIGZvbnQtc2l6ZTogNXB0O1xuICAgICAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG59XG5pbnB1dFt0eXBlPVwidGVsXCJdOmZvY3VzOjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICBmb250LXNpemU6IDE0cHQ7XG59XG4uZm9ybV9fZmllbGR7XG4gICAgJjpyZXF1aXJlZCwmOmludmFsaWQgeyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkOyB9XG59XG4uaWNvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaXtcbiAgICBjb2xvcjogI0E0QjBCRTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmRhdGVfbGFiZWwsIC5nZW5kZXJfbGFiZWx7XG4gICAgY29sb3I6ICNGQkEyMzI7XG59XG4uZGF0ZSwgLmdlbmRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgNXB4IDA7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0E0QjBCRTtcbn1cbmlvbi1kYXRldGltZTpub3QoOjpwbGFjZWhvbGRlcil7XG4gICAgY29sb3I6cmVkOy8vICM0ODQ4NDg7XG5cbn1cbmlvbi1kYXRldGltZTo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6cmVkO1xufVxuI2dlbmRlcntcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc2VsZWN0X2J1dHRvbntcbiAgICB3aWR0aDogOTUlO1xuICAgIHBhZGRpbmc6IDEwcHggMCA1cHggMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbn1cbi5yb3dCdXR0b257XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnJvd0J1dHRvbj4uc2F2ZUJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZCREM5NSwgI0ZCQTIzMik7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dPdXRCdXR0b24ge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5sb2dPdXRJY29uIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3VzZXJfc2V0dGluZ3MvbG9nb3V0LnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmFycm93e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGV4dD5zcGFue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjQTRCMEJFO1xufVxuLnRleHQ+c3BhbjpsYXN0LWNoaWxke1xuICAgIGNvbG9yOiAjRkJBMjMyO1xufVxuLmdlbmRlcl9idXR0b25fc2VsZWN0e1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59IiwiaDQge1xuICBmb250LXNpemU6IDIwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAyMHB4IDAgNXB4IDEwcHg7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4uc2VjdGlvbl9yb3dfaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICB3aWR0aDogOTUlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuLmZvcm1fX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtX19maWVsZDpwbGFjZWhvbGRlci1zaG93biB+IC5mb3JtX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uZm9ybV9fZmllbGQ6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtX19maWVsZDpmb2N1cyB+IC5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjb2xvcjogI0ZCQTIzMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG59XG4uZm9ybV9fZmllbGQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiAuZm9ybV9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6ICNGQkEyMzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlucHV0W3R5cGU9dGVsXTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxNHB0O1xufVxuXG4uZm9ybV9fZmllbGQ6cmVxdWlyZWQsIC5mb3JtX19maWVsZDppbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cblxuLmljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmkge1xuICBjb2xvcjogI0E0QjBCRTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXRbdHlwZT1kYXRlXSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5kYXRlX2xhYmVsLCAuZ2VuZGVyX2xhYmVsIHtcbiAgY29sb3I6ICNGQkEyMzI7XG59XG5cbi5kYXRlLCAuZ2VuZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZzogMTBweCAwIDVweCAwO1xuICB3aWR0aDogOTUlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgZm9udC1zaXplOiAxNHB0O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjQTRCMEJFO1xufVxuXG5pb24tZGF0ZXRpbWU6bm90KDo6cGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWRhdGV0aW1lOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNnZW5kZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc2VsZWN0X2J1dHRvbiB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG59XG5cbi5yb3dCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yb3dCdXR0b24gPiAuc2F2ZUJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dPdXRCdXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGxlZnQ6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ubG9nT3V0SWNvbiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3VzZXJfc2V0dGluZ3MvbG9nb3V0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyb3cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4udGV4dCA+IHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufVxuXG4uZ2VuZGVyX2J1dHRvbl9zZWxlY3Qge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main.pages/user/user-settings/user-settings.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main.pages/user/user-settings/user-settings.page.ts ***!
  \*********************************************************************/
/*! exports provided: UserSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsPage", function() { return UserSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service/auth.service */ "./src/app/services/auth.service/auth.service.ts");
/* harmony import */ var src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/fileStorageForUser.service/file-storage-for-user.service */ "./src/app/services/fileStorageForUser.service/file-storage-for-user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






/*
  Ключ по которому лежит информация
  в сторейдже о юзере
*/
const STORAGE_KEY_FOR_USER_INFO = 'user_info';
let UserSettingsPage = class UserSettingsPage {
    constructor(keyboard, authService, storageService, nav) {
        this.keyboard = keyboard;
        this.authService = authService;
        this.storageService = storageService;
        this.nav = nav;
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    }
    ngOnInit() {
        this.userSettingsInfo = this.authService.getUser();
        // Set hidden to bottom text when keyboard is show
        this.keyboard.onKeyboardWillShow().subscribe(() => { document.getElementById('text').style.display = 'none'; });
        this.keyboard.onKeyboardWillHide().subscribe(() => { document.getElementById('text').style.display = 'flex'; });
        // Change style of ion-select-option after this did load 
        document.querySelector('ion-select').addEventListener('click', function select() {
            setTimeout(() => {
                let action_sheet = document.querySelectorAll('.action-sheet-button-inner.sc-ion-action-sheet-md');
                action_sheet[action_sheet.length - 1].style.color = '#FBA232';
                action_sheet
                    .forEach(item => {
                    item.style.justifyContent = 'center';
                });
            }, 200);
        });
    }
    Logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storageService.removeUserFromStorage(STORAGE_KEY_FOR_USER_INFO).then(res => {
                console.log('User is logout');
                console.log(res);
                this.authService.setUser(null);
                this.nav.navigateRoot('login');
            });
        });
    }
};
UserSettingsPage.ctorParameters = () => [
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"] },
    { type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_4__["FileStorageForUserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
UserSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-settings/user-settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-settings.page.scss */ "./src/app/main.pages/user/user-settings/user-settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"],
        src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_fileStorageForUser_service_file_storage_for_user_service__WEBPACK_IMPORTED_MODULE_4__["FileStorageForUserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], UserSettingsPage);



/***/ })

}]);
//# sourceMappingURL=main-pages-user-user-settings-user-settings-module-es2015.js.map