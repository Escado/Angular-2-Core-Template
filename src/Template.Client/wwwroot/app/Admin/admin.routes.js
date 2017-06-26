"use strict";
var admin_internal_component_1 = require("./internal/admin.internal.component");
var admin_public_component_1 = require("./public/admin.public.component");
exports.adminRoutes = [
    { path: 'internal', component: admin_internal_component_1.AdminInternalComponent, loadChildren: 'app/admin/internal/admin.internal.module#AdminInternalModule' },
    { path: '', component: admin_public_component_1.AdminpublicComponent, loadChildren: 'app/admin/public/admin.public.module#AdminPublicModule' }
];
//# sourceMappingURL=admin.routes.js.map