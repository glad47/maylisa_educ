import * as __WEBPACK_EXTERNAL_MODULE__unhead_dom_2b61a37b__ from "@unhead/dom";
import * as __WEBPACK_EXTERNAL_MODULE__unhead_ssr_a0c369cc__ from "@unhead/ssr";
import * as __WEBPACK_EXTERNAL_MODULE__unhead_vue_609689db__ from "@unhead/vue";
import * as __WEBPACK_EXTERNAL_MODULE_cookie_es_d37e758b__ from "cookie-es";
import * as __WEBPACK_EXTERNAL_MODULE_defu__ from "defu";
import * as __WEBPACK_EXTERNAL_MODULE_destr__ from "destr";
import * as __WEBPACK_EXTERNAL_MODULE_h3__ from "h3";
import * as __WEBPACK_EXTERNAL_MODULE_hookable__ from "hookable";
import * as __WEBPACK_EXTERNAL_MODULE_ofetch__ from "ofetch";
import * as __WEBPACK_EXTERNAL_MODULE_ohash__ from "ohash";
import * as __WEBPACK_EXTERNAL_MODULE_ufo__ from "ufo";
import * as __WEBPACK_EXTERNAL_MODULE_unctx__ from "unctx";
import * as __WEBPACK_EXTERNAL_MODULE_url__ from "url";
import * as __WEBPACK_EXTERNAL_MODULE_vue__ from "vue";
import * as __WEBPACK_EXTERNAL_MODULE_vue_router_6389ad97__ from "vue-router";
import * as __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__ from "vue/server-renderer";
/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./assets/css/index.scss":
/*!*******************************!*\
  !*** ./assets/css/index.scss ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0px; }\n\n.main {\n  width: 1800px; }\n\n.c {\n  display: flex;\n  justify-content: center;\n  justify-items: center; }\n\n.e {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.s {\n  display: flex;\n  justify-items: center;\n  align-items: center; }\n\n.sc {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center; }\n\n.f {\n  align-items: center; }\n\n.flex {\n  display: flex; }\n\n.flex1 {\n  flex: 1; }\n\n.row-s {\n  display: flex;\n  justify-content: flex-start; }\n\n.row-e {\n  display: flex;\n  justify-content: flex-end; }\n\n.row-c {\n  display: flex;\n  justify-content: center; }\n\n.row-sp {\n  display: flex;\n  justify-content: space-around; }\n\n.row-b {\n  display: flex;\n  justify-content: space-between; }\n\n.col-s {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start; }\n\n.col-e {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end; }\n\n.col-c {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.col-sp {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.col-b {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n.col-12 {\n  width: 100%; }\n\n.col-11 {\n  width: 91.3%; }\n\n.col-11b {\n  width: 90.3%; }\n\n.col-115 {\n  width: 95.3%; }\n\n.col-10 {\n  width: 83.3%; }\n\n.col-105 {\n  width: 86.3%; }\n\n.col-9 {\n  width: 74.7%; }\n\n.col-95 {\n  width: 80.9%; }\n\n.col-8 {\n  width: 66.4%; }\n\n.col-7 {\n  width: 58.1%; }\n\n.col-65 {\n  width: 54.1%; }\n\n.col-6 {\n  width: 49.8%; }\n\n.col-55 {\n  width: 43.5%; }\n\n.col-5 {\n  width: 41.5%; }\n\n.col-4 {\n  width: 33.2%; }\n\n.col-41 {\n  width: 33.5%; }\n\n.col-3 {\n  width: 24.9%; }\n\n.col-25 {\n  width: 20.6%; }\n\n.col-2 {\n  width: 16.6%; }\n\n.col-29 {\n  width: 23.1%; }\n\n.col-21 {\n  width: 16.79%; }\n\n.col-1 {\n  width: 8.3%; }\n\n.ml {\n  margin-left: 8.3%; }\n\n.mr {\n  margin-right: 8.3%; }\n\n.mt {\n  margin-top: 8.3%; }\n\n.mb {\n  margin-bottom: 8.3%; }\n\n.pl {\n  padding-left: 8.3%; }\n\n.pr {\n  padding-right: 8.3%; }\n\n.pt {\n  padding-top: 8.3%; }\n\n.pb {\n  padding-bottom: 8.3%; }\n\n@media screen and (max-width: 1400px) {\n  .main {\n    width: 1400px; } }\n\n@media screen and (max-width: 800px) {\n  .main {\n    width: 800px; } }\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");
/* harmony import */ var _build_app_component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #build/app-component.mjs */ "./.nuxt/app-component.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const ErrorComponent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "_nuxt_error-component_mjs").then(__webpack_require__.bind(__webpack_require__, /*! #build/error-component.mjs */ "./.nuxt/error-component.mjs")).then(r => r.default || r))

const nuxtApp = (0,_app__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)()
const onResolve = nuxtApp.deferHydration()

// Inject default route (outside of pages) as active route
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)('_route', (0,_app__WEBPACK_IMPORTED_MODULE_1__.useRoute)())

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if ( true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = (0,_app__WEBPACK_IMPORTED_MODULE_1__.useError)()
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured)((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    (0,_app__WEBPACK_IMPORTED_MODULE_1__.callWithNuxt)(nuxtApp, _app__WEBPACK_IMPORTED_MODULE_1__.showError, [err])
  }
})

const __returned__ = { ErrorComponent, nuxtApp, onResolve, results, error, defineAsyncComponent: vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent, onErrorCaptured: vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured, provide: vue__WEBPACK_IMPORTED_MODULE_0__.provide, get callWithNuxt() { return _app__WEBPACK_IMPORTED_MODULE_1__.callWithNuxt }, get isNuxtError() { return _app__WEBPACK_IMPORTED_MODULE_1__.isNuxtError }, get showError() { return _app__WEBPACK_IMPORTED_MODULE_1__.showError }, get useError() { return _app__WEBPACK_IMPORTED_MODULE_1__.useError }, get useRoute() { return _app__WEBPACK_IMPORTED_MODULE_1__.useRoute }, get useNuxtApp() { return _app__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp }, get AppComponent() { return _build_app_component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=template&id=e2ce4b36":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=template&id=e2ce4b36 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  (0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderSuspense)(_push, {
    default: () => {
      if ($setup.error) {
        _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderComponent)($setup["AppComponent"], null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/pages/runtime/app.vue?vue&type=template&id=62b2decb":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/pages/runtime/app.vue?vue&type=template&id=62b2decb ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_app_components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/nuxt/dist/app/components/layout */ "./node_modules/nuxt/dist/app/components/layout.mjs");
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/nuxt/dist/pages/runtime/page */ "./node_modules/nuxt/dist/pages/runtime/page.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");





function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_app_components_layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  const _component_NuxtPage = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_page__WEBPACK_IMPORTED_MODULE_1__["default"]

  _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_3__.ssrRenderComponent)(_component_NuxtLayout, _attrs, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_3__.ssrRenderComponent)(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

/***/ }),

/***/ "./pages/index.vue?macro=true":
/*!************************************!*\
  !*** ./pages/index.vue?macro=true ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const __nuxt_page_meta = {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__nuxt_page_meta);

// Vite
if (false) {}
// Webpack
if (false) {}

/***/ }),

/***/ "./pages/university/search.vue?macro=true":
/*!************************************************!*\
  !*** ./pages/university/search.vue?macro=true ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const __nuxt_page_meta = {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__nuxt_page_meta);

// Vite
if (false) {}
// Webpack
if (false) {}

/***/ }),

/***/ "./node_modules/nuxt/dist/app/components/nuxt-root.vue":
/*!*************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/components/nuxt-root.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nuxt_root_vue_vue_type_template_id_e2ce4b36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt-root.vue?vue&type=template&id=e2ce4b36 */ "./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=template&id=e2ce4b36");
/* harmony import */ var _nuxt_root_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuxt-root.vue?vue&type=script&setup=true&lang=js */ "./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_nuxt_root_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['ssrRender',_nuxt_root_vue_vue_type_template_id_e2ce4b36__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"node_modules/nuxt/dist/app/components/nuxt-root.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/nuxt/dist/pages/runtime/app.vue":
/*!******************************************************!*\
  !*** ./node_modules/nuxt/dist/pages/runtime/app.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_vue_vue_type_template_id_62b2decb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=62b2decb */ "./node_modules/nuxt/dist/pages/runtime/app.vue?vue&type=template&id=62b2decb");
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['ssrRender',_app_vue_vue_type_template_id_62b2decb__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"node_modules/nuxt/dist/pages/runtime/app.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Adynamic_base_path_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Acomponents_loader_vue_loader_dist_index_js_ruleSet_0_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Atree_shake_template_nuxt_root_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Adynamic_base_path_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Acomponents_loader_vue_loader_dist_index_js_ruleSet_0_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Atree_shake_template_nuxt_root_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!../../../../vue-loader/dist/index.js??ruleSet[0]!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./nuxt-root.vue?vue&type=script&setup=true&lang=js */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=template&id=e2ce4b36":
/*!*******************************************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=template&id=e2ce4b36 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Adynamic_base_path_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Acomponents_loader_vue_loader_dist_templateLoader_js_ruleSet_1_rules_9_vue_loader_dist_index_js_ruleSet_0_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Atree_shake_template_nuxt_root_vue_vue_type_template_id_e2ce4b36__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Adynamic_base_path_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Acomponents_loader_vue_loader_dist_templateLoader_js_ruleSet_1_rules_9_vue_loader_dist_index_js_ruleSet_0_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Atree_shake_template_nuxt_root_vue_vue_type_template_id_e2ce4b36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!../../../../vue-loader/dist/index.js??ruleSet[0]!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./nuxt-root.vue?vue&type=template&id=e2ce4b36 */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/app/components/nuxt-root.vue?vue&type=template&id=e2ce4b36");


/***/ }),

/***/ "./node_modules/nuxt/dist/pages/runtime/app.vue?vue&type=template&id=62b2decb":
/*!************************************************************************************!*\
  !*** ./node_modules/nuxt/dist/pages/runtime/app.vue?vue&type=template&id=62b2decb ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Adynamic_base_path_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Acomponents_loader_vue_loader_dist_templateLoader_js_ruleSet_1_rules_9_vue_loader_dist_index_js_ruleSet_0_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Atree_shake_template_app_vue_vue_type_template_id_62b2decb__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Adynamic_base_path_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Acomponents_loader_vue_loader_dist_templateLoader_js_ruleSet_1_rules_9_vue_loader_dist_index_js_ruleSet_0_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Atree_shake_template_app_vue_vue_type_template_id_62b2decb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!../../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!../../../../vue-loader/dist/index.js??ruleSet[0]!../../../../unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./app.vue?vue&type=template&id=62b2decb */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Adynamic-base-path!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Acomponents-loader!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[9]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Atree-shake-template!./node_modules/nuxt/dist/pages/runtime/app.vue?vue&type=template&id=62b2decb");


/***/ }),

/***/ "@unhead/dom":
/*!******************************!*\
  !*** external "@unhead/dom" ***!
  \******************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__unhead_dom_2b61a37b__;

/***/ }),

/***/ "@unhead/ssr":
/*!******************************!*\
  !*** external "@unhead/ssr" ***!
  \******************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__unhead_ssr_a0c369cc__;

/***/ }),

/***/ "@unhead/vue":
/*!******************************!*\
  !*** external "@unhead/vue" ***!
  \******************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE__unhead_vue_609689db__;

/***/ }),

/***/ "cookie-es":
/*!****************************!*\
  !*** external "cookie-es" ***!
  \****************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_cookie_es_d37e758b__;

/***/ }),

/***/ "defu":
/*!***********************!*\
  !*** external "defu" ***!
  \***********************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_defu__;

/***/ }),

/***/ "destr":
/*!************************!*\
  !*** external "destr" ***!
  \************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_destr__;

/***/ }),

/***/ "h3":
/*!*********************!*\
  !*** external "h3" ***!
  \*********************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_h3__;

/***/ }),

/***/ "hookable":
/*!***************************!*\
  !*** external "hookable" ***!
  \***************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_hookable__;

/***/ }),

/***/ "ofetch":
/*!*************************!*\
  !*** external "ofetch" ***!
  \*************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_ofetch__;

/***/ }),

/***/ "ohash":
/*!************************!*\
  !*** external "ohash" ***!
  \************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_ohash__;

/***/ }),

/***/ "ufo":
/*!**********************!*\
  !*** external "ufo" ***!
  \**********************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_ufo__;

/***/ }),

/***/ "unctx":
/*!************************!*\
  !*** external "unctx" ***!
  \************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_unctx__;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_url__;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ }),

/***/ "vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_vue_router_6389ad97__;

/***/ }),

/***/ "vue/server-renderer":
/*!**************************************!*\
  !*** external "vue/server-renderer" ***!
  \**************************************/
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_vue_server_renderer_f488d186__;

/***/ }),

/***/ "./node_modules/@vueuse/head/dist/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/@vueuse/head/dist/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "HeadVuePlugin": () => (/* binding */ HeadVuePlugin),
/* harmony export */   "Vue2ProvideUnheadPlugin": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.Vue2ProvideUnheadPlugin),
/* harmony export */   "VueHeadMixin": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.VueHeadMixin),
/* harmony export */   "createHead": () => (/* binding */ createHead),
/* harmony export */   "createHeadCore": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.createHeadCore),
/* harmony export */   "injectHead": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.injectHead),
/* harmony export */   "renderHeadToString": () => (/* binding */ renderHeadToString),
/* harmony export */   "unheadVueComposablesImports": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.unheadVueComposablesImports),
/* harmony export */   "useBodyAttrs": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useBodyAttrs),
/* harmony export */   "useHead": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useHead),
/* harmony export */   "useHtmlAttrs": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useHtmlAttrs),
/* harmony export */   "useSeoMeta": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useSeoMeta),
/* harmony export */   "useServerBodyAttrs": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerBodyAttrs),
/* harmony export */   "useServerHead": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerHead),
/* harmony export */   "useServerHtmlAttrs": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerHtmlAttrs),
/* harmony export */   "useServerTagBase": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagBase),
/* harmony export */   "useServerTagLink": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagLink),
/* harmony export */   "useServerTagMeta": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagMeta),
/* harmony export */   "useServerTagMetaFlat": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagMetaFlat),
/* harmony export */   "useServerTagNoscript": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagNoscript),
/* harmony export */   "useServerTagScript": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagScript),
/* harmony export */   "useServerTagStyle": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagStyle),
/* harmony export */   "useServerTagTitle": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTagTitle),
/* harmony export */   "useServerTitleTemplate": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useServerTitleTemplate),
/* harmony export */   "useTagBase": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagBase),
/* harmony export */   "useTagLink": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagLink),
/* harmony export */   "useTagMeta": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagMeta),
/* harmony export */   "useTagMetaFlat": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagMetaFlat),
/* harmony export */   "useTagNoscript": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagNoscript),
/* harmony export */   "useTagScript": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagScript),
/* harmony export */   "useTagStyle": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagStyle),
/* harmony export */   "useTagTitle": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTagTitle),
/* harmony export */   "useTitleTemplate": () => (/* reexport safe */ _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useTitleTemplate)
/* harmony export */ });
/* harmony import */ var _unhead_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @unhead/vue */ "@unhead/vue");
/* harmony import */ var _unhead_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @unhead/dom */ "@unhead/dom");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _unhead_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @unhead/ssr */ "@unhead/ssr");






function createHead(initHeadObject) {
  const unhead = (0,_unhead_vue__WEBPACK_IMPORTED_MODULE_0__.createHead)();
  const legacyHead = {
    unhead,
    install(app) {
      if (vue__WEBPACK_IMPORTED_MODULE_2__.version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    use(plugin) {
      unhead.use(plugin);
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = (0,_unhead_vue__WEBPACK_IMPORTED_MODULE_0__.useHead)(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document, force) {
      if (force)
        (0,_unhead_dom__WEBPACK_IMPORTED_MODULE_1__.renderDOMHead)(unhead, { document });
      else
        (0,_unhead_dom__WEBPACK_IMPORTED_MODULE_1__.debouncedRenderDOMHead)(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}

const HeadVuePlugin = _unhead_vue__WEBPACK_IMPORTED_MODULE_0__.Vue2ProvideUnheadPlugin;
const renderHeadToString = (head) => (0,_unhead_ssr__WEBPACK_IMPORTED_MODULE_3__.renderSSRHead)(head.unhead);

const Vue2 = vue__WEBPACK_IMPORTED_MODULE_2__.version.startsWith("2.");
const IsBrowser = typeof window !== "undefined";

const addVNodeToHeadObj = (node, obj) => {
  const nodeType = Vue2 ? node.tag : node.type;
  const type = nodeType === "html" ? "htmlAttrs" : nodeType === "body" ? "bodyAttrs" : nodeType;
  if (typeof type !== "string" || !(type in obj))
    return;
  const nodeData = Vue2 ? node.data : node;
  const props = (Vue2 ? nodeData.attrs : node.props) || {};
  if (Vue2) {
    if (nodeData.staticClass)
      props.class = nodeData.staticClass;
    if (nodeData.staticStyle)
      props.style = Object.entries(nodeData.staticStyle).map(([key, value]) => `${key}:${value}`).join(";");
  }
  if (node.children) {
    const childrenAttr = Vue2 ? "text" : "children";
    props.children = Array.isArray(node.children) ? node.children[0][childrenAttr] : node[childrenAttr];
  }
  if (Array.isArray(obj[type]))
    obj[type].push(props);
  else if (type === "title")
    obj.title = props.children;
  else
    obj[type] = props;
};
const vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const node of nodes) {
    if (typeof node.type === "symbol" && Array.isArray(node.children)) {
      for (const childNode of node.children)
        addVNodeToHeadObj(childNode, obj);
    } else {
      addVNodeToHeadObj(node, obj);
    }
  }
  return obj;
};
const Head = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_2__.defineComponent)({
  name: "Head",
  setup(_, { slots }) {
    const head = (0,_unhead_vue__WEBPACK_IMPORTED_MODULE_0__.injectHead)();
    const obj = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)({});
    const entry = head.push(obj);
    if (IsBrowser) {
      (0,vue__WEBPACK_IMPORTED_MODULE_2__.onBeforeUnmount)(() => {
        entry.dispose();
      });
    }
    return () => {
      (0,vue__WEBPACK_IMPORTED_MODULE_2__.watchEffect)(() => {
        if (!slots.default)
          return;
        entry.patch(vnodesToHeadObj(slots.default()));
      });
      return null;
    };
  }
});




/***/ }),

/***/ "./node_modules/defu/dist/defu.mjs":
/*!*****************************************!*\
  !*** ./node_modules/defu/dist/defu.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefu": () => (/* binding */ createDefu),
/* harmony export */   "default": () => (/* binding */ defu),
/* harmony export */   "defu": () => (/* binding */ defu),
/* harmony export */   "defuArrayFn": () => (/* binding */ defuArrayFn),
/* harmony export */   "defuFn": () => (/* binding */ defuFn)
/* harmony export */ });
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue, _namespace) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const defuArrayFn = createDefu((object, key, currentValue, _namespace) => {
  if (Array.isArray(object[key]) && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});




/***/ }),

/***/ "./.nuxt/app-component.mjs":
/*!*********************************!*\
  !*** ./.nuxt/app-component.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_app_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_app_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/nuxt/dist/pages/runtime/app.vue */ "./node_modules/nuxt/dist/pages/runtime/app.vue");



/***/ }),

/***/ "./.nuxt/app.config.mjs":
/*!******************************!*\
  !*** ./.nuxt/app.config.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_defu_dist_defu_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/defu/dist/defu.mjs */ "./node_modules/defu/dist/defu.mjs");

const inlineConfig = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_defu_dist_defu_mjs__WEBPACK_IMPORTED_MODULE_0__.defuFn)(inlineConfig));


/***/ }),

/***/ "./.nuxt/css.mjs":
/*!***********************!*\
  !*** ./.nuxt/css.mjs ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/css/index.scss */ "./assets/css/index.scss");



/***/ }),

/***/ "./.nuxt/layouts.mjs":
/*!***************************!*\
  !*** ./.nuxt/layouts.mjs ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});


/***/ }),

/***/ "./.nuxt/middleware.mjs":
/*!******************************!*\
  !*** ./.nuxt/middleware.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalMiddleware": () => (/* binding */ globalMiddleware),
/* harmony export */   "namedMiddleware": () => (/* binding */ namedMiddleware)
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_validate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/nuxt/dist/pages/runtime/validate.mjs */ "./node_modules/nuxt/dist/pages/runtime/validate.mjs");

const globalMiddleware = [
  C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_validate_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
];
const namedMiddleware = {};


/***/ }),

/***/ "./.nuxt/nuxt.config.mjs":
/*!*******************************!*\
  !*** ./.nuxt/nuxt.config.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appBaseURL": () => (/* binding */ appBaseURL),
/* harmony export */   "appBuildAssetsDir": () => (/* binding */ appBuildAssetsDir),
/* harmony export */   "appCdnURL": () => (/* binding */ appCdnURL),
/* harmony export */   "appHead": () => (/* binding */ appHead),
/* harmony export */   "appKeepalive": () => (/* binding */ appKeepalive),
/* harmony export */   "appLayoutTransition": () => (/* binding */ appLayoutTransition),
/* harmony export */   "appPageTransition": () => (/* binding */ appPageTransition),
/* harmony export */   "appRootId": () => (/* binding */ appRootId),
/* harmony export */   "appRootTag": () => (/* binding */ appRootTag)
/* harmony export */ });
const appBaseURL = "/";
const appBuildAssetsDir = "/_nuxt/";
const appCdnURL = "";
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const appRootId = "__nuxt";
const appRootTag = "div";


/***/ }),

/***/ "./.nuxt/pages.mjs":
/*!*************************!*\
  !*** ./.nuxt/pages.mjs ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRoute": () => (/* reexport safe */ vue_router__WEBPACK_IMPORTED_MODULE_0__.useRoute)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "vue-router");



/***/ }),

/***/ "./.nuxt/paths.mjs":
/*!*************************!*\
  !*** ./.nuxt/paths.mjs ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseURL": () => (/* binding */ baseURL),
/* harmony export */   "buildAssetsDir": () => (/* binding */ buildAssetsDir),
/* harmony export */   "buildAssetsURL": () => (/* binding */ buildAssetsURL),
/* harmony export */   "publicAssetsURL": () => (/* binding */ publicAssetsURL)
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_ufo_dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/ufo/dist/index.mjs */ "./node_modules/ufo/dist/index.mjs");

const appConfig = { "baseURL": "/", "buildAssetsDir": "/_nuxt/", "cdnURL": "", "head": { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] }, "layoutTransition": false, "pageTransition": false, "keepalive": false, "rootId": "__nuxt", "rootTag": "div" };
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => (0,C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_ufo_dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__.joinURL)(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? (0,C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_ufo_dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__.joinURL)(publicBase, ...path) : publicBase;
};
if (false) {}

__webpack_require__.p = buildAssetsURL();


/***/ }),

/***/ "./.nuxt/plugins/server.mjs":
/*!**********************************!*\
  !*** ./.nuxt/plugins/server.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_nuxt_components_plugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.nuxt/components.plugin.mjs */ "./.nuxt/components.plugin.mjs");
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs */ "./node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_router_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/nuxt/dist/pages/runtime/router.mjs */ "./node_modules/nuxt/dist/pages/runtime/router.mjs");
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_app_plugins_preload_server_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/nuxt/dist/app/plugins/preload.server.mjs */ "./node_modules/nuxt/dist/app/plugins/preload.server.mjs");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_nuxt_components_plugin_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
  C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
  C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_router_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
  C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_app_plugins_preload_server_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]
]);


/***/ }),

/***/ "./.nuxt/root-component.mjs":
/*!**********************************!*\
  !*** ./.nuxt/root-component.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_app_components_nuxt_root_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_app_components_nuxt_root_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/nuxt/dist/app/components/nuxt-root.vue */ "./node_modules/nuxt/dist/app/components/nuxt-root.vue");



/***/ }),

/***/ "./.nuxt/router.options.mjs":
/*!**********************************!*\
  !*** ./.nuxt/router.options.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_router_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/nuxt/dist/pages/runtime/router.options */ "./node_modules/nuxt/dist/pages/runtime/router.options.mjs");

const configRouterOptions = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...configRouterOptions,
  ...C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_node_modules_nuxt_dist_pages_runtime_router_options__WEBPACK_IMPORTED_MODULE_0__["default"]
});


/***/ }),

/***/ "./.nuxt/routes.mjs":
/*!**************************!*\
  !*** ./.nuxt/routes.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_index_vue_macro_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.vue?macro=true */ "./pages/index.vue?macro=true");
/* harmony import */ var C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_university_search_vue_macro_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/university/search.vue?macro=true */ "./pages/university/search.vue?macro=true");
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    name: (_b = (_a = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_index_vue_macro_true__WEBPACK_IMPORTED_MODULE_0__["default"]) == null ? void 0 : _a.name) != null ? _b : "index",
    path: (_d = (_c = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_index_vue_macro_true__WEBPACK_IMPORTED_MODULE_0__["default"]) == null ? void 0 : _c.path) != null ? _d : "/",
    file: "C:/Users/Aziz/Desktop/maylisa_educ/maylisa_educ_website/pages/index.vue",
    children: [],
    meta: C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_index_vue_macro_true__WEBPACK_IMPORTED_MODULE_0__["default"],
    alias: ((_e = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_index_vue_macro_true__WEBPACK_IMPORTED_MODULE_0__["default"]) == null ? void 0 : _e.alias) || [],
    redirect: ((_f = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_index_vue_macro_true__WEBPACK_IMPORTED_MODULE_0__["default"]) == null ? void 0 : _f.redirect) || void 0,
    component: () => __webpack_require__.e(/*! import() */ "pages_index_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/index.vue */ "./pages/index.vue")).then((m) => m.default || m)
  },
  {
    name: (_h = (_g = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_university_search_vue_macro_true__WEBPACK_IMPORTED_MODULE_1__["default"]) == null ? void 0 : _g.name) != null ? _h : "university-search",
    path: (_j = (_i = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_university_search_vue_macro_true__WEBPACK_IMPORTED_MODULE_1__["default"]) == null ? void 0 : _i.path) != null ? _j : "/university/search",
    file: "C:/Users/Aziz/Desktop/maylisa_educ/maylisa_educ_website/pages/university/search.vue",
    children: [],
    meta: C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_university_search_vue_macro_true__WEBPACK_IMPORTED_MODULE_1__["default"],
    alias: ((_k = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_university_search_vue_macro_true__WEBPACK_IMPORTED_MODULE_1__["default"]) == null ? void 0 : _k.alias) || [],
    redirect: ((_l = C_Users_Aziz_Desktop_maylisa_educ_maylisa_educ_website_pages_university_search_vue_macro_true__WEBPACK_IMPORTED_MODULE_1__["default"]) == null ? void 0 : _l.redirect) || void 0,
    component: () => __webpack_require__.e(/*! import() */ "pages_university_search_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/university/search.vue */ "./pages/university/search.vue")).then((m) => m.default || m)
  }
]);


/***/ }),

/***/ "./node_modules/ufo/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/ufo/dist/index.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$URL": () => (/* binding */ $URL),
/* harmony export */   "cleanDoubleSlashes": () => (/* binding */ cleanDoubleSlashes),
/* harmony export */   "createURL": () => (/* binding */ createURL),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "decodePath": () => (/* binding */ decodePath),
/* harmony export */   "decodeQueryValue": () => (/* binding */ decodeQueryValue),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "encodeHash": () => (/* binding */ encodeHash),
/* harmony export */   "encodeHost": () => (/* binding */ encodeHost),
/* harmony export */   "encodeParam": () => (/* binding */ encodeParam),
/* harmony export */   "encodePath": () => (/* binding */ encodePath),
/* harmony export */   "encodeQueryItem": () => (/* binding */ encodeQueryItem),
/* harmony export */   "encodeQueryKey": () => (/* binding */ encodeQueryKey),
/* harmony export */   "encodeQueryValue": () => (/* binding */ encodeQueryValue),
/* harmony export */   "getQuery": () => (/* binding */ getQuery),
/* harmony export */   "hasLeadingSlash": () => (/* binding */ hasLeadingSlash),
/* harmony export */   "hasProtocol": () => (/* binding */ hasProtocol),
/* harmony export */   "hasTrailingSlash": () => (/* binding */ hasTrailingSlash),
/* harmony export */   "isEmptyURL": () => (/* binding */ isEmptyURL),
/* harmony export */   "isEqual": () => (/* binding */ isEqual),
/* harmony export */   "isNonEmptyURL": () => (/* binding */ isNonEmptyURL),
/* harmony export */   "isRelative": () => (/* binding */ isRelative),
/* harmony export */   "isSamePath": () => (/* binding */ isSamePath),
/* harmony export */   "joinURL": () => (/* binding */ joinURL),
/* harmony export */   "normalizeURL": () => (/* binding */ normalizeURL),
/* harmony export */   "parseAuth": () => (/* binding */ parseAuth),
/* harmony export */   "parseHost": () => (/* binding */ parseHost),
/* harmony export */   "parsePath": () => (/* binding */ parsePath),
/* harmony export */   "parseQuery": () => (/* binding */ parseQuery),
/* harmony export */   "parseURL": () => (/* binding */ parseURL),
/* harmony export */   "resolveURL": () => (/* binding */ resolveURL),
/* harmony export */   "stringifyParsedURL": () => (/* binding */ stringifyParsedURL),
/* harmony export */   "stringifyQuery": () => (/* binding */ stringifyQuery),
/* harmony export */   "withBase": () => (/* binding */ withBase),
/* harmony export */   "withHttp": () => (/* binding */ withHttp),
/* harmony export */   "withHttps": () => (/* binding */ withHttps),
/* harmony export */   "withLeadingSlash": () => (/* binding */ withLeadingSlash),
/* harmony export */   "withProtocol": () => (/* binding */ withProtocol),
/* harmony export */   "withQuery": () => (/* binding */ withQuery),
/* harmony export */   "withTrailingSlash": () => (/* binding */ withTrailingSlash),
/* harmony export */   "withoutBase": () => (/* binding */ withoutBase),
/* harmony export */   "withoutLeadingSlash": () => (/* binding */ withoutLeadingSlash),
/* harmony export */   "withoutProtocol": () => (/* binding */ withoutProtocol),
/* harmony export */   "withoutTrailingSlash": () => (/* binding */ withoutTrailingSlash)
/* harmony export */ });
/* provided dependency */ var URLSearchParams = __webpack_require__(/*! url */ "url")["URLSearchParams"];
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5b/gi;
const ENC_BRACKET_CLOSE_RE = /%5d/gi;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7b/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_CURLY_CLOSE_RE = /%7d/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (typeof object[key] !== "undefined") {
      if (Array.isArray(object[key])) {
        object[key].push(value);
      } else {
        object[key] = [object[key], value];
      }
    } else {
      object[key] = value;
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length > 0 ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        for (const v of value) {
          p.append(name, v);
        }
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}

function isRelative(inputString) {
  return ["./", "../"].some((string_) => inputString.startsWith(string_));
}
const PROTOCOL_REGEX = /^\w{2,}:(\/\/)?/;
const PROTOCOL_RELATIVE_REGEX = /^\/\/[^/]+/;
function hasProtocol(inputString, acceptProtocolRelative = false) {
  return PROTOCOL_REGEX.test(inputString) || acceptProtocolRelative && PROTOCOL_RELATIVE_REGEX.test(inputString);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParameters = false) {
  if (!queryParameters) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
  return input.split("://").map((string_) => string_.replace(/\/{2,}/g, "/")).join("://");
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const index of input.filter((url2) => isNonEmptyURL(url2))) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(index) : index;
  }
  return url;
}
function withHttp(input) {
  return withProtocol(input, "http://");
}
function withHttps(input) {
  return withProtocol(input, "https://");
}
function withoutProtocol(input) {
  return withProtocol(input, "");
}
function withProtocol(input, protocol) {
  const match = input.match(PROTOCOL_REGEX);
  if (!match) {
    return protocol + input;
  }
  return protocol + input.slice(match[0].length);
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function resolveURL(base, ...input) {
  const url = createURL(base);
  for (const index of input.filter((url2) => isNonEmptyURL(url2))) {
    url.append(createURL(index));
  }
  return url.toString();
}
function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}
function isEqual(a, b, options = {}) {
  if (!options.trailingSlash) {
    a = withTrailingSlash(a);
    b = withTrailingSlash(b);
  }
  if (!options.leadingSlash) {
    a = withLeadingSlash(a);
    b = withLeadingSlash(b);
  }
  if (!options.encoding) {
    a = decode(a);
    b = decode(b);
  }
  return a === b;
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath = ""] = (input.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^#/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path.replace(/\/(?=[A-Za-z]:)/, ""));
  return {
    protocol,
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}




/***/ }),

/***/ "./.nuxt/components.plugin.mjs":
/*!*************************************!*\
  !*** ./.nuxt/components.plugin.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");

const components = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app__WEBPACK_IMPORTED_MODULE_0__.defineNuxtPlugin)((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}));


/***/ }),

/***/ "./node_modules/nuxt/dist/app/components/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/components/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defineNuxtLink": () => (/* reexport safe */ _nuxt_link_mjs__WEBPACK_IMPORTED_MODULE_0__.defineNuxtLink)
/* harmony export */ });
/* harmony import */ var _nuxt_link_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt-link.mjs */ "./node_modules/nuxt/dist/app/components/nuxt-link.mjs");



/***/ }),

/***/ "./node_modules/nuxt/dist/app/components/layout.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/components/layout.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/nuxt/dist/app/components/utils.mjs");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");
/* harmony import */ var _build_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! #build/pages */ "./.nuxt/pages.mjs");
/* harmony import */ var _build_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #build/layouts */ "./.nuxt/layouts.mjs");
/* harmony import */ var _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #build/nuxt.config.mjs */ "./.nuxt/nuxt.config.mjs");






const LayoutLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    name: String,
    ... true ? { hasTransition: Boolean } : 0
  },
  async setup(props, context) {
    let vnode;
    if (false) {}
    const LayoutComponent = await _build_layouts__WEBPACK_IMPORTED_MODULE_4__["default"][props.name]().then((r) => r.default || r);
    return () => {
      if (false) {}
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(LayoutComponent, {}, context.slots);
    };
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("_route");
    const route = injectedRoute === (0,_app__WEBPACK_IMPORTED_MODULE_2__.useRoute)() ? (0,_build_pages__WEBPACK_IMPORTED_MODULE_3__.useRoute)() : injectedRoute;
    const layout = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(props.name) ?? route.meta.layout ?? "default");
    let vnode;
    let _layout;
    if (false) {}
    return () => {
      const hasLayout = layout.value && layout.value in _build_layouts__WEBPACK_IMPORTED_MODULE_4__["default"];
      if ( true && layout.value && !hasLayout && layout.value !== "default") {
        console.warn(`Invalid layout \`${layout.value}\` selected.`);
      }
      const transitionProps = route.meta.layoutTransition ?? _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_5__.appLayoutTransition;
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__._wrapIf)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, hasLayout && transitionProps, {
        default: () => (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__._wrapIf)(LayoutLoader, hasLayout && { key: layout.value, name: layout.value, hasTransition:  true ? !!transitionProps : 0 }, context.slots).default()
      }).default();
    };
  }
}));


/***/ }),

/***/ "./node_modules/nuxt/dist/app/components/nuxt-link.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/components/nuxt-link.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defineNuxtLink": () => (/* binding */ defineNuxtLink)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ufo */ "ufo");
/* harmony import */ var _composables_preload_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../composables/preload.mjs */ "./node_modules/nuxt/dist/app/composables/preload.mjs");
/* harmony import */ var _composables_router_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../composables/router.mjs */ "./node_modules/nuxt/dist/app/composables/router.mjs");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");





const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
const requestIdleCallback =  true ? void 0 : 0;
const cancelIdleCallback =  true ? null : 0;
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if ( true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = (0,_composables_router_mjs__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
      const to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || (0,ufo__WEBPACK_IMPORTED_MODULE_1__.hasProtocol)(to.value, true);
      });
      const prefetched = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      const el =  true ? void 0 : 0;
      if (false) {}
      return () => {
        if (!isExternal.value) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink"),
            {
              ref:  true ? void 0 : 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => (0,_composables_router_mjs__WEBPACK_IMPORTED_MODULE_3__.navigateTo)(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("a", { ref: el, href, rel, target }, slots.default?.());
      };
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineNuxtLink({ componentName: "NuxtLink" }));
function useObserver() {
  if (true) {
    return;
  }
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_4__.useNuxtApp)();
  if (nuxtApp._observer) {
    return nuxtApp._observer;
  }
  let observer = null;
  const callbacks = /* @__PURE__ */ new Map();
  const observe = (element, callback) => {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const callback2 = callbacks.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (isVisible && callback2) {
            callback2();
          }
        }
      });
    }
    callbacks.set(element, callback);
    observer.observe(element);
    return () => {
      callbacks.delete(element);
      observer.unobserve(element);
      if (callbacks.size === 0) {
        observer.disconnect();
        observer = null;
      }
    };
  };
  const _observer = nuxtApp._observer = {
    observe
  };
  return _observer;
}
function isSlowConnection() {
  if (true) {
    return;
  }
  const cn = navigator.connection;
  if (cn && (cn.saveData || /2g/.test(cn.effectiveType))) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/components/utils.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/components/utils.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_wrapIf": () => (/* binding */ _wrapIf)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");

const Fragment = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(component, props === true ? {} : props, slots) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Fragment, {}, slots) };
};


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/asyncData.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/asyncData.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearNuxtData": () => (/* binding */ clearNuxtData),
/* harmony export */   "refreshNuxtData": () => (/* binding */ refreshNuxtData),
/* harmony export */   "useAsyncData": () => (/* binding */ useAsyncData),
/* harmony export */   "useLazyAsyncData": () => (/* binding */ useLazyAsyncData)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/nuxt/dist/app/composables/error.mjs");



const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(getCachedData() ?? options.default?.() ?? null),
      pending: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!hasCachedData()),
      error: (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(nuxt.payload._errors[key] ? (0,_error_mjs__WEBPACK_IMPORTED_MODULE_2__.createError)(nuxt.payload._errors[key]) : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(options.default?.() ?? null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = (0,_error_mjs__WEBPACK_IMPORTED_MODULE_2__.createError)(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if ( true && fetchOnServer && options.immediate) {
    const promise = initialFetch();
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch)(() => promise);
  }
  if (false) {}
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
async function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  await (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)().hooks.callHookParallel("app:data:refresh", _keys);
}
function clearNuxtData(keys) {
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
  const _allKeys = Object.keys(nuxtApp.payload.data);
  const _keys = !keys ? _allKeys : typeof keys === "function" ? _allKeys.filter(keys) : Array.isArray(keys) ? keys : [keys];
  for (const key of _keys) {
    if (key in nuxtApp.payload.data) {
      nuxtApp.payload.data[key] = void 0;
    }
    if (key in nuxtApp.payload._errors) {
      nuxtApp.payload._errors[key] = void 0;
    }
    if (nuxtApp._asyncData[key]) {
      nuxtApp._asyncData[key].data.value = void 0;
      nuxtApp._asyncData[key].error.value = void 0;
      nuxtApp._asyncData[key].pending.value = false;
    }
    if (key in nuxtApp._asyncDataPromises) {
      nuxtApp._asyncDataPromises[key] = void 0;
    }
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/component.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/component.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuxtComponentIndicator": () => (/* binding */ NuxtComponentIndicator),
/* harmony export */   "defineNuxtComponent": () => (/* binding */ defineNuxtComponent)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _asyncData_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asyncData.mjs */ "./node_modules/nuxt/dist/app/composables/asyncData.mjs");
/* harmony import */ var _router_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.mjs */ "./node_modules/nuxt/dist/app/composables/router.mjs");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #head */ "./node_modules/nuxt/dist/head/runtime/index.mjs");





const NuxtComponentIndicator = "__nuxt_component";
async function runLegacyAsyncData(res, fn) {
  const nuxt = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
  const route = (0,_router_mjs__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
  const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await (0,_asyncData_mjs__WEBPACK_IMPORTED_MODULE_2__.useAsyncData)(`options:asyncdata:${key}`, () => fn(nuxt));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)((0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData && !options.head) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      const promises = [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      if (options.head) {
        const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
        (0,_head__WEBPACK_IMPORTED_MODULE_4__.useHead)(typeof options.head === "function" ? () => options.head(nuxtApp) : options.head);
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
      });
    }
  };
};


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/cookie.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/cookie.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCookie": () => (/* binding */ useCookie)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var cookie_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-es */ "cookie-es");
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! h3 */ "h3");
/* harmony import */ var destr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! destr */ "destr");
/* harmony import */ var ohash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ohash */ "ohash");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _ssr_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ssr.mjs */ "./node_modules/nuxt/dist/app/composables/ssr.mjs");







const CookieDefaults = {
  path: "/",
  decode: (val) => (0,destr__WEBPACK_IMPORTED_MODULE_3__["default"])(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(cookies[name] ?? opts.default?.());
  if (false) {} else if (true) {
    const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_5__.useNuxtApp)();
    const writeFinalCookieValue = () => {
      if (!(0,ohash__WEBPACK_IMPORTED_MODULE_4__.isEqual)(cookie.value, cookies[name])) {
        writeServerCookie((0,_ssr_mjs__WEBPACK_IMPORTED_MODULE_6__.useRequestEvent)(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  if (true) {
    return (0,cookie_es__WEBPACK_IMPORTED_MODULE_1__.parse)((0,_ssr_mjs__WEBPACK_IMPORTED_MODULE_6__.useRequestEvent)()?.req.headers.cookie || "", opts);
  } else {}
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return (0,cookie_es__WEBPACK_IMPORTED_MODULE_1__.serialize)(name, value, { ...opts, maxAge: -1 });
  }
  return (0,cookie_es__WEBPACK_IMPORTED_MODULE_1__.serialize)(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {}
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    (0,h3__WEBPACK_IMPORTED_MODULE_2__.appendHeader)(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/error.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/error.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearError": () => (/* binding */ clearError),
/* harmony export */   "createError": () => (/* binding */ createError),
/* harmony export */   "isNuxtError": () => (/* binding */ isNuxtError),
/* harmony export */   "showError": () => (/* binding */ showError),
/* harmony export */   "useError": () => (/* binding */ useError)
/* harmony export */ });
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! h3 */ "h3");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");



const useError = () => (0,vue__WEBPACK_IMPORTED_MODULE_1__.toRef)((0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_2__.useNuxtApp)().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_2__.useNuxtApp)();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const clearError = async (options = {}) => {
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_2__.useNuxtApp)();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = (0,h3__WEBPACK_IMPORTED_MODULE_0__.createError)(err);
  _err.__nuxt_error = true;
  return _err;
};


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/fetch.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/fetch.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetch": () => (/* binding */ useFetch),
/* harmony export */   "useLazyFetch": () => (/* binding */ useLazyFetch)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var ohash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ohash */ "ohash");
/* harmony import */ var _asyncData_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asyncData.mjs */ "./node_modules/nuxt/dist/app/composables/asyncData.mjs");



function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || (0,ohash__WEBPACK_IMPORTED_MODULE_1__.hash)([autoKey, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(opts.baseURL), typeof request === "string" ? request : "", (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(opts.params)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(r);
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    watch: [
      _fetchOptions,
      _request,
      ...watch || []
    ]
  };
  let controller;
  const asyncData = (0,_asyncData_mjs__WEBPACK_IMPORTED_MODULE_2__.useAsyncData)(key, () => {
    controller?.abort?.();
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    return $fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    autoKey
  );
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/hydrate.mjs":
/*!************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/hydrate.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHydration": () => (/* binding */ useHydration)
/* harmony export */ });
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");

const useHydration = (key, get, set) => {
  const nuxt = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.useNuxtApp)();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {}
};


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abortNavigation": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.abortNavigation),
/* harmony export */   "addRouteMiddleware": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.addRouteMiddleware),
/* harmony export */   "clearError": () => (/* reexport safe */ _error_mjs__WEBPACK_IMPORTED_MODULE_4__.clearError),
/* harmony export */   "clearNuxtData": () => (/* reexport safe */ _asyncData_mjs__WEBPACK_IMPORTED_MODULE_1__.clearNuxtData),
/* harmony export */   "createError": () => (/* reexport safe */ _error_mjs__WEBPACK_IMPORTED_MODULE_4__.createError),
/* harmony export */   "defineNuxtComponent": () => (/* reexport safe */ _component_mjs__WEBPACK_IMPORTED_MODULE_0__.defineNuxtComponent),
/* harmony export */   "defineNuxtRouteMiddleware": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.defineNuxtRouteMiddleware),
/* harmony export */   "isNuxtError": () => (/* reexport safe */ _error_mjs__WEBPACK_IMPORTED_MODULE_4__.isNuxtError),
/* harmony export */   "isPrerendered": () => (/* reexport safe */ _payload_mjs__WEBPACK_IMPORTED_MODULE_10__.isPrerendered),
/* harmony export */   "loadPayload": () => (/* reexport safe */ _payload_mjs__WEBPACK_IMPORTED_MODULE_10__.loadPayload),
/* harmony export */   "navigateTo": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.navigateTo),
/* harmony export */   "onBeforeRouteLeave": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.onBeforeRouteLeave),
/* harmony export */   "onBeforeRouteUpdate": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.onBeforeRouteUpdate),
/* harmony export */   "prefetchComponents": () => (/* reexport safe */ _preload_mjs__WEBPACK_IMPORTED_MODULE_9__.prefetchComponents),
/* harmony export */   "preloadComponents": () => (/* reexport safe */ _preload_mjs__WEBPACK_IMPORTED_MODULE_9__.preloadComponents),
/* harmony export */   "preloadPayload": () => (/* reexport safe */ _payload_mjs__WEBPACK_IMPORTED_MODULE_10__.preloadPayload),
/* harmony export */   "preloadRouteComponents": () => (/* reexport safe */ _preload_mjs__WEBPACK_IMPORTED_MODULE_9__.preloadRouteComponents),
/* harmony export */   "refreshNuxtData": () => (/* reexport safe */ _asyncData_mjs__WEBPACK_IMPORTED_MODULE_1__.refreshNuxtData),
/* harmony export */   "setPageLayout": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.setPageLayout),
/* harmony export */   "setResponseStatus": () => (/* reexport safe */ _ssr_mjs__WEBPACK_IMPORTED_MODULE_7__.setResponseStatus),
/* harmony export */   "showError": () => (/* reexport safe */ _error_mjs__WEBPACK_IMPORTED_MODULE_4__.showError),
/* harmony export */   "useAsyncData": () => (/* reexport safe */ _asyncData_mjs__WEBPACK_IMPORTED_MODULE_1__.useAsyncData),
/* harmony export */   "useCookie": () => (/* reexport safe */ _cookie_mjs__WEBPACK_IMPORTED_MODULE_6__.useCookie),
/* harmony export */   "useError": () => (/* reexport safe */ _error_mjs__WEBPACK_IMPORTED_MODULE_4__.useError),
/* harmony export */   "useFetch": () => (/* reexport safe */ _fetch_mjs__WEBPACK_IMPORTED_MODULE_5__.useFetch),
/* harmony export */   "useHydration": () => (/* reexport safe */ _hydrate_mjs__WEBPACK_IMPORTED_MODULE_2__.useHydration),
/* harmony export */   "useLazyAsyncData": () => (/* reexport safe */ _asyncData_mjs__WEBPACK_IMPORTED_MODULE_1__.useLazyAsyncData),
/* harmony export */   "useLazyFetch": () => (/* reexport safe */ _fetch_mjs__WEBPACK_IMPORTED_MODULE_5__.useLazyFetch),
/* harmony export */   "useRequestEvent": () => (/* reexport safe */ _ssr_mjs__WEBPACK_IMPORTED_MODULE_7__.useRequestEvent),
/* harmony export */   "useRequestHeaders": () => (/* reexport safe */ _ssr_mjs__WEBPACK_IMPORTED_MODULE_7__.useRequestHeaders),
/* harmony export */   "useRoute": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.useRoute),
/* harmony export */   "useRouter": () => (/* reexport safe */ _router_mjs__WEBPACK_IMPORTED_MODULE_8__.useRouter),
/* harmony export */   "useState": () => (/* reexport safe */ _state_mjs__WEBPACK_IMPORTED_MODULE_3__.useState)
/* harmony export */ });
/* harmony import */ var _component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.mjs */ "./node_modules/nuxt/dist/app/composables/component.mjs");
/* harmony import */ var _asyncData_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asyncData.mjs */ "./node_modules/nuxt/dist/app/composables/asyncData.mjs");
/* harmony import */ var _hydrate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hydrate.mjs */ "./node_modules/nuxt/dist/app/composables/hydrate.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/nuxt/dist/app/composables/state.mjs");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/nuxt/dist/app/composables/error.mjs");
/* harmony import */ var _fetch_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch.mjs */ "./node_modules/nuxt/dist/app/composables/fetch.mjs");
/* harmony import */ var _cookie_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cookie.mjs */ "./node_modules/nuxt/dist/app/composables/cookie.mjs");
/* harmony import */ var _ssr_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ssr.mjs */ "./node_modules/nuxt/dist/app/composables/ssr.mjs");
/* harmony import */ var _router_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router.mjs */ "./node_modules/nuxt/dist/app/composables/router.mjs");
/* harmony import */ var _preload_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preload.mjs */ "./node_modules/nuxt/dist/app/composables/preload.mjs");
/* harmony import */ var _payload_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payload.mjs */ "./node_modules/nuxt/dist/app/composables/payload.mjs");













/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/payload.mjs":
/*!************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/payload.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPrerendered": () => (/* binding */ isPrerendered),
/* harmony export */   "loadPayload": () => (/* binding */ loadPayload),
/* harmony export */   "preloadPayload": () => (/* binding */ preloadPayload)
/* harmony export */ });
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ufo */ "ufo");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.mjs */ "./node_modules/nuxt/dist/app/index.mjs");
/* provided dependency */ var URL = __webpack_require__(/*! url */ "url")["URL"];



function loadPayload(url, opts = {}) {
  if (true) {
    return null;
  }
  const payloadURL = _getPayloadURL(url, opts);
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
  const cache = nuxtApp._payloadCache = nuxtApp._payloadCache || {};
  if (cache[url]) {
    return cache[url];
  }
  cache[url] = _importPayload(payloadURL).then((payload) => {
    if (!payload) {
      delete cache[url];
      return null;
    }
    return payload;
  });
  return cache[url];
}
function preloadPayload(url, opts = {}) {
  const payloadURL = _getPayloadURL(url, opts);
  (0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.useHead)({
    link: [
      { rel: "modulepreload", href: payloadURL }
    ]
  });
}
function _getPayloadURL(url, opts = {}) {
  const u = new URL(url, "http://localhost");
  if (u.search) {
    throw new Error("Payload URL cannot contain search params: " + url);
  }
  if (u.host !== "localhost") {
    throw new Error("Payload URL cannot contain host: " + url);
  }
  const hash = opts.hash || (opts.fresh ? Date.now() : "");
  return (0,ufo__WEBPACK_IMPORTED_MODULE_0__.joinURL)((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.useRuntimeConfig)().app.baseURL, u.pathname, hash ? `_payload.${hash}.js` : "_payload.js");
}
async function _importPayload(payloadURL) {
  if (true) {
    return null;
  }
  const res = await import(
    /* webpackIgnore: true */
    /* @vite-ignore */
    payloadURL
  ).catch((err) => {
    console.warn("[nuxt] Cannot load payload ", payloadURL, err);
  });
  return res?.default || null;
}
function isPrerendered() {
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
  return !!nuxtApp.payload.prerenderedAt;
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/preload.mjs":
/*!************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/preload.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefetchComponents": () => (/* binding */ prefetchComponents),
/* harmony export */   "preloadComponents": () => (/* binding */ preloadComponents),
/* harmony export */   "preloadRouteComponents": () => (/* binding */ preloadRouteComponents)
/* harmony export */ });
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _router_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.mjs */ "./node_modules/nuxt/dist/app/composables/router.mjs");


const preloadComponents = async (components) => {
  if (true) {
    return;
  }
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.useNuxtApp)();
  components = Array.isArray(components) ? components : [components];
  await Promise.all(components.map((name) => _loadAsyncComponent(nuxtApp.vueApp._context.components[name])));
};
const prefetchComponents = (components) => {
  return preloadComponents(components);
};
function _loadAsyncComponent(component) {
  if (component?.__asyncLoader && !component.__asyncResolved) {
    return component.__asyncLoader();
  }
}
async function preloadRouteComponents(to, router = (0,_router_mjs__WEBPACK_IMPORTED_MODULE_1__.useRouter)()) {
  if (true) {
    return;
  }
  if (!router._routePreloaded) {
    router._routePreloaded = /* @__PURE__ */ new Set();
  }
  if (router._routePreloaded.has(to)) {
    return;
  }
  router._routePreloaded.add(to);
  const promises = router._preloadPromises = router._preloadPromises || [];
  if (promises.length > 4) {
    return Promise.all(promises).then(() => preloadRouteComponents(to, router));
  }
  const components = router.resolve(to).matched.map((component) => component.components?.default).filter((component) => typeof component === "function");
  for (const component of components) {
    const promise = Promise.resolve(component()).catch(() => {
    }).finally(() => promises.splice(promises.indexOf(promise)));
    promises.push(promise);
  }
  await Promise.all(promises);
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/router.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/router.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abortNavigation": () => (/* binding */ abortNavigation),
/* harmony export */   "addRouteMiddleware": () => (/* binding */ addRouteMiddleware),
/* harmony export */   "defineNuxtRouteMiddleware": () => (/* binding */ defineNuxtRouteMiddleware),
/* harmony export */   "navigateTo": () => (/* binding */ navigateTo),
/* harmony export */   "onBeforeRouteLeave": () => (/* binding */ onBeforeRouteLeave),
/* harmony export */   "onBeforeRouteUpdate": () => (/* binding */ onBeforeRouteUpdate),
/* harmony export */   "setPageLayout": () => (/* binding */ setPageLayout),
/* harmony export */   "useRoute": () => (/* binding */ useRoute),
/* harmony export */   "useRouter": () => (/* binding */ useRouter)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! h3 */ "h3");
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ufo */ "ufo");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.mjs */ "./node_modules/nuxt/dist/app/composables/error.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/nuxt/dist/app/composables/state.mjs");






const useRouter = () => {
  return (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useNuxtApp)()?.$router;
};
const useRoute = () => {
  if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)("_route", (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useNuxtApp)()._route);
  }
  return (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useNuxtApp)()._route;
};
const onBeforeRouteLeave = (guard) => {
  const unsubscribe = useRouter().beforeEach((to, from, next) => {
    if (to === from) {
      return;
    }
    return guard(to, from, next);
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(unsubscribe);
};
const onBeforeRouteUpdate = (guard) => {
  const unsubscribe = useRouter().beforeEach(guard);
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(unsubscribe);
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useNuxtApp)();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
const isProcessingMiddleware = () => {
  try {
    if ((0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useNuxtApp)()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (0,ufo__WEBPACK_IMPORTED_MODULE_2__.hasProtocol)(toPath, true);
  if (isExternal && !options?.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && (0,ufo__WEBPACK_IMPORTED_MODULE_2__.parseURL)(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  if (false) {}
  const router = useRouter();
  if (true) {
    const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useNuxtApp)();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : (0,ufo__WEBPACK_IMPORTED_MODULE_2__.joinURL)((0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useRuntimeConfig)().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => (0,h3__WEBPACK_IMPORTED_MODULE_1__.sendRedirect)(nuxtApp.ssrContext.event, redirectLocation, options?.redirectCode || 302));
    }
  }
  if (isExternal) {
    if (options?.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
const abortNavigation = (err) => {
  if ( true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw (0,_error_mjs__WEBPACK_IMPORTED_MODULE_4__.createError)(err);
  }
  return false;
};
const setPageLayout = (layout) => {
  if (true) {
    if ( true && (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)() && (0,_state_mjs__WEBPACK_IMPORTED_MODULE_5__.useState)("_layout").value !== layout) {
      console.warn("[warn] [nuxt] `setPageLayout` should not be called to change the layout on the server within a component as this will cause hydration errors.");
    }
    (0,_state_mjs__WEBPACK_IMPORTED_MODULE_5__.useState)("_layout").value = layout;
  }
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_3__.useNuxtApp)();
  if ( true && nuxtApp.isHydrating && (0,_state_mjs__WEBPACK_IMPORTED_MODULE_5__.useState)("_layout").value !== layout) {
    console.warn("[warn] [nuxt] `setPageLayout` should not be called to change the layout during hydration as this will cause hydration errors.");
  }
  const inMiddleware = isProcessingMiddleware();
  if (inMiddleware || true || 0) {
    const unsubscribe = useRouter().beforeResolve((to) => {
      to.meta.layout = layout;
      unsubscribe();
    });
  }
  if (!inMiddleware) {
    useRoute().meta.layout = layout;
  }
};


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/ssr.mjs":
/*!********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/ssr.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setResponseStatus": () => (/* binding */ setResponseStatus),
/* harmony export */   "useRequestEvent": () => (/* binding */ useRequestEvent),
/* harmony export */   "useRequestHeaders": () => (/* binding */ useRequestHeaders)
/* harmony export */ });
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");

function useRequestHeaders(include) {
  if (false) {}
  const headers = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.useNuxtApp)().ssrContext?.event.node.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.useNuxtApp)()) {
  return nuxtApp.ssrContext?.event;
}
function setResponseStatus(code, message) {
  const event =  true && useRequestEvent();
  if (event) {
    event.node.res.statusCode = code;
    if (message) {
      event.node.res.statusMessage = message;
    }
  }
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/composables/state.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/nuxt/dist/app/composables/state.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");


function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
  const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/config.mjs":
/*!***********************************************!*\
  !*** ./node_modules/nuxt/dist/app/config.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_getAppConfig": () => (/* binding */ _getAppConfig),
/* harmony export */   "updateAppConfig": () => (/* binding */ updateAppConfig),
/* harmony export */   "useAppConfig": () => (/* binding */ useAppConfig)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _build_app_config_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #build/app.config.mjs */ "./.nuxt/app.config.mjs");



const _getAppConfig = () => _build_app_config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"];
function deepDelete(obj, newObj) {
  for (const key in obj) {
    const val = newObj[key];
    if (!(key in newObj)) {
      delete obj[key];
    }
    if (val !== null && typeof val === "object") {
      deepDelete(obj[key], newObj[key]);
    }
  }
}
function deepAssign(obj, newObj) {
  for (const key in newObj) {
    const val = newObj[key];
    if (val !== null && typeof val === "object") {
      deepAssign(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
}
function useAppConfig() {
  const nuxtApp = (0,_nuxt_mjs__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(_build_app_config_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
  return nuxtApp._appConfig;
}
function updateAppConfig(appConfig) {
  const _appConfig = useAppConfig();
  deepAssign(_appConfig, appConfig);
}
if (true) {
  let applyHMR = function(newConfig) {
    const appConfig = useAppConfig();
    if (newConfig && appConfig) {
      deepAssign(appConfig, newConfig);
      deepDelete(appConfig, newConfig);
    }
  };
  if (false) {}
  if (false) {}
}


/***/ }),

/***/ "./node_modules/nuxt/dist/app/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/nuxt/dist/app/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuxtPluginIndicator": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.NuxtPluginIndicator),
/* harmony export */   "_getAppConfig": () => (/* reexport safe */ _config_mjs__WEBPACK_IMPORTED_MODULE_3__._getAppConfig),
/* harmony export */   "abortNavigation": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.abortNavigation),
/* harmony export */   "addRouteMiddleware": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.addRouteMiddleware),
/* harmony export */   "applyPlugin": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.applyPlugin),
/* harmony export */   "applyPlugins": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.applyPlugins),
/* harmony export */   "callWithNuxt": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.callWithNuxt),
/* harmony export */   "clearError": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.clearError),
/* harmony export */   "clearNuxtData": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.clearNuxtData),
/* harmony export */   "createError": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createError),
/* harmony export */   "createNuxtApp": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.createNuxtApp),
/* harmony export */   "defineAppConfig": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.defineAppConfig),
/* harmony export */   "defineNuxtComponent": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.defineNuxtComponent),
/* harmony export */   "defineNuxtLink": () => (/* reexport safe */ _components_index_mjs__WEBPACK_IMPORTED_MODULE_2__.defineNuxtLink),
/* harmony export */   "defineNuxtPlugin": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.defineNuxtPlugin),
/* harmony export */   "defineNuxtRouteMiddleware": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.defineNuxtRouteMiddleware),
/* harmony export */   "isNuxtError": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isNuxtError),
/* harmony export */   "isNuxtPlugin": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.isNuxtPlugin),
/* harmony export */   "isPrerendered": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.isPrerendered),
/* harmony export */   "isVue2": () => (/* binding */ isVue2),
/* harmony export */   "isVue3": () => (/* binding */ isVue3),
/* harmony export */   "loadPayload": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.loadPayload),
/* harmony export */   "navigateTo": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.navigateTo),
/* harmony export */   "normalizePlugins": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.normalizePlugins),
/* harmony export */   "onBeforeRouteLeave": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeRouteLeave),
/* harmony export */   "onBeforeRouteUpdate": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeRouteUpdate),
/* harmony export */   "prefetchComponents": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.prefetchComponents),
/* harmony export */   "preloadComponents": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.preloadComponents),
/* harmony export */   "preloadPayload": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.preloadPayload),
/* harmony export */   "preloadRouteComponents": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.preloadRouteComponents),
/* harmony export */   "refreshNuxtData": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.refreshNuxtData),
/* harmony export */   "setPageLayout": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.setPageLayout),
/* harmony export */   "setResponseStatus": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.setResponseStatus),
/* harmony export */   "showError": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.showError),
/* harmony export */   "updateAppConfig": () => (/* reexport safe */ _config_mjs__WEBPACK_IMPORTED_MODULE_3__.updateAppConfig),
/* harmony export */   "useAppConfig": () => (/* reexport safe */ _config_mjs__WEBPACK_IMPORTED_MODULE_3__.useAppConfig),
/* harmony export */   "useAsyncData": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useAsyncData),
/* harmony export */   "useCookie": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useCookie),
/* harmony export */   "useError": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useError),
/* harmony export */   "useFetch": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useFetch),
/* harmony export */   "useHead": () => (/* reexport safe */ _head__WEBPACK_IMPORTED_MODULE_4__.useHead),
/* harmony export */   "useHydration": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useHydration),
/* harmony export */   "useLazyAsyncData": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useLazyAsyncData),
/* harmony export */   "useLazyFetch": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useLazyFetch),
/* harmony export */   "useNuxtApp": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.useNuxtApp),
/* harmony export */   "useRequestEvent": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useRequestEvent),
/* harmony export */   "useRequestHeaders": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useRequestHeaders),
/* harmony export */   "useRoute": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useRoute),
/* harmony export */   "useRouter": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useRouter),
/* harmony export */   "useRuntimeConfig": () => (/* reexport safe */ _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__.useRuntimeConfig),
/* harmony export */   "useState": () => (/* reexport safe */ _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__.useState)
/* harmony export */ });
/* harmony import */ var _nuxt_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt.mjs */ "./node_modules/nuxt/dist/app/nuxt.mjs");
/* harmony import */ var _composables_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composables/index.mjs */ "./node_modules/nuxt/dist/app/composables/index.mjs");
/* harmony import */ var _components_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index.mjs */ "./node_modules/nuxt/dist/app/components/index.mjs");
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.mjs */ "./node_modules/nuxt/dist/app/config.mjs");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #head */ "./node_modules/nuxt/dist/head/runtime/index.mjs");





const isVue2 = false;
const isVue3 = true;


/***/ }),

/***/ "./node_modules/nuxt/dist/app/nuxt.mjs":
/*!*********************************************!*\
  !*** ./node_modules/nuxt/dist/app/nuxt.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuxtPluginIndicator": () => (/* binding */ NuxtPluginIndicator),
/* harmony export */   "applyPlugin": () => (/* binding */ applyPlugin),
/* harmony export */   "applyPlugins": () => (/* binding */ applyPlugins),
/* harmony export */   "callWithNuxt": () => (/* binding */ callWithNuxt),
/* harmony export */   "createNuxtApp": () => (/* binding */ createNuxtApp),
/* harmony export */   "defineAppConfig": () => (/* binding */ defineAppConfig),
/* harmony export */   "defineNuxtPlugin": () => (/* binding */ defineNuxtPlugin),
/* harmony export */   "isNuxtPlugin": () => (/* binding */ isNuxtPlugin),
/* harmony export */   "normalizePlugins": () => (/* binding */ normalizePlugins),
/* harmony export */   "useNuxtApp": () => (/* binding */ useNuxtApp),
/* harmony export */   "useRuntimeConfig": () => (/* binding */ useRuntimeConfig)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var hookable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hookable */ "hookable");
/* harmony import */ var unctx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unctx */ "unctx");



const nuxtAppCtx = (0,unctx__WEBPACK_IMPORTED_MODULE_2__.getContext)("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      data: {},
      state: {},
      _errors: {},
      ... false ? 0 : { serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = (0,hookable__WEBPACK_IMPORTED_MODULE_1__.createHooks)();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (true) {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig =  true ? options.ssrContext.runtimeConfig : 0;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true) {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if ( true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if ( true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if ( true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {}
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}


/***/ }),

/***/ "./node_modules/nuxt/dist/head/runtime/composables.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/nuxt/dist/head/runtime/composables.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHead": () => (/* binding */ useHead)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");

function useHead(input, options) {
  return (0,_app__WEBPACK_IMPORTED_MODULE_0__.useNuxtApp)()._useHead(input, options);
}


/***/ }),

/***/ "./node_modules/nuxt/dist/head/runtime/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/nuxt/dist/head/runtime/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHead": () => (/* reexport safe */ _composables_mjs__WEBPACK_IMPORTED_MODULE_0__.useHead)
/* harmony export */ });
/* harmony import */ var _composables_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composables.mjs */ "./node_modules/nuxt/dist/head/runtime/composables.mjs");



/***/ }),

/***/ "./node_modules/nuxt/dist/pages/runtime/page.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/nuxt/dist/pages/runtime/page.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "vue-router");
/* harmony import */ var defu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! defu */ "defu");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/nuxt/dist/pages/runtime/utils.mjs");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");
/* harmony import */ var _app_components_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #app/components/utils */ "./node_modules/nuxt/dist/app/components/utils.mjs");
/* harmony import */ var _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! #build/nuxt.config.mjs */ "./.nuxt/nuxt.config.mjs");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = (0,_app__WEBPACK_IMPORTED_MODULE_4__.useNuxtApp)();
    return () => {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue_router__WEBPACK_IMPORTED_MODULE_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.generateRouteKey)(props.pageKey, routeProps);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_6__.appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_6__.appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return (0,_app_components_utils__WEBPACK_IMPORTED_MODULE_5__._wrapIf)(
            vue__WEBPACK_IMPORTED_MODULE_0__.Transition,
            hasTransition && transitionProps,
            (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.wrapInKeepAlive)(
              props.keepalive ?? routeProps.route.meta.keepalive ?? _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_6__.appKeepalive,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Component, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
}));
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return (0,defu__WEBPACK_IMPORTED_MODULE_2__.defu)(..._props);
}
const Component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)("_route", (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(route));
    let vnode;
    if (false) {}
    return () => {
      if (false) {}
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(props.routeProps.Component);
    };
  }
});


/***/ }),

/***/ "./node_modules/nuxt/dist/pages/runtime/router.options.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/nuxt/dist/pages/runtime/router.options.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");
/* harmony import */ var _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #build/nuxt.config.mjs */ "./.nuxt/nuxt.config.mjs");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = (0,_app__WEBPACK_IMPORTED_MODULE_1__.useNuxtApp)();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_2__.appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
});
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./node_modules/nuxt/dist/pages/runtime/utils.mjs":
/*!********************************************************!*\
  !*** ./node_modules/nuxt/dist/pages/runtime/utils.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRouteKey": () => (/* binding */ generateRouteKey),
/* harmony export */   "wrapInKeepAlive": () => (/* binding */ wrapInKeepAlive)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () =>  false ? 0 : children };
};


/***/ }),

/***/ "./node_modules/nuxt/dist/app/plugins/preload.server.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/nuxt/dist/app/plugins/preload.server.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app__WEBPACK_IMPORTED_MODULE_0__.defineNuxtPlugin)((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
}));


/***/ }),

/***/ "./node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vueuse_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vueuse/head */ "./node_modules/@vueuse/head/dist/index.mjs");
/* harmony import */ var _vueuse_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vueuse/head */ "@unhead/vue");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");
/* harmony import */ var _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #build/nuxt.config.mjs */ "./.nuxt/nuxt.config.mjs");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app__WEBPACK_IMPORTED_MODULE_0__.defineNuxtPlugin)((nuxtApp) => {
  const head = (0,_vueuse_head__WEBPACK_IMPORTED_MODULE_2__.createHead)();
  head.push(_build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_1__.appHead);
  nuxtApp.vueApp.use(head);
  if (false) {}
  nuxtApp._useHead = _vueuse_head__WEBPACK_IMPORTED_MODULE_3__.useHead;
  if (true) {
    nuxtApp.ssrContext.renderMeta = async () => {
      const { renderSSRHead } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @unhead/ssr */ "@unhead/ssr"));
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        bodyScripts: meta.bodyTags
      };
    };
  }
}));


/***/ }),

/***/ "./node_modules/nuxt/dist/pages/runtime/router.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/nuxt/dist/pages/runtime/router.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var unctx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unctx */ "unctx");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ "vue-router");
/* harmony import */ var h3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! h3 */ "h3");
/* harmony import */ var ufo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ufo */ "ufo");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");
/* harmony import */ var _build_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! #build/routes */ "./.nuxt/routes.mjs");
/* harmony import */ var _build_router_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! #build/router.options */ "./.nuxt/router.options.mjs");
/* harmony import */ var _build_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! #build/middleware */ "./.nuxt/middleware.mjs");








function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return (0,ufo__WEBPACK_IMPORTED_MODULE_4__.withoutBase)(pathFromHash, "");
  }
  const path = (0,ufo__WEBPACK_IMPORTED_MODULE_4__.withoutBase)(pathname, base);
  return path + search + hash;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app__WEBPACK_IMPORTED_MODULE_5__.defineNuxtPlugin)(async (nuxtApp) => {let __temp, __restore;
  let routerBase = (0,_app__WEBPACK_IMPORTED_MODULE_5__.useRuntimeConfig)().app.baseURL;
  if (_build_router_options__WEBPACK_IMPORTED_MODULE_7__["default"].hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history = _build_router_options__WEBPACK_IMPORTED_MODULE_7__["default"].history?.(routerBase) ?? ( false ? 0 : (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createMemoryHistory)(routerBase));
  const routes = _build_router_options__WEBPACK_IMPORTED_MODULE_7__["default"].routes?.(_build_routes__WEBPACK_IMPORTED_MODULE_6__["default"]) ?? _build_routes__WEBPACK_IMPORTED_MODULE_6__["default"];
  const initialURL =  true ? nuxtApp.ssrContext.url : 0;
  const router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    ..._build_router_options__WEBPACK_IMPORTED_MODULE_7__["default"],
    history,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = (0,vue__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = (0,vue__WEBPACK_IMPORTED_MODULE_1__.shallowRef)(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => _route.value[key]);
  }
  nuxtApp._route = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = (0,_app__WEBPACK_IMPORTED_MODULE_5__.useError)();
  try {
    if (true) {
      ;(([__temp,__restore]=(0,unctx__WEBPACK_IMPORTED_MODULE_0__.executeAsync)(()=>router.push(initialURL))),await __temp,__restore());;
    }
    ;(([__temp,__restore]=(0,unctx__WEBPACK_IMPORTED_MODULE_0__.executeAsync)(()=>router.isReady())),await __temp,__restore());;
  } catch (error2) {
    (0,_app__WEBPACK_IMPORTED_MODULE_5__.callWithNuxt)(nuxtApp, _app__WEBPACK_IMPORTED_MODULE_5__.showError, [error2]);
  }
  const initialLayout = (0,_app__WEBPACK_IMPORTED_MODULE_5__.useState)("_layout");
  router.beforeEach(async (to, from) => {
    to.meta = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = initialLayout.value ?? to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([..._build_middleware__WEBPACK_IMPORTED_MODULE_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await _build_middleware__WEBPACK_IMPORTED_MODULE_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(_build_middleware__WEBPACK_IMPORTED_MODULE_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await (0,_app__WEBPACK_IMPORTED_MODULE_5__.callWithNuxt)(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || (0,h3__WEBPACK_IMPORTED_MODULE_3__.createError)({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await (0,_app__WEBPACK_IMPORTED_MODULE_5__.callWithNuxt)(nuxtApp, _app__WEBPACK_IMPORTED_MODULE_5__.showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false) {}
    if (to.matched.length === 0) {
      (0,_app__WEBPACK_IMPORTED_MODULE_5__.callWithNuxt)(nuxtApp, _app__WEBPACK_IMPORTED_MODULE_5__.showError, [(0,h3__WEBPACK_IMPORTED_MODULE_3__.createError)({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!(0,ufo__WEBPACK_IMPORTED_MODULE_4__.isEqual)(currentURL, initialURL)) {
        await (0,_app__WEBPACK_IMPORTED_MODULE_5__.callWithNuxt)(nuxtApp, _app__WEBPACK_IMPORTED_MODULE_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      (0,_app__WEBPACK_IMPORTED_MODULE_5__.callWithNuxt)(nuxtApp, _app__WEBPACK_IMPORTED_MODULE_5__.showError, [error2]);
    }
  });
  return { provide: { router } };
},1));


/***/ }),

/***/ "./node_modules/nuxt/dist/pages/runtime/validate.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/nuxt/dist/pages/runtime/validate.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var unctx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unctx */ "unctx");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_app__WEBPACK_IMPORTED_MODULE_1__.defineNuxtRouteMiddleware)(async (to) => {let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = (([__temp,__restore]=(0,unctx__WEBPACK_IMPORTED_MODULE_0__.executeAsync)(()=>Promise.resolve(to.meta.validate(to)))),__temp=await __temp,__restore(),__temp);
  if (typeof result === "boolean") {
    return result;
  }
  return (0,_app__WEBPACK_IMPORTED_MODULE_1__.createError)(result);
},1));


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".mjs";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/ })();
/******/ 
/******/ /* webpack/runtime/import chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/ 	
/******/ 	var installChunk = (data) => {
/******/ 		var {ids, modules, runtime} = data;
/******/ 		// add "modules" to the modules object,
/******/ 		// then flag all "ids" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		for(moduleId in modules) {
/******/ 			if(__webpack_require__.o(modules, moduleId)) {
/******/ 				__webpack_require__.m[moduleId] = modules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(runtime) runtime(__webpack_require__);
/******/ 		for(;i < ids.length; i++) {
/******/ 			chunkId = ids[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[ids[i]] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// import() chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[1]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = import("./" + __webpack_require__.u(chunkId)).then(installChunk, (e) => {
/******/ 							if(installedChunks[chunkId] !== 0) installedChunks[chunkId] = undefined;
/******/ 							throw e;
/******/ 						});
/******/ 						var promise = Promise.race([promise, new Promise((resolve) => (installedChunkData = installedChunks[chunkId] = [resolve]))])
/******/ 						promises.push(installedChunkData[1] = promise);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no external install chunk
/******/ 	
/******/ 	// no on chunks loaded
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./node_modules/nuxt/dist/app/entry.mjs ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var ofetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ofetch */ "ofetch");
/* harmony import */ var _build_paths_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! #build/paths.mjs */ "./.nuxt/paths.mjs");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! #app */ "./node_modules/nuxt/dist/app/index.mjs");
/* harmony import */ var _build_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! #build/css */ "./.nuxt/css.mjs");
/* harmony import */ var _build_plugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! #build/plugins */ "./.nuxt/plugins/server.mjs");
/* harmony import */ var _build_root_component_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! #build/root-component.mjs */ "./.nuxt/root-component.mjs");
/* harmony import */ var _build_nuxt_config_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! #build/nuxt.config.mjs */ "./.nuxt/nuxt.config.mjs");








if (!globalThis.$fetch) {
  globalThis.$fetch = ofetch__WEBPACK_IMPORTED_MODULE_1__.$fetch.create({
    baseURL: (0,_build_paths_mjs__WEBPACK_IMPORTED_MODULE_2__.baseURL)()
  });
}
let entry;
const plugins = (0,_app__WEBPACK_IMPORTED_MODULE_3__.normalizePlugins)(_build_plugins__WEBPACK_IMPORTED_MODULE_5__["default"]);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_build_root_component_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const nuxt = (0,_app__WEBPACK_IMPORTED_MODULE_3__.createNuxtApp)({ vueApp, ssrContext });
    try {
      await (0,_app__WEBPACK_IMPORTED_MODULE_3__.applyPlugins)(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ctx) => entry(ctx));

})();

var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };

//# sourceMappingURL=server.mjs.map