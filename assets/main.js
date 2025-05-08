/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://eleventy/./src/styles/main.css?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./src/styles/main.css\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper/modules'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n// import Swiper JS\n\n\n\n\n\nvar swiper = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.swiper', {\n  // configure Swiper to use modules\n  modules: [Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper/modules'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper/modules'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],\n  slidesPerView: 5,\n  direction: getDirection(),\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev',\n  },\n  on: {\n    resize: function () {\n      swiper.changeDirection(getDirection());\n    },\n  },\n  breakpoints: {\n    // when window width is >= 320px\n    320: {\n      slidesPerView: 1,\n      spaceBetween: 20\n    },\n    // when window width is >= 480px\n    480: {\n      slidesPerView: 1,\n      spaceBetween: 30\n    },\n    // when window width is >= 640px\n    640: {\n      slidesPerView: 4,\n      spaceBetween: 40\n    }\n  }\n});\n\nvar swiper2 = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'swiper'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.swiper2', {\n  // configure Swiper to use modules\n  speed: 600,\n  parallax: true,\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true,\n  },\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\",\n  },\n});\n\nfunction getDirection() {\n  var windowWidth = window.innerWidth;\n  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';\n\n  return direction;\n}\n\n//# sourceURL=webpack://eleventy/./src/scripts/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;