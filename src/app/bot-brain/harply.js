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
var chatmessage_1 = require('../models/chatmessage');
var http_1 = require('@angular/http');
var config_service_1 = require('../services/config.service');
var convo_service_1 = require('../services/convo.service');
var Harply = (function () {
    function Harply(http, config, convoService) {
        var _this = this;
        this.http = http;
        this.config = config;
        this.convoService = convoService;
        convoService.userSpoke$.subscribe(function (userMessage) {
            _this.http.get(_this.config.getSmalltalkResponseEndpoint(userMessage.content))
                .subscribe(function (response) {
                _this.makeSmalltalk(response);
            }, function (errorMessage) {
                console.log(errorMessage);
                _this.convoService.announceNewBotMessage(_this.saySomethingWentWrong());
            });
        });
    }
    //Abilities
    Harply.prototype.getMeme = function () {
        var botResponse = new chatmessage_1.ChatMessage();
        botResponse.isBot = true;
        botResponse.hasImg = true;
        botResponse.content = '';
        botResponse.imgLink = 'mockimg.jpg';
        return botResponse;
    };
    Harply.prototype.saySomethingWentWrong = function () {
        var botResponse = new chatmessage_1.ChatMessage();
        botResponse.content = 'Erm... Sorry but didn\'t quite catch that for whatever reason. :(';
        botResponse.isBot = true;
        return botResponse;
    };
    Harply.prototype.makeSmalltalk = function (response) {
        var responseMessage = this.extractData(response);
        var botResponse = new chatmessage_1.ChatMessage();
        botResponse.content = this.convertName(responseMessage);
        botResponse.isBot = true;
        botResponse.hasImg = false;
        this.convoService.announceNewBotMessage(botResponse);
    };
    //Utilities
    Harply.prototype.extractData = function (response) {
        var body = response.json();
        return body.message.message || { 'message': 'Sorry... say that again?' };
    };
    Harply.prototype.convertName = function (message) {
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
    Harply = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.Config, convo_service_1.ConvoService])
    ], Harply);
    return Harply;
}());
exports.Harply = Harply;
//# sourceMappingURL=harply.js.map