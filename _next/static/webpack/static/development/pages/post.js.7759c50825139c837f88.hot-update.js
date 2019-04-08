webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post.scss */ "./pages/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_instagram_embed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-instagram-embed */ "./node_modules/react-instagram-embed/es/index.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/dynamic */ "./node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/home/arya/workDirectory/testTSFB/gh-pages-app/pages/post.tsx";






var ReactHighMark = next_server_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-mark-highlight */ "./node_modules/react-mark-highlight/dist/bundle.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-mark-highlight */ "./node_modules/react-mark-highlight/dist/bundle.js")];
    },
    modules: ['react-mark-highlight']
  }
});

var BlogPostPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(BlogPostPage, _React$Component);

  function BlogPostPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BlogPostPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BlogPostPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BlogPostPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          errors = _this$props.errors;

      if (errors) {
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("span", {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Error:"), " ", errors));
      }

      var seoMeta = {
        title: item.title,
        description: item.summary,
        twitterDescription: item.twitterSummary,
        image: item.featuredImage ? Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getImage"])(item.imageName) : 'https://avatars1.githubusercontent.com/u/28115284?s=460&v=4',
        keywords: item.tags,
        type: 'article',
        url: "sanyamarya.io/post?slug=".concat(item.slug),
        article: {
          published_on: item.date,
          section: item.category
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        seo: seoMeta,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "postContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, item.featuredImage && react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("img", {
        src: Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getImage"])(item.imageName),
        alt: item.slug,
        className: "featuredImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "bodyArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](ReactHighMark, {
        source: item.content,
        style: "diablo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("span", {
        className: "publishedDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, item.date))), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "allOther",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, item.title), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](react_instagram_embed__WEBPACK_IMPORTED_MODULE_12__["default"], {
        url: "https://www.instagram.com/p/BnUF_EUn1lM/",
        maxWidth: 320,
        hideCaption: false,
        containerTagName: "div",
        protocol: "",
        injectScript: true,
        onLoading: function onLoading() {},
        onSuccess: function onSuccess() {},
        onAfterRender: function onAfterRender() {},
        onFailure: function onFailure() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })))));
    }
  }]);

  return BlogPostPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(BlogPostPage, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, item;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            _context.prev = 1;
            _context.next = 4;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_10__["findOnePost"])(query.slug);

          case 4:
            item = _context.sent;
            return _context.abrupt("return", {
              item: item
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              errors: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (BlogPostPage);

/***/ })

})
//# sourceMappingURL=post.js.7759c50825139c837f88.hot-update.js.map