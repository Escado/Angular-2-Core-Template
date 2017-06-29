webpackJsonp([2,8],{

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(5);
var i1 = __webpack_require__(252);
var i2 = __webpack_require__(521);
var i3 = __webpack_require__(520);
var i4 = __webpack_require__(68);
var i5 = __webpack_require__(86);
var i6 = __webpack_require__(138);
var i7 = __webpack_require__(85);
var i8 = __webpack_require__(137);
var i9 = __webpack_require__(21);
var i10 = __webpack_require__(134);
var i11 = __webpack_require__(133);
exports.AdminInternalModuleNgFactory = i0.ɵcmf(i1.AdminInternalModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.UserComponentNgFactory, i3.ProductComponentNgFactory]], [3, i0.ComponentFactoryResolver],
            i0.NgModuleRef]), i0.ɵmpd(4608, i4.NgLocalization, i4.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i5.UserService, i5.UserService, []),
        i0.ɵmpd(4608, i6.UsersResolver, i6.UsersResolver, [i5.UserService]), i0.ɵmpd(4608, i7.ProductService, i7.ProductService, []), i0.ɵmpd(4608, i8.ProductsResolver, i8.ProductsResolver, [i7.ProductService]), i0.ɵmpd(512, i9.RouterModule, i9.RouterModule, [[2, i9.ɵa], [2, i9.Router]]), i0.ɵmpd(512, i4.CommonModule, i4.CommonModule, []), i0.ɵmpd(512, i1.AdminInternalModule, i1.AdminInternalModule, []), i0.ɵmpd(1024, i9.ROUTES, function () {
            return [[{ path: 'users', component: i10.UserComponent, resolve: { users: i6.UsersResolver } },
                    { path: 'products', component: i11.ProductComponent, resolve: { products: i8.ProductsResolver } }]];
        }, [])]);
});


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(5);
var i1 = __webpack_require__(68);
var i2 = __webpack_require__(133);
var i3 = __webpack_require__(21);
var i4 = __webpack_require__(85);
var styles_ProductComponent = [];
exports.RenderType_ProductComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_ProductComponent, data: {} });
function View_ProductComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 10, 'tr', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n            ']))], null, function (_ck, _v) {
        var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.id);
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.name);
        _ck(_v, 6, 0, currVal_1);
        var currVal_2 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.price);
        _ck(_v, 9, 0, currVal_2);
    });
}
function View_ProductComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class',
                'panel-heading']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, [' Products '])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 25, 'div', [['class', 'panel-body']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n\n    '])), (_l()(), i0.ɵeld(0, null, null, 22, 'table', [['class', 'table table-hover table-condensed table-striped']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 13, 'thead', [['class', '']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 10, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Id'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Name'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Price'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵeld(0, null, null, 4, 'tbody', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ProductComponent_1)), i0.ɵdid(802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.products;
        _ck(_v, 28, 0, currVal_0);
    }, null);
}
exports.View_ProductComponent_0 = View_ProductComponent_0;
function View_ProductComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_ProductComponent_0, exports.RenderType_ProductComponent)), i0.ɵdid(114688, null, 0, i2.ProductComponent, [i3.ActivatedRoute, i4.ProductService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_ProductComponent_Host_0 = View_ProductComponent_Host_0;
exports.ProductComponentNgFactory = i0.ɵccf('ng-component', i2.ProductComponent, View_ProductComponent_Host_0, {}, {}, []);


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(5);
var i1 = __webpack_require__(68);
var i2 = __webpack_require__(134);
var i3 = __webpack_require__(86);
var i4 = __webpack_require__(21);
var styles_UserComponent = [];
exports.RenderType_UserComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_UserComponent, data: {} });
function View_UserComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 10, 'tr', [], null, null, null, null, null)), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n            ']))], null, function (_ck, _v) {
        var currVal_0 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.id);
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.name);
        _ck(_v, 6, 0, currVal_1);
        var currVal_2 = ((_v.context.$implicit == null) ? null : _v.context.$implicit.surname);
        _ck(_v, 9, 0, currVal_2);
    });
}
function View_UserComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class',
                'panel-heading']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 1, 'h4', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, [' Users '])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 25, 'div', [['class', 'panel-body']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 22, 'table', [['class',
                'table table-hover table-condensed table-striped table-bordered']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 13, 'thead', [['class', '']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 10, 'tr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Id'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Name'])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Surname'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(0, null, null, 4, 'tbody', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_UserComponent_1)), i0.ɵdid(802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.users;
        _ck(_v, 28, 0, currVal_0);
    }, null);
}
exports.View_UserComponent_0 = View_UserComponent_0;
function View_UserComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'ng-component', [], null, null, null, View_UserComponent_0, exports.RenderType_UserComponent)), i0.ɵdid(114688, null, 0, i2.UserComponent, [i3.UserService,
            i4.ActivatedRoute], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_UserComponent_Host_0 = View_UserComponent_Host_0;
exports.UserComponentNgFactory = i0.ɵccf('ng-component', i2.UserComponent, View_UserComponent_Host_0, {}, {}, []);


/***/ })

});
//# sourceMappingURL=2.1bead1871a7a228c1b11.chunk.js.map