webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.tsx":
/*!************************!*\
  !*** ./pages/blog.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog.scss */ "./pages/blog.scss");
/* harmony import */ var _blog_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blog_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_contentfulUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/contentfulUtils */ "./utils/contentfulUtils.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "/home/arya/workDirectory/testTSFB/gh-pages-app/pages/blog.tsx";






var getAllBlogs = function getAllBlogs(items) {
  return items.map(function (blog, index) {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      key: index,
      as: "/post/".concat(blog.fields.slug),
      href: "/post?slug=".concat(blog.fields.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: "card",
      style: {
        animationDelay: "".concat(index * 0.5, "s")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, " ", blog.fields.title), blog.fields.featuredImage && react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("img", {
      src: blog.fields.featuredImage.fields.file.url,
      alt: blog.fields.featuredImage.fields.file.fileName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, blog.fields.description, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Continue reading ....")), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, blog.fields.category)));
  });
};

var BlogsPage = function BlogsPage(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "blogsContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Sanyam Arya"), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
    className: "search",
    type: "text",
    name: "search",
    placeholder: "Search..",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, getAllBlogs(items))));
};

BlogsPage.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var items;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_utils_contentfulUtils__WEBPACK_IMPORTED_MODULE_6__["findAllPosts"])();

        case 2:
          items = _context.sent;
          items = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(items));
          return _context.abrupt("return", {
            items: items
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (BlogsPage);

/***/ })

})
//# sourceMappingURL=blog.js.f749e045496d13e5603d.hot-update.js.map