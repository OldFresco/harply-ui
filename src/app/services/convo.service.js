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
var chatmessage_1 = require('../models/chatmessage');
var http_1 = require('@angular/http');
var ConvoService = (function () {
    function ConvoService(http) {
        this.http = http;
        this.userInputSource = new Subject_1.Subject();
        this.botInputSource = new Subject_1.Subject();
        this.userSpoke$ = this.userInputSource.asObservable();
        this.botSpoke$ = this.botInputSource.asObservable();
        this.apiKey = 'apiKey=h9xVOTFuIPU8B8iw';
        this.botID = '&chatBotID=63906';
        this.externalID = '&externalID=harplyApp';
        this.botApiBaseUrl = 'http://www.personalityforge.com/api/chat/?';
        this.sessionID = Math.round((Math.random() * 1000) * 100);
    }
    ConvoService.prototype.announceNewUserMessage = function (message) {
        var _this = this;
        this.userInputSource.next(message);
        this.http.get(this.botApiBaseUrl + this.apiKey + this.botID + '&message=' + message.content + this.externalID + this.sessionID)
            .subscribe(function (response) {
            var responseMessage = _this.extractData(response);
            var botResponse = new chatmessage_1.ChatMessage();
            botResponse.content = _this.convertName(responseMessage);
            botResponse.isBot = true;
            _this.announceNewBotMessage(botResponse);
        });
    };
    ConvoService.prototype.announceNewBotMessage = function (message) {
        this.botInputSource.next(message);
    };
    ConvoService.prototype.extractData = function (response) {
        var body = response.json();
        return body.message.message || { 'message': 'Sorry... say that again?' };
    };
    ConvoService.prototype.convertName = function (message) {
        var convertedName = 'Harply';
        var words = message.split(' ');
        words.forEach(function (element) {
            if (element === 'CyberTy' || element === 'CyberTy.' || element === 'CyberTy?') {
                var index = words.indexOf(element);
                words[index] = convertedName;
            }
        });
        message = words.join(' ');
        return message;
    };
    ConvoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ConvoService);
    return ConvoService;
}());
exports.ConvoService = ConvoService;
//# sourceMappingURL=convo.service.js.map