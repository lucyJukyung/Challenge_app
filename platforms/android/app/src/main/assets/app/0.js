(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.css":
/***/ (function(module, exports) {

module.exports = "TabView {\n    android-selected-tab-text-color: #7c015d;\n    /* android-selected-tab-highlight-color: #7c015d; */\n}"

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<TabView androidTabsPosition=\"bottom\">\n  <StackLayout *tabItem=\"{ title: 'Today', iconSource: 'res://check'}\">\n    <page-router-outlet name=\"today\"> </page-router-outlet>\n  </StackLayout>\n  <StackLayout *tabItem=\"{ title: 'Current Challenge', iconSource: 'res://trophy' }\">\n    <page-router-outlet name=\"currentChallenge\"> </page-router-outlet>\n  </StackLayout>\n</TabView>\n<!-- isLoading animation doesn't work with <page-router-outlet> on ios (android is okay) for some reason. \n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\">\n  <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>\n-->"

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeTabsComponent", function() { return ChallengeTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _challenges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/challenges.service.ts");





var ChallengeTabsComponent = /** @class */ (function () {
    // isLoading = false;
    function ChallengeTabsComponent(router, active, page, challengeService) {
        this.router = router;
        this.active = active;
        this.page = page;
        this.challengeService = challengeService;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.isLoading = true;
        this.challengeService.fetchCurrentChallenge().subscribe(function (res) {
            console.log('Fetched challenge...');
            // this.isLoading = false;
            _this.loadTabRoutes();
        }, function (err) {
            console.log(err);
            // this.isLoading = false;
            _this.loadTabRoutes();
        });
        this.page.actionBarHidden = true;
    };
    ChallengeTabsComponent.prototype.loadTabRoutes = function () {
        this.router.navigate([
            {
                outlets: {
                    currentChallenge: ['current-challenge'],
                    today: ['today']
                }
            }
        ], {
            relativeTo: this.active
        });
        // setTimeout(() => { //it makes a bit of delay to get the fetch the data so the UI won't break.
        // }, 10); //removed isLoading animation function due to a bug in ios. don't know why
    };
    ChallengeTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-challenge-tabs',
            template: __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"],
            _challenges_service__WEBPACK_IMPORTED_MODULE_4__["ChallengesService"]])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());



/***/ }),

/***/ "./app/challenges/challenges-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesRoutingModule", function() { return ChallengesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");





var routes = [
    {
        path: 'tabs', component: _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeTabsComponent"],
        children: [
            { path: 'today', component: _today_today_component__WEBPACK_IMPORTED_MODULE_3__["TodayComponent"], outlet: 'today' },
            {
                path: 'current-challenge',
                component: _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_4__["CurrentChallengeComponent"],
                outlet: 'currentChallenge'
            }
        ]
    },
    { path: ':mode', loadChildren: '~/app/challenges/challenge-edit/challenge-edit.module#ChallengeEditModule' },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' }
];
var ChallengesRoutingModule = /** @class */ (function () {
    function ChallengesRoutingModule() {
    }
    ChallengesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], ChallengesRoutingModule);
    return ChallengesRoutingModule;
}());



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

/***/ "./app/challenges/challenges.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesModule", function() { return ChallengesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/challenges-routing.module.ts");
/* harmony import */ var _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/challenges/current-challenge/current-challenge.component.ts");
/* harmony import */ var _today_today_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/today/today.component.ts");
/* harmony import */ var _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/challenge-tabs/challenge-tabs.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _challenge_actions_challenge_actions_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/challenges/challenge-actions/challenge-actions.module.ts");








var ChallengesModule = /** @class */ (function () {
    function ChallengesModule() {
    }
    ChallengesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _challenge_tabs_challenge_tabs_component__WEBPACK_IMPORTED_MODULE_5__["ChallengeTabsComponent"],
                _current_challenge_current_challenge_component__WEBPACK_IMPORTED_MODULE_3__["CurrentChallengeComponent"],
                _today_today_component__WEBPACK_IMPORTED_MODULE_4__["TodayComponent"]
            ],
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _challenges_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChallengesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _challenge_actions_challenge_actions_module__WEBPACK_IMPORTED_MODULE_7__["ChallengeActionsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], ChallengesModule);
    return ChallengesModule;
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

/***/ "./app/challenges/current-challenge/_current-challenge.component.common.scss":
/***/ (function(module, exports) {

module.exports = ".page {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20; }\n\n.week-day-label {\n  color: #2b0c72;\n  font-weight: bold;\n  margin: 15 0; }\n\n.day {\n  justify-content: center;\n  align-items: center;\n  width: 50;\n  height: 50;\n  margin: 10;\n  border-color: #7c015d;\n  border-width: 1;\n  border-radius: 50%;\n  color: #7c015d; }\n\n.completed {\n  background: green;\n  color: white; }\n\n.fail {\n  background: red;\n  color: white; }\n\n.not-settable {\n  background: #ccc;\n  color: #535353; }\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar title=\"Current Challenge\" [showBackButton]=\"false\">\n  <ActionItem \n    ios.position=\"right\" \n    android.position=\"actionBar\" \n    nsRouterLink=\"/challenges/replace\"\n    pageTransition=\"slideLeft\"\n    > \n    <Label text=\"&#xf0fe;\" ios:class=\"fa p-5\" android:class=\"fa p-10\" android:fontSize=\"24\"></Label>\n  </ActionItem>\n  <ActionItem \n    ios.position=\"right\" \n    android.position=\"actionBar\" \n    nsRouterLink=\"/challenges/edit\"\n    pageTransition=\"slideLeft\"\n    *ngIf=\"currentChallenge\"\n  > \n    <Label text=\"&#xf044;\" ios:class=\"fa p-5\" android:class=\"fa p-10\" android:fontSize=\"24\"></Label>\n  </ActionItem>\n</ns-action-bar>\n\n<ScrollView>\n  <FlexboxLayout class=\"page\">\n    <StackLayout *ngIf=\"!currentChallenge\">\n      <Label text=\"No challenge found!\"></Label>\n      <Button \n        class=\"btn btn-primary\" \n        text=\"Create One!\" \n        nsRouterLink=\"/challenges/replace\"\n        pageTransition=\"slideLeft\"></Button>\n    </StackLayout>\n    <StackLayout *ngIf=\"currentChallenge\" marginBottom=\"10\" marginTop=\"10\">\n      <Label\n        class=\"h1 text-center\"\n        width=\"100%\"\n        [text]=\"currentChallenge.title\"\n      ></Label>\n        <Label\n        class=\"body text-center\"\n        [text]=\"currentChallenge.description\"\n      ></Label>\n      <GridLayout \n        rows=\"auto,*,*,*,*,*,*\" \n        columns=\"*,*,*,*,*,*,*\" \n        *ngIf=\"currentChallenge\"\n      >\n        <Label \n          class=\"week-day-label text-center\"\n          width=\"100%\"\n          *ngFor=\"let weekDay of weekDays; let i = index\" \n          [text]=\"weekDay\" \n          row=\"0\" \n          [col]=\"i\"\n        ></Label>\n        <FlexboxLayout \n          class=\"day\"\n          [ngClass]=\"{'not-settable': !getIsSettable(day.dayInMonth), completed: day.status === 1, fail: day.status === 2}\" \n          *ngFor=\"let day of currentChallenge.days; let i = index\" \n          [row]=\"getRow(i, day)\"\n          [col]=\"day.dayInWeek\"\n          (tap)=\"onChangeStatus(day)\"\n          >\n          <Label\n            [text]=\"day.dayInMonth\"\n          ></Label>\n        </FlexboxLayout>\n      </GridLayout>\n    </StackLayout>\n  </FlexboxLayout>\n</ScrollView>\n"

/***/ }),

/***/ "./app/challenges/current-challenge/current-challenge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentChallengeComponent", function() { return CurrentChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/day-modal/day-modal.component.ts");
/* harmony import */ var _app_shared_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/shared/ui.service.ts");
/* harmony import */ var _challenges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/challenges/challenges.service.ts");
/* harmony import */ var _day_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/challenges/day.model.ts");






var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(modalDialog, vcRef, uiService, challengeService) {
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.uiService = uiService;
        this.challengeService = challengeService;
        this.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    }
    CurrentChallengeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(function (challenge) {
            _this.currentChallenge = challenge;
        });
    };
    CurrentChallengeComponent.prototype.getIsSettable = function (dayInMonth) {
        return dayInMonth <= new Date().getDate();
    };
    CurrentChallengeComponent.prototype.getRow = function (index, day) {
        var startRow = 1;
        var weekRow = Math.floor(index / 7);
        var firstWeekDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
        var irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    };
    CurrentChallengeComponent.prototype.onChangeStatus = function (day) {
        var _this = this;
        if (!this.getIsSettable(day.dayInMonth)) {
            return; //if get date is not settable (future dates) this doesn't open the modal
        }
        this.modalDialog.showModal(_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_2__["DayModalComponent"], {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVCRef()
                ? this.uiService.getRootVCRef() //check if getRootVCRef exist,
                : this.vcRef,
            context: { date: day.date, status: day.status }
        }).then(function (status) {
            if (status === _day_model__WEBPACK_IMPORTED_MODULE_5__["DayStatus"].Open) { //this if allows user to close the modal without resetting the completion value
                return;
            }
            _this.challengeService.updateDayStatus(day.dayInMonth, status);
            console.log(status);
        });
    };
    CurrentChallengeComponent.prototype.ngOnDestroy = function () {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
    };
    CurrentChallengeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-current-challenge',
            template: __webpack_require__("./app/challenges/current-challenge/current-challenge.component.html"),
            styles: [__webpack_require__("./app/challenges/current-challenge/_current-challenge.component.common.scss")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _app_shared_ui_service__WEBPACK_IMPORTED_MODULE_3__["UIService"],
            _challenges_service__WEBPACK_IMPORTED_MODULE_4__["ChallengesService"]])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());



/***/ }),

/***/ "./app/challenges/today/today.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar\n  title=\"Today's Challenge\"\n  [showBackButton]=\"false\"\n></ns-action-bar>\n\n<FlexboxLayout class=\"page\" *ngIf=\"!currentDay\">\n  <Label text=\"No challenge found!\"></Label>\n  <Button \n    class=\"btn btn-primary\" \n    text=\"Create One!\" \n    nsRouterLink=\"/challenges/replace\"\n    pageTransition=\"slideLeft\"></Button>\n</FlexboxLayout>\n\n<FlexboxLayout class=\"page\" *ngIf=\"currentDay\"> \n  <Label class=\"h1\" [text]=\"currentDay.date | date\"></Label>\n  <ns-challenge-actions \n    (actionSelect)=\"onActionSelected($event)\" \n    [chosen]=\"getActionName()\"\n    [startDone]=\"getActionName() ==='complete' || getActionName() === 'fail'\"\n    cancelText=\"Reset\"\n  ></ns-challenge-actions>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/challenges/today/today.component.scss":
/***/ (function(module, exports) {

module.exports = ".page {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n"

/***/ }),

/***/ "./app/challenges/today/today.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayComponent", function() { return TodayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _challenges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/challenges/challenges.service.ts");
/* harmony import */ var _day_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/day.model.ts");



var TodayComponent = /** @class */ (function () {
    function TodayComponent(challengeService) {
        this.challengeService = challengeService;
    }
    TodayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(function (challenge) {
            if (challenge) {
                _this.currentDay = challenge.currentDay;
            }
        });
    };
    TodayComponent.prototype.onActionSelected = function (action) {
        this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
        console.log(action);
    };
    TodayComponent.prototype.getActionName = function () {
        if (this.currentDay.status === _day_model__WEBPACK_IMPORTED_MODULE_2__["DayStatus"].Completed) {
            return 'complete';
        }
        if (this.currentDay.status === _day_model__WEBPACK_IMPORTED_MODULE_2__["DayStatus"].Failed) {
            return 'fail';
        }
        return null;
    };
    TodayComponent.prototype.ngOnDestroy = function () {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
    };
    TodayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-today',
            template: __webpack_require__("./app/challenges/today/today.component.html"),
            styles: [__webpack_require__("./app/challenges/today/today.component.scss")]
        }),
        __metadata("design:paramtypes", [_challenges_service__WEBPACK_IMPORTED_MODULE_1__["ChallengesService"]])
    ], TodayComponent);
    return TodayComponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL19jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBMkIsK0NBQStDLHVEQUF1RCxNQUFNLEM7Ozs7Ozs7QUNBdkksdUZBQXVGLDJDQUEyQyxpSEFBaUgseURBQXlELGdYOzs7Ozs7OztBQ0E1UztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDRDtBQUNjO0FBQ2Y7QUFFVTtBQVExRDtJQUNFLHFCQUFxQjtJQUVyQixnQ0FDVSxNQUF3QixFQUN4QixNQUFzQixFQUN0QixJQUFVLEVBQ1YsZ0JBQW1DO1FBSG5DLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO0lBQzFDLENBQUM7SUFFSix5Q0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZkMseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFNBQVMsQ0FDckQsYUFBRztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQywwQkFBMEI7WUFDMUIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxhQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQiwwQkFBMEI7WUFDMUIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FDRixD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QWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDbkI7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsY0FBYyxDQUN2QixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQ2xDLE9BQU8sQ0FBQyxRQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUEzQ1E7UUFBUiwyREFBSyxFQUFFOztxREFBZTtJQUNkO1FBQVIsMkRBQUssRUFBRTs7OERBQXVCO0lBQ3RCO1FBQVIsMkRBQUssRUFBRTs7dURBQWdCO0lBSGIsa0JBQWtCO1FBTjlCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixxRkFBMEM7O1NBRzNDLENBQUM7eUNBT2dCLDZEQUFJO1lBQ0YsNEVBQWdCO1lBQ2IscURBQVM7T0FSbkIsa0JBQWtCLENBNkM5QjtJQUFELHlCQUFDO0NBQUE7QUE3QzhCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiVGFiVmlldyB7XFxuICAgIGFuZHJvaWQtc2VsZWN0ZWQtdGFiLXRleHQtY29sb3I6ICM3YzAxNWQ7XFxuICAgIC8qIGFuZHJvaWQtc2VsZWN0ZWQtdGFiLWhpZ2hsaWdodC1jb2xvcjogIzdjMDE1ZDsgKi9cXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFRhYlZpZXcgYW5kcm9pZFRhYnNQb3NpdGlvbj1cXFwiYm90dG9tXFxcIj5cXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ1RvZGF5JywgaWNvblNvdXJjZTogJ3JlczovL2NoZWNrJ31cXFwiPlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInRvZGF5XFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnQ3VycmVudCBDaGFsbGVuZ2UnLCBpY29uU291cmNlOiAncmVzOi8vdHJvcGh5JyB9XFxcIj5cXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvVGFiVmlldz5cXG48IS0tIGlzTG9hZGluZyBhbmltYXRpb24gZG9lc24ndCB3b3JrIHdpdGggPHBhZ2Utcm91dGVyLW91dGxldD4gb24gaW9zIChhbmRyb2lkIGlzIG9rYXkpIGZvciBzb21lIHJlYXNvbi4gXFxuPEZsZXhib3hMYXlvdXQganVzdGlmeUNvbnRlbnQ9XFxcImNlbnRlclxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gIDxBY3Rpdml0eUluZGljYXRvciBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuLS0+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2VzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhY3RpdmU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHsgLy91bml0IDE3M1xuICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UuZmV0Y2hDdXJyZW50Q2hhbGxlbmdlKCkuc3Vic2NyaWJlKFxuICAgICAgcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZldGNoZWQgY2hhbGxlbmdlLi4uJyk7XG4gICAgICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZFRhYlJvdXRlcygpO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIC8vIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZFRhYlJvdXRlcygpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFRhYlJvdXRlcygpIHsgLy91bml0IDE3MyBcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIG91dGxldHM6IHtcbiAgICAgICAgICAgIGN1cnJlbnRDaGFsbGVuZ2U6IFsnY3VycmVudC1jaGFsbGVuZ2UnXSxcbiAgICAgICAgICAgIHRvZGF5OiBbJ3RvZGF5J11cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlXG4gICAgICB9XG4gICAgKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgLy9pdCBtYWtlcyBhIGJpdCBvZiBkZWxheSB0byBnZXQgdGhlIGZldGNoIHRoZSBkYXRhIHNvIHRoZSBVSSB3b24ndCBicmVhay5cbiAgICAvLyB9LCAxMCk7IC8vcmVtb3ZlZCBpc0xvYWRpbmcgYW5pbWF0aW9uIGZ1bmN0aW9uIGR1ZSB0byBhIGJ1ZyBpbiBpb3MuIGRvbid0IGtub3cgd2h5XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi90b2RheS90b2RheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAndGFicycsIGNvbXBvbmVudDogQ2hhbGxlbmdlVGFic0NvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgcGF0aDogJ3RvZGF5JywgY29tcG9uZW50OiBUb2RheUNvbXBvbmVudCwgb3V0bGV0OiAndG9kYXknIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnY3VycmVudC1jaGFsbGVuZ2UnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgICAgICAgICAgb3V0bGV0OiAnY3VycmVudENoYWxsZW5nZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgcGF0aDogJzptb2RlJywgbG9hZENoaWxkcmVuOiAnfi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5tb2R1bGUjQ2hhbGxlbmdlRWRpdE1vZHVsZScgfSwgLy9sYXp5IGxvYWRpbmdcbiAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvY2hhbGxlbmdlcy90YWJzJywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlIHt9IiwiaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuL2RheS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZywgXG4gICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLCBcbiAgICAgICAgcHVibGljIHllYXI6IG51bWJlciwgXG4gICAgICAgIHB1YmxpYyBtb250aDogbnVtYmVyLCBcbiAgICAgICAgcHJpdmF0ZSBfZGF5czogRGF5W10gPSBbXVxuICAgICkge1xuICAgICAgICBpZihfZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTsgLy8wIGdpdmVzIHRoZSBsYXN0IGRheSBvZiB0aGUgcHJldmlvdXMgbW9udGggXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXlzSW5Nb250aCArIDE7IGkrKykgeyAvL21heCBkYXlzSW5Nb250aCB3aWxsIGJlIDMxIGZyb20gY29uc3QgZGF5c0luTW9udGhcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBpKTtcbiAgICAgICAgY29uc3QgZGF5SW5XZWVrID0gZGF0ZS5nZXREYXkoKTsgLy9naXZlcyBzdW49MCBtb249MSB0dWU9Mi4uLlxuICAgICAgICB0aGlzLl9kYXlzLnB1c2goeyBkYXlJbk1vbnRoOiBpLCBkYXlJbldlZWs6IGRheUluV2VlaywgZGF0ZTogZGF0ZSwgc3RhdHVzOiBEYXlTdGF0dXMuT3Blbn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnREYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXlzLmZpbmQoZCA9PiBkLmRheUluTW9udGggPT09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgZGF5cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9kYXlzXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tICcuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gJy4vdG9kYXkvdG9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IENoYWxsZW5nZVRhYnNDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxuICAgICAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgICAgICBUb2RheUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIC8vbmVlZCB0aGlzIGZvciB1c2Ugb2YgKm5nSWYgZXRjLlxuICAgICAgICBDaGFsbGVuZ2VzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc01vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENoYWxsZW5nZSB9IGZyb20gJy4vY2hhbGxlbmdlcy5tb2RlbCc7XG5pbXBvcnQgeyBEYXlTdGF0dXMsIERheSB9IGZyb20gJy4vZGF5Lm1vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSAoeyBwcm92aWRlZEluOiAncm9vdCcgfSkgLy9tYWtlIGl0IGF2YWlsYWJsZSB0aHJvdWdodG91dCB0aGUgYXBwXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2N1cnJlbnRDaGFsbGVuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENoYWxsZW5nZT4obnVsbCk7IC8vdW5pdCAxNTFcbiAgICBwcml2YXRlIHVzZXJTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy51c2VyU3ViID0gdGhpcy5hdXRoU2VydmljZS51c2VyLnN1YnNjcmliZSh1c2VyID0+IHsgLy91bml0IDE5NFxuICAgICAgICAgICAgaWYoIXVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50Q2hhbGxlbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYWxsZW5nZS5hc09ic2VydmFibGUoKTsgLy91bml0IDE1M1xuICAgIH1cblxuICAgIGZldGNoQ3VycmVudENoYWxsZW5nZSgpIHsgLy91bml0IDE3M1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS51c2VyLnBpcGUoIC8vdW5pdCAxODZcbiAgICAgICAgICAgIHRha2UoMSksIC8vb25seSBnZXQgdGhlIGxhdGVzdCB2YWx1ZSBhbmQgYXV0b21hdGljYWxseSB1bnN1YnNjcmliZVxuICAgICAgICAgICAgc3dpdGNoTWFwKGN1cnJlbnRVc2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZighY3VycmVudFVzZXIgfHwgIWN1cnJlbnRVc2VyLmlzQXV0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vaWYgdXNlciBub24gZXhpc3Qgb3IgaXMgbm90IGF1dGggdGhlbiBmaW5pc2ggdGhlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICBfZGF5czogRGF5W107XG4gICAgICAgICAgICAgICAgfT4oYGh0dHBzOi8vbnMtbmctY291cnNlLTM5OWFkLmZpcmViYXNlaW8uY29tL2NoYWxsZW5nZS8ke2N1cnJlbnRVc2VyLmlkfS5qc29uP2F1dGg9JHtjdXJyZW50VXNlci50b2tlbn1gKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFwKHJlc0RhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZGVkQ2hhbGxlbmdlID0gbmV3IENoYWxsZW5nZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0RhdGEudGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLnllYXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS5tb250aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLl9kYXlzXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KGxvYWRlZENoYWxsZW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdDaGFsbGVuZ2UodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBuZXdDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCkpO1xuXG4gICAgICAgIC8vc2F2ZSBpdCB0byBzZXJ2ZXIgL3VuaXQgMTcyXG4gICAgICAgIHRoaXMuc2F2ZVRvU2VydmVyKG5ld0NoYWxsZW5nZSk7XG5cbiAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KG5ld0NoYWxsZW5nZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2hhbGxlbmdlKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHsgLy91bml0IDE2NlxuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2hhbGxlbmdlID0gbmV3IENoYWxsZW5nZSh0aXRsZSwgZGVzY3JpcHRpb24sIGNoYWxsZW5nZS55ZWFyLCBjaGFsbGVuZ2UubW9udGgsIGNoYWxsZW5nZS5kYXlzKTtcbiAgICAgICAgICAgIC8vc2VuZCB0byBhIHNlcnZlclxuICAgICAgICAgICAgdGhpcy5zYXZlVG9TZXJ2ZXIodXBkYXRlZENoYWxsZW5nZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQodXBkYXRlZENoYWxsZW5nZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlRGF5U3RhdHVzKGRheUluTW9udGg6IG51bWJlciwgc3RhdHVzOiBEYXlTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgICAgICAgaWYoIWNoYWxsZW5nZSB8fCBjaGFsbGVuZ2UuZGF5cy5sZW5ndGggPCBkYXlJbk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvL3VuaXQgMTU3OiBjaGVjayB0aGUgY2hhbGxlbmdlIGhhcyBsZXNzIGRheXMgZWxlbWVudCB0aGFuIGRheUluTW9udGggKGl0IHNob3VsZG4ndCBoYXZlIDMwIGRheXMgaW4gRmViKS5cbiAgICAgICAgICAgICAgICAvL2lmIGNoYWxsZW5nZSBpcyBlbXB0eSBPUiBpbnZhbGlkIG51bWJlciBvZiBkYXlzIHRoZSBmdW5jdGlvbiB3aWxsIHN0b3AuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXlJbmRleCA9IGNoYWxsZW5nZS5kYXlzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICBkID0+IGQuZGF5SW5Nb250aCA9PT0gZGF5SW5Nb250aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNoYWxsZW5nZS5kYXlzW2RheUluZGV4XS5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQoY2hhbGxlbmdlKTtcbiAgICAgICAgICAgIC8vc2F2ZSB0aGlzIHRvIGEgc2VydmVyXG4gICAgICAgICAgICB0aGlzLnNhdmVUb1NlcnZlcihjaGFsbGVuZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51c2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlVG9TZXJ2ZXIoY2hhbGxlbmdlOiBDaGFsbGVuZ2UpIHsgXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UudXNlci5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcChjdXJyZW50VXNlciA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIWN1cnJlbnRVc2VyIHx8ICFjdXJyZW50VXNlci5pc0F1dGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpOyAvL2lmIHVzZXIgbm9uIGV4aXN0IG9yIGlzIG5vdCBhdXRoIHRoZW4gZmluaXNoIHRoZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgaHR0cHM6Ly9ucy1uZy1jb3Vyc2UtMzk5YWQuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLyR7Y3VycmVudFVzZXIuaWR9Lmpzb24/YXV0aD0ke2N1cnJlbnRVc2VyLnRva2VufWAsIGNoYWxsZW5nZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIucGFnZSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAyMDsgfVxcblxcbi53ZWVrLWRheS1sYWJlbCB7XFxuICBjb2xvcjogIzJiMGM3MjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxNSAwOyB9XFxuXFxuLmRheSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTA7XFxuICBoZWlnaHQ6IDUwO1xcbiAgbWFyZ2luOiAxMDtcXG4gIGJvcmRlci1jb2xvcjogIzdjMDE1ZDtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjN2MwMTVkOyB9XFxuXFxuLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5mYWlsIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5ub3Qtc2V0dGFibGUge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjNTM1MzUzOyB9XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXIgdGl0bGU9XFxcIkN1cnJlbnQgQ2hhbGxlbmdlXFxcIiBbc2hvd0JhY2tCdXR0b25dPVxcXCJmYWxzZVxcXCI+XFxuICA8QWN0aW9uSXRlbSBcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCIgXFxuICAgIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXMvcmVwbGFjZVxcXCJcXG4gICAgcGFnZVRyYW5zaXRpb249XFxcInNsaWRlTGVmdFxcXCJcXG4gICAgPiBcXG4gICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwZmU7XFxcIiBpb3M6Y2xhc3M9XFxcImZhIHAtNVxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiZmEgcC0xMFxcXCIgYW5kcm9pZDpmb250U2l6ZT1cXFwiMjRcXFwiPjwvTGFiZWw+XFxuICA8L0FjdGlvbkl0ZW0+XFxuICA8QWN0aW9uSXRlbSBcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgXFxuICAgIGFuZHJvaWQucG9zaXRpb249XFxcImFjdGlvbkJhclxcXCIgXFxuICAgIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXMvZWRpdFxcXCJcXG4gICAgcGFnZVRyYW5zaXRpb249XFxcInNsaWRlTGVmdFxcXCJcXG4gICAgKm5nSWY9XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiXFxuICA+IFxcbiAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjA0NDtcXFwiIGlvczpjbGFzcz1cXFwiZmEgcC01XFxcIiBhbmRyb2lkOmNsYXNzPVxcXCJmYSBwLTEwXFxcIiBhbmRyb2lkOmZvbnRTaXplPVxcXCIyNFxcXCI+PC9MYWJlbD5cXG4gIDwvQWN0aW9uSXRlbT5cXG48L25zLWFjdGlvbi1iYXI+XFxuXFxuPFNjcm9sbFZpZXc+XFxuICA8RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwiIWN1cnJlbnRDaGFsbGVuZ2VcXFwiPlxcbiAgICAgIDxMYWJlbCB0ZXh0PVxcXCJObyBjaGFsbGVuZ2UgZm91bmQhXFxcIj48L0xhYmVsPlxcbiAgICAgIDxCdXR0b24gXFxuICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBcXG4gICAgICAgIHRleHQ9XFxcIkNyZWF0ZSBPbmUhXFxcIiBcXG4gICAgICAgIG5zUm91dGVyTGluaz1cXFwiL2NoYWxsZW5nZXMvcmVwbGFjZVxcXCJcXG4gICAgICAgIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZUxlZnRcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiIG1hcmdpbkJvdHRvbT1cXFwiMTBcXFwiIG1hcmdpblRvcD1cXFwiMTBcXFwiPlxcbiAgICAgIDxMYWJlbFxcbiAgICAgICAgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyXFxcIlxcbiAgICAgICAgd2lkdGg9XFxcIjEwMCVcXFwiXFxuICAgICAgICBbdGV4dF09XFxcImN1cnJlbnRDaGFsbGVuZ2UudGl0bGVcXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgICAgICA8TGFiZWxcXG4gICAgICAgIGNsYXNzPVxcXCJib2R5IHRleHQtY2VudGVyXFxcIlxcbiAgICAgICAgW3RleHRdPVxcXCJjdXJyZW50Q2hhbGxlbmdlLmRlc2NyaXB0aW9uXFxcIlxcbiAgICAgID48L0xhYmVsPlxcbiAgICAgIDxHcmlkTGF5b3V0IFxcbiAgICAgICAgcm93cz1cXFwiYXV0bywqLCosKiwqLCosKlxcXCIgXFxuICAgICAgICBjb2x1bW5zPVxcXCIqLCosKiwqLCosKiwqXFxcIiBcXG4gICAgICAgICpuZ0lmPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxMYWJlbCBcXG4gICAgICAgICAgY2xhc3M9XFxcIndlZWstZGF5LWxhYmVsIHRleHQtY2VudGVyXFxcIlxcbiAgICAgICAgICB3aWR0aD1cXFwiMTAwJVxcXCJcXG4gICAgICAgICAgKm5nRm9yPVxcXCJsZXQgd2Vla0RheSBvZiB3ZWVrRGF5czsgbGV0IGkgPSBpbmRleFxcXCIgXFxuICAgICAgICAgIFt0ZXh0XT1cXFwid2Vla0RheVxcXCIgXFxuICAgICAgICAgIHJvdz1cXFwiMFxcXCIgXFxuICAgICAgICAgIFtjb2xdPVxcXCJpXFxcIlxcbiAgICAgICAgPjwvTGFiZWw+XFxuICAgICAgICA8RmxleGJveExheW91dCBcXG4gICAgICAgICAgY2xhc3M9XFxcImRheVxcXCJcXG4gICAgICAgICAgW25nQ2xhc3NdPVxcXCJ7J25vdC1zZXR0YWJsZSc6ICFnZXRJc1NldHRhYmxlKGRheS5kYXlJbk1vbnRoKSwgY29tcGxldGVkOiBkYXkuc3RhdHVzID09PSAxLCBmYWlsOiBkYXkuc3RhdHVzID09PSAyfVxcXCIgXFxuICAgICAgICAgICpuZ0Zvcj1cXFwibGV0IGRheSBvZiBjdXJyZW50Q2hhbGxlbmdlLmRheXM7IGxldCBpID0gaW5kZXhcXFwiIFxcbiAgICAgICAgICBbcm93XT1cXFwiZ2V0Um93KGksIGRheSlcXFwiXFxuICAgICAgICAgIFtjb2xdPVxcXCJkYXkuZGF5SW5XZWVrXFxcIlxcbiAgICAgICAgICAodGFwKT1cXFwib25DaGFuZ2VTdGF0dXMoZGF5KVxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICBbdGV4dF09XFxcImRheS5kYXlJbk1vbnRoXFxcIlxcbiAgICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L0ZsZXhib3hMYXlvdXQ+XFxuPC9TY3JvbGxWaWV3PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IERheU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF5LW1vZGFsL2RheS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlIH0gZnJvbSAnLi4vY2hhbGxlbmdlcy5tb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERheSwgRGF5U3RhdHVzIH0gZnJvbSAnLi4vZGF5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY3VycmVudC1jaGFsbGVuZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9fY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmNvbW1vbi5zY3NzJyxcbiAgICAvLyAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY3NzJ1xuICBdLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHdlZWtEYXlzID0gWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ107XG4gIGN1cnJlbnRDaGFsbGVuZ2U6IENoYWxsZW5nZTtcbiAgcHJpdmF0ZSBjdXJDaGFsbGVuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsRGlhbG9nOiBNb2RhbERpYWxvZ1NlcnZpY2UsIFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIFxuICAgIHByaXZhdGUgdWlTZXJ2aWNlOiBVSVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFsbGVuZ2VTZXJ2aWNlOiBDaGFsbGVuZ2VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJDaGFsbGVuZ2VTdWIgPSB0aGlzLmNoYWxsZW5nZVNlcnZpY2UuY3VycmVudENoYWxsZW5nZS5zdWJzY3JpYmUoY2hhbGxlbmdlID0+IHtcbiAgICAgIHRoaXMuY3VycmVudENoYWxsZW5nZSA9IGNoYWxsZW5nZTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldElzU2V0dGFibGUoZGF5SW5Nb250aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGRheUluTW9udGggPD0gbmV3IERhdGUoKS5nZXREYXRlKCk7XG4gIH1cblxuICBnZXRSb3coaW5kZXg6IG51bWJlciwgZGF5OiB7IGRheUluTW9udGg6IG51bWJlcjsgZGF5SW5XZWVrOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IHN0YXJ0Um93ID0gMTtcbiAgICBjb25zdCB3ZWVrUm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDcpO1xuICAgIGNvbnN0IGZpcnN0V2Vla0RheU9mTW9udGggPSBuZXcgRGF0ZShcbiAgICAgIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSxcbiAgICAgIDFcbiAgICApLmdldERheSgpO1xuICAgIGNvbnN0IGlycmVndWxhclJvdyA9IGRheS5kYXlJbldlZWsgPCBmaXJzdFdlZWtEYXlPZk1vbnRoID8gMSA6IDA7XG5cbiAgICByZXR1cm4gc3RhcnRSb3cgKyB3ZWVrUm93ICsgaXJyZWd1bGFyUm93O1xuICB9XG5cblxuICBvbkNoYW5nZVN0YXR1cyhkYXk6IERheSkge1xuICAgIGlmKCF0aGlzLmdldElzU2V0dGFibGUoZGF5LmRheUluTW9udGgpKSB7XG4gICAgICByZXR1cm47IC8vaWYgZ2V0IGRhdGUgaXMgbm90IHNldHRhYmxlIChmdXR1cmUgZGF0ZXMpIHRoaXMgZG9lc24ndCBvcGVuIHRoZSBtb2RhbFxuICAgIH1cbiAgICB0aGlzLm1vZGFsRGlhbG9nLnNob3dNb2RhbChEYXlNb2RhbENvbXBvbmVudCwge1xuICAgICAgZnVsbHNjcmVlbjogdHJ1ZSwgXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiBcbiAgICAgICAgdGhpcy51aVNlcnZpY2UuZ2V0Um9vdFZDUmVmKCkgXG4gICAgICAgID8gdGhpcy51aVNlcnZpY2UuZ2V0Um9vdFZDUmVmKCkgIC8vY2hlY2sgaWYgZ2V0Um9vdFZDUmVmIGV4aXN0LFxuICAgICAgICA6IHRoaXMudmNSZWYsIC8vdXNlIGl0IGlmIGl0IGRvZXMsIGlmIG5vdCBqdXN0IHVzZSB2Y1JlZiBwcm9wZXJ0eVxuICAgICAgICBjb250ZXh0OiB7IGRhdGU6IGRheS5kYXRlLCBzdGF0dXM6IGRheS5zdGF0dXMgfVxuICAgIH0pLnRoZW4oKHN0YXR1czogRGF5U3RhdHVzKSA9PiB7XG4gICAgICBpZihzdGF0dXMgPT09IERheVN0YXR1cy5PcGVuKSB7IC8vdGhpcyBpZiBhbGxvd3MgdXNlciB0byBjbG9zZSB0aGUgbW9kYWwgd2l0aG91dCByZXNldHRpbmcgdGhlIGNvbXBsZXRpb24gdmFsdWVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLnVwZGF0ZURheVN0YXR1cyhkYXkuZGF5SW5Nb250aCwgc3RhdHVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZih0aGlzLmN1ckNoYWxsZW5nZVN1Yikge1xuICAgICAgdGhpcy5jdXJDaGFsbGVuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bnMtYWN0aW9uLWJhclxcbiAgdGl0bGU9XFxcIlRvZGF5J3MgQ2hhbGxlbmdlXFxcIlxcbiAgW3Nob3dCYWNrQnV0dG9uXT1cXFwiZmFsc2VcXFwiXFxuPjwvbnMtYWN0aW9uLWJhcj5cXG5cXG48RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgKm5nSWY9XFxcIiFjdXJyZW50RGF5XFxcIj5cXG4gIDxMYWJlbCB0ZXh0PVxcXCJObyBjaGFsbGVuZ2UgZm91bmQhXFxcIj48L0xhYmVsPlxcbiAgPEJ1dHRvbiBcXG4gICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgXFxuICAgIHRleHQ9XFxcIkNyZWF0ZSBPbmUhXFxcIiBcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9yZXBsYWNlXFxcIlxcbiAgICBwYWdlVHJhbnNpdGlvbj1cXFwic2xpZGVMZWZ0XFxcIj48L0J1dHRvbj5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuXFxuPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiICpuZ0lmPVxcXCJjdXJyZW50RGF5XFxcIj4gXFxuICA8TGFiZWwgY2xhc3M9XFxcImgxXFxcIiBbdGV4dF09XFxcImN1cnJlbnREYXkuZGF0ZSB8IGRhdGVcXFwiPjwvTGFiZWw+XFxuICA8bnMtY2hhbGxlbmdlLWFjdGlvbnMgXFxuICAgIChhY3Rpb25TZWxlY3QpPVxcXCJvbkFjdGlvblNlbGVjdGVkKCRldmVudClcXFwiIFxcbiAgICBbY2hvc2VuXT1cXFwiZ2V0QWN0aW9uTmFtZSgpXFxcIlxcbiAgICBbc3RhcnREb25lXT1cXFwiZ2V0QWN0aW9uTmFtZSgpID09PSdjb21wbGV0ZScgfHwgZ2V0QWN0aW9uTmFtZSgpID09PSAnZmFpbCdcXFwiXFxuICAgIGNhbmNlbFRleHQ9XFxcIlJlc2V0XFxcIlxcbiAgPjwvbnMtY2hhbGxlbmdlLWFjdGlvbnM+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuLi9kYXkubW9kZWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRvZGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9kYXkuY29tcG9uZW50LnNjc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgVG9kYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGN1cnJlbnREYXk6IERheTtcbiAgcHJpdmF0ZSBjdXJDaGFsbGVuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZXNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1ckNoYWxsZW5nZVN1YiA9IHRoaXMuY2hhbGxlbmdlU2VydmljZS5jdXJyZW50Q2hhbGxlbmdlLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgaWYoY2hhbGxlbmdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERheSA9IGNoYWxsZW5nZS5jdXJyZW50RGF5O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25BY3Rpb25TZWxlY3RlZChhY3Rpb246IERheVN0YXR1cykge1xuICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS51cGRhdGVEYXlTdGF0dXModGhpcy5jdXJyZW50RGF5LmRheUluTW9udGgsIGFjdGlvbik7XG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgfVxuXG4gIGdldEFjdGlvbk5hbWUoKSB7XG4gICAgaWYodGhpcy5jdXJyZW50RGF5LnN0YXR1cyA9PT0gRGF5U3RhdHVzLkNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuICdjb21wbGV0ZSc7XG4gICAgfVxuICAgIGlmKHRoaXMuY3VycmVudERheS5zdGF0dXMgPT09IERheVN0YXR1cy5GYWlsZWQpIHtcbiAgICAgIHJldHVybiAnZmFpbCc7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYodGhpcy5jdXJDaGFsbGVuZ2VTdWIpIHtcbiAgICAgIHRoaXMuY3VyQ2hhbGxlbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tICcuL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0FjdGlvbkJhckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0FjdGlvbkJhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9IiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgW3RpdGxlXT1cXFwidGl0bGVcXFwiIChsb2FkZWQpPVxcXCJvbkxvYWRlZEFjdGlvbkJhcigpXFxcIj5cXG4gIDxOYXZpZ2F0aW9uQnV0dG9uXFxuICAgIHRleHQ9XFxcIkJhY2tcXFwiXFxuICAgIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIlxcbiAgICAqbmdJZj1cXFwiY2FuR29CYWNrXFxcIlxcbiAgICAodGFwKT1cXFwib25Hb0JhY2soKVxcXCJcXG4gID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICAqbmdJZj1cXFwiYW5kcm9pZCAmJiBoYXNNZW51XFxcIlxcbiAgICBpY29uPVxcXCJyZXM6Ly9tZW51X2JsYWNrXFxcIlxcbiAgICAodGFwKT1cXFwib25Ub2dnbGVNZW51KClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPEFjdGlvbkl0ZW1cXG4gICAgKm5nSWY9XFxcIiFhbmRyb2lkICYmIGhhc01lbnVcXFwiXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCJcXG4gICAgKHRhcCk9XFxcIm9uVG9nZ2xlTWVudSgpXFxcIlxcbiAgPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjBjOTtcXFwiIGNsYXNzPVxcXCJmYSBtLTVcXFwiPjwvTGFiZWw+XFxuICA8L0FjdGlvbkl0ZW0+XFxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IDwhLS0gZGVmYXVsdCBuYXRpdmVzY3JpcHQgIC0tPlxcbjwvQWN0aW9uQmFyPlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS5zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hY3Rpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93QmFja0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGhhc01lbnUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZ2V0IGFuZHJvaWQoKSB7XG4gICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgfVxuXG4gIGdldCBjYW5Hb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmNhbkdvQmFjaygpICYmIHRoaXMuc2hvd0JhY2tCdXR0b247XG4gIH1cblxuICBvbkdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkQWN0aW9uQmFyKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IGFuZHJvaWRUb29sYmFyID0gdGhpcy5wYWdlLmFjdGlvbkJhci5uYXRpdmVWaWV3O1xuICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGFuZHJvaWRUb29sYmFyLmdldE5hdmlnYXRpb25JY29uKCk7XG4gICAgICBsZXQgY29sb3IgPSAnIzE3MTcxNyc7XG4gICAgICBpZiAodGhpcy5oYXNNZW51KSB7XG4gICAgICAgIGNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2tCdXR0b24pIHtcbiAgICAgICAgYmFja0J1dHRvbi5zZXRDb2xvckZpbHRlcihcbiAgICAgICAgICBhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoY29sb3IpLFxuICAgICAgICAgICg8YW55PmFuZHJvaWQuZ3JhcGhpY3MpLlBvcnRlckR1ZmYuTW9kZS5TUkNfQVRPUFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnVpU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==