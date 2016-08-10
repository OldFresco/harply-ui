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
var chatmessage_1 = require('../models/chatmessage');
var ConvoInputComponent = (function () {
    function ConvoInputComponent(convoService) {
        this.convoService = convoService;
        var message = new chatmessage_1.ChatMessage();
        message.content = '';
        message.isBot = false;
        this.message = message;
    }
    ConvoInputComponent.prototype.userSays = function (maininput) {
        this.message.content = maininput.value;
        this.convoService.announceNewUserMessage(this.message);
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