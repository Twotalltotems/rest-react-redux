(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("react"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["axios", "react", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["rest-react-redux"] = factory(require("axios"), require("react"), require("react-redux"));
	else
		root["rest-react-redux"] = factory(root["axios"], root["react"], root["react-redux"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_axios__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.queriedEntityReducer = exports.queriedEntity = void 0;\n\nvar _queriedEntityReducer = _interopRequireDefault(__webpack_require__(/*! ./queriedEntity/queriedEntityReducer */ \"./src/queriedEntity/queriedEntityReducer.js\"));\n\nvar _queriedEntity = _interopRequireDefault(__webpack_require__(/*! ./queriedEntity/queriedEntity */ \"./src/queriedEntity/queriedEntity.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar queriedEntity = _queriedEntity.default;\nexports.queriedEntity = queriedEntity;\nvar queriedEntityReducer = _queriedEntityReducer.default;\nexports.queriedEntityReducer = queriedEntityReducer;\n\n//# sourceURL=webpack://rest-react-redux/./src/index.js?");

/***/ }),

/***/ "./src/queriedEntity/helpers.js":
/*!**************************************!*\
  !*** ./src/queriedEntity/helpers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.detailedUrl = exports.PL = exports.CFL = exports.encodeParams = exports.DELETE_ENTITY = exports.PATCH_ENTITY = exports.UPDATE_ENTITY = exports.PUSH_TO_TRACKING_QUEUE = exports.INSERT_QUERY = void 0;\n\n/** Queried entity actions **/\nvar INSERT_QUERY = function INSERT_QUERY(entityName) {\n  return 'INSERT_QUERY_' + entityName.toUpperCase();\n};\n\nexports.INSERT_QUERY = INSERT_QUERY;\n\nvar PUSH_TO_TRACKING_QUEUE = function PUSH_TO_TRACKING_QUEUE(entityName) {\n  return 'PUSH_TO_TRACKING_QUEUE_' + entityName.toUpperCase();\n};\n\nexports.PUSH_TO_TRACKING_QUEUE = PUSH_TO_TRACKING_QUEUE;\n\nvar UPDATE_ENTITY = function UPDATE_ENTITY(entityName) {\n  return 'UPDATE_ENTITY_' + entityName.toUpperCase();\n};\n\nexports.UPDATE_ENTITY = UPDATE_ENTITY;\n\nvar PATCH_ENTITY = function PATCH_ENTITY(entityName) {\n  return 'PATCH_ENTITY_' + entityName.toUpperCase();\n};\n\nexports.PATCH_ENTITY = PATCH_ENTITY;\n\nvar DELETE_ENTITY = function DELETE_ENTITY(entityName) {\n  return 'DELETE_ENTITY_' + entityName.toUpperCase();\n}; // Generates a unique key from the params objects\n\n\nexports.DELETE_ENTITY = DELETE_ENTITY;\n\nvar encodeParams = function encodeParams(params) {\n  var sortedParams = {};\n  Object.keys(params).sort().forEach(function (key) {\n    return sortedParams[key] = params[key];\n  });\n  var string = JSON.stringify(sortedParams);\n  return string.replace(/[\"{}]/g, '').replace(/,/g, '-');\n}; // Capitalizes first letter\n\n\nexports.encodeParams = encodeParams;\n\nvar CFL = function CFL(word) {\n  if (!word) return word;\n  return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);\n}; // Pluralizes the word\n\n\nexports.CFL = CFL;\n\nvar PL = function PL(word) {\n  if (!word || word.length === 0) return word;\n  if (/(x|s|ch|sh)$/i.test(word)) return word + 'es';\n  if (/y$/i.test(word)) return word.slice(0, word.length - 1) + 'ies';\n  return word + 's';\n}; // Appends id after the base url\n\n\nexports.PL = PL;\n\nvar detailedUrl = function detailedUrl(baseUrl, id) {\n  var hasSlash = baseUrl.endsWith('/');\n  return baseUrl + (!hasSlash ? '/' : '') + id;\n};\n\nexports.detailedUrl = detailedUrl;\n\n//# sourceURL=webpack://rest-react-redux/./src/queriedEntity/helpers.js?");

/***/ }),

/***/ "./src/queriedEntity/queriedEntity.js":
/*!********************************************!*\
  !*** ./src/queriedEntity/queriedEntity.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./src/queriedEntity/helpers.js\");\n\nvar _queriedEntityActions = __webpack_require__(/*! ./queriedEntityActions */ \"./src/queriedEntity/queriedEntityActions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\r\n * Queried entity abstraction (Higher Order Component)\r\n * Retrieves entityName, end point url and params. Dispatches queries and keeps track of the queries.\r\n * This component will recycles cached queries after. It retains at most RETAIN_NUMBER of queries\r\n * Per entityName used, there must be a reducer with the same name located at reducers/index.js\r\n */\n// Default number of queries to cache in store\nvar RETAIN_NUMBER = 10; // Default field that maps the results in the response body, if set to null, the whole response will be returned;\n\nvar RESULT_FIELD = 'content';\nvar filteredProps = {};\n['queryEntities', 'pushToQueue', 'createItem', 'updateItem', 'patchItem', 'deleteItem'].forEach(function (prop) {\n  return filteredProps[prop] = undefined;\n});\n\nvar _default = function _default(entityName) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$resultField = _ref.resultField,\n      resultField = _ref$resultField === void 0 ? RESULT_FIELD : _ref$resultField,\n      _ref$hideLoadIfDataFo = _ref.hideLoadIfDataFound,\n      hideLoadIfDataFound = _ref$hideLoadIfDataFo === void 0 ? true : _ref$hideLoadIfDataFo,\n      _ref$retain_number = _ref.retain_number,\n      retain_number = _ref$retain_number === void 0 ? RETAIN_NUMBER : _ref$retain_number,\n      reducer_name = _ref.reducer_name;\n\n  return function (WrappedComponent) {\n    var _class, _temp;\n\n    return (0, _reactRedux.connect)(function (state) {\n      return _defineProperty({}, (0, _helpers.PL)(entityName), state[reducer_name || (0, _helpers.PL)(entityName)]);\n    }, {\n      queryEntities: _queriedEntityActions.queryEntities,\n      pushToQueue: _queriedEntityActions.pushToQueue,\n      createEntity: _queriedEntityActions.createEntity,\n      updateEntity: _queriedEntityActions.updateEntity,\n      patchEntity: _queriedEntityActions.patchEntity,\n      deleteEntity: _queriedEntityActions.deleteEntity\n    })((_temp = _class =\n    /*#__PURE__*/\n    function (_React$Component) {\n      _inherits(_class, _React$Component);\n\n      function _class() {\n        var _getPrototypeOf2;\n\n        var _this;\n\n        _classCallCheck(this, _class);\n\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n          params: {},\n          loadingData: false\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"initialQuery\", function (url) {\n          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n          _this.setState({\n            url: url\n          });\n\n          _this.query(params, url);\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"query\", function () {\n          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.params;\n          var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.url;\n\n          var oldParams = _objectSpread({}, _this.state.params);\n\n          var newParams = _objectSpread({}, oldParams, params);\n\n          _this.setState({\n            params: newParams,\n            loadingData: true\n          });\n\n          var dataExists = !!_this.props[(0, _helpers.PL)(entityName)][(0, _helpers.encodeParams)(newParams)];\n          if (!dataExists || !hideLoadIfDataFound) _this.props.freeze();\n\n          _this.props.queryEntities(entityName, url, newParams, function () {\n            _this.setState({\n              loadingData: false\n            });\n\n            _this.props.unfreeze();\n\n            _this.collectGarbage(newParams);\n          }, function () {\n            _this.setState({\n              loadingData: false,\n              params: oldParams\n            });\n\n            _this.props.unfreeze();\n          });\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"checkSetup\", function () {\n          var url = _this.state.url;\n          if (!url) throw new Error(\"No url specified for \".concat(entityName));\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"create\", function (entity) {\n          _this.checkSetup();\n\n          _this.props.freeze();\n\n          _this.props.createEntity(entityName, entity, _this.state.url, function () {\n            _this.props.unfreeze();\n\n            _this.query();\n          });\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"update\", function (entity) {\n          _this.checkSetup();\n\n          _this.props.freeze();\n\n          _this.props.updateEntity(entityName, entity, _this.state.url, resultField, function () {\n            _this.props.unfreeze();\n\n            _this.query();\n          });\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"patch\", function (fields) {\n          _this.checkSetup();\n\n          _this.props.freeze();\n\n          _this.props.patchEntity(entityName, fields, _this.state.url, resultField, function () {\n            _this.props.unfreeze();\n\n            _this.query();\n          });\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"delete\", function (entity) {\n          _this.checkSetup();\n\n          if (typeof entity === 'string') entity = {\n            id: entity\n          };\n\n          _this.props.freeze();\n\n          _this.props.deleteEntity(entityName, entity, _this.state.url, resultField, function () {\n            _this.props.unfreeze();\n\n            _this.query();\n          });\n        });\n\n        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"collectGarbage\", function (params) {\n          return _this.props.pushToQueue(entityName, (0, _helpers.encodeParams)(params), retain_number);\n        });\n\n        return _this;\n      }\n\n      _createClass(_class, [{\n        key: \"render\",\n        value: function render() {\n          var _injectedProps;\n\n          var params = this.state.params;\n          var queryData = this.props[(0, _helpers.PL)(entityName)][(0, _helpers.encodeParams)(params)] || {};\n          var queryMetadata = resultField ? _objectSpread({}, queryData) : undefined;\n          if (resultField) delete queryMetadata[resultField];\n          var injectedProps = (_injectedProps = {}, _defineProperty(_injectedProps, (0, _helpers.PL)(entityName), (resultField ? queryData && queryData[resultField] : queryData) || []), _defineProperty(_injectedProps, (0, _helpers.PL)(entityName) + 'Metadata', queryMetadata), _defineProperty(_injectedProps, 'initialQuery' + (0, _helpers.CFL)((0, _helpers.PL)(entityName)), this.initialQuery), _defineProperty(_injectedProps, 'query' + (0, _helpers.CFL)((0, _helpers.PL)(entityName)), this.query), _defineProperty(_injectedProps, 'create' + (0, _helpers.CFL)(entityName), this.create), _defineProperty(_injectedProps, 'update' + (0, _helpers.CFL)(entityName), this.update), _defineProperty(_injectedProps, 'patch' + (0, _helpers.CFL)(entityName), this.patch), _defineProperty(_injectedProps, 'delete' + (0, _helpers.CFL)(entityName), this.delete), _defineProperty(_injectedProps, 'loading' + (0, _helpers.CFL)((0, _helpers.PL)(entityName)), this.state.loadingData), _injectedProps);\n          return _react.default.createElement(WrappedComponent, _extends({}, this.props, filteredProps, this.state.params, injectedProps));\n        }\n      }]);\n\n      return _class;\n    }(_react.default.Component), _defineProperty(_class, \"defaultProps\", {\n      freeze: function freeze() {},\n      unfreeze: function unfreeze() {}\n    }), _temp));\n  };\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://rest-react-redux/./src/queriedEntity/queriedEntity.js?");

/***/ }),

/***/ "./src/queriedEntity/queriedEntityActions.js":
/*!***************************************************!*\
  !*** ./src/queriedEntity/queriedEntityActions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.deleteEntity = exports.patchEntity = exports.updateEntity = exports.createEntity = exports.pushToQueue = exports.queryEntities = exports.patchEntityDispatch = void 0;\n\nvar types = _interopRequireWildcard(__webpack_require__(/*! ./helpers */ \"./src/queriedEntity/helpers.js\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\r\n * Actions\r\n */\nvar insertQuery = function insertQuery(payload, entityName) {\n  return {\n    type: types.INSERT_QUERY(entityName),\n    payload: payload\n  };\n};\n\nvar updateEntityDispatch = function updateEntityDispatch(payload, entityName) {\n  return {\n    type: types.UPDATE_ENTITY(entityName),\n    payload: payload\n  };\n};\n\nvar patchEntityDispatch = function patchEntityDispatch(payload, entityName) {\n  return {\n    type: types.PATCH_ENTITY(entityName),\n    payload: payload\n  };\n};\n\nexports.patchEntityDispatch = patchEntityDispatch;\n\nvar deleteEntityDispatch = function deleteEntityDispatch(payload, entityName) {\n  var type = types.DELETE_ENTITY(entityName);\n  return {\n    type: type,\n    payload: payload\n  };\n};\n\nvar queryEntities = function queryEntities(entityName, url, params, onSuccess, onFailure) {\n  return function (dispatch) {\n    return _axios.default.get(url, {\n      params: params\n    }).then(function (_ref) {\n      var data = _ref.data;\n      dispatch(insertQuery(_objectSpread({}, data, {\n        query: (0, types.encodeParams)(params)\n      }), entityName));\n      onSuccess && onSuccess();\n    }).catch(function () {\n      onFailure && onFailure();\n    });\n  };\n};\n\nexports.queryEntities = queryEntities;\n\nvar pushToQueue = function pushToQueue(entityName, key, retain_number) {\n  return {\n    type: types.PUSH_TO_TRACKING_QUEUE(entityName),\n    payload: {\n      key: key,\n      retain_number: retain_number\n    }\n  };\n};\n\nexports.pushToQueue = pushToQueue;\n\nvar createEntity = function createEntity(entityName, entity, url, onSuccess, onFailure) {\n  return function (dispatch) {\n    return _axios.default.post(url, entity).then(function () {\n      // The returned data will not be of any special use since the position it is placed in db is unknown\n      // therefore no dispatch is made to store\n      onSuccess && onSuccess();\n    }).catch(function () {\n      onFailure && onFailure();\n    });\n  };\n};\n\nexports.createEntity = createEntity;\n\nvar updateEntity = function updateEntity(entityName, entity, url, resultField, onSuccess, onFailure) {\n  if (!entity.id) throw new Error(\"Entity \".concat(entityName, \" does not have id to update\"));\n  return function (dispatch) {\n    return _axios.default.put((0, types.detailedUrl)(url, entity.id), entity).then(function (_ref2) {\n      _objectDestructuringEmpty(_ref2);\n\n      dispatch(updateEntityDispatch({\n        entity: entity,\n        resultField: resultField\n      }, entityName));\n      onSuccess && onSuccess();\n    }).catch(function (e) {\n      onFailure && onFailure();\n      console.log(e);\n    });\n  };\n};\n\nexports.updateEntity = updateEntity;\n\nvar patchEntity = function patchEntity(entityName, entity, url, resultField, onSuccess, onFailure) {\n  if (!entity.id) throw new Error(\"Entity \".concat(entityName, \" does not have id to patch\"));\n  return function (dispatch) {\n    return _axios.default.patch((0, types.detailedUrl)(url, entity.id), entity).then(function () {\n      dispatch(patchEntityDispatch({\n        entity: entity,\n        resultField: resultField\n      }, entityName));\n      onSuccess && onSuccess();\n    }).catch(function (e) {\n      onFailure && onFailure();\n      console.log(e);\n    });\n  };\n};\n\nexports.patchEntity = patchEntity;\n\nvar deleteEntity = function deleteEntity(entityName, entity, url, resultField, onSuccess, onFailure) {\n  if (!entity.id) throw new Error(\"Entity \".concat(entityName, \" does not have id to delete\"));\n  return function (dispatch) {\n    return _axios.default.delete((0, types.detailedUrl)(url, entity.id)).then(function () {\n      dispatch(deleteEntityDispatch({\n        entity: entity,\n        resultField: resultField\n      }, entityName));\n      onSuccess && onSuccess();\n    }).catch(function (e) {\n      onFailure && onFailure();\n      console.log(e);\n    });\n  };\n};\n\nexports.deleteEntity = deleteEntity;\n\n//# sourceURL=webpack://rest-react-redux/./src/queriedEntity/queriedEntityActions.js?");

/***/ }),

/***/ "./src/queriedEntity/queriedEntityReducer.js":
/*!***************************************************!*\
  !*** ./src/queriedEntity/queriedEntityReducer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar types = _interopRequireWildcard(__webpack_require__(/*! ./helpers */ \"./src/queriedEntity/helpers.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar defaultState = {\n  tracker: []\n};\n\nvar _default = function _default(entityName) {\n  return function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments.length > 1 ? arguments[1] : undefined;\n\n    switch (action.type) {\n      case types.INSERT_QUERY(entityName):\n        {\n          return _objectSpread({}, state, _defineProperty({}, action.payload.query, action.payload));\n        }\n\n      case types.PUSH_TO_TRACKING_QUEUE(entityName):\n        {\n          var tracker = _toConsumableArray(state.tracker);\n\n          var _action$payload = action.payload,\n              key = _action$payload.key,\n              retain_number = _action$payload.retain_number;\n          var index = tracker.indexOf(key);\n          if (index > -1) tracker.splice(index, 1);else if (tracker.length >= retain_number) {\n            delete state[tracker[0]];\n            tracker.shift();\n          }\n          tracker.push(key);\n          return _objectSpread({}, state, {\n            tracker: _toConsumableArray(tracker)\n          });\n        }\n\n      case types.UPDATE_ENTITY(entityName):\n        {\n          var _tracker = state.tracker;\n          if (_tracker.length === 0) return state;\n          var lastQuery = _tracker[_tracker.length - 1];\n          var lastQueryData = state[lastQuery];\n          if (!lastQueryData) return state;\n          var _action$payload2 = action.payload,\n              entity = _action$payload2.entity,\n              resultField = _action$payload2.resultField;\n          var newQueryData = lastQueryData[resultField].map(function (data) {\n            if (entity.id === data.id) return entity;\n            return data;\n          });\n          return _objectSpread({}, state, _defineProperty({}, lastQuery, newQueryData));\n        }\n\n      case types.PATCH_ENTITY(entityName):\n        {\n          var _tracker2 = state.tracker;\n          if (_tracker2.length === 0) return state;\n          var _lastQuery = _tracker2[_tracker2.length - 1];\n          var _lastQueryData = state[_lastQuery];\n          if (!_lastQueryData) return state;\n          var patchedFields = action.payload;\n\n          var _newQueryData = _lastQueryData.map(function (data) {\n            if (patchedFields.id === _newQueryData.id) return _objectSpread({}, data, patchedFields);\n            return data;\n          });\n\n          return _objectSpread({}, state, _defineProperty({}, _lastQuery, _newQueryData));\n        }\n\n      case types.DELETE_ENTITY(entityName):\n        {\n          var _tracker3 = state.tracker;\n          if (_tracker3.length === 0) return state;\n          var _action$payload3 = action.payload,\n              _resultField = _action$payload3.resultField,\n              _entity = _action$payload3.entity;\n          var _lastQuery2 = _tracker3[_tracker3.length - 1];\n          var _lastQueryData2 = state[_lastQuery2];\n          if (!_lastQueryData2) return state;\n\n          var _newQueryData2 = _lastQueryData2[_resultField].filter(function (data) {\n            return _entity.id !== data.id;\n          });\n\n          return _objectSpread({}, state, _defineProperty({}, _lastQuery2, _newQueryData2));\n        }\n\n      default:\n        return state;\n    }\n  };\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://rest-react-redux/./src/queriedEntity/queriedEntityReducer.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;\n\n//# sourceURL=webpack://rest-react-redux/external_%22axios%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://rest-react-redux/external_%22react%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://rest-react-redux/external_%22react-redux%22?");

/***/ })

/******/ });
});