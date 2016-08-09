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
var Subject_1 = require('rxjs/Subject');
var convo_service_1 = require('../services/convo.service');
var http_1 = require('@angular/http');
var BotChatService = (function () {
    function BotChatService(convoService, http) {
        var _this = this;
        this.convoService = convoService;
        this.http = http;
        this.botInputSource = new Subject_1.Subject();
        this.apiKey = 'apiKey=h9xVOTFuIPU8B8iw';
        this.botID = '&chatBotID=63906';
        this.externalID = '&externalID=harplyApp';
        this.botApiBaseUrl = 'http://www.personalityforge.com/api/chat/?';
        this.botSpoke$ = this.botInputSource.asObservable();
        convoService.userSpoke$.subscribe(function (message) {
            _this.whenUserSpeaks(message);
            console.log('got some');
        });
    }
    BotChatService.prototype.whenUserSpeaks = function (chatMessage) {
        var _this = this;
        this.http.get(this.botApiBaseUrl + this.apiKey + this.botID + '&message=' + chatMessage.content + this.externalID)
            .subscribe(function (response) { return _this.extractData(response); });
    };
    BotChatService.prototype.extractData = function (res) {
        var body = res.json();
        // console.log('Message from bot: '+body);
        return body.data || {};
    };
    BotChatService.prototype.announceNewBotMessage = function (message) {
        this.botInputSource.next(message);
        // console.log('user spoke event from service' + message.content);
    };
    BotChatService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [convo_service_1.ConvoService, http_1.Http])
    ], BotChatService);
    return BotChatService;
}());
exports.BotChatService = BotChatService;
//# sourceMappingURL=botchat.service.js.map