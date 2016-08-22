"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var nocontent_component_1 = require('./errors/nocontent.component');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var config_service_1 = require('../app/services/config.service');
var convo_service_1 = require('./services/convo.service');
var harply_1 = require('./bot-brain/harply');
var common_1 = require('@angular/common');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                nocontent_component_1.NoContentComponent
            ],
            providers: [
                config_service_1.Config,
                harply_1.Harply,
                convo_service_1.ConvoService,
                app_routes_1.APP_ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [
                app_component_1.AppComponent,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map