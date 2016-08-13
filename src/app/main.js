"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var convo_service_1 = require('./services/convo.service');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var config_service_1 = require('../app/services/config.service');
var common_1 = require('@angular/common');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [convo_service_1.ConvoService, config_service_1.Config, app_routes_1.APP_ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]);
//# sourceMappingURL=main.js.map