(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2],{

/***/ "./app/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar\n  [title]=\"isLogin ? 'Login' : 'Signup'\"\n  [showBackButton]=\"false\"\n  [hasMenu]=\"false\"\n></ns-action-bar>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n  <StackLayout class=\"input-field\">\n    <Label \n      class=\"label\" \n      text=\"E-Mail\" \n      [ngClass]=\"{invalid: !emailControlIsValid}\"\n    ></Label>\n    <TextField \n      class=\"input\" \n      returnKeyType=\"next\" \n      keyboardType=\"email\"\n      [autocorrect]=\"false\"\n      autocapitalizationType=\"none\"\n      formControlName=\"email\"\n      #emailEl\n    ></TextField>\n    <Label \n      *ngIf=\"!emailControlIsValid\"\n      text=\"Please enter a vaild email\"\n    ></Label>\n  </StackLayout>\n  <StackLayout class=\"input-field\">\n    <Label \n     class=\"label\" \n     text=\"Description\"\n     [ngClass]=\"{invalid: !passwordControlIsValid}\"\n    ></Label>\n    <TextField \n      class=\"input\" \n      returnKeyType=\"done\" \n      [autocorrect]=\"false\"\n      autocapitalizationType=\"none\"\n      [secure]=\"true\"\n      hint=\"Min 6 Character\"\n      formControlName=\"password\"\n      (returnPress)=\"onDone()\"\n      #passwordEl\n      ></TextField>\n    <Label \n      *ngIf=\"!passwordControlIsValid\"\n      text=\"Must be 6 chacacters long\"\n    ></Label>\n  </StackLayout>\n  <StackLayout>\n    <Button class=\"btn btn-flat\" [text]=\"isLogin ? 'Signup instead' : 'Login instead'\" (tap)=\"onSwitch()\"></Button>\n    <Button\n      [text]=\"isLogin ? 'Login' : 'Signup'\"\n      class=\"btn btn-primary\"\n      (tap)=\"onSubmit()\"\n      [isEnabled]=\"form.valid\"\n      *ngIf=\"!isLoading\"\n    ></Button>\n    <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n  </StackLayout>\n</StackLayout>"

/***/ }),

/***/ "./app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLogin = true;
        this.isLoading = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]
            })
        });
        this.form.get('email').statusChanges.subscribe(function (status) {
            _this.emailControlIsValid = status === 'VALID';
        });
        this.form.get('password').statusChanges.subscribe(function (status) {
            _this.passwordControlIsValid = status === 'VALID';
        });
    };
    AuthComponent.prototype.onSignin = function () {
        this.router.navigate(['/today'], { clearHistory: true });
    };
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput(); //this block changes the focus in text field so it updates the value even password didn't lose the focus
        this.isLoading = true;
        if (!this.form.valid) {
            return;
        }
        var email = this.form.get('email').value;
        var password = this.form.get('password').value;
        this.form.reset();
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true; //resetting email password validation back to default when form is resetting
        if (this.isLogin) {
            this.authService.login(email, password).subscribe(function (resData) {
                _this.isLoading = false;
                _this.router.navigate(['/challenges'], { clearHistory: true });
            }, function (err) {
                console.log(err);
                _this.isLoading = false;
            });
        }
        else {
            this.authService.signUp(email, password).subscribe(function (resData) {
                _this.isLoading = false;
                _this.router.navigate(['/challenges'], { clearHistory: true });
            }, function (err) {
                console.log(err);
                _this.isLoading = false;
            });
        }
        console.log(email, password);
    };
    AuthComponent.prototype.onDone = function () {
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput();
    };
    AuthComponent.prototype.onSwitch = function () {
        this.isLogin = !this.isLogin;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('emailEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthComponent.prototype, "emailEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('passwordEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthComponent.prototype, "passwordEl", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-auth',
            template: __webpack_require__("./app/auth/auth.component.html"),
            styles: [__webpack_require__("./app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/auth/auth.component.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]],
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"].forChild([
                    {
                        path: '',
                        component: _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
                    }
                ]),
                nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ui_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/shared/ui/action-bar/action-bar.component.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_3__);




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_common__WEBPACK_IMPORTED_MODULE_2__["NativeScriptCommonModule"], nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptRouterModule"]],
            declarations: [_ui_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__["ActionBarComponent"]],
            exports: [_ui_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_1__["ActionBarComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar [title]=\"title\" (loaded)=\"onLoadedActionBar()\">\n  <NavigationButton\n    text=\"Back\"\n    android.systemIcon=\"ic_menu_back\"\n    *ngIf=\"canGoBack\"\n    (tap)=\"onGoBack()\"\n  ></NavigationButton>\n  <NavigationButton\n    *ngIf=\"android && hasMenu\"\n    icon=\"res://menu_black\"\n    (tap)=\"onToggleMenu()\"\n  ></NavigationButton>\n  <ActionItem\n    *ngIf=\"!android && hasMenu\"\n    ios.position=\"left\"\n    (tap)=\"onToggleMenu()\"\n  >\n    <Label text=\"&#xf0c9;\" class=\"fa m-5\"></Label>\n  </ActionItem>\n  <ng-content></ng-content> <!-- default nativescript  -->\n</ActionBar>\n"

/***/ }),

/***/ "./app/shared/ui/action-bar/action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/shared/ui.service.ts");





var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(page, router, uiService) {
        this.page = page;
        this.router = router;
        this.uiService = uiService;
        this.showBackButton = true;
        this.hasMenu = true;
    }
    ActionBarComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ActionBarComponent.prototype, "android", {
        get: function () {
            return platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarComponent.prototype, "canGoBack", {
        get: function () {
            return this.router.canGoBack() && this.showBackButton;
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype.onGoBack = function () {
        this.router.backToPreviousPage();
    };
    ActionBarComponent.prototype.onLoadedActionBar = function () {
        if (platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
            var androidToolbar = this.page.actionBar.nativeView;
            var backButton = androidToolbar.getNavigationIcon();
            var color = '#171717';
            if (this.hasMenu) {
                color = '#ffffff';
            }
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor(color), android.graphics.PorterDuff.Mode.SRC_ATOP);
            }
        }
    };
    ActionBarComponent.prototype.onToggleMenu = function () {
        this.uiService.toggleDrawer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "showBackButton", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "hasMenu", void 0);
    ActionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-action-bar',
            template: __webpack_require__("./app/shared/ui/action-bar/action-bar.component.html"),
            styles: [__webpack_require__("./app/shared/ui/action-bar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterExtensions"],
            _ui_service__WEBPACK_IMPORTED_MODULE_4__["UIService"]])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRTs7Ozs7OztBQ0FBLGdVQUFnVSw4QkFBOEIsMGZBQTBmLGlDQUFpQywrM0I7Ozs7Ozs7O0FDQXozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNMO0FBQ0w7QUFHbEI7QUFRN0M7SUFTRSx1QkFBb0IsTUFBd0IsRUFBVSxXQUF3QjtRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUDlFLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJK0QsQ0FBQztJQUVsRixnQ0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3REFBUyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxJQUFJLDBEQUFXLENBQUMsSUFBSSxFQUN6QixFQUFD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LHFEQUFTO09BUm5CLGtCQUFrQixDQTZDOUI7SUFBRCx5QkFBQztDQUFBO0FBN0M4QiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxucy1hY3Rpb24tYmFyXFxuICBbdGl0bGVdPVxcXCJpc0xvZ2luID8gJ0xvZ2luJyA6ICdTaWdudXAnXFxcIlxcbiAgW3Nob3dCYWNrQnV0dG9uXT1cXFwiZmFsc2VcXFwiXFxuICBbaGFzTWVudV09XFxcImZhbHNlXFxcIlxcbj48L25zLWFjdGlvbi1iYXI+XFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIiBbZm9ybUdyb3VwXT1cXFwiZm9ybVxcXCI+XFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgPExhYmVsIFxcbiAgICAgIGNsYXNzPVxcXCJsYWJlbFxcXCIgXFxuICAgICAgdGV4dD1cXFwiRS1NYWlsXFxcIiBcXG4gICAgICBbbmdDbGFzc109XFxcIntpbnZhbGlkOiAhZW1haWxDb250cm9sSXNWYWxpZH1cXFwiXFxuICAgID48L0xhYmVsPlxcbiAgICA8VGV4dEZpZWxkIFxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgXFxuICAgICAga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCJcXG4gICAgICBbYXV0b2NvcnJlY3RdPVxcXCJmYWxzZVxcXCJcXG4gICAgICBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cXFwiZW1haWxcXFwiXFxuICAgICAgI2VtYWlsRWxcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8TGFiZWwgXFxuICAgICAgKm5nSWY9XFxcIiFlbWFpbENvbnRyb2xJc1ZhbGlkXFxcIlxcbiAgICAgIHRleHQ9XFxcIlBsZWFzZSBlbnRlciBhIHZhaWxkIGVtYWlsXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgPExhYmVsIFxcbiAgICAgY2xhc3M9XFxcImxhYmVsXFxcIiBcXG4gICAgIHRleHQ9XFxcIkRlc2NyaXB0aW9uXFxcIlxcbiAgICAgW25nQ2xhc3NdPVxcXCJ7aW52YWxpZDogIXBhc3N3b3JkQ29udHJvbElzVmFsaWR9XFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPFRleHRGaWVsZCBcXG4gICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiIFxcbiAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiIFxcbiAgICAgIFthdXRvY29ycmVjdF09XFxcImZhbHNlXFxcIlxcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgW3NlY3VyZV09XFxcInRydWVcXFwiXFxuICAgICAgaGludD1cXFwiTWluIDYgQ2hhcmFjdGVyXFxcIlxcbiAgICAgIGZvcm1Db250cm9sTmFtZT1cXFwicGFzc3dvcmRcXFwiXFxuICAgICAgKHJldHVyblByZXNzKT1cXFwib25Eb25lKClcXFwiXFxuICAgICAgI3Bhc3N3b3JkRWxcXG4gICAgICA+PC9UZXh0RmllbGQ+XFxuICAgIDxMYWJlbCBcXG4gICAgICAqbmdJZj1cXFwiIXBhc3N3b3JkQ29udHJvbElzVmFsaWRcXFwiXFxuICAgICAgdGV4dD1cXFwiTXVzdCBiZSA2IGNoYWNhY3RlcnMgbG9uZ1xcXCJcXG4gICAgPjwvTGFiZWw+XFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPFN0YWNrTGF5b3V0PlxcbiAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWZsYXRcXFwiIFt0ZXh0XT1cXFwiaXNMb2dpbiA/ICdTaWdudXAgaW5zdGVhZCcgOiAnTG9naW4gaW5zdGVhZCdcXFwiICh0YXApPVxcXCJvblN3aXRjaCgpXFxcIj48L0J1dHRvbj5cXG4gICAgPEJ1dHRvblxcbiAgICAgIFt0ZXh0XT1cXFwiaXNMb2dpbiA/ICdMb2dpbicgOiAnU2lnbnVwJ1xcXCJcXG4gICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIlxcbiAgICAgICh0YXApPVxcXCJvblN1Ym1pdCgpXFxcIlxcbiAgICAgIFtpc0VuYWJsZWRdPVxcXCJmb3JtLnZhbGlkXFxcIlxcbiAgICAgICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIlxcbiAgICA+PC9CdXR0b24+XFxuICAgIDxBY3Rpdml0eUluZGljYXRvciBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hdXRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBlbWFpbENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgcGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHRydWU7XG4gIGlzTG9naW4gPSB0cnVlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnZW1haWxFbCcsIHtzdGF0aWM6IGZhbHNlfSkgZW1haWxFbDogRWxlbWVudFJlZjxUZXh0RmllbGQ+O1xuICBAVmlld0NoaWxkKCdwYXNzd29yZEVsJywge3N0YXRpYzogZmFsc2V9KSBwYXNzd29yZEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBcbiAgICAgICAge3VwZGF0ZU9uOiAnYmx1cicsIFxuICAgICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1cbiAgICAgIH0pLFxuICAgICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBcbiAgICAgICAge3VwZGF0ZU9uOiAnYmx1cicsIFxuICAgICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtLmdldCgnZW1haWwnKS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICAgICAgdGhpcy5lbWFpbENvbnRyb2xJc1ZhbGlkID0gc3RhdHVzID09PSdWQUxJRCc7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09J1ZBTElEJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2lnbmluKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RvZGF5J10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5lbWFpbEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmRpc21pc3NTb2Z0SW5wdXQoKTsgLy90aGlzIGJsb2NrIGNoYW5nZXMgdGhlIGZvY3VzIGluIHRleHQgZmllbGQgc28gaXQgdXBkYXRlcyB0aGUgdmFsdWUgZXZlbiBwYXNzd29yZCBkaWRuJ3QgbG9zZSB0aGUgZm9jdXNcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICBpZighdGhpcy5mb3JtLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5mb3JtLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykudmFsdWU7XG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgdGhpcy5lbWFpbENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSB0cnVlOyAvL3Jlc2V0dGluZyBlbWFpbCBwYXNzd29yZCB2YWxpZGF0aW9uIGJhY2sgdG8gZGVmYXVsdCB3aGVuIGZvcm0gaXMgcmVzZXR0aW5nXG5cbiAgICBpZih0aGlzLmlzTG9naW4pIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4oZW1haWwsIHBhc3N3b3JkKS5zdWJzY3JpYmUocmVzRGF0YSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoYWxsZW5nZXMnXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB9LCBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnblVwKGVtYWlsLCBwYXNzd29yZCkuc3Vic2NyaWJlKHJlc0RhdGEgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGFsbGVuZ2VzJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XG4gIH1cblxuICBvbkRvbmUoKSB7XG4gICAgdGhpcy5lbWFpbEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgfVxuXG4gIG9uU3dpdGNoKCkge1xuICAgIHRoaXMuaXNMb2dpbiA9ICF0aGlzLmlzTG9naW47XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGguY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBdXRoQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsIC8vdG8gdXNlIGZvcm1Hcm91cCBmb3JtQ29udHJvbCBmb3JtQ29udHJvbE5hbWUgZXRjIGluIGF1dGggZnVuY3Rpb25cbiAgICAgICAgU2hhcmVkTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHtcblxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQWN0aW9uQmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge30iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBbdGl0bGVdPVxcXCJ0aXRsZVxcXCIgKGxvYWRlZCk9XFxcIm9uTG9hZGVkQWN0aW9uQmFyKClcXFwiPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgdGV4dD1cXFwiQmFja1xcXCJcXG4gICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiXFxuICAgICpuZ0lmPVxcXCJjYW5Hb0JhY2tcXFwiXFxuICAgICh0YXApPVxcXCJvbkdvQmFjaygpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDxOYXZpZ2F0aW9uQnV0dG9uXFxuICAgICpuZ0lmPVxcXCJhbmRyb2lkICYmIGhhc01lbnVcXFwiXFxuICAgIGljb249XFxcInJlczovL21lbnVfYmxhY2tcXFwiXFxuICAgICh0YXApPVxcXCJvblRvZ2dsZU1lbnUoKVxcXCJcXG4gID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8QWN0aW9uSXRlbVxcbiAgICAqbmdJZj1cXFwiIWFuZHJvaWQgJiYgaGFzTWVudVxcXCJcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIlxcbiAgICAodGFwKT1cXFwib25Ub2dnbGVNZW51KClcXFwiXFxuICA+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMGM5O1xcXCIgY2xhc3M9XFxcImZhIG0tNVxcXCI+PC9MYWJlbD5cXG4gIDwvQWN0aW9uSXRlbT5cXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gPCEtLSBkZWZhdWx0IG5hdGl2ZXNjcmlwdCAgLS0+XFxuPC9BY3Rpb25CYXI+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS5zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hY3Rpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93QmFja0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGhhc01lbnUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZ2V0IGFuZHJvaWQoKSB7XG4gICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgfVxuXG4gIGdldCBjYW5Hb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmNhbkdvQmFjaygpICYmIHRoaXMuc2hvd0JhY2tCdXR0b247XG4gIH1cblxuICBvbkdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkQWN0aW9uQmFyKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IGFuZHJvaWRUb29sYmFyID0gdGhpcy5wYWdlLmFjdGlvbkJhci5uYXRpdmVWaWV3O1xuICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGFuZHJvaWRUb29sYmFyLmdldE5hdmlnYXRpb25JY29uKCk7XG4gICAgICBsZXQgY29sb3IgPSAnIzE3MTcxNyc7XG4gICAgICBpZiAodGhpcy5oYXNNZW51KSB7XG4gICAgICAgIGNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2tCdXR0b24pIHtcbiAgICAgICAgYmFja0J1dHRvbi5zZXRDb2xvckZpbHRlcihcbiAgICAgICAgICBhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoY29sb3IpLFxuICAgICAgICAgICg8YW55PmFuZHJvaWQuZ3JhcGhpY3MpLlBvcnRlckR1ZmYuTW9kZS5TUkNfQVRPUFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnVpU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==