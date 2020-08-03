(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./app/challenges/challenge-edit/challenge-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar \n  [title]=\"isCreating ? 'Replace Challenge' : 'Edit Challenge'\"\n  [hasMenu]=\"false\"></ns-action-bar>\n<FlexboxLayout \n  class=\"form\">\n  <StackLayout class=\"input-field\">\n    <Label \n      class=\"label\" \n      text=\"Title\" \n      [ngClass]=\"{invalid: !titleCtrl.valid && titleCtrl.touched}\"\n    ></Label>\n    <TextField \n      class=\"input\" \n      returnKeyType=\"next\" \n      required\n      [(ngModel)]=\"title\"\n      #titleCtrl=\"ngModel\"\n    ></TextField>\n    <Label \n      *ngIf=\"!titleCtrl.valid && titleCtrl.touched\" \n      text=\"Please enter a vaild title\"\n    ></Label>\n  </StackLayout>\n  <StackLayout class=\"input-field\">\n    <Label \n     class=\"label\" \n     text=\"Description\"\n     [ngClass]=\"{invalid: !descCtrl.valid && descCtrl.touched}\"\n    ></Label>\n    <TextView \n      class=\"input\" \n      returnKeyType=\"done\" \n      required\n      [(ngModel)]=\"description\"\n      #descCtrl=\"ngModel\"\n      ></TextView>\n    <Label \n      *ngIf=\"!descCtrl.valid && descCtrl.touched\"\n      text=\"Please enter a valid description\"\n    ></Label>\n  </StackLayout>\n  <Button \n    class=\"btn btn-primary\" \n    text=\"Save\" \n    [isEnabled]=\"titleCtrl.valid && descCtrl.valid\" \n    (tap)=\"onSubmit(titleCtrl.value, descCtrl.value)\"></Button>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditComponent", function() { return ChallengeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challenges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/challenges.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");





var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent(activatedRoute, pageRoute, router, challengeService) {
        this.activatedRoute = activatedRoute;
        this.pageRoute = pageRoute;
        this.router = router;
        this.challengeService = challengeService;
        this.isCreating = true;
        this.title = '';
        this.description = '';
    }
    ChallengeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //   console.log(paramMap.get('mode'));
        // }); //this will work with cache means will not reload once it is loaded. 
        this.pageRoute.activatedRoute.subscribe(function (activatedRoute) {
            activatedRoute.paramMap.subscribe(function (paramMap) {
                if (!paramMap.has('mode')) {
                    _this.isCreating = true; //is creating new
                }
                else {
                    _this.isCreating = paramMap.get('mode') !== 'edit'; //isCreating is false means it is editing
                }
                if (!_this.isCreating) { //unit 166
                    _this.challengeService.currentChallenge.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (challenge) {
                        _this.title = challenge.title;
                        _this.description = challenge.description;
                    });
                }
            });
        });
    };
    ChallengeEditComponent.prototype.onSubmit = function (title, description) {
        if (this.isCreating) {
            this.challengeService.createNewChallenge(title, description);
        }
        else {
            this.challengeService.updateChallenge(title, description);
        }
        this.router.backToPreviousPage();
    };
    ChallengeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-challenge-edit',
            template: __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["PageRoute"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _challenges_service__WEBPACK_IMPORTED_MODULE_3__["ChallengesService"]])
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());



/***/ }),

/***/ "./app/challenges/challenge-edit/challenge-edit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeEditModule", function() { return ChallengeEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenge_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/challenge-edit/challenge-edit.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/shared/shared.module.ts");






var ChallengeEditModule = /** @class */ (function () {
    function ChallengeEditModule() {
    }
    ChallengeEditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_challenge_edit_component__WEBPACK_IMPORTED_MODULE_4__["ChallengeEditComponent"]],
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                nativescript_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                // NativeScriptRouterModule,
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"].forChild([
                    { path: '', component: _challenge_edit_component__WEBPACK_IMPORTED_MODULE_4__["ChallengeEditComponent"] }
                ]),
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], ChallengeEditModule);
    return ChallengeEditModule;
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

/***/ "./app/challenges/challenges.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Challenge", function() { return Challenge; });
/* harmony import */ var _day_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/challenges/day.model.ts");

var Challenge = /** @class */ (function () {
    function Challenge(title, description, year, month, _days) {
        if (_days === void 0) { _days = []; }
        this.title = title;
        this.description = description;
        this.year = year;
        this.month = month;
        this._days = _days;
        if (_days.length > 0) {
            return;
        }
        // this.currentYear = new Date().getFullYear();
        // this.currentMonth = new Date().getMonth();
        var daysInMonth = new Date(year, month + 1, 0).getDate(); //0 gives the last day of the previous month 
        for (var i = 1; i < daysInMonth + 1; i++) { //max daysInMonth will be 31 from const daysInMonth
            var date = new Date(year, month, i);
            var dayInWeek = date.getDay(); //gives sun=0 mon=1 tue=2...
            this._days.push({ dayInMonth: i, dayInWeek: dayInWeek, date: date, status: _day_model__WEBPACK_IMPORTED_MODULE_0__["DayStatus"].Open });
        }
    }
    Object.defineProperty(Challenge.prototype, "currentDay", {
        get: function () {
            return this._days.find(function (d) { return d.dayInMonth === new Date().getDate(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Challenge.prototype, "days", {
        get: function () {
            return this._days.slice();
        },
        enumerable: true,
        configurable: true
    });
    return Challenge;
}());



/***/ }),

/***/ "./app/challenges/challenges.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesService", function() { return ChallengesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _challenges_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/challenges.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/auth/auth.service.ts");






var ChallengesService = /** @class */ (function () {
    function ChallengesService(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this._currentChallenge = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null); //unit 151
        this.userSub = this.authService.user.subscribe(function (user) {
            if (!user) {
                _this._currentChallenge.next(null);
            }
        });
    }
    Object.defineProperty(ChallengesService.prototype, "currentChallenge", {
        get: function () {
            return this._currentChallenge.asObservable(); //unit 153
        },
        enumerable: true,
        configurable: true
    });
    ChallengesService.prototype.fetchCurrentChallenge = function () {
        var _this = this;
        return this.authService.user.pipe(//unit 186
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), //only get the latest value and automatically unsubscribe
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (currentUser) {
            if (!currentUser || !currentUser.isAuth) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); //if user non exist or is not auth then finish the function
            }
            return _this.http.get("https://ns-ng-course-399ad.firebaseio.com/challenge/" + currentUser.id + ".json?auth=" + currentUser.token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            if (resData) {
                var loadedChallenge = new _challenges_model__WEBPACK_IMPORTED_MODULE_4__["Challenge"](resData.title, resData.description, resData.year, resData.month, resData._days);
                _this._currentChallenge.next(loadedChallenge);
            }
        }));
    };
    ChallengesService.prototype.createNewChallenge = function (title, description) {
        var newChallenge = new _challenges_model__WEBPACK_IMPORTED_MODULE_4__["Challenge"](title, description, new Date().getFullYear(), new Date().getMonth());
        //save it to server /unit 172
        this.saveToServer(newChallenge);
        this._currentChallenge.next(newChallenge);
    };
    ChallengesService.prototype.updateChallenge = function (title, description) {
        var _this = this;
        this._currentChallenge.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (challenge) {
            var updatedChallenge = new _challenges_model__WEBPACK_IMPORTED_MODULE_4__["Challenge"](title, description, challenge.year, challenge.month, challenge.days);
            //send to a server
            _this.saveToServer(updatedChallenge);
            _this._currentChallenge.next(updatedChallenge);
        });
    };
    ChallengesService.prototype.updateDayStatus = function (dayInMonth, status) {
        var _this = this;
        this._currentChallenge.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (challenge) {
            if (!challenge || challenge.days.length < dayInMonth) {
                return; //unit 157: check the challenge has less days element than dayInMonth (it shouldn't have 30 days in Feb).
                //if challenge is empty OR invalid number of days the function will stop.
            }
            var dayIndex = challenge.days.findIndex(function (d) { return d.dayInMonth === dayInMonth; });
            challenge.days[dayIndex].status = status;
            _this._currentChallenge.next(challenge);
            //save this to a server
            _this.saveToServer(challenge);
        });
    };
    ChallengesService.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    ChallengesService.prototype.saveToServer = function (challenge) {
        var _this = this;
        this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (currentUser) {
            if (!currentUser || !currentUser.isAuth) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); //if user non exist or is not auth then finish the function
            }
            return _this.http.put("https://ns-ng-course-399ad.firebaseio.com/challenge/" + currentUser.id + ".json?auth=" + currentUser.token, challenge);
        })).subscribe(function (res) {
            console.log(res);
        });
    };
    ChallengesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }) //make it available throughtout the app
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ChallengesService);
    return ChallengesService;
}());



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdTQUF3UywrQ0FBK0Msa2NBQWtjLDZDQUE2QyxnaUI7Ozs7Ozs7QUNBdDBCLG1COzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQUN5QjtBQUVoQjtBQUNwQjtBQVF0QztJQUtFLGdDQUNVLGNBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLE1BQXdCLEVBQ3hCLGdCQUFtQztRQUhuQyxtQkFBYyxHQUFkLGNBQWMsQ0FB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LDJEQUFLLEVBQUU7O3FEQUFlO0lBQ2Q7UUFBUiwyREFBSyxFQUFFOzs4REFBdUI7SUFDdEI7UUFBUiwyREFBSyxFQUFFOzt1REFBZ0I7SUFIYixrQkFBa0I7UUFOOUIsK0RBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLHFGQUEwQzs7U0FHM0MsQ0FBQzt5Q0FPZ0IsNkRBQUk7WUFDRiw0RUFBZ0I7WUFDYixxREFBUztPQVJuQixrQkFBa0IsQ0E2QzlCO0lBQUQseUJBQUM7Q0FBQTtBQTdDOEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8bnMtYWN0aW9uLWJhciBcXG4gIFt0aXRsZV09XFxcImlzQ3JlYXRpbmcgPyAnUmVwbGFjZSBDaGFsbGVuZ2UnIDogJ0VkaXQgQ2hhbGxlbmdlJ1xcXCJcXG4gIFtoYXNNZW51XT1cXFwiZmFsc2VcXFwiPjwvbnMtYWN0aW9uLWJhcj5cXG48RmxleGJveExheW91dCBcXG4gIGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICA8TGFiZWwgXFxuICAgICAgY2xhc3M9XFxcImxhYmVsXFxcIiBcXG4gICAgICB0ZXh0PVxcXCJUaXRsZVxcXCIgXFxuICAgICAgW25nQ2xhc3NdPVxcXCJ7aW52YWxpZDogIXRpdGxlQ3RybC52YWxpZCAmJiB0aXRsZUN0cmwudG91Y2hlZH1cXFwiXFxuICAgID48L0xhYmVsPlxcbiAgICA8VGV4dEZpZWxkIFxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgXFxuICAgICAgcmVxdWlyZWRcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwidGl0bGVcXFwiXFxuICAgICAgI3RpdGxlQ3RybD1cXFwibmdNb2RlbFxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8TGFiZWwgXFxuICAgICAgKm5nSWY9XFxcIiF0aXRsZUN0cmwudmFsaWQgJiYgdGl0bGVDdHJsLnRvdWNoZWRcXFwiIFxcbiAgICAgIHRleHQ9XFxcIlBsZWFzZSBlbnRlciBhIHZhaWxkIHRpdGxlXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgPExhYmVsIFxcbiAgICAgY2xhc3M9XFxcImxhYmVsXFxcIiBcXG4gICAgIHRleHQ9XFxcIkRlc2NyaXB0aW9uXFxcIlxcbiAgICAgW25nQ2xhc3NdPVxcXCJ7aW52YWxpZDogIWRlc2NDdHJsLnZhbGlkICYmIGRlc2NDdHJsLnRvdWNoZWR9XFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPFRleHRWaWV3IFxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgXFxuICAgICAgcmVxdWlyZWRcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwiZGVzY3JpcHRpb25cXFwiXFxuICAgICAgI2Rlc2NDdHJsPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgID48L1RleHRWaWV3PlxcbiAgICA8TGFiZWwgXFxuICAgICAgKm5nSWY9XFxcIiFkZXNjQ3RybC52YWxpZCAmJiBkZXNjQ3RybC50b3VjaGVkXFxcIlxcbiAgICAgIHRleHQ9XFxcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRlc2NyaXB0aW9uXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8QnV0dG9uIFxcbiAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBcXG4gICAgdGV4dD1cXFwiU2F2ZVxcXCIgXFxuICAgIFtpc0VuYWJsZWRdPVxcXCJ0aXRsZUN0cmwudmFsaWQgJiYgZGVzY0N0cmwudmFsaWRcXFwiIFxcbiAgICAodGFwKT1cXFwib25TdWJtaXQodGl0bGVDdHJsLnZhbHVlLCBkZXNjQ3RybC52YWx1ZSlcXFwiPjwvQnV0dG9uPlxcbjwvRmxleGJveExheW91dD5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VzU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5zY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQ3JlYXRpbmcgPSB0cnVlO1xuICB0aXRsZSA9ICcnO1xuICBkZXNjcmlwdGlvbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBjaGFsbGVuZ2VTZXJ2aWNlOiBDaGFsbGVuZ2VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1NYXAgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cocGFyYW1NYXAuZ2V0KCdtb2RlJykpO1xuICAgIC8vIH0pOyAvL3RoaXMgd2lsbCB3b3JrIHdpdGggY2FjaGUgbWVhbnMgd2lsbCBub3QgcmVsb2FkIG9uY2UgaXQgaXMgbG9hZGVkLiBcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5zdWJzY3JpYmUoYWN0aXZhdGVkUm91dGUgPT4ge1xuICAgICAgYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU1hcC5oYXMoJ21vZGUnKSkge1xuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWU7IC8vaXMgY3JlYXRpbmcgbmV3XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gcGFyYW1NYXAuZ2V0KCdtb2RlJykgIT09ICdlZGl0JzsgLy9pc0NyZWF0aW5nIGlzIGZhbHNlIG1lYW5zIGl0IGlzIGVkaXRpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmlzQ3JlYXRpbmcpIHsgLy91bml0IDE2NlxuICAgICAgICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS5jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gY2hhbGxlbmdlLnRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNoYWxsZW5nZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHsgLy91bml0IDE2NlxuICAgIGlmKHRoaXMuaXNDcmVhdGluZykge1xuICAgICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLmNyZWF0ZU5ld0NoYWxsZW5nZSh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UudXBkYXRlQ2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2hhbGxlbmdlRWRpdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIC8vZm9yIG5nTW9kZWwgdXNlXG4gICAgLy8gTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfVxuICAgIF0pLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuL2RheS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZywgXG4gICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLCBcbiAgICAgICAgcHVibGljIHllYXI6IG51bWJlciwgXG4gICAgICAgIHB1YmxpYyBtb250aDogbnVtYmVyLCBcbiAgICAgICAgcHJpdmF0ZSBfZGF5czogRGF5W10gPSBbXVxuICAgICkge1xuICAgICAgICBpZihfZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTsgLy8wIGdpdmVzIHRoZSBsYXN0IGRheSBvZiB0aGUgcHJldmlvdXMgbW9udGggXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXlzSW5Nb250aCArIDE7IGkrKykgeyAvL21heCBkYXlzSW5Nb250aCB3aWxsIGJlIDMxIGZyb20gY29uc3QgZGF5c0luTW9udGhcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBpKTtcbiAgICAgICAgY29uc3QgZGF5SW5XZWVrID0gZGF0ZS5nZXREYXkoKTsgLy9naXZlcyBzdW49MCBtb249MSB0dWU9Mi4uLlxuICAgICAgICB0aGlzLl9kYXlzLnB1c2goeyBkYXlJbk1vbnRoOiBpLCBkYXlJbldlZWs6IGRheUluV2VlaywgZGF0ZTogZGF0ZSwgc3RhdHVzOiBEYXlTdGF0dXMuT3Blbn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnREYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXlzLmZpbmQoZCA9PiBkLmRheUluTW9udGggPT09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgZGF5cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9kYXlzXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzLm1vZGVsJztcbmltcG9ydCB7IERheVN0YXR1cywgRGF5IH0gZnJvbSAnLi9kYXkubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlICh7IHByb3ZpZGVkSW46ICdyb290JyB9KSAvL21ha2UgaXQgYXZhaWxhYmxlIHRocm91Z2h0b3V0IHRoZSBhcHBcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfY3VycmVudENoYWxsZW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2hhbGxlbmdlPihudWxsKTsgLy91bml0IDE1MVxuICAgIHByaXZhdGUgdXNlclN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXJTdWIgPSB0aGlzLmF1dGhTZXJ2aWNlLnVzZXIuc3Vic2NyaWJlKHVzZXIgPT4geyAvL3VuaXQgMTk0XG4gICAgICAgICAgICBpZighdXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLmFzT2JzZXJ2YWJsZSgpOyAvL3VuaXQgMTUzXG4gICAgfVxuXG4gICAgZmV0Y2hDdXJyZW50Q2hhbGxlbmdlKCkgeyAvL3VuaXQgMTczXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnVzZXIucGlwZSggLy91bml0IDE4NlxuICAgICAgICAgICAgdGFrZSgxKSwgLy9vbmx5IGdldCB0aGUgbGF0ZXN0IHZhbHVlIGFuZCBhdXRvbWF0aWNhbGx5IHVuc3Vic2NyaWJlXG4gICAgICAgICAgICBzd2l0Y2hNYXAoY3VycmVudFVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFjdXJyZW50VXNlciB8fCAhY3VycmVudFVzZXIuaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTsgLy9pZiB1c2VyIG5vbiBleGlzdCBvciBpcyBub3QgYXV0aCB0aGVuIGZpbmlzaCB0aGUgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBtb250aDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIF9kYXlzOiBEYXlbXTtcbiAgICAgICAgICAgICAgICB9PihgaHR0cHM6Ly9ucy1uZy1jb3Vyc2UtMzk5YWQuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLyR7Y3VycmVudFVzZXIuaWR9Lmpzb24/YXV0aD0ke2N1cnJlbnRVc2VyLnRva2VufWApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAocmVzRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkZWRDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS50aXRsZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0RhdGEueWVhciwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLm1vbnRoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0RhdGEuX2RheXNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobG9hZGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0NoYWxsZW5nZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5ld0NoYWxsZW5nZSA9IG5ldyBDaGFsbGVuZ2UodGl0bGUsIGRlc2NyaXB0aW9uLCBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSk7XG5cbiAgICAgICAgLy9zYXZlIGl0IHRvIHNlcnZlciAvdW5pdCAxNzJcbiAgICAgICAgdGhpcy5zYXZlVG9TZXJ2ZXIobmV3Q2hhbGxlbmdlKTtcblxuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobmV3Q2hhbGxlbmdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFsbGVuZ2UodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykgeyAvL3VuaXQgMTY2XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoY2hhbGxlbmdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hhbGxlbmdlLnllYXIsIGNoYWxsZW5nZS5tb250aCwgY2hhbGxlbmdlLmRheXMpO1xuICAgICAgICAgICAgLy9zZW5kIHRvIGEgc2VydmVyXG4gICAgICAgICAgICB0aGlzLnNhdmVUb1NlcnZlcih1cGRhdGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dCh1cGRhdGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVEYXlTdGF0dXMoZGF5SW5Nb250aDogbnVtYmVyLCBzdGF0dXM6IERheVN0YXR1cykge1xuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICBpZighY2hhbGxlbmdlIHx8IGNoYWxsZW5nZS5kYXlzLmxlbmd0aCA8IGRheUluTW9udGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vdW5pdCAxNTc6IGNoZWNrIHRoZSBjaGFsbGVuZ2UgaGFzIGxlc3MgZGF5cyBlbGVtZW50IHRoYW4gZGF5SW5Nb250aCAoaXQgc2hvdWxkbid0IGhhdmUgMzAgZGF5cyBpbiBGZWIpLlxuICAgICAgICAgICAgICAgIC8vaWYgY2hhbGxlbmdlIGlzIGVtcHR5IE9SIGludmFsaWQgbnVtYmVyIG9mIGRheXMgdGhlIGZ1bmN0aW9uIHdpbGwgc3RvcC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRheUluZGV4ID0gY2hhbGxlbmdlLmRheXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIGQgPT4gZC5kYXlJbk1vbnRoID09PSBkYXlJbk1vbnRoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hhbGxlbmdlLmRheXNbZGF5SW5kZXhdLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dChjaGFsbGVuZ2UpO1xuICAgICAgICAgICAgLy9zYXZlIHRoaXMgdG8gYSBzZXJ2ZXJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVRvU2VydmVyKGNoYWxsZW5nZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVzZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhdmVUb1NlcnZlcihjaGFsbGVuZ2U6IENoYWxsZW5nZSkgeyBcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS51c2VyLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKGN1cnJlbnRVc2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZighY3VycmVudFVzZXIgfHwgIWN1cnJlbnRVc2VyLmlzQXV0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vaWYgdXNlciBub24gZXhpc3Qgb3IgaXMgbm90IGF1dGggdGhlbiBmaW5pc2ggdGhlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGBodHRwczovL25zLW5nLWNvdXJzZS0zOTlhZC5maXJlYmFzZWlvLmNvbS9jaGFsbGVuZ2UvJHtjdXJyZW50VXNlci5pZH0uanNvbj9hdXRoPSR7Y3VycmVudFVzZXIudG9rZW59YCwgY2hhbGxlbmdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBY3Rpb25CYXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtBY3Rpb25CYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fSIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIFt0aXRsZV09XFxcInRpdGxlXFxcIiAobG9hZGVkKT1cXFwib25Mb2FkZWRBY3Rpb25CYXIoKVxcXCI+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICB0ZXh0PVxcXCJCYWNrXFxcIlxcbiAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgKm5nSWY9XFxcImNhbkdvQmFja1xcXCJcXG4gICAgKHRhcCk9XFxcIm9uR29CYWNrKClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgKm5nSWY9XFxcImFuZHJvaWQgJiYgaGFzTWVudVxcXCJcXG4gICAgaWNvbj1cXFwicmVzOi8vbWVudV9ibGFja1xcXCJcXG4gICAgKHRhcCk9XFxcIm9uVG9nZ2xlTWVudSgpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDxBY3Rpb25JdGVtXFxuICAgICpuZ0lmPVxcXCIhYW5kcm9pZCAmJiBoYXNNZW51XFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiXFxuICAgICh0YXApPVxcXCJvblRvZ2dsZU1lbnUoKVxcXCJcXG4gID5cXG4gICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwYzk7XFxcIiBjbGFzcz1cXFwiZmEgbS01XFxcIj48L0xhYmVsPlxcbiAgPC9BY3Rpb25JdGVtPlxcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiA8IS0tIGRlZmF1bHQgbmF0aXZlc2NyaXB0ICAtLT5cXG48L0FjdGlvbkJhcj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWkuc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYWN0aW9uLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLWJhci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd0JhY2tCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKSBoYXNNZW51ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSB1aVNlcnZpY2U6IFVJU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIGdldCBhbmRyb2lkKCkge1xuICAgIHJldHVybiBpc0FuZHJvaWQ7XG4gIH1cblxuICBnZXQgY2FuR29CYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSAmJiB0aGlzLnNob3dCYWNrQnV0dG9uO1xuICB9XG5cbiAgb25Hb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gIH1cblxuICBvbkxvYWRlZEFjdGlvbkJhcigpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBjb25zdCBhbmRyb2lkVG9vbGJhciA9IHRoaXMucGFnZS5hY3Rpb25CYXIubmF0aXZlVmlldztcbiAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBhbmRyb2lkVG9vbGJhci5nZXROYXZpZ2F0aW9uSWNvbigpO1xuICAgICAgbGV0IGNvbG9yID0gJyMxNzE3MTcnO1xuICAgICAgaWYgKHRoaXMuaGFzTWVudSkge1xuICAgICAgICBjb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICAgIGlmIChiYWNrQnV0dG9uKSB7XG4gICAgICAgIGJhY2tCdXR0b24uc2V0Q29sb3JGaWx0ZXIoXG4gICAgICAgICAgYW5kcm9pZC5ncmFwaGljcy5Db2xvci5wYXJzZUNvbG9yKGNvbG9yKSxcbiAgICAgICAgICAoPGFueT5hbmRyb2lkLmdyYXBoaWNzKS5Qb3J0ZXJEdWZmLk1vZGUuU1JDX0FUT1BcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy51aVNlcnZpY2UudG9nZ2xlRHJhd2VyKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=