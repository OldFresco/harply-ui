import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chatmessage';
import { Http, Response } from '@angular/http';
import { Config } from '../services/config.service';
import { ConvoService } from '../services/convo.service';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class Harply {

    constructor(private http: Http, private config: Config, private convoService: ConvoService) {
        convoService.userSpoke$.subscribe(
            (userMessage) => {
                this.http.get(this.config.getSmalltalkResponseEndpoint(userMessage.content))
                    .subscribe(
                    (response) => {
                        this.makeSmalltalk(response);
                    }, (errorMessage) => {
                        console.log(errorMessage);
                        this.convoService.announceNewBotMessage(this.saySomethingWentWrong());
                    });
            });
    }

    //Abilities
    private getMeme(): ChatMessage {
        let botResponse = new ChatMessage();

        botResponse.isBot = true;
        botResponse.hasImg = true;
        botResponse.content = '';
        botResponse.imgLink = 'mockimg.jpg';

        return botResponse;
    }

    private saySomethingWentWrong(): ChatMessage {
        let botResponse = new ChatMessage();
        botResponse.content = 'Erm... Sorry but didn\'t quite catch that for whatever reason. :(';
        botResponse.isBot = true;

        return botResponse;
    }

    private makeSmalltalk(response) {
        let responseMessage = this.extractData(response);
        let botResponse = new ChatMessage();
        botResponse.content = this.convertName(responseMessage);
        botResponse.isBot = true;
        botResponse.hasImg = false;
        this.convoService.announceNewBotMessage(botResponse);
    }

    //Utilities
    private extractData(response: Response) {
        let body = response.json();
        return body.message.message || { 'message': 'Sorry... say that again?' };
    }

    private convertName(message: string) {
        let convertedName = 'Harply';

        let words = message.split(' ');

        words.forEach((element) => {
            if (element === 'CyberTy' || element === 'CyberTy.' || element === 'CyberTy?') {
                let index = words.indexOf(element);
                words[index] = convertedName;
            }
        });

        message = words.join(' ');
        return message;
    }
}