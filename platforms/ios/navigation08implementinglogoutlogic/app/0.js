(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.css":
/***/ (function(module, exports) {

module.exports = "TabView {\n    selected-tab-text-color: #7c015d;\n}"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL19jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBMkIsdUNBQXVDLEdBQUcsQzs7Ozs7OztBQ0FyRSx1RkFBdUYsMkNBQTJDLGlIQUFpSCx5REFBeUQsZ1g7Ozs7Ozs7O0FDQTVTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBQ2M7QUFDZjtBQUVVO0FBUTFEO0lBQ0UscUJBQXFCO0lBRXJCLGdDQUNVLE1BQXdCLEVBQ3hCLE1BQXNCLEVBQ3RCLElBQVUsRUFDVixnQkFBbUM7UUFIbkMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7SUFDMUMsQ0FBQztJQUVKLHlDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyx5QkFBeUI7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLENBQUMsU0FBUyxDQUNyRCxhQUFHO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLDBCQUEwQjtZQUMxQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUNELGFBQUc7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLDBCQUEwQjtZQUMxQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUNGLENBQUM7UUFF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QyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3RELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDbkI7WUFDRCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsY0FBYyxDQUN2QixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQ2xDLE9BQU8sQ0FBQyxRQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUEzQ1E7UUFBUiwyREFBSyxFQUFFOztxREFBZTtJQUNkO1FBQVIsMkRBQUssRUFBRTs7OERBQXVCO0lBQ3RCO1FBQVIsMkRBQUssRUFBRTs7dURBQWdCO0lBSGIsa0JBQWtCO1FBTjlCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixxRkFBMEM7O1NBRzNDLENBQUM7eUNBT2dCLDZEQUFJO1lBQ0YsNEVBQWdCO1lBQ2IscURBQVM7T0FSbkIsa0JBQWtCLENBNkM5QjtJQUFELHlCQUFDO0NBQUE7QUE3QzhCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiVGFiVmlldyB7XFxuICAgIHNlbGVjdGVkLXRhYi10ZXh0LWNvbG9yOiAjN2MwMTVkO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8VGFiVmlldyBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiPlxcbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnVG9kYXknLCBpY29uU291cmNlOiAncmVzOi8vY2hlY2snfVxcXCI+XFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQgbmFtZT1cXFwidG9kYXlcXFwiPiA8L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8U3RhY2tMYXlvdXQgKnRhYkl0ZW09XFxcInsgdGl0bGU6ICdDdXJyZW50IENoYWxsZW5nZScsIGljb25Tb3VyY2U6ICdyZXM6Ly90cm9waHknIH1cXFwiPlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiPiA8L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9UYWJWaWV3PlxcbjwhLS0gaXNMb2FkaW5nIGFuaW1hdGlvbiBkb2Vzbid0IHdvcmsgd2l0aCA8cGFnZS1yb3V0ZXItb3V0bGV0PiBvbiBpb3MgKGFuZHJvaWQgaXMgb2theSkgZm9yIHNvbWUgcmVhc29uLiBcXG48RmxleGJveExheW91dCBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgPEFjdGl2aXR5SW5kaWNhdG9yIFtidXN5XT1cXFwiaXNMb2FkaW5nXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbjwvRmxleGJveExheW91dD5cXG4tLT5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VzU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGFjdGl2ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgY2hhbGxlbmdlU2VydmljZTogQ2hhbGxlbmdlc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkgeyAvL3VuaXQgMTczXG4gICAgLy8gdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS5mZXRjaEN1cnJlbnRDaGFsbGVuZ2UoKS5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBjaGFsbGVuZ2UuLi4nKTtcbiAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkVGFiUm91dGVzKCk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkVGFiUm91dGVzKCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVGFiUm91dGVzKCkgeyAvL3VuaXQgMTczIFxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgb3V0bGV0czoge1xuICAgICAgICAgICAgY3VycmVudENoYWxsZW5nZTogWydjdXJyZW50LWNoYWxsZW5nZSddLFxuICAgICAgICAgICAgdG9kYXk6IFsndG9kYXknXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHtcbiAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmVcbiAgICAgIH1cbiAgICApO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4geyAvL2l0IG1ha2VzIGEgYml0IG9mIGRlbGF5IHRvIGdldCB0aGUgZmV0Y2ggdGhlIGRhdGEgc28gdGhlIFVJIHdvbid0IGJyZWFrLlxuICAgIC8vIH0sIDEwKTsgLy9yZW1vdmVkIGlzTG9hZGluZyBhbmltYXRpb24gZnVuY3Rpb24gZHVlIHRvIGEgYnVnIGluIGlvcy4gZG9uJ3Qga25vdyB3aHlcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tICcuL3RvZGF5L3RvZGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICd0YWJzJywgY29tcG9uZW50OiBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgeyBwYXRoOiAndG9kYXknLCBjb21wb25lbnQ6IFRvZGF5Q29tcG9uZW50LCBvdXRsZXQ6ICd0b2RheScgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdjdXJyZW50LWNoYWxsZW5nZScsXG4gICAgICAgICAgICBjb21wb25lbnQ6IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICBvdXRsZXQ6ICdjdXJyZW50Q2hhbGxlbmdlJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyBwYXRoOiAnOm1vZGUnLCBsb2FkQ2hpbGRyZW46ICd+L2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0Lm1vZHVsZSNDaGFsbGVuZ2VFZGl0TW9kdWxlJyB9LCAvL2xhenkgbG9hZGluZ1xuICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9jaGFsbGVuZ2VzL3RhYnMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc1JvdXRpbmdNb2R1bGUge30iLCJpbXBvcnQgeyBEYXksIERheVN0YXR1cyB9IGZyb20gJy4vZGF5Lm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nLCBcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsIFxuICAgICAgICBwdWJsaWMgeWVhcjogbnVtYmVyLCBcbiAgICAgICAgcHVibGljIG1vbnRoOiBudW1iZXIsIFxuICAgICAgICBwcml2YXRlIF9kYXlzOiBEYXlbXSA9IFtdXG4gICAgKSB7XG4gICAgICAgIGlmKF9kYXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIC8vIHRoaXMuY3VycmVudE1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpOyAvLzAgZ2l2ZXMgdGhlIGxhc3QgZGF5IG9mIHRoZSBwcmV2aW91cyBtb250aCBcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRheXNJbk1vbnRoICsgMTsgaSsrKSB7IC8vbWF4IGRheXNJbk1vbnRoIHdpbGwgYmUgMzEgZnJvbSBjb25zdCBkYXlzSW5Nb250aFxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGkpO1xuICAgICAgICBjb25zdCBkYXlJbldlZWsgPSBkYXRlLmdldERheSgpOyAvL2dpdmVzIHN1bj0wIG1vbj0xIHR1ZT0yLi4uXG4gICAgICAgIHRoaXMuX2RheXMucHVzaCh7IGRheUluTW9udGg6IGksIGRheUluV2VlazogZGF5SW5XZWVrLCBkYXRlOiBkYXRlLCBzdGF0dXM6IERheVN0YXR1cy5PcGVufSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY3VycmVudERheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RheXMuZmluZChkID0+IGQuZGF5SW5Nb250aCA9PT0gbmV3IERhdGUoKS5nZXREYXRlKCkpO1xuICAgIH1cblxuICAgIGdldCBkYXlzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuX2RheXNdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NoYWxsZW5nZXMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi90b2RheS90b2RheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENoYWxsZW5nZUFjdGlvbnNNb2R1bGUgfSBmcm9tICcuL2NoYWxsZW5nZS1hY3Rpb25zL2NoYWxsZW5nZS1hY3Rpb25zLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENoYWxsZW5nZVRhYnNDb21wb25lbnQsXG4gICAgICAgIEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQsXG4gICAgICAgIFRvZGF5Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgLy9uZWVkIHRoaXMgZm9yIHVzZSBvZiAqbmdJZiBldGMuXG4gICAgICAgIENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIENoYWxsZW5nZUFjdGlvbnNNb2R1bGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VzTW9kdWxlIHt9IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzLm1vZGVsJztcbmltcG9ydCB7IERheVN0YXR1cywgRGF5IH0gZnJvbSAnLi9kYXkubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlICh7IHByb3ZpZGVkSW46ICdyb290JyB9KSAvL21ha2UgaXQgYXZhaWxhYmxlIHRocm91Z2h0b3V0IHRoZSBhcHBcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfY3VycmVudENoYWxsZW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2hhbGxlbmdlPihudWxsKTsgLy91bml0IDE1MVxuICAgIHByaXZhdGUgdXNlclN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXJTdWIgPSB0aGlzLmF1dGhTZXJ2aWNlLnVzZXIuc3Vic2NyaWJlKHVzZXIgPT4geyAvL3VuaXQgMTk0XG4gICAgICAgICAgICBpZighdXNlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dChudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLmFzT2JzZXJ2YWJsZSgpOyAvL3VuaXQgMTUzXG4gICAgfVxuXG4gICAgZmV0Y2hDdXJyZW50Q2hhbGxlbmdlKCkgeyAvL3VuaXQgMTczXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnVzZXIucGlwZSggLy91bml0IDE4NlxuICAgICAgICAgICAgdGFrZSgxKSwgLy9vbmx5IGdldCB0aGUgbGF0ZXN0IHZhbHVlIGFuZCBhdXRvbWF0aWNhbGx5IHVuc3Vic2NyaWJlXG4gICAgICAgICAgICBzd2l0Y2hNYXAoY3VycmVudFVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCFjdXJyZW50VXNlciB8fCAhY3VycmVudFVzZXIuaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTsgLy9pZiB1c2VyIG5vbiBleGlzdCBvciBpcyBub3QgYXV0aCB0aGVuIGZpbmlzaCB0aGUgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8e1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBtb250aDogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIF9kYXlzOiBEYXlbXTtcbiAgICAgICAgICAgICAgICB9PihgaHR0cHM6Ly9ucy1uZy1jb3Vyc2UtMzk5YWQuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLyR7Y3VycmVudFVzZXIuaWR9Lmpzb24/YXV0aD0ke2N1cnJlbnRVc2VyLnRva2VufWApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAocmVzRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkZWRDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS50aXRsZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0RhdGEueWVhciwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNEYXRhLm1vbnRoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc0RhdGEuX2RheXNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobG9hZGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0NoYWxsZW5nZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5ld0NoYWxsZW5nZSA9IG5ldyBDaGFsbGVuZ2UodGl0bGUsIGRlc2NyaXB0aW9uLCBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSk7XG5cbiAgICAgICAgLy9zYXZlIGl0IHRvIHNlcnZlciAvdW5pdCAxNzJcbiAgICAgICAgdGhpcy5zYXZlVG9TZXJ2ZXIobmV3Q2hhbGxlbmdlKTtcblxuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLm5leHQobmV3Q2hhbGxlbmdlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDaGFsbGVuZ2UodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykgeyAvL3VuaXQgMTY2XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoY2hhbGxlbmdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hhbGxlbmdlLnllYXIsIGNoYWxsZW5nZS5tb250aCwgY2hhbGxlbmdlLmRheXMpO1xuICAgICAgICAgICAgLy9zZW5kIHRvIGEgc2VydmVyXG4gICAgICAgICAgICB0aGlzLnNhdmVUb1NlcnZlcih1cGRhdGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dCh1cGRhdGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVEYXlTdGF0dXMoZGF5SW5Nb250aDogbnVtYmVyLCBzdGF0dXM6IERheVN0YXR1cykge1xuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICBpZighY2hhbGxlbmdlIHx8IGNoYWxsZW5nZS5kYXlzLmxlbmd0aCA8IGRheUluTW9udGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vdW5pdCAxNTc6IGNoZWNrIHRoZSBjaGFsbGVuZ2UgaGFzIGxlc3MgZGF5cyBlbGVtZW50IHRoYW4gZGF5SW5Nb250aCAoaXQgc2hvdWxkbid0IGhhdmUgMzAgZGF5cyBpbiBGZWIpLlxuICAgICAgICAgICAgICAgIC8vaWYgY2hhbGxlbmdlIGlzIGVtcHR5IE9SIGludmFsaWQgbnVtYmVyIG9mIGRheXMgdGhlIGZ1bmN0aW9uIHdpbGwgc3RvcC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRheUluZGV4ID0gY2hhbGxlbmdlLmRheXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIGQgPT4gZC5kYXlJbk1vbnRoID09PSBkYXlJbk1vbnRoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hhbGxlbmdlLmRheXNbZGF5SW5kZXhdLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dChjaGFsbGVuZ2UpO1xuICAgICAgICAgICAgLy9zYXZlIHRoaXMgdG8gYSBzZXJ2ZXJcbiAgICAgICAgICAgIHRoaXMuc2F2ZVRvU2VydmVyKGNoYWxsZW5nZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVzZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhdmVUb1NlcnZlcihjaGFsbGVuZ2U6IENoYWxsZW5nZSkgeyBcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS51c2VyLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKGN1cnJlbnRVc2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZighY3VycmVudFVzZXIgfHwgIWN1cnJlbnRVc2VyLmlzQXV0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YobnVsbCk7IC8vaWYgdXNlciBub24gZXhpc3Qgb3IgaXMgbm90IGF1dGggdGhlbiBmaW5pc2ggdGhlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGBodHRwczovL25zLW5nLWNvdXJzZS0zOTlhZC5maXJlYmFzZWlvLmNvbS9jaGFsbGVuZ2UvJHtjdXJyZW50VXNlci5pZH0uanNvbj9hdXRoPSR7Y3VycmVudFVzZXIudG9rZW59YCwgY2hhbGxlbmdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwOyB9XFxuXFxuLndlZWstZGF5LWxhYmVsIHtcXG4gIGNvbG9yOiAjMmIwYzcyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDE1IDA7IH1cXG5cXG4uZGF5IHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MDtcXG4gIGhlaWdodDogNTA7XFxuICBtYXJnaW46IDEwO1xcbiAgYm9yZGVyLWNvbG9yOiAjN2MwMTVkO1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6ICM3YzAxNWQ7IH1cXG5cXG4uY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmZhaWwge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLm5vdC1zZXR0YWJsZSB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY29sb3I6ICM1MzUzNTM7IH1cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bnMtYWN0aW9uLWJhciB0aXRsZT1cXFwiQ3VycmVudCBDaGFsbGVuZ2VcXFwiIFtzaG93QmFja0J1dHRvbl09XFxcImZhbHNlXFxcIj5cXG4gIDxBY3Rpb25JdGVtIFxcbiAgICBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiBcXG4gICAgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIiBcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9yZXBsYWNlXFxcIlxcbiAgICBwYWdlVHJhbnNpdGlvbj1cXFwic2xpZGVMZWZ0XFxcIlxcbiAgICA+IFxcbiAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjBmZTtcXFwiIGlvczpjbGFzcz1cXFwiZmEgcC01XFxcIiBhbmRyb2lkOmNsYXNzPVxcXCJmYSBwLTEwXFxcIiBhbmRyb2lkOmZvbnRTaXplPVxcXCIyNFxcXCI+PC9MYWJlbD5cXG4gIDwvQWN0aW9uSXRlbT5cXG4gIDxBY3Rpb25JdGVtIFxcbiAgICBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiBcXG4gICAgYW5kcm9pZC5wb3NpdGlvbj1cXFwiYWN0aW9uQmFyXFxcIiBcXG4gICAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9lZGl0XFxcIlxcbiAgICBwYWdlVHJhbnNpdGlvbj1cXFwic2xpZGVMZWZ0XFxcIlxcbiAgICAqbmdJZj1cXFwiY3VycmVudENoYWxsZW5nZVxcXCJcXG4gID4gXFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDQ0O1xcXCIgaW9zOmNsYXNzPVxcXCJmYSBwLTVcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImZhIHAtMTBcXFwiIGFuZHJvaWQ6Zm9udFNpemU9XFxcIjI0XFxcIj48L0xhYmVsPlxcbiAgPC9BY3Rpb25JdGVtPlxcbjwvbnMtYWN0aW9uLWJhcj5cXG5cXG48U2Nyb2xsVmlldz5cXG4gIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhY3VycmVudENoYWxsZW5nZVxcXCI+XFxuICAgICAgPExhYmVsIHRleHQ9XFxcIk5vIGNoYWxsZW5nZSBmb3VuZCFcXFwiPjwvTGFiZWw+XFxuICAgICAgPEJ1dHRvbiBcXG4gICAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIFxcbiAgICAgICAgdGV4dD1cXFwiQ3JlYXRlIE9uZSFcXFwiIFxcbiAgICAgICAgbnNSb3V0ZXJMaW5rPVxcXCIvY2hhbGxlbmdlcy9yZXBsYWNlXFxcIlxcbiAgICAgICAgcGFnZVRyYW5zaXRpb249XFxcInNsaWRlTGVmdFxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxTdGFja0xheW91dCAqbmdJZj1cXFwiY3VycmVudENoYWxsZW5nZVxcXCIgbWFyZ2luQm90dG9tPVxcXCIxMFxcXCIgbWFyZ2luVG9wPVxcXCIxMFxcXCI+XFxuICAgICAgPExhYmVsXFxuICAgICAgICBjbGFzcz1cXFwiaDEgdGV4dC1jZW50ZXJcXFwiXFxuICAgICAgICB3aWR0aD1cXFwiMTAwJVxcXCJcXG4gICAgICAgIFt0ZXh0XT1cXFwiY3VycmVudENoYWxsZW5nZS50aXRsZVxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbFxcbiAgICAgICAgY2xhc3M9XFxcImJvZHkgdGV4dC1jZW50ZXJcXFwiXFxuICAgICAgICBbdGV4dF09XFxcImN1cnJlbnRDaGFsbGVuZ2UuZGVzY3JpcHRpb25cXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgICAgPEdyaWRMYXlvdXQgXFxuICAgICAgICByb3dzPVxcXCJhdXRvLCosKiwqLCosKiwqXFxcIiBcXG4gICAgICAgIGNvbHVtbnM9XFxcIiosKiwqLCosKiwqLCpcXFwiIFxcbiAgICAgICAgKm5nSWY9XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPExhYmVsIFxcbiAgICAgICAgICBjbGFzcz1cXFwid2Vlay1kYXktbGFiZWwgdGV4dC1jZW50ZXJcXFwiXFxuICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIlxcbiAgICAgICAgICAqbmdGb3I9XFxcImxldCB3ZWVrRGF5IG9mIHdlZWtEYXlzOyBsZXQgaSA9IGluZGV4XFxcIiBcXG4gICAgICAgICAgW3RleHRdPVxcXCJ3ZWVrRGF5XFxcIiBcXG4gICAgICAgICAgcm93PVxcXCIwXFxcIiBcXG4gICAgICAgICAgW2NvbF09XFxcImlcXFwiXFxuICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IFxcbiAgICAgICAgICBjbGFzcz1cXFwiZGF5XFxcIlxcbiAgICAgICAgICBbbmdDbGFzc109XFxcInsnbm90LXNldHRhYmxlJzogIWdldElzU2V0dGFibGUoZGF5LmRheUluTW9udGgpLCBjb21wbGV0ZWQ6IGRheS5zdGF0dXMgPT09IDEsIGZhaWw6IGRheS5zdGF0dXMgPT09IDJ9XFxcIiBcXG4gICAgICAgICAgKm5nRm9yPVxcXCJsZXQgZGF5IG9mIGN1cnJlbnRDaGFsbGVuZ2UuZGF5czsgbGV0IGkgPSBpbmRleFxcXCIgXFxuICAgICAgICAgIFtyb3ddPVxcXCJnZXRSb3coaSwgZGF5KVxcXCJcXG4gICAgICAgICAgW2NvbF09XFxcImRheS5kYXlJbldlZWtcXFwiXFxuICAgICAgICAgICh0YXApPVxcXCJvbkNoYW5nZVN0YXR1cyhkYXkpXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgIFt0ZXh0XT1cXFwiZGF5LmRheUluTW9udGhcXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvRmxleGJveExheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvdWkuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2UgfSBmcm9tICcuLi9jaGFsbGVuZ2VzLm1vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuLi9kYXkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jdXJyZW50LWNoYWxsZW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL19jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MnLFxuICAgIC8vICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MnXG4gIF0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgd2Vla0RheXMgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcbiAgY3VycmVudENoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICBwcml2YXRlIGN1ckNoYWxsZW5nZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxEaWFsb2c6IE1vZGFsRGlhbG9nU2VydmljZSwgXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgXG4gICAgcHJpdmF0ZSB1aVNlcnZpY2U6IFVJU2VydmljZSxcbiAgICBwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1ckNoYWxsZW5nZVN1YiA9IHRoaXMuY2hhbGxlbmdlU2VydmljZS5jdXJyZW50Q2hhbGxlbmdlLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50Q2hhbGxlbmdlID0gY2hhbGxlbmdlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SXNTZXR0YWJsZShkYXlJbk1vbnRoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gZGF5SW5Nb250aCA8PSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldFJvdyhpbmRleDogbnVtYmVyLCBkYXk6IHsgZGF5SW5Nb250aDogbnVtYmVyOyBkYXlJbldlZWs6IG51bWJlciB9KSB7XG4gICAgY29uc3Qgc3RhcnRSb3cgPSAxO1xuICAgIGNvbnN0IHdlZWtSb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gNyk7XG4gICAgY29uc3QgZmlyc3RXZWVrRGF5T2ZNb250aCA9IG5ldyBEYXRlKFxuICAgICAgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgMVxuICAgICkuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXJyZWd1bGFyUm93ID0gZGF5LmRheUluV2VlayA8IGZpcnN0V2Vla0RheU9mTW9udGggPyAxIDogMDtcblxuICAgIHJldHVybiBzdGFydFJvdyArIHdlZWtSb3cgKyBpcnJlZ3VsYXJSb3c7XG4gIH1cblxuXG4gIG9uQ2hhbmdlU3RhdHVzKGRheTogRGF5KSB7XG4gICAgaWYoIXRoaXMuZ2V0SXNTZXR0YWJsZShkYXkuZGF5SW5Nb250aCkpIHtcbiAgICAgIHJldHVybjsgLy9pZiBnZXQgZGF0ZSBpcyBub3Qgc2V0dGFibGUgKGZ1dHVyZSBkYXRlcykgdGhpcyBkb2Vzbid0IG9wZW4gdGhlIG1vZGFsXG4gICAgfVxuICAgIHRoaXMubW9kYWxEaWFsb2cuc2hvd01vZGFsKERheU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLCBcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IFxuICAgICAgICB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKSBcbiAgICAgICAgPyB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKSAgLy9jaGVjayBpZiBnZXRSb290VkNSZWYgZXhpc3QsXG4gICAgICAgIDogdGhpcy52Y1JlZiwgLy91c2UgaXQgaWYgaXQgZG9lcywgaWYgbm90IGp1c3QgdXNlIHZjUmVmIHByb3BlcnR5XG4gICAgICAgIGNvbnRleHQ6IHsgZGF0ZTogZGF5LmRhdGUsIHN0YXR1czogZGF5LnN0YXR1cyB9XG4gICAgfSkudGhlbigoc3RhdHVzOiBEYXlTdGF0dXMpID0+IHtcbiAgICAgIGlmKHN0YXR1cyA9PT0gRGF5U3RhdHVzLk9wZW4pIHsgLy90aGlzIGlmIGFsbG93cyB1c2VyIHRvIGNsb3NlIHRoZSBtb2RhbCB3aXRob3V0IHJlc2V0dGluZyB0aGUgY29tcGxldGlvbiB2YWx1ZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UudXBkYXRlRGF5U3RhdHVzKGRheS5kYXlJbk1vbnRoLCBzdGF0dXMpO1xuICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKHRoaXMuY3VyQ2hhbGxlbmdlU3ViKSB7XG4gICAgICB0aGlzLmN1ckNoYWxsZW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxucy1hY3Rpb24tYmFyXFxuICB0aXRsZT1cXFwiVG9kYXkncyBDaGFsbGVuZ2VcXFwiXFxuICBbc2hvd0JhY2tCdXR0b25dPVxcXCJmYWxzZVxcXCJcXG4+PC9ucy1hY3Rpb24tYmFyPlxcblxcbjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAqbmdJZj1cXFwiIWN1cnJlbnREYXlcXFwiPlxcbiAgPExhYmVsIHRleHQ9XFxcIk5vIGNoYWxsZW5nZSBmb3VuZCFcXFwiPjwvTGFiZWw+XFxuICA8QnV0dG9uIFxcbiAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBcXG4gICAgdGV4dD1cXFwiQ3JlYXRlIE9uZSFcXFwiIFxcbiAgICBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL3JlcGxhY2VcXFwiXFxuICAgIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZUxlZnRcXFwiPjwvQnV0dG9uPlxcbjwvRmxleGJveExheW91dD5cXG5cXG48RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgKm5nSWY9XFxcImN1cnJlbnREYXlcXFwiPiBcXG4gIDxMYWJlbCBjbGFzcz1cXFwiaDFcXFwiIFt0ZXh0XT1cXFwiY3VycmVudERheS5kYXRlIHwgZGF0ZVxcXCI+PC9MYWJlbD5cXG4gIDxucy1jaGFsbGVuZ2UtYWN0aW9ucyBcXG4gICAgKGFjdGlvblNlbGVjdCk9XFxcIm9uQWN0aW9uU2VsZWN0ZWQoJGV2ZW50KVxcXCIgXFxuICAgIFtjaG9zZW5dPVxcXCJnZXRBY3Rpb25OYW1lKClcXFwiXFxuICAgIFtzdGFydERvbmVdPVxcXCJnZXRBY3Rpb25OYW1lKCkgPT09J2NvbXBsZXRlJyB8fCBnZXRBY3Rpb25OYW1lKCkgPT09ICdmYWlsJ1xcXCJcXG4gICAgY2FuY2VsVGV4dD1cXFwiUmVzZXRcXFwiXFxuICA+PC9ucy1jaGFsbGVuZ2UtYWN0aW9ucz5cXG48L0ZsZXhib3hMYXlvdXQ+XFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnBhZ2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VzU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBEYXksIERheVN0YXR1cyB9IGZyb20gJy4uL2RheS5tb2RlbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtdG9kYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9kYXkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2RheS5jb21wb25lbnQuc2NzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBUb2RheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY3VycmVudERheTogRGF5O1xuICBwcml2YXRlIGN1ckNoYWxsZW5nZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbGxlbmdlU2VydmljZTogQ2hhbGxlbmdlc1NlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VyQ2hhbGxlbmdlU3ViID0gdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLmN1cnJlbnRDaGFsbGVuZ2Uuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICBpZihjaGFsbGVuZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF5ID0gY2hhbGxlbmdlLmN1cnJlbnREYXk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbkFjdGlvblNlbGVjdGVkKGFjdGlvbjogRGF5U3RhdHVzKSB7XG4gICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLnVwZGF0ZURheVN0YXR1cyh0aGlzLmN1cnJlbnREYXkuZGF5SW5Nb250aCwgYWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICB9XG5cbiAgZ2V0QWN0aW9uTmFtZSgpIHtcbiAgICBpZih0aGlzLmN1cnJlbnREYXkuc3RhdHVzID09PSBEYXlTdGF0dXMuQ29tcGxldGVkKSB7XG4gICAgICByZXR1cm4gJ2NvbXBsZXRlJztcbiAgICB9XG4gICAgaWYodGhpcy5jdXJyZW50RGF5LnN0YXR1cyA9PT0gRGF5U3RhdHVzLkZhaWxlZCkge1xuICAgICAgcmV0dXJuICdmYWlsJztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZih0aGlzLmN1ckNoYWxsZW5nZVN1Yikge1xuICAgICAgdGhpcy5jdXJDaGFsbGVuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQWN0aW9uQmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge30iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBbdGl0bGVdPVxcXCJ0aXRsZVxcXCIgKGxvYWRlZCk9XFxcIm9uTG9hZGVkQWN0aW9uQmFyKClcXFwiPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgdGV4dD1cXFwiQmFja1xcXCJcXG4gICAgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiXFxuICAgICpuZ0lmPVxcXCJjYW5Hb0JhY2tcXFwiXFxuICAgICh0YXApPVxcXCJvbkdvQmFjaygpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDxOYXZpZ2F0aW9uQnV0dG9uXFxuICAgICpuZ0lmPVxcXCJhbmRyb2lkICYmIGhhc01lbnVcXFwiXFxuICAgIGljb249XFxcInJlczovL21lbnVfYmxhY2tcXFwiXFxuICAgICh0YXApPVxcXCJvblRvZ2dsZU1lbnUoKVxcXCJcXG4gID48L05hdmlnYXRpb25CdXR0b24+XFxuICA8QWN0aW9uSXRlbVxcbiAgICAqbmdJZj1cXFwiIWFuZHJvaWQgJiYgaGFzTWVudVxcXCJcXG4gICAgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIlxcbiAgICAodGFwKT1cXFwib25Ub2dnbGVNZW51KClcXFwiXFxuICA+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMGM5O1xcXCIgY2xhc3M9XFxcImZhIG0tNVxcXCI+PC9MYWJlbD5cXG4gIDwvQWN0aW9uSXRlbT5cXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gPCEtLSBkZWZhdWx0IG5hdGl2ZXNjcmlwdCAgLS0+XFxuPC9BY3Rpb25CYXI+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS5zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hY3Rpb24tYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93QmFja0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGhhc01lbnUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZ2V0IGFuZHJvaWQoKSB7XG4gICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgfVxuXG4gIGdldCBjYW5Hb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmNhbkdvQmFjaygpICYmIHRoaXMuc2hvd0JhY2tCdXR0b247XG4gIH1cblxuICBvbkdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkQWN0aW9uQmFyKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgIGNvbnN0IGFuZHJvaWRUb29sYmFyID0gdGhpcy5wYWdlLmFjdGlvbkJhci5uYXRpdmVWaWV3O1xuICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGFuZHJvaWRUb29sYmFyLmdldE5hdmlnYXRpb25JY29uKCk7XG4gICAgICBsZXQgY29sb3IgPSAnIzE3MTcxNyc7XG4gICAgICBpZiAodGhpcy5oYXNNZW51KSB7XG4gICAgICAgIGNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2tCdXR0b24pIHtcbiAgICAgICAgYmFja0J1dHRvbi5zZXRDb2xvckZpbHRlcihcbiAgICAgICAgICBhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoY29sb3IpLFxuICAgICAgICAgICg8YW55PmFuZHJvaWQuZ3JhcGhpY3MpLlBvcnRlckR1ZmYuTW9kZS5TUkNfQVRPUFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVG9nZ2xlTWVudSgpIHtcbiAgICB0aGlzLnVpU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==