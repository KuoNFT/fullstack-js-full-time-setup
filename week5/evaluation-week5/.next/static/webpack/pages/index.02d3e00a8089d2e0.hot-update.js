"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_crusi_OneDrive_Bureau_lacapsule_fullstack_js_week5_evaluation_week5_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_crusi_OneDrive_Bureau_lacapsule_fullstack_js_week5_evaluation_week5_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_crusi_OneDrive_Bureau_lacapsule_fullstack_js_week5_evaluation_week5_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    // Insert your code here\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), countries = ref[0], setCountries = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchFlags = function() {\n            var _ref = _asyncToGenerator(C_Users_crusi_OneDrive_Bureau_lacapsule_fullstack_js_week5_evaluation_week5_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return C_Users_crusi_OneDrive_Bureau_lacapsule_fullstack_js_week5_evaluation_week5_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"https://countriesnow.space/api/v0.1/countries/flag/images\");\n                        case 2:\n                            response = _ctx.sent;\n                            _ctx.next = 5;\n                            return response.json();\n                        case 5:\n                            data = _ctx.sent;\n                            setCountries(data.data);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchFlags() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchFlags();\n        console.log(fetchFlags);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().globalContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: \"My World Tour\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().counter),\n                children: \"Number of countries: 0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().countriesContainer)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\crusi\\\\OneDrive\\\\Bureau\\\\lacapsule-fullstack-js\\\\week5\\\\evaluation-week5\\\\components\\\\Home.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDTjs7QUFFekMsU0FBU0csSUFBSSxHQUFHOztJQUVkLHdCQUF3QjtJQUN4QixJQUFrQ0YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5oRCxTQU1rQixHQUFrQkEsR0FBWSxHQUE5QixFQU5sQixZQU1nQyxHQUFJQSxHQUFZLEdBQWhCO0lBRTlCQyxnREFBUyxDQUFDLFdBQUk7UUFFWixJQUFNSSxVQUFVO3VCQUFHLDROQUFZO29CQUN2QkMsUUFBUSxFQUNSQyxJQUFJOzs7OzttQ0FEYUMsS0FBSyxDQUFDLDJEQUEyRCxDQUFDOzs0QkFBbkZGLFFBQVEsWUFBMkU7O21DQUN0RUEsUUFBUSxDQUFDRyxJQUFJLEVBQUU7OzRCQUE1QkYsSUFBSSxZQUF3Qjs0QkFDbENILFlBQVksQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUM7Ozs7OzthQUN2Qjs0QkFKSUYsVUFBVTs7O1dBSWQ7UUFDREEsVUFBVSxFQUFFLENBQUM7UUFDYkssT0FBTyxDQUFDQyxHQUFHLENBQUNOLFVBQVUsQ0FBQztLQUV6QixFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBRWQsZ0ZBQXNCOzswQkFDcEMsOERBQUNnQixJQUFFO2dCQUFDRixTQUFTLEVBQUVkLHNFQUFZOzBCQUFFLGVBQWE7Ozs7O29CQUFLOzBCQUMvQyw4REFBQ2tCLE1BQUk7Z0JBQUNKLFNBQVMsRUFBRWQsd0VBQWM7MEJBQUUsd0JBQXNCOzs7OztvQkFBTzswQkFDOUQsOERBQUNhLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWQsbUZBQXlCOzs7OztvQkFFbkM7Ozs7OztZQUNGLENBQ047Q0FDSDtHQTFCUUcsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBNkJiLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLmpzPzRiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgLy8gSW5zZXJ0IHlvdXIgY29kZSBoZXJlXG4gIGNvbnN0IFtjb3VudHJpZXMsIHNldENvdW50cmllc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBcbiAgICBjb25zdCBmZXRjaEZsYWdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jb3VudHJpZXNub3cuc3BhY2UvYXBpL3YwLjEvY291bnRyaWVzL2ZsYWcvaW1hZ2VzJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0Q291bnRyaWVzKGRhdGEuZGF0YSlcbiAgICAgfVxuICAgICBmZXRjaEZsYWdzKCk7XG4gICAgIGNvbnNvbGUubG9nKGZldGNoRmxhZ3MpXG5cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdsb2JhbENvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk15IFdvcmxkIFRvdXI8L2gxPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY291bnRlcn0+TnVtYmVyIG9mIGNvdW50cmllczogMDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRyaWVzQ29udGFpbmVyfT5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJjb3VudHJpZXMiLCJzZXRDb3VudHJpZXMiLCJmZXRjaEZsYWdzIiwicmVzcG9uc2UiLCJkYXRhIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImdsb2JhbENvbnRhaW5lciIsImgxIiwidGl0bGUiLCJzcGFuIiwiY291bnRlciIsImNvdW50cmllc0NvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home.js\n");

/***/ })

});