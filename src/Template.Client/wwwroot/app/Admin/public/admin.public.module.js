"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var admin_public_routes_1 = require("./admin.public.routes");
var login_component_1 = require("./login/login.component");
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
            login_component_1.LoginComponent
        ],
        providers: []
    })
], AdminPublicModule);
exports.AdminPublicModule = AdminPublicModule;
//# sourceMappingURL=admin.public.module.js.map