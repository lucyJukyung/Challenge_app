require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
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
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/auth/auth.component.ts");



var routes = [
    { path: '', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    {
        path: 'challenges',
        loadChildren: '~/app/challenges/challenges.module#ChallengesModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<RadSideDrawer>\n  <FlexboxLayout tkDrawerContent class=\"drawer-container\">\n    <Button\n      text=\"Logout\"\n      class=\"btn btn-primary btn-rounded-lg\"\n      nsRouterLink=\"/\"\n      [clearHistory]=\"true\"\n      (tap)=\"onLogout()\"\n    ></Button>\n  </FlexboxLayout>\n  <StackLayout tkMainContent>\n    <page-router-outlet></page-router-outlet>\n  </StackLayout>\n</RadSideDrawer>\n"

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



var AppComponent = /** @class */ (function () {
    function AppComponent(uiService, changeDetectionRef, vcRef) {
        this.uiService = uiService;
        this.changeDetectionRef = changeDetectionRef;
        this.vcRef = vcRef;
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
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
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/auth/auth.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _challenges_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/challenges/day-modal/day-modal.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/shared/shared.module.ts");
/* harmony import */ var _challenges_challenge_actions_challenge_actions_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/challenges/challenge-actions/challenge-actions.module.ts");












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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_5__["NativeScriptHttpClientModule"],
                nativescript_ui_sidedrawer_angular_side_drawer_directives__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUISideDrawerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _challenges_challenge_actions_challenge_actions_module__WEBPACK_IMPORTED_MODULE_11__["ChallengeActionsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
                _challenges_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_9__["DayModalComponent"]
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            entryComponents: [_challenges_day_modal_day_modal_component__WEBPACK_IMPORTED_MODULE_9__["DayModalComponent"]]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<ns-action-bar\n  [title]=\"isLogin ? 'Login' : 'SignUp'\"\n  [showBackButton]=\"false\"\n  [hasMenu]=\"false\"\n></ns-action-bar>\n<StackLayout class=\"form\" [formGroup]=\"form\">\n  <StackLayout class=\"input-field\">\n    <Label \n      class=\"label\" \n      text=\"E-Mail\" \n      [ngClass]=\"{invalid: !emailControlIsValid}\"\n    ></Label>\n    <TextField \n      class=\"input\" \n      returnKeyType=\"next\" \n      keyboardType=\"email\"\n      [autocorrect]=\"false\"\n      autocapitalizationType=\"none\"\n      formControlName=\"email\"\n      #emailEl\n    ></TextField>\n    <Label \n      *ngIf=\"!emailControlIsValid\"\n      text=\"Please enter a vaild email\"\n    ></Label>\n  </StackLayout>\n  <StackLayout class=\"input-field\">\n    <Label \n     class=\"label\" \n     text=\"Description\"\n     [ngClass]=\"{invalid: !passwordControlIsValid}\"\n    ></Label>\n    <TextField \n      class=\"input\" \n      returnKeyType=\"done\" \n      [autocorrect]=\"false\"\n      autocapitalizationType=\"none\"\n      [secure]=\"true\"\n      hint=\"Min 6 Character\"\n      formControlName=\"password\"\n      (returnPress)=\"onDone()\"\n      #passwordEl\n      ></TextField>\n    <Label \n      *ngIf=\"!passwordControlIsValid\"\n      text=\"Must be 6 chacacters long\"\n    ></Label>\n  </StackLayout>\n  <StackLayout>\n    <Button class=\"btn btn-flat\" [text]=\"isLogin ? 'Sign Up instead' : 'Login instead'\" (tap)=\"onSwitch()\"></Button>\n    <Button\n      text=\"Login\"\n      class=\"btn btn-primary\"\n      (tap)=\"onSubmit()\"\n      [isEnabled]=\"form.valid\"\n    ></Button>\n  </StackLayout>\n</StackLayout>"

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



var AuthComponent = /** @class */ (function () {
    function AuthComponent(router) {
        this.router = router;
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLogin = true;
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
        this.emailEl.nativeElement.focus();
        this.passwordEl.nativeElement.focus();
        this.passwordEl.nativeElement.dismissSoftInput(); //this block changes the focus in text field so it updates the value even password didn't lose the focus
        if (!this.form.valid) {
            return;
        }
        var email = this.form.get('email').value;
        var password = this.form.get('password').value;
        this.form.reset();
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true; //resetting email password validation back to default when form is resetting
        if (this.isLogin) {
            console.log("Logging in...");
        }
        else {
            console.log("signning in...");
        }
        this.router.navigate(['/challenges']);
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
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./app/challenges/challenge-actions/challenge-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout> \n  <Button \n    height=\"60\" \n    class=\"btn btn-success btn-rounded-lg\" \n    text=\"Completed\" \n    (tap)=\"onAction('complete')\" \n    *ngIf=\"action !== 'complete'\" \n    [isEnabled]=\"!done\"\n  ></Button> <!-- ngIf makes the button disappear IF it receive 'complete' vlaue to display a label(check icon) below-->\n  <StackLayout height=\"60\" class=\"btn btn-success btn-rounded-lg\" *ngIf=\"action === 'complete'\">\n    <Label text=\"&#xf00c;\" horizontalAlignment=\"center\" class=\"fa btn-alt animate-btn\">\n    </Label>\n  </StackLayout>\n  <Button \n    height=\"60\"  \n    class=\"btn btn-fail btn-rounded-lg\" \n    text=\"Faild\" \n    (tap)=\"onAction('fail')\"\n    *ngIf=\"action !== 'fail'\"\n    [isEnabled]=\"!done\"\n  ></Button>\n  <StackLayout height=\"60\" class=\"btn btn-fail btn-rounded-lg\" *ngIf=\"action === 'fail'\">\n    <Label text=\"&#xf00d;\" horizontalAlignment=\"center\" class=\"fa btn-alt animate-btn\">\n    </Label>\n  </StackLayout>\n  <Button height=\"60\" class=\"btn btn-flat btn-rounded-lg\" [text]=\"cancelText\" (tap)=\"onAction('cancel')\"></Button>\n</FlexboxLayout>"

/***/ }),

/***/ "./app/challenges/challenge-actions/challenge-actions.component.scss":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\nFlexboxLayout {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.btn {\n  width: 300; }\n\n.btn-success {\n  background: green;\n  border-color: green;\n  border-width: 1;\n  color: white; }\n\n.btn-fail {\n  background: red;\n  border-color: red;\n  border-width: 1;\n  color: white; }\n\n.btn-success:disabled,\n.btn-fail:disabled {\n  background: #ccc;\n  color: #777777;\n  border-color: #ccc; }\n\n.btn-alt {\n  font-size: 30;\n  margin-top: 10; }\n\n.animate-btn {\n  animation-name: slide-up;\n  animation-iteration-count: 1;\n  animation-duration: 0.1s;\n  animation-fill-mode: forwards; }\n\n@keyframes slide-up {\n  from {\n    transform: translateY(30); }\n  to {\n    transform: translateX(0); } }\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9hdXRoL2F1dGguY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2F1dGgvYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWFjdGlvbnMvY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWFjdGlvbnMvY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlLWFjdGlvbnMvY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1hY3Rpb25zL2NoYWxsZW5nZS1hY3Rpb25zLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NoYWxsZW5nZXMvZGF5LW1vZGFsL2RheS1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2hhbGxlbmdlcy9kYXkubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2hhcmVkL3VpL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9zaGFyZWQvdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7O0FDNUJBLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxrUEFBa1AsY0FBYyxXQUFXLHlCQUF5QixtQkFBbUIsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGNBQWMsZ0JBQWdCLEVBQUUsaUJBQWlCLDJCQUEyQixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGlCQUFpQixtQkFBbUIsRUFBRSxvQkFBb0IsOEJBQThCLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxpQkFBaUIsOEJBQThCLEVBQUUsZUFBZSxtQkFBbUIsRUFBRSxrQkFBa0IsOEJBQThCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsOEJBQThCLEVBQUUsbUJBQW1CLG1CQUFtQixFQUFFLHNCQUFzQiw4QkFBOEIsRUFBRSxrQkFBa0IsbUJBQW1CLEVBQUUscUJBQXFCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGNBQWMsbUJBQW1CLEVBQUUsaUJBQWlCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLGVBQWUsbUJBQW1CLEVBQUUsa0JBQWtCLDhCQUE4QixFQUFFLGFBQWEsbUJBQW1CLEVBQUUsZ0JBQWdCLDhCQUE4QixFQUFFLFlBQVksbUJBQW1CLEVBQUUsZUFBZSw4QkFBOEIsRUFBRSxpQ0FBaUMsZ0JBQWdCLEVBQUUsWUFBWSxlQUFlLEVBQUUsYUFBYSxpQkFBaUIsRUFBRSxZQUFZLGdCQUFnQixFQUFFLHNGQUFzRixTQUFTLE9BQU8sYUFBYSxPQUFPLGVBQWUsT0FBTyxnQkFBZ0IsT0FBTyxjQUFjLE9BQU8sZUFBZSxjQUFjLE9BQU8sYUFBYSxnQkFBZ0IsMEdBQTBHLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLHFCQUFxQixFQUFFLGFBQWEsb0JBQW9CLHVCQUF1QixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUs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Q0FBQTtBQTdDOEI7Ozs7Ozs7Ozs7Ozs7O0FDWC9CLE9BQU8sRUFBRSxzQkFBUyxDQUFFLDBFQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0Msa0NBQXdKO0FBQ3hKLDJEQUE2SDtBQUM3SCxtQkFBK0k7QUFDL0ksY0FBbUY7QUFDMUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCJ+L2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0Lm1vZHVsZVwiOiBbXG5cdFx0XCIuL2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0Lm1vZHVsZS50c1wiLFxuXHRcdDFcblx0XSxcblx0XCJ+L2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZXMubW9kdWxlXCI6IFtcblx0XHRcIi4vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5tb2R1bGUudHNcIixcblx0XHQwXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHR2YXIgaWRzID0gbWFwW3JlcV07XG5cdGlmKCFpZHMpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gaWRzWzBdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuLyoqXFxyXFxuICogQ29sb3IgY2xhc3Nlc1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLmMtZ3JleXtjb2xvcjojZTBlMGUwfS5jLWJnLWdyZXl7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwfVxcclxcbioqL1xcbi5jLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYmctYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxcblxcbi5jLWFxdWEge1xcbiAgY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1iZy1hcXVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1ibHVlIHtcXG4gIGNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtYmctYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtY2hhcmNvYWwge1xcbiAgY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1iZy1jaGFyY29hbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYnJvd24ge1xcbiAgY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1iZy1icm93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtZm9yZXN0IHtcXG4gIGNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtYmctZm9yZXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1ncmV5IHtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtYmctZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtZ3JleS1saWdodCB7XFxuICBjb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWJnLWdyZXktbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWdyZXktZGFyayB7XFxuICBjb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLWJnLWdyZXktZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtcHVycGxlIHtcXG4gIGNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtYmctcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1sZW1vbiB7XFxuICBjb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWJnLWxlbW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1saW1lIHtcXG4gIGNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtYmctbGltZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtb3JhbmdlIHtcXG4gIGNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtYmctb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1ydWJ5IHtcXG4gIGNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtYmctcnVieSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtc2t5IHtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmMtYmctc2t5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4vKiBXaWR0aC9IZWlnaHQgKi9cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDA7IH1cXG5cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5oLTEwMCB7XFxuICBoZWlnaHQ6IDEwMDsgfVxcblxcbi8qKlxcclxcbiAqIE1hcmdpbiBhbmQgUGFkZGluZ1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLm0tMHttYXJnaW46MH0ubS10LTB7bWFyZ2luLXRvcDowfS5tLXItMHttYXJnaW4tcmlnaHQ6MH0ubS1iLTB7bWFyZ2luLWJvdHRvbTowfS5tLWwtMHttYXJnaW4tbGVmdDowfS5tLXgtMHttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfS5tLXktMHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcclxcbiAqIFNhbWUgZm9yIFBhZGRpbmcgKHVzaW5nIHRoZSAncCcgYWJicmV2aWF0aW9uKVxcclxcbiAqIEZyb20gMCwgMiwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwXFxyXFxuKiovXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubS10LTAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5tLXItMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ubS1iLTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLWwtMCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXktMCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLTIge1xcbiAgbWFyZ2luOiAyOyB9XFxuXFxuLm0tdC0yIHtcXG4gIG1hcmdpbi10b3A6IDI7IH1cXG5cXG4ubS1yLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyOyB9XFxuXFxuLm0tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS1sLTIge1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS15LTIge1xcbiAgbWFyZ2luLXRvcDogMjtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS00IHtcXG4gIG1hcmdpbjogNDsgfVxcblxcbi5tLXQtNCB7XFxuICBtYXJnaW4tdG9wOiA0OyB9XFxuXFxuLm0tci00IHtcXG4gIG1hcmdpbi1yaWdodDogNDsgfVxcblxcbi5tLWItNCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tbC00IHtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teC00IHtcXG4gIG1hcmdpbi1yaWdodDogNDtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teS00IHtcXG4gIG1hcmdpbi10b3A6IDQ7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tNSB7XFxuICBtYXJnaW46IDU7IH1cXG5cXG4ubS10LTUge1xcbiAgbWFyZ2luLXRvcDogNTsgfVxcblxcbi5tLXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7IH1cXG5cXG4ubS1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXgtNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXktNSB7XFxuICBtYXJnaW4tdG9wOiA1O1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLTgge1xcbiAgbWFyZ2luOiA4OyB9XFxuXFxuLm0tdC04IHtcXG4gIG1hcmdpbi10b3A6IDg7IH1cXG5cXG4ubS1yLTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4OyB9XFxuXFxuLm0tYi04IHtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS1sLTgge1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS14LTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS15LTgge1xcbiAgbWFyZ2luLXRvcDogODtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS0xMCB7XFxuICBtYXJnaW46IDEwOyB9XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi5tLXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDsgfVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS1sLTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXgtMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXktMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLTEyIHtcXG4gIG1hcmdpbjogMTI7IH1cXG5cXG4ubS10LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyOyB9XFxuXFxuLm0tci0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyOyB9XFxuXFxuLm0tYi0xMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLWwtMTIge1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teC0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyO1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teS0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tMTUge1xcbiAgbWFyZ2luOiAxNTsgfVxcblxcbi5tLXQtMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7IH1cXG5cXG4ubS1yLTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7IH1cXG5cXG4ubS1iLTE1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tbC0xNSB7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS14LTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS15LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1O1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS0xNiB7XFxuICBtYXJnaW46IDE2OyB9XFxuXFxuLm0tdC0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjsgfVxcblxcbi5tLXItMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcblxcbi5tLWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS1sLTE2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXgtMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXktMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLTIwIHtcXG4gIG1hcmdpbjogMjA7IH1cXG5cXG4ubS10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwOyB9XFxuXFxuLm0tci0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwOyB9XFxuXFxuLm0tYi0yMCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLWwtMjAge1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teC0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwO1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teS0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tMjQge1xcbiAgbWFyZ2luOiAyNDsgfVxcblxcbi5tLXQtMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7IH1cXG5cXG4ubS1yLTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7IH1cXG5cXG4ubS1iLTI0IHtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tbC0yNCB7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS14LTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS15LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS0yNSB7XFxuICBtYXJnaW46IDI1OyB9XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTsgfVxcblxcbi5tLXItMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTsgfVxcblxcbi5tLWItMjUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS1sLTI1IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXgtMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXktMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLTI4IHtcXG4gIG1hcmdpbjogMjg7IH1cXG5cXG4ubS10LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4OyB9XFxuXFxuLm0tci0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4OyB9XFxuXFxuLm0tYi0yOCB7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLWwtMjgge1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teC0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4O1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teS0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tMzAge1xcbiAgbWFyZ2luOiAzMDsgfVxcblxcbi5tLXQtMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7IH1cXG5cXG4ubS1yLTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7IH1cXG5cXG4ubS1iLTMwIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLm0tbC0zMCB7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS14LTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS15LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ucC10LTAge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4ucC1yLTAge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcbi5wLWItMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLWwtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC14LTAge1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXktMCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAyOyB9XFxuXFxuLnAtdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAyOyB9XFxuXFxuLnAtci0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7IH1cXG5cXG4ucC1iLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC1sLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteC0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC15LTIge1xcbiAgcGFkZGluZy10b3A6IDI7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLTQge1xcbiAgcGFkZGluZzogNDsgfVxcblxcbi5wLXQtNCB7XFxuICBwYWRkaW5nLXRvcDogNDsgfVxcblxcbi5wLXItNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0OyB9XFxuXFxuLnAtYi00IHtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtbC00IHtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXgtNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0O1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteS00IHtcXG4gIHBhZGRpbmctdG9wOiA0O1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDU7IH1cXG5cXG4ucC10LTUge1xcbiAgcGFkZGluZy10b3A6IDU7IH1cXG5cXG4ucC1yLTUge1xcbiAgcGFkZGluZy1yaWdodDogNTsgfVxcblxcbi5wLWItNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLWwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC14LTUge1xcbiAgcGFkZGluZy1yaWdodDogNTtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNTtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtOCB7XFxuICBwYWRkaW5nOiA4OyB9XFxuXFxuLnAtdC04IHtcXG4gIHBhZGRpbmctdG9wOiA4OyB9XFxuXFxuLnAtci04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7IH1cXG5cXG4ucC1iLTgge1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC1sLTgge1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteC04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC15LTgge1xcbiAgcGFkZGluZy10b3A6IDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwOyB9XFxuXFxuLnAtdC0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7IH1cXG5cXG4ucC1yLTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwOyB9XFxuXFxuLnAtYi0xMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC1sLTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtMTIge1xcbiAgcGFkZGluZzogMTI7IH1cXG5cXG4ucC10LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjsgfVxcblxcbi5wLXItMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7IH1cXG5cXG4ucC1iLTEyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLWwtMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXgtMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteS0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC0xNSB7XFxuICBwYWRkaW5nOiAxNTsgfVxcblxcbi5wLXQtMTUge1xcbiAgcGFkZGluZy10b3A6IDE1OyB9XFxuXFxuLnAtci0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTsgfVxcblxcbi5wLWItMTUge1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtbC0xNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteC0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC15LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLTE2IHtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuXFxuLnAtdC0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7IH1cXG5cXG4ucC1yLTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2OyB9XFxuXFxuLnAtYi0xNiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC1sLTE2IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC14LTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXktMTYge1xcbiAgcGFkZGluZy10b3A6IDE2O1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtMjAge1xcbiAgcGFkZGluZzogMjA7IH1cXG5cXG4ucC10LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDsgfVxcblxcbi5wLXItMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7IH1cXG5cXG4ucC1iLTIwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLWwtMjAge1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXgtMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteS0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC0yNCB7XFxuICBwYWRkaW5nOiAyNDsgfVxcblxcbi5wLXQtMjQge1xcbiAgcGFkZGluZy10b3A6IDI0OyB9XFxuXFxuLnAtci0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDsgfVxcblxcbi5wLWItMjQge1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtbC0yNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteC0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC15LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLTI1IHtcXG4gIHBhZGRpbmc6IDI1OyB9XFxuXFxuLnAtdC0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7IH1cXG5cXG4ucC1yLTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1OyB9XFxuXFxuLnAtYi0yNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC1sLTI1IHtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC14LTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1O1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXktMjUge1xcbiAgcGFkZGluZy10b3A6IDI1O1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtMjgge1xcbiAgcGFkZGluZzogMjg7IH1cXG5cXG4ucC10LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODsgfVxcblxcbi5wLXItMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7IH1cXG5cXG4ucC1iLTI4IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLWwtMjgge1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXgtMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteS0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC0zMCB7XFxuICBwYWRkaW5nOiAzMDsgfVxcblxcbi5wLXQtMzAge1xcbiAgcGFkZGluZy10b3A6IDMwOyB9XFxuXFxuLnAtci0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDsgfVxcblxcbi5wLWItMzAge1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLnAtbC0zMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteC0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC15LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi8qIERpdmlkZXJzICovXFxuLmhyLWxpZ2h0IHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oci1kYXJrIHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi8qIEFsaWdubWVudCAqL1xcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LWxvd2VyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XFxuXFxuLnRleHQtdXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4udGV4dC1jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZm9udC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLyoqXFxyXFxuICogRm9udCBzaXplXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAudC0xMHtmb250LXNpemU6MTB9XFxyXFxuICogRnJvbSAxMCwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXFxyXFxuKiovXFxuLnQtMTAge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi50LTEyIHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4udC0xNCB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnQtMTUge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi50LTE2IHtcXG4gIGZvbnQtc2l6ZTogMTY7IH1cXG5cXG4udC0xNyB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLnQtMTgge1xcbiAgZm9udC1zaXplOiAxODsgfVxcblxcbi50LTE5IHtcXG4gIGZvbnQtc2l6ZTogMTk7IH1cXG5cXG4udC0yMCB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLnQtMjUge1xcbiAgZm9udC1zaXplOiAyNTsgfVxcblxcbi50LTMwIHtcXG4gIGZvbnQtc2l6ZTogMzA7IH1cXG5cXG4uaW1nLXJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNTsgfVxcblxcbi5pbWctY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwOyB9XFxuXFxuLmltZy10aHVtYm5haWwge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7IH1cXG5cXG4ucHVsbC1sZWZ0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7IH1cXG5cXG4ucHVsbC1yaWdodCB7XFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDsgfVxcblxcbi5tLXgtYXV0byB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubS15LWF1dG8ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LXByaW1hcnkge1xcbiAgY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4udGV4dC1kYW5nZXIge1xcbiAgY29sb3I6ICNkNTAwMDA7IH1cXG5cXG4udGV4dC1tdXRlZCB7XFxuICBjb2xvcjogI2NjYzsgfVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5iZy1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDAwMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmFjdGlvbi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcXG4gIGNvbG9yOiAjMjEyMTIxOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE3O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogIzMwYmNmZjtcXG4gIHdpZHRoOiAzMDtcXG4gIGhlaWdodDogMzA7IH1cXG5cXG4uYnRuIHtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtaW4taGVpZ2h0OiAzNjtcXG4gIG1pbi13aWR0aDogNjQ7XFxuICBwYWRkaW5nOiAxMCAxMCAxMCAxMDtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBtYXJnaW46IDggMTYgOCAxNjsgfVxcbiAgLmJ0bi5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGViZmY7IH1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjMDE1ZDtcXG4gIGJvcmRlci1jb2xvcjogIzdjMDE1ZDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWEwZWM7XFxuICAgIGJvcmRlci1jb2xvcjogIzAxYTBlYzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hcXVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1icm93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZm9yZXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1sZW1vbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxpbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2O1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXB1cnBsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcnVieSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tc2t5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogIzdjMDE1ZDtcXG4gIGNvbG9yOiAjN2MwMTVkOyB9XFxuICAuYnRuLW91dGxpbmUuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMGViZmY7IH1cXG5cXG4uYnRuW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgY29sb3I6ICNhNGE0YTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSwgZm9udGF3ZXNvbWUtd2ViZm9udDsgfVxcblxcbi5mb3JtIC5pbnB1dCB7XFxuICBwYWRkaW5nOiAxNiA4IDE2IDg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LWJvcmRlciB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyO1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LXJvdW5kZWQge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjg7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXRbaXNFbmFibGVkPSdmYWxzZSddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5mb3JtIC5pbnB1dC1maWVsZCB7XFxuICBtYXJnaW46IDg7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogI2JhYmFiYTsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1saWdodC5hY3RpdmUsXFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWRhcmsuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkLmlucHV0LXNpZGVzIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcblxcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xcbiAgbWFyZ2luLWJvdHRvbTogNDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzIxMjEyMTsgfVxcblxcbi5ib2R5LFxcbi5ib2R5MixcXG4uZm9vdG5vdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMmIwYzcyOyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uaDIge1xcbiAgZm9udC1zaXplOiAyMjsgfVxcblxcbi5oMyB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmg0IHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4uaDUge1xcbiAgZm9udC1zaXplOiAxMTsgfVxcblxcbi5oNiB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLmJvZHkge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5ib2R5MiB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtc2l6ZTogMTM7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIGNvbG9yOiAjN2MwMTVkO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIExhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAudGh1bWIge1xcbiAgICBzdHJldGNoOiBmaWxsO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogIzJiMGM3MjtcXG4gICAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgY29sb3I6ICMzMGJjZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgZm9udC1zaXplOiAxMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzdjMDE1ZDtcXG4gIHNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0LCAuc2lkZWRyYXdlci1jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgaGVpZ2h0OiAxNDg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE2IDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwIDE1IDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNjQ7XFxuICB3aWR0aDogNjQ7XFxuICBib3JkZXItcmFkaXVzOiAzMjtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAzNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA3NDtcXG4gIHdpZHRoOiA3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDM3O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgY29sb3I6ICM3MzczNzM7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBoZWlnaHQ6IDQ4O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3JpZW50YXRpb246IGhvcml6b250YWw7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgIHdpZHRoOiAyNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBoZWlnaHQ6IDQ4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG4gICAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgICAgY29sb3I6ICNmZmY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAwIDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMC4xO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcbiAgLnNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi50YWItdmlldyB7XFxuICAvKmNvbG9yOiAkc2Vjb25kYXJ5OyovXFxuICBzZWxlY3RlZC1jb2xvcjogIzMwYmNmZjtcXG4gIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgLnRhYi12aWV3IC50YWItdmlldy1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuI2xvZ2luLWJhY2tncm91bmQge1xcbiAgbWFyZ2luLXRvcDogLTIwO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwIHtcXG4gIHBhZGRpbmc6IDAgNDA7IH1cXG5cXG4ubG9nby13cmFwIHtcXG4gIG1hcmdpbjogNjAgMCAxMCAwO1xcbiAgcGFkZGluZzogMjAgMDsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogIzdjMDE1ZDtcXG4gICAgb3BhY2l0eTogLjk7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28tc3ViIHtcXG4gICAgY29sb3I6ICM3YzAxNWQ7XFxuICAgIG9wYWNpdHk6IC44O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzOyB9XFxuICAubG9naW4td3JhcHBlciBUZXh0RmllbGQge1xcbiAgICBwYWRkaW5nOiAxMCAxMDtcXG4gICAgbWFyZ2luOiAxMCAwIDAgMDsgfVxcblxcbi5nby1iYWNrIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzdjMDE1ZDtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuQWN0aW9uQmFyIHtcXG4gIGJhY2tncm91bmQ6ICM3YzAxNWQ7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uZm9ybSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgICAuZm9ybSAuaW5wdXQtZmllbGQgLmxhYmVsIHtcXG4gICAgICBjb2xvcjogIzdjMDE1ZDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsICdPc3dhbGQtUmVndWxhcicsICdPc3dhbGQtYm9sZCc7IH1cXG4gICAgLmZvcm0gLmlucHV0LWZpZWxkIExhYmVsLmludmFsaWQge1xcbiAgICAgIGNvbG9yOiByZWQ7IH1cXG4gICAgLmZvcm0gLmlucHV0LWZpZWxkIC5pbnB1dCB7XFxuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjtcXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjN2MwMTVkO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAuZm9ybSAuaW5wdXQtZmllbGQgLmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmVkO1xcbiAgICAgIGNvbG9yOiByZWQ7IH1cXG5cXG4uaDEge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzdjMDE1ZDtcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgJ09zd2FsZC1SZWd1bGFyJywgJ09zd2FsZC1ib2xkJzsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJywgJ0ZvbnQtQXdlc29tZSc7IH1cXG5cXG4uZHJhd2VyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjMmIwYzcyLCAjNWMzZmEwKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMDsgfVxcblxcbi5idG4ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZvbnQtc2l6ZTogMjQ7XFxuICBoZWlnaHQ6IDQ1OyB9XFxuXFxuLmJ0bi1mbGF0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGNvbG9yOiAjN2MwMTVkOyB9XFxuXFxuLyoqXFxyXFxuICogSW1wb3J0IGFsbCBwbGF0Zm9ybSBzcGVjaWZpYyBmaWxlcyBoZXJlXFxyXFxuICovXFxuLmJ0biB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBmb250LWZhbWlseTogJ1NGIFVJIFRleHQgTWVkaXVtJztcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYm9yZGVyLXdpZHRoOiAxOyB9XFxuXFxuLmJ0bi1yb3VuZGVkLXNtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQ7IH1cXG5cXG4uYnRuLXJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMTk7IH1cXG5cXG4uZm9ybSB7XFxuICBmb250LWZhbWlseTogJ1NGIFVJIFRleHQgUmVndWxhcic7IH1cXG4gIC5mb3JtIC5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTU7IH1cXG4gICAgLmZvcm0gLmlucHV0LmlucHV0LXJvdW5kZWQge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI3OyB9XFxuXFxuLyogVGhpcyBpcyBoZXJlIHRlbXBvcmFyaWx5IGJlY2F1c2UgX2luZGV4Lmlvcy5zY3NzIGNhbm5vdCBiZSBlbXB0eSAqL1xcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLnNsaWRlciB7XFxuICBtYXJnaW46IDEwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24sIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBjb2xvcjogIzk0OTQ5NDsgfVxcblxcbi5zd2l0Y2gge1xcbiAgbWFyZ2luOiA4IDE1OyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBwYWRkaW5nOiAxNiAxNSAxNiAxNTsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAudGh1bWIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBtYXJnaW46IDAgMTU7XFxuICBjb2xvcjogIzMwYmNmZjsgfVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZDogIzdjMDE1ZDtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblwiLCBcIlwiXSk7XG5cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuc2NzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGguY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxuICB7XG4gICAgcGF0aDogJ2NoYWxsZW5nZXMnLFxuICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2NoYWxsZW5nZXMvY2hhbGxlbmdlcy5tb2R1bGUjQ2hhbGxlbmdlc01vZHVsZSdcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPFJhZFNpZGVEcmF3ZXI+XFxuICA8RmxleGJveExheW91dCB0a0RyYXdlckNvbnRlbnQgY2xhc3M9XFxcImRyYXdlci1jb250YWluZXJcXFwiPlxcbiAgICA8QnV0dG9uXFxuICAgICAgdGV4dD1cXFwiTG9nb3V0XFxcIlxcbiAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kZWQtbGdcXFwiXFxuICAgICAgbnNSb3V0ZXJMaW5rPVxcXCIvXFxcIlxcbiAgICAgIFtjbGVhckhpc3RvcnldPVxcXCJ0cnVlXFxcIlxcbiAgICAgICh0YXApPVxcXCJvbkxvZ291dCgpXFxcIlxcbiAgICA+PC9CdXR0b24+XFxuICA8L0ZsZXhib3hMYXlvdXQ+XFxuICA8U3RhY2tMYXlvdXQgdGtNYWluQ29udGVudD5cXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9SYWRTaWRlRHJhd2VyPlxcblwiIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC91aS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYXBwJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIHtzdGF0aWM6IHRydWV9KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIGFjdGl2ZUNoYWxsZW5nZSA9ICcnO1xuICBwcml2YXRlIGRyYXdlclN1YjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlclN1YiA9IHRoaXMudWlTZXJ2aWNlLmRyYXdlclN0YXRlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmF3ZXIpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVpU2VydmljZS5zZXRSb290VkNSZWYodGhpcy52Y1JlZik7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25DaGFsbGVuZ2VJbnB1dChjaGFsbGVuZ2VEZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVDaGFsbGVuZ2UgPSBjaGFsbGVuZ2VEZXNjcmlwdGlvbjtcbiAgICBjb25zb2xlLmxvZygnb25DaGFsbGVuZ2VJbnB1dDogJywgY2hhbGxlbmdlRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgb25Mb2dvdXQoKSB7XG4gICAgdGhpcy51aVNlcnZpY2UudG9nZ2xlRHJhd2VyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5kcmF3ZXJTdWIpIHtcbiAgICAgIHRoaXMuZHJhd2VyU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZXMvZGF5LW1vZGFsL2RheS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlIH0gZnJvbSAnLi9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1hY3Rpb25zL2NoYWxsZW5nZS1hY3Rpb25zLm1vZHVsZSc7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsIC8vdG8gdXNlIGZvcm1Hcm91cCBmb3JtQ29udHJvbCBmb3JtQ29udHJvbE5hbWUgZXRjIGluIGF1dGggZnVuY3Rpb25cbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIERheU1vZGFsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGF5TW9kYWxDb21wb25lbnRdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5zLWFjdGlvbi1iYXJcXG4gIFt0aXRsZV09XFxcImlzTG9naW4gPyAnTG9naW4nIDogJ1NpZ25VcCdcXFwiXFxuICBbc2hvd0JhY2tCdXR0b25dPVxcXCJmYWxzZVxcXCJcXG4gIFtoYXNNZW51XT1cXFwiZmFsc2VcXFwiXFxuPjwvbnMtYWN0aW9uLWJhcj5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiIFtmb3JtR3JvdXBdPVxcXCJmb3JtXFxcIj5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICA8TGFiZWwgXFxuICAgICAgY2xhc3M9XFxcImxhYmVsXFxcIiBcXG4gICAgICB0ZXh0PVxcXCJFLU1haWxcXFwiIFxcbiAgICAgIFtuZ0NsYXNzXT1cXFwie2ludmFsaWQ6ICFlbWFpbENvbnRyb2xJc1ZhbGlkfVxcXCJcXG4gICAgPjwvTGFiZWw+XFxuICAgIDxUZXh0RmllbGQgXFxuICAgICAgY2xhc3M9XFxcImlucHV0XFxcIiBcXG4gICAgICByZXR1cm5LZXlUeXBlPVxcXCJuZXh0XFxcIiBcXG4gICAgICBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgIFthdXRvY29ycmVjdF09XFxcImZhbHNlXFxcIlxcbiAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiXFxuICAgICAgZm9ybUNvbnRyb2xOYW1lPVxcXCJlbWFpbFxcXCJcXG4gICAgICAjZW1haWxFbFxcbiAgICA+PC9UZXh0RmllbGQ+XFxuICAgIDxMYWJlbCBcXG4gICAgICAqbmdJZj1cXFwiIWVtYWlsQ29udHJvbElzVmFsaWRcXFwiXFxuICAgICAgdGV4dD1cXFwiUGxlYXNlIGVudGVyIGEgdmFpbGQgZW1haWxcXFwiXFxuICAgID48L0xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG4gIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiPlxcbiAgICA8TGFiZWwgXFxuICAgICBjbGFzcz1cXFwibGFiZWxcXFwiIFxcbiAgICAgdGV4dD1cXFwiRGVzY3JpcHRpb25cXFwiXFxuICAgICBbbmdDbGFzc109XFxcIntpbnZhbGlkOiAhcGFzc3dvcmRDb250cm9sSXNWYWxpZH1cXFwiXFxuICAgID48L0xhYmVsPlxcbiAgICA8VGV4dEZpZWxkIFxcbiAgICAgIGNsYXNzPVxcXCJpbnB1dFxcXCIgXFxuICAgICAgcmV0dXJuS2V5VHlwZT1cXFwiZG9uZVxcXCIgXFxuICAgICAgW2F1dG9jb3JyZWN0XT1cXFwiZmFsc2VcXFwiXFxuICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cXFwibm9uZVxcXCJcXG4gICAgICBbc2VjdXJlXT1cXFwidHJ1ZVxcXCJcXG4gICAgICBoaW50PVxcXCJNaW4gNiBDaGFyYWN0ZXJcXFwiXFxuICAgICAgZm9ybUNvbnRyb2xOYW1lPVxcXCJwYXNzd29yZFxcXCJcXG4gICAgICAocmV0dXJuUHJlc3MpPVxcXCJvbkRvbmUoKVxcXCJcXG4gICAgICAjcGFzc3dvcmRFbFxcbiAgICAgID48L1RleHRGaWVsZD5cXG4gICAgPExhYmVsIFxcbiAgICAgICpuZ0lmPVxcXCIhcGFzc3dvcmRDb250cm9sSXNWYWxpZFxcXCJcXG4gICAgICB0ZXh0PVxcXCJNdXN0IGJlIDYgY2hhY2FjdGVycyBsb25nXFxcIlxcbiAgICA+PC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8U3RhY2tMYXlvdXQ+XFxuICAgIDxCdXR0b24gY2xhc3M9XFxcImJ0biBidG4tZmxhdFxcXCIgW3RleHRdPVxcXCJpc0xvZ2luID8gJ1NpZ24gVXAgaW5zdGVhZCcgOiAnTG9naW4gaW5zdGVhZCdcXFwiICh0YXApPVxcXCJvblN3aXRjaCgpXFxcIj48L0J1dHRvbj5cXG4gICAgPEJ1dHRvblxcbiAgICAgIHRleHQ9XFxcIkxvZ2luXFxcIlxcbiAgICAgIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgKHRhcCk9XFxcIm9uU3VibWl0KClcXFwiXFxuICAgICAgW2lzRW5hYmxlZF09XFxcImZvcm0udmFsaWRcXFwiXFxuICAgID48L0J1dHRvbj5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuPC9TdGFja0xheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWF1dGgnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGVtYWlsQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICBwYXNzd29yZENvbnRyb2xJc1ZhbGlkID0gdHJ1ZTtcbiAgaXNMb2dpbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ2VtYWlsRWwnLCB7c3RhdGljOiBmYWxzZX0pIGVtYWlsRWw6IEVsZW1lbnRSZWY8VGV4dEZpZWxkPjtcbiAgQFZpZXdDaGlsZCgncGFzc3dvcmRFbCcsIHtzdGF0aWM6IGZhbHNlfSkgcGFzc3dvcmRFbDogRWxlbWVudFJlZjxUZXh0RmllbGQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBcbiAgICAgICAge3VwZGF0ZU9uOiAnYmx1cicsIFxuICAgICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1cbiAgICAgIH0pLFxuICAgICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBcbiAgICAgICAge3VwZGF0ZU9uOiAnYmx1cicsIFxuICAgICAgICB2YWxpZGF0b3JzOiBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgdGhpcy5mb3JtLmdldCgnZW1haWwnKS5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xuICAgICAgdGhpcy5lbWFpbENvbnRyb2xJc1ZhbGlkID0gc3RhdHVzID09PSdWQUxJRCc7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICB0aGlzLnBhc3N3b3JkQ29udHJvbElzVmFsaWQgPSBzdGF0dXMgPT09J1ZBTElEJztcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2lnbmluKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RvZGF5J10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5lbWFpbEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnBhc3N3b3JkRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmRpc21pc3NTb2Z0SW5wdXQoKTsgLy90aGlzIGJsb2NrIGNoYW5nZXMgdGhlIGZvY3VzIGluIHRleHQgZmllbGQgc28gaXQgdXBkYXRlcyB0aGUgdmFsdWUgZXZlbiBwYXNzd29yZCBkaWRuJ3QgbG9zZSB0aGUgZm9jdXNcblxuICAgIGlmKCF0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZW1haWwgPSB0aGlzLmZvcm0uZ2V0KCdlbWFpbCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZTtcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICB0aGlzLmVtYWlsQ29udHJvbElzVmFsaWQgPSB0cnVlO1xuICAgIHRoaXMucGFzc3dvcmRDb250cm9sSXNWYWxpZCA9IHRydWU7IC8vcmVzZXR0aW5nIGVtYWlsIHBhc3N3b3JkIHZhbGlkYXRpb24gYmFjayB0byBkZWZhdWx0IHdoZW4gZm9ybSBpcyByZXNldHRpbmdcblxuICAgIGlmKHRoaXMuaXNMb2dpbikge1xuICAgICAgY29uc29sZS5sb2coXCJMb2dnaW5nIGluLi4uXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNpZ25uaW5nIGluLi4uXCIpO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGFsbGVuZ2VzJ10pO1xuXG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcbiAgfVxuXG4gIG9uRG9uZSgpIHtcbiAgICB0aGlzLmVtYWlsRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMucGFzc3dvcmRFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5wYXNzd29yZEVsLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICB9XG5cbiAgb25Td2l0Y2goKSB7XG4gICAgdGhpcy5pc0xvZ2luID0gIXRoaXMuaXNMb2dpbjtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0PiBcXG4gIDxCdXR0b24gXFxuICAgIGhlaWdodD1cXFwiNjBcXFwiIFxcbiAgICBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1yb3VuZGVkLWxnXFxcIiBcXG4gICAgdGV4dD1cXFwiQ29tcGxldGVkXFxcIiBcXG4gICAgKHRhcCk9XFxcIm9uQWN0aW9uKCdjb21wbGV0ZScpXFxcIiBcXG4gICAgKm5nSWY9XFxcImFjdGlvbiAhPT0gJ2NvbXBsZXRlJ1xcXCIgXFxuICAgIFtpc0VuYWJsZWRdPVxcXCIhZG9uZVxcXCJcXG4gID48L0J1dHRvbj4gPCEtLSBuZ0lmIG1ha2VzIHRoZSBidXR0b24gZGlzYXBwZWFyIElGIGl0IHJlY2VpdmUgJ2NvbXBsZXRlJyB2bGF1ZSB0byBkaXNwbGF5IGEgbGFiZWwoY2hlY2sgaWNvbikgYmVsb3ctLT5cXG4gIDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjYwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1yb3VuZGVkLWxnXFxcIiAqbmdJZj1cXFwiYWN0aW9uID09PSAnY29tcGxldGUnXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwMGM7XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGNsYXNzPVxcXCJmYSBidG4tYWx0IGFuaW1hdGUtYnRuXFxcIj5cXG4gICAgPC9MYWJlbD5cXG4gIDwvU3RhY2tMYXlvdXQ+XFxuICA8QnV0dG9uIFxcbiAgICBoZWlnaHQ9XFxcIjYwXFxcIiAgXFxuICAgIGNsYXNzPVxcXCJidG4gYnRuLWZhaWwgYnRuLXJvdW5kZWQtbGdcXFwiIFxcbiAgICB0ZXh0PVxcXCJGYWlsZFxcXCIgXFxuICAgICh0YXApPVxcXCJvbkFjdGlvbignZmFpbCcpXFxcIlxcbiAgICAqbmdJZj1cXFwiYWN0aW9uICE9PSAnZmFpbCdcXFwiXFxuICAgIFtpc0VuYWJsZWRdPVxcXCIhZG9uZVxcXCJcXG4gID48L0J1dHRvbj5cXG4gIDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjYwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1mYWlsIGJ0bi1yb3VuZGVkLWxnXFxcIiAqbmdJZj1cXFwiYWN0aW9uID09PSAnZmFpbCdcXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwiJiN4ZjAwZDtcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgY2xhc3M9XFxcImZhIGJ0bi1hbHQgYW5pbWF0ZS1idG5cXFwiPlxcbiAgICA8L0xhYmVsPlxcbiAgPC9TdGFja0xheW91dD5cXG4gIDxCdXR0b24gaGVpZ2h0PVxcXCI2MFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZmxhdCBidG4tcm91bmRlZC1sZ1xcXCIgW3RleHRdPVxcXCJjYW5jZWxUZXh0XFxcIiAodGFwKT1cXFwib25BY3Rpb24oJ2NhbmNlbCcpXFxcIj48L0J1dHRvbj5cXG48L0ZsZXhib3hMYXlvdXQ+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogQWRkIG1vYmlsZSBzdHlsZXMgZm9yIHRoZSBjb21wb25lbnQgaGVyZS4gICovXFxuLyoqXFxyXFxuICogQ29udmVuaWVudCBzaW5nbGUgaW1wb3J0IGZvciBsaWdodCB2YXJpYWJsZXNcXHJcXG4gKiBJbmNsdWRlcyBiYXNlIHZhcmlhYmxlcyB3aXRoIGxpZ2h0IG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXHJcXG4gKiBMaWdodCB2YXJpYWJsZSBvdmVycmlkZXNcXHJcXG4gKiovXFxuRmxleGJveExheW91dCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmJ0biB7XFxuICB3aWR0aDogMzAwOyB9XFxuXFxuLmJ0bi1zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5idG4tZmFpbCB7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG4gIGJvcmRlci13aWR0aDogMTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5idG4tc3VjY2VzczpkaXNhYmxlZCxcXG4uYnRuLWZhaWw6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGNvbG9yOiAjNzc3Nzc3O1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjOyB9XFxuXFxuLmJ0bi1hbHQge1xcbiAgZm9udC1zaXplOiAzMDtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLmFuaW1hdGUtYnRuIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS11cDtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgfVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMCk7IH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXlTdGF0dXMgfSBmcm9tICcuLi9kYXkubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQE91dHB1dCgpIGFjdGlvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5U3RhdHVzPigpO1xuICBASW5wdXQoKSBjYW5jZWxUZXh0ID0gJ0NhbmNlbCc7XG4gIEBJbnB1dCgpIGNob3NlbjogJ2NvbXBsZXRlJyB8ICdmYWlsJyA9IG51bGw7XG4gIGFjdGlvbjogJ2NvbXBsZXRlJyB8ICdmYWlsJyA9IG51bGw7XG4gIGRvbmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZihjaGFuZ2VzLmNob3Nlbikge1xuICAgICAgdGhpcy5hY3Rpb24gPSBjaGFuZ2VzLmNob3Nlbi5jdXJyZW50VmFsdWU7XG5cbiAgICAgIGlmKGNoYW5nZXMuY2hvc2VuLmN1cnJlbnRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uQWN0aW9uKGFjdGlvbjogJ2NvbXBsZXRlJyB8ICdmYWlsJyB8ICdjYW5jZWwnKSB7XG4gICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICBsZXQgc3RhdHVzID0gRGF5U3RhdHVzLk9wZW47XG4gICAgaWYoYWN0aW9uID09PSAnY29tcGxldGUnKSB7XG4gICAgICBzdGF0dXMgPSBEYXlTdGF0dXMuQ29tcGxldGVkO1xuICAgICAgdGhpcy5hY3Rpb24gPSAnY29tcGxldGUnO1xuICAgIH0gZWxzZSBpZihhY3Rpb24gPT09ICdmYWlsJykge1xuICAgICAgc3RhdHVzID0gRGF5U3RhdHVzLkZhaWxlZDtcbiAgICAgIHRoaXMuYWN0aW9uID0gJ2ZhaWwnO1xuICAgIH0gZWxzZSBpZihhY3Rpb24gPT09ICdjYW5jZWwnKSB7XG4gICAgICBhY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYWN0aW9uU2VsZWN0LmVtaXQoc3RhdHVzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENoYWxsZW5nZUFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZS1hY3Rpb25zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQ2hhbGxlbmdlQWN0aW9uc0NvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0NoYWxsZW5nZUFjdGlvbnNDb21wb25lbnRdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VBY3Rpb25zTW9kdWxlIHt9IiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbkZsZXhib3hMYXlvdXQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyMDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxGbGV4Ym94TGF5b3V0PlxcblxcdDxMYWJlbCBjbGFzcz1cXFwiaDFcXFwiIFt0ZXh0XT1cXFwibG9hZGVkRGF0ZSB8IGRhdGVcXFwiPjwvTGFiZWw+XFxuXFx0PG5zLWNoYWxsZW5nZS1hY3Rpb25zIFxcblxcdFxcdChhY3Rpb25TZWxlY3QpPVxcXCJvbkhhbmRsZUlucHV0KCRldmVudClcXFwiXFxuXFx0XFx0W2Nob3Nlbl09XFxcImxvYWRlZFN0YXR1c1xcXCJcXG5cXHRcXG5cXHQ+PC9ucy1jaGFsbGVuZ2UtYWN0aW9ucz5cXG48L0ZsZXhib3hMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRGF5U3RhdHVzIH0gZnJvbSAnLi4vZGF5Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtZGF5LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RheS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RheS1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF5TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2FkZWREYXRlOiBEYXRlO1xuICBsb2FkZWRTdGF0dXM6ICdjb21wbGV0ZScgfCAnZmFpbCcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxQYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBwYXJzZWRQYXJhbXMgPSAodGhpcy5tb2RhbFBhcmFtcy5jb250ZXh0IGFzIHsgZGF0ZTogRGF0ZSwgc3RhdHVzOiBEYXlTdGF0dXMgfSk7XG4gICAgdGhpcy5sb2FkZWREYXRlID0gcGFyc2VkUGFyYW1zLmRhdGU7XG4gICAgaWYocGFyc2VkUGFyYW1zLnN0YXR1cyA9PT0gRGF5U3RhdHVzLkNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5sb2FkZWRTdGF0dXMgPSAnY29tcGxldGUnO1xuICAgIH0gZWxzZSBpZihwYXJzZWRQYXJhbXMuc3RhdHVzID09PSBEYXlTdGF0dXMuRmFpbGVkKSB7XG4gICAgICB0aGlzLmxvYWRlZFN0YXR1cyA9ICdmYWlsJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkZWRTdGF0dXMgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgb25IYW5kbGVJbnB1dChhY3Rpb246IERheVN0YXR1cykge1xuICAgIHRoaXMubW9kYWxQYXJhbXMuY2xvc2VDYWxsYmFjayhhY3Rpb24pO1xuICB9XG5cbn1cbiIsImV4cG9ydCBlbnVtIERheVN0YXR1cyB7XG4gICAgT3BlbiwgXG4gICAgQ29tcGxldGVkLCBcbiAgICBGYWlsZWQgXG59IFxuXG5leHBvcnQgaW50ZXJmYWNlIERheSB7XG4gICAgZGF5SW5Nb250aDogbnVtYmVyO1xuICAgIGRheUluV2VlazogbnVtYmVyO1xuICAgIGRhdGU6IERhdGU7XG4gICAgc3RhdHVzOiBEYXlTdGF0dXM7XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBY3Rpb25CYXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtBY3Rpb25CYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fSIsImltcG9ydCB7IEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVJU2VydmljZSB7XG4gIHByaXZhdGUgX2RyYXdlclN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPihudWxsKTtcbiAgcHJpdmF0ZSBfcm9vdFZDUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGdldCBkcmF3ZXJTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhd2VyU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5fZHJhd2VyU3RhdGUubmV4dChudWxsKTtcbiAgfVxuXG4gIHNldFJvb3RWQ1JlZih2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHRoaXMuX3Jvb3RWQ1JlZiA9IHZjUmVmO1xuICB9XG5cbiAgZ2V0Um9vdFZDUmVmKCkge1xuICAgIHJldHVybiB0aGlzLl9yb290VkNSZWY7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiBBZGQgbW9iaWxlIHN0eWxlcyBmb3IgdGhlIGNvbXBvbmVudCBoZXJlLiAgKi9cXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIFt0aXRsZV09XFxcInRpdGxlXFxcIiAobG9hZGVkKT1cXFwib25Mb2FkZWRBY3Rpb25CYXIoKVxcXCI+XFxuICA8TmF2aWdhdGlvbkJ1dHRvblxcbiAgICB0ZXh0PVxcXCJCYWNrXFxcIlxcbiAgICBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCJcXG4gICAgKm5nSWY9XFxcImNhbkdvQmFja1xcXCJcXG4gICAgKHRhcCk9XFxcIm9uR29CYWNrKClcXFwiXFxuICA+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgPE5hdmlnYXRpb25CdXR0b25cXG4gICAgKm5nSWY9XFxcImFuZHJvaWQgJiYgaGFzTWVudVxcXCJcXG4gICAgaWNvbj1cXFwicmVzOi8vbWVudV9ibGFja1xcXCJcXG4gICAgKHRhcCk9XFxcIm9uVG9nZ2xlTWVudSgpXFxcIlxcbiAgPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gIDxBY3Rpb25JdGVtXFxuICAgICpuZ0lmPVxcXCIhYW5kcm9pZCAmJiBoYXNNZW51XFxcIlxcbiAgICBpb3MucG9zaXRpb249XFxcImxlZnRcXFwiXFxuICAgICh0YXApPVxcXCJvblRvZ2dsZU1lbnUoKVxcXCJcXG4gID5cXG4gICAgPExhYmVsIHRleHQ9XFxcIiYjeGYwYzk7XFxcIiBjbGFzcz1cXFwiZmEgbS01XFxcIj48L0xhYmVsPlxcbiAgPC9BY3Rpb25JdGVtPlxcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiA8IS0tIGRlZmF1bHQgbmF0aXZlc2NyaXB0ICAtLT5cXG48L0FjdGlvbkJhcj5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFjdGlvbi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dCYWNrQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KCkgaGFzTWVudSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgdWlTZXJ2aWNlOiBVSVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBnZXQgYW5kcm9pZCgpIHtcbiAgICByZXR1cm4gaXNBbmRyb2lkO1xuICB9XG5cbiAgZ2V0IGNhbkdvQmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY2FuR29CYWNrKCkgJiYgdGhpcy5zaG93QmFja0J1dHRvbjtcbiAgfVxuXG4gIG9uR29CYWNrKCkge1xuICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgb25Mb2FkZWRBY3Rpb25CYXIoKSB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgY29uc3QgYW5kcm9pZFRvb2xiYXIgPSB0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdGl2ZVZpZXc7XG4gICAgICBjb25zdCBiYWNrQnV0dG9uID0gYW5kcm9pZFRvb2xiYXIuZ2V0TmF2aWdhdGlvbkljb24oKTtcbiAgICAgIGxldCBjb2xvciA9ICcjMTcxNzE3JztcbiAgICAgIGlmICh0aGlzLmhhc01lbnUpIHtcbiAgICAgICAgY29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICB9XG4gICAgICBpZiAoYmFja0J1dHRvbikge1xuICAgICAgICBiYWNrQnV0dG9uLnNldENvbG9yRmlsdGVyKFxuICAgICAgICAgIGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcihjb2xvciksXG4gICAgICAgICAgKDxhbnk+YW5kcm9pZC5ncmFwaGljcykuUG9ydGVyRHVmZi5Nb2RlLlNSQ19BVE9QXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGVNZW51KCkge1xuICAgIHRoaXMudWlTZXJ2aWNlLnRvZ2dsZURyYXdlcigpO1xuICB9XG59XG4iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxuLy8gQSB0cmFkaXRpb25hbCBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gc3RhcnRzIGJ5IGluaXRpYWxpemluZyBnbG9iYWwgb2JqZWN0cywgc2V0dGluZyB1cCBnbG9iYWwgQ1NTIHJ1bGVzLCBjcmVhdGluZywgYW5kIG5hdmlnYXRpbmcgdG8gdGhlIG1haW4gcGFnZS5cbi8vIEFuZ3VsYXIgYXBwbGljYXRpb25zIG5lZWQgdG8gdGFrZSBjYXJlIG9mIHRoZWlyIG93biBpbml0aWFsaXphdGlvbjogbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsIHNvIHdlIHByb3ZpZGUgYSB3cmFwcGVyIHBsYXRmb3JtIG9iamVjdCwgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljLFxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==