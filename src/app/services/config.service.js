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
var Config = (function () {
    function Config() {
        this.pf_externalID = '&externalID=harplyApp';
        this.pf_apiKey = 'apiKey=h9xVOTFuIPU8B8iw';
        this.pf_botID = '&chatBotID=63906';
        this.pf_botApiBaseUrl = 'http://www.personalityforge.com/api/chat/?';
        this.currentEnv = window.location.hostname;
        this.chatSessionId = Math.round((Math.random() * 1000) * 100);
    }
    Config.prototype.get = function (value) {
        var environment;
        var data = {};
        environment = this.currentEnv;
        switch (environment) {
            case 'localhost':
                data = {
                    mockBotResponseUri: 'assets/mock-bot-response.json',
                    botBaseUri: 'assets/mock-bot-response.json',
                    botExternalId: this.pf_externalID
                };
                break;
            case 'harplybot.me':
                data = {
                    mockBotResponseUri: 'assets/mock-bot-response.json',
                    botBaseUri: this.pf_botApiBaseUrl + this.pf_apiKey + this.pf_botID,
                    botExternalId: this.pf_externalID
                };
                break;
            default:
                data = {
                    mockBotResponseUri: 'assets/mock-bot-response.json',
                    botBaseUri: 'assets/mock-bot-response.json',
                    botExternalId: this.pf_externalID
                };
        }
        return data[value];
    };
    Config.prototype.getBotResponseEndpoint = function (message) {
        var environment;
        var data = {};
        environment = this.currentEnv;
        switch (environment) {
            case 'localhosta':
                data = {
                    botUri: 'assets/mock-bot-response.json'
                };
                break;
            case 'localhost':
                data = {
                    botUri: this.pf_botApiBaseUrl + this.pf_apiKey + this.pf_botID + '&message=' + message + this.pf_externalID + this.chatSessionId
                };
                break;
            default:
                data = {
                    botUri: 'assets/mock-bot-response.json'
                };
        }
        return data['botUri'];
    };
    Config = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Config);
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.service.js.map