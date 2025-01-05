/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ plugin)
/* harmony export */ });
const plugin = {
    load() {
        return {
            name: 'Hello World',
            version: '0.1.0',
            author: 'Octahive',
            description: 'Simple plugin for octabot',
        };
    },
    async init() {
        return { ok: undefined };
    },
    async process(payload) {
        console.log('Hello World');
        return { ok: [] };
    },
};

var __webpack_exports__plugin = __webpack_exports__.I;
export { __webpack_exports__plugin as plugin };
