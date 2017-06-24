"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _404_component_1 = require("./Shared/Errors/404.component");
var navbar_component_1 = require("./Public/NavBar/navbar.component");
exports.appRoutes = [
    { path: '', component: navbar_component_1.NavBarComponent },
    { path: '404', component: _404_component_1.Error404Component },
    { path: 'client', loadChildren: 'app/Client/client.module#ClientModule' },
    { path: 'admin', loadChildren: 'app/Admin/admin.module#AdminModule' },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map