/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"globalContainer\": \"Home_globalContainer__Oq0Va\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"counter\": \"Home_counter__Y7ThU\",\n\t\"countriesContainer\": \"Home_countriesContainer__oul37\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZhbHVhdGlvbi13ZWVrNS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJnbG9iYWxDb250YWluZXJcIjogXCJIb21lX2dsb2JhbENvbnRhaW5lcl9fT3EwVmFcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiY291bnRlclwiOiBcIkhvbWVfY291bnRlcl9fWTdUaFVcIixcblx0XCJjb3VudHJpZXNDb250YWluZXJcIjogXCJIb21lX2NvdW50cmllc0NvbnRhaW5lcl9fb3VsMzdcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Home() {\n    const { 0: countries , 1: setCountries  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchFlags = async ()=>{\n            const response = await fetch(\"https://countriesnow.space/api/v0.1/countries/flag/images\");\n            const data = await response.json();\n            setCountries(data.data);\n        };\n        fetchFlags();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().globalContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"My World Tour\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().counter),\n                children: [\n                    \"Number of countries: \",\n                    countries.length\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().countriesContainer)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStDO0FBQ0g7QUFFNUMsU0FBU0csSUFBSSxHQUFHO0lBQ2QsTUFBTSxFQUpSLEdBSVNDLFNBQVMsR0FKbEIsR0FJb0JDLFlBQVksTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFOUNDLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1JLFVBQVUsR0FBRyxVQUFZO1lBQzdCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsMkRBQTJELENBQUM7WUFDekYsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO1lBQ2xDTCxZQUFZLENBQUNJLElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUM7U0FDekI7UUFFREgsVUFBVSxFQUFFLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFFWixnRkFBc0I7OzBCQUNwQyw4REFBQ2MsSUFBRTtnQkFBQ0YsU0FBUyxFQUFFWixzRUFBWTswQkFBRSxlQUFhOzs7OztvQkFBSzswQkFDL0MsOERBQUNnQixNQUFJO2dCQUFDSixTQUFTLEVBQUVaLHdFQUFjOztvQkFBRSx1QkFBcUI7b0JBQUNJLFNBQVMsQ0FBQ2MsTUFBTTs7Ozs7O29CQUFROzBCQUMvRSw4REFBQ1AsS0FBRztnQkFBQ0MsU0FBUyxFQUFFWixtRkFBeUI7Ozs7O29CQUVuQzs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBR0QsaUVBQWVHLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2YWx1YXRpb24td2VlazUvLi9jb21wb25lbnRzL0hvbWUuanM/NGIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NvdW50cmllcywgc2V0Q291bnRyaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRmxhZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NvdW50cmllc25vdy5zcGFjZS9hcGkvdjAuMS9jb3VudHJpZXMvZmxhZy9pbWFnZXMnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRDb3VudHJpZXMoZGF0YS5kYXRhKTtcbiAgICB9O1xuXG4gICAgZmV0Y2hGbGFncygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdsb2JhbENvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk15IFdvcmxkIFRvdXI8L2gxPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY291bnRlcn0+TnVtYmVyIG9mIGNvdW50cmllczoge2NvdW50cmllcy5sZW5ndGh9PC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudHJpZXNDb250YWluZXJ9PlxuICAgICAgICB7LyogSW5zw6lyZXogbGUgcmVuZHUgZGVzIGRyYXBlYXV4IGRlcyBwYXlzIGljaSAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImNvdW50cmllcyIsInNldENvdW50cmllcyIsImZldGNoRmxhZ3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJnbG9iYWxDb250YWluZXIiLCJoMSIsInRpdGxlIiwic3BhbiIsImNvdW50ZXIiLCJsZW5ndGgiLCJjb3VudHJpZXNDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ \"./components/Home.js\");\n\n\nfunction Index() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\pages\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBc0M7QUFFdEMsU0FBU0MsS0FBSyxHQUFHO0lBQ2YscUJBQU8sOERBQUNELHdEQUFJOzs7O1lBQUcsQ0FBQztDQUNqQjtBQUVELGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmFsdWF0aW9uLXdlZWs1Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIDxIb21lIC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJIb21lIiwiSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();