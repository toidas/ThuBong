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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_ProductRow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ProductRow.js */ "./components/ProductRow.js");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var _components_AddProductPopup_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AddProductPopup.js */ "./components/AddProductPopup.js");
/* harmony import */ var _service_ProductService_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/ProductService.js */ "./service/ProductService.js");







var _jsxFileName = "D:\\project\\nextJS\\ThuBong\\pages\\product.js";






var tableStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Product =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Product, _React$Component);

  function Product(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Product);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Product).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getProduct", function () {
      _service_ProductService_js__WEBPACK_IMPORTED_MODULE_12__["default"].getProduct().then(function (result) {
        var productsTmp = result.content;
        console.log(productsTmp);
        this.showConsole();
      }).catch(function (error) {
        alert('server bị lỗi');
      });
    });

    _this.state = {
      products: [],
      open: false
    };
    _this.openModal = _this.openModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.closeModal = _this.closeModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Product, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "showConsole",
    value: function showConsole() {
      console.log("AAAAAAAA");
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        products: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "S\u1EA3n Ph\u1EA9m"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        border: "1",
        style: tableStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "STT"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u1EA2nh"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "T\xEAn"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "S\u1ED1 l\u01B0\u1EE3ng"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Gi\xE1(VND)")), this.state.products.map(function (eItem, key) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ProductRow_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: eItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "button",
        onClick: this.openModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Th\xEAm s\u1EA3n ph\u1EA9m"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "button",
        onClick: this.getProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Th\xEAm s\u1EA3n ph\u1EA9m 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: this.state.open,
        closeOnDocumentClick: true,
        onClose: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_AddProductPopup_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=product.js.3feb0f810ce92602c94b.hot-update.js.map