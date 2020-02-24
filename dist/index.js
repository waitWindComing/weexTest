// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/neo/weexTest/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "cell": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "30",
    "color": "#41B883"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');
const amap = weex.requireModule('eeui-amap');

//weexVC.instance?.fireGlobalEvent("globalE", params: ["key" : "this value"])
var globalEvent = weex.requireModule('globalEvent');
globalEvent.addEventListener('globalE', function (e) {
  console.log(e.key);
});

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  sevalue: '我就传个值怎么了',
  components: {},
  data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      point: {
        position: [116.397721, 39.904058],
        title: 'This is a marker'
      },
      lists: [],
      content: "我是变量--"
    };
  },
  mounted() {
    //挂载方法
    const receiveValue = new BroadcastChannel('channel1');
    receiveValue.onmessage = function (event) {
      // modal.toast({message:event.data, duration: 0.5})
    };
  },
  created: function () {
    console.log("++" + weex.config.nativeKey);
  },
  methods: {
    jumpPage() {
      console.log('push++');
      navigator.push({
        url: 'http://192.168.0.100:8081/dist/indexpath.js',
        animated: "true"
      });
    },
    doSearch() {
      this.$refs.crmMap.searchInfo("北京动物园");
    },
    searchResult(e) {
      modal.toast({ message: e.result, duration: 0.2 });
      this.content = e.result;
    },
    nearPOIResult(e) {
      // modal.toast({ message: JSON.strinagify(e), duration: 0.2 });
      e.result.forEach(item => {
        this.lists.push(item);
      });
    },
    "onSelected": function (item, index) {
      console.log('===' + index);
      this.$refs.crmMap.selectAnnotationInfo(3);
    }

  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  }), _c('text', {
    staticClass: ["greeting"],
    on: {
      "click": _vm.jumpPage
    }
  }, [_vm._v("Thisfdsfasdf is Index!")]), _c('text', {
    ref: "address"
  }, [_vm._v(_vm._s(_vm.content))]), _c('list', {
    staticClass: ["list"],
    on: {
      "click": function($event) {
        _vm.onSelected(_vm.item, _vm.index)
      }
    }
  }, _vm._l((_vm.lists), function(item) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item))])])])
  })), _c('button', {
    staticClass: ["search"],
    staticStyle: {
      backgroundColor: "blue",
      width: "300px",
      height: "80px",
      fontSize: "50px"
    },
    on: {
      "click": _vm.doSearch
    }
  }, [_vm._v("搜索")]), _c('div', {
    staticStyle: {
      alignItems: "center"
    }
  }, [_c('eeui-amap', {
    ref: "crmMap",
    staticStyle: {
      width: "750px",
      height: "800px"
    },
    attrs: {
      "sdkKey": {
        ios: 'ecfdeb313708c7091b0d474471173c05'
      },
      "center": _vm.point.position,
      "zoom": 15
    },
    on: {
      "showSearchResult": _vm.searchResult,
      "showNearPOIResult": _vm.nearPOIResult
    }
  }, [_c('eeui-amap-marker', {
    attrs: {
      "position": _vm.point.position,
      "title": _vm.point.title
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_vue__);

__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a.el = '#root';
new Vue(__WEBPACK_IMPORTED_MODULE_0__src_index_vue___default.a);

/***/ })
/******/ ]);