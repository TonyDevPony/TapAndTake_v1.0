function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-user-user-settings-user-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-settings/user-settings.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-settings/user-settings.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPagesUserUserSettingsUserSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n  <section>\n    <ion-row>\n      <h4>Настройки</h4>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"user_name\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"far fa-user\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"text\" class=\"form__field\" placeholder=\"FullName\" name=\"fullname\" id='fullname' [value]=\"this.userSettingsInfo.name\"/> <!--[value]=\"this.userSettingsInfo.name\"-->\n        <label for=\"fullname\" class=\"form__label\">Имя/Фамилия</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInRight fast\" id=\"email\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"far fa-envelope\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"text\" class=\"form__field\" placeholder=\"Email\" name=\"emailInp\" id='emailInp'  pattern=\"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$\" [value]=\"this.userSettingsInfo.email\"/> <!--[value]=\"this.userSettingsInfo.email\"-->\n        <label for=\"emailInp\" class=\"form__label\">Email</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"phone_number\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"fas fa-mobile-alt\"></i>\n      </ion-col>\n      <ion-col>\n        <input [textMask]=\"{mask: mask}\" type=\"tel\" class=\"form__field\" placeholder=\"(___)___-___\" name=\"Tellephone\" id='tellephone'  pattern=\"^\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}$\" [value]=\"this.userSettingsInfo.phone\"/><!--[value]=\"this.userSettingsInfo.phone\"-->\n        <label for=\"tellephone\" class=\"form__label\">Телефон</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInRight fast\" id=\"birthday\">\n      <ion-col size=\"1\" class=\"icons date\">\n        <i class=\"far fa-calendar-alt\"></i>\n      </ion-col>\n      <ion-col>\n        <ion-label class=\"date_label\">Дата рождения</ion-label>\n        <ion-datetime displayFormat=\"MM.DD.YYYY\" placeholder=\"Выберете Дату\" cancelText=\"Отменить\" doneText=\"Применить\"></ion-datetime>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"gender\">\n      <ion-col size=\"1\" class=\"icons gender\">\n        <i class=\"fas fa-venus-mars\"></i>\n      </ion-col>\n      <ion-col>\n        <ion-label class=\"gender_label\">Пол</ion-label>\n        <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Не выбрано\" class=\"select_button\" cancelText=\"Отменить\">\n            <ion-select-option value=\"male\">Мужской</ion-select-option>\n            <ion-select-option value=\"female\">Женский</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"rowButton animated fadeInRight fast\">\n      <ion-button class=\"logOutButton\" (click)=\"Logout()\">Выйти\n        <div class=\"logOutIcon\">\n        </div>\n      </ion-button>\n      <ion-button class=\"saveButton\" (click)=\"saveSettings()\">Сохранить\n        <div class=\"arrow\">\n        </div>\n      </ion-button>\n    </ion-row>\n    <ion-row class=\"text animated fadeInDown fast\" id=\"text\">\n      <span>Возникли проблемы?&nbsp;</span><span>Тех. поддержка</span>\n    </ion-row>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-settings/user-settings-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/main.pages/user/user-settings/user-settings-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserSettingsPageRoutingModule */

  /***/
  function srcAppMainPagesUserUserSettingsUserSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsPageRoutingModule", function () {
      return UserSettingsPageRoutingModule;
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


    var _user_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-settings.page */
    "./src/app/main.pages/user/user-settings/user-settings.page.ts");

    var routes = [{
      path: '',
      component: _user_settings_page__WEBPACK_IMPORTED_MODULE_3__["UserSettingsPage"]
    }];

    var UserSettingsPageRoutingModule = function UserSettingsPageRoutingModule() {
      _classCallCheck(this, UserSettingsPageRoutingModule);
    };

    UserSettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserSettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-settings/user-settings.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/main.pages/user/user-settings/user-settings.module.ts ***!
    \***********************************************************************/

  /*! exports provided: UserSettingsPageModule */

  /***/
  function srcAppMainPagesUserUserSettingsUserSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsPageModule", function () {
      return UserSettingsPageModule;
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


    var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-settings-routing.module */
    "./src/app/main.pages/user/user-settings/user-settings-routing.module.ts");
    /* harmony import */


    var _user_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-settings.page */
    "./src/app/main.pages/user/user-settings/user-settings.page.ts");
    /* harmony import */


    var src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/header.component/header.component.module */
    "./src/app/components/header.component/header.component.module.ts");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular2-text-mask */
    "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
    /* harmony import */


    var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);

    var UserSettingsPageModule = function UserSettingsPageModule() {
      _classCallCheck(this, UserSettingsPageModule);
    };

    UserSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserSettingsPageRoutingModule"], src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"]],
      declarations: [_user_settings_page__WEBPACK_IMPORTED_MODULE_6__["UserSettingsPage"]]
    })], UserSettingsPageModule);
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-settings/user-settings.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/main.pages/user/user-settings/user-settings.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPagesUserUserSettingsUserSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h4 {\n  font-size: 20pt;\n  font-weight: bold;\n  padding: 20px 0 5px 10px;\n  color: #484848;\n}\n\n.section_row_item {\n  height: 50px;\n  margin-top: 10px;\n}\n\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n  color: #484848;\n}\n\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field::placeholder {\n  color: transparent;\n}\n\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n\ninput[type=tel]:focus::-webkit-input-placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\ninput[type=tel]:focus::-moz-placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\ninput[type=tel]:focus::-ms-input-placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\ninput[type=tel]:focus::placeholder {\n  color: #484848;\n  font-size: 14pt;\n}\n\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\n\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n\ninput[type=date] {\n  background: none;\n}\n\n.date_label, .gender_label {\n  color: #FBA232;\n}\n\n.date, .gender {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding-bottom: 15px;\n}\n\nion-datetime {\n  padding: 10px 0 5px 0;\n  width: 95%;\n  border-bottom: 1px solid #A4B0BE;\n  font-size: 14pt;\n  --placeholder-color: #A4B0BE;\n}\n\nion-datetime:not(::-webkit-input-placeholder) {\n  color: red;\n}\n\nion-datetime:not(::-moz-placeholder) {\n  color: red;\n}\n\nion-datetime:not(::-ms-input-placeholder) {\n  color: red;\n}\n\nion-datetime:not(::placeholder) {\n  color: red;\n}\n\nion-datetime::-webkit-input-placeholder {\n  color: red;\n}\n\nion-datetime::-moz-placeholder {\n  color: red;\n}\n\nion-datetime::-ms-input-placeholder {\n  color: red;\n}\n\nion-datetime::placeholder {\n  color: red;\n}\n\n#gender {\n  margin-top: 30px;\n}\n\n.select_button {\n  width: 95%;\n  padding: 10px 0 5px 0;\n  border-bottom: 1px solid #A4B0BE;\n}\n\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.rowButton > .saveButton {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 160px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n\n.logOutButton {\n  height: 45px;\n  width: 120px;\n  --border-radius: 20px;\n  font-weight: bold;\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  position: absolute;\n  left: 30px;\n}\n\n.logOutIcon {\n  width: 15px;\n  height: 15px;\n  margin-left: 10px;\n  background-image: url('logout.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n}\n\n.text > span {\n  display: block;\n  color: #A4B0BE;\n}\n\n.text > span:last-child {\n  color: #FBA232;\n}\n\n.gender_button_select {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvbWFpbi5wYWdlcy91c2VyL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL21haW4ucGFnZXMvdXNlci91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREZJO0VBQ0ksa0JBQUE7QUNJUjs7QURMSTtFQUNJLGtCQUFBO0FDSVI7O0FETEk7RUFDSSxrQkFBQTtBQ0lSOztBRExJO0VBQ0ksa0JBQUE7QUNJUjs7QURGSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDSVI7O0FEREE7RUFZSSxnQ0FBQTtFQUNBLGFBQUE7QUNQSjs7QURMSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ01OOztBREFBO0VBV0ksZ0NBQUE7QUNQSjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ0lSOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURMQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FETEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRExBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURBSTtFQUF1Qiw0QkFBQTtBQ0kzQjs7QURGQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0FDUUo7O0FETkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0Esb0JBQUE7QUNTSjs7QUROQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDU0o7O0FEUEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEUEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEWEE7RUFDSSxVQUFBO0FDVUo7O0FEUkE7RUFDSSxnQkFBQTtBQ1dKOztBRFJBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNXSjs7QURUQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDWUo7O0FEVkE7RUFDSSx5REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2FKOztBRFZBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNhSjs7QURYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ2NKOztBRFZBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDYUo7O0FEWEE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNjSjs7QURaQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FDZUo7O0FEYkE7RUFDSSxjQUFBO0FDZ0JKOztBRGRBO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ2lCSiIsImZpbGUiOiJzcmMvYXBwL21haW4ucGFnZXMvdXNlci91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDR7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDIwcHggMCA1cHggMTBweDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cbi5zZWN0aW9uX3Jvd19pdGVte1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmZvcm1fX2xhYmVse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAvLyBmb250LXNpemU6IDVwdDtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgY29sb3I6ICNBNEIwQkU7XG59XG4uZm9ybV9fZmllbGR7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAmOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICBjdXJzb3I6IHRleHQ7XG4gICAgfVxufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgICB+IC5mb3JtX19sYWJlbCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC01cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgLy8gICBmb250LXNpemU6IDVwdDtcbiAgICAgIGNvbG9yOiAjRkJBMjMyO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9IFxuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKXtcbiAgICB+IC5mb3JtX19sYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgLy8gICBmb250LXNpemU6IDVwdDtcbiAgICAgICAgY29sb3I6ICNGQkEyMzI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xufVxuaW5wdXRbdHlwZT1cInRlbFwiXTpmb2N1czo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgZm9udC1zaXplOiAxNHB0O1xufVxuLmZvcm1fX2ZpZWxke1xuICAgICY6cmVxdWlyZWQsJjppbnZhbGlkIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDsgfVxufVxuLmljb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbml7XG4gICAgY29sb3I6ICNBNEIwQkU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5kYXRlX2xhYmVsLCAuZ2VuZGVyX2xhYmVse1xuICAgIGNvbG9yOiAjRkJBMjMyO1xufVxuLmRhdGUsIC5nZW5kZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgcGFkZGluZzogMTBweCAwIDVweCAwO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNBNEIwQkU7XG59XG5pb24tZGF0ZXRpbWU6bm90KDo6cGxhY2Vob2xkZXIpe1xuICAgIGNvbG9yOnJlZDsvLyAjNDg0ODQ4O1xuXG59XG5pb24tZGF0ZXRpbWU6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOnJlZDtcbn1cbiNnZW5kZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNlbGVjdF9idXR0b257XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiAxMHB4IDAgNXB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG59XG4ucm93QnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yb3dCdXR0b24+LnNhdmVCdXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nT3V0QnV0dG9uIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZCREM5NSwgI0ZCQTIzMik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMwcHg7XG59XG4ubG9nT3V0SWNvbiB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy91c2VyX3NldHRpbmdzL2xvZ291dC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgXG59XG5cbi5hcnJvd3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9hcnJvdy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi50ZXh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnRleHQ+c3BhbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cbi50ZXh0PnNwYW46bGFzdC1jaGlsZHtcbiAgICBjb2xvcjogI0ZCQTIzMjtcbn1cbi5nZW5kZXJfYnV0dG9uX3NlbGVjdHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufSIsImg0IHtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMjBweCAwIDVweCAxMHB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLnNlY3Rpb25fcm93X2l0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjb2xvcjogI0E0QjBCRTtcbn1cblxuLmZvcm1fX2ZpZWxkIHtcbiAgd2lkdGg6IDk1JTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cbi5mb3JtX19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybV9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMgfiAuZm9ybV9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6ICNGQkEyMzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjRkJBMjMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pbnB1dFt0eXBlPXRlbF06Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pIHtcbiAgY29sb3I6ICNBNEIwQkU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV0ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZGF0ZV9sYWJlbCwgLmdlbmRlcl9sYWJlbCB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufVxuXG4uZGF0ZSwgLmdlbmRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHggMDtcbiAgd2lkdGg6IDk1JTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI0E0QjBCRTtcbn1cblxuaW9uLWRhdGV0aW1lOm5vdCg6OnBsYWNlaG9sZGVyKSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1kYXRldGltZTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4jZ2VuZGVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNlbGVjdF9idXR0b24ge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xufVxuXG4ucm93QnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucm93QnV0dG9uID4gLnNhdmVCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZCREM5NSwgI0ZCQTIzMik7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nT3V0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkJEQzk1LCAjRkJBMjMyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xufVxuXG4ubG9nT3V0SWNvbiB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3VzZXJfc2V0dGluZ3MvbG9nb3V0LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYXJyb3cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4udGV4dCA+IHNwYW46bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufVxuXG4uZ2VuZGVyX2J1dHRvbl9zZWxlY3Qge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main.pages/user/user-settings/user-settings.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/main.pages/user/user-settings/user-settings.page.ts ***!
    \*********************************************************************/

  /*! exports provided: UserSettingsPage */

  /***/
  function srcAppMainPagesUserUserSettingsUserSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSettingsPage", function () {
      return UserSettingsPage;
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


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/ngx/index.js");
    /* harmony import */


    var src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service/auth.service */
    "./src/app/services/auth.service/auth.service.ts");

    var UserSettingsPage = /*#__PURE__*/function () {
      function UserSettingsPage(keyboard, authService) {
        _classCallCheck(this, UserSettingsPage);

        this.keyboard = keyboard;
        this.authService = authService;
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
      }

      _createClass(UserSettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userSettingsInfo = JSON.parse(this.authService.getUser()); // Set hidden to bottom text when keyboard is show

          this.keyboard.onKeyboardWillShow().subscribe(function () {
            document.getElementById('text').style.display = 'none';
          });
          this.keyboard.onKeyboardWillHide().subscribe(function () {
            document.getElementById('text').style.display = 'flex';
          }); // Change style of ion-select-option after this did load 

          document.querySelector('ion-select').addEventListener('click', function select() {
            setTimeout(function () {
              var action_sheet = document.querySelectorAll('.action-sheet-button-inner.sc-ion-action-sheet-md');
              action_sheet[action_sheet.length - 1].style.color = '#FBA232';
              action_sheet.forEach(function (item) {
                item.style.justifyContent = 'center';
              });
            }, 200);
          });
        }
      }]);

      return UserSettingsPage;
    }();

    UserSettingsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"]
      }, {
        type: src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    UserSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/user/user-settings/user-settings.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-settings.page.scss */
      "./src/app/main.pages/user/user-settings/user-settings.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"], src_app_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], UserSettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=main-pages-user-user-settings-user-settings-module-es5.js.map