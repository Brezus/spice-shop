"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[product]/[spice]",{

/***/ "./pages/[product]/[spice].js":
/*!************************************!*\
  !*** ./pages/[product]/[spice].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/spiceStyles */ \"./styles/spiceStyles.js\");\n/* harmony import */ var _components_Display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Display */ \"./components/Display.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/ShoppingCartContext */ \"./context/ShoppingCartContext.js\");\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Cart */ \"./components/Cart.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  body {\\n    overflow: \",\n        \";\\n    position: relative;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_8__.createGlobalStyle)(_templateObject(), function(props) {\n    return props.cartOpend ? \"hidden\" : \"initial\";\n});\n_c = GlobalStyle;\nvar __N_SSG = true;\nfunction ProductDetails(param) {\n    var selectedSpice = param.selectedSpice, products = param.products;\n    _s();\n    var details = selectedSpice.details, detailsLong = selectedSpice.detailsLong, image = selectedSpice.image, name = selectedSpice.name, price = selectedSpice.price;\n    var ref = (0,_context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__.useAppContext)(), cartItems = ref.cartItems, openCart = ref.openCart, decrementQuant = ref.decrementQuant, incrementQuant = ref.incrementQuant, addToCart = ref.addToCart, quantity = ref.quantity, openCt = ref.openCt, newItemAdded = ref.newItemAdded, newItemsQuant = ref.newItemsQuant, closeCt = ref.closeCt;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlobalStyle, {\n                cartOpend: openCart\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.DetailsCont, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Display__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: {\n                            image: image,\n                            selectedSpice: selectedSpice\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.InfoCont, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.SmallDetailsP, {\n                                children: details\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.NameP, {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.DetailsP, {\n                                children: detailsLong\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.PriceP, {\n                                children: [\n                                    \"$\",\n                                    price,\n                                    \".00\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.ButtonsCont, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: function() {\n                                            return addToCart(selectedSpice, quantity);\n                                        },\n                                        children: \"add to cart\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.VolumeCont, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.VolumeBtns, {\n                                                onClick: function() {\n                                                    decrementQuant(openCart);\n                                                },\n                                                children: \"-\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.Quant, {\n                                                children: quantity\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                                lineNumber: 68,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.VolumeBtns, {\n                                                onClick: function() {\n                                                    incrementQuant(openCart);\n                                                },\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                                lineNumber: 69,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_spiceStyles__WEBPACK_IMPORTED_MODULE_3__.CartCont, {\n                        onClick: openCt,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_9__.TiShoppingCart, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            newItemAdded >= 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: newItemsQuant >= 99 ? newItemsQuant + \"+\" : newItemsQuant\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    openCart && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Cart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        items: cartItems,\n                        allItems: products\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                        lineNumber: 85,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\pages\\\\[product]\\\\[spice].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProductDetails, \"XHnkyWjvXQhMiJUDeVsrBXzmVtQ=\", false, function() {\n    return [\n        _context_ShoppingCartContext__WEBPACK_IMPORTED_MODULE_6__.useAppContext\n    ];\n});\n_c1 = ProductDetails;\nvar _c, _c1;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkIsT0FBTyxFQUFFTCxNQUFNOzswQ0FDdkIsOERBQUNuQiwwREFBYzs7OztvQ0FBRzs0QkFDakJvQixZQUFZLElBQUksQ0FBQyxrQkFDaEIsOERBQUNLLEdBQUM7MENBQUVKLGFBQWEsSUFBSSxFQUFFLEdBQUdBLGFBQWEsR0FBRyxHQUFHLEdBQUdBLGFBQWE7Ozs7O29DQUFLOzs7Ozs7NEJBRTNEO29CQUNWUCxRQUFRLGtCQUFJLDhEQUFDZix3REFBSTt3QkFBQzJCLEtBQUssRUFBRWIsU0FBUzt3QkFBRWMsUUFBUSxFQUFFcEIsUUFBUTs7Ozs7NEJBQUk7Ozs7OztvQkFDL0M7O29CQUNiLENBQ0o7QUFDSCxDQUFDO0dBMUR1QkYsY0FBYzs7UUFhaENQLHVFQUFhOzs7QUFiS08sTUFBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bcHJvZHVjdF0vW3NwaWNlXS5qcz84MTFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jbGllbnRcIlxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBWb2x1bWVDb250LFxyXG4gIFZvbHVtZUJ0bnMsXHJcbiAgUXVhbnQsXHJcbiAgQnV0dG9uc0NvbnQsXHJcbiAgSW5mb0NvbnQsXHJcbiAgU21hbGxEZXRhaWxzUCxcclxuICBEZXRhaWxzUCxcclxuICBQcmljZVAsXHJcbiAgTmFtZVAsXHJcbiAgRGV0YWlsc0NvbnQsXHJcbiAgQ2FydENvbnQsXHJcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9zcGljZVN0eWxlc1wiXHJcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Rpc3BsYXlcIlxyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiXHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9TaG9wcGluZ0NhcnRDb250ZXh0XCJcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FydFwiXHJcbmltcG9ydCB7IFRpU2hvcHBpbmdDYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCJcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBib2R5IHtcclxuICAgIG92ZXJmbG93OiAkeyhwcm9wcykgPT4gKHByb3BzLmNhcnRPcGVuZCA/IFwiaGlkZGVuXCIgOiBcImluaXRpYWxcIil9O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdERldGFpbHMoeyBzZWxlY3RlZFNwaWNlLCBwcm9kdWN0cyB9KSB7XHJcbiAgY29uc3QgeyBkZXRhaWxzLCBkZXRhaWxzTG9uZywgaW1hZ2UsIG5hbWUsIHByaWNlIH0gPSBzZWxlY3RlZFNwaWNlXHJcbiAgY29uc3Qge1xyXG4gICAgY2FydEl0ZW1zLFxyXG4gICAgb3BlbkNhcnQsXHJcbiAgICBkZWNyZW1lbnRRdWFudCxcclxuICAgIGluY3JlbWVudFF1YW50LFxyXG4gICAgYWRkVG9DYXJ0LFxyXG4gICAgcXVhbnRpdHksXHJcbiAgICBvcGVuQ3QsXHJcbiAgICBuZXdJdGVtQWRkZWQsXHJcbiAgICBuZXdJdGVtc1F1YW50LFxyXG4gICAgY2xvc2VDdCxcclxuICB9ID0gdXNlQXBwQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsU3R5bGUgY2FydE9wZW5kPXtvcGVuQ2FydH0gLz5cclxuICAgICAgPERldGFpbHNDb250PlxyXG4gICAgICAgIDxEaXNwbGF5IGRhdGE9e3sgaW1hZ2UsIHNlbGVjdGVkU3BpY2UgfX0gLz5cclxuICAgICAgICA8SW5mb0NvbnQ+XHJcbiAgICAgICAgICA8U21hbGxEZXRhaWxzUD57ZGV0YWlsc308L1NtYWxsRGV0YWlsc1A+XHJcbiAgICAgICAgICA8TmFtZVA+e25hbWV9PC9OYW1lUD5cclxuICAgICAgICAgIDxEZXRhaWxzUD57ZGV0YWlsc0xvbmd9PC9EZXRhaWxzUD5cclxuICAgICAgICAgIDxQcmljZVA+JHtwcmljZX0uMDA8L1ByaWNlUD5cclxuICAgICAgICAgIDxCdXR0b25zQ29udD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoc2VsZWN0ZWRTcGljZSwgcXVhbnRpdHkpfT5cclxuICAgICAgICAgICAgICBhZGQgdG8gY2FydFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPFZvbHVtZUNvbnQ+XHJcbiAgICAgICAgICAgICAgPFZvbHVtZUJ0bnNcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZGVjcmVtZW50UXVhbnQob3BlbkNhcnQpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICA8L1ZvbHVtZUJ0bnM+XHJcbiAgICAgICAgICAgICAgPFF1YW50PntxdWFudGl0eX08L1F1YW50PlxyXG4gICAgICAgICAgICAgIDxWb2x1bWVCdG5zXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGluY3JlbWVudFF1YW50KG9wZW5DYXJ0KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgPC9Wb2x1bWVCdG5zPlxyXG4gICAgICAgICAgICA8L1ZvbHVtZUNvbnQ+XHJcbiAgICAgICAgICA8L0J1dHRvbnNDb250PlxyXG4gICAgICAgIDwvSW5mb0NvbnQ+XHJcbiAgICAgICAgPENhcnRDb250IG9uQ2xpY2s9e29wZW5DdH0+XHJcbiAgICAgICAgICA8VGlTaG9wcGluZ0NhcnQgLz5cclxuICAgICAgICAgIHtuZXdJdGVtQWRkZWQgPj0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxwPntuZXdJdGVtc1F1YW50ID49IDk5ID8gbmV3SXRlbXNRdWFudCArIFwiK1wiIDogbmV3SXRlbXNRdWFudH08L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FydENvbnQ+XHJcbiAgICAgICAge29wZW5DYXJ0ICYmIDxDYXJ0IGl0ZW1zPXtjYXJ0SXRlbXN9IGFsbEl0ZW1zPXtwcm9kdWN0c30gLz59XHJcbiAgICAgIDwvRGV0YWlsc0NvbnQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwic3BpY2VQcm9kdWN0c1wiXSB7XHJcbiAgICBzbHVnIHtcclxuICAgICAgY3VycmVudFxyXG4gICAgfVxyXG4gIH1gXHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpXHJcblxyXG4gIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChzcGljZVByb2R1Y3QpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHByb2R1Y3Q6IGAke1xyXG4gICAgICAgICAgc3BpY2VQcm9kdWN0LndpbnRlclNwaWNlID8gXCJ3aW50ZXItc3BpY2VcIiA6IFwic3VtbWVyLXNwaWNlXCJcclxuICAgICAgICB9YCxcclxuICAgICAgICBzcGljZTogc3BpY2VQcm9kdWN0LnNsdWcuY3VycmVudCxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zOiB7IHNwaWNlIH0gfSkge1xyXG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gJ3NwaWNlUHJvZHVjdHMnICYmIHNsdWcuY3VycmVudCA9PSAnJHtzcGljZX0nXVswXWBcclxuICBjb25zdCBzZWxlY3RlZFNwaWNlID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KVxyXG5cclxuICBjb25zdCBwcm9kdWN0c1F1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJzcGljZVByb2R1Y3RzXCJdYFxyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHByb2R1Y3RzUXVlcnkpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNlbGVjdGVkU3BpY2UsXHJcbiAgICAgIHNwaWNlLFxyXG4gICAgICBwcm9kdWN0cyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJWb2x1bWVDb250IiwiVm9sdW1lQnRucyIsIlF1YW50IiwiQnV0dG9uc0NvbnQiLCJJbmZvQ29udCIsIlNtYWxsRGV0YWlsc1AiLCJEZXRhaWxzUCIsIlByaWNlUCIsIk5hbWVQIiwiRGV0YWlsc0NvbnQiLCJDYXJ0Q29udCIsIkRpc3BsYXkiLCJTY3JpcHQiLCJ1c2VBcHBDb250ZXh0IiwiQ2FydCIsIlRpU2hvcHBpbmdDYXJ0IiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZSIsInByb3BzIiwiY2FydE9wZW5kIiwiUHJvZHVjdERldGFpbHMiLCJzZWxlY3RlZFNwaWNlIiwicHJvZHVjdHMiLCJkZXRhaWxzIiwiZGV0YWlsc0xvbmciLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImNhcnRJdGVtcyIsIm9wZW5DYXJ0IiwiZGVjcmVtZW50UXVhbnQiLCJpbmNyZW1lbnRRdWFudCIsImFkZFRvQ2FydCIsInF1YW50aXR5Iiwib3BlbkN0IiwibmV3SXRlbUFkZGVkIiwibmV3SXRlbXNRdWFudCIsImNsb3NlQ3QiLCJkYXRhIiwib25DbGljayIsInAiLCJpdGVtcyIsImFsbEl0ZW1zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[product]/[spice].js\n"));

/***/ })

});