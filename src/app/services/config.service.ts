import { Injectable } from '@angular/core';

@Injectable()
export class Config {

    private pf_externalID = '&externalID=harplyApp';
    private pf_apiKey = 'apiKey=h9xVOTFuIPU8B8iw';
    private pf_botID = '&chatBotID=63906';
    private pf_botApiBaseUri = 'http://www.personalityforge.com/api/chat/?';
    private mockResponseUri = 'assets/mock-bot-response.json';
    private chatSessionId: number;
    public currentEnv = window.location.hostname;

    constructor() {
        this.chatSessionId = Math.round((Math.random() * 1000) * 100);
    }

    public get(value) {
        let environment: string;
        let data = {};

        environment = this.currentEnv;

        switch (environment) {
            case 'localhost':
                data = {
                    mockBotResponseUri: this.mockResponseUri,
                    botBaseUri: this.mockResponseUri,
                    botExternalId: this.pf_externalID
                };
                break;
            case 'harplybot.azurewebsites.net':
                data = {
                    mockBotResponseUri: this.mockResponseUri,
                    botBaseUri: this.mockResponseUri,
                    botExternalId: this.pf_externalID
                };
                break;
            case 'harplybot.me':
                data = {
                    mockBotResponseUri: this.mockResponseUri,
                    botBaseUri: this.pf_botApiBaseUri + this.pf_apiKey + this.pf_botID,
                    botExternalId: this.pf_externalID
                };
                break;

            default:
                data = {
                    mockBotResponseUri: this.mockResponseUri,
                    botBaseUri: this.mockResponseUri,
                    botExternalId: this.pf_externalID
                };
        }

        return data[value];
    }

    public getSmalltalkResponseEndpoint(message) {
        let environment: string;
        let data = {};

        environment = this.currentEnv;

        switch (environment) {
            case 'localhost':
                data = {
                    botUri: this.mockResponseUri,
                };
                break;
            case 'harplybot.me':
                data = {
                    botUri: this.pf_botApiBaseUri + this.pf_apiKey + this.pf_botID + '&message=' + message + this.pf_externalID + this.chatSessionId
                };
                break;
            case 'harplybot.azurewebsites.net':
                data = {
                    botUri: this.mockResponseUri,
                };
                break;

            default:
                data = {
                    botUri: this.mockResponseUri,
                };
        }

        return data['botUri'];
    }
}