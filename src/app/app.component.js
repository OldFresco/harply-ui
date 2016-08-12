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
var core_1 = require('@angular/core');
var convoinput_component_1 = require('./convoinput/convoinput.component');
var convoarea_component_1 = require('./convoarea/convoarea.component');
var nocontent_component_1 = require('./errors/nocontent.component');
var home_component_1 = require('./home/home.component');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent() {
        window.onscroll = function () {
            $("convo-input").fadeTo(0.01, 0.5, function () {
            });
            ;
        };
        window.onkeydown = function () {
            $("convo-input").fadeTo(0.1, 1.0, function () {
            });
            ;
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'app',
            template: "<div><router-outlet></router-outlet></div>",
            directives: [convoinput_component_1.ConvoInputComponent, convoarea_component_1.ConvoAreaComponent, router_1.ROUTER_DIRECTIVES],
            precompile: [home_component_1.HomeComponent, nocontent_component_1.NoContentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map