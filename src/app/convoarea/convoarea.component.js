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
var botchat_component_1 = require('./chat/botchat.component');
var userchat_component_1 = require('./chat/userchat.component');
var convo_service_1 = require('../services/convo.service');
var ConvoAreaComponent = (function () {
    function ConvoAreaComponent(convoService) {
        var _this = this;
        this.convoService = convoService;
        this.userInput = "You: ";
        this.botResponse = "Harply: " + this.convoService.defaultMessage;
        convoService.userSpoke$.subscribe(function (message) {
            _this.whenUserSpeaks(message);
        });
    }
    ConvoAreaComponent.prototype.whenUserSpeaks = function (message) {
        this.userInput = "You: " + message;
        console.log("event recieved");
    };
    ConvoAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'convoarea',
            templateUrl: './convoarea.template.html',
            inputs: ['userInput'],
            directives: [botchat_component_1.BotChatComponent, userchat_component_1.UserChatComponent]
        }), 
        __metadata('design:paramtypes', [convo_service_1.ConvoService])
    ], ConvoAreaComponent);
    return ConvoAreaComponent;
}());
exports.ConvoAreaComponent = ConvoAreaComponent;
//# sourceMappingURL=convoarea.component.js.map