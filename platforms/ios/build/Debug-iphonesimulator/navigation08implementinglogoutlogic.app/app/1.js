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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd1NBQXdTLCtDQUErQyxrY0FBa2MsNkNBQTZDLGdpQjs7Ozs7OztBQ0F0MEIsbUI7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBQ3lCO0FBRWhCO0FBQ3BCO0FBUXRDO0lBS0UsZ0NBQ1UsY0FBOEIsRUFDOUIsU0FBb0IsRUFDcEIsTUFBd0IsRUFDeEIsZ0JBQW1DO1FBSG5DLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFSN0MsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFPZCxDQUFDO0lBRUoseUNBQVEsR0FBUjtRQUFBLGlCQW9CQztRQW5CQyx1REFBdUQ7UUFDdkQsdUNBQXVDO1FBQ3ZDLDRF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QUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsRVEsaUJBQWlCO1FBRDdCLGdFQUFVLENBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyx1Q0FBdUM7O3lDQUk5QywrREFBVTtPQUgzQixpQkFBaUIsQ0FtRTdCO0lBQUQsd0JBQUM7Q0FBQTtBQW5FNkIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8bnMtYWN0aW9uLWJhciBcXG4gIFt0aXRsZV09XFxcImlzQ3JlYXRpbmcgPyAnUmVwbGFjZSBDaGFsbGVuZ2UnIDogJ0VkaXQgQ2hhbGxlbmdlJ1xcXCJcXG4gIFtoYXNNZW51XT1cXFwiZmFsc2VcXFwiPjwvbnMtYWN0aW9uLWJhcj5cXG48RmxleGJveExheW91dCBcXG4gIGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICA8TGFiZWwgXFxuICAgICAgY2xhc3M9XFxcImxhYmVsXFxcIiBcXG4gICAgICB0ZXh0PVxcXCJUaXRsZVxcXCIgXFxuICAgICAgW25nQ2xhc3NdPVxcXCJ7aW52YWxpZDogIXRpdGxlQ3RybC52YWxpZCAmJiB0aXRsZUN0cmwudG91Y2hlZH1cXFwiXFxuICAgID48L0xhYmVsPlxcbiAgICA8VGV4dEZpZWxkIFxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwibmV4dFxcXCIgXFxuICAgICAgcmVxdWlyZWRcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwidGl0bGVcXFwiXFxuICAgICAgI3RpdGxlQ3RybD1cXFwibmdNb2RlbFxcXCJcXG4gICAgPjwvVGV4dEZpZWxkPlxcbiAgICA8TGFiZWwgXFxuICAgICAgKm5nSWY9XFxcIiF0aXRsZUN0cmwudmFsaWQgJiYgdGl0bGVDdHJsLnRvdWNoZWRcXFwiIFxcbiAgICAgIHRleHQ9XFxcIlBsZWFzZSBlbnRlciBhIHZhaWxkIHRpdGxlXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIj5cXG4gICAgPExhYmVsIFxcbiAgICAgY2xhc3M9XFxcImxhYmVsXFxcIiBcXG4gICAgIHRleHQ9XFxcIkRlc2NyaXB0aW9uXFxcIlxcbiAgICAgW25nQ2xhc3NdPVxcXCJ7aW52YWxpZDogIWRlc2NDdHJsLnZhbGlkICYmIGRlc2NDdHJsLnRvdWNoZWR9XFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gICAgPFRleHRWaWV3IFxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgXFxuICAgICAgcmVxdWlyZWRcXG4gICAgICBbKG5nTW9kZWwpXT1cXFwiZGVzY3JpcHRpb25cXFwiXFxuICAgICAgI2Rlc2NDdHJsPVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgID48L1RleHRWaWV3PlxcbiAgICA8TGFiZWwgXFxuICAgICAgKm5nSWY9XFxcIiFkZXNjQ3RybC52YWxpZCAmJiBkZXNjQ3RybC50b3VjaGVkXFxcIlxcbiAgICAgIHRleHQ9XFxcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGRlc2NyaXB0aW9uXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8QnV0dG9uIFxcbiAgICBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBcXG4gICAgdGV4dD1cXFwiU2F2ZVxcXCIgXFxuICAgIFtpc0VuYWJsZWRdPVxcXCJ0aXRsZUN0cmwudmFsaWQgJiYgZGVzY0N0cmwudmFsaWRcXFwiIFxcbiAgICAodGFwKT1cXFwib25TdWJtaXQodGl0bGVDdHJsLnZhbHVlLCBkZXNjQ3RybC52YWx1ZSlcXFwiPjwvQnV0dG9uPlxcbjwvRmxleGJveExheW91dD5cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2VzU2VydmljZSB9IGZyb20gJy4uL2NoYWxsZW5nZXMuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5zY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlzQ3JlYXRpbmcgPSB0cnVlO1xuICB0aXRsZSA9ICcnO1xuICBkZXNjcmlwdGlvbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBjaGFsbGVuZ2VTZXJ2aWNlOiBDaGFsbGVuZ2VzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUocGFyYW1NYXAgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cocGFyYW1NYXAuZ2V0KCdtb2RlJykpO1xuICAgIC8vIH0pOyAvL3RoaXMgd2lsbCB3b3JrIHdpdGggY2FjaGUgbWVhbnMgd2lsbCBub3QgcmVsb2FkIG9uY2UgaXQgaXMgbG9hZGVkLiBcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5zdWJzY3JpYmUoYWN0aXZhdGVkUm91dGUgPT4ge1xuICAgICAgYWN0aXZhdGVkUm91dGUucGFyYW1NYXAuc3Vic2NyaWJlKHBhcmFtTWFwID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU1hcC5oYXMoJ21vZGUnKSkge1xuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWU7IC8vaXMgY3JlYXRpbmcgbmV3XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gcGFyYW1NYXAuZ2V0KCdtb2RlJykgIT09ICdlZGl0JzsgLy9pc0NyZWF0aW5nIGlzIGZhbHNlIG1lYW5zIGl0IGlzIGVkaXRpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmlzQ3JlYXRpbmcpIHsgLy91bml0IDE2NlxuICAgICAgICAgIHRoaXMuY2hhbGxlbmdlU2VydmljZS5jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gY2hhbGxlbmdlLnRpdGxlO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGNoYWxsZW5nZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHsgLy91bml0IDE2NlxuICAgIGlmKHRoaXMuaXNDcmVhdGluZykge1xuICAgICAgdGhpcy5jaGFsbGVuZ2VTZXJ2aWNlLmNyZWF0ZU5ld0NoYWxsZW5nZSh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYWxsZW5nZVNlcnZpY2UudXBkYXRlQ2hhbGxlbmdlKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2hhbGxlbmdlRWRpdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIC8vZm9yIG5nTW9kZWwgdXNlXG4gICAgLy8gTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfVxuICAgIF0pLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgRGF5LCBEYXlTdGF0dXMgfSBmcm9tICcuL2RheS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdGl0bGU6IHN0cmluZywgXG4gICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLCBcbiAgICAgICAgcHVibGljIHllYXI6IG51bWJlciwgXG4gICAgICAgIHB1YmxpYyBtb250aDogbnVtYmVyLCBcbiAgICAgICAgcHJpdmF0ZSBfZGF5czogRGF5W10gPSBbXVxuICAgICkge1xuICAgICAgICBpZihfZGF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApLmdldERhdGUoKTsgLy8wIGdpdmVzIHRoZSBsYXN0IGRheSBvZiB0aGUgcHJldmlvdXMgbW9udGggXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXlzSW5Nb250aCArIDE7IGkrKykgeyAvL21heCBkYXlzSW5Nb250aCB3aWxsIGJlIDMxIGZyb20gY29uc3QgZGF5c0luTW9udGhcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBpKTtcbiAgICAgICAgY29uc3QgZGF5SW5XZWVrID0gZGF0ZS5nZXREYXkoKTsgLy9naXZlcyBzdW49MCBtb249MSB0dWU9Mi4uLlxuICAgICAgICB0aGlzLl9kYXlzLnB1c2goeyBkYXlJbk1vbnRoOiBpLCBkYXlJbldlZWs6IGRheUluV2VlaywgZGF0ZTogZGF0ZSwgc3RhdHVzOiBEYXlTdGF0dXMuT3Blbn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnREYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXlzLmZpbmQoZCA9PiBkLmRheUluTW9udGggPT09IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgZGF5cygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9kYXlzXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDaGFsbGVuZ2UgfSBmcm9tICcuL2NoYWxsZW5nZXMubW9kZWwnO1xuaW1wb3J0IHsgRGF5U3RhdHVzLCBEYXkgfSBmcm9tICcuL2RheS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlICh7IHByb3ZpZGVkSW46ICdyb290JyB9KSAvL21ha2UgaXQgYXZhaWxhYmxlIHRocm91Z2h0b3V0IHRoZSBhcHBcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfY3VycmVudENoYWxsZW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2hhbGxlbmdlPihudWxsKTsgLy91bml0IDE1MVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG5cbiAgICB9XG5cbiAgICBnZXQgY3VycmVudENoYWxsZW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UuYXNPYnNlcnZhYmxlKCk7IC8vdW5pdCAxNTNcbiAgICB9XG5cbiAgICBmZXRjaEN1cnJlbnRDaGFsbGVuZ2UoKSB7IC8vdW5pdCAxNzNcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8e1xuICAgICAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICBtb250aDogbnVtYmVyO1xuICAgICAgICAgICAgeWVhcjogbnVtYmVyO1xuICAgICAgICAgICAgX2RheXM6IERheVtdO1xuICAgICAgICB9PignaHR0cHM6Ly9ucy1uZy1jb3Vyc2UtMzk5YWQuZmlyZWJhc2Vpby5jb20vY2hhbGxlbmdlLmpzb24vJylcbiAgICAgICAgLnBpcGUodGFwKHJlc0RhdGEgPT4ge1xuICAgICAgICAgICAgaWYocmVzRGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlZENoYWxsZW5nZSA9IG5ldyBDaGFsbGVuZ2UoXG4gICAgICAgICAgICAgICAgICAgIHJlc0RhdGEudGl0bGUsIFxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS55ZWFyLCBcbiAgICAgICAgICAgICAgICAgICAgcmVzRGF0YS5tb250aCwgXG4gICAgICAgICAgICAgICAgICAgIHJlc0RhdGEuX2RheXNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KGxvYWRlZENoYWxsZW5nZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0NoYWxsZW5nZSh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5ld0NoYWxsZW5nZSA9IG5ldyBDaGFsbGVuZ2UodGl0bGUsIGRlc2NyaXB0aW9uLCBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSk7XG5cbiAgICAgICAgLy9zYXZlIGl0IHRvIHNlcnZlciB1bml0IDE3MlxuICAgICAgICB0aGlzLmh0dHAucHV0KCdodHRwczovL25zLW5nLWNvdXJzZS0zOTlhZC5maXJlYmFzZWlvLmNvbS9jaGFsbGVuZ2UuanNvbicsIG5ld0NoYWxsZW5nZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KG5ld0NoYWxsZW5nZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2hhbGxlbmdlKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHsgLy91bml0IDE2NlxuICAgICAgICB0aGlzLl9jdXJyZW50Q2hhbGxlbmdlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNoYWxsZW5nZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2hhbGxlbmdlID0gbmV3IENoYWxsZW5nZSh0aXRsZSwgZGVzY3JpcHRpb24sIGNoYWxsZW5nZS55ZWFyLCBjaGFsbGVuZ2UubW9udGgsIGNoYWxsZW5nZS5kYXlzKTtcbiAgICAgICAgICAgIC8vc2VuZCB0byBhIHNlcnZlclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KHVwZGF0ZWRDaGFsbGVuZ2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZURheVN0YXR1cyhkYXlJbk1vbnRoOiBudW1iZXIsIHN0YXR1czogRGF5U3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDaGFsbGVuZ2UucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoY2hhbGxlbmdlID0+IHtcbiAgICAgICAgICAgIGlmKCFjaGFsbGVuZ2UgfHwgY2hhbGxlbmdlLmRheXMubGVuZ3RoIDwgZGF5SW5Nb250aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy91bml0IDE1NzogY2hlY2sgdGhlIGNoYWxsZW5nZSBoYXMgbGVzcyBkYXlzIGVsZW1lbnQgdGhhbiBkYXlJbk1vbnRoIChpdCBzaG91bGRuJ3QgaGF2ZSAzMCBkYXlzIGluIEZlYikuXG4gICAgICAgICAgICAgICAgLy9pZiBjaGFsbGVuZ2UgaXMgZW1wdHkgT1IgaW52YWxpZCBudW1iZXIgb2YgZGF5cyB0aGUgZnVuY3Rpb24gd2lsbCBzdG9wLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF5SW5kZXggPSBjaGFsbGVuZ2UuZGF5cy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgZCA9PiBkLmRheUluTW9udGggPT09IGRheUluTW9udGhcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjaGFsbGVuZ2UuZGF5c1tkYXlJbmRleF0uc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudENoYWxsZW5nZS5uZXh0KGNoYWxsZW5nZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsbGVuZ2UuZGF5c1tkYXlJbmRleF0pO1xuICAgICAgICAgICAgLy9zYXZlIHRoaXMgdG8gYSBzZXJ2ZXJcbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=