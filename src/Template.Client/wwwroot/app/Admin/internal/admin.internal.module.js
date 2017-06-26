"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_internal_routes_1 = require("./admin.internal.routes");
var products_component_1 = require("./products/products.component");
var AdminInternalModule = (function () {
    function AdminInternalModule() {
    }
    return AdminInternalModule;
}());
AdminInternalModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(admin_internal_routes_1.adminInternalRoutes)
        ],
        declarations: [
            products_component_1.ProductComponent
        ],
        providers: []
    })
], AdminInternalModule);
exports.AdminInternalModule = AdminInternalModule;
//# sourceMappingURL=admin.internal.module.js.map