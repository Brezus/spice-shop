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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShoppingCartContext; },\n/* harmony export */   \"useAppContext\": function() { return /* binding */ useAppContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ShoppingCartContext(param) {\n    var children = param.children;\n    var addToCart = function addToCart(product, quantity) {\n        var isInside = cartItems.find(function(prod) {\n            return prod.name === product.name;\n        });\n        setQuantity(function(prev) {\n            return prev + quantity;\n        });\n        setTotalPrice(function(prev) {\n            return prev + product.price * quantity;\n        });\n        if (isInside) {\n            setCartItems(function(prev) {\n                return prev.map(function(cartProd) {\n                    return cartProd.name === product.name ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, cartProd), {\n                        quantity: cartProd.quantity + quantity\n                    }) : {\n                        cartProd: cartProd\n                    };\n                });\n            });\n        } else {\n            product.quantity = quantity;\n            setCartItems(function(prev) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(prev).concat([\n                    (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, product)\n                ]);\n            });\n        }\n        setTotalQuantity(function(prev) {\n            return prev >= 99 ? 99 : prev + quantity;\n        });\n        setQuantity(1);\n        setNewItemAdded(true);\n    };\n    var incrementQuant = function incrementQuant() {\n        var openCart = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, id = arguments.length > 1 ? arguments[1] : void 0;\n        if (openCart) {\n            setTotalQuantity(function(prev) {\n                return prev + 1;\n            });\n            setCartItems(function(prev) {\n                return prev.map(function(cartProd, i) {\n                    cartProd.id === id ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, prev[i]), {\n                        quantity: totalQuantity\n                    }) : {\n                        cartProd: cartProd\n                    };\n                });\n            });\n        } else {\n            setQuantity(function(prev) {\n                return prev + 1;\n            });\n        }\n    };\n    var decrementQuant = function decrementQuant(openCart, id) {\n        if (openCart) {\n            setTotalQuantity(function(prev) {\n                return prev <= 1 ? 1 : prev - 1;\n            });\n            var lessThanOne = totalQuantity <= 1 ? true : false;\n            if (lessThanOne) console.log(\"less than or equal one\");\n            return;\n        } else {\n            setQuantity(function(prev) {\n                return prev <= 1 ? 1 : prev - 1;\n            });\n        }\n    };\n    var removeItem = function removeItem(id) {\n        setCartItems(function(prev) {\n            return prev.filter(function(prod) {\n                return prod.id != id;\n            });\n        });\n    };\n    var openCt = function openCt() {\n        setOpenCart(true);\n        setNewItemAdded(false);\n        setTotalQuantity(0);\n    };\n    var closeCt = function closeCt() {\n        setOpenCart(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), quantity = ref[0], setQuantity = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), item = ref1[0], setItem = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref2[0], setCartItems = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQuantity = ref3[0], setTotalQuantity = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref4[0], setTotalPrice = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openCart = ref5[0], setOpenCart = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), newItemAdded = ref6[0], setNewItemAdded = ref6[1];\n    var _obj;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: (_obj = {\n            quantity: quantity,\n            totalQuantity: totalQuantity,\n            incrementQuant: incrementQuant,\n            decrementQuant: decrementQuant,\n            addToCart: addToCart,\n            cartItems: cartItems,\n            removeItem: removeItem,\n            openCt: openCt,\n            closeCt: closeCt,\n            openCart: openCart\n        }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"cartItems\", cartItems), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"newItemAdded\", newItemAdded), _obj),\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mille\\\\Downloads\\\\spice-shop\\\\spice-shop-app\\\\context\\\\ShoppingCartContext.js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(ShoppingCartContext, \"wSM94L6z2asCjh5+2rN6696Qxts=\");\n_c = ShoppingCartContext;\nfunction useAppContext() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n_s1(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"ShoppingCartContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztZQUNXLENBQ3ZCO0FBQ0gsQ0FBQztHQTlGdUJELG1CQUFtQjtBQUFuQkEsS0FBQUEsbUJBQW1CO0FBZ0dwQyxTQUFTdUMsYUFBYSxHQUFHOztJQUM5QixPQUFPMUMsaURBQVUsQ0FBQ0UsVUFBVSxDQUFDO0FBQy9CLENBQUM7SUFGZXdDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9TaG9wcGluZ0NhcnRDb250ZXh0LmpzPzU2OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiXHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG9wcGluZ0NhcnRDb250ZXh0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbdG90YWxRdWFudGl0eSwgc2V0VG90YWxRdWFudGl0eV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW29wZW5DYXJ0LCBzZXRPcGVuQ2FydF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbmV3SXRlbUFkZGVkLCBzZXROZXdJdGVtQWRkZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGZ1bmN0aW9uIGFkZFRvQ2FydChwcm9kdWN0LCBxdWFudGl0eSkge1xyXG4gICAgY29uc3QgaXNJbnNpZGUgPSBjYXJ0SXRlbXMuZmluZCgocHJvZCkgPT4gcHJvZC5uYW1lID09PSBwcm9kdWN0Lm5hbWUpXHJcblxyXG4gICAgc2V0UXVhbnRpdHkoKHByZXYpID0+IHByZXYgKyBxdWFudGl0eSlcclxuICAgIHNldFRvdGFsUHJpY2UoKHByZXYpID0+IHByZXYgKyBwcm9kdWN0LnByaWNlICogcXVhbnRpdHkpXHJcbiAgICBpZiAoaXNJbnNpZGUpIHtcclxuICAgICAgc2V0Q2FydEl0ZW1zKChwcmV2KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYubWFwKChjYXJ0UHJvZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGNhcnRQcm9kLm5hbWUgPT09IHByb2R1Y3QubmFtZVxyXG4gICAgICAgICAgICA/IHsgLi4uY2FydFByb2QsIHF1YW50aXR5OiBjYXJ0UHJvZC5xdWFudGl0eSArIHF1YW50aXR5IH1cclxuICAgICAgICAgICAgOiB7IGNhcnRQcm9kIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5XHJcbiAgICAgIHNldENhcnRJdGVtcygocHJldikgPT4gWy4uLnByZXYsIHsgLi4ucHJvZHVjdCB9XSlcclxuICAgIH1cclxuICAgIHNldFRvdGFsUXVhbnRpdHkoKHByZXYpID0+IHtcclxuICAgICAgcmV0dXJuIHByZXYgPj0gOTkgPyA5OSA6IHByZXYgKyBxdWFudGl0eVxyXG4gICAgfSlcclxuICAgIHNldFF1YW50aXR5KDEpXHJcbiAgICBzZXROZXdJdGVtQWRkZWQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluY3JlbWVudFF1YW50KG9wZW5DYXJ0ID0gZmFsc2UsIGlkKSB7XHJcbiAgICBpZiAob3BlbkNhcnQpIHtcclxuICAgICAgc2V0VG90YWxRdWFudGl0eSgocHJldikgPT4gcHJldiArIDEpXHJcbiAgICAgIHNldENhcnRJdGVtcygocHJldikgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmV2Lm1hcCgoY2FydFByb2QsIGkpID0+IHtcclxuICAgICAgICAgIGNhcnRQcm9kLmlkID09PSBpZFxyXG4gICAgICAgICAgICA/IHsgLi4ucHJldltpXSwgcXVhbnRpdHk6IHRvdGFsUXVhbnRpdHkgfVxyXG4gICAgICAgICAgICA6IHsgY2FydFByb2QgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRRdWFudGl0eSgocHJldikgPT4gcHJldiArIDEpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlY3JlbWVudFF1YW50KG9wZW5DYXJ0LCBpZCkge1xyXG4gICAgaWYgKG9wZW5DYXJ0KSB7XHJcbiAgICAgIHNldFRvdGFsUXVhbnRpdHkoKHByZXYpID0+IChwcmV2IDw9IDEgPyAxIDogcHJldiAtIDEpKVxyXG4gICAgICBjb25zdCBsZXNzVGhhbk9uZSA9IHRvdGFsUXVhbnRpdHkgPD0gMSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICBpZiAobGVzc1RoYW5PbmUpIGNvbnNvbGUubG9nKFwibGVzcyB0aGFuIG9yIGVxdWFsIG9uZVwiKVxyXG4gICAgICByZXR1cm5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFF1YW50aXR5KChwcmV2KSA9PiAocHJldiA8PSAxID8gMSA6IHByZXYgLSAxKSlcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlSXRlbShpZCkge1xyXG4gICAgc2V0Q2FydEl0ZW1zKChwcmV2KSA9PlxyXG4gICAgICBwcmV2LmZpbHRlcigocHJvZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9kLmlkICE9IGlkXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuQ3QoKSB7XHJcbiAgICBzZXRPcGVuQ2FydCh0cnVlKVxyXG4gICAgc2V0TmV3SXRlbUFkZGVkKGZhbHNlKVxyXG4gICAgc2V0VG90YWxRdWFudGl0eSgwKVxyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUN0KCkge1xyXG4gICAgc2V0T3BlbkNhcnQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICB0b3RhbFF1YW50aXR5LFxyXG4gICAgICAgIGluY3JlbWVudFF1YW50LFxyXG4gICAgICAgIGRlY3JlbWVudFF1YW50LFxyXG4gICAgICAgIGFkZFRvQ2FydCxcclxuICAgICAgICBjYXJ0SXRlbXMsXHJcbiAgICAgICAgcmVtb3ZlSXRlbSxcclxuICAgICAgICBvcGVuQ3QsXHJcbiAgICAgICAgY2xvc2VDdCxcclxuICAgICAgICBvcGVuQ2FydCxcclxuICAgICAgICBjYXJ0SXRlbXMsXHJcbiAgICAgICAgbmV3SXRlbUFkZGVkLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJuYW5vaWQiLCJBcHBDb250ZXh0IiwiU2hvcHBpbmdDYXJ0Q29udGV4dCIsImNoaWxkcmVuIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInF1YW50aXR5IiwiaXNJbnNpZGUiLCJjYXJ0SXRlbXMiLCJmaW5kIiwicHJvZCIsIm5hbWUiLCJzZXRRdWFudGl0eSIsInByZXYiLCJzZXRUb3RhbFByaWNlIiwicHJpY2UiLCJzZXRDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZCIsInNldFRvdGFsUXVhbnRpdHkiLCJzZXROZXdJdGVtQWRkZWQiLCJpbmNyZW1lbnRRdWFudCIsIm9wZW5DYXJ0IiwiaWQiLCJpIiwidG90YWxRdWFudGl0eSIsImRlY3JlbWVudFF1YW50IiwibGVzc1RoYW5PbmUiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsImZpbHRlciIsIm9wZW5DdCIsInNldE9wZW5DYXJ0IiwiY2xvc2VDdCIsIml0ZW0iLCJzZXRJdGVtIiwidG90YWxQcmljZSIsIm5ld0l0ZW1BZGRlZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/ShoppingCartContext.js\n"));

/***/ })

});