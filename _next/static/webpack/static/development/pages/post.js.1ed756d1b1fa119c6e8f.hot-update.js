webpackHotUpdate("static/development/pages/post.js",{

/***/ "./utils/contentfulUtils.ts":
/*!**********************************!*\
  !*** ./utils/contentfulUtils.ts ***!
  \**********************************/
/*! exports provided: findAllPosts, findOnePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllPosts", function() { return findAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOnePost", function() { return findOnePost; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");




var client = contentful__WEBPACK_IMPORTED_MODULE_3__["createClient"]({
  space: 'd7k4z456z5gd',
  accessToken: 'ce4da323ff0babe562754212cbfb9b689fd6460cc09d67718957f68b08484d23'
});
function findAllPosts() {
  return _findAllPosts.apply(this, arguments);
}

function _findAllPosts() {
  _findAllPosts = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var query, dataArray;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = {
              'content_type': 'post'
            };
            _context.next = 3;
            return client.getEntries(query).then(function (res) {
              // console.log(JSON.stringify(res.items, null, 2));
              return res.items;
            }).catch(function (err) {
              console.log('err in catch');
              return err;
            });

          case 3:
            dataArray = _context.sent;

            if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(dataArray)) {
              // throw new Error('Cannot find posts')4
              console.log('error');
            }

            return _context.abrupt("return", dataArray);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _findAllPosts.apply(this, arguments);
}

function findOnePost(_x) {
  return _findOnePost.apply(this, arguments);
}

function _findOnePost() {
  _findOnePost = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(SLUG) {
    var query, dataArray;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            query = {
              'content_type': 'post',
              'fields.slug[match]': SLUG
            };
            _context2.next = 3;
            return client.getEntries(query).then(function (res) {
              console.log(res.items[0]);
              return res.items;
            }).catch(function (err) {
              console.log('err in catch');
              return err;
            });

          case 3:
            dataArray = _context2.sent;

            if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(dataArray)) {
              // throw new Error('Cannot find posts')
              console.log('error');
            }

            return _context2.abrupt("return", dataArray[0]);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _findOnePost.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=post.js.1ed756d1b1fa119c6e8f.hot-update.js.map