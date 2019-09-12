/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/water-tile.jpg */ \"./src/images/water-tile.jpg\"));\nvar ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../images/explosion.png */ \"./src/images/explosion.png\"));\n// Module\nexports.push([module.i, \"body{\\r\\n    background: #3b3939;\\r\\n    box-sizing: border-box;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.container{\\r\\n    display: flex;\\r\\n    justify-content: space-evenly;\\r\\n}\\r\\n.player-1-board,.player-2-board{\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    flex-direction: column-reverse;\\r\\n    float: left;\\r\\n    height: 531px;\\r\\n    min-width: 521px;\\r\\n}\\r\\n\\r\\n.cell{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n    background-size: cover;\\r\\n    border: 1px solid black;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    height: 50px;\\r\\n    width: 50px;\\r\\n}\\r\\n.cell-dark{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n    background-size: cover;\\r\\n    border: 1px solid black;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    height: 50px;\\r\\n    width: 50px;\\r\\n    opacity: 0.5;\\r\\n}\\r\\n.ship-3-image{\\r\\n    height: 154px;\\r\\n    width: 49px;\\r\\n}\\r\\n.ship-4-image{\\r\\n    height: 205px;\\r\\n    width: 48px;\\r\\n}\\r\\n\\r\\n.ship-5-image{\\r\\n    height: 257px;\\r\\n    width: 50px;\\r\\n}\\r\\n.ship-3-destroyed-image{\\r\\n    height: 154px;\\r\\n    width: 49px;\\r\\n}\\r\\n.ship-4-destroyed-image{\\r\\n    height: 205px;\\r\\n    width: 48px;\\r\\n}\\r\\n\\r\\n.ship-5-destroyed-image{\\r\\n    height: 257px;\\r\\n    width: 50px;\\r\\n}\\r\\n\\r\\n.explosion{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\r\\n    background-size: 578px;\\r\\n    background-position: 0px -2px;\\r\\n    height: 50px;\\r\\n    width: 50px;\\r\\n    z-index: 3;\\r\\n}\\r\\n\\r\\n.horizontal{\\r\\n    transform: rotate(90deg) translateY(-50px);\\r\\n    transform-origin: top left;\\r\\n}\\r\\n\\r\\n.vertical{\\r\\n    transform: unset;\\r\\n    transform-origin: top left;\\r\\n}\\r\\n\\r\\n.directionButton{\\r\\n    padding: 10px 0;\\r\\n    background-color: aquamarine;\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.startButton{\\r\\n    padding: 10px 37px;\\r\\n    background-color: aquamarine;\\r\\n    border: none;\\r\\n    border-radius: 6px;\\r\\n    font-size: 18px;\\r\\n}\\r\\n.set-positions-button{\\r\\n    text-align: center;\\r\\n}\\r\\n.start-game-button{\\r\\n    text-align: center;\\r\\n}\\r\\n.message-wrapper{\\r\\n    background-color: #a52a2aad;\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n}\\r\\n.message-div{\\r\\n    position: absolute;\\r\\n    left: 44%;    \\r\\n    top: 33%;\\r\\n    height: 165px;\\r\\n    background-color: white;\\r\\n    border: 4px solid black;\\r\\n    border-radius: 20px;\\r\\n    min-width: 220px;\\r\\n    text-align: center;\\r\\n\\r\\n}\\r\\n.reload-button{\\r\\n    padding: 7px 17px;\\r\\n    margin-top: 62px;\\r\\n    border: none;\\r\\n    box-shadow: 2px 2px cadetblue;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/classes/gameBoard.js":
/*!**********************************!*\
  !*** ./src/classes/gameBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initMap(size) {\n  var map = Array.from(Array(size), function (_element, row) {\n    return Array.from(Array(size), function (_ele, column) {\n      return {\n        x: row,\n        y: column,\n        occupied: null\n      };\n    });\n  });\n  return map;\n}\n\nfunction Gameboard() {\n  var map = initMap(10);\n  var ships = 5;\n  var attacksOnTargetPositions = [];\n  var missedAttacksPositions = [];\n\n  function receiveAttack(position) {\n    var ship = this.map[position.x][position.y].occupied;\n\n    if (ship !== null) {\n      ship.hit();\n\n      if (ship.isSunk()) {\n        this.ships -= 1;\n      } else {\n        this.attacksOnTargetPositions.push(position);\n      }\n    } else {\n      this.missedAttacksPositions.push(position);\n    }\n  }\n\n  function removeShip(ship) {\n    var _this = this;\n\n    ship.getPosition().forEach(function (pos) {\n      _this.map[pos.x][pos.y].occupied = null;\n    });\n  }\n\n  function insertShip(ship) {\n    var _this2 = this;\n\n    ship.getPosition().forEach(function (pos) {\n      _this2.map[pos.x][pos.y].occupied = ship;\n    });\n  }\n\n  function rotateShip(ship) {\n    var _this3 = this;\n\n    ship.getRotatedPositions().forEach(function (pos) {\n      _this3.map[pos.x][pos.y].occupied = ship;\n    });\n  }\n\n  return {\n    map: map,\n    ships: ships,\n    attacksOnTargetPositions: attacksOnTargetPositions,\n    missedAttacksPositions: missedAttacksPositions,\n    receiveAttack: receiveAttack,\n    removeShip: removeShip,\n    insertShip: insertShip,\n    rotateShip: rotateShip\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gameboard);\n\n//# sourceURL=webpack:///./src/classes/gameBoard.js?");

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Player(b) {\n  var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var board = b;\n  var user = u;\n  return {\n    board: board,\n    user: user\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/classes/player.js?");

/***/ }),

/***/ "./src/classes/ship.js":
/*!*****************************!*\
  !*** ./src/classes/ship.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Ship(size, dire, pos) {\n  var length = size;\n  var direction = dire;\n  var position = pos;\n  var energy = size;\n\n  if (typeof length === 'undefined') {\n    throw new Error('Must define length');\n  }\n\n  if (typeof direction === 'undefined') {\n    throw new Error('Must define direction');\n  }\n\n  function hit() {\n    this.energy -= 1;\n  }\n\n  function isSunk() {\n    if (this.energy === 0) return true;\n    return false;\n  }\n\n  function getPosition() {\n    var occupiedPositionsOfShip = [];\n\n    for (var i = 0; i < this.length; i += 1) {\n      if (this.direction === 'horizontal') {\n        if (this.position.x + i > 9) {\n          occupiedPositionsOfShip.push({\n            x: this.position.x - i,\n            y: this.position.y,\n            occupied: this\n          });\n        } else {\n          occupiedPositionsOfShip.push({\n            x: this.position.x + i,\n            y: this.position.y,\n            occupied: this\n          });\n        }\n      } else if (this.position.y + i > 9) {\n        occupiedPositionsOfShip.push({\n          x: this.position.x,\n          y: this.position.y - i,\n          occupied: this\n        });\n      } else {\n        occupiedPositionsOfShip.push({\n          x: this.position.x,\n          y: this.position.y + i,\n          occupied: this\n        });\n      }\n    }\n\n    return occupiedPositionsOfShip;\n  }\n\n  function getRotatedPositions() {\n    var rotatedPositions = [];\n    var newPosition = null;\n\n    for (var i = 0; i < this.length; i += 1) {\n      if (this.direction !== 'horizontal') {\n        rotatedPositions.push({\n          x: this.position.x + this.length - 1,\n          y: this.position.y - i,\n          occupied: this\n        });\n        newPosition = {\n          x: this.position.x + this.length - 1,\n          y: this.position.y - i\n        };\n      } else {\n        rotatedPositions.push({\n          x: this.position.x - i,\n          y: this.position.y + this.length - 1,\n          occupied: this\n        });\n        newPosition = {\n          x: this.position.x - i,\n          y: this.position.y + this.length - 1\n        };\n      }\n    }\n\n    if (newPosition !== null) this.position = newPosition;\n    return rotatedPositions;\n  }\n\n  return {\n    length: length,\n    direction: direction,\n    position: position,\n    energy: energy,\n    hit: hit,\n    isSunk: isSunk,\n    getPosition: getPosition,\n    getRotatedPositions: getRotatedPositions\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/classes/ship.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setups_initBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setups/initBoard */ \"./src/setups/initBoard.js\");\n\nvar setPositions = false;\n\nfunction draggable(shipImg, board, ship) {\n  var image = shipImg;\n  var directionX = 0;\n  var directionY = 0;\n  var posX = ship !== null ? ship.position.x : 0;\n  var posY = ship ? ship.position.y : 0;\n  var startX = 0;\n  var startY = 0;\n  var drag = false;\n  image.addEventListener('mousedown', function (event) {\n    if (setPositions === true) {\n      event.preventDefault();\n      startX = event.clientX;\n      startY = event.clientY;\n      board.removeShip(ship);\n      drag = true;\n    }\n  });\n  document.addEventListener('mousemove', function (event) {\n    if (drag === true && setPositions === true) {\n      event.preventDefault();\n\n      if (event.clientX % 50 === 0) {\n        if (startX > event.clientX) {\n          posX -= 1;\n          directionX -= 52;\n          startX -= 52;\n        } else {\n          posX += 1;\n          directionX += 52;\n          startX += 52;\n        }\n      }\n\n      if (event.clientY % 50 === 0) {\n        if (startY > event.clientY) {\n          posY += 1;\n          directionY -= 52;\n          startY -= 52;\n        } else {\n          posY -= 1;\n          directionY += 52;\n          startY += 52;\n        }\n      }\n\n      if (ship.direction === 'horizontal') {\n        image.style.transform = \"rotate(90deg) translate(\".concat(directionY, \"px,-\").concat(directionX - 50, \"px)\");\n      } else {\n        image.style.transform = \"translate(\".concat(directionX, \"px,\").concat(directionY, \"px)\");\n      }\n    }\n  });\n  document.addEventListener('mouseup', function () {\n    if (drag === true) {\n      drag = false;\n      ship.position.x = posX;\n      ship.position.y = posY;\n      board.insertShip(ship);\n    }\n  });\n}\n\nfunction initImage(ship, image) {\n  if (ship.direction === 'horizontal') {\n    image.classList.add('horizontal');\n  } else {\n    image.classList.add('vertical');\n  }\n}\n\nfunction rotation(ship, image) {\n  var rotatedShip = ship;\n  var shipImg = image;\n\n  if (rotatedShip.direction !== 'horizontal') {\n    rotatedShip.direction = 'horizontal';\n    shipImg.classList.remove('vertical');\n    shipImg.classList.add('horizontal');\n  } else {\n    rotatedShip.direction = 'vertical';\n    shipImg.classList.remove('horizontal');\n    shipImg.classList.add('vertical');\n  }\n}\n\nfunction animateExplosion(element) {\n  var position = 105;\n  var interval = 90;\n  var explosion = document.createElement('div');\n  explosion.className = 'explosion';\n  setInterval(function () {\n    explosion.style.backgroundPosition = \"-\".concat(position, \"px -2px\");\n\n    if (position < 630) {\n      position += 105;\n    } else {\n      position = 105;\n    }\n  }, interval);\n  element.appendChild(explosion);\n}\n\nfunction endGameMessage(winner) {\n  var messageWrapper = document.createElement('div');\n  messageWrapper.className = 'message-wrapper';\n  var messageDiv = document.createElement('div');\n  messageDiv.className = 'message-div';\n\n  if (winner.user === true) {\n    messageDiv.innerHTML = '<p>Congrats! You win!</p>';\n  } else {\n    messageDiv.innerHTML = \"<p>It's ok .You lost</p>\";\n  }\n\n  var reloadButton = document.createElement('button');\n  reloadButton.className = 'reload-button';\n  reloadButton.innerHTML = 'Play again';\n  reloadButton.addEventListener('click', function () {\n    window.location.reload();\n  });\n  messageDiv.appendChild(reloadButton);\n  messageWrapper.appendChild(messageDiv);\n  document.body.appendChild(messageWrapper);\n}\n\nfunction playerPLays(game, cell, cellDiv, ship) {\n  var div = cellDiv;\n  var missedAttackImg = document.createElement('img');\n  missedAttackImg.src = './src/images/splash.png';\n  game.move(cell);\n\n  if (cell.occupied === null && div.children.length === 0) {\n    div.style.opacity = 1;\n    div.appendChild(missedAttackImg);\n  } else {\n    div.style.opacity = 1;\n    animateExplosion(div);\n\n    if (ship.energy === 0 && !game.gameOver()) {\n      document.getElementsByClassName(\"ship-\".concat(ship.length, \"-destroyed-image\"))[0].style.display = 'block';\n    } else if (game.gameOver()) {\n      endGameMessage(game.gameOver());\n    }\n  }\n}\n\nfunction computerPlays(game, ship) {\n  var missedAttackImg = document.createElement('img');\n  missedAttackImg.src = './src/images/splash.png';\n  var pos = game.computerMove(ship);\n  var enemyBoardCell = document.querySelector(\".cell[data-x~=\\\"\".concat(pos.x, \"\\\"][data-y~=\\\"\").concat(pos.y, \"\\\"]\"));\n  var newShip = Object.values(_setups_initBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])[0].map[pos.x][pos.y].occupied;\n\n  if (newShip === null && enemyBoardCell.children.length === 0) {\n    enemyBoardCell.appendChild(missedAttackImg);\n  } else if (newShip !== null && enemyBoardCell.children.length !== 0) {\n    animateExplosion(enemyBoardCell);\n  }\n}\n\nfunction available(cell, board) {\n  var occupiedMissedCell = board.missedAttacksPositions.some(function (pos) {\n    return pos.x === cell.x && pos.y === cell.y;\n  });\n  var occupiedAttackedCell = board.attacksOnTargetPositions.some(function (pos) {\n    return pos.x === cell.x && pos.y === cell.y;\n  });\n  if (occupiedMissedCell || occupiedAttackedCell) return false;\n  return true;\n}\n\nfunction gameStart(game) {\n  var board = Object.values(_setups_initBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])[1];\n  var cellIndex = 0;\n  board.map.forEach(function (element) {\n    element.forEach(function (cell) {\n      var cellDiv = document.getElementsByClassName('cell-dark')[cellIndex];\n      var missedAttackImg = document.createElement('img');\n      missedAttackImg.src = './src/images/splash.png';\n      var ship = cell.occupied;\n      cellDiv.addEventListener('click', function () {\n        if (!game.gameOver() && available(cell, board)) {\n          playerPLays(game, cell, cellDiv, ship);\n          computerPlays(game, ship);\n        }\n      });\n      cellIndex += 1;\n    });\n  });\n}\n\nfunction startGameButton(game) {\n  var buttonDiv = document.createElement('div');\n  buttonDiv.className = 'start-game-button';\n  var startButton = document.createElement('button');\n  startButton.className = 'startButton';\n  startButton.innerText = 'Start';\n  buttonDiv.appendChild(startButton);\n  document.getElementsByClassName('container')[0].insertAdjacentElement('beforebegin', buttonDiv);\n  startButton.addEventListener('click', function () {\n    setPositions = false;\n    buttonDiv.style.display = 'none';\n    gameStart(game);\n  });\n}\n\nfunction setPositionsButton(game) {\n  var buttonDiv = document.createElement('div');\n  buttonDiv.className = 'set-positions-button';\n  var directionButton = document.createElement('button');\n  directionButton.className = 'directionButton';\n  directionButton.innerText = 'Begin positioning';\n  buttonDiv.appendChild(directionButton);\n  document.getElementsByClassName('container')[0].insertAdjacentElement('beforebegin', buttonDiv);\n  directionButton.addEventListener('click', function () {\n    setPositions = true;\n    buttonDiv.style.display = 'none';\n    startGameButton(game);\n  });\n}\n\nfunction createBoards() {\n  var boardsArray = Object.values(_setups_initBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  var container = document.createElement('div');\n  container.className = 'container';\n  boardsArray.forEach(function (board, index) {\n    var boardDiv = document.createElement('div');\n    boardDiv.className = \"player-\".concat(index + 1, \"-board\");\n    board.map.forEach(function (element) {\n      element.forEach(function (coordinate) {\n        var ship = coordinate.occupied;\n        var shipHead = ship !== null ? ship.getPosition()[coordinate.occupied.getPosition().length - 1] : null;\n        var shipImg = document.createElement('img');\n        var cell = document.createElement('div');\n        cell.className = index === 1 ? 'cell-dark' : 'cell';\n        cell.dataset.x = coordinate.x;\n        cell.dataset.y = coordinate.y;\n        boardDiv.appendChild(cell);\n\n        if (ship !== null && shipHead.x === coordinate.x && shipHead.y === coordinate.y && index === 0) {\n          shipImg.className = \"ship-\".concat(ship.length, \"-image\");\n          shipImg.src = \"./images/ship-\".concat(ship.length, \".png\");\n          shipImg.style.position = 'absolute';\n          shipImg.addEventListener('dblclick', function (event) {\n            if (setPositions === true) {\n              event.preventDefault();\n              board.removeShip(ship);\n              rotation(ship, shipImg);\n              board.rotateShip(ship);\n            }\n          });\n          initImage(ship, shipImg);\n          cell.appendChild(shipImg);\n        } else if (ship !== null && shipHead.x === coordinate.x && shipHead.y === coordinate.y && index === 1) {\n          ship = coordinate.occupied;\n          shipImg.className = \"ship-\".concat(ship.length, \"-destroyed-image\");\n          shipImg.src = \"./images/ship-\".concat(ship.length, \"-destroyed.png\");\n          shipImg.style.position = 'absolute';\n          shipImg.style.display = 'none';\n          initImage(ship, shipImg);\n          cell.appendChild(shipImg);\n        }\n\n        draggable(shipImg, board, ship);\n      });\n    });\n    container.appendChild(boardDiv);\n    document.body.appendChild(container);\n  });\n}\n\nfunction initDom(game) {\n  createBoards();\n  setPositionsButton(game);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDom);\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Game(p1, p2) {\n  var player1 = p1;\n  var player2 = p2;\n  var currentPlayer = p1;\n  var finished = false;\n\n  function gameOver() {\n    var winner = null;\n\n    if (this.player1.board.ships === 0) {\n      this.finished = true;\n      winner = this.player2;\n    } else if (this.player2.board.ships === 0) {\n      this.finished = true;\n      winner = this.player1;\n    }\n\n    return winner;\n  }\n\n  function move(latlong) {\n    var enemy = this.currentPlayer === this.player1 ? this.player2 : this.player1;\n\n    if (this.finished === false) {\n      enemy.board.receiveAttack({\n        x: latlong.x,\n        y: latlong.y\n      });\n      this.currentPlayer = enemy;\n    }\n  }\n\n  function computerMove() {\n    var x = Math.floor(Math.random() * 10);\n    var y = Math.floor(Math.random() * 10);\n    var pos = {\n      x: x,\n      y: y\n    };\n    this.move(pos);\n    return pos;\n  }\n\n  return {\n    player1: player1,\n    player2: player2,\n    currentPlayer: currentPlayer,\n    finished: finished,\n    gameOver: gameOver,\n    move: move,\n    computerMove: computerMove\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/images/explosion.png":
/*!**********************************!*\
  !*** ./src/images/explosion.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/1df7e7bf20a46b141199b1f1531b6ca1-explosion.png\";\n\n//# sourceURL=webpack:///./src/images/explosion.png?");

/***/ }),

/***/ "./src/images/water-tile.jpg":
/*!***********************************!*\
  !*** ./src/images/water-tile.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/0477e531919322afc88b1aafbe567a48-water-tile.jpg\";\n\n//# sourceURL=webpack:///./src/images/water-tile.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _setups_initBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setups/initBoard */ \"./src/setups/initBoard.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/player */ \"./src/classes/player.js\");\n\n\n\n\n\nvar p1 = new _classes_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_setups_initBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board1, true);\nvar p2 = new _classes_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_setups_initBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].board2, false);\nvar game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"](p1, p2);\nObject(_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(game);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/setups/initBoard.js":
/*!*********************************!*\
  !*** ./src/setups/initBoard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/gameBoard */ \"./src/classes/gameBoard.js\");\n/* harmony import */ var _classes_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/ship */ \"./src/classes/ship.js\");\n\n\nvar board1 = new _classes_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar board2 = new _classes_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar positions1 = [{\n  x: 2,\n  y: 8,\n  direction: 'vertical'\n}, {\n  x: 3,\n  y: 3,\n  direction: 'vertical'\n}, {\n  x: 6,\n  y: 3,\n  direction: 'horizontal'\n}, {\n  x: 7,\n  y: 5,\n  direction: 'vertical'\n}, {\n  x: 4,\n  y: 9,\n  direction: 'horizontal'\n}];\nvar positions2 = [[{\n  x: 4,\n  y: 7,\n  direction: 'vertical'\n}, {\n  x: 8,\n  y: 3,\n  direction: 'vertical'\n}, {\n  x: 2,\n  y: 3,\n  direction: 'horizontal'\n}, {\n  x: 7,\n  y: 5,\n  direction: 'vertical'\n}, {\n  x: 0,\n  y: 9,\n  direction: 'horizontal'\n}], [{\n  x: 3,\n  y: 4,\n  direction: 'vertical'\n}, {\n  x: 5,\n  y: 6,\n  direction: 'vertical'\n}, {\n  x: 2,\n  y: 3,\n  direction: 'horizontal'\n}, {\n  x: 7,\n  y: 4,\n  direction: 'vertical'\n}, {\n  x: 5,\n  y: 8,\n  direction: 'horizontal'\n}], [{\n  x: 7,\n  y: 6,\n  direction: 'vertical'\n}, {\n  x: 5,\n  y: 8,\n  direction: 'vertical'\n}, {\n  x: 3,\n  y: 2,\n  direction: 'horizontal'\n}, {\n  x: 4,\n  y: 4,\n  direction: 'vertical'\n}, {\n  x: 5,\n  y: 0,\n  direction: 'horizontal'\n}]];\npositions1.forEach(function (battleship, length) {\n  var ship = new _classes_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](length + 1, battleship.direction, {\n    x: battleship.x,\n    y: battleship.y\n  });\n  board1.insertShip(ship);\n});\nvar randomPos = Math.floor(Math.random() * 3);\npositions2[randomPos].forEach(function (battleship, length) {\n  var ship = new _classes_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](length + 1, battleship.direction, {\n    x: battleship.x,\n    y: battleship.y\n  });\n  board2.insertShip(ship);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  board1: board1,\n  board2: board2\n});\n\n//# sourceURL=webpack:///./src/setups/initBoard.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ })

/******/ });