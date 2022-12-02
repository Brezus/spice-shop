"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n/* harmony import */ var _styles_spiceStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/spiceStyles */ \"./styles/spiceStyles.js\");\n/* harmony import */ var _context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/ShoppingCartContext */ \"./context/ShoppingCartContext.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Cart */ \"./components/Cart.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  body {\\n    overflow: \",\n        \";\\n    position: relative;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  background-color: \"rgba(0, 0, 0, 0.3)\"};\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 3rem;\\n  display: flex;\\n  justify-content: ',\n        \";\\n  border: \",\n        \";\\n  align-items: center;\\n  width: \",\n        \";\\n  margin-inline: auto;\\n  padding-inline: 1em;\\n  border-radius: \",\n        \";\\n  font-family: \",\n        \";\\n\\n\\n  ul {\\n    display: flex;\\n    list-style: none;\\n    gap: 1em;\\n\\n    li {\\n      font-size: .8em;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  cursor: pointer;\\n  z-index: 2;\\n  color: \",\n        \";\\n  font-size: 1.1rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  z-index: 2;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.createGlobalStyle)(_templateObject(), function(props) {\n    return props.cartOpend ? \"hidden\" : \"initial\";\n});\nvar Navigation = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nav.withConfig({\n    displayName: \"Nav__Navigation\",\n    componentId: \"sc-90c41e48-0\"\n})(_templateObject1(), function(props) {\n    return props.details ? \"start\" : \"space-around\";\n}, function(props) {\n    return props.details ? \"none\" : \"1px solid white;\";\n}, function(param) {\n    var theme = param.theme;\n    return theme.width;\n}, function(param) {\n    var theme = param.theme;\n    return theme.bRadius;\n}, function(param) {\n    var theme = param.theme;\n    return theme.ffM;\n});\n_c = Navigation;\nvar H1 = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h1.withConfig({\n    displayName: \"Nav__H1\",\n    componentId: \"sc-90c41e48-1\"\n})(_templateObject2(), function(props) {\n    return props.dark ? \"black\" : \"white\";\n});\n_c1 = H1;\nvar Li = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].li.withConfig({\n    displayName: \"Nav__Li\",\n    componentId: \"sc-90c41e48-2\"\n})(_templateObject3());\n_c2 = Li;\nfunction Nav() {\n    _s();\n    var ref = (0,_context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__.useAppContext)(), openCt = ref.openCt, newItemAdded = ref.newItemAdded, newItemsQuant = ref.newItemsQuant, cartItems = ref.cartItems, openCart = ref.openCart;\n    var ref1 = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(), spice = ref1.query.spice;\n    var chevronStyles = {\n        fontSize: \"2rem\",\n        color: \"black\",\n        cursor: \"pointer\",\n        position: \"relative\",\n        left: \"-85%\"\n    };\n    var chevronContStyles = {\n        zIndex: \"2\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: spice ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Navigation, {\n            details: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    style: chevronContStyles,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_9__.TiChevronLeft, {\n                        style: chevronStyles\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                        lineNumber: 81,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                lineNumber: 79,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n            lineNumber: 78,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Navigation, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(H1, {\n                        children: \"feelin spicy\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                    lineNumber: 87,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Li, {\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                children: \"home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"#about-us\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Li, {\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                children: \"about us\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"#spices\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Li, {\n                                style: {\n                                    cursor: \"pointer\"\n                                },\n                                children: \"spices\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_5__.CartCont, {\n                    onClick: openCt,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_9__.TiShoppingCart, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, this),\n                        newItemAdded >= 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: newItemsQuant >= 99 ? newItemsQuant + \"+\" : newItemsQuant\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                            lineNumber: 104,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                    lineNumber: 101,\n                    columnNumber: 11\n                }, this),\n                openCart && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    items: cartItems\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n                    lineNumber: 107,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\components\\\\Nav.js\",\n            lineNumber: 86,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Nav, \"piOPbk6W4XtDHnd9+hq8YYFhtKU=\", false, function() {\n    return [\n        _context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__.useAppContext,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c3 = Nav;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c1, \"H1\");\n$RefreshReg$(_c2, \"Li\");\n$RefreshReg$(_c3, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2dDQUN0QztzQ0FDUCw4REFBQ2pDLGtEQUFJOzRCQUFDc0MsSUFBSSxFQUFDLFdBQVc7c0NBQ3BCLDRFQUFDbEIsRUFBRTtnQ0FBQ29CLEtBQUssRUFBRTtvQ0FBRVAsTUFBTSxFQUFFLFNBQVM7aUNBQUU7MENBQUUsVUFBUTs7Ozs7b0NBQUs7Ozs7O2dDQUMxQztzQ0FDUCw4REFBQ2pDLGtEQUFJOzRCQUFDc0MsSUFBSSxFQUFDLFNBQVM7c0NBQ2xCLDRFQUFDbEIsRUFBRTtnQ0FBQ29CLEtBQUssRUFBRTtvQ0FBRVAsTUFBTSxFQUFFLFNBQVM7aUNBQUU7MENBQUUsUUFBTTs7Ozs7b0NBQUs7Ozs7O2dDQUN4Qzs7Ozs7O3dCQUNKOzhCQUNMLDhEQUFDL0IseURBQVE7b0JBQUN3QyxPQUFPLEVBQUVuQixNQUFNOztzQ0FDdkIsOERBQUNwQiwwREFBYzs7OztnQ0FBRzt3QkFDakJxQixZQUFZLElBQUksQ0FBQyxrQkFDaEIsOERBQUNtQixHQUFDO3NDQUFFbEIsYUFBYSxJQUFJLEVBQUUsR0FBR0EsYUFBYSxHQUFHLEdBQUcsR0FBR0EsYUFBYTs7Ozs7Z0NBQUs7Ozs7Ozt3QkFFM0Q7Z0JBQ1ZFLFFBQVEsa0JBQUksOERBQUN0Qiw2Q0FBSTtvQkFBQ3VDLEtBQUssRUFBRWxCLFNBQVM7Ozs7O3dCQUFJOzs7Ozs7Z0JBQzVCO3FCQUVkLENBQ0o7QUFDSCxDQUFDO0dBdER1QkosR0FBRzs7UUFFdkJsQix1RUFBYTtRQUdYTCxrREFBUzs7O0FBTFN1QixNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IFRpQ2hldnJvbkxlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGlcIlxyXG5pbXBvcnQgeyBDYXJ0Q29udCB9IGZyb20gXCIuLi9zdHlsZXMvc3BpY2VTdHlsZXNcIlxyXG5pbXBvcnQgeyBUaVNob3BwaW5nQ2FydCB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiXHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9TaG9wcGluZ0NhcnRDb250ZXh0XCJcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vQ2FydFwiXHJcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgYm9keSB7XHJcbiAgICBvdmVyZmxvdzogJHsocHJvcHMpID0+IChwcm9wcy5jYXJ0T3BlbmQgPyBcImhpZGRlblwiIDogXCJpbml0aWFsXCIpfTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjMpXCJ9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogM3JlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogJHsocHJvcHMpID0+IChwcm9wcy5kZXRhaWxzID8gXCJzdGFydFwiIDogXCJzcGFjZS1hcm91bmRcIil9O1xyXG4gIGJvcmRlcjogJHsocHJvcHMpID0+IChwcm9wcy5kZXRhaWxzID8gXCJub25lXCIgOiBcIjFweCBzb2xpZCB3aGl0ZTtcIil9O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2lkdGh9O1xyXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XHJcbiAgcGFkZGluZy1pbmxpbmU6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJSYWRpdXN9O1xyXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZmTX07XHJcblxyXG5cclxuICB1bCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGdhcDogMWVtO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZGFyayA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIil9O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5gXHJcblxyXG5jb25zdCBMaSA9IHN0eWxlZC5saWBcclxuICB6LWluZGV4OiAyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgeyBvcGVuQ3QsIG5ld0l0ZW1BZGRlZCwgbmV3SXRlbXNRdWFudCwgY2FydEl0ZW1zLCBvcGVuQ2FydCB9ID1cclxuICAgIHVzZUFwcENvbnRleHQoKVxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IHNwaWNlIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGNoZXZyb25TdHlsZXMgPSB7XHJcbiAgICBmb250U2l6ZTogXCIycmVtXCIsXHJcbiAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBsZWZ0OiBcIi04NSVcIixcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZXZyb25Db250U3R5bGVzID0geyB6SW5kZXg6IFwiMlwiIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzcGljZSA/IChcclxuICAgICAgICA8TmF2aWdhdGlvbiBkZXRhaWxzPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjaGV2cm9uQ29udFN0eWxlc30+XHJcbiAgICAgICAgICAgICAgPFRpQ2hldnJvbkxlZnQgc3R5bGU9e2NoZXZyb25TdHlsZXN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmF2aWdhdGlvbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TmF2aWdhdGlvbj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgPEgxPmZlZWxpbiBzcGljeTwvSDE+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cclxuICAgICAgICAgICAgICA8TGkgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5ob21lPC9MaT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI2Fib3V0LXVzXCI+XHJcbiAgICAgICAgICAgICAgPExpIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+YWJvdXQgdXM8L0xpPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjc3BpY2VzXCI+XHJcbiAgICAgICAgICAgICAgPExpIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+c3BpY2VzPC9MaT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxDYXJ0Q29udCBvbkNsaWNrPXtvcGVuQ3R9PlxyXG4gICAgICAgICAgICA8VGlTaG9wcGluZ0NhcnQgLz5cclxuICAgICAgICAgICAge25ld0l0ZW1BZGRlZCA+PSAxICYmIChcclxuICAgICAgICAgICAgICA8cD57bmV3SXRlbXNRdWFudCA+PSA5OSA/IG5ld0l0ZW1zUXVhbnQgKyBcIitcIiA6IG5ld0l0ZW1zUXVhbnR9PC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9DYXJ0Q29udD5cclxuICAgICAgICAgIHtvcGVuQ2FydCAmJiA8Q2FydCBpdGVtcz17Y2FydEl0ZW1zfSAvPn1cclxuICAgICAgICA8L05hdmlnYXRpb24+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiY3NzIiwidXNlUm91dGVyIiwiTGluayIsIlRpQ2hldnJvbkxlZnQiLCJDYXJ0Q29udCIsIlRpU2hvcHBpbmdDYXJ0IiwidXNlQXBwQ29udGV4dCIsIkNhcnQiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkdsb2JhbFN0eWxlIiwicHJvcHMiLCJjYXJ0T3BlbmQiLCJOYXZpZ2F0aW9uIiwibmF2IiwiZGV0YWlscyIsInRoZW1lIiwid2lkdGgiLCJiUmFkaXVzIiwiZmZNIiwiSDEiLCJoMSIsImRhcmsiLCJMaSIsImxpIiwiTmF2Iiwib3BlbkN0IiwibmV3SXRlbUFkZGVkIiwibmV3SXRlbXNRdWFudCIsImNhcnRJdGVtcyIsIm9wZW5DYXJ0IiwicXVlcnkiLCJzcGljZSIsImNoZXZyb25TdHlsZXMiLCJmb250U2l6ZSIsImNvbG9yIiwiY3Vyc29yIiwicG9zaXRpb24iLCJsZWZ0IiwiY2hldnJvbkNvbnRTdHlsZXMiLCJ6SW5kZXgiLCJocmVmIiwiZGl2Iiwic3R5bGUiLCJ1bCIsIm9uQ2xpY2siLCJwIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});