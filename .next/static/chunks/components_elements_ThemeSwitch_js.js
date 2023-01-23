"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_elements_ThemeSwitch_js"],{

/***/ "./components/elements/ThemeSwitch.js":
/*!********************************************!*\
  !*** ./components/elements/ThemeSwitch.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\n// import \"./styles.css\";\nfunction ThemeSwitch() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function() {\n        return JSON.parse(localStorage.getItem(\"toggleTheme\")) || \"light-theme\";\n    }), toggleTheme = ref[0], setToggleTheme = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        localStorage.setItem(\"toggleTheme\", JSON.stringify(toggleTheme));\n        document.body.classList.add(toggleTheme);\n        return function() {\n            document.body.classList.remove(toggleTheme);\n        };\n    }, [\n        toggleTheme\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"theme-switch\",\n        onClick: function() {\n            return toggleTheme === \"light-theme\" ? setToggleTheme(\"dark-theme\") : setToggleTheme(\"light-theme\");\n        },\n        children: toggleTheme === \"light-theme\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n            className: \"ri-moon-line\"\n        }, void 0, false, {\n            fileName: \"/home/decrypt-3/dev-01-23/themeforest-WXesGeBK-gigo-metaverse-web3-igoido-token-launchpad-nextjs-app/package/gigo/components/elements/ThemeSwitch.js\",\n            lineNumber: 22,\n            columnNumber: 46\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n            className: \"ri-sun-line\"\n        }, void 0, false, {\n            fileName: \"/home/decrypt-3/dev-01-23/themeforest-WXesGeBK-gigo-metaverse-web3-igoido-token-launchpad-nextjs-app/package/gigo/components/elements/ThemeSwitch.js\",\n            lineNumber: 22,\n            columnNumber: 81\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/decrypt-3/dev-01-23/themeforest-WXesGeBK-gigo-metaverse-web3-igoido-token-launchpad-nextjs-app/package/gigo/components/elements/ThemeSwitch.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this));\n}\n_s(ThemeSwitch, \"xqUFNvs1nTvV/vNTQE8ckkfrPso=\");\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VsZW1lbnRzL1RoZW1lU3dpdGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDs7QUFDbEQsRUFBeUI7U0FDaEJHLFdBQVcsR0FBRyxDQUFDOztJQUNwQixHQUFLLENBQWlDRCxHQUVyQyxHQUZxQ0EsK0NBQVEsQ0FDMUMsUUFBUTtRQUFGRSxNQUFNLENBQU5BLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFhLGtCQUFNLENBQWE7UUFEbkVDLFdBQVcsR0FBb0JOLEdBRXJDLEtBRm1CTyxjQUFjLEdBQUlQLEdBRXJDO0lBQ0RELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYkssWUFBWSxDQUFDSSxPQUFPLENBQUMsQ0FBYSxjQUFFTixJQUFJLENBQUNPLFNBQVMsQ0FBQ0gsV0FBVztRQUM5REksUUFBUSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDUCxXQUFXO1FBQ3ZDLE1BQU0sQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNWSSxRQUFRLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUNSLFdBQVc7UUFDOUMsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDQTtRQUFBQSxXQUFXO0lBQUEsQ0FBQztJQUloQixNQUFNLDZFQUNEUyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFjO1FBQ3pCQyxPQUFPLEVBQUUsUUFBUTtZQUFGWCxNQUFNLENBQU5BLFdBQVcsS0FBSyxDQUFhLGVBQUdDLGNBQWMsQ0FBQyxDQUFZLGVBQUlBLGNBQWMsQ0FBQyxDQUFhOztrQkFHekdELFdBQVcsS0FBSyxDQUFhLDJGQUFJWSxDQUFDO1lBQUNGLFNBQVMsRUFBQyxDQUFjOzs7OzsrRkFBU0UsQ0FBQztZQUFDRixTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs7Ozs7QUFHMUcsQ0FBQztHQXRCUWYsV0FBVztLQUFYQSxXQUFXO0FBd0JwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZWxlbWVudHMvVGhlbWVTd2l0Y2guanM/NjM4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuZnVuY3Rpb24gVGhlbWVTd2l0Y2goKSB7XHJcbiAgICBjb25zdCBbdG9nZ2xlVGhlbWUsIHNldFRvZ2dsZVRoZW1lXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2dnbGVUaGVtZVwiKSkgfHwgXCJsaWdodC10aGVtZVwiXHJcbiAgICApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZ2dsZVRoZW1lXCIsIEpTT04uc3RyaW5naWZ5KHRvZ2dsZVRoZW1lKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRvZ2dsZVRoZW1lKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlVGhlbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbdG9nZ2xlVGhlbWVdKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtc3dpdGNoXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlVGhlbWUgPT09IFwibGlnaHQtdGhlbWVcIiA/IHNldFRvZ2dsZVRoZW1lKFwiZGFyay10aGVtZVwiKSA6IHNldFRvZ2dsZVRoZW1lKFwibGlnaHQtdGhlbWVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3RvZ2dsZVRoZW1lID09PSBcImxpZ2h0LXRoZW1lXCIgPyA8aSBjbGFzc05hbWU9XCJyaS1tb29uLWxpbmVcIj48L2k+IDogPGkgY2xhc3NOYW1lPVwicmktc3VuLWxpbmVcIj48L2k+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVTd2l0Y2giLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9nZ2xlVGhlbWUiLCJzZXRUb2dnbGVUaGVtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/elements/ThemeSwitch.js\n");

/***/ })

}]);