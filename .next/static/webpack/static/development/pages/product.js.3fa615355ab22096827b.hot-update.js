webpackHotUpdate("static\\development\\pages\\product.js",{

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_ProductRow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ProductRow.js */ "./components/ProductRow.js");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var _components_AddProductPopup_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AddProductPopup.js */ "./components/AddProductPopup.js");
/* harmony import */ var _service_ProductService_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/ProductService.js */ "./service/ProductService.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_pagination_library__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-pagination-library */ "./node_modules/react-pagination-library/build/index.js");
/* harmony import */ var react_pagination_library__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_pagination_library__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_pagination_library_build_css_index_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-pagination-library/build/css/index.css */ "./node_modules/react-pagination-library/build/css/index.css");
/* harmony import */ var react_pagination_library_build_css_index_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_pagination_library_build_css_index_css__WEBPACK_IMPORTED_MODULE_19__);









var _jsxFileName = "D:\\project\\nextJS\\ThuBong\\pages\\product.js";











var tableStyle = {
  margin: "0 auto",
  border: '1px solid #DDD'
};
var tableDivStyle = {
  padding: 20,
  textAlign: "center",
  border: '1px solid #DDD'
};

var Product =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Product, _React$Component);

  function Product(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Product);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Product).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "refreshData", function () {
      _this.getProduct(_this.state.currentPage);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "changeCurrentPage", function (numPage) {
      _this.changeCurrentPageAsync.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this))(numPage);
    });

    _this.state = {
      products: [],
      open: false,
      item: null,
      token: "",
      pageSize: 5,
      currentPage: 1,
      totalPages: 1
    };
    _this.openModal = _this.openModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Product, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        item: null,
        open: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.getProduct(this.state.currentPage);
      this.setState({
        open: false
      });
    }
  }, {
    key: "getProduct",
    value: function () {
      var _getProduct = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pageNum) {
        var json;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _service_ProductService_js__WEBPACK_IMPORTED_MODULE_14__["default"].getProduct(this.state.token, pageNum, this.state.pageSize);

              case 2:
                json = _context.sent;

                if (json.content != null) {
                  this.setState({
                    products: json.content
                  });
                }

                if (pageNum == 1) {
                  this.setState({
                    totalPages: json.totalPages
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProduct(_x) {
        return _getProduct.apply(this, arguments);
      }

      return getProduct;
    }()
  }, {
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var tokenLogin;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tokenLogin = js_cookie__WEBPACK_IMPORTED_MODULE_17___default.a.get('token');

                if (tokenLogin === "") {
                  next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/');
                }

                _context2.next = 4;
                return this.setState({
                  token: tokenLogin
                });

              case 4:
                _context2.next = 6;
                return this.getProduct(this.state.currentPage);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "changeCurrentPageAsync",
    value: function () {
      var _changeCurrentPageAsync = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(numPage) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.setState({
                  currentPage: numPage
                });

              case 2:
                this.getProduct(this.state.currentPage);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function changeCurrentPageAsync(_x2) {
        return _changeCurrentPageAsync.apply(this, arguments);
      }

      return changeCurrentPageAsync;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "S\u1EA3n Ph\u1EA9m"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: tableDivStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        border: "1",
        style: tableStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "STT"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u1EA2nh"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "T\xEAn"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "S\u1ED1 l\u01B0\u1EE3ng"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Gi\xE1(K VND)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Ng\u01B0\u1EDDi t\u1EA1o")), this.state.products.map(function (eItem, key) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ProductRow_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: key,
          token: _this2.state.token,
          refreshDataMethod: _this2.refreshData,
          item: eItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_pagination_library__WEBPACK_IMPORTED_MODULE_18___default.a, {
        currentPage: this.state.currentPage,
        totalPages: this.state.totalPages,
        changeCurrentPage: this.changeCurrentPage,
        theme: "bottom-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "button",
        class: "btn btn-primary",
        onClick: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Th\xEAm s\u1EA3n ph\u1EA9m"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_12__["default"], {
        open: this.state.open,
        closeOnDocumentClick: true,
        onClose: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AddProductPopup_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        token: this.state.token,
        item: this.state.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=product.js.3fa615355ab22096827b.hot-update.js.map