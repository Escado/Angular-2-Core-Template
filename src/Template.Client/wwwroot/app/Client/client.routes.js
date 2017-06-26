"use strict";
exports.clientRoutes = [
    { path: 'internal', loadChildren: 'app/client/internal/client.internal.module#ClientInternalModule' },
    { path: '', loadChildren: 'app/client/public/client.public.module#ClientPublicModule' },
];
//# sourceMappingURL=client.routes.js.map