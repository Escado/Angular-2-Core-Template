/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(3);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = vendor_60a2e0331b5fcd4457ff;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(38);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var products_service_1 = __webpack_require__(6);
var ProductsResolver = (function () {
    function ProductsResolver(_productService) {
        this._productService = _productService;
    }
    ProductsResolver.prototype.resolve = function () {
        return this._productService.Get().map(function (products) { return products; });
    };
    return ProductsResolver;
}());
ProductsResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], ProductsResolver);
exports.ProductsResolver = ProductsResolver;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var products_service_1 = __webpack_require__(6);
var ProductComponent = (function () {
    function ProductComponent(route, _productService) {
        this.route = route;
        this._productService = _productService;
    }
    ProductComponent.prototype.setProducts = function () {
        var _this = this;
        this._productService.Get().map(function (x) { return x; }).subscribe(function (x) { return _this.products = x; });
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.setProducts();
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(42)
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, products_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(19);
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.Get = function () {
        var subject = new Subject_1.Subject();
        setTimeout(function () { subject.next(products); subject.complete(); }, 1000);
        return subject;
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
var products = [
    {
        id: 1,
        name: "Ben",
        price: 1.23
    }, {
        id: 2,
        name: "Me",
        price: 1.1
    },
];


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var users_service_1 = __webpack_require__(9);
var UsersResolver = (function () {
    function UsersResolver(userService) {
        this.userService = userService;
    }
    UsersResolver.prototype.resolve = function () {
        return this.userService.Get().map(function (users) { return users; });
    };
    return UsersResolver;
}());
UsersResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UsersResolver);
exports.UsersResolver = UsersResolver;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var users_service_1 = __webpack_require__(9);
var router_1 = __webpack_require__(2);
var UserComponent = (function () {
    function UserComponent(_userService, _route) {
        this._userService = _userService;
        this._route = _route;
        this.users = [];
    }
    UserComponent.prototype.setUsers = function () {
        this.users = this._route.snapshot.data['users'];
    };
    UserComponent.prototype.ngOnInit = function () {
        this.setUsers();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(43)
    }),
    __metadata("design:paramtypes", [users_service_1.UserService,
        router_1.ActivatedRoute])
], UserComponent);
exports.UserComponent = UserComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(19);
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.Get = function () {
        var subject = new Subject_1.Subject();
        setTimeout(function () { subject.next(users); subject.complete(); }, 1000);
        return subject;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
var users = [
    {
        id: 1,
        name: "Ben",
        surname: "Dakov"
    }, {
        id: 2,
        name: "Me",
        surname: "You"
    },
];


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var admin_internal_component_1 = __webpack_require__(11);
var admin_internal_routes_1 = __webpack_require__(12);
var admin_public_routes_1 = __webpack_require__(13);
exports.adminRoutes = [
    { path: 'internal', component: admin_internal_component_1.AdminInternalComponent, children: admin_internal_routes_1.adminInternalRoutes },
    { path: 'public', children: admin_public_routes_1.adminPublicRoutes }
];


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var AdminInternalComponent = (function () {
    function AdminInternalComponent() {
    }
    return AdminInternalComponent;
}());
AdminInternalComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(40)
    })
], AdminInternalComponent);
exports.AdminInternalComponent = AdminInternalComponent;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var users_component_1 = __webpack_require__(8);
var users_resolver_1 = __webpack_require__(7);
var products_component_1 = __webpack_require__(5);
var products_resolver_1 = __webpack_require__(4);
exports.adminInternalRoutes = [
    { path: 'users', component: users_component_1.UserComponent, resolve: { users: users_resolver_1.UsersResolver } },
    { path: 'products', component: products_component_1.ProductComponent, resolve: { products: products_resolver_1.ProductsResolver } },
];


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var login_component_1 = __webpack_require__(14);
exports.adminPublicRoutes = [
    { path: 'public', component: login_component_1.AdminLoginComponent },
];


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var AdminLoginComponent = (function () {
    function AdminLoginComponent(router) {
        this.router = router;
    }
    AdminLoginComponent.prototype.login = function (formValues) {
        this.router.navigate(['/admin/internal/']);
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(44)
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AdminLoginComponent);
exports.AdminLoginComponent = AdminLoginComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var client_internal_routes_1 = __webpack_require__(35);
var client_public_routes_1 = __webpack_require__(16);
exports.clientRoutes = [
    { path: 'internal', children: client_internal_routes_1.clientInternalRoutes },
    { path: 'public', children: client_public_routes_1.clientPublicRoutes },
];


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var login_component_1 = __webpack_require__(17);
exports.clientPublicRoutes = [
    { path: 'login', component: login_component_1.ClientLoginComponent },
];


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var ClientLoginComponent = (function () {
    function ClientLoginComponent(router) {
        this.router = router;
    }
    ClientLoginComponent.prototype.login = function (formValues) {
        console.log(formValues);
    };
    return ClientLoginComponent;
}());
ClientLoginComponent = __decorate([
    core_1.Component({
        template: __webpack_require__(45)
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ClientLoginComponent);
exports.ClientLoginComponent = ClientLoginComponent;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(35);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(6);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
__webpack_require__(39);
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(60);
var application_component_1 = __webpack_require__(32);
var routes_1 = __webpack_require__(38);
var client_module_1 = __webpack_require__(33);
var admin_module_1 = __webpack_require__(26);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes, { useHash: true }),
            admin_module_1.AdminModule,
            client_module_1.ClientModule
        ],
        declarations: [
            application_component_1.ApplicationComponent,
        ],
        bootstrap: [
            application_component_1.ApplicationComponent,
        ]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(37);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(41);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(42);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(55);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(56);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var admin_routes_1 = __webpack_require__(10);
var admin_internal_component_1 = __webpack_require__(11);
var admin_internal_module_1 = __webpack_require__(27);
var navbar_component_1 = __webpack_require__(28);
var admin_public_module_1 = __webpack_require__(31);
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(admin_routes_1.adminRoutes),
            admin_public_module_1.AdminPublicModule,
            admin_internal_module_1.AdminInternalModule
        ],
        declarations: [
            navbar_component_1.NavBarComponent,
            admin_internal_component_1.AdminInternalComponent
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(61);
var router_1 = __webpack_require__(2);
var admin_internal_routes_1 = __webpack_require__(12);
var index_1 = __webpack_require__(30);
var index_2 = __webpack_require__(29);
var AdminInternalModule = (function () {
    function AdminInternalModule() {
    }
    return AdminInternalModule;
}());
AdminInternalModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(admin_internal_routes_1.adminInternalRoutes),
            common_1.CommonModule
        ],
        declarations: [
            index_1.UserComponent,
            index_2.ProductComponent
        ],
        providers: [
            index_1.UserService,
            index_1.UsersResolver,
            index_2.ProductService,
            index_2.ProductsResolver
        ]
    })
], AdminInternalModule);
exports.AdminInternalModule = AdminInternalModule;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        template: __webpack_require__(41)
    })
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(4));
__export(__webpack_require__(5));
__export(__webpack_require__(6));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(18);
var admin_public_routes_1 = __webpack_require__(13);
var login_component_1 = __webpack_require__(14);
var AdminPublicModule = (function () {
    function AdminPublicModule() {
    }
    return AdminPublicModule;
}());
AdminPublicModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild(admin_public_routes_1.adminPublicRoutes)
        ],
        declarations: [
            login_component_1.AdminLoginComponent
        ],
        providers: []
    })
], AdminPublicModule);
exports.AdminPublicModule = AdminPublicModule;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var ApplicationComponent = (function () {
    function ApplicationComponent(route) {
        this.route = route;
        this.link = !route;
    }
    return ApplicationComponent;
}());
ApplicationComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "<router-outlet></router-outlet>",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ApplicationComponent);
exports.ApplicationComponent = ApplicationComponent;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var client_routes_1 = __webpack_require__(15);
var client_public_module_1 = __webpack_require__(36);
var client_internal_module_1 = __webpack_require__(34);
var ClientModule = (function () {
    function ClientModule() {
    }
    return ClientModule;
}());
ClientModule = __decorate([
    core_1.NgModule({
        imports: [
            client_public_module_1.ClientPublicModule,
            client_internal_module_1.ClientInternalModule,
            router_1.RouterModule.forChild(client_routes_1.clientRoutes),
        ],
        declarations: []
    })
], ClientModule);
exports.ClientModule = ClientModule;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ClientInternalModule = (function () {
    function ClientInternalModule() {
    }
    return ClientInternalModule;
}());
ClientInternalModule = __decorate([
    core_1.NgModule({
        providers: [],
        imports: [],
        declarations: []
    })
], ClientInternalModule);
exports.ClientInternalModule = ClientInternalModule;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var users_component_1 = __webpack_require__(8);
var users_resolver_1 = __webpack_require__(7);
var products_component_1 = __webpack_require__(5);
var products_resolver_1 = __webpack_require__(4);
exports.clientInternalRoutes = [
    { path: 'users', component: users_component_1.UserComponent, resolve: { users: users_resolver_1.UsersResolver } },
    { path: 'products', component: products_component_1.ProductComponent, resolve: { products: products_resolver_1.ProductsResolver } },
];


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(18);
var client_public_routes_1 = __webpack_require__(16);
var login_component_1 = __webpack_require__(17);
var ClientPublicModule = (function () {
    function ClientPublicModule() {
    }
    return ClientPublicModule;
}());
ClientPublicModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(client_public_routes_1.clientPublicRoutes),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            login_component_1.ClientLoginComponent
        ],
        providers: [],
        bootstrap: []
    })
], ClientPublicModule);
exports.ClientPublicModule = ClientPublicModule;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(22);
var rootElemTagName = 'app';
var platform_browser_dynamic_1 = __webpack_require__(21);
var application_module_1 = __webpack_require__(20);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(application_module_1.AppModule);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var client_routes_1 = __webpack_require__(15);
var admin_routes_1 = __webpack_require__(10);
exports.appRoutes = [
    { path: 'client', children: client_routes_1.clientRoutes },
    { path: 'admin', children: admin_routes_1.adminRoutes },
];


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(49);
__webpack_require__(51);
__webpack_require__(50);
__webpack_require__(52);


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n    <nav-bar></nav-bar>\r\n    <div class=\"container\">\r\n        <div class=\"panel\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default \">\r\n    <div class=\"container\">\r\n\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n                aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"/img/logo.png\" alt=\"logo\"/></a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\" ><a [routerLink]=\"['users']\">Users <span class=\"sr-only\" >(current)</span></a></li>\r\n                <li routerLinkActive=\"active\" ><a [routerLink]=\"['products']\">Products</a><span class=\"sr-only\">(current)</span></li>\r\n                <!--<li><a href=\"#\">Clients</a></li>\r\n                <li><a href=\"#\">Orders</a></li>\r\n                <li><a href=\"#\">Statistics</a></li>\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Action</a></li>\r\n                        <li><a href=\"#\">Another action</a></li>\r\n                        <li><a href=\"#\">Something else here</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a href=\"#\">One more separated link</a></li>\r\n                    </ul>\r\n                </li>-->\r\n            </ul>\r\n            <!--<form class=\"navbar-form navbar-left\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n            </form>-->\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">vilmantas@mediapark.com <span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Profile</a></li>\r\n                        <li><a href=\"#\">Change password</a></li>\r\n                        <li><a href=\"#\">Language</a></li>\r\n                        <li role=\"separator\" class=\"divider\"></li>\r\n                        <li><a href=\"#\">Log out</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</nav>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-heading\">\r\n    <h4> Products </h4>\r\n</div>\r\n<div class=\"panel-body\">\r\n\r\n    <table class=\"table table-hover table-condensed table-striped\">\r\n        <thead class=\"\">\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Price</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let product of products\">\r\n                <td>{{product?.id}}</td>\r\n                <td>{{product?.name}}</td>\r\n                <td>{{product?.price}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-heading\">\r\n    <h4> Users </h4>\r\n</div>\r\n<div class=\"panel-body\">\r\n    <table class=\"table table-hover table-condensed table-striped table-bordered\">\r\n        <thead class=\"\">\r\n            <tr>\r\n                <th>Id</th>\r\n                <th>Name</th>\r\n                <th>Surname</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let user of users\">\r\n                <td>{{user?.id}}</td>\r\n                <td>{{user?.name}}</td>\r\n                <td>{{user?.surname}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-panel container\">\r\n    <div class=\"col-md-4 col-md-push-4\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <span>\r\n                    Login Admin\r\n                </span>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form (ngSubmit)=\"login(loginForm.value)\" #loginForm=\"ngForm\" class=\"form\">\r\n                    <div class=\"form-group\">\r\n                        <input (ngModel)=\"username\" name=\"username\" placeholder=\"Username\" type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input (ngModel)=\"password\" name=\"password\" placeholder=\"Password\" type=\"password\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"center-block centered text-center\">\r\n                        <input type=\"submit\" class=\"btn btn-success btn-default\" value=\"Login\" />\r\n                        <input type=\"button\" class=\"btn btn-primary btn-default\" value=\"Register\" />\r\n                    </div>\r\n\r\n                    <hr>\r\n                    <div class=\"text-center\">\r\n                        <a class=\"small\" [routerLink]=\"['/reset-password']\">Forgot password? Click here to reset.</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-panel container\">\r\n    <div class=\"col-md-4 col-md-push-4\">\r\n        <div class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n                <span>\r\n                    Login Client\r\n                </span>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <form (ngSubmit)=\"login(loginForm.value)\" #loginForm=\"ngForm\" class=\"form\">\r\n                    <div class=\"form-group\">\r\n                        <input (ngModel)=\"username\" name=\"username\" placeholder=\"Username\" type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input (ngModel)=\"password\" name=\"password\" placeholder=\"Password\" type=\"password\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"center-block centered text-center\">\r\n                        <input type=\"submit\" class=\"btn btn-success btn-default\" value=\"Login\" />\r\n                        <input type=\"button\" class=\"btn btn-primary btn-default\" value=\"Register\" />\r\n                    </div>\r\n\r\n                    <hr>\r\n                    <div class=\"text-center\">\r\n                        <a class=\"small\" [routerLink]=\"['/reset-password']\">Forgot password? Click here to reset.</a>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var of_1 = __webpack_require__(62);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var throw_1 = __webpack_require__(54);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var catch_1 = __webpack_require__(63);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var do_1 = __webpack_require__(55);
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var filter_1 = __webpack_require__(64);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var map_1 = __webpack_require__(58);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(3);
var toPromise_1 = __webpack_require__(56);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(3);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = (function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(Observable_1.Observable));
exports.ErrorObservable = ErrorObservable;
//# sourceMappingURL=ErrorObservable.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ErrorObservable_1 = __webpack_require__(53);
exports._throw = ErrorObservable_1.ErrorObservable.create;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(57);
/* tslint:disable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
}
exports._do = _do;
var DoOperator = (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DoSubscriber = (function (_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
        _super.call(this, destination);
        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
        safeSubscriber.syncErrorThrowable = true;
        this.add(safeSubscriber);
        this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function (value) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.next(value);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.next(value);
        }
    };
    DoSubscriber.prototype._error = function (err) {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.error(err);
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.error(err);
        }
    };
    DoSubscriber.prototype._complete = function () {
        var safeSubscriber = this.safeSubscriber;
        safeSubscriber.complete();
        if (safeSubscriber.syncErrorThrown) {
            this.destination.error(safeSubscriber.syncErrorValue);
        }
        else {
            this.destination.complete();
        }
    };
    return DoSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=do.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(59);
/* tslint:disable:max-line-length */
/**
 * @param PromiseCtor
 * @return {Promise<T>}
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(2);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(26);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(4);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(5);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(7);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(81);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(82);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(86);

/***/ })
/******/ ]);
//# sourceMappingURL=main-client.js.map