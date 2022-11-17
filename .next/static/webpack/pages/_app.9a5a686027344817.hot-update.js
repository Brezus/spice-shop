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

/***/ "./context/ShoppingCartContext.js":
/*!****************************************!*\
  !*** ./context/ShoppingCartContext.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShoppingCartContext; },\n/* harmony export */   \"useAppContext\": function() { return /* binding */ useAppContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ShoppingCartContext(param) {\n    var children = param.children;\n    var addToCart = function addToCart(product, quantity) {\n        var isInside = cartItems.find(function(prod) {\n            return prod.name === product.name;\n        });\n        setQuantity(function(prev) {\n            return prev + quantity;\n        });\n        setTotalPrice(function(prev) {\n            return prev + product.price * quantity;\n        });\n        if (isInside) {\n            setCartItems(function(prev) {\n                return prev.map(function(cartProd) {\n                    return cartProd.name === product.name ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, cartProd), {\n                        quantity: cartProd.quantity + quantity\n                    }) : {\n                        cartProd: cartProd\n                    };\n                });\n            });\n        } else {\n            product.quantity = quantity;\n            setCartItems(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prev).concat([\n                    (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, product)\n                ]);\n            });\n        }\n        setTotalQuantity(function(prev) {\n            return prev >= 99 ? 99 : prev + quantity;\n        });\n        setQuantity(1);\n        setNewItemAdded(true);\n    };\n    var incrementQuant = function incrementQuant() {\n        var openCart = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, id = arguments.length > 1 ? arguments[1] : void 0;\n        if (openCart) {\n            setTotalQuantity(function(prev) {\n                return prev + 1;\n            });\n            setCartItems(function(prev) {\n                return prev.map(function(cartProd) {\n                    return cartProd.id === id ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, cartProd), {\n                        quantity: totalQuantity\n                    }) : {\n                        cartProd: cartProd\n                    };\n                });\n            });\n        } else {\n            setQuantity(function(prev) {\n                return prev + 1;\n            });\n        }\n    };\n    var decrementQuant = function decrementQuant(openCart, id) {\n        if (openCart) {\n            setTotalQuantity(function(prev) {\n                return prev <= 1 ? 1 : prev - 1;\n            });\n            var lessThanOne = totalQuantity <= 1 ? true : false;\n            if (lessThanOne) console.log(\"less than or equal one\");\n            return;\n        } else {\n            setQuantity(function(prev) {\n                return prev <= 1 ? 1 : prev - 1;\n            });\n        }\n    };\n    var removeItem = function removeItem(id) {\n        setCartItems(function(prev) {\n            return prev.filter(function(prod) {\n                return prod.id != id;\n            });\n        });\n    };\n    var openCt = function openCt() {\n        setOpenCart(true);\n        setNewItemAdded(false);\n        setTotalQuantity(0);\n    };\n    var closeCt = function closeCt() {\n        setOpenCart(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), quantity = ref[0], setQuantity = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), item = ref1[0], setItem = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref2[0], setCartItems = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQuantity = ref3[0], setTotalQuantity = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref4[0], setTotalPrice = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openCart = ref5[0], setOpenCart = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), newItemAdded = ref6[0], setNewItemAdded = ref6[1];\n    var _obj;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: (_obj = {\n            quantity: quantity,\n            totalQuantity: totalQuantity,\n            incrementQuant: incrementQuant,\n            decrementQuant: decrementQuant,\n            addToCart: addToCart,\n            cartItems: cartItems,\n            removeItem: removeItem,\n            openCt: openCt,\n            closeCt: closeCt,\n            openCart: openCart\n        }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"cartItems\", cartItems), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"newItemAdded\", newItemAdded), _obj),\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\context\\\\ShoppingCartContext.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(ShoppingCartContext, \"wSM94L6z2asCjh5+2rN6696Qxts=\");\n_c = ShoppingCartContext;\nfunction useAppContext() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n_s1(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ShoppingCartContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0dBOUZ1QkQsbUJBQW1CO0FBQW5CQSxLQUFBQSxtQkFBbUI7QUFnR3BDLFNBQVNzQyxhQUFhLEdBQUc7O0lBQzlCLE9BQU96QyxpREFBVSxDQUFDRSxVQUFVLENBQUM7QUFDL0IsQ0FBQztJQUZldUMsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1Nob3BwaW5nQ2FydENvbnRleHQuanM/NTY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCJcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3BwaW5nQ2FydENvbnRleHQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFt0b3RhbFF1YW50aXR5LCBzZXRUb3RhbFF1YW50aXR5XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbb3BlbkNhcnQsIHNldE9wZW5DYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtuZXdJdGVtQWRkZWQsIHNldE5ld0l0ZW1BZGRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgZnVuY3Rpb24gYWRkVG9DYXJ0KHByb2R1Y3QsIHF1YW50aXR5KSB7XHJcbiAgICBjb25zdCBpc0luc2lkZSA9IGNhcnRJdGVtcy5maW5kKChwcm9kKSA9PiBwcm9kLm5hbWUgPT09IHByb2R1Y3QubmFtZSlcclxuXHJcbiAgICBzZXRRdWFudGl0eSgocHJldikgPT4gcHJldiArIHF1YW50aXR5KVxyXG4gICAgc2V0VG90YWxQcmljZSgocHJldikgPT4gcHJldiArIHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSlcclxuICAgIGlmIChpc0luc2lkZSkge1xyXG4gICAgICBzZXRDYXJ0SXRlbXMoKHByZXYpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJldi5tYXAoKGNhcnRQcm9kKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gY2FydFByb2QubmFtZSA9PT0gcHJvZHVjdC5uYW1lXHJcbiAgICAgICAgICAgID8geyAuLi5jYXJ0UHJvZCwgcXVhbnRpdHk6IGNhcnRQcm9kLnF1YW50aXR5ICsgcXVhbnRpdHkgfVxyXG4gICAgICAgICAgICA6IHsgY2FydFByb2QgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcm9kdWN0LnF1YW50aXR5ID0gcXVhbnRpdHlcclxuICAgICAgc2V0Q2FydEl0ZW1zKChwcmV2KSA9PiBbLi4ucHJldiwgeyAuLi5wcm9kdWN0IH1dKVxyXG4gICAgfVxyXG4gICAgc2V0VG90YWxRdWFudGl0eSgocHJldikgPT4ge1xyXG4gICAgICByZXR1cm4gcHJldiA+PSA5OSA/IDk5IDogcHJldiArIHF1YW50aXR5XHJcbiAgICB9KVxyXG4gICAgc2V0UXVhbnRpdHkoMSlcclxuICAgIHNldE5ld0l0ZW1BZGRlZCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5jcmVtZW50UXVhbnQob3BlbkNhcnQgPSBmYWxzZSwgaWQpIHtcclxuICAgIGlmIChvcGVuQ2FydCkge1xyXG4gICAgICBzZXRUb3RhbFF1YW50aXR5KChwcmV2KSA9PiBwcmV2ICsgMSlcclxuICAgICAgc2V0Q2FydEl0ZW1zKChwcmV2KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYubWFwKChjYXJ0UHJvZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGNhcnRQcm9kLmlkID09PSBpZFxyXG4gICAgICAgICAgICA/IHsgLi4uY2FydFByb2QsIHF1YW50aXR5OiB0b3RhbFF1YW50aXR5IH1cclxuICAgICAgICAgICAgOiB7IGNhcnRQcm9kIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UXVhbnRpdHkoKHByZXYpID0+IHByZXYgKyAxKVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBkZWNyZW1lbnRRdWFudChvcGVuQ2FydCwgaWQpIHtcclxuICAgIGlmIChvcGVuQ2FydCkge1xyXG4gICAgICBzZXRUb3RhbFF1YW50aXR5KChwcmV2KSA9PiAocHJldiA8PSAxID8gMSA6IHByZXYgLSAxKSlcclxuICAgICAgY29uc3QgbGVzc1RoYW5PbmUgPSB0b3RhbFF1YW50aXR5IDw9IDEgPyB0cnVlIDogZmFsc2VcclxuICAgICAgaWYgKGxlc3NUaGFuT25lKSBjb25zb2xlLmxvZyhcImxlc3MgdGhhbiBvciBlcXVhbCBvbmVcIilcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRRdWFudGl0eSgocHJldikgPT4gKHByZXYgPD0gMSA/IDEgOiBwcmV2IC0gMSkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oaWQpIHtcclxuICAgIHNldENhcnRJdGVtcygocHJldikgPT5cclxuICAgICAgcHJldi5maWx0ZXIoKHByb2QpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvZC5pZCAhPSBpZFxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3BlbkN0KCkge1xyXG4gICAgc2V0T3BlbkNhcnQodHJ1ZSlcclxuICAgIHNldE5ld0l0ZW1BZGRlZChmYWxzZSlcclxuICAgIHNldFRvdGFsUXVhbnRpdHkoMClcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xvc2VDdCgpIHtcclxuICAgIHNldE9wZW5DYXJ0KGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgdG90YWxRdWFudGl0eSxcclxuICAgICAgICBpbmNyZW1lbnRRdWFudCxcclxuICAgICAgICBkZWNyZW1lbnRRdWFudCxcclxuICAgICAgICBhZGRUb0NhcnQsXHJcbiAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgIHJlbW92ZUl0ZW0sXHJcbiAgICAgICAgb3BlbkN0LFxyXG4gICAgICAgIGNsb3NlQ3QsXHJcbiAgICAgICAgb3BlbkNhcnQsXHJcbiAgICAgICAgY2FydEl0ZW1zLFxyXG4gICAgICAgIG5ld0l0ZW1BZGRlZCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwibmFub2lkIiwiQXBwQ29udGV4dCIsIlNob3BwaW5nQ2FydENvbnRleHQiLCJjaGlsZHJlbiIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJxdWFudGl0eSIsImlzSW5zaWRlIiwiY2FydEl0ZW1zIiwiZmluZCIsInByb2QiLCJuYW1lIiwic2V0UXVhbnRpdHkiLCJwcmV2Iiwic2V0VG90YWxQcmljZSIsInByaWNlIiwic2V0Q2FydEl0ZW1zIiwibWFwIiwiY2FydFByb2QiLCJzZXRUb3RhbFF1YW50aXR5Iiwic2V0TmV3SXRlbUFkZGVkIiwiaW5jcmVtZW50UXVhbnQiLCJvcGVuQ2FydCIsImlkIiwidG90YWxRdWFudGl0eSIsImRlY3JlbWVudFF1YW50IiwibGVzc1RoYW5PbmUiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsIm9wZW5DdCIsInNldE9wZW5DYXJ0IiwiY2xvc2VDdCIsIml0ZW0iLCJzZXRJdGVtIiwidG90YWxQcmljZSIsIm5ld0l0ZW1BZGRlZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/ShoppingCartContext.js\n"));

/***/ })

});