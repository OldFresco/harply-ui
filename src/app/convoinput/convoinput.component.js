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
var convo_service_1 = require('../services/convo.service');
var ConvoInputComponent = (function () {
    function ConvoInputComponent(convoService) {
        this.convoService = convoService;
    }
    ConvoInputComponent.prototype.userSays = function (maininput) {
        this.convoService.announceUserSpoke(maininput.value);
        maininput.value = null;
    };
    ConvoInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'convo-input',
            templateUrl: './convoinput.template.html',
        }), 
        __metadata('design:paramtypes', [convo_service_1.ConvoService])
    ], ConvoInputComponent);
    return ConvoInputComponent;
}());
exports.ConvoInputComponent = ConvoInputComponent;
//# sourceMappingURL=convoinput.component.js.map