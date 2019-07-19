webpackHotUpdate("static\\development\\pages\\buy.js",{

/***/ "./pages/buy.js":
/*!**********************!*\
  !*** ./pages/buy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bill; });
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
/* harmony import */ var _components_BillRow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BillRow.js */ "./components/BillRow.js");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var _components_AddBillPopup_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AddBillPopup.js */ "./components/AddBillPopup.js");
/* harmony import */ var _service_BillService_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service/BillService.js */ "./service/BillService.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_pagination_library__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-pagination-library */ "./node_modules/react-pagination-library/build/index.js");
/* harmony import */ var react_pagination_library__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_pagination_library__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "D:\\project\\nextJS\\ThuBong\\pages\\buy.js";









 //import "react-pagination-library/build/css/index.css";

var tableStyle = {
  margin: "0 auto",
  border: '1px solid #DDD'
};
var tableDivStyle = {
  padding: 20,
  textAlign: "center",
  border: '1px solid #DDD'
};

var Bill =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Bill, _React$Component);

  function Bill(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Bill);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Bill).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "refreshData", function () {
      _this.getBill(_this.state.currentPage);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "changeCurrentPage", function (numPage) {
      _this.changeCurrentPageAsync.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this))(numPage);
    });

    _this.state = {
      bills: [],
      open: false,
      item: null,
      kind: "buy",
      token: "",
      pageSize: 5,
      currentPage: 1,
      totalPages: 1,
      sumPrice: 0
    };
    _this.openModal = _this.openModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Bill, [{
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
      this.getBill(this.state.currentPage);
      this.setState({
        open: false
      });
    }
  }, {
    key: "getBill",
    value: function () {
      var _getBill = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pageNum) {
        var json, jsonSumPrice;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _service_BillService_js__WEBPACK_IMPORTED_MODULE_14__["default"].getBillByType(this.state.kind, this.state.token, pageNum, this.state.pageSize);

              case 2:
                json = _context.sent;
                _context.next = 5;
                return _service_BillService_js__WEBPACK_IMPORTED_MODULE_14__["default"].getSumPrice(this.state.kind, this.state.token);

              case 5:
                jsonSumPrice = _context.sent;

                //console.log(json.content);
                if (json.content != null) {
                  this.setState({
                    bills: json.content,
                    sumPrice: jsonSumPrice
                  });
                }

                if (pageNum == 1) {
                  this.setState({
                    totalPages: json.totalPages
                  });
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getBill(_x) {
        return _getBill.apply(this, arguments);
      }

      return getBill;
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
                return this.getBill(this.state.currentPage);

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
                this.getBill(this.state.currentPage);

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
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "H\xF3a \u0110\u01A1n Mua H\xE0ng"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        class: "alert alert-success",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "T\u1ED5ng ti\u1EC1n \u0111\xE3 mua : ", this.state.sumPrice, "K (VND)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: tableDivStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        border: "1",
        style: tableStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "STT"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "T\xEAn H\xF3a \u0110\u01A1n"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Danh s\xE1ch s\u1EA3n ph\u1EA9m"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Gi\xE1 (K VND)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "T\xEAn Kh\xE1ch H\xE0ng"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "S\u0110T Kh\xE1ch H\xE0ng"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Ng\u01B0\u1EDDi t\u1EA1o")), this.state.bills.map(function (eItem, key) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_BillRow_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: key,
          token: _this2.state.token,
          kind: _this2.state.kind,
          refreshDataMethod: _this2.refreshData,
          item: eItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_pagination_library__WEBPACK_IMPORTED_MODULE_18___default.a, {
        currentPage: this.state.currentPage,
        totalPages: this.state.totalPages,
        changeCurrentPage: this.changeCurrentPage,
        theme: "bottom-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "button",
        class: "btn btn-primary",
        onClick: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Th\xEAm Bill"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_12__["default"], {
        open: this.state.open,
        closeOnDocumentClick: true,
        onClose: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AddBillPopup_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        token: this.state.token,
        kind: this.state.kind,
        item: this.state.item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })));
    }
  }]);

  return Bill;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=buy.js.67445b31499a5adf6180.hot-update.js.map