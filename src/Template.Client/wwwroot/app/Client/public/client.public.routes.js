"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./login/login.component");
exports.clientPublicRoutes = [
    { path: '', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=client.public.routes.js.map