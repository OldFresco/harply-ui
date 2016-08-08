import { Component } from '@angular/core';
import { ConvoService } from '../services/convo.service';
import { ChatMessage } from '../models/chatmessage';
import { Observable } from 'rxjs/Observable';
import { BotChatComponent } from './chat/botchat.component';
import { UserChatComponent } from './chat/userchat.component';

@Component({
    moduleId: module.id,
    selector: 'convoarea',
    templateUrl: './convoarea.template.html',
    directives: [BotChatComponent, UserChatComponent]
})

export class ConvoAreaComponent {

    public defaultBotResponse: string = "Hi! How can I help?";
    public messages: string[];
    public latestMessage: string;

    constructor(private convoService: ConvoService) {
        this.messages = [];

        convoService.userSpoke$.subscribe(
            message => {
                this.whenSomeoneSpeaks(message.content);
            });
    }

    private whenSomeoneSpeaks(message: string): void {
        this.messages.push(message);
        this.latestMessage = message;
        console.log('event recieved in convo area component' + this.latestMessage);

        $('html, body').animate({ scrollTop: $(document).height() }, 1000);
    }
}
