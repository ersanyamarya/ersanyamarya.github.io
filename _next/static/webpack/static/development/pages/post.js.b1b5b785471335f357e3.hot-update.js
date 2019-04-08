webpackHotUpdate("static/development/pages/post.js",{

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/react-instagram-embed/es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-instagram-embed/es/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var InstagramEmbed = /** @class */ (function (_super) {
    __extends(InstagramEmbed, _super);
    function InstagramEmbed(props) {
        var _this = _super.call(this, props) || this;
        _this.request = null;
        // Public
        _this.cancel = function () {
            if (_this.request) {
                _this.request.cancel();
            }
        };
        _this.handleFetchSuccess = function (response) {
            if (_this.props.onSuccess) {
                _this.props.onSuccess(response);
            }
            _this.setState({ html: response.html }, function () {
                window.instgrm.Embeds.process();
                if (_this.props.onAfterRender) {
                    _this.props.onAfterRender();
                }
            });
        };
        _this.handleFetchFailure = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(_this.timer);
            if (_this.props.onFailure) {
                _this.props.onFailure(args);
            }
        };
        _this.createRequestPromise = function (url) {
            var request = {};
            request.promise = new Promise(function (resolve, reject) {
                var promise = fetch(url)
                    .then(function (response) { return response.json(); })
                    .then(function (json) { return resolve(json); })
                    .catch(function (err) { return reject(err); });
                request.cancel = function () { return reject(new Error('Cancelled')); };
                return promise;
            });
            return request;
        };
        _this.state = { html: null };
        return _this;
    }
    InstagramEmbed.prototype.componentDidMount = function () {
        var _this = this;
        if (window.instgrm) {
            this.fetchEmbed(this.getQueryParams(this.props));
        }
        else {
            if (this.props.injectScript && !document.getElementById('react-instagram-embed-script')) {
                this.injectScript();
            }
            this.checkAPI().then(function () {
                _this.fetchEmbed(_this.getQueryParams(_this.props));
            });
        }
    };
    InstagramEmbed.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, url = _a.url, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth, containerTagName = _a.containerTagName;
        if (prevProps.url !== url ||
            prevProps.hideCaption !== hideCaption ||
            prevProps.maxWidth !== maxWidth ||
            prevProps.containerTagName !== containerTagName) {
            this.request.cancel();
            this.fetchEmbed(this.getQueryParams(this.props));
        }
    };
    InstagramEmbed.prototype.componentWillUnmount = function () {
        this.cancel();
    };
    InstagramEmbed.prototype.render = function () {
        var Tag = this.props.containerTagName;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Tag, __assign({}, this.omitComponentProps(), { dangerouslySetInnerHTML: { __html: this.state.html || '' } }));
    };
    InstagramEmbed.prototype.fetchEmbed = function (queryParams) {
        this.request = this.createRequestPromise("https://api.instagram.com/oembed/?" + queryParams);
        if (this.props.onLoading) {
            this.props.onLoading();
        }
        this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure);
    };
    InstagramEmbed.prototype.omitComponentProps = function () {
        var _a = this.props, url = _a.url, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth, containerTagName = _a.containerTagName, onLoading = _a.onLoading, onSuccess = _a.onSuccess, onAfterRender = _a.onAfterRender, onFailure = _a.onFailure, protocol = _a.protocol, injectScript = _a.injectScript, rest = __rest(_a, ["url", "hideCaption", "maxWidth", "containerTagName", "onLoading", "onSuccess", "onAfterRender", "onFailure", "protocol", "injectScript"]);
        return rest;
    };
    InstagramEmbed.prototype.injectScript = function () {
        var protocolToUse = window.location.protocol.indexOf('file') === 0 ? this.props.protocol : '';
        var s = document.createElement('script');
        s.async = s.defer = true;
        s.src = protocolToUse + "//platform.instagram.com/en_US/embeds.js";
        s.id = 'react-instagram-embed-script';
        var body = document.body;
        if (body) {
            body.appendChild(s);
        }
    };
    InstagramEmbed.prototype.checkAPI = function () {
        var _this = this;
        return new Promise(function (resolve) {
            (function checkAPI(self) {
                self.timer = window.setTimeout(function () {
                    if (window.instgrm) {
                        clearTimeout(self.timer);
                        resolve();
                    }
                    else {
                        checkAPI(self);
                    }
                }, 20);
            })(_this);
        });
    };
    InstagramEmbed.prototype.getQueryParams = function (_a) {
        var url = _a.url, hideCaption = _a.hideCaption, maxWidth = _a.maxWidth;
        return query_string__WEBPACK_IMPORTED_MODULE_1__["stringify"]({
            url: url,
            hidecaption: hideCaption,
            maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
            omitscript: true
        });
    };
    InstagramEmbed.defaultProps = {
        hideCaption: false,
        containerTagName: 'div',
        protocol: 'https:',
        injectScript: true
    };
    return InstagramEmbed;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));
/* harmony default export */ __webpack_exports__["default"] = (InstagramEmbed);


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

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
//# sourceMappingURL=post.js.b1b5b785471335f357e3.hot-update.js.map