"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var nocontent_component_1 = require('./errors/nocontent.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: nocontent_component_1.NoContentComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map