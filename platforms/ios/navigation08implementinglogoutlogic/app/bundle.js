require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"~/app/auth/auth.module": [
		"./app/auth/auth.module.ts",
		2
	],
	"~/app/challenges/challenge-edit/challenge-edit.module": [
		"./app/challenges/challenge-edit/challenge-edit.module.ts",
		1
	],
	"~/app/challenges/challenges.module": [
		"./app/challenges/challenges.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #30bcff; }\n\n.text-danger {\n  color: #d50000; }\n\n.text-muted {\n  color: #ccc; }\n\n.bg-primary {\n  background-color: #30bcff;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #d50000;\n  color: #fff; }\n\n.action-bar {\n  background-color: #F8F8F8;\n  color: #212121; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #30bcff;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #7c015d;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #c0ebff; }\n\n.btn-primary {\n  background-color: #7c015d;\n  border-color: #7c015d;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #01a0ec;\n    border-color: #01a0ec; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #7c015d;\n  color: #7c015d; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #c0ebff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #30bcff; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #212121; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #2b0c72; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #7c015d;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #2b0c72;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #30bcff;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #7c015d;\n  selected-background-color: #30bcff; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #fafafa; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #fff;\n    background-color: #30bcff; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #fff; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #30bcff; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #30bcff;\n  color: #30bcff; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #7c015d;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #7c015d;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #7c015d;\n  margin-top: 10; }\n\nActionBar {\n  background: #7c015d;\n  color: white; }\n\n.form {\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center; }\n  .form .input-field {\n    width: 80%; }\n    .form .input-field .label {\n      color: #7c015d;\n      font-weight: bold;\n      font-family: 'Oswald', 'Oswald-Regular', 'Oswald-bold'; }\n    .form .input-field Label.invalid {\n      color: red; }\n    .form .input-field .input {\n      border-bottom-width: 2;\n      border-bottom-color: #7c015d;\n      width: 100%;\n      color: black; }\n    .form .input-field .input.ng-invalid.ng-touched {\n      border-bottom-color: red;\n      color: red; }\n\n.h1 {\n  font-weight: bold;\n  color: #7c015d;\n  font-family: 'Oswald', 'Oswald-Regular', 'Oswald-bold'; }\n\n.fa {\n  font-family: 'FontAwesome', 'Font-Awesome'; }\n\n.drawer-container {\n  background: linear-gradient(140deg, #2b0c72, #5c3fa0);\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20; }\n\n.btn {\n  width: 80%;\n  font-size: 24;\n  height: 45; }\n\n.btn-flat {\n  background: transparent;\n  border-color: transparent;\n  border-width: 1;\n  color: #7c015d; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.btn {\n  border-width: 0;\n  font-family: 'SF UI Text Medium';\n  font-size: 15; }\n\n.btn-outline {\n  border-width: 1; }\n\n.btn-rounded-sm {\n  border-radius: 4; }\n\n.btn-rounded-lg {\n  border-radius: 19; }\n\n.form {\n  font-family: 'SF UI Text Regular'; }\n  .form .input {\n    font-size: 15; }\n    .form .input.input-rounded {\n      border-radius: 27; }\n\n/* This is here temporarily because _index.ios.scss cannot be empty */\n.h1 {\n  font-size: 32; }\n\n.slider {\n  margin: 10 15; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #949494; }\n\n.switch {\n  margin: 8 15; }\n\n.list-group .list-group-item {\n  padding: 16 15 16 15; }\n  .list-group .list-group-item .thumb {\n    margin-right: 15; }\n  .list-group .list-group-item .list-group-item-heading {\n    margin-bottom: 5; }\n\n.segmented-bar {\n  margin: 0 15;\n  color: #30bcff; }\n\n.btn {\n  background: #7c015d;\n  color: white; }\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.guard.ts");



var routes = [
    { path: 'auth', loadChildren: '~/app/auth/auth.module#AuthModule' },
    {
        path: 'challenges',
        loadChildren: '~/app/challenges/challenges.module#ChallengesModule',
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] //needed to add AuthGuard bc if a user is not autologged in, it will go to /challenges instead of /auth.
    },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' } //unit 192
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<RadSideDrawer>\n  <FlexboxLayout tkDrawerContent class=\"drawer-container\">\n    <Button\n      text=\"Logout\"\n      class=\"btn btn-primary btn-rounded-lg\"\n\n      (tap)=\"onLogout()\"\n    ></Button>\n  </FlexboxLayout>\n  <StackLayout tkMainContent>\n    <page-router-outlet></page-router-outlet>\n  </StackLayout>\n</RadSideDrawer>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/shared/ui.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/auth/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(uiService, changeDetectionRef, vcRef, authService) {
        this.uiService = uiService;
        this.changeDetectionRef = changeDetectionRef;
        this.vcRef = vcRef;
        this.authService = authService;
        this.activeChallenge = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawerSub = this.uiService.drawerState.subscribe(function () {
            if (_this.drawer) {
                _this.drawer.toggleDrawerState();
            }
        });
        this.uiService.setRootVCRef(this.vcRef);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.onChallengeInput = function (challengeDescription) {
        this.activeChallenge = challengeDescription;
        console.log('onChallengeInput: ', challengeDescription);
    };
    AppComponent.prototype.onLogout = function () {
        this.uiService.toggleDrawer();
        this.authService.logout();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_1__["RadSideDrawerComponent"], { static: true }),
        __metadata("design:type", nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_1__["RadSideDrawerComponent"])
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-app',
            template: __webpack_require__("./app/app.component.html")
        }),
        __metadata("design:paramtypes", [_shared_ui_service__WEBPACK_IMPORTED_MODULE_2__["UIService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _challenges_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/challenges/day-modal/day-modal.component.ts");
/* harmony import */ var _challenges_challenge_actions_challenge_actions_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/challenges/challenge-actions/challenge-actions.module.ts");








// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__["NativeScriptHttpClientModule"],
                nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _challenges_challenge_actions_challenge_actions_module__WEBPACK_IMPORTED_MODULE_7__["ChallengeActionsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _challenges_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_6__["DayModalComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            entryComponents: [_challenges_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_6__["DayModalComponent"]]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/auth/auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canLoad = function (route, segments) {
        var _this = this;
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (currentUser) {
            if (!currentUser || !currentUser.token) {
                return _this.authService.autoLogin();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isAuth) {
            if (!isAuth) {
                _this.router.navigate(['/auth']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/auth/user.model.ts");







var FIREBASE_API_KEY = 'AIzaSyA1Wpt2UVtoLPniMVRPJvR4JLevSI5FHao';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this._user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null); //unit 185
    }
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this._user.asObservable(); //asObsaverable so we can only listen to it only outside. 
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signUp = function (email, password) {
        var _this = this;
        return this.http
            .post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + FIREBASE_API_KEY, { email: email, password: password, returnSecureToken: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (errorRes) {
            _this.handleError(errorRes.error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorRes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            if (resData && resData.idToken) {
                _this.handleLogin(email, resData.idToken, //token
                resData.localId, //userid
                parseInt(resData.expiresIn) //parse to int from string
                );
            }
        }));
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http
            .post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + FIREBASE_API_KEY, { email: email, password: password, returnSecureToken: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (errorRes) {
            _this.handleError(errorRes.error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorRes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resData) {
            if (resData && resData.idToken) {
                _this.handleLogin(email, resData.idToken, //token
                resData.localId, //userid
                parseInt(resData.expiresIn) //parse to int from string
                );
            }
        }));
    };
    //Now login & signup handle goes to Challenge Service to view the section protected by a token.
    AuthService.prototype.logout = function () {
        this._user.next(null);
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["remove"])('userData');
        if (this.tokenExpirationTimer) { //unit 191
            clearTimeout(this.tokenExpirationTimer);
        }
        this.router.navigate(['/auth'], { clearHistory: true });
    };
    AuthService.prototype.autoLogin = function () {
        if (!Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["hasKey"])('userData')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
        var userData = JSON.parse(Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["getString"])('userData')); //deconstruct 'userData'
        var loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.isAuth) {
            this._user.next(loadedUser);
            this.autoLogout(loadedUser.timeToExpiry);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
    };
    AuthService.prototype.autoLogout = function (expiryDuration) {
        var _this = this;
        this.tokenExpirationTimer = setTimeout(function () { return _this.logout(); }, expiryDuration);
    };
    AuthService.prototype.handleLogin = function (email, token, userId, expiresIn) {
        var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](email, userId, token, expirationDate);
        Object(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_5__["setString"])('userData', JSON.stringify(user)); //unit 190
        this.autoLogout(user.timeToExpiry);
        this._user.next(user);
    };
    AuthService.prototype.handleError = function (errorMessage) {
        switch (errorMessage) {
            case 'EMAIL_EXISTS':
                alert('This email exists already!');
                break;
            case 'EMAIL_NOT_FOUND':
                alert('Email is not found!');
                break;
            case 'INVALID_PASSWORD':
                alert('Password is invalid!');
                break;
            default:
                alert('Authentication failed, check your credentials.');
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./app/auth/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    Object.defineProperty(User.prototype, "isAuth", {
        get: function () {
            return !!this.token; // double ! makes it to boolean val, keeps it's original value
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "token", {
        get: function () {
            if (!this._token) {
                return null;
            }
            if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
                return null;
            }
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "timeToExpiry", {
        get: function () {
            return this._tokenExpirationDate.getTime() - new Date().getTime();
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./app/challenges/challenge-actions/challenge-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout> \n  <Button \n    height=\"60\" \n    class=\"btn btn-success btn-rounded-lg\" \n    text=\"Completed\" \n    (tap)=\"onAction('complete')\" \n    *ngIf=\"action !== 'complete'\" \n    [isEnabled]=\"!done\"\n  ></Button> <!-- ngIf makes the button disappear IF it receive 'complete' vlaue to display a label(check icon) below-->\n  <StackLayout height=\"60\" class=\"btn btn-success btn-rounded-lg\" *ngIf=\"action === 'complete'\">\n    <Label text=\"&#xf00c;\" horizontalAlignment=\"center\" class=\"fa btn-alt animate-btn\">\n    </Label>\n  </StackLayout>\n  <Button \n    height=\"60\"  \n    class=\"btn btn-fail btn-rounded-lg\" \n    text=\"Faild\" \n    (tap)=\"onAction('fail')\"\n    *ngIf=\"action !== 'fail'\"\n    [isEnabled]=\"!done\"\n  ></Button>\n  <StackLayout height=\"60\" class=\"btn btn-fail btn-rounded-lg\" *ngIf=\"action === 'fail'\">\n    <Label text=\"&#xf00d;\" horizontalAlignment=\"center\" class=\"fa btn-alt animate-btn\">\n    </Label>\n  </StackLayout>\n  <Button height=\"60\" class=\"btn btn-flat btn-rounded-lg\" [text]=\"cancelText\" (tap)=\"onAction('cancel')\"></Button>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/challenges/challenge-actions/challenge-actions.component.scss":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\nFlexboxLayout {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.btn {\n  width: 300; }\n\n.btn-success {\n  background: green;\n  border-color: green;\n  border-width: 1;\n  color: white; }\n\n.btn-fail {\n  background: red;\n  border-color: red;\n  border-width: 1;\n  color: white; }\n\n.btn-success:disabled,\n.btn-fail:disabled {\n  background: #ccc;\n  color: #777777;\n  border-color: #ccc; }\n\n.btn-alt {\n  font-size: 30;\n  margin-top: 10; }\n\n.animate-btn {\n  animation-name: slide-up;\n  animation-iteration-count: 1;\n  animation-duration: 0.8s;\n  animation-fill-mode: forwards; }\n\n@keyframes slide-up {\n  from {\n    transform: translateY(30); }\n  to {\n    transform: translateX(0); } }\n\n.btn-alt {\n  margin-top: 8; }\n"

/***/ }),

/***/ "./app/challenges/challenge-actions/challenge-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeActionsComponent", function() { return ChallengeActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _day_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/challenges/day.model.ts");


var ChallengeActionsComponent = /** @class */ (function () {
    function ChallengeActionsComponent() {
        this.actionSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelText = 'Cancel';
        this.chosen = null;
        this.startDone = false;
        this.action = null;
        this.done = false;
    }
    ChallengeActionsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.chosen) {
            this.action = changes.chosen.currentValue;
            if (changes.chosen.currentValue === null) {
                this.done = false;
            }
        }
        if (changes.startDone) { //unit 176 disable one status button when first logged in to 'today' page.
            if (changes.startDone.currentValue) {
                this.done = true;
            }
        }
    };
    ChallengeActionsComponent.prototype.ngOnInit = function () {
    };
    ChallengeActionsComponent.prototype.onAction = function (action) {
        this.done = true;
        var status = _day_model__WEBPACK_IMPORTED_MODULE_1__["DayStatus"].Open;
        if (action === 'complete') {
            status = _day_model__WEBPACK_IMPORTED_MODULE_1__["DayStatus"].Completed;
            this.action = 'complete';
        }
        else if (action === 'fail') {
            status = _day_model__WEBPACK_IMPORTED_MODULE_1__["DayStatus"].Failed;
            this.action = 'fail';
        }
        else if (action === 'cancel') {
            action = null;
            this.done = false;
        }
        this.actionSelect.emit(status);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "actionSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "cancelText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChallengeActionsComponent.prototype, "chosen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "startDone", void 0);
    ChallengeActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-challenge-actions',
            template: __webpack_require__("./app/challenges/challenge-actions/challenge-actions.component.html"),
            styles: [__webpack_require__("./app/challenges/challenge-actions/challenge-actions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChallengeActionsComponent);
    return ChallengeActionsComponent;
}());



/***/ }),

/***/ "./app/challenges/challenge-actions/challenge-actions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeActionsModule", function() { return ChallengeActionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenge_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/challenge-actions/challenge-actions.component.ts");



var ChallengeActionsModule = /** @class */ (function () {
    function ChallengeActionsModule() {
    }
    ChallengeActionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"]],
            declarations: [_challenge_actions_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeActionsComponent"]],
            exports: [_challenge_actions_component__WEBPACK_IMPORTED_MODULE_2__["ChallengeActionsComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], ChallengeActionsModule);
    return ChallengeActionsModule;
}());



/***/ }),

/***/ "./app/challenges/day-modal/day-modal.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\nFlexboxLayout {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 20;\n    background: white;\n}"

/***/ }),

/***/ "./app/challenges/day-modal/day-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout>\n\t<Label class=\"h1\" [text]=\"loadedDate | date\"></Label>\n\t<ns-challenge-actions \n\t\t(actionSelect)=\"onHandleInput($event)\"\n\t\t[chosen]=\"loadedStatus\"\n\t\n\t></ns-challenge-actions>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/challenges/day-modal/day-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayModalComponent", function() { return DayModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/modal-dialog.js");
/* harmony import */ var nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _day_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/challenges/day.model.ts");



var DayModalComponent = /** @class */ (function () {
    function DayModalComponent(modalParams) {
        this.modalParams = modalParams;
        this.loadedStatus = null;
    }
    DayModalComponent.prototype.ngOnInit = function () {
        var parsedParams = this.modalParams.context;
        this.loadedDate = parsedParams.date;
        if (parsedParams.status === _day_model__WEBPACK_IMPORTED_MODULE_2__["DayStatus"].Completed) {
            this.loadedStatus = 'complete';
        }
        else if (parsedParams.status === _day_model__WEBPACK_IMPORTED_MODULE_2__["DayStatus"].Failed) {
            this.loadedStatus = 'fail';
        }
        else {
            this.loadedStatus = null;
        }
    };
    DayModalComponent.prototype.onHandleInput = function (action) {
        this.modalParams.closeCallback(action);
    };
    DayModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-day-modal',
            template: __webpack_require__("./app/challenges/day-modal/day-modal.component.html"),
            styles: [__webpack_require__("./app/challenges/day-modal/day-modal.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_modal_dialog__WEBPACK_IMPORTED_MODULE_1__["ModalDialogParams"]])
    ], DayModalComponent);
    return DayModalComponent;
}());



/***/ }),

/***/ "./app/challenges/day.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayStatus", function() { return DayStatus; });
var DayStatus;
(function (DayStatus) {
    DayStatus[DayStatus["Open"] = 0] = "Open";
    DayStatus[DayStatus["Completed"] = 1] = "Completed";
    DayStatus[DayStatus["Failed"] = 2] = "Failed";
})(DayStatus || (DayStatus = {}));


/***/ }),

/***/ "./app/shared/ui.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIService", function() { return UIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");


var UIService = /** @class */ (function () {
    function UIService() {
        this._drawerState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    Object.defineProperty(UIService.prototype, "drawerState", {
        get: function () {
            return this._drawerState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UIService.prototype.toggleDrawer = function () {
        this._drawerState.next(null);
    };
    UIService.prototype.setRootVCRef = function (vcRef) {
        this._rootVCRef = vcRef;
    };
    UIService.prototype.getRootVCRef = function () {
        return this._rootVCRef;
    };
    UIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], UIService);
    return UIService;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXV0aC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWFjdGlvbnMvY2hhbGxlbmdlLWFjdGlvbnMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2RheS1tb2RhbC9kYXktbW9kYWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2RheS1tb2RhbC9kYXktbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2RheS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7O0FDaENBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxrUEFBa1AsY0FBYyxXQUFXLHlCQUF5QixtQkFBbUIsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGNBQWMsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGlCQUFpQixtQkFBbUIsRUFBRSxvQkFBb0IsOEJBQThCLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxpQkFBaUIsOEJBQThCLEVBQUUsZUFBZSxtQkFBbUIsRUFBRSxrQkFBa0IsOEJBQThCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsbUJBQW1CLG1CQUFtQixFQUFFLHNCQUFzQiw4QkFBOEIsRUFBRSxrQkFBa0IsbUJBQW1CLEVBQUUscUJBQXFCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGNBQWMsbUJBQW1CLEVBQUUsaUJBQWlCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLFlBQVksbUJBQW1CLEVBQUUsZUFBZSw4QkFBOEIsRUFBRSxpQ0FBaUMsZ0JBQWdCLEVBQUUsWUFBWSxlQUFlLEVBQUUsYUFBYSxpQkFBaUIsRUFBRSxZQUFZLGdCQUFnQixFQUFFLHNGQUFzRixTQUFTLE9BQU8sYUFBYSxPQUFPLGVBQWUsT0FBTyxnQkFBZ0IsT0FBTyxjQUFjLE9BQU8sZUFBZSxjQUFjLE9BQU8sYUFBYSxnQkFBZ0IsMEdBQTBHLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixx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QVM7UUFEckIsZ0VBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixTQUFTLENBbUJyQjtJQUFELGdCQUFDO0NBQUE7QUFuQnFCOzs7Ozs7Ozs7Ozs7OztBQ0R0QixPQUFPLEVBQUUsc0JBQVMsQ0FBRSwwRUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGtDQUF3SjtBQUN4SiwyREFBNkg7QUFDN0gsbUJBQStJO0FBQy9JLGNBQW1GO0FBQzFCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwifi9hcHAvYXV0aC9hdXRoLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2FwcC9hdXRoL2F1dGgubW9kdWxlLnRzXCIsXG5cdFx0MlxuXHRdLFxuXHRcIn4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQubW9kdWxlXCI6IFtcblx0XHRcIi4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWVkaXQvY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzXCIsXG5cdFx0MVxuXHRdLFxuXHRcIn4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5tb2R1bGVcIjogW1xuXHRcdFwiLi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLm1vZHVsZS50c1wiLFxuXHRcdDBcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHZhciBpZHMgPSBtYXBbcmVxXTtcblx0aWYoIWlkcykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgaWQgPSBpZHNbMF07XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBDb2xvciBjbGFzc2VzXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAuYy1ncmV5e2NvbG9yOiNlMGUwZTB9LmMtYmctZ3JleXtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTB9XFxyXFxuKiovXFxuLmMtd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYy1iZy13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uYy1iZy1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYXF1YSB7XFxuICBjb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJnLWFxdWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcblxcbi5jLWJsdWUge1xcbiAgY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1iZy1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDVhZmU7IH1cXG5cXG4uYy1jaGFyY29hbCB7XFxuICBjb2xvcjogIzMwMzAzMDsgfVxcblxcbi5jLWJnLWNoYXJjb2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODsgfVxcblxcbi5jLWJnLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1mb3Jlc3Qge1xcbiAgY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1iZy1mb3Jlc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcblxcbi5jLWdyZXkge1xcbiAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1iZy1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uYy1ncmV5LWxpZ2h0IHtcXG4gIGNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtYmctZ3JleS1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLmMtZ3JleS1kYXJrIHtcXG4gIGNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtYmctZ3JleS1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzY4N2M7IH1cXG5cXG4uYy1wdXJwbGUge1xcbiAgY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1iZy1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcblxcbi5jLWxlbW9uIHtcXG4gIGNvbG9yOiAjZmZlYTAwOyB9XFxuXFxuLmMtYmctbGVtb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWxpbWUge1xcbiAgY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1iZy1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7IH1cXG5cXG4uYy1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1iZy1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1N2MwMDsgfVxcblxcbi5jLXJ1Ynkge1xcbiAgY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1iZy1ydWJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG5cXG4uYy1za3kge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uYy1iZy1za3kge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi8qIFdpZHRoL0hlaWdodCAqL1xcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDsgfVxcblxcbi5oLWZ1bGwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmgtMTAwIHtcXG4gIGhlaWdodDogMTAwOyB9XFxuXFxuLyoqXFxyXFxuICogTWFyZ2luIGFuZCBQYWRkaW5nXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAubS0we21hcmdpbjowfS5tLXQtMHttYXJnaW4tdG9wOjB9Lm0tci0we21hcmdpbi1yaWdodDowfS5tLWItMHttYXJnaW4tYm90dG9tOjB9Lm0tbC0we21hcmdpbi1sZWZ0OjB9Lm0teC0we21hcmdpbi1yaWdodDowO21hcmdpbi1sZWZ0OjB9Lm0teS0we21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9XFxyXFxuICogU2FtZSBmb3IgUGFkZGluZyAodXNpbmcgdGhlICdwJyBhYmJyZXZpYXRpb24pXFxyXFxuICogRnJvbSAwLCAyLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzBcXHJcXG4qKi9cXG4ubS0wIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5tLXQtMCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLm0tci0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDsgfVxcblxcbi5tLWItMCB7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tbC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teC0wIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLm0teS0wIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLm0tMiB7XFxuICBtYXJnaW46IDI7IH1cXG5cXG4ubS10LTIge1xcbiAgbWFyZ2luLXRvcDogMjsgfVxcblxcbi5tLXItMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7IH1cXG5cXG4ubS1iLTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLWwtMiB7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXgtMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDI7XFxuICBtYXJnaW4tbGVmdDogMjsgfVxcblxcbi5tLXktMiB7XFxuICBtYXJnaW4tdG9wOiAyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjsgfVxcblxcbi5tLTQge1xcbiAgbWFyZ2luOiA0OyB9XFxuXFxuLm0tdC00IHtcXG4gIG1hcmdpbi10b3A6IDQ7IH1cXG5cXG4ubS1yLTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0OyB9XFxuXFxuLm0tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS1sLTQge1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS14LTQge1xcbiAgbWFyZ2luLXJpZ2h0OiA0O1xcbiAgbWFyZ2luLWxlZnQ6IDQ7IH1cXG5cXG4ubS15LTQge1xcbiAgbWFyZ2luLXRvcDogNDtcXG4gIG1hcmdpbi1ib3R0b206IDQ7IH1cXG5cXG4ubS01IHtcXG4gIG1hcmdpbjogNTsgfVxcblxcbi5tLXQtNSB7XFxuICBtYXJnaW4tdG9wOiA1OyB9XFxuXFxuLm0tci01IHtcXG4gIG1hcmdpbi1yaWdodDogNTsgfVxcblxcbi5tLWItNSB7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tbC01IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teC01IHtcXG4gIG1hcmdpbi1yaWdodDogNTtcXG4gIG1hcmdpbi1sZWZ0OiA1OyB9XFxuXFxuLm0teS01IHtcXG4gIG1hcmdpbi10b3A6IDU7XFxuICBtYXJnaW4tYm90dG9tOiA1OyB9XFxuXFxuLm0tOCB7XFxuICBtYXJnaW46IDg7IH1cXG5cXG4ubS10LTgge1xcbiAgbWFyZ2luLXRvcDogODsgfVxcblxcbi5tLXItOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7IH1cXG5cXG4ubS1iLTgge1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLWwtOCB7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXgtOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDg7XFxuICBtYXJnaW4tbGVmdDogODsgfVxcblxcbi5tLXktOCB7XFxuICBtYXJnaW4tdG9wOiA4O1xcbiAgbWFyZ2luLWJvdHRvbTogODsgfVxcblxcbi5tLTEwIHtcXG4gIG1hcmdpbjogMTA7IH1cXG5cXG4ubS10LTEwIHtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLm0tci0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwOyB9XFxuXFxuLm0tYi0xMCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLWwtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teC0xMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbiAgbWFyZ2luLWxlZnQ6IDEwOyB9XFxuXFxuLm0teS0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwOyB9XFxuXFxuLm0tMTIge1xcbiAgbWFyZ2luOiAxMjsgfVxcblxcbi5tLXQtMTIge1xcbiAgbWFyZ2luLXRvcDogMTI7IH1cXG5cXG4ubS1yLTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7IH1cXG5cXG4ubS1iLTEyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tbC0xMiB7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS14LTEyIHtcXG4gIG1hcmdpbi1yaWdodDogMTI7XFxuICBtYXJnaW4tbGVmdDogMTI7IH1cXG5cXG4ubS15LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTI7IH1cXG5cXG4ubS0xNSB7XFxuICBtYXJnaW46IDE1OyB9XFxuXFxuLm0tdC0xNSB7XFxuICBtYXJnaW4tdG9wOiAxNTsgfVxcblxcbi5tLXItMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTsgfVxcblxcbi5tLWItMTUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS1sLTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXgtMTUge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNTtcXG4gIG1hcmdpbi1sZWZ0OiAxNTsgfVxcblxcbi5tLXktMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7XFxuICBtYXJnaW4tYm90dG9tOiAxNTsgfVxcblxcbi5tLTE2IHtcXG4gIG1hcmdpbjogMTY7IH1cXG5cXG4ubS10LTE2IHtcXG4gIG1hcmdpbi10b3A6IDE2OyB9XFxuXFxuLm0tci0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2OyB9XFxuXFxuLm0tYi0xNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLWwtMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teC0xNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDE2O1xcbiAgbWFyZ2luLWxlZnQ6IDE2OyB9XFxuXFxuLm0teS0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjtcXG4gIG1hcmdpbi1ib3R0b206IDE2OyB9XFxuXFxuLm0tMjAge1xcbiAgbWFyZ2luOiAyMDsgfVxcblxcbi5tLXQtMjAge1xcbiAgbWFyZ2luLXRvcDogMjA7IH1cXG5cXG4ubS1yLTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7IH1cXG5cXG4ubS1iLTIwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tbC0yMCB7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS14LTIwIHtcXG4gIG1hcmdpbi1yaWdodDogMjA7XFxuICBtYXJnaW4tbGVmdDogMjA7IH1cXG5cXG4ubS15LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjA7IH1cXG5cXG4ubS0yNCB7XFxuICBtYXJnaW46IDI0OyB9XFxuXFxuLm0tdC0yNCB7XFxuICBtYXJnaW4tdG9wOiAyNDsgfVxcblxcbi5tLXItMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDsgfVxcblxcbi5tLWItMjQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS1sLTI0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXgtMjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNDtcXG4gIG1hcmdpbi1sZWZ0OiAyNDsgfVxcblxcbi5tLXktMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5tLTI1IHtcXG4gIG1hcmdpbjogMjU7IH1cXG5cXG4ubS10LTI1IHtcXG4gIG1hcmdpbi10b3A6IDI1OyB9XFxuXFxuLm0tci0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1OyB9XFxuXFxuLm0tYi0yNSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLWwtMjUge1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teC0yNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1O1xcbiAgbWFyZ2luLWxlZnQ6IDI1OyB9XFxuXFxuLm0teS0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTtcXG4gIG1hcmdpbi1ib3R0b206IDI1OyB9XFxuXFxuLm0tMjgge1xcbiAgbWFyZ2luOiAyODsgfVxcblxcbi5tLXQtMjgge1xcbiAgbWFyZ2luLXRvcDogMjg7IH1cXG5cXG4ubS1yLTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7IH1cXG5cXG4ubS1iLTI4IHtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tbC0yOCB7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS14LTI4IHtcXG4gIG1hcmdpbi1yaWdodDogMjg7XFxuICBtYXJnaW4tbGVmdDogMjg7IH1cXG5cXG4ubS15LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjg7IH1cXG5cXG4ubS0zMCB7XFxuICBtYXJnaW46IDMwOyB9XFxuXFxuLm0tdC0zMCB7XFxuICBtYXJnaW4tdG9wOiAzMDsgfVxcblxcbi5tLXItMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDsgfVxcblxcbi5tLWItMzAge1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ubS1sLTMwIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXgtMzAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzMDtcXG4gIG1hcmdpbi1sZWZ0OiAzMDsgfVxcblxcbi5tLXktMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7XFxuICBtYXJnaW4tYm90dG9tOiAzMDsgfVxcblxcbi5wLTAge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5wLXQtMCB7XFxuICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5wLXItMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnAtYi0wIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtbC0wIHtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXgtMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuXFxuLnAteS0wIHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cXG5cXG4ucC0yIHtcXG4gIHBhZGRpbmc6IDI7IH1cXG5cXG4ucC10LTIge1xcbiAgcGFkZGluZy10b3A6IDI7IH1cXG5cXG4ucC1yLTIge1xcbiAgcGFkZGluZy1yaWdodDogMjsgfVxcblxcbi5wLWItMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLWwtMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC14LTIge1xcbiAgcGFkZGluZy1yaWdodDogMjtcXG4gIHBhZGRpbmctbGVmdDogMjsgfVxcblxcbi5wLXktMiB7XFxuICBwYWRkaW5nLXRvcDogMjtcXG4gIHBhZGRpbmctYm90dG9tOiAyOyB9XFxuXFxuLnAtNCB7XFxuICBwYWRkaW5nOiA0OyB9XFxuXFxuLnAtdC00IHtcXG4gIHBhZGRpbmctdG9wOiA0OyB9XFxuXFxuLnAtci00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7IH1cXG5cXG4ucC1iLTQge1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC1sLTQge1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteC00IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDQ7XFxuICBwYWRkaW5nLWxlZnQ6IDQ7IH1cXG5cXG4ucC15LTQge1xcbiAgcGFkZGluZy10b3A6IDQ7XFxuICBwYWRkaW5nLWJvdHRvbTogNDsgfVxcblxcbi5wLTUge1xcbiAgcGFkZGluZzogNTsgfVxcblxcbi5wLXQtNSB7XFxuICBwYWRkaW5nLXRvcDogNTsgfVxcblxcbi5wLXItNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1OyB9XFxuXFxuLnAtYi01IHtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtbC01IHtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXgtNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1O1xcbiAgcGFkZGluZy1sZWZ0OiA1OyB9XFxuXFxuLnAteS01IHtcXG4gIHBhZGRpbmctdG9wOiA1O1xcbiAgcGFkZGluZy1ib3R0b206IDU7IH1cXG5cXG4ucC04IHtcXG4gIHBhZGRpbmc6IDg7IH1cXG5cXG4ucC10LTgge1xcbiAgcGFkZGluZy10b3A6IDg7IH1cXG5cXG4ucC1yLTgge1xcbiAgcGFkZGluZy1yaWdodDogODsgfVxcblxcbi5wLWItOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLWwtOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC14LTgge1xcbiAgcGFkZGluZy1yaWdodDogODtcXG4gIHBhZGRpbmctbGVmdDogODsgfVxcblxcbi5wLXktOCB7XFxuICBwYWRkaW5nLXRvcDogODtcXG4gIHBhZGRpbmctYm90dG9tOiA4OyB9XFxuXFxuLnAtMTAge1xcbiAgcGFkZGluZzogMTA7IH1cXG5cXG4ucC10LTEwIHtcXG4gIHBhZGRpbmctdG9wOiAxMDsgfVxcblxcbi5wLXItMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7IH1cXG5cXG4ucC1iLTEwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDsgfVxcblxcbi5wLWwtMTAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXgtMTAge1xcbiAgcGFkZGluZy1yaWdodDogMTA7XFxuICBwYWRkaW5nLWxlZnQ6IDEwOyB9XFxuXFxuLnAteS0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC0xMiB7XFxuICBwYWRkaW5nOiAxMjsgfVxcblxcbi5wLXQtMTIge1xcbiAgcGFkZGluZy10b3A6IDEyOyB9XFxuXFxuLnAtci0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjsgfVxcblxcbi5wLWItMTIge1xcbiAgcGFkZGluZy1ib3R0b206IDEyOyB9XFxuXFxuLnAtbC0xMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteC0xMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMjtcXG4gIHBhZGRpbmctbGVmdDogMTI7IH1cXG5cXG4ucC15LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLTE1IHtcXG4gIHBhZGRpbmc6IDE1OyB9XFxuXFxuLnAtdC0xNSB7XFxuICBwYWRkaW5nLXRvcDogMTU7IH1cXG5cXG4ucC1yLTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1OyB9XFxuXFxuLnAtYi0xNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTU7IH1cXG5cXG4ucC1sLTE1IHtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC14LTE1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1O1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5wLXktMTUge1xcbiAgcGFkZGluZy10b3A6IDE1O1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtMTYge1xcbiAgcGFkZGluZzogMTY7IH1cXG5cXG4ucC10LTE2IHtcXG4gIHBhZGRpbmctdG9wOiAxNjsgfVxcblxcbi5wLXItMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7IH1cXG5cXG4ucC1iLTE2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxNjsgfVxcblxcbi5wLWwtMTYge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXgtMTYge1xcbiAgcGFkZGluZy1yaWdodDogMTY7XFxuICBwYWRkaW5nLWxlZnQ6IDE2OyB9XFxuXFxuLnAteS0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC0yMCB7XFxuICBwYWRkaW5nOiAyMDsgfVxcblxcbi5wLXQtMjAge1xcbiAgcGFkZGluZy10b3A6IDIwOyB9XFxuXFxuLnAtci0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDsgfVxcblxcbi5wLWItMjAge1xcbiAgcGFkZGluZy1ib3R0b206IDIwOyB9XFxuXFxuLnAtbC0yMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteC0yMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMDtcXG4gIHBhZGRpbmctbGVmdDogMjA7IH1cXG5cXG4ucC15LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLTI0IHtcXG4gIHBhZGRpbmc6IDI0OyB9XFxuXFxuLnAtdC0yNCB7XFxuICBwYWRkaW5nLXRvcDogMjQ7IH1cXG5cXG4ucC1yLTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0OyB9XFxuXFxuLnAtYi0yNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjQ7IH1cXG5cXG4ucC1sLTI0IHtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC14LTI0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNDsgfVxcblxcbi5wLXktMjQge1xcbiAgcGFkZGluZy10b3A6IDI0O1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtMjUge1xcbiAgcGFkZGluZzogMjU7IH1cXG5cXG4ucC10LTI1IHtcXG4gIHBhZGRpbmctdG9wOiAyNTsgfVxcblxcbi5wLXItMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7IH1cXG5cXG4ucC1iLTI1IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyNTsgfVxcblxcbi5wLWwtMjUge1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXgtMjUge1xcbiAgcGFkZGluZy1yaWdodDogMjU7XFxuICBwYWRkaW5nLWxlZnQ6IDI1OyB9XFxuXFxuLnAteS0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC0yOCB7XFxuICBwYWRkaW5nOiAyODsgfVxcblxcbi5wLXQtMjgge1xcbiAgcGFkZGluZy10b3A6IDI4OyB9XFxuXFxuLnAtci0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODsgfVxcblxcbi5wLWItMjgge1xcbiAgcGFkZGluZy1ib3R0b206IDI4OyB9XFxuXFxuLnAtbC0yOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteC0yOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyODtcXG4gIHBhZGRpbmctbGVmdDogMjg7IH1cXG5cXG4ucC15LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLTMwIHtcXG4gIHBhZGRpbmc6IDMwOyB9XFxuXFxuLnAtdC0zMCB7XFxuICBwYWRkaW5nLXRvcDogMzA7IH1cXG5cXG4ucC1yLTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwOyB9XFxuXFxuLnAtYi0zMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzA7IH1cXG5cXG4ucC1sLTMwIHtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC14LTMwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwO1xcbiAgcGFkZGluZy1sZWZ0OiAzMDsgfVxcblxcbi5wLXktMzAge1xcbiAgcGFkZGluZy10b3A6IDMwO1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLyogRGl2aWRlcnMgKi9cXG4uaHItbGlnaHQge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhyLWRhcmsge1xcbiAgaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLyogQWxpZ25tZW50ICovXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtbG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7IH1cXG5cXG4udGV4dC11cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi50ZXh0LWNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG5cXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uZm9udC13ZWlnaHQtYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5mb250LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4vKipcXHJcXG4gKiBGb250IHNpemVcXHJcXG4gKiBUaGUgZm9sbG93aW5nIGNyZWF0ZXMgdGhpcyBwYXR0ZXJuOlxcclxcbiAqIC50LTEwe2ZvbnQtc2l6ZToxMH1cXHJcXG4gKiBGcm9tIDEwLCAxMiwgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBcXHJcXG4qKi9cXG4udC0xMCB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLnQtMTIge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi50LTE0IHtcXG4gIGZvbnQtc2l6ZTogMTQ7IH1cXG5cXG4udC0xNSB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnQtMTYge1xcbiAgZm9udC1zaXplOiAxNjsgfVxcblxcbi50LTE3IHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4udC0xOCB7XFxuICBmb250LXNpemU6IDE4OyB9XFxuXFxuLnQtMTkge1xcbiAgZm9udC1zaXplOiAxOTsgfVxcblxcbi50LTIwIHtcXG4gIGZvbnQtc2l6ZTogMjA7IH1cXG5cXG4udC0yNSB7XFxuICBmb250LXNpemU6IDI1OyB9XFxuXFxuLnQtMzAge1xcbiAgZm9udC1zaXplOiAzMDsgfVxcblxcbi5pbWctcm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiA1OyB9XFxuXFxuLmltZy1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogMjA7IH1cXG5cXG4uaW1nLXRodW1ibmFpbCB7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTsgfVxcblxcbi5wdWxsLWxlZnQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDsgfVxcblxcbi5wdWxsLXJpZ2h0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLm0teC1hdXRvIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tLXktYXV0byB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi50ZXh0LWRhbmdlciB7XFxuICBjb2xvcjogI2Q1MDAwMDsgfVxcblxcbi50ZXh0LW11dGVkIHtcXG4gIGNvbG9yOiAjY2NjOyB9XFxuXFxuLmJnLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmJnLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUwMDAwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcbiAgY29sb3I6ICMyMTIxMjE7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5hY3Rpb24tYmFyIC5hY3Rpb24taXRlbSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYWN0aXZpdHktaW5kaWNhdG9yIHtcXG4gIGNvbG9yOiAjMzBiY2ZmO1xcbiAgd2lkdGg6IDMwO1xcbiAgaGVpZ2h0OiAzMDsgfVxcblxcbi5idG4ge1xcbiAgY29sb3I6ICM3YzAxNWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG1pbi1oZWlnaHQ6IDM2O1xcbiAgbWluLXdpZHRoOiA2NDtcXG4gIHBhZGRpbmc6IDEwIDEwIDEwIDEwO1xcbiAgZm9udC1zaXplOiAxODtcXG4gIG1hcmdpbjogOCAxNiA4IDE2OyB9XFxuICAuYnRuLmJ0bi1hY3RpdmU6aGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwZWJmZjsgfVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MwMTVkO1xcbiAgYm9yZGVyLWNvbG9yOiAjN2MwMTVkO1xcbiAgY29sb3I6ICNmZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYTBlYztcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDFhMGVjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFxdWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYWFiOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWJyb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1mb3Jlc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTY4OyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWdyZXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxlbW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWEwMDtcXG4gICAgY29sb3I6ICMwMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tbGltZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWU0MDY7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcHVycGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxMzBmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ydWJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1za3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmJ0bi1vdXRsaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjN2MwMTVkO1xcbiAgY29sb3I6ICM3YzAxNWQ7IH1cXG4gIC5idG4tb3V0bGluZS5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwZWJmZjsgfVxcblxcbi5idG5baXNFbmFibGVkPWZhbHNlXSB7XFxuICBjb2xvcjogI2E0YTRhNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uZmEge1xcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250OyB9XFxuXFxuLmZvcm0gLmlucHV0IHtcXG4gIHBhZGRpbmc6IDE2IDggMTYgODtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyODtcXG4gICAgcGFkZGluZzogMTY7IH1cXG4gIC5mb3JtIC5pbnB1dFtpc0VuYWJsZWQ9J2ZhbHNlJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLmZvcm0gLmlucHV0LWZpZWxkIHtcXG4gIG1hcmdpbjogODsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxuICAgIGNvbG9yOiAjYmFiYWJhOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWxpZ2h0LmFjdGl2ZSxcXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAuaHItZGFyay5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQuaW5wdXQtc2lkZXMgLmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG4gICAgbWFyZ2luOiAwIDAgOCAwOyB9XFxuXFxuLmgxLCAuaDIsIC5oMywgLmg0LCAuaDUsIC5oNiB7XFxuICBtYXJnaW4tYm90dG9tOiA0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMjEyMTIxOyB9XFxuXFxuLmJvZHksXFxuLmJvZHkyLFxcbi5mb290bm90ZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMyYjBjNzI7IH1cXG5cXG4uaDEge1xcbiAgZm9udC1zaXplOiAzMjsgfVxcblxcbi5oMiB7XFxuICBmb250LXNpemU6IDIyOyB9XFxuXFxuLmgzIHtcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uaDQge1xcbiAgZm9udC1zaXplOiAxMjsgfVxcblxcbi5oNSB7XFxuICBmb250LXNpemU6IDExOyB9XFxuXFxuLmg2IHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4uYm9keSB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLmJvZHkyIHtcXG4gIGZvbnQtc2l6ZTogMTc7IH1cXG5cXG4uZm9vdG5vdGUge1xcbiAgZm9udC1zaXplOiAxMzsgfVxcblxcbi5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0ge1xcbiAgY29sb3I6ICM3YzAxNWQ7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gTGFiZWwge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIHN0cmV0Y2g6IGZpbGw7XFxuICAgIHdpZHRoOiA0MDtcXG4gICAgaGVpZ2h0OiA0MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XFxuICAgIGNvbG9yOiAjMmIwYzcyO1xcbiAgICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5wcm9ncmVzcyB7XFxuICBjb2xvcjogIzMwYmNmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBmb250LXNpemU6IDEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQsIC5zaWRlZHJhd2VyLWNlbnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDE0ODtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMTYgMTYgMCAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgcGFkZGluZzogMjAgMTUgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnNpZGVkcmF3ZXItbGVmdCAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2NDtcXG4gIHdpZHRoOiA2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDMyO1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1ib3R0b206IDM2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1pbWFnZSB7XFxuICBoZWlnaHQ6IDc0O1xcbiAgd2lkdGg6IDc0O1xcbiAgYm9yZGVyLXJhZGl1czogMzc7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNDsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBjb2xvcjogIzczNzM3MzsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWJyYW5kIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGhlaWdodDogNDg7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcmllbnRhdGlvbjogaG9yaXpvbnRhbDsgfVxcbiAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgd2lkdGg6IDI0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIGhlaWdodDogNDg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcbiAgICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gICAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24ge1xcbiAgbWFyZ2luOiAwIDAgMCAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAwLjE7XFxuICB3aWR0aDogODAlO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmOyB9XFxuICAuc2xpZGVyW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zd2l0Y2hbY2hlY2tlZD10cnVlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzBiY2ZmO1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV1baXNFbmFibGVkPWZhbHNlXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc3dpdGNoW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLnRhYi12aWV3IHtcXG4gIC8qY29sb3I6ICRzZWNvbmRhcnk7Ki9cXG4gIHNlbGVjdGVkLWNvbG9yOiAjMzBiY2ZmO1xcbiAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAudGFiLXZpZXcgLnRhYi12aWV3LWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0YWJzLWJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4jbG9naW4tYmFja2dyb3VuZCB7XFxuICBtYXJnaW4tdG9wOiAtMjA7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLmxvZ2luLXdyYXAge1xcbiAgcGFkZGluZzogMCA0MDsgfVxcblxcbi5sb2dvLXdyYXAge1xcbiAgbWFyZ2luOiA2MCAwIDEwIDA7XFxuICBwYWRkaW5nOiAyMCAwOyB9XFxuICAubG9nby13cmFwIC5sb2dpbi1sb2dvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiAjN2MwMTVkO1xcbiAgICBvcGFjaXR5OiAuOTsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nby1zdWIge1xcbiAgICBjb2xvcjogIzdjMDE1ZDtcXG4gICAgb3BhY2l0eTogLjg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDM7IH1cXG4gIC5sb2dpbi13cmFwcGVyIFRleHRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwIDEwO1xcbiAgICBtYXJnaW46IDEwIDAgMCAwOyB9XFxuXFxuLmdvLWJhY2sge1xcbiAgZm9udC1zaXplOiAxNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgbWFyZ2luLXRvcDogMTA7IH1cXG5cXG5BY3Rpb25CYXIge1xcbiAgYmFja2dyb3VuZDogIzdjMDE1ZDtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5mb3JtIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuZm9ybSAuaW5wdXQtZmllbGQge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAgIC5mb3JtIC5pbnB1dC1maWVsZCAubGFiZWwge1xcbiAgICAgIGNvbG9yOiAjN2MwMTVkO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgJ09zd2FsZC1SZWd1bGFyJywgJ09zd2FsZC1ib2xkJzsgfVxcbiAgICAuZm9ybSAuaW5wdXQtZmllbGQgTGFiZWwuaW52YWxpZCB7XFxuICAgICAgY29sb3I6IHJlZDsgfVxcbiAgICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0IHtcXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAyO1xcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM3YzAxNWQ7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgIC5mb3JtIC5pbnB1dC1maWVsZCAuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZWQ7XFxuICAgICAgY29sb3I6IHJlZDsgfVxcblxcbi5oMSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCAnT3N3YWxkLVJlZ3VsYXInLCAnT3N3YWxkLWJvbGQnOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnLCAnRm9udC1Bd2Vzb21lJzsgfVxcblxcbi5kcmF3ZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICMyYjBjNzIsICM1YzNmYTApO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwOyB9XFxuXFxuLmJ0biB7XFxuICB3aWR0aDogODAlO1xcbiAgZm9udC1zaXplOiAyNDtcXG4gIGhlaWdodDogNDU7IH1cXG5cXG4uYnRuLWZsYXQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXdpZHRoOiAxO1xcbiAgY29sb3I6ICM3YzAxNWQ7IH1cXG5cXG4vKipcXHJcXG4gKiBJbXBvcnQgYWxsIHBsYXRmb3JtIHNwZWNpZmljIGZpbGVzIGhlcmVcXHJcXG4gKi9cXG4uYnRuIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBNZWRpdW0nO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBib3JkZXItd2lkdGg6IDE7IH1cXG5cXG4uYnRuLXJvdW5kZWQtc20ge1xcbiAgYm9yZGVyLXJhZGl1czogNDsgfVxcblxcbi5idG4tcm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiAxOTsgfVxcblxcbi5mb3JtIHtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgVUkgVGV4dCBSZWd1bGFyJzsgfVxcbiAgLmZvcm0gLmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxNTsgfVxcbiAgICAuZm9ybSAuaW5wdXQuaW5wdXQtcm91bmRlZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMjc7IH1cXG5cXG4vKiBUaGlzIGlzIGhlcmUgdGVtcG9yYXJpbHkgYmVjYXVzZSBfaW5kZXguaW9zLnNjc3MgY2Fubm90IGJlIGVtcHR5ICovXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uc2xpZGVyIHtcXG4gIG1hcmdpbjogMTAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiwgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gIGNvbG9yOiAjOTQ5NDk0OyB9XFxuXFxuLnN3aXRjaCB7XFxuICBtYXJnaW46IDggMTU7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIHBhZGRpbmc6IDE2IDE1IDE2IDE1OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC50aHVtYiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTU7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0gLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5zZWdtZW50ZWQtYmFyIHtcXG4gIG1hcmdpbjogMCAxNTtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kOiAjN2MwMTVkO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5zY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vYXV0aC9hdXRoLmd1YXJkJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ2F1dGgnLCBsb2FkQ2hpbGRyZW46ICd+L2FwcC9hdXRoL2F1dGgubW9kdWxlI0F1dGhNb2R1bGUnIH0sXG4gIHtcbiAgICBwYXRoOiAnY2hhbGxlbmdlcycsXG4gICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLm1vZHVsZSNDaGFsbGVuZ2VzTW9kdWxlJyxcbiAgICBjYW5Mb2FkOiBbQXV0aEd1YXJkXSAvL25lZWRlZCB0byBhZGQgQXV0aEd1YXJkIGJjIGlmIGEgdXNlciBpcyBub3QgYXV0b2xvZ2dlZCBpbiwgaXQgd2lsbCBnbyB0byAvY2hhbGxlbmdlcyBpbnN0ZWFkIG9mIC9hdXRoLlxuICB9LFxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2NoYWxsZW5nZXMvdGFicycsIHBhdGhNYXRjaDogJ2Z1bGwnfSAvL3VuaXQgMTkyXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtBdXRoR3VhcmRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge31cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UmFkU2lkZURyYXdlcj5cXG4gIDxGbGV4Ym94TGF5b3V0IHRrRHJhd2VyQ29udGVudCBjbGFzcz1cXFwiZHJhd2VyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxCdXR0b25cXG4gICAgICB0ZXh0PVxcXCJMb2dvdXRcXFwiXFxuICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tcm91bmRlZC1sZ1xcXCJcXG5cXG4gICAgICAodGFwKT1cXFwib25Mb2dvdXQoKVxcXCJcXG4gICAgPjwvQnV0dG9uPlxcbiAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgPFN0YWNrTGF5b3V0IHRrTWFpbkNvbnRlbnQ+XFxuICAgIDxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuICA8L1N0YWNrTGF5b3V0PlxcbjwvUmFkU2lkZURyYXdlcj5cXG5cIiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyL3NpZGUtZHJhd2VyLWRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvdWkuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1hcHAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCwge3N0YXRpYzogdHJ1ZX0pIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgYWN0aXZlQ2hhbGxlbmdlID0gJyc7XG4gIHByaXZhdGUgZHJhd2VyU3ViOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdWlTZXJ2aWNlOiBVSVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZHJhd2VyU3ViID0gdGhpcy51aVNlcnZpY2UuZHJhd2VyU3RhdGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYXdlcikge1xuICAgICAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudWlTZXJ2aWNlLnNldFJvb3RWQ1JlZih0aGlzLnZjUmVmKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBvbkNoYWxsZW5nZUlucHV0KGNoYWxsZW5nZURlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjdGl2ZUNoYWxsZW5nZSA9IGNoYWxsZW5nZURlc2NyaXB0aW9uO1xuICAgIGNvbnNvbGUubG9nKCdvbkNoYWxsZW5nZUlucHV0OiAnLCBjaGFsbGVuZ2VEZXNjcmlwdGlvbik7XG4gIH1cblxuICBvbkxvZ291dCgpIHtcbiAgICB0aGlzLnVpU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZHJhd2VyU3ViKSB7XG4gICAgICB0aGlzLmRyYXdlclN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXlNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1hY3Rpb25zL2NoYWxsZW5nZS1hY3Rpb25zLm1vZHVsZSc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgQ2hhbGxlbmdlQWN0aW9uc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgRGF5TW9kYWxDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXlNb2RhbENvbXBvbmVudF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsImltcG9ydCB7IENhbkxvYWQsIFJvdXRlLCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgLy91bml0IDE5MlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuTG9hZCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gICAgY2FuTG9hZChyb3V0ZTogUm91dGUsIHNlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS51c2VyLnBpcGUodGFrZSgxKSwgc3dpdGNoTWFwKGN1cnJlbnRVc2VyID0+IHtcbiAgICAgICAgICAgIGlmKCFjdXJyZW50VXNlciB8fCAhY3VycmVudFVzZXIudG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5hdXRvTG9naW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcChpc0F1dGggPT4ge1xuICAgICAgICAgICAgaWYoIWlzQXV0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBCZWhhdmlvclN1YmplY3QsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHNldFN0cmluZywgZ2V0U3RyaW5nLCBoYXNLZXksIHJlbW92ZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc1NlcnZpY2UgfSBmcm9tIFwiLi4vY2hhbGxlbmdlcy9jaGFsbGVuZ2VzLnNlcnZpY2VcIjtcblxuXG5jb25zdCBGSVJFQkFTRV9BUElfS0VZID0gJ0FJemFTeUExV3B0MlVWdG9MUG5pTVZSUEp2UjRKTGV2U0k1Rkhhbyc7XG5cbmludGVyZmFjZSBBdXRoUmVzcG9uc2VEYXRhIHsgLy91bml0IDE4NFxuICAgIGlkVG9rZW46IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHJlZnJlc2hUb2tlbjogc3RyaW5nO1xuICAgIGV4cGlyZXNJbjogc3RyaW5nO1xuICAgIGxvY2FsSWQ6IHN0cmluZztcbiAgICByZWdpc3RlcmVkPzogc3RyaW5nOyAvL3RoaXMgZmllbGQgaXMgb3B0aW9uYWxcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfdXNlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VXNlcj4obnVsbCk7IC8vdW5pdCAxODVcbiAgICBwcml2YXRlIHRva2VuRXhwaXJhdGlvblRpbWVyOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgICBnZXQgdXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXIuYXNPYnNlcnZhYmxlKCk7IC8vYXNPYnNhdmVyYWJsZSBzbyB3ZSBjYW4gb25seSBsaXN0ZW4gdG8gaXQgb25seSBvdXRzaWRlLiBcbiAgICB9XG5cbiAgICBzaWduVXAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5wb3N0PEF1dGhSZXNwb25zZURhdGE+KGBodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduVXA/a2V5PSR7RklSRUJBU0VfQVBJX0tFWX1gLFxuICAgICAgICB7ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQsIHJldHVyblNlY3VyZVRva2VuOiB0cnVlfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yUmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3JSZXMuZXJyb3IuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvclJlcyk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YXAocmVzRGF0YSA9PiB7IC8vdW5pdCAxODRcbiAgICAgICAgICAgIGlmKHJlc0RhdGEgJiYgcmVzRGF0YS5pZFRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2dpbihcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHJlc0RhdGEuaWRUb2tlbiwgLy90b2tlblxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhLmxvY2FsSWQsIC8vdXNlcmlkXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHJlc0RhdGEuZXhwaXJlc0luKSAvL3BhcnNlIHRvIGludCBmcm9tIHN0cmluZ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5wb3N0PEF1dGhSZXNwb25zZURhdGE+KGBodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS92MS9hY2NvdW50czpzaWduSW5XaXRoUGFzc3dvcmQ/a2V5PSR7RklSRUJBU0VfQVBJX0tFWX1gLFxuICAgICAgICB7ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmQsIHJldHVyblNlY3VyZVRva2VuOiB0cnVlfVxuICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yUmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3JSZXMuZXJyb3IuZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvclJlcyk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YXAocmVzRGF0YSA9PiB7IC8vdW5pdCAxODRcbiAgICAgICAgICAgIGlmKHJlc0RhdGEgJiYgcmVzRGF0YS5pZFRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2dpbihcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHJlc0RhdGEuaWRUb2tlbiwgLy90b2tlblxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhLmxvY2FsSWQsIC8vdXNlcmlkXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHJlc0RhdGEuZXhwaXJlc0luKSAvL3BhcnNlIHRvIGludCBmcm9tIHN0cmluZ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy9Ob3cgbG9naW4gJiBzaWdudXAgaGFuZGxlIGdvZXMgdG8gQ2hhbGxlbmdlIFNlcnZpY2UgdG8gdmlldyB0aGUgc2VjdGlvbiBwcm90ZWN0ZWQgYnkgYSB0b2tlbi5cblxuICAgIGxvZ291dCgpIHsgLy91bml0IDE4OFxuICAgICAgICB0aGlzLl91c2VyLm5leHQobnVsbCk7XG4gICAgICAgIHJlbW92ZSgndXNlckRhdGEnKTtcbiAgICAgICAgaWYodGhpcy50b2tlbkV4cGlyYXRpb25UaW1lcikgeyAvL3VuaXQgMTkxXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b2tlbkV4cGlyYXRpb25UaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgYXV0b0xvZ2luKCkgeyAvL3VuaXQgMTkwXG4gICAgICAgIGlmKCFoYXNLZXkoJ3VzZXJEYXRhJykpIHtcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXNlckRhdGE6IHtcbiAgICAgICAgICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICAgICAgX3Rva2VuOiBzdHJpbmc7IFxuICAgICAgICAgICAgX3Rva2VuRXhwaXJhdGlvbkRhdGU6IHN0cmluZztcbiAgICAgICAgfSA9IEpTT04ucGFyc2UoZ2V0U3RyaW5nKCd1c2VyRGF0YScpKTsgLy9kZWNvbnN0cnVjdCAndXNlckRhdGEnXG5cbiAgICAgICAgY29uc3QgbG9hZGVkVXNlciA9IG5ldyBVc2VyKFxuICAgICAgICAgICAgdXNlckRhdGEuZW1haWwsIFxuICAgICAgICAgICAgdXNlckRhdGEuaWQsIFxuICAgICAgICAgICAgdXNlckRhdGEuX3Rva2VuLCBcbiAgICAgICAgICAgIG5ldyBEYXRlKHVzZXJEYXRhLl90b2tlbkV4cGlyYXRpb25EYXRlKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmKGxvYWRlZFVzZXIuaXNBdXRoKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VyLm5leHQobG9hZGVkVXNlcik7XG4gICAgICAgICAgICB0aGlzLmF1dG9Mb2dvdXQobG9hZGVkVXNlci50aW1lVG9FeHBpcnkpO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgfVxuXG4gICAgYXV0b0xvZ291dChleHBpcnlEdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5FeHBpcmF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9nb3V0KCksIGV4cGlyeUR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUxvZ2luKGVtYWlsOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBleHBpcmVzSW46IG51bWJlcikgeyAvL3VuaXQgMTg1XG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyBleHBpcmVzSW4gKiAxMDAwKTtcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKFxuICAgICAgICAgICAgZW1haWwsIFxuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgdG9rZW4sIFxuICAgICAgICAgICAgZXhwaXJhdGlvbkRhdGVcbiAgICAgICAgKTtcbiAgICAgICAgc2V0U3RyaW5nKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTsgLy91bml0IDE5MFxuICAgICAgICB0aGlzLmF1dG9Mb2dvdXQodXNlci50aW1lVG9FeHBpcnkpO1xuICAgICAgICB0aGlzLl91c2VyLm5leHQodXNlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvck1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzd2l0Y2goZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICBjYXNlICdFTUFJTF9FWElTVFMnOlxuICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGlzIGVtYWlsIGV4aXN0cyBhbHJlYWR5IScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRU1BSUxfTk9UX0ZPVU5EJzpcbiAgICAgICAgICAgICAgICBhbGVydCgnRW1haWwgaXMgbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSU5WQUxJRF9QQVNTV09SRCc6XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Bhc3N3b3JkIGlzIGludmFsaWQhJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGFsZXJ0KCdBdXRoZW50aWNhdGlvbiBmYWlsZWQsIGNoZWNrIHlvdXIgY3JlZGVudGlhbHMuJylcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgVXNlciB7IC8vdW5pdCAxODRcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGVtYWlsOiBzdHJpbmcsIFxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZywgXG4gICAgICAgIHByaXZhdGUgX3Rva2VuOiBzdHJpbmcsIFxuICAgICAgICBwcml2YXRlIF90b2tlbkV4cGlyYXRpb25EYXRlOiBEYXRlKSB7fVxuXG4gICAgZ2V0IGlzQXV0aCgpIHsgLy91bml0IDE4OVxuICAgICAgICByZXR1cm4gISF0aGlzLnRva2VuOyAvLyBkb3VibGUgISBtYWtlcyBpdCB0byBib29sZWFuIHZhbCwga2VlcHMgaXQncyBvcmlnaW5hbCB2YWx1ZVxuICAgIH1cblxuICAgIGdldCB0b2tlbigpIHsgLy91bml0IDE4OVxuICAgICAgICBpZighdGhpcy5fdG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLl90b2tlbkV4cGlyYXRpb25EYXRlIHx8IG5ldyBEYXRlKCkgPiB0aGlzLl90b2tlbkV4cGlyYXRpb25EYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVUb0V4cGlyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuRXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpIC0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8RmxleGJveExheW91dD4gXFxuICA8QnV0dG9uIFxcbiAgICBoZWlnaHQ9XFxcIjYwXFxcIiBcXG4gICAgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tcm91bmRlZC1sZ1xcXCIgXFxuICAgIHRleHQ9XFxcIkNvbXBsZXRlZFxcXCIgXFxuICAgICh0YXApPVxcXCJvbkFjdGlvbignY29tcGxldGUnKVxcXCIgXFxuICAgICpuZ0lmPVxcXCJhY3Rpb24gIT09ICdjb21wbGV0ZSdcXFwiIFxcbiAgICBbaXNFbmFibGVkXT1cXFwiIWRvbmVcXFwiXFxuICA+PC9CdXR0b24+IDwhLS0gbmdJZiBtYWtlcyB0aGUgYnV0dG9uIGRpc2FwcGVhciBJRiBpdCByZWNlaXZlICdjb21wbGV0ZScgdmxhdWUgdG8gZGlzcGxheSBhIGxhYmVsKGNoZWNrIGljb24pIGJlbG93LS0+XFxuICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVxcXCI2MFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3VjY2VzcyBidG4tcm91bmRlZC1sZ1xcXCIgKm5nSWY9XFxcImFjdGlvbiA9PT0gJ2NvbXBsZXRlJ1xcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCImI3hmMDBjO1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwiZmEgYnRuLWFsdCBhbmltYXRlLWJ0blxcXCI+XFxuICAgIDwvTGFiZWw+XFxuICA8L1N0YWNrTGF5b3V0PlxcbiAgPEJ1dHRvbiBcXG4gICAgaGVpZ2h0PVxcXCI2MFxcXCIgIFxcbiAgICBjbGFzcz1cXFwiYnRuIGJ0bi1mYWlsIGJ0bi1yb3VuZGVkLWxnXFxcIiBcXG4gICAgdGV4dD1cXFwiRmFpbGRcXFwiIFxcbiAgICAodGFwKT1cXFwib25BY3Rpb24oJ2ZhaWwnKVxcXCJcXG4gICAgKm5nSWY9XFxcImFjdGlvbiAhPT0gJ2ZhaWwnXFxcIlxcbiAgICBbaXNFbmFibGVkXT1cXFwiIWRvbmVcXFwiXFxuICA+PC9CdXR0b24+XFxuICA8U3RhY2tMYXlvdXQgaGVpZ2h0PVxcXCI2MFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZmFpbCBidG4tcm91bmRlZC1sZ1xcXCIgKm5nSWY9XFxcImFjdGlvbiA9PT0gJ2ZhaWwnXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwMGQ7XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJmYSBidG4tYWx0IGFuaW1hdGUtYnRuXFxcIj5cXG4gICAgPC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8QnV0dG9uIGhlaWdodD1cXFwiNjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWZsYXQgYnRuLXJvdW5kZWQtbGdcXFwiIFt0ZXh0XT1cXFwiY2FuY2VsVGV4dFxcXCIgKHRhcCk9XFxcIm9uQWN0aW9uKCdjYW5jZWwnKVxcXCI+PC9CdXR0b24+XFxuPC9GbGV4Ym94TGF5b3V0PlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi8qKlxcclxcbiAqIENvbnZlbmllbnQgc2luZ2xlIGltcG9ydCBmb3IgbGlnaHQgdmFyaWFibGVzXFxyXFxuICogSW5jbHVkZXMgYmFzZSB2YXJpYWJsZXMgd2l0aCBsaWdodCBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogTGlnaHQgdmFyaWFibGUgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbkZsZXhib3hMYXlvdXQge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5idG4ge1xcbiAgd2lkdGg6IDMwMDsgfVxcblxcbi5idG4tc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYnRuLWZhaWwge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICBib3JkZXItd2lkdGg6IDE7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQsXFxuLmJ0bi1mYWlsOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjb2xvcjogIzc3Nzc3NztcXG4gIGJvcmRlci1jb2xvcjogI2NjYzsgfVxcblxcbi5idG4tYWx0IHtcXG4gIGZvbnQtc2l6ZTogMzA7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi5hbmltYXRlLWJ0biB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdXA7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzApOyB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB9XFxuXFxuLmJ0bi1hbHQge1xcbiAgbWFyZ2luLXRvcDogODsgfVxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERheVN0YXR1cyB9IGZyb20gJy4uL2RheS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS1hY3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS1hY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBAT3V0cHV0KCkgYWN0aW9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlTdGF0dXM+KCk7XG4gIEBJbnB1dCgpIGNhbmNlbFRleHQgPSAnQ2FuY2VsJztcbiAgQElucHV0KCkgY2hvc2VuOiAnY29tcGxldGUnIHwgJ2ZhaWwnID0gbnVsbDtcbiAgQElucHV0KCkgc3RhcnREb25lID0gZmFsc2U7XG4gIGFjdGlvbjogJ2NvbXBsZXRlJyB8ICdmYWlsJyA9IG51bGw7XG4gIGRvbmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZihjaGFuZ2VzLmNob3Nlbikge1xuICAgICAgdGhpcy5hY3Rpb24gPSBjaGFuZ2VzLmNob3Nlbi5jdXJyZW50VmFsdWU7XG5cbiAgICAgIGlmKGNoYW5nZXMuY2hvc2VuLmN1cnJlbnRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoY2hhbmdlcy5zdGFydERvbmUpIHsgLy91bml0IDE3NiBkaXNhYmxlIG9uZSBzdGF0dXMgYnV0dG9uIHdoZW4gZmlyc3QgbG9nZ2VkIGluIHRvICd0b2RheScgcGFnZS5cbiAgICAgIGlmKGNoYW5nZXMuc3RhcnREb25lLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25BY3Rpb24oYWN0aW9uOiAnY29tcGxldGUnIHwgJ2ZhaWwnIHwgJ2NhbmNlbCcpIHtcbiAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgIGxldCBzdGF0dXMgPSBEYXlTdGF0dXMuT3BlbjtcbiAgICBpZihhY3Rpb24gPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHN0YXR1cyA9IERheVN0YXR1cy5Db21wbGV0ZWQ7XG4gICAgICB0aGlzLmFjdGlvbiA9ICdjb21wbGV0ZSc7XG4gICAgfSBlbHNlIGlmKGFjdGlvbiA9PT0gJ2ZhaWwnKSB7XG4gICAgICBzdGF0dXMgPSBEYXlTdGF0dXMuRmFpbGVkO1xuICAgICAgdGhpcy5hY3Rpb24gPSAnZmFpbCc7XG4gICAgfSBlbHNlIGlmKGFjdGlvbiA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgIGFjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hY3Rpb25TZWxlY3QuZW1pdChzdGF0dXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2hhbGxlbmdlQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtDaGFsbGVuZ2VBY3Rpb25zQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQ2hhbGxlbmdlQWN0aW9uc0NvbXBvbmVudF0sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUFjdGlvbnNNb2R1bGUge30iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuRmxleGJveExheW91dCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXQ+XFxuXFx0PExhYmVsIGNsYXNzPVxcXCJoMVxcXCIgW3RleHRdPVxcXCJsb2FkZWREYXRlIHwgZGF0ZVxcXCI+PC9MYWJlbD5cXG5cXHQ8bnMtY2hhbGxlbmdlLWFjdGlvbnMgXFxuXFx0XFx0KGFjdGlvblNlbGVjdCk9XFxcIm9uSGFuZGxlSW5wdXQoJGV2ZW50KVxcXCJcXG5cXHRcXHRbY2hvc2VuXT1cXFwibG9hZGVkU3RhdHVzXFxcIlxcblxcdFxcblxcdD48L25zLWNoYWxsZW5nZS1hY3Rpb25zPlxcbjwvRmxleGJveExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQgeyBEYXlTdGF0dXMgfSBmcm9tICcuLi9kYXkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kYXktbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF5LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF5LW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXlNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxvYWRlZERhdGU6IERhdGU7XG4gIGxvYWRlZFN0YXR1czogJ2NvbXBsZXRlJyB8ICdmYWlsJyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBhcnNlZFBhcmFtcyA9ICh0aGlzLm1vZGFsUGFyYW1zLmNvbnRleHQgYXMgeyBkYXRlOiBEYXRlLCBzdGF0dXM6IERheVN0YXR1cyB9KTtcbiAgICB0aGlzLmxvYWRlZERhdGUgPSBwYXJzZWRQYXJhbXMuZGF0ZTtcbiAgICBpZihwYXJzZWRQYXJhbXMuc3RhdHVzID09PSBEYXlTdGF0dXMuQ29tcGxldGVkKSB7XG4gICAgICB0aGlzLmxvYWRlZFN0YXR1cyA9ICdjb21wbGV0ZSc7XG4gICAgfSBlbHNlIGlmKHBhcnNlZFBhcmFtcy5zdGF0dXMgPT09IERheVN0YXR1cy5GYWlsZWQpIHtcbiAgICAgIHRoaXMubG9hZGVkU3RhdHVzID0gJ2ZhaWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRlZFN0YXR1cyA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxuICBvbkhhbmRsZUlucHV0KGFjdGlvbjogRGF5U3RhdHVzKSB7XG4gICAgdGhpcy5tb2RhbFBhcmFtcy5jbG9zZUNhbGxiYWNrKGFjdGlvbik7XG4gIH1cblxufVxuIiwiZXhwb3J0IGVudW0gRGF5U3RhdHVzIHtcbiAgICBPcGVuLCBcbiAgICBDb21wbGV0ZWQsIFxuICAgIEZhaWxlZCBcbn0gXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5IHtcbiAgICBkYXlJbk1vbnRoOiBudW1iZXI7XG4gICAgZGF5SW5XZWVrOiBudW1iZXI7XG4gICAgZGF0ZTogRGF0ZTtcbiAgICBzdGF0dXM6IERheVN0YXR1cztcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVSVNlcnZpY2Uge1xuICBwcml2YXRlIF9kcmF3ZXJTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dm9pZD4obnVsbCk7XG4gIHByaXZhdGUgX3Jvb3RWQ1JlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBnZXQgZHJhd2VyU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYXdlclN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgdG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuX2RyYXdlclN0YXRlLm5leHQobnVsbCk7XG4gIH1cblxuICBzZXRSb290VkNSZWYodmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLl9yb290VkNSZWYgPSB2Y1JlZjtcbiAgfVxuXG4gIGdldFJvb3RWQ1JlZigpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdFZDUmVmO1xuICB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cywgc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==