"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./store/cart.ts":
/*!***********************!*\
  !*** ./store/cart.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCartStore: () => (/* binding */ useCartStore)\n/* harmony export */ });\n/* harmony import */ var _services_ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/ingredients */ \"(app-pages-browser)/./services/ingredients.ts\");\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/react.mjs\");\n\n\nconst useCartStore = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        items: [],\n        error: false,\n        loading: true,\n        totalAmount: 0,\n        fetchCartItems: async ()=>{\n            try {\n                set({\n                    loading: true,\n                    error: false\n                });\n                const data = await (0,_services_ingredients__WEBPACK_IMPORTED_MODULE_0__.fetchCart)();\n                const transformedItems = data.items.map((item)=>{\n                    const ingredientPrice = item.ingredients.reduce((sum, ingredient)=>sum + ingredient.price, 0);\n                    const totalPrice = (item.productItem.price + ingredientPrice) * item.quantity;\n                    return {\n                        id: item.id,\n                        quantity: item.quantity,\n                        name: item.productItem.product.name,\n                        imageUrl: item.productItem.product.imageUrl,\n                        price: totalPrice,\n                        pizzaSize: item.productItem.size,\n                        type: item.productItem.pizzaType,\n                        ingredients: item.ingredients\n                    };\n                });\n                const totalAmount = transformedItems.reduce((sum, item)=>sum + item.price, 0);\n                set({\n                    items: transformedItems,\n                    totalAmount\n                });\n            } catch (error) {\n                console.log(error);\n                set({\n                    error: true\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        removeCartItem: async (id)=>{},\n        updateItemQuantity: async (id, quantity)=>{},\n        addCartItem: async (values)=>{}\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL2NhcnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBQ2xCO0FBZ0MxQixNQUFNRSxlQUFlRCwrQ0FBTUEsQ0FBWSxDQUFDRSxLQUFLQyxNQUFTO1FBQzNEQyxPQUFPLEVBQUU7UUFDVEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGFBQWE7UUFFYkMsZ0JBQWdCO1lBQ2QsSUFBSTtnQkFDRk4sSUFBSTtvQkFBRUksU0FBUztvQkFBTUQsT0FBTztnQkFBTTtnQkFDbEMsTUFBTUksT0FBTyxNQUFNVixnRUFBU0E7Z0JBRTVCLE1BQU1XLG1CQUF1Q0QsS0FBS0wsS0FBSyxDQUFDTyxHQUFHLENBQUMsQ0FBQ0M7b0JBQzNELE1BQU1DLGtCQUFrQkQsS0FBS0UsV0FBVyxDQUFDQyxNQUFNLENBQzdDLENBQUNDLEtBQUtDLGFBQWVELE1BQU1DLFdBQVdDLEtBQUssRUFDM0M7b0JBRUYsTUFBTUMsYUFDSixDQUFDUCxLQUFLUSxXQUFXLENBQUNGLEtBQUssR0FBR0wsZUFBYyxJQUFLRCxLQUFLUyxRQUFRO29CQUU1RCxPQUFPO3dCQUNMQyxJQUFJVixLQUFLVSxFQUFFO3dCQUNYRCxVQUFVVCxLQUFLUyxRQUFRO3dCQUN2QkUsTUFBTVgsS0FBS1EsV0FBVyxDQUFDSSxPQUFPLENBQUNELElBQUk7d0JBQ25DRSxVQUFVYixLQUFLUSxXQUFXLENBQUNJLE9BQU8sQ0FBQ0MsUUFBUTt3QkFDM0NQLE9BQU9DO3dCQUNQTyxXQUFXZCxLQUFLUSxXQUFXLENBQUNPLElBQUk7d0JBQ2hDQyxNQUFNaEIsS0FBS1EsV0FBVyxDQUFDUyxTQUFTO3dCQUNoQ2YsYUFBYUYsS0FBS0UsV0FBVztvQkFDL0I7Z0JBQ0Y7Z0JBRUEsTUFBTVAsY0FBY0csaUJBQWlCSyxNQUFNLENBQ3pDLENBQUNDLEtBQUtKLE9BQVNJLE1BQU1KLEtBQUtNLEtBQUssRUFDL0I7Z0JBR0ZoQixJQUFJO29CQUFFRSxPQUFPTTtvQkFBa0JIO2dCQUFZO1lBQzdDLEVBQUUsT0FBT0YsT0FBTztnQkFDZHlCLFFBQVFDLEdBQUcsQ0FBQzFCO2dCQUNaSCxJQUFJO29CQUFFRyxPQUFPO2dCQUFLO1lBQ3BCLFNBQVU7Z0JBQ1JILElBQUk7b0JBQUVJLFNBQVM7Z0JBQU07WUFDdkI7UUFDRjtRQUVBMEIsZ0JBQWdCLE9BQU9WLE1BQWdCO1FBQ3ZDVyxvQkFBb0IsT0FBT1gsSUFBWUQsWUFBc0I7UUFDN0RhLGFBQWEsT0FBT0MsVUFBaUI7SUFDdkMsSUFBSSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxvbHlhX1xcbmV4dC1hcHBcXHN0b3JlXFxjYXJ0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQ2FydCB9IGZyb20gXCJAL3NlcnZpY2VzL2luZ3JlZGllbnRzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XHJcblxyXG50eXBlIENhcnRGcm9udGVuZEl0ZW0gPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpbWFnZVVybDogc3RyaW5nO1xyXG4gIHByaWNlOiBudW1iZXI7XHJcbiAgcGl6emFTaXplPzogbnVtYmVyIHwgbnVsbDtcclxuICB0eXBlPzogbnVtYmVyIHwgbnVsbDtcclxuICBpbmdyZWRpZW50cz86IGFueTtcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FydFN0YXRlIHtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIGVycm9yOiBib29sZWFuO1xyXG4gIHRvdGFsQW1vdW50OiBudW1iZXI7XHJcbiAgaXRlbXM6IENhcnRGcm9udGVuZEl0ZW1bXTtcclxuXHJcbiAgLyog0J/QvtC70YPRh9C10L3QuNC1INGC0L7QstCw0YDQvtCyINC40Lcg0LrQvtGA0LfQuNC90YsgKi9cclxuICBmZXRjaENhcnRJdGVtczogKCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgLyog0JfQsNC/0YDQvtGBINC90LAg0L7QsdC90L7QstC70LXQvdC40LUg0LrQvtC70LjRh9C10YHRgtCy0LAg0YLQvtCy0LDRgNCwICovXHJcbiAgdXBkYXRlSXRlbVF1YW50aXR5OiAoaWQ6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgLyog0JfQsNC/0YDQvtGBINC90LAg0LTQvtCx0LDQstC70LXQvdC40LUg0YLQvtCy0LDRgNCwINCyINC60L7RgNC30LjQvdGDICovXHJcbiAgYWRkQ2FydEl0ZW06ICh2YWx1ZXM6IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgLyog0JfQsNC/0YDQvtGBINC90LAg0YPQtNCw0LvQtdC90LjQtSDRgtC+0LLQsNGA0LAg0LjQtyDQutC+0YDQt9C40L3RiyAqL1xyXG4gIHJlbW92ZUNhcnRJdGVtOiAoaWQ6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnRTdG9yZSA9IGNyZWF0ZTxDYXJ0U3RhdGU+KChzZXQsIGdldCkgPT4gKHtcclxuICBpdGVtczogW10sXHJcbiAgZXJyb3I6IGZhbHNlLFxyXG4gIGxvYWRpbmc6IHRydWUsXHJcbiAgdG90YWxBbW91bnQ6IDAsXHJcblxyXG4gIGZldGNoQ2FydEl0ZW1zOiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaENhcnQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXM6IENhcnRGcm9udGVuZEl0ZW1bXSA9IGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudFByaWNlID0gaXRlbS5pbmdyZWRpZW50cy5yZWR1Y2UoXHJcbiAgICAgICAgICAoc3VtLCBpbmdyZWRpZW50KSA9PiBzdW0gKyBpbmdyZWRpZW50LnByaWNlLFxyXG4gICAgICAgICAgMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdG90YWxQcmljZSA9XHJcbiAgICAgICAgICAoaXRlbS5wcm9kdWN0SXRlbS5wcmljZSArIGluZ3JlZGllbnRQcmljZSkgKiBpdGVtLnF1YW50aXR5O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcclxuICAgICAgICAgIG5hbWU6IGl0ZW0ucHJvZHVjdEl0ZW0ucHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgaW1hZ2VVcmw6IGl0ZW0ucHJvZHVjdEl0ZW0ucHJvZHVjdC5pbWFnZVVybCxcclxuICAgICAgICAgIHByaWNlOiB0b3RhbFByaWNlLFxyXG4gICAgICAgICAgcGl6emFTaXplOiBpdGVtLnByb2R1Y3RJdGVtLnNpemUsXHJcbiAgICAgICAgICB0eXBlOiBpdGVtLnByb2R1Y3RJdGVtLnBpenphVHlwZSxcclxuICAgICAgICAgIGluZ3JlZGllbnRzOiBpdGVtLmluZ3JlZGllbnRzLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdG90YWxBbW91bnQgPSB0cmFuc2Zvcm1lZEl0ZW1zLnJlZHVjZShcclxuICAgICAgICAoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnByaWNlLFxyXG4gICAgICAgIDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldCh7IGl0ZW1zOiB0cmFuc2Zvcm1lZEl0ZW1zLCB0b3RhbEFtb3VudCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0KHsgZXJyb3I6IHRydWUgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZW1vdmVDYXJ0SXRlbTogYXN5bmMgKGlkOiBudW1iZXIpID0+IHt9LFxyXG4gIHVwZGF0ZUl0ZW1RdWFudGl0eTogYXN5bmMgKGlkOiBudW1iZXIsIHF1YW50aXR5OiBudW1iZXIpID0+IHt9LFxyXG4gIGFkZENhcnRJdGVtOiBhc3luYyAodmFsdWVzOiBhbnkpID0+IHt9LFxyXG59KSk7XHJcbiJdLCJuYW1lcyI6WyJmZXRjaENhcnQiLCJjcmVhdGUiLCJ1c2VDYXJ0U3RvcmUiLCJzZXQiLCJnZXQiLCJpdGVtcyIsImVycm9yIiwibG9hZGluZyIsInRvdGFsQW1vdW50IiwiZmV0Y2hDYXJ0SXRlbXMiLCJkYXRhIiwidHJhbnNmb3JtZWRJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmdyZWRpZW50UHJpY2UiLCJpbmdyZWRpZW50cyIsInJlZHVjZSIsInN1bSIsImluZ3JlZGllbnQiLCJwcmljZSIsInRvdGFsUHJpY2UiLCJwcm9kdWN0SXRlbSIsInF1YW50aXR5IiwiaWQiLCJuYW1lIiwicHJvZHVjdCIsImltYWdlVXJsIiwicGl6emFTaXplIiwic2l6ZSIsInR5cGUiLCJwaXp6YVR5cGUiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQ2FydEl0ZW0iLCJ1cGRhdGVJdGVtUXVhbnRpdHkiLCJhZGRDYXJ0SXRlbSIsInZhbHVlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/cart.ts\n"));

/***/ })

});