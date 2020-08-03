(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.css":
/***/ (function(module, exports) {

module.exports = "TabView {\n    selected-tab-text-color: #7c015d;\n}"

/***/ }),

/***/ "./app/challenges/challenge-tabs/challenge-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<TabView androidTabsPosition=\"bottom\" *ngIf=\"!isLoading\">\n  <StackLayout *tabItem=\"{ title: 'Today', iconSource: 'res://check'}\">\n    <page-router-outlet name=\"today\"> </page-router-outlet>\n  </StackLayout>\n  <StackLayout *tabItem=\"{ title: 'Current Challenge', iconSource: 'res://trophy' }\">\n    <page-router-outlet name=\"currentChallenge\"> </page-router-outlet>\n  </StackLayout>\n</TabView>\n<FlexboxLayout justifyContent=\"center\" alignItems=\"center\" *ngIf=\"isLoading\">\n  <ActivityIndicator [busy]=\"isLoading\"></ActivityIndicator>\n</FlexboxLayout>"

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
    function ChallengeTabsComponent(router, active, page, challengeService) {
        this.router = router;
        this.active = active;
        this.page = page;
        this.challengeService = challengeService;
        this.isLoading = false;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.challengeService.fetchCurrentChallenge().subscribe(function (res) {
            console.log('Fetched challenge...');
            _this.isLoading = false;
            _this.loadTabRoutes();
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
            _this.loadTabRoutes();
        });
        this.page.actionBarHidden = true;
    };
    ChallengeTabsComponent.prototype.loadTabRoutes = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate([
                {
                    outlets: {
                        currentChallenge: ['current-challenge'],
                        today: ['today']
                    }
                }
            ], {
                relativeTo: _this.active
            });
        }, 10);
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





var ChallengesService = /** @class */ (function () {
    function ChallengesService(http) {
        this.http = http;
        this._currentChallenge = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null); //unit 151
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
        return this.http.get('https://ns-ng-course-399ad.firebaseio.com/challenge.json/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            if (resData) {
                var loadedChallenge = new _challenges_model__WEBPACK_IMPORTED_MODULE_4__["Challenge"](resData.title, resData.description, resData.year, resData.month, resData._days);
                _this._currentChallenge.next(loadedChallenge);
            }
        }));
    };
    ChallengesService.prototype.createNewChallenge = function (title, description) {
        var newChallenge = new _challenges_model__WEBPACK_IMPORTED_MODULE_4__["Challenge"](title, description, new Date().getFullYear(), new Date().getMonth());
        //save it to server unit 172
        this.http.put('https://ns-ng-course-399ad.firebaseio.com/challenge.json', newChallenge).subscribe(function (res) {
            console.log(res);
        });
        this._currentChallenge.next(newChallenge);
    };
    ChallengesService.prototype.updateChallenge = function (title, description) {
        var _this = this;
        this._currentChallenge.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (challenge) {
            var updatedChallenge = new _challenges_model__WEBPACK_IMPORTED_MODULE_4__["Challenge"](title, description, challenge.year, challenge.month, challenge.days);
            //send to a server
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
            console.log(challenge.days[dayIndex]);
            //save this to a server
        });
    };
    ChallengesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }) //make it available throughtout the app
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = "<ns-action-bar title=\"Current Challenge\" [showBackButton]=\"false\">\n  <ActionItem \n    ios.position=\"right\" \n    android.position=\"actionBar\" \n    nsRouterLink=\"/challenges/replace\"\n    pageTransition=\"slideLeft\"\n    > \n    <Label text=\"&#xf0fe;\" ios:class=\"fa p-5\" android:class=\"fa p-10\" android:fontSize=\"24\"></Label>\n  </ActionItem>\n  <ActionItem \n    ios.position=\"right\" \n    android.position=\"actionBar\" \n    nsRouterLink=\"/challenges/edit\"\n    pageTransition=\"slideLeft\"\n    *ngIf=\"currentChallenge\"\n  > \n    <Label text=\"&#xf044;\" ios:class=\"fa p-5\" android:class=\"fa p-10\" android:fontSize=\"24\"></Label>\n  </ActionItem>\n</ns-action-bar>\n\n<ScrollView>\n  <FlexboxLayout class=\"page\">\n    <StackLayout *ngIf=\"!currentChallenge\">\n      <Label text=\"No challenge found!\"></Label>\n      <Button \n        class=\"btn btn-primary\" \n        text=\"Create One!\" \n        nsRouterLink=\"/challenges/replace\"\n        pageTransition=\"slideLeft\"></Button>\n    </StackLayout>\n    <StackLayout *ngIf=\"currentChallenge\">\n      <Label\n        class=\"h1 text-center\"\n        [text]=\"currentChallenge.title\"\n      ></Label>\n        <Label\n        class=\"body text-center\"\n        [text]=\"currentChallenge.description\"\n      ></Label>\n      <GridLayout \n        rows=\"auto,*,*,*,*,*,*\" \n        columns=\"*,*,*,*,*,*,*\" \n        *ngIf=\"currentChallenge\"\n      >\n        <Label \n          class=\"week-day-label text-center\"\n          width=\"100%\"\n          *ngFor=\"let weekDay of weekDays; let i = index\" \n          [text]=\"weekDay\" \n          row=\"0\" \n          [col]=\"i\"\n        ></Label>\n        <FlexboxLayout \n          class=\"day\"\n          [ngClass]=\"{'not-settable': !getIsSettable(day.dayInMonth), completed: day.status === 1, fail: day.status === 2}\" \n          *ngFor=\"let day of currentChallenge.days; let i = index\" \n          [row]=\"getRow(i, day)\"\n          [col]=\"day.dayInWeek\"\n          (tap)=\"onChangeStatus(day)\"\n          >\n          <Label\n            [text]=\"day.dayInMonth\"\n          ></Label>\n        </FlexboxLayout>\n      </GridLayout>\n    </StackLayout>\n  </FlexboxLayout>\n</ScrollView>\n"

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

module.exports = "<ns-action-bar\n  title=\"Today's Challenge\"\n  [showBackButton]=\"false\"\n></ns-action-bar>\n\n<FlexboxLayout class=\"page\" *ngIf=\"!currentDay\">\n  <Label text=\"No challenge found!\"></Label>\n  <Button \n    class=\"btn btn-primary\" \n    text=\"Create One!\" \n    nsRouterLink=\"/challenges/replace\"\n    pageTransition=\"slideLeft\"></Button>\n</FlexboxLayout>\n\n<FlexboxLayout class=\"page\" *ngIf=\"currentDay\"> \n  <Label class=\"h1\" [text]=\"currentDay.date | date\"></Label>\n  <ns-challenge-actions \n    (actionSelect)=\"onActionSelected($event)\" \n    [chosen]=\"getActionName()\"\n    cancelText=\"Reset\"\n  ></ns-challenge-actions>\n</FlexboxLayout>\n"

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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2N1cnJlbnQtY2hhbGxlbmdlL19jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL3RvZGF5L3RvZGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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LENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixNQUFpQjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLG9EQUFTLENBQUMsU0FBUyxFQUFFO1lBQ2pELE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBQ0QsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxvREFBUyxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQWpDVSxjQUFjO1FBTjFCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQiw0RUFBcUM7O1NBR3RDLENBQUM7eUNBS3NDLHFFQUFpQjtPQUo1QyxjQUFjLENBa0MxQjtJQUFELHFCQUFDO0NBQUE7QUFsQzBCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiVGFiVmlldyB7XFxuICAgIHNlbGVjdGVkLXRhYi10ZXh0LWNvbG9yOiAjN2MwMTVkO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8VGFiVmlldyBhbmRyb2lkVGFic1Bvc2l0aW9uPVxcXCJib3R0b21cXFwiICpuZ0lmPVxcXCIhaXNMb2FkaW5nXFxcIj5cXG4gIDxTdGFja0xheW91dCAqdGFiSXRlbT1cXFwieyB0aXRsZTogJ1RvZGF5JywgaWNvblNvdXJjZTogJ3JlczovL2NoZWNrJ31cXFwiPlxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IG5hbWU9XFxcInRvZGF5XFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPFN0YWNrTGF5b3V0ICp0YWJJdGVtPVxcXCJ7IHRpdGxlOiAnQ3VycmVudCBDaGFsbGVuZ2UnLCBpY29uU291cmNlOiAncmVzOi8vdHJvcGh5JyB9XFxcIj5cXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCBuYW1lPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIj4gPC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvVGFiVmlldz5cXG48RmxleGJveExheW91dCBqdXN0aWZ5Q29udGVudD1cXFwiY2VudGVyXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiICpuZ0lmPVxcXCJpc0xvYWRpbmdcXFwiPlxcbiAgPEFjdGl2aXR5SW5kaWNhdG9yIFtidXN5XT1cXFwiaXNMb2FkaW5nXFxcIj48L0FjdGl2aXR5SW5kaWNhdG9yPlxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VzU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGFjdGl2ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgY2hhbGxlbmdlU2VydmljZTogQ2hhbGxlbmdlc1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkgeyAvL3VuaXQgMTczXG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS5mZXRjaEN1cnJlbnRDaGFsbGVuZ2UoKS5zdWJzY3JpYmUoXG4gICAgICByZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCBjaGFsbGVuZ2UuLi4nKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkVGFiUm91dGVzKCk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb2FkVGFiUm91dGVzKCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVGFiUm91dGVzKCkgeyAvL3VuaXQgMTczIC8vaXQgbWFrZXMgYSBiaXQgb2YgZGVsYXkgdG8gZ2V0IHRoZSBmZXRjaCB0aGUgZGF0YSBzbyB0aGUgVUkgd29uJ3QgYnJlYWsuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG91dGxldHM6IHtcbiAgICAgICAgICAgICAgY3VycmVudENoYWxsZW5nZTogWydjdXJyZW50LWNoYWxsZW5nZSddLFxuICAgICAgICAgICAgICB0b2RheTogWyd0b2RheSddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmVcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LCAxMCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLXRhYnMvY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRvZGF5Q29tcG9uZW50IH0gZnJvbSAnLi90b2RheS90b2RheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gJy4vY3VycmVudC1jaGFsbGVuZ2UvY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAndGFicycsIGNvbXBvbmVudDogQ2hhbGxlbmdlVGFic0NvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgcGF0aDogJ3RvZGF5JywgY29tcG9uZW50OiBUb2RheUNvbXBvbmVudCwgb3V0bGV0OiAndG9kYXknIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnY3VycmVudC1jaGFsbGVuZ2UnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgICAgICAgICAgb3V0bGV0OiAnY3VycmVudENoYWxsZW5nZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgcGF0aDogJzptb2RlJywgbG9hZENoaWxkcmVuOiAnfi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5tb2R1bGUjQ2hhbGxlbmdlRWRpdE1vZHVsZScgfSwgLy9sYXp5IGxvYWRpbmdcbiAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvY2hhbGxlbmdlcy90YWJzJywgcGF0aE1hdGNoOiAnZnVsbCcgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlIHt9IiwiaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuL2RheS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZywgXG4gICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLCBcbiAgICAgICAgcHVibGljIHllYXI6IG51bWJlciwgXG4gICAgICAgIHB1YmxpYyBtb250aDogbnVtYmVyLCBcbiAgICAgICAgcHJpdmF0ZSBfZGF5czogRGF5W10gPSBbXVxuICAgICkge1xuICAgICAgICBpZihfZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTsgLy8wIGdpdmVzIHRoZSBsYXN0IGRheSBvZiB0aGUgcHJldmlvdXMgbW9udGggXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXlzSW5Nb250aCArIDE7IGkrKykgeyAvL21heCBkYXlzSW5Nb250aCB3aWxsIGJlIDMxIGZyb20gY29uc3QgZGF5c0luTW9udGhcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBpKTtcbiAgICAgICAgY29uc3QgZGF5SW5XZWVrID0gZGF0ZS5nZXREYXkoKTsgLy9naXZlcyBzdW49MCBtb249MSB0dWU9Mi4uLlxuICAgICAgICB0aGlzLl9kYXlzLnB1c2goeyBkYXlJbk1vbnRoOiBpLCBkYXlJbldlZWs6IGRheUluV2VlaywgZGF0ZTogZGF0ZSwgc3RhdHVzOiBEYXlTdGF0dXMuT3Blbn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnREYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXlzLmZpbmQoZCA9PiBkLmRheUluTW9udGggPT09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgZGF5cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9kYXlzXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tICcuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gJy4vdG9kYXkvdG9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IENoYWxsZW5nZVRhYnNDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxuICAgICAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgICAgICBUb2RheUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIC8vbmVlZCB0aGlzIGZvciB1c2Ugb2YgKm5nSWYgZXRjLlxuICAgICAgICBDaGFsbGVuZ2VzUm91dGluZ01vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxuICAgICAgICBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc01vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzLm1vZGVsJztcbmltcG9ydCB7IERheVN0YXR1cywgRGF5IH0gZnJvbSAnLi9kYXkubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSAoeyBwcm92aWRlZEluOiAncm9vdCcgfSkgLy9tYWtlIGl0IGF2YWlsYWJsZSB0aHJvdWdodG91dCB0aGUgYXBwXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2N1cnJlbnRDaGFsbGVuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENoYWxsZW5nZT4obnVsbCk7IC8vdW5pdCAxNTFcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuXG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRDaGFsbGVuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLmFzT2JzZXJ2YWJsZSgpOyAvL3VuaXQgMTUzXG4gICAgfVxuXG4gICAgZmV0Y2hDdXJyZW50Q2hhbGxlbmdlKCkgeyAvL3VuaXQgMTczXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHtcbiAgICAgICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgbW9udGg6IG51bWJlcjtcbiAgICAgICAgICAgIHllYXI6IG51bWJlcjtcbiAgICAgICAgICAgIF9kYXlzOiBEYXlbXTtcbiAgICAgICAgfT4oJ2h0dHBzOi8vbnMtbmctY291cnNlLTM5OWFkLmZpcmViYXNlaW8uY29tL2NoYWxsZW5nZS5qc29uLycpXG4gICAgICAgIC5waXBlKHRhcChyZXNEYXRhID0+IHtcbiAgICAgICAgICAgIGlmKHJlc0RhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkZWRDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKFxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhLnRpdGxlLCBcbiAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgIHJlc0RhdGEueWVhciwgXG4gICAgICAgICAgICAgICAgICAgIHJlc0RhdGEubW9udGgsIFxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhLl9kYXlzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dChsb2FkZWRDaGFsbGVuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdDaGFsbGVuZ2UodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICBjb25zdCBuZXdDaGFsbGVuZ2UgPSBuZXcgQ2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbiwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCkpO1xuXG4gICAgICAgIC8vc2F2ZSBpdCB0byBzZXJ2ZXIgdW5pdCAxNzJcbiAgICAgICAgdGhpcy5odHRwLnB1dCgnaHR0cHM6Ly9ucy1uZy1jb3Vyc2UtMzk5YWQuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLmpzb24nLCBuZXdDaGFsbGVuZ2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dChuZXdDaGFsbGVuZ2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNoYWxsZW5nZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7IC8vdW5pdCAxNjZcbiAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENoYWxsZW5nZSA9IG5ldyBDaGFsbGVuZ2UodGl0bGUsIGRlc2NyaXB0aW9uLCBjaGFsbGVuZ2UueWVhciwgY2hhbGxlbmdlLm1vbnRoLCBjaGFsbGVuZ2UuZGF5cyk7XG4gICAgICAgICAgICAvL3NlbmQgdG8gYSBzZXJ2ZXJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dCh1cGRhdGVkQ2hhbGxlbmdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVEYXlTdGF0dXMoZGF5SW5Nb250aDogbnVtYmVyLCBzdGF0dXM6IERheVN0YXR1cykge1xuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICBpZighY2hhbGxlbmdlIHx8IGNoYWxsZW5nZS5kYXlzLmxlbmd0aCA8IGRheUluTW9udGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vdW5pdCAxNTc6IGNoZWNrIHRoZSBjaGFsbGVuZ2UgaGFzIGxlc3MgZGF5cyBlbGVtZW50IHRoYW4gZGF5SW5Nb250aCAoaXQgc2hvdWxkbid0IGhhdmUgMzAgZGF5cyBpbiBGZWIpLlxuICAgICAgICAgICAgICAgIC8vaWYgY2hhbGxlbmdlIGlzIGVtcHR5IE9SIGludmFsaWQgbnVtYmVyIG9mIGRheXMgdGhlIGZ1bmN0aW9uIHdpbGwgc3RvcC5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRheUluZGV4ID0gY2hhbGxlbmdlLmRheXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIGQgPT4gZC5kYXlJbk1vbnRoID09PSBkYXlJbk1vbnRoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2hhbGxlbmdlLmRheXNbZGF5SW5kZXhdLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UubmV4dChjaGFsbGVuZ2UpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhbGxlbmdlLmRheXNbZGF5SW5kZXhdKTtcbiAgICAgICAgICAgIC8vc2F2ZSB0aGlzIHRvIGEgc2VydmVyXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnBhZ2Uge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjA7IH1cXG5cXG4ud2Vlay1kYXktbGFiZWwge1xcbiAgY29sb3I6ICMyYjBjNzI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMTUgMDsgfVxcblxcbi5kYXkge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDUwO1xcbiAgaGVpZ2h0OiA1MDtcXG4gIG1hcmdpbjogMTA7XFxuICBib3JkZXItY29sb3I6ICM3YzAxNWQ7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogIzdjMDE1ZDsgfVxcblxcbi5jb21wbGV0ZWQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uZmFpbCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ubm90LXNldHRhYmxlIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzUzNTM1MzsgfVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxucy1hY3Rpb24tYmFyIHRpdGxlPVxcXCJDdXJyZW50IENoYWxsZW5nZVxcXCIgW3Nob3dCYWNrQnV0dG9uXT1cXFwiZmFsc2VcXFwiPlxcbiAgPEFjdGlvbkl0ZW0gXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIFxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiIFxcbiAgICBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL3JlcGxhY2VcXFwiXFxuICAgIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZUxlZnRcXFwiXFxuICAgID4gXFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMGZlO1xcXCIgaW9zOmNsYXNzPVxcXCJmYSBwLTVcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImZhIHAtMTBcXFwiIGFuZHJvaWQ6Zm9udFNpemU9XFxcIjI0XFxcIj48L0xhYmVsPlxcbiAgPC9BY3Rpb25JdGVtPlxcbiAgPEFjdGlvbkl0ZW0gXFxuICAgIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiIFxcbiAgICBhbmRyb2lkLnBvc2l0aW9uPVxcXCJhY3Rpb25CYXJcXFwiIFxcbiAgICBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL2VkaXRcXFwiXFxuICAgIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZUxlZnRcXFwiXFxuICAgICpuZ0lmPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIlxcbiAgPiBcXG4gICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwNDQ7XFxcIiBpb3M6Y2xhc3M9XFxcImZhIHAtNVxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiZmEgcC0xMFxcXCIgYW5kcm9pZDpmb250U2l6ZT1cXFwiMjRcXFwiPjwvTGFiZWw+XFxuICA8L0FjdGlvbkl0ZW0+XFxuPC9ucy1hY3Rpb24tYmFyPlxcblxcbjxTY3JvbGxWaWV3PlxcbiAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFjdXJyZW50Q2hhbGxlbmdlXFxcIj5cXG4gICAgICA8TGFiZWwgdGV4dD1cXFwiTm8gY2hhbGxlbmdlIGZvdW5kIVxcXCI+PC9MYWJlbD5cXG4gICAgICA8QnV0dG9uIFxcbiAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgXFxuICAgICAgICB0ZXh0PVxcXCJDcmVhdGUgT25lIVxcXCIgXFxuICAgICAgICBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL3JlcGxhY2VcXFwiXFxuICAgICAgICBwYWdlVHJhbnNpdGlvbj1cXFwic2xpZGVMZWZ0XFxcIj48L0J1dHRvbj5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCJjdXJyZW50Q2hhbGxlbmdlXFxcIj5cXG4gICAgICA8TGFiZWxcXG4gICAgICAgIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlclxcXCJcXG4gICAgICAgIFt0ZXh0XT1cXFwiY3VycmVudENoYWxsZW5nZS50aXRsZVxcXCJcXG4gICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDxMYWJlbFxcbiAgICAgICAgY2xhc3M9XFxcImJvZHkgdGV4dC1jZW50ZXJcXFwiXFxuICAgICAgICBbdGV4dF09XFxcImN1cnJlbnRDaGFsbGVuZ2UuZGVzY3JpcHRpb25cXFwiXFxuICAgICAgPjwvTGFiZWw+XFxuICAgICAgPEdyaWRMYXlvdXQgXFxuICAgICAgICByb3dzPVxcXCJhdXRvLCosKiwqLCosKiwqXFxcIiBcXG4gICAgICAgIGNvbHVtbnM9XFxcIiosKiwqLCosKiwqLCpcXFwiIFxcbiAgICAgICAgKm5nSWY9XFxcImN1cnJlbnRDaGFsbGVuZ2VcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPExhYmVsIFxcbiAgICAgICAgICBjbGFzcz1cXFwid2Vlay1kYXktbGFiZWwgdGV4dC1jZW50ZXJcXFwiXFxuICAgICAgICAgIHdpZHRoPVxcXCIxMDAlXFxcIlxcbiAgICAgICAgICAqbmdGb3I9XFxcImxldCB3ZWVrRGF5IG9mIHdlZWtEYXlzOyBsZXQgaSA9IGluZGV4XFxcIiBcXG4gICAgICAgICAgW3RleHRdPVxcXCJ3ZWVrRGF5XFxcIiBcXG4gICAgICAgICAgcm93PVxcXCIwXFxcIiBcXG4gICAgICAgICAgW2NvbF09XFxcImlcXFwiXFxuICAgICAgICA+PC9MYWJlbD5cXG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IFxcbiAgICAgICAgICBjbGFzcz1cXFwiZGF5XFxcIlxcbiAgICAgICAgICBbbmdDbGFzc109XFxcInsnbm90LXNldHRhYmxlJzogIWdldElzU2V0dGFibGUoZGF5LmRheUluTW9udGgpLCBjb21wbGV0ZWQ6IGRheS5zdGF0dXMgPT09IDEsIGZhaWw6IGRheS5zdGF0dXMgPT09IDJ9XFxcIiBcXG4gICAgICAgICAgKm5nRm9yPVxcXCJsZXQgZGF5IG9mIGN1cnJlbnRDaGFsbGVuZ2UuZGF5czsgbGV0IGkgPSBpbmRleFxcXCIgXFxuICAgICAgICAgIFtyb3ddPVxcXCJnZXRSb3coaSwgZGF5KVxcXCJcXG4gICAgICAgICAgW2NvbF09XFxcImRheS5kYXlJbldlZWtcXFwiXFxuICAgICAgICAgICh0YXApPVxcXCJvbkNoYW5nZVN0YXR1cyhkYXkpXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgIDxMYWJlbFxcbiAgICAgICAgICAgIFt0ZXh0XT1cXFwiZGF5LmRheUluTW9udGhcXFwiXFxuICAgICAgICAgID48L0xhYmVsPlxcbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvRmxleGJveExheW91dD5cXG48L1Njcm9sbFZpZXc+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvdWkuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2UgfSBmcm9tICcuLi9jaGFsbGVuZ2VzLm1vZGVsJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuLi9kYXkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jdXJyZW50LWNoYWxsZW5nZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL19jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MnLFxuICAgIC8vICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5jc3MnXG4gIF0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgd2Vla0RheXMgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcbiAgY3VycmVudENoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICBwcml2YXRlIGN1ckNoYWxsZW5nZVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxEaWFsb2c6IE1vZGFsRGlhbG9nU2VydmljZSwgXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgXG4gICAgcHJpdmF0ZSB1aVNlcnZpY2U6IFVJU2VydmljZSxcbiAgICBwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1ckNoYWxsZW5nZVN1YiA9IHRoaXMuY2hhbGxlbmdlU2VydmljZS5jdXJyZW50Q2hhbGxlbmdlLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50Q2hhbGxlbmdlID0gY2hhbGxlbmdlO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SXNTZXR0YWJsZShkYXlJbk1vbnRoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gZGF5SW5Nb250aCA8PSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgfVxuXG4gIGdldFJvdyhpbmRleDogbnVtYmVyLCBkYXk6IHsgZGF5SW5Nb250aDogbnVtYmVyOyBkYXlJbldlZWs6IG51bWJlciB9KSB7XG4gICAgY29uc3Qgc3RhcnRSb3cgPSAxO1xuICAgIGNvbnN0IHdlZWtSb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gNyk7XG4gICAgY29uc3QgZmlyc3RXZWVrRGF5T2ZNb250aCA9IG5ldyBEYXRlKFxuICAgICAgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgMVxuICAgICkuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXJyZWd1bGFyUm93ID0gZGF5LmRheUluV2VlayA8IGZpcnN0V2Vla0RheU9mTW9udGggPyAxIDogMDtcblxuICAgIHJldHVybiBzdGFydFJvdyArIHdlZWtSb3cgKyBpcnJlZ3VsYXJSb3c7XG4gIH1cblxuXG4gIG9uQ2hhbmdlU3RhdHVzKGRheTogRGF5KSB7XG4gICAgaWYoIXRoaXMuZ2V0SXNTZXR0YWJsZShkYXkuZGF5SW5Nb250aCkpIHtcbiAgICAgIHJldHVybjsgLy9pZiBnZXQgZGF0ZSBpcyBub3Qgc2V0dGFibGUgKGZ1dHVyZSBkYXRlcykgdGhpcyBkb2Vzbid0IG9wZW4gdGhlIG1vZGFsXG4gICAgfVxuICAgIHRoaXMubW9kYWxEaWFsb2cuc2hvd01vZGFsKERheU1vZGFsQ29tcG9uZW50LCB7XG4gICAgICBmdWxsc2NyZWVuOiB0cnVlLCBcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IFxuICAgICAgICB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKSBcbiAgICAgICAgPyB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKSAgLy9jaGVjayBpZiBnZXRSb290VkNSZWYgZXhpc3QsXG4gICAgICAgIDogdGhpcy52Y1JlZiwgLy91c2UgaXQgaWYgaXQgZG9lcywgaWYgbm90IGp1c3QgdXNlIHZjUmVmIHByb3BlcnR5XG4gICAgICAgIGNvbnRleHQ6IHsgZGF0ZTogZGF5LmRhdGUsIHN0YXR1czogZGF5LnN0YXR1cyB9XG4gICAgfSkudGhlbigoc3RhdHVzOiBEYXlTdGF0dXMpID0+IHtcbiAgICAgIGlmKHN0YXR1cyA9PT0gRGF5U3RhdHVzLk9wZW4pIHsgLy90aGlzIGlmIGFsbG93cyB1c2VyIHRvIGNsb3NlIHRoZSBtb2RhbCB3aXRob3V0IHJlc2V0dGluZyB0aGUgY29tcGxldGlvbiB2YWx1ZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UudXBkYXRlRGF5U3RhdHVzKGRheS5kYXlJbk1vbnRoLCBzdGF0dXMpO1xuICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmKHRoaXMuY3VyQ2hhbGxlbmdlU3ViKSB7XG4gICAgICB0aGlzLmN1ckNoYWxsZW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxucy1hY3Rpb24tYmFyXFxuICB0aXRsZT1cXFwiVG9kYXkncyBDaGFsbGVuZ2VcXFwiXFxuICBbc2hvd0JhY2tCdXR0b25dPVxcXCJmYWxzZVxcXCJcXG4+PC9ucy1hY3Rpb24tYmFyPlxcblxcbjxGbGV4Ym94TGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIiAqbmdJZj1cXFwiIWN1cnJlbnREYXlcXFwiPlxcbiAgPExhYmVsIHRleHQ9XFxcIk5vIGNoYWxsZW5nZSBmb3VuZCFcXFwiPjwvTGFiZWw+XFxuICA8QnV0dG9uIFxcbiAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBcXG4gICAgdGV4dD1cXFwiQ3JlYXRlIE9uZSFcXFwiIFxcbiAgICBuc1JvdXRlckxpbms9XFxcIi9jaGFsbGVuZ2VzL3JlcGxhY2VcXFwiXFxuICAgIHBhZ2VUcmFuc2l0aW9uPVxcXCJzbGlkZUxlZnRcXFwiPjwvQnV0dG9uPlxcbjwvRmxleGJveExheW91dD5cXG5cXG48RmxleGJveExheW91dCBjbGFzcz1cXFwicGFnZVxcXCIgKm5nSWY9XFxcImN1cnJlbnREYXlcXFwiPiBcXG4gIDxMYWJlbCBjbGFzcz1cXFwiaDFcXFwiIFt0ZXh0XT1cXFwiY3VycmVudERheS5kYXRlIHwgZGF0ZVxcXCI+PC9MYWJlbD5cXG4gIDxucy1jaGFsbGVuZ2UtYWN0aW9ucyBcXG4gICAgKGFjdGlvblNlbGVjdCk9XFxcIm9uQWN0aW9uU2VsZWN0ZWQoJGV2ZW50KVxcXCIgXFxuICAgIFtjaG9zZW5dPVxcXCJnZXRBY3Rpb25OYW1lKClcXFwiXFxuICAgIGNhbmNlbFRleHQ9XFxcIlJlc2V0XFxcIlxcbiAgPjwvbnMtY2hhbGxlbmdlLWFjdGlvbnM+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5wYWdlIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFsbGVuZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuLi9kYXkubW9kZWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXRvZGF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9kYXkuY29tcG9uZW50LnNjc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgVG9kYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGN1cnJlbnREYXk6IERheTtcbiAgcHJpdmF0ZSBjdXJDaGFsbGVuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYWxsZW5nZVNlcnZpY2U6IENoYWxsZW5nZXNTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1ckNoYWxsZW5nZVN1YiA9IHRoaXMuY2hhbGxlbmdlU2VydmljZS5jdXJyZW50Q2hhbGxlbmdlLnN1YnNjcmliZShjaGFsbGVuZ2UgPT4ge1xuICAgICAgaWYoY2hhbGxlbmdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERheSA9IGNoYWxsZW5nZS5jdXJyZW50RGF5O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25BY3Rpb25TZWxlY3RlZChhY3Rpb246IERheVN0YXR1cykge1xuICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS51cGRhdGVEYXlTdGF0dXModGhpcy5jdXJyZW50RGF5LmRheUluTW9udGgsIGFjdGlvbik7XG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgfVxuXG4gIGdldEFjdGlvbk5hbWUoKSB7XG4gICAgaWYodGhpcy5jdXJyZW50RGF5LnN0YXR1cyA9PT0gRGF5U3RhdHVzLkNvbXBsZXRlZCkge1xuICAgICAgcmV0dXJuICdjb21wbGV0ZSc7XG4gICAgfVxuICAgIGlmKHRoaXMuY3VycmVudERheS5zdGF0dXMgPT09IERheVN0YXR1cy5GYWlsZWQpIHtcbiAgICAgIHJldHVybiAnZmFpbCc7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYodGhpcy5jdXJDaGFsbGVuZ2VTdWIpIHtcbiAgICAgIHRoaXMuY3VyQ2hhbGxlbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9