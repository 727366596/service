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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(31);
var toPrimitive = __webpack_require__(20);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(10);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(51);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(39);
var hide = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(35);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(19);
var wksExt = __webpack_require__(25);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(45);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(59);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(19);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(33);
var hide = __webpack_require__(6);
var has = __webpack_require__(4);
var Iterators = __webpack_require__(12);
var $iterCreate = __webpack_require__(49);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(41);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(54).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(35);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(47)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(16);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(11);
var core = __webpack_require__(1);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(55);
module.exports = __webpack_require__(25).f('iterator');


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var defined = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(34);
var descriptor = __webpack_require__(10);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(15);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(40);
var toAbsoluteIndex = __webpack_require__(53);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
var global = __webpack_require__(2);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(12);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(57);
var step = __webpack_require__(58);
var Iterators = __webpack_require__(12);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(33);
var META = __webpack_require__(62).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(24);
var uid = __webpack_require__(14);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(25);
var wksDefine = __webpack_require__(26);
var enumKeys = __webpack_require__(63);
var isArray = __webpack_require__(64);
var anObject = __webpack_require__(9);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(20);
var createDesc = __webpack_require__(10);
var _create = __webpack_require__(34);
var gOPNExt = __webpack_require__(65);
var $GOPD = __webpack_require__(66);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(15);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(19)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(27);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(28);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(37).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(10);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(20);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(31);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 67 */
/***/ (function(module, exports) {



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('asyncIterator');


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('observable');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(43);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * APICloud JavaScript Library
 * Copyright (c) 2014 apicloud.com
 */
(function (window) {
    var u = {};
    var isAndroid = /android/gi.test(navigator.appVersion);
    var uzStorage = function uzStorage() {
        var ls = window.localStorage;
        if (isAndroid) {
            ls = os.localStorage();
        }
        return ls;
    };
    function parseArguments(url, data, fnSuc, dataType) {
        if (typeof data == 'function') {
            dataType = fnSuc;
            fnSuc = data;
            data = undefined;
        }
        if (typeof fnSuc != 'function') {
            dataType = fnSuc;
            fnSuc = undefined;
        }
        return {
            url: url,
            data: data,
            fnSuc: fnSuc,
            dataType: dataType
        };
    }
    u.trim = function (str) {
        if (String.prototype.trim) {
            return str == null ? "" : String.prototype.trim.call(str);
        } else {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }
    };
    u.trimAll = function (str) {
        return str.replace(/\s*/g, '');
    };
    u.isElement = function (obj) {
        return !!(obj && obj.nodeType == 1);
    };
    u.isArray = function (obj) {
        if (Array.isArray) {
            return Array.isArray(obj);
        } else {
            return obj instanceof Array;
        }
    };
    u.isEmptyObject = function (obj) {
        if ((0, _stringify2.default)(obj) === '{}') {
            return true;
        }
        return false;
    };
    u.addEvt = function (el, name, fn, useCapture) {
        if (!u.isElement(el)) {
            console.warn('$api.addEvt Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        if (el.addEventListener) {
            el.addEventListener(name, fn, useCapture);
        }
    };
    u.rmEvt = function (el, name, fn, useCapture) {
        if (!u.isElement(el)) {
            console.warn('$api.rmEvt Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        if (el.removeEventListener) {
            el.removeEventListener(name, fn, useCapture);
        }
    };
    u.one = function (el, name, fn, useCapture) {
        if (!u.isElement(el)) {
            console.warn('$api.one Function need el param, el param must be DOM Element');
            return;
        }
        useCapture = useCapture || false;
        var that = this;
        var cb = function cb() {
            fn && fn();
            that.rmEvt(el, name, cb, useCapture);
        };
        that.addEvt(el, name, cb, useCapture);
    };
    u.dom = function (el, selector) {
        if (arguments.length === 1 && typeof arguments[0] == 'string') {
            if (document.querySelector) {
                return document.querySelector(arguments[0]);
            }
        } else if (arguments.length === 2) {
            if (el.querySelector) {
                return el.querySelector(selector);
            }
        }
    };
    u.domAll = function (el, selector) {
        if (arguments.length === 1 && typeof arguments[0] == 'string') {
            if (document.querySelectorAll) {
                return document.querySelectorAll(arguments[0]);
            }
        } else if (arguments.length === 2) {
            if (el.querySelectorAll) {
                return el.querySelectorAll(selector);
            }
        }
    };
    u.byId = function (id) {
        return document.getElementById(id);
    };
    u.first = function (el, selector) {
        if (arguments.length === 1) {
            if (!u.isElement(el)) {
                console.warn('$api.first Function need el param, el param must be DOM Element');
                return;
            }
            return el.children[0];
        }
        if (arguments.length === 2) {
            return this.dom(el, selector + ':first-child');
        }
    };
    u.last = function (el, selector) {
        if (arguments.length === 1) {
            if (!u.isElement(el)) {
                console.warn('$api.last Function need el param, el param must be DOM Element');
                return;
            }
            var children = el.children;
            return children[children.length - 1];
        }
        if (arguments.length === 2) {
            return this.dom(el, selector + ':last-child');
        }
    };
    u.eq = function (el, index) {
        return this.dom(el, ':nth-child(' + index + ')');
    };
    u.not = function (el, selector) {
        return this.domAll(el, ':not(' + selector + ')');
    };
    u.prev = function (el) {
        if (!u.isElement(el)) {
            console.warn('$api.prev Function need el param, el param must be DOM Element');
            return;
        }
        var node = el.previousSibling;
        if (node.nodeType && node.nodeType === 3) {
            node = node.previousSibling;
            return node;
        }
    };
    u.next = function (el) {
        if (!u.isElement(el)) {
            console.warn('$api.next Function need el param, el param must be DOM Element');
            return;
        }
        var node = el.nextSibling;
        if (node.nodeType && node.nodeType === 3) {
            node = node.nextSibling;
            return node;
        }
    };
    u.closest = function (el, selector) {
        if (!u.isElement(el)) {
            console.warn('$api.closest Function need el param, el param must be DOM Element');
            return;
        }
        var doms, targetDom;
        var isSame = function isSame(doms, el) {
            var i = 0,
                len = doms.length;
            for (i; i < len; i++) {
                if (doms[i].isEqualNode(el)) {
                    return doms[i];
                }
            }
            return false;
        };
        var traversal = function traversal(el, selector) {
            doms = u.domAll(el.parentNode, selector);
            targetDom = isSame(doms, el);
            while (!targetDom) {
                el = el.parentNode;
                if (el != null && el.nodeType == el.DOCUMENT_NODE) {
                    return false;
                }
                traversal(el, selector);
            }

            return targetDom;
        };

        return traversal(el, selector);
    };
    u.contains = function (parent, el) {
        var mark = false;
        if (el === parent) {
            mark = true;
            return mark;
        } else {
            do {
                el = el.parentNode;
                if (el === parent) {
                    mark = true;
                    return mark;
                }
            } while (el === document.body || el === document.documentElement);

            return mark;
        }
    };
    u.remove = function (el) {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    };
    u.attr = function (el, name, value) {
        if (!u.isElement(el)) {
            console.warn('$api.attr Function need el param, el param must be DOM Element');
            return;
        }
        if (arguments.length == 2) {
            return el.getAttribute(name);
        } else if (arguments.length == 3) {
            el.setAttribute(name, value);
            return el;
        }
    };
    u.removeAttr = function (el, name) {
        if (!u.isElement(el)) {
            console.warn('$api.removeAttr Function need el param, el param must be DOM Element');
            return;
        }
        if (arguments.length === 2) {
            el.removeAttribute(name);
        }
    };
    u.hasCls = function (el, cls) {
        if (!u.isElement(el)) {
            console.warn('$api.hasCls Function need el param, el param must be DOM Element');
            return;
        }
        if (el.className.indexOf(cls) > -1) {
            return true;
        } else {
            return false;
        }
    };
    u.addCls = function (el, cls) {
        if (!u.isElement(el)) {
            console.warn('$api.addCls Function need el param, el param must be DOM Element');
            return;
        }
        if ('classList' in el) {
            el.classList.add(cls);
        } else {
            var preCls = el.className;
            var newCls = preCls + ' ' + cls;
            el.className = newCls;
        }
        return el;
    };
    u.removeCls = function (el, cls) {
        if (!u.isElement(el)) {
            console.warn('$api.removeCls Function need el param, el param must be DOM Element');
            return;
        }
        if ('classList' in el) {
            el.classList.remove(cls);
        } else {
            var preCls = el.className;
            var newCls = preCls.replace(cls, '');
            el.className = newCls;
        }
        return el;
    };
    u.toggleCls = function (el, cls) {
        if (!u.isElement(el)) {
            console.warn('$api.toggleCls Function need el param, el param must be DOM Element');
            return;
        }
        if ('classList' in el) {
            el.classList.toggle(cls);
        } else {
            if (u.hasCls(el, cls)) {
                u.removeCls(el, cls);
            } else {
                u.addCls(el, cls);
            }
        }
        return el;
    };
    u.val = function (el, val) {
        if (!u.isElement(el)) {
            console.warn('$api.val Function need el param, el param must be DOM Element');
            return;
        }
        if (arguments.length === 1) {
            switch (el.tagName) {
                case 'SELECT':
                    var value = el.options[el.selectedIndex].value;
                    return value;
                    break;
                case 'INPUT':
                    return el.value;
                    break;
                case 'TEXTAREA':
                    return el.value;
                    break;
            }
        }
        if (arguments.length === 2) {
            switch (el.tagName) {
                case 'SELECT':
                    el.options[el.selectedIndex].value = val;
                    return el;
                    break;
                case 'INPUT':
                    el.value = val;
                    return el;
                    break;
                case 'TEXTAREA':
                    el.value = val;
                    return el;
                    break;
            }
        }
    };
    u.prepend = function (el, html) {
        if (!u.isElement(el)) {
            console.warn('$api.prepend Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('afterbegin', html);
        return el;
    };
    u.append = function (el, html) {
        if (!u.isElement(el)) {
            console.warn('$api.append Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('beforeend', html);
        return el;
    };
    u.before = function (el, html) {
        if (!u.isElement(el)) {
            console.warn('$api.before Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('beforebegin', html);
        return el;
    };
    u.after = function (el, html) {
        if (!u.isElement(el)) {
            console.warn('$api.after Function need el param, el param must be DOM Element');
            return;
        }
        el.insertAdjacentHTML('afterend', html);
        return el;
    };
    u.html = function (el, html) {
        if (!u.isElement(el)) {
            console.warn('$api.html Function need el param, el param must be DOM Element');
            return;
        }
        if (arguments.length === 1) {
            return el.innerHTML;
        } else if (arguments.length === 2) {
            el.innerHTML = html;
            return el;
        }
    };
    u.text = function (el, txt) {
        if (!u.isElement(el)) {
            console.warn('$api.text Function need el param, el param must be DOM Element');
            return;
        }
        if (arguments.length === 1) {
            return el.textContent;
        } else if (arguments.length === 2) {
            el.textContent = txt;
            return el;
        }
    };
    u.offset = function (el) {
        if (!u.isElement(el)) {
            console.warn('$api.offset Function need el param, el param must be DOM Element');
            return;
        }
        var sl = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        var st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

        var rect = el.getBoundingClientRect();
        return {
            l: rect.left + sl,
            t: rect.top + st,
            w: el.offsetWidth,
            h: el.offsetHeight
        };
    };
    u.css = function (el, css) {
        if (!u.isElement(el)) {
            console.warn('$api.css Function need el param, el param must be DOM Element');
            return;
        }
        if (typeof css == 'string' && css.indexOf(':') > 0) {
            el.style && (el.style.cssText += ';' + css);
        }
    };
    u.cssVal = function (el, prop) {
        if (!u.isElement(el)) {
            console.warn('$api.cssVal Function need el param, el param must be DOM Element');
            return;
        }
        if (arguments.length === 2) {
            var computedStyle = window.getComputedStyle(el, null);
            return computedStyle.getPropertyValue(prop);
        }
    };
    u.jsonToStr = function (json) {
        if ((typeof json === 'undefined' ? 'undefined' : (0, _typeof3.default)(json)) === 'object') {
            return JSON && (0, _stringify2.default)(json);
        }
    };
    u.strToJson = function (str) {
        if (typeof str === 'string') {
            return JSON && JSON.parse(str);
        }
    };
    u.setStorage = function (key, value) {
        if (arguments.length === 2) {
            var v = value;
            if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) == 'object') {
                v = (0, _stringify2.default)(v);
                v = 'obj-' + v;
            } else {
                v = 'str-' + v;
            }
            var ls = uzStorage();
            if (ls) {
                ls.setItem(key, v);
            }
        }
    };
    u.getStorage = function (key) {
        var ls = uzStorage();
        if (ls) {
            var v = ls.getItem(key);
            if (!v) {
                return;
            }
            if (v.indexOf('obj-') === 0) {
                v = v.slice(4);
                return JSON.parse(v);
            } else if (v.indexOf('str-') === 0) {
                return v.slice(4);
            }
        }
    };
    u.rmStorage = function (key) {
        var ls = uzStorage();
        if (ls && key) {
            ls.removeItem(key);
        }
    };
    u.clearStorage = function () {
        var ls = uzStorage();
        if (ls) {
            ls.clear();
        }
    };

    /*by king*/
    u.fixIos7Bar = function (el) {
        if (!u.isElement(el)) {
            console.warn('$api.fixIos7Bar Function need el param, el param must be DOM Element');
            return;
        }
        var strDM = api.systemType;
        if (strDM == 'ios') {
            var strSV = api.systemVersion;
            var numSV = parseInt(strSV, 10);
            var fullScreen = api.fullScreen;
            var iOS7StatusBarAppearance = api.iOS7StatusBarAppearance;
            if (numSV >= 7 && !fullScreen && iOS7StatusBarAppearance) {
                el.style.paddingTop = '20px';
            }
        }
    };
    u.fixStatusBar = function (el) {
        if (!u.isElement(el)) {
            console.warn('$api.fixStatusBar Function need el param, el param must be DOM Element');
            return;
        }
        var sysType = api.systemType;
        if (sysType == 'ios') {
            u.fixIos7Bar(el);
        } else if (sysType == 'android') {
            var ver = api.systemVersion;
            ver = parseFloat(ver);
            if (ver >= 4.4) {
                el.style.paddingTop = '25px';
            }
        }
    };
    u.toast = function (title, text, time) {
        var opts = {};
        var show = function show(opts, time) {
            api.showProgress(opts);
            setTimeout(function () {
                api.hideProgress();
            }, time);
        };
        if (arguments.length === 1) {
            var time = time || 500;
            if (typeof title === 'number') {
                time = title;
            } else {
                opts.title = title + '';
            }
            show(opts, time);
        } else if (arguments.length === 2) {
            var time = time || 500;
            var text = text;
            if (typeof text === "number") {
                var tmp = text;
                time = tmp;
                text = null;
            }
            if (title) {
                opts.title = title;
            }
            if (text) {
                opts.text = text;
            }
            show(opts, time);
        }
        if (title) {
            opts.title = title;
        }
        if (text) {
            opts.text = text;
        }
        time = time || 500;
        show(opts, time);
    };

    /*end*/

    window.$api = u;
})(window);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(75);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(76);

var _keys2 = _interopRequireDefault(_keys);

var _from = __webpack_require__(79);

var _from2 = _interopRequireDefault(_from);

exports.getSize = getSize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by wenwang on 2017/8/24.
 */

__webpack_require__(72);

/*function isArrayLike(o) {
 if (o &&                                    // o不是null、undefined等
 typeof o === 'object' &&                // o是对象
 isFinite(o.length) &&                   // o.length是有限数值
 o.length >= 0 &&                        // o.length为非负值
 o.length === Math.floor(o.length) &&    // o.length是整数
 o.length < 4294967296)                  // o.length < 2^32
 return true
 else
 return false
 }*/

var isArray = Array.isArray || function (object) {
  return object instanceof Array;
};
var selectElements = function selectElements(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  // class, id, tag name or universal selector
  if (/^[\#.]?[\w-]+$/.test(selector)) {
    var firstChar = selector[0];
    if (firstChar == ".") {
      return (0, _from2.default)(context.getElementsByClassName(selector.slice(1)));
    }
    if (firstChar == "#") {
      var el = context.getElementById(selector.slice(1));
      return el ? [el] : [];
    }
    if (selector == "body") {
      return [document.body];
    }
    return (0, _from2.default)(context.getElementsByTagName(selector));
  }
  return (0, _from2.default)(context.querySelectorAll(selector));
};
var JQ_STYLE_OBJ = '_jq_style_';
var jqStyle = function jqStyle(selector) {
  var _ref;

  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;


  var elements = void 0;
  if (typeof selector == "string") {
    elements = JQ_STYLE_OBJ === context._type ? context.find(selector).get() : selectElements(selector, context);
  } else if (isArray(selector)) {
    elements = sanitize(selector);
  } else if (selector instanceof NodeList || selector instanceof HTMLCollection) {
    elements = (0, _from2.default)(selector);
  } else if (JQ_STYLE_OBJ === selector._type) {
    return selector;
  } else {
    // assume DOM node
    elements = selector ? [selector] : [];
  }

  return _ref = {
    _type: JQ_STYLE_OBJ,
    elements: elements,
    length: elements.length,
    size: function size() {
      return this.length;
    },
    isEmpty: function isEmpty() {
      return this.elements.length === 0;
    },

    each: function each(callback) {
      // callback(index, element) where element == this
      var els = this.elements;
      var len = this.length;
      for (var i = 0; i < len; i++) {
        var node = els[i];
        callback.call(node, i, node);
      }
      return this;
    },
    map: function map(callback) {
      var flattenArrays = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var dom = this.get();
      var len = this.length;
      var values = [];
      for (var i = 0; i < len; i++) {
        var el = dom[i];
        var val = callback.call(el, i, el);
        if (flattenArrays && isArray(val)) {
          var valLen = val.length;
          for (var j = 0; j < valLen; j++) {
            values.push(val[j]);
          }
          continue;
        }
        values.push(val);
      }
      return jqStyle(values);
    },

    //样式
    css: function css(_css) {
      if (arguments.length === 2) {
        _css = arguments[0] + ":" + arguments[1];
      }
      this.elements.forEach(function (element) {
        $api.css(element, _css);
      });
      return this;
    },
    addCls: function addCls(cls) {
      this.elements.forEach(function (element) {
        $api.addCls(element, cls);
      });
      return this;
    },
    removeCls: function removeCls(cls) {
      this.elements.forEach(function (element) {
        $api.removeCls(element, cls);
      });
      return this;
    },
    toggleCls: function toggleCls(cls) {
      this.elements.forEach(function (element) {
        $api.toggleCls(element, cls);
      });
      return this;
    },
    hasCls: function hasCls(cls) {
      return this.hasClass(cls);
    },
    addClass: function addClass(cls) {
      return this.addCls(cls);
    },
    removeClass: function removeClass(cls) {
      return this.removeCls(cls);
    },
    toggleClass: function toggleClass(cls) {
      return this.toggleCls(cls);
    },


    //存取值
    html: function html(_html) {
      if (arguments.length === 0) {
        var ret = this.elements.map(function (element) {
          return $api.html(element);
        });
        if (ret.length === 0) {
          return '';
        } else if (ret.length === 1) {
          return ret[0];
        }
        return ret;
      }
      this.elements.forEach(function (element) {
        $api.html(element, _html);
      });
      return this;
    },
    val: function val(_val) {
      if (arguments.length === 0) {
        var ret = this.elements.map(function (element) {
          return $api.val(element);
        });
        if (ret.length === 0) {
          return '';
        } else if (ret.length === 1) {
          return ret[0];
        }
        return ret;
      }
      this.elements.forEach(function (element) {
        $api.val(element, _val);
      });
      return this;
    },
    text: function text(_text) {
      if (arguments.length === 0) {
        var ret = this.elements.map(function (element) {
          return $api.text(element);
        });
        if (ret.length === 0) {
          return '';
        } else if (ret.length === 1) {
          return ret[0];
        }
        return ret;
      }
      this.elements.forEach(function (element) {
        $api.text(element, _text);
      });
      return this;
    },
    textJson: function textJson(json) {
      var _this = this;

      var keys = (0, _keys2.default)(json);
      keys.forEach(function (key) {
        var inputs = _this._elementsByName(key);
        var val = json[key];
        inputs.forEach(function (it) {
          $api.text(it, val);
        });
      });
    },
    clear: function clear() {
      var first = this.get(0);
      var tagName = first.tagName;
      this.elements.forEach(function (element) {
        if (tagName === 'INPUT') {
          if (element.type === 'checkbox' || element.type === 'radio') {
            element.checked = false;
          } else {
            element.value = '';
          }
        } else if (tagName === 'SELECT') {
          element.selectedIndex = 0;
        } else if (tagName === 'TEXTAREA') {
          element.value = '';
        }
      });
      return this;
    },
    json: function json(_json) {
      if (arguments.length === 0) {
        var o = {};
        this.elements.forEach(function (element) {
          var name = element.name || element.id;
          var e = element;
          if (e.type === 'checkbox') {
            if (e.checked && !e.disabled) {
              if (o[name]) {
                o[name].push(e.value || '');
              } else {
                o[name] = [e.value];
              }
            }
          } else if (e.type === 'radio') {
            if (e.checked) {
              o[name] = e.value || '';
            }
          } else {
            o[name] = $api.val(e) || '';
          }
        });
        return o;
      }
      for (var key in _json) {
        var inputs = this._elementsByName(key);
        var val = _json[key];
        if (inputs.length > 0) {
          var first = inputs[0];
          var tagName = first.tagName;
          if (tagName === 'INPUT') {
            if (first.type === 'checkbox' || first.type === 'radio') {
              var chkVals = $api.isArray(val) ? val : [val];
              for (var _i = 0; _i < inputs.length; ++_i) {
                var el = inputs[_i];
                var elVal = el.value;
                for (var j = 0; j < chkVals.length; ++j) {
                  if (elVal === "" + chkVals[j]) {
                    if (!el.checked) {
                      el.checked = true;
                    }
                  } else {
                    if (el.checked) {
                      el.checked = false;
                    }
                  }
                }
              }
            } else {
              first.value = val;
            }
          } else if (tagName === 'TEXTAREA') {
            first.value = val;
          } else if (tagName === 'SELECT') {
            //目前仅处理单选
            var opts = first.options;
            var idx = 0;
            for (var _i2 = 0; _i2 < opts.length; ++_i2) {
              if ("" + val === opts[_i2].value) {
                idx = _i2;
                break;
              }
            }
            first.selectedIndex = idx;
          }
        }
      }
      return this;
    },


    //存取属性
    attr: function attr(name, value) {
      var isFunc = typeof value == "function";
      if (typeof value == "string" || typeof value == "number" || isFunc) {
        return this.each(function (i) {
          if (this.nodeType > 1) return;
          this.setAttribute(name, isFunc ? value.call(this, i, this.getAttribute(name)) : value);
        });
      }
      if ((typeof name === "undefined" ? "undefined" : (0, _typeof3.default)(name)) == "object") {
        var attrNames = (0, _keys2.default)(name);
        var attrNamesLen = attrNames.length;
        return this.each(function () {
          if (this.nodeType > 1) return;
          for (var i = 0; i < attrNamesLen; i++) {
            var attribute = attrNames[i];
            this.setAttribute(attribute, name[attribute]);
          }
        });
      }
      var el = this.get(0);
      if (!el || el.nodeType > 1) return;
      var attrValue = el.getAttribute(name);
      if (attrValue == null) {
        return undefined;
      }
      if (!attrValue) {
        return name;
      }
      return attrValue;
    },
    removeAttr: function removeAttr(attributeName) {
      if (attributeName) {
        var attributes = attributeName.trim().split(" ");
        var attributesLen = attributes.length;
        this.each(function () {
          if (this.nodeType > 1) return;
          for (var i = 0; i < attributesLen; i++) {
            this.removeAttribute(attributes[i]);
          }
        });
      }
      return this;
    },

    //事件
    on: function on(name, fn, useCapture) {
      this.each(function () {
        $api.addEvt(this, name, fn, useCapture);
      });
      return this;
    },
    off: function off(name, fn, useCapture) {
      this.each(function () {
        $api.rmEvt(this, name, fn, useCapture);
      });
      return this;
    },
    one: function one(name, fn, useCapture) {
      this.each(function () {
        $api.one(this, name, fn, useCapture);
      });
      return this;
    },


    //遍历
    get: function get(index) {
      if (index == null) {
        return this.elements;
      }
      if (index < 0) {
        index += this.elements.length;
      }
      return this.elements[index];
    },
    find: function find(selector) {
      if (this.isEmpty()) {
        console.warn('jqStyle find selector, need  elements and must be DOM Element');
        return undefined;
      }
      return jqStyle(selector, this.elements[0]);
    },
    closest: function closest(selector) {
      if (this.isEmpty()) {
        console.warn('jqStyle closest, need  elements and must be DOM Element');
        return undefined;
      }
      return jqStyle($api.closest(this.elements[0], selector));
    },
    first: function first() {
      if (this.isEmpty()) {
        console.warn('jqStyle find selector, need  elements and must be DOM Element');
        return undefined;
      }
      return jqStyle(this.elements[0]);
    },
    last: function last() {
      if (this.isEmpty()) {
        console.warn('jqStyle find selector, need  elements and must be DOM Element');
        return undefined;
      }
      return jqStyle(this.elements[this.elements.length - 1]);
    },
    eq: function eq(idx) {
      return jqStyle(this.get(idx));
    },
    children: function children(selector) {
      var dom = [];
      var self = this;
      this.each(function () {
        if (this.nodeType > 1) return;
        var nodes = this.children;
        var nodesLen = nodes.length;
        for (var i = 0; i < nodesLen; i++) {
          var node = nodes[i];
          if (!selector || self.is(selector, node)) {
            dom.push(node);
          }
        }
      });
      return jqStyle(dom);
    },
    parent: function parent(selector) {
      return findAncestors.call(this, true, true, false, selector);
    },
    parents: function parents(selector) {
      /* Differences with jQuery:
       * 1. $("html").parent() and $("html").parents() return an empty set.
       * 2. The returned set won't be in reverse order.
       */
      return findAncestors.call(this, true, false, false, selector);
    },
    prev: function prev() {
      var el = this.elements[0];
      return jqStyle($api.prev(el));
    },
    next: function next(selector) {
      return selectImmediateAdjacentSibling(this, "next", selector);
    },
    nextAll: function nextAll(selector) {
      return selectAdjacentSiblings(this, "next", selector);
    },
    nextUntil: function nextUntil(selector, filter) {
      return selectAdjacentSiblings(this, "next", filter, selector);
    }
  }, (0, _defineProperty3.default)(_ref, "prev", function prev(selector) {
    return selectImmediateAdjacentSibling(this, "previous", selector);
  }), (0, _defineProperty3.default)(_ref, "prevAll", function prevAll(selector) {
    return selectAdjacentSiblings(this, "previous", selector);
  }), (0, _defineProperty3.default)(_ref, "prevUntil", function prevUntil(selector, filter) {
    return selectAdjacentSiblings(this, "previous", filter, selector);
  }), (0, _defineProperty3.default)(_ref, "siblings", function siblings(selector) {
    var siblings = [];
    var self = this;
    this.each(function (i, el) {
      jqStyle(this).parent().children().each(function () {
        if (this == el || selector && !self.is(selector, this)) return;
        siblings.push(this);
      });
    });
    return jqStyle(siblings);
  }), (0, _defineProperty3.default)(_ref, "is", function is(selector, element) {
    // element is undocumented, internal-use only.
    // It gives better perfs as it prevents the creation of many objects in internal methods.
    var set = element ? [element] : this.get();
    var setLen = set.length;

    if (typeof selector == "string") {
      for (var i = 0; i < setLen; i++) {
        var el = set[i];
        if (el.nodeType > 1) continue;
        if (el[matches](selector)) {
          return true;
        }
      }
      return false;
    }
    if ((typeof selector === "undefined" ? "undefined" : (0, _typeof3.default)(selector)) == "object") {
      // Sprint object or DOM element(s)
      var obj;
      obj = selector.length ? selector : [selector];

      var objLen = obj.length;
      for (var i = 0; i < setLen; i++) {
        for (var j = 0; j < objLen; j++) {
          if (set[i] === obj[j]) {
            return true;
          }
        }
      }
      return false;
    }
    if (typeof selector == "function") {
      for (var i = 0; i < setLen; i++) {
        if (selector.call(this, i, this)) {
          return true;
        }
      }
      return false;
    }
  }), (0, _defineProperty3.default)(_ref, "hasClass", function hasClass(name) {
    var i = this.length;
    while (i--) {
      var el = this.get(i);
      if (el.nodeType > 1) return;
      if (el.classList.contains(name)) {
        return true;
      }
    }
    return false;
  }), (0, _defineProperty3.default)(_ref, "show", function show() {
    this.elements.forEach(function (element) {
      setStyle(element, 'display: block');
    });
    return this;
  }), (0, _defineProperty3.default)(_ref, "hide", function hide() {
    this.elements.forEach(function (element) {
      setStyle(element, 'display: none');
    });
    return this;
  }), (0, _defineProperty3.default)(_ref, "slideUp", function slideUp(duration, complete) {
    var options = {
      duration: duration,
      complete: complete
    };
    this.elements.forEach(function (element) {
      _slideUp(element, options);
    });
    return this;
  }), (0, _defineProperty3.default)(_ref, "slideDown", function slideDown(duration, complete) {
    var options = {
      duration: duration,
      complete: complete
    };
    this.elements.forEach(function (element) {
      _slideDown(element, options);
    });
    return this;
  }), (0, _defineProperty3.default)(_ref, "slideToggle", function slideToggle(duration, complete) {
    var options = {
      duration: duration,
      complete: complete
    };
    this.elements.forEach(function (element) {
      _slideToggle(element, options);
    });
    return this;
  }), (0, _defineProperty3.default)(_ref, "_elementsByName", function _elementsByName(name) {
    var ret = [];
    for (var _i3 = 0; _i3 < this.elements.length; ++_i3) {
      var domname = this.elements[_i3].name || this.elements[_i3].id;
      if (domname === name && !this.elements[_i3].disabled) {
        ret.push(this.elements[_i3]);
      }
    }
    return ret;
  }), _ref;
};
/**
 * /*animate(book, {
	left: 50,
	duration: 2000
})

 animate1(book, {
	start: 500,
  end:   0,
  prop: 'left',
	duration: 2000
})


 function bnt_click(){
  slideToggle(book,{ end: 500 })
}

 * @param elem
 * @param options
 */
function _slideToggle(elem, options) {
  var DATA_HEIGHT = 'data-h';
  options = options || {};
  var h = elem.offsetHeight;
  var none = getStyle(elem, "display") === "none";
  if (0 === h || none) {
    var end = +elem.getAttribute(DATA_HEIGHT) || getSize(elem).height;
    elem.style.height = 0;
    elem.style.display = 'block';
    options.end = end;
    _slideDown(elem, options);
  } else {
    elem.setAttribute(DATA_HEIGHT, h);
    _slideUp(elem, options);
  }
}

function _slideUp(elem, options) {
  options = options || {};
  animate(elem, {
    start: options.start || getSize(elem).height,
    end: 0,
    prop: 'height',
    duration: options.duration || 2000
  });
}

function _slideDown(elem, options) {
  options = options || {};
  animate(elem, {
    start: options.start || 0,
    end: options.end,
    prop: 'height',
    duration: options.duration || 2000
  });
}

function animate(elem, options) {
  //动画初始值
  var start = options.start;
  //动画结束值
  var end = options.end;
  //动画id
  var timerId;
  var createTime = function createTime() {
    return +new Date();
  };
  //动画开始时间
  var startTime = createTime();

  function tick() {
    //每次变化的时间
    var remaining = Math.max(0, startTime + options.duration - createTime());
    var temp = remaining / options.duration || 0;
    var percent = 1 - temp;
    var stop = function stop() {
      //停止动画
      clearInterval(timerId);
      timerId = null;
      options.complete && options.complete();
    };
    var setStyle = function setStyle(value) {
      elem.style[options.prop] = value + 'px';
    };
    //移动的距离
    var now = (end - start) * percent + start;
    if (percent === 1) {
      setStyle(now);
      stop();
    } else {
      setStyle(now);
    }
  }

  //开始执行动画
  var timerId = setInterval(tick, 13);
}

var matches = function () {
  var names = ["mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector", "matches"];
  var i = names.length;
  while (i--) {
    var name = names[i];
    if (!Element.prototype[name]) continue;
    return name;
  }
}();

var selectAdjacentSiblings = function selectAdjacentSiblings(me, direction, selector, until) {
  var dom = [];
  var prop = direction + "ElementSibling";
  me.each(function () {
    var el = this;
    while (el = el[prop]) {
      if (until && me.is(until, el)) break;
      if (selector && !me.is(selector, el)) continue;
      dom.push(el);
    }
  });
  return jqStyle(removeDuplicates(dom));
};

var selectImmediateAdjacentSibling = function selectImmediateAdjacentSibling(me, direction, selector) {
  var prop = direction + "ElementSibling";
  return me.map(function () {
    var el = this[prop];
    if (!el || selector && !me.is(selector, el)) return;
    return el;
  }, false);
};

var findAncestors = function findAncestors(startAtParent, limitToParent, limitToFirstMatch, selector, context) {
  var dom = [];
  var self = this;
  this.each(function () {
    var prt = startAtParent ? this.parentElement : this;
    while (prt) {
      if (context && context == prt) break;
      if (!selector || self.is(selector, prt)) {
        dom.push(prt);
        if (limitToFirstMatch) break;
      }
      if (limitToParent) break;
      prt = prt.parentElement;
    }
  });
  return jqStyle(removeDuplicates(dom));
};

var removeDuplicates = function removeDuplicates(arr) {
  var clean = [];
  var arrLen = arr.length;
  var cleanLen = 0;
  for (var _i4 = 0; _i4 < arrLen; _i4++) {
    var el = arr[_i4];
    var duplicate = false;
    for (var j = 0; j < cleanLen; j++) {
      if (el !== clean[j]) continue;
      duplicate = true;
      break;
    }
    if (duplicate) continue;
    clean[cleanLen++] = el;
  }
  return clean;
};

var sanitize = function sanitize(arr, flattenObjects, requireDomNodes) {
  /*
   * Remove null's from array. Optionally, flatten Sprint objects and convert strings and numbers
   * to DOM text nodes.
   */
  var arrLen = arr.length;
  var i = arrLen;

  // Check if arr needs to be sanitized first (significant perf boost for the most common case)
  while (i--) {
    // arr needs to be sanitized
    if (!arr[i] && arr[i] !== 0 || flattenObjects && JQ_STYLE_OBJ == arr[i]._type || requireDomNodes && (typeof arr[i] == "string" || typeof arr[i] == "number")) {
      var sanitized = [];
      for (var j = 0; j < arrLen; j++) {
        var el = arr[j];
        if (!el && el !== 0) continue;
        if (flattenObjects && JQ_STYLE_OBJ == el._type) {
          for (var k = 0; k < el.length; k++) {
            sanitized.push(el.get(k));
          }
          continue;
        }
        if (requireDomNodes && (typeof el == "string" || typeof el == "number")) {
          sanitized.push(document.createTextNode(el));
          continue;
        }
        sanitized.push(el);
      }
      return sanitized;
    }
  }

  // arr didn't need to be sanitized, return it
  return arr;
};

function type(o) {
  var _t;
  return ((_t = typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
}
//获取元素样式
function getStyle(el, styleName) {
  return el.style[styleName] ? el.style[styleName] : el.currentStyle ? el.currentStyle[styleName] : window.getComputedStyle(el, null)[styleName];
}

function getStyleNum(el, styleName) {
  return parseInt(getStyle(el, styleName).replace(/px|pt|em/ig, ''));
}

function setStyle(el, obj) {
  if (type(obj) == "object") {
    for (s in obj) {
      var cssArrt = s.split("-");
      for (var i = 1; i < cssArrt.length; i++) {
        cssArrt[i] = cssArrt[i].replace(cssArrt[i].charAt(0), cssArrt[i].charAt(0).toUpperCase());
      }
      var cssArrtnew = cssArrt.join("");
      el.style[cssArrtnew] = obj[s];
    }
  } else if (type(obj) === "string") {
    el.style.cssText = obj;
  }
}

function getSize(el) {
  if (getStyle(el, "display") != "none") {
    return { width: el.offsetWidth || getStyleNum(el, "width"), height: el.offsetHeight || getStyleNum(el, "height") };
  }
  var _addCss = { display: "", position: "absolute", visibility: 'hidden' };
  var _oldCss = {};
  for (i in _addCss) {
    _oldCss[i] = getStyle(el, i);
  }
  setStyle(el, _addCss);
  var _width = el.clientWidth || getStyleNum(el, "width");
  var _height = el.clientHeight || getStyleNum(el, "height");
  for (i in _oldCss) {
    setStyle(el, _oldCss);
  }
  return { width: _width, height: _height };
}

exports.default = jqStyle;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(44);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(16);
var $keys = __webpack_require__(15);

__webpack_require__(42)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(81);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(39);
var $export = __webpack_require__(11);
var toObject = __webpack_require__(16);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(83);
var toLength = __webpack_require__(40);
var createProperty = __webpack_require__(84);
var getIterFn = __webpack_require__(85);

$export($export.S + $export.F * !__webpack_require__(87)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(12);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(10);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(86);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(12);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(28);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = exports.isJson = exports.isArray = undefined;

var _getPrototypeOf = __webpack_require__(89);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getType = getType;
exports.type = type;
exports.isFunction = isFunction;
exports.isWindow = isWindow;
exports.isDocument = isDocument;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by wenwang on 2017/8/31.
 */

function getType(o) {
  var _t;
  return ((_t = typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
}

function type(obj) {
  return getType(obj);
}

function isFunction(value) {
  return type(value) == "function";
}

function isWindow(obj) {
  return obj != null && obj == obj.window;
}

function isDocument(obj) {
  return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
}

function isObject(obj) {
  return type(obj) == "object";
}

function isPlainObject(obj) {
  return isObject(obj) && !isWindow(obj) && (0, _getPrototypeOf2.default)(obj) == Object.prototype;
}

var isArray = exports.isArray = Array.isArray || function (object) {
  return object instanceof Array;
};

var isJson = exports.isJson = function isJson(obj) {
  var isjson = (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length;
  return isjson;
};

var extend = exports.extend = function extend() {
  // 定义默认参数和变量
  // 对象分为扩展对象和被扩展的对象
  //options 代表扩展的对象中的方法
  //name 代表扩展对象的方法名
  //i 为扩展对象参数起始值
  //deep 默认为浅复制
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;
  //当第一个参数为布尔类型是，此参数定义是否为深拷贝
  //对接下来的参数进行处理
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    // 当定义是否深拷贝时，参数往后移动一位
    i = 2;
  }
  // 如果要扩展的不是对象或者函数，则定义要扩展的对象为空
  if ((typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) !== "object" && !isFunction(target)) {
    target = {};
  }
  if (length === i) {
    target = this;
    --i;
  }
  //对从i开始的多个参数进行遍历
  for (; i < length; i++) {
    // 只处理有定义的值
    if ((options = arguments[i]) != null) {
      // 展开扩展对象
      for (name in options) {
        src = target[name];
        copy = options[name];
        // 防止循环引用
        if (target === copy) {
          continue;
        }
        // 递归处理深拷贝
        if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          target[name] = extend(deep, clone, copy);
          // 不处理未定义值
        } else if (copy !== undefined) {
          //给target增加属性或方法
          target[name] = copy;
        }
      }
    }
  }
  //返回
  return target;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(16);
var $getPrototypeOf = __webpack_require__(41);

__webpack_require__(42)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(44);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ktActionsheet = __webpack_require__(101);

var _ktActionsheet2 = _interopRequireDefault(_ktActionsheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionsheet = (0, _ktActionsheet2.default)();

var buttons = function (amt) {
  var ret = [];
  for (var i = 0; i < amt; ++i) {
    ret.push({ title: '按钮' + i });
  }
  return ret;
}(100);

actionsheet.init({
  okTitle: '确定',
  buttons: buttons
}, function (selectButtons) {
  //alert(JSON.stringify(selectButtons))
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(93);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(94);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = function () {
  return new ActionSheet();
};

var _jq = __webpack_require__(74);

var _jq2 = _interopRequireDefault(_jq);

var _Tool = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * ## 结构
 * 控件 <div class=${actSheetCls}> <-kt-actionsheet
 *     上部分按钮： <div class=${actBtnCls}"> <- kt-actionsheet-btn
 *         标题：   <div class="${actTitleCls actBtnItemCls fontCls}">${title}</div> <- kt-actionsheet-title kt-border-b kt-font-size-12
 *         按钮：   [<div class="${actBtnItemCls borderButtomCls}">${buttons[i].title}</div>*] //多个button <-kt-actionsheet-btn-item kt-border-b
 *  最后一个按钮:    <div class="${actBtnItemCls}">${buttons[i].title}</div>     //最后一个button <- kt-actionsheet-btn-item
 *                </div>
 *      下部分按钮：<div class=${actBtnCls}"> <- kt-actionsheet-btn>
 *                  <div class="${actBtnItemCls}">${oktitle}</div>
 *                  <div class="${actBtnItemCls}">${canceltitle}</div>
 *               </div>
 *     <div>
 *
 *
 * ## 用法
 * import createActionsheet from '../../component/actionsheet'
 *
 * const actionsheet = createActionsheet()
 *
 * const buttons = (function (amt) {
 *  const ret = [] for (let i=0;i<amt;++i) {
 *    ret.push({title: '按钮'+i})
 *  }
 *  return ret }
 * )(100）
 *
 * actionsheet.init({
 *  okTitle:'确定',
 *  buttons
 *  }, (selectButtons)=>{
 *  alert(JSON.stringify(selectButtons))
 *  })
 *
 */
var ActionSheet = function () {
  function ActionSheet() {
    (0, _classCallCheck3.default)(this, ActionSheet);
  }

  (0, _createClass3.default)(ActionSheet, [{
    key: 'init',
    value: function init(options, callback) {
      (0, _Tool.extend)(this, {
        frameBounces: false, //frame是否弹动

        title: false, //标题：放置到顶部
        okTitle: false, //确定按钮标题
        cancelTitle: '取消',

        maskDiv: false, //遮罩的div
        actionsheetDiv: false, //控件的div
        buttons: [], //控件按钮

        actSheetCls: 'kt-actionsheet',
        actTitleCls: 'kt-actionsheet-title',
        actBtnCls: 'kt-actionsheet-btn',
        actBtnItemCls: 'kt-actionsheet-btn-item',

        maskDivCls: 'kt-mask',
        maskInCls: 'kt-mask-in',
        fontCls: 'kt-font-size-12',
        borderTopCls: 'kt-border-t',
        borderButtomCls: 'kt-border-b',
        selectedCls: 'kt-selected'

      }, options);

      this._open(options, callback);
    }
  }, {
    key: '_open',
    value: function _open(options, callback) {
      var self = this;
      if (self.actionsheetDiv || !self.title && !self.buttons && !self.cancelTitle && !self.destructiveTitle) {
        return;
      }

      //创建遮罩宿主-div
      if (!self.maskDiv) {
        self.maskDiv = document.createElement('div');
        self.maskDiv.className = self.maskDivCls;
        document.body.appendChild(self.maskDiv);
      }
      //创建actionsheet控件宿主-div
      self.actionsheetDiv = document.createElement('div');
      self.actionsheetDiv.className = self.actSheetCls;
      document.body.appendChild(self.actionsheetDiv);

      //创建内部按钮：分上部分和下部分
      var titleHtml = _createTitleHtml(self); //创建标题按钮
      var buttonsHtml = _createButtonsHtml(self); //创建点选的按钮
      var topHtml = _creteButtonsHtmlDiv(self, titleHtml, buttonsHtml); //创建上半部分的按钮

      var okHtml = _createOkHtml(self);
      var cancelHtml = _createCancelHtml(self);
      var bottomHtml = _creteButtonsHtmlDiv(self, okHtml, cancelHtml); //创建下半部分的按钮

      //建立dom，设置style
      self.actionsheetDiv.insertAdjacentHTML('beforeend', topHtml + bottomHtml);
      self.actionsheetDiv.style.webkitTransform = self.actionsheetDiv.style.transform = 'translate3d(0,0,0)';
      self.actionsheetDiv.style.opacity = 1;
      self.actionsheetDiv.addEventListener('touchmove', function (event) {
        //event.preventDefault()
      });

      self.maskDiv.classList.add(self.maskInCls);
      self.maskDiv.addEventListener('touchmove', function (event) {
        event.preventDefault();
      });

      if (self._frameBounces()) {
        api.setFrameAttr({
          bounces: false
        });
      }

      //绑定事件
      this._bindEvent(callback);
    }
  }, {
    key: '_bindEvent',
    value: function _bindEvent(callback) {
      var self = this;
      var multi = !!self.okTitle; //如果设置了确定按钮，则表明是多选
      //装置事件
      var $actionsheet = (0, _jq2.default)(self.actionsheetDiv);
      var $actionsheetButtons = $actionsheet.find('.' + self.actBtnItemCls);
      setTimeout(function () {
        self.maskDiv.onclick = function () {
          self._close();
        };
        $actionsheetButtons.each(function () {
          this.onclick = function () {
            var $e = (0, _jq2.default)(this);
            if ($e.hasClass('j_cancel')) {
              self._close();
            } else if ($e.hasClass('j_ok')) {
              var $selectedItems = $actionsheet.find('.' + self.selectedCls);
              var selectedButtons = [];
              $selectedItems.each(function () {
                var idx = (0, _jq2.default)(this).attr('data-idx');
                selectedButtons.push(self.buttons[+idx]);
              });
              if (selectedButtons.length > 0) {
                if (callback) callback(selectedButtons);
                self._close();
              }
            } else if ($e.hasClass('j_btn')) {
              if (multi) {
                $e.toggleClass(self.selectedCls);
              } else {
                var idx = $e.attr('data-idx');
                if (callback) callback([self.buttons[+idx]]);
                self._close();
              }
            }
          };
        });
      }, 350);
    }
  }, {
    key: '_close',
    value: function _close() {
      var self = this;
      if (self._frameBounces()) {
        api.setFrameAttr({
          bounces: true
        });
      }
      if (self.actionsheetDiv) {
        var actionsheetHeight = self.actionsheetDiv.offsetHeight;
        self.actionsheetDiv.style.webkitTransform = self.actionsheetDiv.style.transform = 'translate3d(0,' + actionsheetHeight + 'px,0)';
        self.maskDiv.style.opacity = 0;
        setTimeout(function () {
          self.maskDiv.parentNode.removeChild(self.maskDiv);
          self.actionsheetDiv.parentNode.removeChild(self.actionsheetDiv);
          self.actionsheetDiv = self.maskDiv = false;
        }, 300);
      }
    }
  }, {
    key: '_frameBounces',
    value: function _frameBounces() {
      return typeof api !== 'undefined' && (typeof api === 'undefined' ? 'undefined' : (0, _typeof3.default)(api)) === 'object' && this.frameBounces;
    }
  }]);
  return ActionSheet;
}();

function _createTitleHtml(self) {
  var titleHtml = '';
  if (self.title) {
    titleHtml = '<div class="' + self.actTitleCls + ' ' + self.borderTopCls + ' ' + self.fontCls + '">' + self.title + '</div>';
  }
  return titleHtml;
}

function _createButtonsHtml(self) {
  var buttonsHtml = '';
  var buttons = self.buttons;
  if (buttons.length) {
    for (var i = 0, len = buttons.length; i < len; i++) {
      if (i === buttons.length - 1) {
        buttonsHtml += '<div class="' + self.actBtnItemCls + '  j_btn" data-idx="' + i + '">' + self.buttons[i].title + '</div>';
      } else {
        buttonsHtml += '<div class="' + self.actBtnItemCls + ' ' + self.borderButtomCls + ' j_btn" data-idx="' + i + '">' + self.buttons[i].title + '</div>';
      }
    }
  }
  return buttonsHtml;
}

function _createCancelHtml(self) {
  return '<div class="' + self.actBtnItemCls + ' j_cancel">' + self.cancelTitle + '</div>';
}

function _createOkHtml(self) {
  var okHtml = '';
  if (self.okTitle) {
    okHtml = '<div class="' + self.actBtnItemCls + ' ' + self.borderButtomCls + ' j_ok">' + self.okTitle + '</div>';
  }
  return okHtml;
}

function _creteButtonsHtmlDiv(self, btnHtml1, btnHtml2) {
  var btnHtml = '';
  if (btnHtml1 !== '' || btnHtml2 !== '') {
    btnHtml = '<div class="' + self.actBtnCls + '">' + btnHtml1 + btnHtml2 + '</div>';
  }
  return btnHtml;
}

/***/ })
/******/ ]);