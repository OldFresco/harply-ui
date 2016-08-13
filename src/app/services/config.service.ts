import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Config {

    private pf_externalID = '&externalID=harplyApp';
    private pf_apiKey = 'apiKey=h9xVOTFuIPU8B8iw';
    private pf_botID = '&chatBotID=63906';
    private pf_botApiBaseUrl = 'http://www.personalityforge.com/api/chat/?';
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
    }

    public getBotResponseEndpoint(message) {
        let environment: string;
        let data = {};

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
    }
}