function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-admin-admin-settings-admin-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header.component/header.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header.component/header.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderComponentHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"animated fadeInDown fast\">\n  <ng-container *ngIf=\"this.buttonIsActive\">\n    <div (click)=\"goBack()\" class=\"backButton animated fadeInLeft fast\"></div>\n  </ng-container>\n  <span class=\"TapWord\">Tap&nbsp;</span><span class=\"TakeWord\">& Take</span>\n</ion-header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/admin-settings/admin-settings.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/admin-settings/admin-settings.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPagesAdminAdminSettingsAdminSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n  <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\n\n  <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n    <ion-thumbnail slot=\"start\">\n      <ion-img [src]=\"img.path\"></ion-img>\n    </ion-thumbnail>\n    <ion-label>\n      {{ img.name }}\n    </ion-label>\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img)\">\n      <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n    </ion-button>\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n    </ion-button>\n  </ion-item>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n      Select Image</ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/components/header.component/header.component.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/header.component/header.component.module.ts ***!
    \************************************************************************/

  /*! exports provided: HeaderComponentModule */

  /***/
  function srcAppComponentsHeaderComponentHeaderComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/components/header.component/header.component.ts");

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
  "./src/app/components/header.component/header.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/header.component/header.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderComponentHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  height: 10vh;\n  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);\n  border-bottom-right-radius: 42px;\n  border-bottom-left-radius: 42px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --ion-font-family: \"FredokaOne-Regular\"!important;\n  font-family: \"FredokaOne-Regular\" !important;\n  font-size: 20pt;\n}\n\nion-header:after {\n  display: none;\n}\n\n.TapWord {\n  color: #FAC35E;\n}\n\n.TakeWord, .Login {\n  color: #484848;\n}\n\n.backButton {\n  position: absolute;\n  left: 10px;\n  display: -webkit-box;\n  display: flex;\n  background-image: url('arrow.svg');\n  background-repeat: no-repeat;\n  background-size: 60%;\n  background-position: center;\n  width: 50px;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RvbnkvVGFwQW5kVGFrZV92MS4wL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50L2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFHQSxnREFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm94LXNoYWRvdzogICAgICAgICAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICAnRnJlZG9rYU9uZS1SZWd1bGFyJyFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICAnRnJlZG9rYU9uZS1SZWd1bGFyJyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbn1cbmlvbi1oZWFkZXI6YWZ0ZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5UYXBXb3JkIHtcbiAgICBjb2xvcjogI0ZBQzM1RTtcbn1cbi5UYWtlV29yZCwgLkxvZ2lue1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuLmJhY2tCdXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVnaXN0ZXIvYXJyb3cuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA3MCU7XG59IiwiaW9uLWhlYWRlciB7XG4gIGhlaWdodDogMTB2aDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLS1pb24tZm9udC1mYW1pbHk6IFwiRnJlZG9rYU9uZS1SZWd1bGFyXCIhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJGcmVkb2thT25lLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHQ7XG59XG5cbmlvbi1oZWFkZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uVGFwV29yZCB7XG4gIGNvbG9yOiAjRkFDMzVFO1xufVxuXG4uVGFrZVdvcmQsIC5Mb2dpbiB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4uYmFja0J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9yZWdpc3Rlci9hcnJvdy5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDcwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header.component/header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/header.component/header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderComponentHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(navCtrl, router) {
        _classCallCheck(this, HeaderComponent);

        this.navCtrl = navCtrl;
        this.router = router;
        this.noBackButtonRoute = ['forgot-password', 'qr', 'password-reset', 'user-settings', 'admin-coffee-houses', 'admin-settings'];
        this.buttonIsActive = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.noBackButtonRoute.includes(this.router.url.slice(1))) {
            this.buttonIsActive = true;
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header.component/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header.component/header.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/main.pages/admin/admin-settings/admin-settings-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/main.pages/admin/admin-settings/admin-settings-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: AdminSettingsPageRoutingModule */

  /***/
  function srcAppMainPagesAdminAdminSettingsAdminSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSettingsPageRoutingModule", function () {
      return AdminSettingsPageRoutingModule;
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


    var _admin_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-settings.page */
    "./src/app/main.pages/admin/admin-settings/admin-settings.page.ts");

    var routes = [{
      path: '',
      component: _admin_settings_page__WEBPACK_IMPORTED_MODULE_3__["AdminSettingsPage"]
    }];

    var AdminSettingsPageRoutingModule = function AdminSettingsPageRoutingModule() {
      _classCallCheck(this, AdminSettingsPageRoutingModule);
    };

    AdminSettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminSettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main.pages/admin/admin-settings/admin-settings.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/main.pages/admin/admin-settings/admin-settings.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AdminSettingsPageModule */

  /***/
  function srcAppMainPagesAdminAdminSettingsAdminSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSettingsPageModule", function () {
      return AdminSettingsPageModule;
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


    var _admin_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-settings-routing.module */
    "./src/app/main.pages/admin/admin-settings/admin-settings-routing.module.ts");
    /* harmony import */


    var _admin_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-settings.page */
    "./src/app/main.pages/admin/admin-settings/admin-settings.page.ts");
    /* harmony import */


    var src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/header.component/header.component.module */
    "./src/app/components/header.component/header.component.module.ts");

    var AdminSettingsPageModule = function AdminSettingsPageModule() {
      _classCallCheck(this, AdminSettingsPageModule);
    };

    AdminSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _admin_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminSettingsPageRoutingModule"], src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"]],
      declarations: [_admin_settings_page__WEBPACK_IMPORTED_MODULE_6__["AdminSettingsPage"]]
    })], AdminSettingsPageModule);
    /***/
  },

  /***/
  "./src/app/main.pages/admin/admin-settings/admin-settings.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/main.pages/admin/admin-settings/admin-settings.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPagesAdminAdminSettingsAdminSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4ucGFnZXMvYWRtaW4vYWRtaW4tc2V0dGluZ3MvYWRtaW4tc2V0dGluZ3MucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main.pages/admin/admin-settings/admin-settings.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/main.pages/admin/admin-settings/admin-settings.page.ts ***!
    \************************************************************************/

  /*! exports provided: AdminSettingsPage */

  /***/
  function srcAppMainPagesAdminAdminSettingsAdminSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSettingsPage", function () {
      return AdminSettingsPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");

    var STORAGE_KEY = 'my_images';

    var AdminSettingsPage = /*#__PURE__*/function () {
      function AdminSettingsPage(camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath) {
        _classCallCheck(this, AdminSettingsPage);

        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.images = [];
      }

      _createClass(AdminSettingsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.plt.ready().then(function () {
            _this.loadStoredImages();
          });
        }
      }, {
        key: "loadStoredImages",
        value: function loadStoredImages() {
          var _this2 = this;

          this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
              var arr = JSON.parse(images);
              _this2.images = [];
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var img = _step.value;
                  var filePath = _this2.file.dataDirectory + img;

                  var resPath = _this2.pathForImage(filePath);

                  _this2.images.push({
                    name: img,
                    path: resPath,
                    filePath: filePath
                  });
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          });
        }
      }, {
        key: "pathForImage",
        value: function pathForImage(img) {
          if (img === null) {
            return '';
          } else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast(text) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: text,
                      position: 'bottom',
                      duration: 3000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectImage",
        value: function selectImage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetController.create({
                      header: "Select Image source",
                      buttons: [{
                        text: 'Load from Library',
                        handler: function handler() {
                          _this3.takePicture(_this3.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "takePicture",
        value: function takePicture(sourceType) {
          var _this4 = this;

          var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
          };
          this.camera.getPicture(options).then(function (imagePath) {
            if (_this4.plt.is('android') && sourceType === _this4.camera.PictureSourceType.PHOTOLIBRARY) {
              _this4.filePath.resolveNativePath(imagePath).then(function (filePath) {
                var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));

                _this4.copyFileToLocalDir(correctPath, currentName, _this4.createFileName());
              });
            } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

              _this4.copyFileToLocalDir(correctPath, currentName, _this4.createFileName());
            }
          });
        }
      }, {
        key: "createFileName",
        value: function createFileName() {
          var d = new Date(),
              n = d.getTime(),
              newFileName = n + ".jpg";
          return newFileName;
        }
      }, {
        key: "copyFileToLocalDir",
        value: function copyFileToLocalDir(namePath, currentName, newFileName) {
          var _this5 = this;

          this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this5.updateStoredImages(newFileName);
          }, function (error) {
            _this5.presentToast('Error while storing file.');
          });
        }
      }, {
        key: "updateStoredImages",
        value: function updateStoredImages(name) {
          var _this6 = this;

          this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);

            if (!arr) {
              var newImages = [name];

              _this6.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            } else {
              arr.push(name);

              _this6.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }

            var filePath = _this6.file.dataDirectory + name;

            var resPath = _this6.pathForImage(filePath);

            var newEntry = {
              name: name,
              path: resPath,
              filePath: filePath
            };
            _this6.images = [newEntry].concat(_toConsumableArray(_this6.images));

            _this6.ref.detectChanges(); // trigger change detection cycle

          });
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(imgEntry, position) {
          var _this7 = this;

          this.images.splice(position, 1);
          this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) {
              return name != imgEntry.name;
            });

            _this7.storage.set(STORAGE_KEY, JSON.stringify(filtered));

            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

            _this7.file.removeFile(correctPath, imgEntry.name).then(function (res) {
              _this7.presentToast('File removed.');
            });
          });
        }
      }]);

      return AdminSettingsPage;
    }();

    AdminSettingsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]
      }];
    };

    AdminSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/admin-settings/admin-settings.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-settings.page.scss */
      "./src/app/main.pages/admin/admin-settings/admin-settings.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]])], AdminSettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=main-pages-admin-admin-settings-admin-settings-module-es5.js.map