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
var botchat_component_1 = require('./chat/botchat.component');
var userchat_component_1 = require('./chat/userchat.component');
var dynamicchat_component_1 = require('./chat/dynamicchat.component');
var ConvoAreaComponent = (function () {
    function ConvoAreaComponent(convoService) {
        var _this = this;
        this.convoService = convoService;
        this.defaultBotResponse = 'Hi! How can I help?';
        this.messages = [];
        convoService.userSpoke$.subscribe(function (message) {
            _this.whenSomeoneSpeaks(message);
        });
        convoService.botSpoke$.subscribe(function (message) {
            _this.whenSomeoneSpeaks(message);
        });
    }
    ConvoAreaComponent.prototype.whenSomeoneSpeaks = function (chatMessage) {
        var chatMessageCopy = new chatmessage_1.ChatMessage();
        chatMessageCopy.content = chatMessage.content;
        chatMessageCopy.isBot = chatMessage.isBot;
        this.messages.push(chatMessageCopy);
        this.latestMessage = chatMessageCopy;
        $('html, body').animate({ scrollTop: $(document).height() }, 1000);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', chatmessage_1.ChatMessage)
    ], ConvoAreaComponent.prototype, "latestMessage", void 0);
    ConvoAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'convoarea',
            templateUrl: './convoarea.template.html',
            directives: [botchat_component_1.BotChatComponent, userchat_component_1.UserChatComponent, dynamicchat_component_1.DynamicChatComponent]
        }), 
        __metadata('design:paramtypes', [convo_service_1.ConvoService])
    ], ConvoAreaComponent);
    return ConvoAreaComponent;
}());
exports.ConvoAreaComponent = ConvoAreaComponent;
//# sourceMappingURL=convoarea.component.js.map