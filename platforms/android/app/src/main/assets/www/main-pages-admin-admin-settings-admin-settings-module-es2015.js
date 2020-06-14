(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-pages-admin-admin-settings-admin-settings-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/admin-settings/admin-settings.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/admin-settings/admin-settings.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n  <section>\n    <ion-row>\n      <h4 class=\"title\">Создание бизнеса</h4>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"bussines_name\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"fas fa-signature\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"text\" class=\"form__field\" (keyup)=\"submit($event)\" [(ngModel)]=\"bussinesName\" placeholder=\"BussinesName\" name=\"BussinesName\" id='bussinesName'/> <!--[value]=\"this.userSettingsInfo.name\"-->\n        <label for=\"bussinesName\" class=\"form__label\">Название заведения <span class=\"necessarily\">*</span></label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInRight fast\" id=\"description_row\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"far fa-comment\"></i>\n      </ion-col>\n      <ion-col>\n        <textarea name=\"description\" id=\"description\" (keyup)=\"submit($event)\" [(ngModel)]=\"description\" cols=\"30\" rows=\"2\" ></textarea>\n        <label for=\"description\" class=\"label_description\">Описание</label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"section_row_item animated fadeInLeft fast\" id=\"numb_row\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"fas fa-mug-hot\"></i>\n      </ion-col>\n      <ion-col>\n        <input type=\"number\" class=\"form__field\" (keyup)=\"submit($event)\" [(ngModel)]=\"numb_purchases\" placeholder=\"numb_purchases\" name=\"numb_purchases\" id='numb_purchases'/> <!--[value]=\"this.userSettingsInfo.name\"-->\n        <label for=\"numb_purchases\" class=\"form__label\">Количество покупок <span class=\"necessarily\">*</span></label>\n        <div class=\"info_button\" (click)=\"callNumberPurchHelper()\" id=\"info_button_umber\"><i class=\"fas fa-info-circle\"></i></div>\n        <!-- <div class=\"info\" id=\"info_numb\"><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel enim ipsa, omnis dolorum eos aspernatur, at deserunt magnam commodi incidunt distinctio error repellat eaque nisi molestias possimus in animi ullam.</span></div> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"logo_row\">\n      <ion-col class=\"logo_col animated fadeInLeft fast\"   (click)=\"selectImage()\" size=\"3\">\n        <ng-container *ngIf=\"image\">\n          <ion-avatar>\n            <img class=\"logo_img\" [src]=\"image.path\">\n          </ion-avatar>\n        </ng-container>\n        <ng-container *ngIf=\"!image\">\n          <ion-avatar>\n            <img src=\"../../../../assets/img/stub/stub_logo.png\">\n          </ion-avatar>\n        </ng-container>\n      </ion-col>\n      <ion-col class=\"select_button_col animated fadeInRight fast\">\n        <button class=\"select_button\" (click)=\"selectImage()\">Выбрать файл <span class=\"necessarily\">*</span></button>\n        <div class=\"info_button\" (click)=\"callLogoHelper()\" id=\"info_button_logo\"><i class=\"fas fa-info-circle\"></i></div>\n      </ion-col>\n    </ion-row>\n    <article class=\"social_network_block\" id=\"social_network_block\">\n    </article>\n    <ion-row class=\"add_network_button animated fadeInLeft fast\" (click)=\"selectSocialNetwork()\">\n      <ion-col size=\"1\" class=\"icons\">\n        <i class=\"fas fa-plus\"></i>\n      </ion-col>\n      <ion-col>\n        <span>Добавить соц. сеть</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"rowButton\">\n      <ion-button class=\"saveButton animated fadeInRight fast\" (click)=\"requestToCreate()\">Создать\n        <div class=\"arrow\">\n        </div>\n      </ion-button>\n    </ion-row>\n  </section>\n\n</ion-content>\n");

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



/***/ }),

/***/ "./src/app/main.pages/admin/admin-settings/admin-settings-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main.pages/admin/admin-settings/admin-settings-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminSettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsPageRoutingModule", function() { return AdminSettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-settings.page */ "./src/app/main.pages/admin/admin-settings/admin-settings.page.ts");




const routes = [
    {
        path: '',
        component: _admin_settings_page__WEBPACK_IMPORTED_MODULE_3__["AdminSettingsPage"]
    }
];
let AdminSettingsPageRoutingModule = class AdminSettingsPageRoutingModule {
};
AdminSettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminSettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/main.pages/admin/admin-settings/admin-settings.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main.pages/admin/admin-settings/admin-settings.module.ts ***!
  \**************************************************************************/
/*! exports provided: AdminSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsPageModule", function() { return AdminSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-settings-routing.module */ "./src/app/main.pages/admin/admin-settings/admin-settings-routing.module.ts");
/* harmony import */ var _admin_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-settings.page */ "./src/app/main.pages/admin/admin-settings/admin-settings.page.ts");
/* harmony import */ var src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header.component/header.component.module */ "./src/app/components/header.component/header.component.module.ts");








let AdminSettingsPageModule = class AdminSettingsPageModule {
};
AdminSettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminSettingsPageRoutingModule"],
            src_app_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentModule"],
        ],
        declarations: [_admin_settings_page__WEBPACK_IMPORTED_MODULE_6__["AdminSettingsPage"]]
    })
], AdminSettingsPageModule);



/***/ }),

/***/ "./src/app/main.pages/admin/admin-settings/admin-settings.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main.pages/admin/admin-settings/admin-settings.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nh4 {\n  font-size: 20pt;\n  font-weight: bold;\n  padding: 20px 0 5px 10px;\n  color: #484848;\n}\n.section_row_item {\n  height: 50px;\n  margin-top: 10px;\n}\n.icons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\ni {\n  color: #A4B0BE;\n  margin-top: 5px;\n  display: block;\n}\n.form__label {\n  position: absolute;\n  top: 17px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #A4B0BE;\n}\n.form__field {\n  width: 95%;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n  height: 100%;\n  color: #484848;\n}\n.form__field::-webkit-input-placeholder {\n  color: transparent;\n}\n.form__field::-moz-placeholder {\n  color: transparent;\n}\n.form__field::-ms-input-placeholder {\n  color: transparent;\n}\n.form__field::placeholder {\n  color: transparent;\n}\n.form__field:placeholder-shown ~ .form__label {\n  font-size: 14pt;\n  cursor: text;\n}\n.form__field:focus {\n  border-bottom: 1px solid #FBA232;\n  outline: none;\n}\n.form__field:focus ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n.form__field:not(:placeholder-shown) {\n  border-bottom: 1px solid #FBA232;\n}\n.form__field:not(:placeholder-shown) ~ .form__label {\n  position: absolute;\n  top: -5px;\n  display: block;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n  font-size: 10pt;\n  color: #FBA232;\n  font-weight: 700;\n}\n.form__field:required, .form__field:invalid {\n  border-bottom: 1px solid red;\n}\ntextarea {\n  resize: none;\n  width: 95%;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  margin-top: 10px;\n  border: none;\n  border-bottom: 1px solid #A4B0BE;\n}\n.label_description {\n  position: absolute;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n  top: 25px;\n  display: block;\n  font-size: 14pt;\n  color: #A4B0BE;\n}\ntextarea:focus {\n  outline: none;\n  border-bottom: 1px solid #FBA232;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::placeholder {\n  color: transparent;\n}\ntextarea:focus ~ .label_description {\n  top: -5px;\n  color: #FBA232;\n  font-size: 10pt;\n}\nsection {\n  position: relative;\n}\n#numb_row {\n  margin-top: 20px;\n  z-index: 1000;\n}\n.info_button {\n  position: absolute;\n}\n.info_button {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  top: 20px;\n  right: 25px;\n}\n.info_button > i {\n  margin: 0;\n  font-size: 14pt;\n}\n.logo_col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.logo_row {\n  height: 70px;\n  margin-top: 15px;\n}\nimg {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n.select_button_col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n.select_button_col::after {\n  content: \"\";\n  display: block;\n  width: 90%;\n  position: absolute;\n  top: 70px;\n  border-bottom: 1.2px solid #A4B0BE;\n}\n.select_button {\n  background: none;\n  outline: none;\n  padding: 5px;\n  font-size: 14pt;\n  color: #A4B0BE;\n}\n#info_button_logo {\n  top: 45px;\n}\n.title:after {\n  content: \"* Обязательно\";\n  position: absolute;\n  display: block;\n  font-size: 9pt;\n  top: 75px;\n  color: #FBA232;\n}\n.necessarily {\n  color: #FBA232;\n}\n.social_network_block {\n  width: 100%;\n  margin-top: 25px;\n  position: relative;\n}\n.add_network_button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: #A4B0BE;\n  font-size: 14pt;\n}\n.add_network_button span {\n  display: block;\n  width: 94%;\n  border-bottom: 1px solid #A4B0BE;\n  padding: 5px;\n  margin-top: 15px;\n}\n.rowButton {\n  margin-top: 35px;\n  margin-right: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.rowButton > .saveButton {\n  --background: linear-gradient(to right, #FBDC95, #FBA232);\n  width: 160px;\n  height: 45px;\n  --border-radius: 20px;\n  font-weight: bold;\n}\n.arrow {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background-image: url('arrow.png');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi5wYWdlcy9hZG1pbi9hZG1pbi1zZXR0aW5ncy9hZG1pbi1zZXR0aW5ncy5wYWdlLnNjc3MiLCIvaG9tZS90b255L1RhcEFuZFRha2VfdjEuMC9zcmMvYXBwL21haW4ucGFnZXMvYWRtaW4vYWRtaW4tc2V0dGluZ3MvYWRtaW4tc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBREVKO0FDQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QURHSjtBQ0RBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURJSjtBQ0ZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FES0o7QUNIQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLGNBQUE7QURLSjtBQ0hBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FETUo7QUNMSTtFQUNJLGtCQUFBO0FET1I7QUNSSTtFQUNJLGtCQUFBO0FET1I7QUNSSTtFQUNJLGtCQUFBO0FET1I7QUNSSTtFQUNJLGtCQUFBO0FET1I7QUNMSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FET1I7QUNKQTtFQVlJLGdDQUFBO0VBQ0EsYUFBQTtBREpKO0FDUkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7QURTTjtBQ0hBO0VBV0ksZ0NBQUE7QURKSjtBQ05JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0FET1I7QUNGSTtFQUF1Qiw0QkFBQTtBRE0zQjtBQ0pBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QURPSjtBQ0xBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRFFKO0FDTEE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7QURRSjtBQ1BJO0VBQ0ksa0JBQUE7QURTUjtBQ1ZJO0VBQ0ksa0JBQUE7QURTUjtBQ1ZJO0VBQ0ksa0JBQUE7QURTUjtBQ1ZJO0VBQ0ksa0JBQUE7QURTUjtBQ1BJO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEU1I7QUNOQTtFQUNJLGtCQUFBO0FEU0o7QUNQQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBRFVKO0FDUEE7RUFDSSxrQkFBQTtBRFVKO0FDUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURXSjtBQ1RBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QURZSjtBQ1RBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURXSjtBQ1JBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEV0o7QUNSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURXSjtBQ1RBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtBRFlKO0FDVkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtBRGFKO0FDWEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURjSjtBQ1hBO0VBQ0ksU0FBQTtBRGNKO0FDWkE7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBRGVKO0FDYkE7RUFDSSxjQUFBO0FEZ0JKO0FDZEE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRGlCSjtBQ2ZBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEa0JKO0FDaEJBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRG1CSjtBQ2pCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FEb0JKO0FDbEJBO0VBQ0kseURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QURxQko7QUNuQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QURzQkoiLCJmaWxlIjoic3JjL2FwcC9tYWluLnBhZ2VzL2FkbWluL2FkbWluLXNldHRpbmdzL2FkbWluLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmg0IHtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMjBweCAwIDVweCAxMHB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLnNlY3Rpb25fcm93X2l0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pIHtcbiAgY29sb3I6ICNBNEIwQkU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxMHB0O1xuICBjb2xvcjogI0E0QjBCRTtcbn1cblxuLmZvcm1fX2ZpZWxkIHtcbiAgd2lkdGg6IDk1JTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cbi5mb3JtX19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybV9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybV9fZmllbGQ6Zm9jdXMgfiAuZm9ybV9fbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgY29sb3I6ICNGQkEyMzI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mb3JtX19maWVsZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xufVxuLmZvcm1fX2ZpZWxkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGNvbG9yOiAjRkJBMjMyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9ybV9fZmllbGQ6cmVxdWlyZWQsIC5mb3JtX19maWVsZDppbnZhbGlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG4gIHdpZHRoOiA5NSU7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbn1cblxuLmxhYmVsX2Rlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIHRvcDogMjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6ICNBNEIwQkU7XG59XG5cbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQkEyMzI7XG59XG50ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG50ZXh0YXJlYTpmb2N1cyB+IC5sYWJlbF9kZXNjcmlwdGlvbiB7XG4gIHRvcDogLTVweDtcbiAgY29sb3I6ICNGQkEyMzI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI251bWJfcm93IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmluZm9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaW5mb19idXR0b24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5pbmZvX2J1dHRvbiA+IGkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuLmxvZ29fY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvX3JvdyB7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2VsZWN0X2J1dHRvbl9jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zZWxlY3RfYnV0dG9uX2NvbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwcHg7XG4gIGJvcmRlci1ib3R0b206IDEuMnB4IHNvbGlkICNBNEIwQkU7XG59XG5cbi5zZWxlY3RfYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiAjQTRCMEJFO1xufVxuXG4jaW5mb19idXR0b25fbG9nbyB7XG4gIHRvcDogNDVweDtcbn1cblxuLnRpdGxlOmFmdGVyIHtcbiAgY29udGVudDogXCIqINCe0LHRj9C30LDRgtC10LvRjNC90L5cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA5cHQ7XG4gIHRvcDogNzVweDtcbiAgY29sb3I6ICNGQkEyMzI7XG59XG5cbi5uZWNlc3NhcmlseSB7XG4gIGNvbG9yOiAjRkJBMjMyO1xufVxuXG4uc29jaWFsX25ldHdvcmtfYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkX25ldHdvcmtfYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjQTRCMEJFO1xuICBmb250LXNpemU6IDE0cHQ7XG59XG5cbi5hZGRfbmV0d29ya19idXR0b24gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTQlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E0QjBCRTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucm93QnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucm93QnV0dG9uID4gLnNhdmVCdXR0b24ge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZCREM5NSwgI0ZCQTIzMik7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSIsImg0e1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAyMHB4IDAgNXB4IDEwcHg7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG4uc2VjdGlvbl9yb3dfaXRlbXtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pY29uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pe1xuICAgIGNvbG9yOiAjQTRCMEJFO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5mb3JtX19sYWJlbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxN3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgLy8gZm9udC1zaXplOiA1cHQ7XG4gICAgZm9udC1zaXplOiAxMHB0O1xuICAgIGNvbG9yOiAjQTRCMEJFO1xufVxuLmZvcm1fX2ZpZWxke1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgJjpwbGFjZWhvbGRlci1zaG93biB+IC5mb3JtX19sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgIH1cbn1cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gICAgfiAuZm9ybV9fbGFiZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgIC8vICAgZm9udC1zaXplOiA1cHQ7XG4gICAgICBjb2xvcjogI0ZCQTIzMjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfSBcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkJBMjMyO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybV9fZmllbGQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil7XG4gICAgfiAuZm9ybV9fbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgIC8vICAgZm9udC1zaXplOiA1cHQ7XG4gICAgICAgIGNvbG9yOiAjRkJBMjMyO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbn1cbi5mb3JtX19maWVsZHtcbiAgICAmOnJlcXVpcmVkLCY6aW52YWxpZCB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZWQ7IH1cbn1cbnRleHRhcmVhe1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICB3aWR0aDogOTUlO1xuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTRCMEJFO1xufVxuLmxhYmVsX2Rlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XG4gICAgdG9wOiAyNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBjb2xvcjogI0E0QjBCRTtcbn1cblxudGV4dGFyZWE6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZCQTIzMjtcbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgfi5sYWJlbF9kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgY29sb3I6ICNGQkEyMzI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICB9XG59XG5zZWN0aW9ueyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbnVtYl9yb3d7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuXG59XG4uaW5mb19idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmluZm9fYnV0dG9ue1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xufVxuLmluZm9fYnV0dG9uID4gaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbn1cblxuLmxvZ29fY29sIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvX3Jvd3tcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcblxufVxuaW1ne1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2VsZWN0X2J1dHRvbl9jb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnNlbGVjdF9idXR0b25fY29sOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDcwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMS4ycHggc29saWQgI0E0QjBCRTtcbn1cbi5zZWxlY3RfYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGNvbG9yOiAjQTRCMEJFO1xuXG59XG4jaW5mb19idXR0b25fbG9nbyB7XG4gICAgdG9wOiA0NXB4O1xufVxuLnRpdGxlOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiog0J7QsdGP0LfQsNGC0LXQu9GM0L3QvlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDlwdDtcbiAgICB0b3A6IDc1cHg7XG4gICAgY29sb3I6ICNGQkEyMzI7XG59XG4ubmVjZXNzYXJpbHkge1xuICAgIGNvbG9yOiAjRkJBMjMyO1xufVxuLnNvY2lhbF9uZXR3b3JrX2Jsb2Nre1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFkZF9uZXR3b3JrX2J1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI0E0QjBCRTtcbiAgICBmb250LXNpemU6IDE0cHQ7XG59XG4uYWRkX25ldHdvcmtfYnV0dG9uIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5NCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBNEIwQkU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucm93QnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yb3dCdXR0b24+LnNhdmVCdXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGQkRDOTUsICNGQkEyMzIpO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFycm93e1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2Fycm93LnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main.pages/admin/admin-settings/admin-settings.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/main.pages/admin/admin-settings/admin-settings.page.ts ***!
  \************************************************************************/
/*! exports provided: AdminSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsPage", function() { return AdminSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");











const STORAGE_KEY = 'logo_image';
let AdminSettingsPage = class AdminSettingsPage {
    constructor(camera, file, httpClient, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath, alertController, keyboard, http) {
        this.camera = camera;
        this.file = file;
        this.httpClient = httpClient;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.alertController = alertController;
        this.keyboard = keyboard;
        this.http = http;
        this.rquestData = {
            data: {
                name: 'shariKava2',
                description: 'Coffeehouse shariKava2',
                creatorId: 11,
                pathLogo: '/logo/sharicava/11.png',
                clients: '{"8":"4", "2":"7"}',
                promoCups: 10,
                socialNetwork: '@instagram @facebook',
            }
        };
        this.social_network_icons = {
            instagram: {
                html: '<i class="fab fa-instagram"></i><style>i {color: #A4B0BE; margin-top: 5px;}</style>',
                placeholder: '@instagram',
            },
            facebook: {
                html: '<i class="fab fa-facebook"></i><style>i {color: #A4B0BE; margin-top: 5px;}</style>',
                placeholder: 'www.facebook.com',
            },
            browser: {
                html: '<i class="fas fa-globe-europe"></i><style>i {color: #A4B0BE; margin-top: 5px;}</style>',
                placeholder: 'www.your_site.com',
            },
        };
        this.social_network_count = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            this.loadStoredImages();
        });
    }
    openAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Подсказка',
                message,
                cssClass: 'alert',
                buttons: [{
                        text: 'OK',
                        cssClass: 'alertButton'
                    }]
            });
            yield alert.present();
        });
    }
    callNumberPurchHelper() {
        let message = '<i class="fas fa-info-circle"></i>&#32;Количество покупок, которое нужно совершить для получения акционной чашки';
        this.openAlert(message);
    }
    callLogoHelper() {
        let message = `<i class="fas fa-info-circle"></i>&#32;Выберете логотип с прозрачным фоном<br/>
                   <i class="fas fa-info-circle"></i>&#32;Минимальный размер 120х120 px<br/>`;
        this.openAlert(message);
    }
    loadStoredImages() {
        this.storage.get(STORAGE_KEY).then(image => {
            if (image) {
                let parseImage = JSON.parse(image);
                this.image = '';
                let filePath = this.file.dataDirectory + parseImage;
                let resPath = this.pathForImage(filePath);
                this.image = { name: parseImage, path: resPath, filePath: filePath };
                document.querySelector('.select_button').innerHTML = this.image.name;
            }
        });
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Подтвердите действие",
                buttons: [{
                        text: 'Загрузить из галереи',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Отмена',
                        cssClass: 'action_sheet_cancel_btn',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    selectSocialNetwork() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.social_network_count.length == 3) {
                this.openAlert('<i class="fas fa-info-circle"></i>&#32;Соц. сетей должно быть не больше 3');
                return false;
            }
            const actionSheet = yield this.actionSheetController.create({
                header: "Выберете соц. сеть из списка",
                buttons: [
                    {
                        text: 'Instagram',
                        handler: () => {
                            if (this.social_network_count.find((i) => i === 'instagram')) {
                                this.openAlert('<i class="fas fa-info-circle"></i>&#32;Инстаграм уже указан');
                                return false;
                            }
                            this.createSocialNetwork('instagram');
                            this.social_network_count.push('instagram');
                        }
                    },
                    {
                        text: 'Facebook',
                        handler: () => {
                            if (this.social_network_count.find((i) => i === 'facebook')) {
                                this.openAlert('<i class="fas fa-info-circle"></i>&#32;Фейсбук уже указан');
                                return false;
                            }
                            this.createSocialNetwork('facebook');
                            this.social_network_count.push('facebook');
                        }
                    },
                    {
                        text: 'Сайт',
                        handler: () => {
                            if (this.social_network_count.find((i) => i === 'browser')) {
                                this.openAlert('<i class="fas fa-info-circle"></i>&#32;Сайт уже указан');
                                return false;
                            }
                            this.createSocialNetwork('browser');
                            this.social_network_count.push('browser');
                        }
                    },
                    {
                        text: 'Отмена',
                        cssClass: 'action_sheet_cancel_btn',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    createSocialNetwork(name) {
        let social_network_row = document.createElement('ion-row');
        social_network_row.classList.value = 'animated fadeIn fast';
        social_network_row.id = name + '_row';
        social_network_row.style.cssText = `
                                          height: 50px;
                                          margin-top: 10px;
                                          position: relative;
                                        `;
        let social_network_icon_col = document.createElement('ion-col');
        social_network_icon_col.setAttribute('size', '1');
        social_network_icon_col.innerHTML = this.social_network_icons[name].html;
        social_network_icon_col.style.cssText = `
                                              display: flex;
                                              justify-content: center;
                                              align-items: center;
                                            `;
        let social_network_input_col = document.createElement('ion-col');
        social_network_input_col.style.cssText = `
                                              display: flex;
                                              `;
        let social_network_delete_div = document.createElement('div');
        social_network_delete_div.innerHTML = `<i class="fas fa-times"></i>`;
        social_network_delete_div.addEventListener('click', () => {
            this.removeitemFromHtml(social_network_delete_div.parentElement);
        });
        social_network_delete_div.style.cssText = `
                                                position: absolute;
                                                right: 27px;
                                                top: 10px;
                                                width: 20px;
                                                height: 20px;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                              `;
        let social_network_input = document.createElement('input');
        social_network_input.setAttribute('type', 'text');
        social_network_input.setAttribute('placeholder', `${this.social_network_icons[name].placeholder}`);
        social_network_input.setAttribute('name', `${name}`);
        social_network_input.id = name;
        social_network_input.addEventListener('keyup', (e) => {
            this.submit(e);
            social_network_input.onblur = () => {
            };
        });
        social_network_input.style.cssText = `
                                          width: 94%;
                                          border: none;
                                          border-bottom: 1px solid #A4B0BE;
                                          height: 100%;
                                          color: #484848
                                         `;
        social_network_input.style.outline = 'none';
        let social_network_label = document.createElement('label');
        social_network_label.setAttribute('for', `${name}`);
        social_network_input_col.appendChild(social_network_input);
        social_network_input_col.appendChild(social_network_label);
        social_network_row.appendChild(social_network_icon_col);
        social_network_row.appendChild(social_network_input_col);
        social_network_row.appendChild(social_network_delete_div);
        document.querySelector('#social_network_block').appendChild(social_network_row);
    }
    removeitemFromHtml(item) {
        item.remove();
        let id = item.id.split('_');
        let index = this.social_network_count.indexOf(id[0], 0);
        this.social_network_count.splice(index, 1);
    }
    takePicture(sourceType) {
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });
    }
    createFileName() {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    }
    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImages(newFileName);
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }
    updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let parseImage = JSON.parse(images);
            if (!parseImage) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                parseImage = name;
                this.storage.set(STORAGE_KEY, JSON.stringify(parseImage));
            }
            let filePath = this.file.dataDirectory + name;
            let resPath = this.pathForImage(filePath);
            let newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            this.image = newEntry;
            document.querySelector('.logo_img').src = this.image.path;
            document.querySelector('.select_button').innerHTML = this.image.name;
            this.ref.detectChanges(); // trigger change detection cycle
        });
    }
    submit(e) {
        if (e.key == "Enter") {
            this.keyboard.hide();
        }
    }
    requestToCreate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var requestData = {
                name: 'shariKava2',
                description: 'Coffeehouse shariKava2',
                creatorId: 11,
                pathLogo: '/logo/sharicava/11.png',
                clients: '{"8":"4", "2":"7"}',
                promoCups: 10,
                socialNetwork: '@instagram @facebook'
            };
            yield this.http.post('https://sc.grekagreka25.had.su/coffeehouse/AddHouse/', { data: { requestData } }, {}).then(answer => {
                console.log('Answer from server...');
                console.log("Answer params: ");
                let data = JSON.parse(answer.data);
                console.log(JSON.parse(data));
            }).catch(err => { console.log('Error: ' + err); });
        });
    }
};
AdminSettingsPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"] }
];
AdminSettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main.pages/admin/admin-settings/admin-settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-settings.page.scss */ "./src/app/main.pages/admin/admin-settings/admin-settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"]])
], AdminSettingsPage);



/***/ })

}]);
//# sourceMappingURL=main-pages-admin-admin-settings-admin-settings-module-es2015.js.map