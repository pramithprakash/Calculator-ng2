webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Only show the calcualtor component -->\n<calculator></calculator>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Volumes/Macintosh HD 2/pramith/working/ng2/Calculator-ng2/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_calculator__ = __webpack_require__("../../../../../src/app/components/calculator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_operationService__ = __webpack_require__("../../../../../src/app/services/operationService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__components_calculator__["a" /* CalculatorComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_operationService__["a" /* OperationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Volumes/Macintosh HD 2/pramith/working/ng2/Calculator-ng2/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/calculator.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calculator {\n    width: 200px;\n    -webkit-transform: translate(-50%, -70%);\n            transform: translate(-50%, -70%);\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    background: #ddd;\n    border-radius: 6px 6px 0 0;\n}\n.display {\n    border-radius: 6px 6px 0 0;\n    padding: 0 5px;\n    background: #333;\n    margin-bottom: 0;\n}\n.operation {\n    font-size: 18px;\n    height: 24px;\n    color: #777;\n    line-height: 28px;\n    overflow: hidden;\n}\n.operation span {\n    float: left;\n}\n.result {\n    height: 55px;\n    color: #fff;\n    font-size: 48px;\n    text-align: left;\n}\n.calculator button {\n    width: calc(25% - 1px );\n    background: #eee;\n    color: #333;\n    border: 0;\n    margin: 0 1px 1px 0;\n    height: 44px;\n    line-height: 19px;\n    font-size: 20px;\n    outline: none;\n}\n.calculator button.equals {\n    width: calc(50% - 1px );\n}\n.calculator button.operation {\n    background: #F69505;\n    color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/calculator.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"group\">\n    <div class=\"calculator\">\n       <div class=\"display\">\n          <div class=\"operation\">\n             <span>{{operation.input1}}</span>\n             <span>{{operation.sign}}</span>\n             <span>{{operation.input2}}</span>\n          </div>\n          <div class=\"result\">\n             <span>{{operation.result}}</span>\n          </div>\n       </div>\n       <button\n       [ngClass]=\"operator.class\"\n       (click)=\"assignOperation(operator)\" *ngFor=\"let operator of operators\" [value]=\"operator.id\">{{operator.sign}}</button>\n    </div>\n<form>\n"

/***/ }),

/***/ "../../../../../src/app/components/calculator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operation__ = __webpack_require__("../../../../../src/app/components/operation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators__ = __webpack_require__("../../../../../src/app/components/operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_operationService__ = __webpack_require__("../../../../../src/app/services/operationService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalculatorComponent = (function () {
    function CalculatorComponent(formBuilder, operationService) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.operators = __WEBPACK_IMPORTED_MODULE_3__operators__["a" /* Operators */].operatorList;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.operation = new __WEBPACK_IMPORTED_MODULE_2__operation__["a" /* Operation */]();
        this.createFormControls();
    };
    CalculatorComponent.prototype.runOperation = function (operation) {
        operation.result = this.operationService.runOperation(operation);
    };
    CalculatorComponent.prototype.assignOperation = function (operation) {
        if (this.operation.done && operation.operationId === 5) {
            this.operation.input1 = this.operation.result;
            this.runOperation(this.operation);
            return;
        }
        else if (this.operation.done && operation.operationId < 5) {
            this.operation.input1 = this.operation.result;
            this.operation.input2 = '';
            this.operation.operationId = operation.operationId;
            this.operation.sign = operation.sign;
            this.operation.result = undefined;
            this.operation.done = false;
            return;
        }
        if ((!operation.operationId && !this.operation.sign) || this.operation.done) {
            if (this.operation.done) {
                this.operation.done = false;
                this.operation.input1 = '';
                this.operation.input2 = '';
                this.operation.sign = '';
            }
            this.operation.input1 = this.operation.input1 + operation.sign.toString();
            this.operation.result = this.operation.input1;
        }
        else if (operation.operationId && operation.operationId < 5) {
            this.operation.operationId = operation.operationId;
            this.operation.sign = operation.sign;
            this.operation.result = undefined;
        }
        else if (!operation.operationId && this.operation.sign) {
            this.operation.input2 = this.operation.input2 + operation.sign.toString();
            this.operation.result = this.operation.input2;
        }
        else if (operation.operationId === 5) {
            this.operation.done = true;
            this.runOperation(this.operation);
        }
    };
    CalculatorComponent.prototype.createFormControls = function () {
        this.operation.input1 = '';
        this.operation.input2 = '';
        this.group = this.formBuilder.group({
            'input': [this.operation.input1]
        });
    };
    CalculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'calculator',
            template: __webpack_require__("../../../../../src/app/components/calculator.html"),
            styles: [__webpack_require__("../../../../../src/app/components/calculator.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_operationService__["a" /* OperationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_operationService__["a" /* OperationService */]) === 'function' && _b) || Object])
    ], CalculatorComponent);
    return CalculatorComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Macintosh HD 2/pramith/working/ng2/Calculator-ng2/src/calculator.js.map

/***/ }),

/***/ "../../../../../src/app/components/operation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operation; });
var Operation = (function () {
    function Operation() {
    }
    return Operation;
}());
//# sourceMappingURL=/Volumes/Macintosh HD 2/pramith/working/ng2/Calculator-ng2/src/operation.js.map

/***/ }),

/***/ "../../../../../src/app/components/operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OperatorsEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operators; });
var OperatorsEnum;
(function (OperatorsEnum) {
    OperatorsEnum[OperatorsEnum["one"] = 0] = "one";
    OperatorsEnum[OperatorsEnum["two"] = 1] = "two";
    OperatorsEnum[OperatorsEnum["three"] = 2] = "three";
    OperatorsEnum[OperatorsEnum["four"] = 3] = "four";
    OperatorsEnum[OperatorsEnum["five"] = 4] = "five";
    OperatorsEnum[OperatorsEnum["six"] = 5] = "six";
    OperatorsEnum[OperatorsEnum["seven"] = 6] = "seven";
    OperatorsEnum[OperatorsEnum["eight"] = 7] = "eight";
    OperatorsEnum[OperatorsEnum["nine"] = 8] = "nine";
    OperatorsEnum[OperatorsEnum["zero"] = 9] = "zero";
    OperatorsEnum[OperatorsEnum["addition"] = 1] = "addition";
    OperatorsEnum[OperatorsEnum["subtraction"] = 2] = "subtraction";
    OperatorsEnum[OperatorsEnum["multiplication"] = 3] = "multiplication";
    OperatorsEnum[OperatorsEnum["division"] = 4] = "division";
    OperatorsEnum[OperatorsEnum["equals"] = 5] = "equals";
})(OperatorsEnum || (OperatorsEnum = {}));
var Operators = (function () {
    function Operators() {
    }
    Operators.operatorList = [
        { 'id': OperatorsEnum.one, 'name': 'One', sign: '1' },
        { 'id': OperatorsEnum.two, 'name': 'Two', sign: '2' },
        { 'id': OperatorsEnum.three, 'name': 'Three', sign: '3' },
        { 'id': OperatorsEnum.division, 'name': 'Division', sign: '/', 'operationId': 4, class: 'operation' },
        { 'id': OperatorsEnum.four, 'name': 'Four', sign: '4' },
        { 'id': OperatorsEnum.five, 'name': 'Five', sign: '5' },
        { 'id': OperatorsEnum.six, 'name': 'Six', sign: '6' },
        { 'id': OperatorsEnum.multiplication, 'name': 'Multiplication', sign: '*', 'operationId': 3, class: 'operation' },
        { 'id': OperatorsEnum.seven, 'name': 'Seven', sign: '7' },
        { 'id': OperatorsEnum.eight, 'name': 'Eight', sign: '8' },
        { 'id': OperatorsEnum.nine, 'name': 'Nine', sign: '9' },
        { 'id': OperatorsEnum.subtraction, 'name': 'Subtraction', sign: '-', 'operationId': 2, class: 'operation' },
        { 'id': OperatorsEnum.zero, 'name': 'Zero', sign: '0' },
        { 'id': OperatorsEnum.equals, 'name': 'Equals', sign: '=', 'operationId': 5, class: 'operation equals' },
        { 'id': OperatorsEnum.addition, 'name': 'Addition', sign: '+', 'operationId': 1, class: 'operation' }
    ];
    return Operators;
}());
//# sourceMappingURL=/Volumes/Macintosh HD 2/pramith/working/ng2/Calculator-ng2/src/operators.js.map

/***/ }),

/***/ "../../../../../src/app/services/operationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_operators__ = __webpack_require__("../../../../../src/app/components/operators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * The OperationService is responsible for handling all calculations.
 * It uses the Operation object to find what the requested operation is and then using the inputs,
 * performs the calculation. The calculated result is returned.
 */
var OperationService = (function () {
    function OperationService() {
    }
    OperationService.prototype.runOperation = function (operation) {
        var num1 = Number.parseFloat(operation.input1.toString());
        var num2 = Number.parseFloat(operation.input2.toString());
        var operator = Number.parseFloat(operation.operationId.toString());
        switch (operator) {
            case __WEBPACK_IMPORTED_MODULE_1__components_operators__["b" /* OperatorsEnum */].addition: return num1 + num2;
            case __WEBPACK_IMPORTED_MODULE_1__components_operators__["b" /* OperatorsEnum */].subtraction: return num1 - num2;
            case __WEBPACK_IMPORTED_MODULE_1__components_operators__["b" /* OperatorsEnum */].multiplication: return num1 * num2;
            case __WEBPACK_IMPORTED_MODULE_1__components_operators__["b" /* OperatorsEnum */].division: return num1 / num2;
            default: return 0;
        }
    };
    OperationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], OperationService);
    return OperationService;
}());
//# sourceMappingURL=/Volumes/Macintosh HD 2/pramith/working/ng2/Calculator-ng2/src/operationService.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Volumes/Macintosh HD 2/pramith/working/ng2/Calculator-ng2/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map