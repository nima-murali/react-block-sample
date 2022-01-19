/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  console.log("edit");
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cfe Custom Block – hello from the editor!', 'cfe-custom-block'));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/cfe-custom-block', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


var field = {
  "billing": {
    "billing_last_name": {
      "label": "Last name",
      "required": true,
      "class": ["form-row-last", "thwcfd-field-wrapper", "thwcfd-field-text"],
      "autocomplete": "family-name",
      "priority": 10,
      "default": "",
      "placeholder": "",
      "label_class": [],
      "validate": []
    },
    "billing_company": {
      "label": "Company name",
      "class": ["form-row-wide", "thwcfd-field-wrapper", "thwcfd-field-text"],
      "autocomplete": "organization",
      "priority": 20,
      "required": false,
      "default": "",
      "placeholder": "",
      "label_class": [],
      "validate": []
    },
    "billing_country": {
      "type": "country",
      "label": "Country \/ Region",
      "required": true,
      "class": ["form-row-wide", "address-field", "update_totals_on_change", "thwcfd-field-wrapper", "thwcfd-field-country"],
      "autocomplete": "country",
      "priority": 30,
      "default": "",
      "placeholder": "",
      "label_class": [],
      "validate": []
    },
    "billing_address_1": {
      "label": "Street address",
      "placeholder": "House number and street name",
      "required": true,
      "class": ["form-row-wide", "address-field", "thwcfd-field-wrapper", "thwcfd-field-text"],
      "autocomplete": "address-line1",
      "priority": 40,
      "default": "",
      "label_class": [],
      "validate": []
    },
    "billing_address_2": {
      "label": "Apartment, suite, unit, etc.",
      "label_class": ["screen-reader-text"],
      "placeholder": "Apartment, suite, unit, etc. (optional)",
      "class": ["form-row-wide", "address-field", "thwcfd-field-wrapper", "thwcfd-field-text"],
      "autocomplete": "address-line2",
      "priority": 50,
      "required": false,
      "default": "",
      "validate": []
    },
    "billing_city": {
      "label": "Town \/ City",
      "required": true,
      "class": ["form-row-wide", "address-field", "thwcfd-field-wrapper", "thwcfd-field-text"],
      "autocomplete": "address-level2",
      "priority": 60,
      "default": "",
      "placeholder": "",
      "label_class": [],
      "validate": []
    },
    "billing_state": {
      "type": "state",
      "label": "State \/ County",
      "required": true,
      "class": ["form-row-wide", "address-field", "thwcfd-field-wrapper", "thwcfd-field-state"],
      "validate": ["state"],
      "autocomplete": "address-level1",
      "priority": 70,
      "country_field": "billing_country",
      "country": "IN",
      "default": "",
      "placeholder": "",
      "label_class": []
    },
    "billing_postcode": {
      "label": "Postcode \/ ZIP",
      "required": true,
      "class": ["form-row-wide", "address-field", "thwcfd-field-wrapper", "thwcfd-field-text"],
      "validate": ["postcode"],
      "autocomplete": "postal-code",
      "priority": 80,
      "default": "",
      "placeholder": "",
      "label_class": []
    },
    "billing_phone": {
      "label": "Phone",
      "required": true,
      "type": "tel",
      "class": ["form-row-wide", "thwcfd-field-wrapper", "thwcfd-field-tel"],
      "validate": ["phone"],
      "autocomplete": "tel",
      "priority": 90,
      "default": "",
      "placeholder": "",
      "label_class": []
    },
    "billing_email": {
      "label": "Email address",
      "required": true,
      "type": "email",
      "class": ["form-row-wide", "thwcfd-field-wrapper", "thwcfd-field-email"],
      "validate": ["email"],
      "autocomplete": "email username",
      "priority": 100,
      "default": "",
      "placeholder": "",
      "label_class": []
    },
    "billing_first_name": {
      "label": "First name",
      "required": true,
      "class": ["form-row-first", "thwcfd-field-wrapper", "thwcfd-field-text"],
      "autocomplete": "given-name",
      "priority": 110,
      "default": "",
      "placeholder": "",
      "label_class": [],
      "validate": []
    },
    "testing": {
      "type": "radio",
      "name": "testing",
      "label": "Testing",
      "default": "yes",
      "placeholder": "",
      "class": ["", "thwcfd-field-wrapper", "thwcfd-field-radio"],
      "validate": "",
      "title_type": "",
      "required": 1,
      "checked": 0,
      "enabled": 1,
      "show_in_email": 1,
      "show_in_order": 1,
      "options": {
        "yes": "Yes",
        "no": "No"
      },
      "autocomplete": "",
      "priority": 120,
      "custom": 1
    }
  },
  "shipping": {
    "shipping_first_name": {
      "label": "First name",
      "required": true,
      "class": ["form-row-first"],
      "autocomplete": "given-name",
      "priority": 10
    },
    "shipping_last_name": {
      "label": "Last name",
      "required": true,
      "class": ["form-row-last"],
      "autocomplete": "family-name",
      "priority": 20
    },
    "shipping_company": {
      "label": "Company name",
      "class": ["form-row-wide"],
      "autocomplete": "organization",
      "priority": 30,
      "required": false
    },
    "shipping_country": {
      "type": "country",
      "label": "Country \/ Region",
      "required": true,
      "class": ["form-row-wide", "address-field", "update_totals_on_change"],
      "autocomplete": "country",
      "priority": 40
    },
    "shipping_address_1": {
      "label": "Street address",
      "placeholder": "House number and street name",
      "required": true,
      "class": ["form-row-wide", "address-field"],
      "autocomplete": "address-line1",
      "priority": 50
    },
    "shipping_address_2": {
      "label": "Apartment, suite, unit, etc.",
      "label_class": ["screen-reader-text"],
      "placeholder": "Apartment, suite, unit, etc. (optional)",
      "class": ["form-row-wide", "address-field"],
      "autocomplete": "address-line2",
      "priority": 60,
      "required": false
    },
    "shipping_city": {
      "label": "Town \/ City",
      "required": true,
      "class": ["form-row-wide", "address-field"],
      "autocomplete": "address-level2",
      "priority": 70
    },
    "shipping_state": {
      "type": "state",
      "label": "State \/ County",
      "required": true,
      "class": ["form-row-wide", "address-field"],
      "validate": ["state"],
      "autocomplete": "address-level1",
      "priority": 80,
      "country_field": "shipping_country",
      "country": "IN"
    },
    "shipping_postcode": {
      "label": "Postcode \/ ZIP",
      "required": true,
      "class": ["form-row-wide", "address-field"],
      "validate": ["postcode"],
      "autocomplete": "postal-code",
      "priority": 90
    }
  },
  "account": [],
  "order": {
    "order_comments": {
      "type": "textarea",
      "class": ["notes", "thwcfd-field-wrapper", "thwcfd-field-textarea"],
      "label": "Order notes",
      "placeholder": "Notes about your order, e.g. special notes for delivery."
    }
  }
};
function save() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cfe Custom Block – hello from the saved content!', 'cfe-custom-block'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, field));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcfe_custom_block"] = self["webpackChunkcfe_custom_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map