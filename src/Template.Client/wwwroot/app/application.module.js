"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var _404_component_1 = require("./Shared/Errors/404.component");
var navbar_component_1 = require("./Public/NavBar/navbar.component");
var application_component_1 = require("./application.component");
var routes_1 = require("./routes");
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
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            application_component_1.ApplicationComponent,
            _404_component_1.Error404Component,
            navbar_component_1.NavBarComponent
        ],
        bootstrap: [
            application_component_1.ApplicationComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=application.module.js.map