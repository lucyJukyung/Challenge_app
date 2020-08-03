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
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
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
            return tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"];
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
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["isAndroid"]) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRTs7Ozs7OztBQ0FBLGdVQUFnVSw4QkFBOEIsMGZBQTBmLGlDQUFpQywrM0I7Ozs7Ozs7O0FDQXozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNMO0FBQ0w7QUFHbEI7QUFRN0M7SUFTRSx1QkFBb0IsTUFBd0IsRUFBVSxXQUF3QjtRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUDlFLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJK0QsQ0FBQztJQUVsRixnQ0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3REFBUyxDQUFDO1lBQ3hCLEtBQUssRUFBRSxJQUFJLDBEQUFXLENBQUMsSUFBSSxFQUN6QixFQUFDLFFBQVEsRUFBRSxNQUFNO2dCQUNqQixVQUFVLEVBQUUsQ0FBQyx5REFBVSxDQUFDLFFBQVEsRUFBRSx5REFBVSxDQUFDLEtBQUssQ0FBQzthQUNwRCxDQUFDO1lBQ0YsUUFBUSxFQUFFLElBQUksMERBQVcsQ0FBQyxJQUFJLEVBQzVCLEVBQUMsUUFBUSxFQUFFLE1BQU07Z0JBQ2pCLFVBQVUsRUFBRSxDQUFDLHlEQUFVLENBQUMsUUFBUSxFQUFFLHlEQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzNELENBQUM7U0FDSCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGdCQUFNO1lBQ25ELEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLEtBQUksT0FBTyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxnQkFBTTtZQUN0RCxLQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxLQUFJLE9BQU8sQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBa0NDO1FBakNDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyx3R0FBd0c7UUFDMUosSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQyw0RUFBNEU7UUFFaEgsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpQkFBTztnQkFDdkQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNoRSxDQUFDLEVBQUUsYUFBRztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLGlCQUFPO2dCQUN4RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsRUFBRSxhQUFHO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBMUVzQztRQUF0QywrREFBUyxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztrQ0FBVSx3REFBVTtrREFBWTtJQUM1QjtRQUF6QywrREFBUyxDQUFDLFlBQVksRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztrQ0FBYSx3REFBVTtxREFBWTtJQVBqRSxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiwrREFBb0M7O1NBR3JDLENBQUM7eUNBVTRCLDRFQUFnQixFQUF1Qix5REFBVztPQVRuRSxhQUFhLENBaUZ6QjtJQUFELG9CQUFDO0NBQUE7QUFqRnlCOzs7Ozs7Ozs7QUNiMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDOEI7QUFDa0I7QUFDcEM7QUFDRTtBQUNOO0FBaUJqRDtJQUFBO0lBRUEsQ0FBQztJQUZZLFVBQVU7UUFkdEIsOERBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLDZEQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsNkVBQXdCLENBQUMsUUFBUSxDQUFDO29CQUM5Qjt3QkFDSSxJQUFJLEVBQUUsRUFBRTt3QkFDUixTQUFTLEVBQUUsNkRBQWE7cUJBQzNCO2lCQUNKLENBQUM7Z0JBQ0YsNEVBQXVCO2dCQUN2QixrRUFBbUI7Z0JBQ25CLGtFQUFZO2FBQUM7U0FDcEIsQ0FBQztPQUNXLFVBQVUsQ0FFdEI7SUFBRCxpQkFBQztDQUFBO0FBRnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRWlDO0FBQ0g7QUFDUDtBQU9oRTtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBTHhCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsRUFBRSw2RUFBd0IsQ0FBQztZQUM3RCxZQUFZLEVBQUUsQ0FBQyxzRkFBa0IsQ0FBQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyxzRkFBa0IsQ0FBQztTQUNoQyxDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQTtBQUFIOzs7Ozs7OztBQ1h6QixxRTs7Ozs7OztBQ0FBLG9nQkFBb2dCLDBIOzs7Ozs7OztBQ0FwZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7QUFDSDtBQUNOO0FBQ2U7QUFDbEI7QUFVN0M7SUFLRSw0QkFDVSxJQUFVLEVBQ1YsTUFBd0IsRUFDeEIsU0FBb0I7UUFGcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFOckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBTyxHQUFHLElBQUksQ0FBQztJQU1yQixDQUFDO0lBRUoscUNBQVEsR0FBUixjQUFZLENBQUM7SUFFYixzQkFBSSx1Q0FBTzthQUFYO1lBQ0UsT0FBTyxtRUFBUyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxtRUFBUyxFQUFFO1lBQ2IsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQ3RELElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDbkI7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsY0FBYyxDQUN2QixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQ2xDLE9BQU8sQ0FBQyxRQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUEzQ1E7UUFBUiwyREFBSyxFQUFFOztxREFBZTtJQUNkO1FBQVIsMkRBQUssRUFBRTs7OERBQXVCO0lBQ3RCO1FBQVIsMkRBQUssRUFBRTs7dURBQWdCO0lBSGIsa0JBQWtCO1FBTjlCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixxRkFBMEM7O1NBRzNDLENBQUM7eUNBT2dCLDZEQUFJO1lBQ0YsNEVBQWdCO1lBQ2IscURBQVM7T0FSbkIsa0JBQWtCLENBNkM5QjtJQUFELHlCQUFDO0NBQUE7QUE3QzhCIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXJcXG4gIFt0aXRsZV09XFxcImlzTG9naW4gPyAnTG9naW4nIDogJ1NpZ251cCdcXFwiXFxuICBbc2hvd0JhY2tCdXR0b25dPVxcXCJmYWxzZVxcXCJcXG4gIFtoYXNNZW51XT1cXFwiZmFsc2VcXFwiXFxuPjwvbnMtYWN0aW9uLWJhcj5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJmb3JtXFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICA8TGFiZWwgXFxuICAgICAgY2xhc3M9XFxcImxhYmVsXFxcIiBcXG4gICAgICB0ZXh0PVxcXCJFLU1haWxcXFwiIFxcbiAgICAgIFtuZ0NsYXNzXT1cXFwie2ludmFsaWQ6ICFlbWFpbENvbnRyb2xJc1ZhbGlkfVxcXCJcXG4gICAgPjwvTGFiZWw+XFxuICAgIDxUZXh0RmllbGQgXFxuICAgICAgY2xhc3M9XFxcImlucHV0XFxcIiBcXG4gICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiBcXG4gICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgIFthdXRvY29ycmVjdF09XFxcImZhbHNlXFxcIlxcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgZm9ybUNvbnRyb2xOYW1lPVxcXCJlbWFpbFxcXCJcXG4gICAgICAjZW1haWxFbFxcbiAgICA+PC9UZXh0RmllbGQ+XFxuICAgIDxMYWJlbCBcXG4gICAgICAqbmdJZj1cXFwiIWVtYWlsQ29udHJvbElzVmFsaWRcXFwiXFxuICAgICAgdGV4dD1cXFwiUGxlYXNlIGVudGVyIGEgdmFpbGQgZW1haWxcXFwiXFxuICAgID48L0xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICA8TGFiZWwgXFxuICAgICBjbGFzcz1cXFwibGFiZWxcXFwiIFxcbiAgICAgdGV4dD1cXFwiRGVzY3JpcHRpb25cXFwiXFxuICAgICBbbmdDbGFzc109XFxcIntpbnZhbGlkOiAhcGFzc3dvcmRDb250cm9sSXNWYWxpZH1cXFwiXFxuICAgID48L0xhYmVsPlxcbiAgICA8VGV4dEZpZWxkIFxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgXFxuICAgICAgW2F1dG9jb3JyZWN0XT1cXFwiZmFsc2VcXFwiXFxuICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICBbc2VjdXJlXT1cXFwidHJ1ZVxcXCJcXG4gICAgICBoaW50PVxcXCJNaW4gNiBDaGFyYWN0ZXJcXFwiXFxuICAgICAgZm9ybUNvbnRyb2xOYW1lPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAocmV0dXJuUHJlc3MpPVxcXCJvbkRvbmUoKVxcXCJcXG4gICAgICAjcGFzc3dvcmRFbFxcbiAgICAgID48L1RleHRGaWVsZD5cXG4gICAgPExhYmVsIFxcbiAgICAgICpuZ0lmPVxcXCIhcGFzc3dvcmRDb250cm9sSXNWYWxpZFxcXCJcXG4gICAgICB0ZXh0PVxcXCJNdXN0IGJlIDYgY2hhY2FjdGVycyBsb25nXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8U3RhY2tMYXlvdXQ+XFxuICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tZmxhdFxcXCIgW3RleHRdPVxcXCJpc0xvZ2luID8gJ1NpZ251cCBpbnN0ZWFkJyA6ICdMb2dpbiBpbnN0ZWFkJ1xcXCIgKHRhcCk9XFxcIm9uU3dpdGNoKClcXFwiPjwvQnV0dG9uPlxcbiAgICA8QnV0dG9uXFxuICAgICAgW3RleHRdPVxcXCJpc0xvZ2luID8gJ0xvZ2luJyA6ICdTaWdudXAnXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgKHRhcCk9XFxcIm9uU3VibWl0KClcXFwiXFxuICAgICAgW2lzRW5hYmxlZF09XFxcImZvcm0udmFsaWRcXFwiXFxuICAgICAgKm5nSWY9XFxcIiFpc0xvYWRpbmdcXFwiXFxuICAgID48L0J1dHRvbj5cXG4gICAgPEFjdGl2aXR5SW5kaWNhdG9yIFtidXN5XT1cXFwiaXNMb2FkaW5nXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbiAgPC9TdGFja0xheW91dD5cXG48L1N0YWNrTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWF1dGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGVtYWlsQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICBwYXNzd29yZENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgaXNMb2dpbiA9IHRydWU7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdlbWFpbEVsJywge3N0YXRpYzogZmFsc2V9KSBlbWFpbEVsOiBFbGVtZW50UmVmPFRleHRGaWVsZD47XG4gIEBWaWV3Q2hpbGQoJ3Bhc3N3b3JkRWwnLCB7c3RhdGljOiBmYWxzZX0pIHBhc3N3b3JkRWw6IEVsZW1lbnRSZWY8VGV4dEZpZWxkPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBlbWFpbDogbmV3IEZvcm1Db250cm9sKG51bGwsIFxuICAgICAgICB7dXBkYXRlT246ICdibHVyJywgXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXVxuICAgICAgfSksXG4gICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIFxuICAgICAgICB7dXBkYXRlT246ICdibHVyJywgXG4gICAgICAgIHZhbGlkYXRvcnM6IFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLmVtYWlsQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09J1ZBTElEJztcbiAgICB9KTtcblxuICAgIHRoaXMuZm9ybS5nZXQoJ3Bhc3N3b3JkJykuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcbiAgICAgIHRoaXMucGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHN0YXR1cyA9PT0nVkFMSUQnO1xuICAgIH0pO1xuICB9XG5cbiAgb25TaWduaW4oKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdG9kYXknXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmVtYWlsRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpOyAvL3RoaXMgYmxvY2sgY2hhbmdlcyB0aGUgZm9jdXMgaW4gdGV4dCBmaWVsZCBzbyBpdCB1cGRhdGVzIHRoZSB2YWx1ZSBldmVuIHBhc3N3b3JkIGRpZG4ndCBsb3NlIHRoZSBmb2N1c1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgIGlmKCF0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZW1haWwgPSB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZTtcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICB0aGlzLmVtYWlsQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICAgIHRoaXMucGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHRydWU7IC8vcmVzZXR0aW5nIGVtYWlsIHBhc3N3b3JkIHZhbGlkYXRpb24gYmFjayB0byBkZWZhdWx0IHdoZW4gZm9ybSBpcyByZXNldHRpbmdcblxuICAgIGlmKHRoaXMuaXNMb2dpbikge1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbihlbWFpbCwgcGFzc3dvcmQpLnN1YnNjcmliZShyZXNEYXRhID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hhbGxlbmdlcyddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAoZW1haWwsIHBhc3N3b3JkKS5zdWJzY3JpYmUocmVzRGF0YSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoYWxsZW5nZXMnXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICB9LCBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcbiAgfVxuXG4gIG9uRG9uZSgpIHtcbiAgICB0aGlzLmVtYWlsRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICB9XG5cbiAgb25Td2l0Y2goKSB7XG4gICAgdGhpcy5pc0xvZ2luID0gIXRoaXMuaXNMb2dpbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4uL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC5jb21wb25lbnRcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0F1dGhDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IEF1dGhDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSksXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSwgLy90byB1c2UgZm9ybUdyb3VwIGZvcm1Db250cm9sIGZvcm1Db250cm9sTmFtZSBldGMgaW4gYXV0aCBmdW5jdGlvblxuICAgICAgICBTaGFyZWRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge1xuXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBY3Rpb25CYXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtBY3Rpb25CYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fSIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIFt0aXRsZV09XFxcInRpdGxlXFxcIiAobG9hZGVkKT1cXFwib25Mb2FkZWRBY3Rpb25CYXIoKVxcXCI+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICB0ZXh0PVxcXCJCYWNrXFxcIlxcbiAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgKm5nSWY9XFxcImNhbkdvQmFja1xcXCJcXG4gICAgKHRhcCk9XFxcIm9uR29CYWNrKClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgKm5nSWY9XFxcImFuZHJvaWQgJiYgaGFzTWVudVxcXCJcXG4gICAgaWNvbj1cXFwicmVzOi8vbWVudV9ibGFja1xcXCJcXG4gICAgKHRhcCk9XFxcIm9uVG9nZ2xlTWVudSgpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDxBY3Rpb25JdGVtXFxuICAgICpuZ0lmPVxcXCIhYW5kcm9pZCAmJiBoYXNNZW51XFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiXFxuICAgICh0YXApPVxcXCJvblRvZ2dsZU1lbnUoKVxcXCJcXG4gID5cXG4gICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwYzk7XFxcIiBjbGFzcz1cXFwiZmEgbS01XFxcIj48L0xhYmVsPlxcbiAgPC9BY3Rpb25JdGVtPlxcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiA8IS0tIGRlZmF1bHQgbmF0aXZlc2NyaXB0ICAtLT5cXG48L0FjdGlvbkJhcj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWkuc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYWN0aW9uLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLWJhci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd0JhY2tCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKSBoYXNNZW51ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSB1aVNlcnZpY2U6IFVJU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGdldCBhbmRyb2lkKCkge1xuICAgIHJldHVybiBpc0FuZHJvaWQ7XG4gIH1cblxuICBnZXQgY2FuR29CYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSAmJiB0aGlzLnNob3dCYWNrQnV0dG9uO1xuICB9XG5cbiAgb25Hb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBvbkxvYWRlZEFjdGlvbkJhcigpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBjb25zdCBhbmRyb2lkVG9vbGJhciA9IHRoaXMucGFnZS5hY3Rpb25CYXIubmF0aXZlVmlldztcbiAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBhbmRyb2lkVG9vbGJhci5nZXROYXZpZ2F0aW9uSWNvbigpO1xuICAgICAgbGV0IGNvbG9yID0gJyMxNzE3MTcnO1xuICAgICAgaWYgKHRoaXMuaGFzTWVudSkge1xuICAgICAgICBjb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICAgIGlmIChiYWNrQnV0dG9uKSB7XG4gICAgICAgIGJhY2tCdXR0b24uc2V0Q29sb3JGaWx0ZXIoXG4gICAgICAgICAgYW5kcm9pZC5ncmFwaGljcy5Db2xvci5wYXJzZUNvbG9yKGNvbG9yKSxcbiAgICAgICAgICAoPGFueT5hbmRyb2lkLmdyYXBoaWNzKS5Qb3J0ZXJEdWZmLk1vZGUuU1JDX0FUT1BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy51aVNlcnZpY2UudG9nZ2xlRHJhd2VyKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=