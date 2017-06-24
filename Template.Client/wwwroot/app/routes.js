"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _404_component_1 = require("./Public/Errors/404.component");
exports.appRoutes = [
    { path: '404', component: _404_component_1.Error404Component },
    { path: 'client', loadChildren: 'app/Client/client.module#ClientModule' },
    { path: 'admin', loadChildren: 'app/Admin/admin.module#AdminModule' },
    { path: '**', redirectTo: 'client' }
];
//# sourceMappingURL=routes.js.map