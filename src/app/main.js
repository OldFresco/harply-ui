"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var convo_service_1 = require('./services/convo.service');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [convo_service_1.ConvoService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map