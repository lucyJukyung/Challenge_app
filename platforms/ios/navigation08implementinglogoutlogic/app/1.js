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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdTQUF3UywrQ0FBK0Msa2NBQWtjLDZDQUE2QyxnaUI7Ozs7Ozs7QUNBdDBCLG1COzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQUN5QjtBQUVoQjtBQUNwQjtBQVF0QztJQUtFLGdDQUNVLGNBQThCLEVBQzlCLFNBQW9CLEVBQ3BCLE1BQXdCLEVBQ3hCLGdCQUFtQztRQUhuQyxtQkFBYyxHQUFkLGNBQWMsQ0FB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UiwyREFBSyxFQUFFOztxREFBZTtJQUNkO1FBQVIsMkRBQUssRUFBRTs7OERBQXVCO0lBQ3RCO1FBQVIsMkRBQUssRUFBRTs7dURBQWdCO0lBSGIsa0JBQWtCO1FBTjlCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixxRkFBMEM7O1NBRzNDLENBQUM7eUNBT2dCLDZEQUFJO1lBQ0YsNEVBQWdCO1lBQ2IscURBQVM7T0FSbkIsa0JBQWtCLENBNkM5QjtJQUFELHlCQUFDO0NBQUE7QUE3QzhCIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXIgXFxuICBbdGl0bGVdPVxcXCJpc0NyZWF0aW5nID8gJ1JlcGxhY2UgQ2hhbGxlbmdlJyA6ICdFZGl0IENoYWxsZW5nZSdcXFwiXFxuICBbaGFzTWVudV09XFxcImZhbHNlXFxcIj48L25zLWFjdGlvbi1iYXI+XFxuPEZsZXhib3hMYXlvdXQgXFxuICBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgPExhYmVsIFxcbiAgICAgIGNsYXNzPVxcXCJsYWJlbFxcXCIgXFxuICAgICAgdGV4dD1cXFwiVGl0bGVcXFwiIFxcbiAgICAgIFtuZ0NsYXNzXT1cXFwie2ludmFsaWQ6ICF0aXRsZUN0cmwudmFsaWQgJiYgdGl0bGVDdHJsLnRvdWNoZWR9XFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPFRleHRGaWVsZCBcXG4gICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiIFxcbiAgICAgIHJldHVybktleVR5cGU9XFxcIm5leHRcXFwiIFxcbiAgICAgIHJlcXVpcmVkXFxuICAgICAgWyhuZ01vZGVsKV09XFxcInRpdGxlXFxcIlxcbiAgICAgICN0aXRsZUN0cmw9XFxcIm5nTW9kZWxcXFwiXFxuICAgID48L1RleHRGaWVsZD5cXG4gICAgPExhYmVsIFxcbiAgICAgICpuZ0lmPVxcXCIhdGl0bGVDdHJsLnZhbGlkICYmIHRpdGxlQ3RybC50b3VjaGVkXFxcIiBcXG4gICAgICB0ZXh0PVxcXCJQbGVhc2UgZW50ZXIgYSB2YWlsZCB0aXRsZVxcXCJcXG4gICAgPjwvTGFiZWw+XFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCI+XFxuICAgIDxMYWJlbCBcXG4gICAgIGNsYXNzPVxcXCJsYWJlbFxcXCIgXFxuICAgICB0ZXh0PVxcXCJEZXNjcmlwdGlvblxcXCJcXG4gICAgIFtuZ0NsYXNzXT1cXFwie2ludmFsaWQ6ICFkZXNjQ3RybC52YWxpZCAmJiBkZXNjQ3RybC50b3VjaGVkfVxcXCJcXG4gICAgPjwvTGFiZWw+XFxuICAgIDxUZXh0VmlldyBcXG4gICAgICBjbGFzcz1cXFwiaW5wdXRcXFwiIFxcbiAgICAgIHJldHVybktleVR5cGU9XFxcImRvbmVcXFwiIFxcbiAgICAgIHJlcXVpcmVkXFxuICAgICAgWyhuZ01vZGVsKV09XFxcImRlc2NyaXB0aW9uXFxcIlxcbiAgICAgICNkZXNjQ3RybD1cXFwibmdNb2RlbFxcXCJcXG4gICAgICA+PC9UZXh0Vmlldz5cXG4gICAgPExhYmVsIFxcbiAgICAgICpuZ0lmPVxcXCIhZGVzY0N0cmwudmFsaWQgJiYgZGVzY0N0cmwudG91Y2hlZFxcXCJcXG4gICAgICB0ZXh0PVxcXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkZXNjcmlwdGlvblxcXCJcXG4gICAgPjwvTGFiZWw+XFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPEJ1dHRvbiBcXG4gICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgXFxuICAgIHRleHQ9XFxcIlNhdmVcXFwiIFxcbiAgICBbaXNFbmFibGVkXT1cXFwidGl0bGVDdHJsLnZhbGlkICYmIGRlc2NDdHJsLnZhbGlkXFxcIiBcXG4gICAgKHRhcCk9XFxcIm9uU3VibWl0KHRpdGxlQ3RybC52YWx1ZSwgZGVzY0N0cmwudmFsdWUpXFxcIj48L0J1dHRvbj5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY2hhbGxlbmdlLWVkaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuc2NzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0NyZWF0aW5nID0gdHJ1ZTtcbiAgdGl0bGUgPSAnJztcbiAgZGVzY3JpcHRpb24gPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgY2hhbGxlbmdlU2VydmljZTogQ2hhbGxlbmdlc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHBhcmFtTWFwLmdldCgnbW9kZScpKTtcbiAgICAvLyB9KTsgLy90aGlzIHdpbGwgd29yayB3aXRoIGNhY2hlIG1lYW5zIHdpbGwgbm90IHJlbG9hZCBvbmNlIGl0IGlzIGxvYWRlZC4gXG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUuc3Vic2NyaWJlKGFjdGl2YXRlZFJvdXRlID0+IHtcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbU1hcCA9PiB7XG4gICAgICAgIGlmICghcGFyYW1NYXAuaGFzKCdtb2RlJykpIHtcbiAgICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSB0cnVlOyAvL2lzIGNyZWF0aW5nIG5ld1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHBhcmFtTWFwLmdldCgnbW9kZScpICE9PSAnZWRpdCc7IC8vaXNDcmVhdGluZyBpcyBmYWxzZSBtZWFucyBpdCBpcyBlZGl0aW5nXG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5pc0NyZWF0aW5nKSB7IC8vdW5pdCAxNjZcbiAgICAgICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UuY3VycmVudENoYWxsZW5nZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGNoYWxsZW5nZS50aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjaGFsbGVuZ2UuZGVzY3JpcHRpb247XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7IC8vdW5pdCAxNjZcbiAgICBpZih0aGlzLmlzQ3JlYXRpbmcpIHtcbiAgICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS5jcmVhdGVOZXdDaGFsbGVuZ2UodGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLnVwZGF0ZUNoYWxsZW5nZSh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICd+L2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NoYWxsZW5nZUVkaXRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCAvL2ZvciBuZ01vZGVsIHVzZVxuICAgIC8vIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IH1cbiAgICBdKSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUVkaXRNb2R1bGUge31cbiIsImltcG9ydCB7IERheSwgRGF5U3RhdHVzIH0gZnJvbSAnLi9kYXkubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcsIFxuICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZywgXG4gICAgICAgIHB1YmxpYyB5ZWFyOiBudW1iZXIsIFxuICAgICAgICBwdWJsaWMgbW9udGg6IG51bWJlciwgXG4gICAgICAgIHByaXZhdGUgX2RheXM6IERheVtdID0gW11cbiAgICApIHtcbiAgICAgICAgaWYoX2RheXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5jdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7IC8vMCBnaXZlcyB0aGUgbGFzdCBkYXkgb2YgdGhlIHByZXZpb3VzIG1vbnRoIFxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF5c0luTW9udGggKyAxOyBpKyspIHsgLy9tYXggZGF5c0luTW9udGggd2lsbCBiZSAzMSBmcm9tIGNvbnN0IGRheXNJbk1vbnRoXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgaSk7XG4gICAgICAgIGNvbnN0IGRheUluV2VlayA9IGRhdGUuZ2V0RGF5KCk7IC8vZ2l2ZXMgc3VuPTAgbW9uPTEgdHVlPTIuLi5cbiAgICAgICAgdGhpcy5fZGF5cy5wdXNoKHsgZGF5SW5Nb250aDogaSwgZGF5SW5XZWVrOiBkYXlJbldlZWssIGRhdGU6IGRhdGUsIHN0YXR1czogRGF5U3RhdHVzLk9wZW59KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjdXJyZW50RGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF5cy5maW5kKGQgPT4gZC5kYXlJbk1vbnRoID09PSBuZXcgRGF0ZSgpLmdldERhdGUoKSk7XG4gICAgfVxuXG4gICAgZ2V0IGRheXMoKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fZGF5c107XG4gICAgfVxufSIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENoYWxsZW5nZSB9IGZyb20gJy4vY2hhbGxlbmdlcy5tb2RlbCc7XG5pbXBvcnQgeyBEYXlTdGF0dXMsIERheSB9IGZyb20gJy4vZGF5Lm1vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSAoeyBwcm92aWRlZEluOiAncm9vdCcgfSkgLy9tYWtlIGl0IGF2YWlsYWJsZSB0aHJvdWdodG91dCB0aGUgYXBwXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2N1cnJlbnRDaGFsbGVuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENoYWxsZW5nZT4obnVsbCk7IC8vdW5pdCAxNTFcbiAgICBwcml2YXRlIHVzZXJTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyU3ViID0gdGhpcy5hdXRoU2VydmljZS51c2VyLnN1YnNjcmliZSh1c2VyID0+IHsgLy91bml0IDE5NFxuICAgICAgICAgICAgaWYoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50Q2hhbGxlbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYWxsZW5nZS5hc09ic2VydmFibGUoKTsgLy91bml0IDE1M1xuICAgIH1cblxuICAgIGZldGNoQ3VycmVudENoYWxsZW5nZSgpIHsgLy91bml0IDE3M1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS51c2VyLnBpcGUoIC8vdW5pdCAxODZcbiAgICAgICAgICAgIHRha2UoMSksIC8vb25seSBnZXQgdGhlIGxhdGVzdCB2YWx1ZSBhbmQgYXV0b21hdGljYWxseSB1bnN1YnNjcmliZVxuICAgICAgICAgICAgc3dpdGNoTWFwKGN1cnJlbnRVc2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZighY3VycmVudFVzZXIgfHwgIWN1cnJlbnRVc2VyLmlzQXV0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vaWYgdXNlciBub24gZXhpc3Qgb3IgaXMgbm90IGF1dGggdGhlbiBmaW5pc2ggdGhlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBfZGF5czogRGF5W107XG4gICAgICAgICAgICAgICAgfT4oYGh0dHBzOi8vbnMtbmctY291cnNlLTM5OWFkLmZpcmViYXNlaW8uY29tL2NoYWxsZW5nZS8ke2N1cnJlbnRVc2VyLmlkfS5qc29uP2F1dGg9JHtjdXJyZW50VXNlci50b2tlbn1gKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFwKHJlc0RhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZGVkQ2hhbGxlbmdlID0gbmV3IENoYWxsZW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0RhdGEudGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLnllYXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS5tb250aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLl9kYXlzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KGxvYWRlZENoYWxsZW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdDaGFsbGVuZ2UodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBuZXdDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCkpO1xuXG4gICAgICAgIC8vc2F2ZSBpdCB0byBzZXJ2ZXIgL3VuaXQgMTcyXG4gICAgICAgIHRoaXMuc2F2ZVRvU2VydmVyKG5ld0NoYWxsZW5nZSk7XG5cbiAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KG5ld0NoYWxsZW5nZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2hhbGxlbmdlKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHsgLy91bml0IDE2NlxuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2hhbGxlbmdlID0gbmV3IENoYWxsZW5nZSh0aXRsZSwgZGVzY3JpcHRpb24sIGNoYWxsZW5nZS55ZWFyLCBjaGFsbGVuZ2UubW9udGgsIGNoYWxsZW5nZS5kYXlzKTtcbiAgICAgICAgICAgIC8vc2VuZCB0byBhIHNlcnZlclxuICAgICAgICAgICAgdGhpcy5zYXZlVG9TZXJ2ZXIodXBkYXRlZENoYWxsZW5nZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQodXBkYXRlZENoYWxsZW5nZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlRGF5U3RhdHVzKGRheUluTW9udGg6IG51bWJlciwgc3RhdHVzOiBEYXlTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgICAgICAgaWYoIWNoYWxsZW5nZSB8fCBjaGFsbGVuZ2UuZGF5cy5sZW5ndGggPCBkYXlJbk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvL3VuaXQgMTU3OiBjaGVjayB0aGUgY2hhbGxlbmdlIGhhcyBsZXNzIGRheXMgZWxlbWVudCB0aGFuIGRheUluTW9udGggKGl0IHNob3VsZG4ndCBoYXZlIDMwIGRheXMgaW4gRmViKS5cbiAgICAgICAgICAgICAgICAvL2lmIGNoYWxsZW5nZSBpcyBlbXB0eSBPUiBpbnZhbGlkIG51bWJlciBvZiBkYXlzIHRoZSBmdW5jdGlvbiB3aWxsIHN0b3AuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXlJbmRleCA9IGNoYWxsZW5nZS5kYXlzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICBkID0+IGQuZGF5SW5Nb250aCA9PT0gZGF5SW5Nb250aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoYWxsZW5nZS5kYXlzW2RheUluZGV4XS5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQoY2hhbGxlbmdlKTtcbiAgICAgICAgICAgIC8vc2F2ZSB0aGlzIHRvIGEgc2VydmVyXG4gICAgICAgICAgICB0aGlzLnNhdmVUb1NlcnZlcihjaGFsbGVuZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51c2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlVG9TZXJ2ZXIoY2hhbGxlbmdlOiBDaGFsbGVuZ2UpIHsgXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXNlci5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChjdXJyZW50VXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIWN1cnJlbnRVc2VyIHx8ICFjdXJyZW50VXNlci5pc0F1dGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpOyAvL2lmIHVzZXIgbm9uIGV4aXN0IG9yIGlzIG5vdCBhdXRoIHRoZW4gZmluaXNoIHRoZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgaHR0cHM6Ly9ucy1uZy1jb3Vyc2UtMzk5YWQuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLyR7Y3VycmVudFVzZXIuaWR9Lmpzb24/YXV0aD0ke2N1cnJlbnRVc2VyLnRva2VufWAsIGNoYWxsZW5nZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQWN0aW9uQmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge30iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBbdGl0bGVdPVxcXCJ0aXRsZVxcXCIgKGxvYWRlZCk9XFxcIm9uTG9hZGVkQWN0aW9uQmFyKClcXFwiPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgdGV4dD1cXFwiQmFja1xcXCJcXG4gICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiXFxuICAgICpuZ0lmPVxcXCJjYW5Hb0JhY2tcXFwiXFxuICAgICh0YXApPVxcXCJvbkdvQmFjaygpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDxOYXZpZ2F0aW9uQnV0dG9uXFxuICAgICpuZ0lmPVxcXCJhbmRyb2lkICYmIGhhc01lbnVcXFwiXFxuICAgIGljb249XFxcInJlczovL21lbnVfYmxhY2tcXFwiXFxuICAgICh0YXApPVxcXCJvblRvZ2dsZU1lbnUoKVxcXCJcXG4gID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8QWN0aW9uSXRlbVxcbiAgICAqbmdJZj1cXFwiIWFuZHJvaWQgJiYgaGFzTWVudVxcXCJcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIlxcbiAgICAodGFwKT1cXFwib25Ub2dnbGVNZW51KClcXFwiXFxuICA+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMGM5O1xcXCIgY2xhc3M9XFxcImZhIG0tNVxcXCI+PC9MYWJlbD5cXG4gIDwvQWN0aW9uSXRlbT5cXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gPCEtLSBkZWZhdWx0IG5hdGl2ZXNjcmlwdCAgLS0+XFxuPC9BY3Rpb25CYXI+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS5zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hY3Rpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93QmFja0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGhhc01lbnUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZ2V0IGFuZHJvaWQoKSB7XG4gICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgfVxuXG4gIGdldCBjYW5Hb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmNhbkdvQmFjaygpICYmIHRoaXMuc2hvd0JhY2tCdXR0b247XG4gIH1cblxuICBvbkdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkQWN0aW9uQmFyKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IGFuZHJvaWRUb29sYmFyID0gdGhpcy5wYWdlLmFjdGlvbkJhci5uYXRpdmVWaWV3O1xuICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGFuZHJvaWRUb29sYmFyLmdldE5hdmlnYXRpb25JY29uKCk7XG4gICAgICBsZXQgY29sb3IgPSAnIzE3MTcxNyc7XG4gICAgICBpZiAodGhpcy5oYXNNZW51KSB7XG4gICAgICAgIGNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2tCdXR0b24pIHtcbiAgICAgICAgYmFja0J1dHRvbi5zZXRDb2xvckZpbHRlcihcbiAgICAgICAgICBhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoY29sb3IpLFxuICAgICAgICAgICg8YW55PmFuZHJvaWQuZ3JhcGhpY3MpLlBvcnRlckR1ZmYuTW9kZS5TUkNfQVRPUFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnVpU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==