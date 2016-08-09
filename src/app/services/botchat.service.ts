import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { ChatMessage } from '../models/chatmessage';
import { ConvoService } from '../services/convo.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class BotChatService {

    private botInputSource = new Subject<ChatMessage>();
    private apiKey = 'apiKey=h9xVOTFuIPU8B8iw';
    private botID = '&chatBotID=63906';
    private externalID = '&externalID=harplyApp';
    private botApiBaseUrl = 'http://www.personalityforge.com/api/chat/?';
    public botSpoke$ = this.botInputSource.asObservable();

    constructor(private convoService: ConvoService, private http: Http) {
        convoService.userSpoke$.subscribe(
            message => {
                this.whenUserSpeaks(message);
                console.log('got some')
            });
    }

    private whenUserSpeaks(chatMessage: ChatMessage): void {
        this.http.get(this.botApiBaseUrl + this.apiKey + this.botID + '&message=' + chatMessage.content + this.externalID)
            .subscribe(response => this.extractData(response));
    }
    private extractData(res: Response) {
        let body = res.json();
        // console.log('Message from bot: '+body);
        return body.data || {};
    }

    announceNewBotMessage(message: ChatMessage) {
        this.botInputSource.next(message);
        // console.log('user spoke event from service' + message.content);
    }
}
