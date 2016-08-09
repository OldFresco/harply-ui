import { Component, Output } from '@angular/core';
import { ConvoService } from '../services/convo.service';
import { ChatMessage } from '../models/chatmessage';
import { Observable } from 'rxjs/Observable';
import { BotChatComponent } from './chat/botchat.component';
import { UserChatComponent } from './chat/userchat.component';
import { DynamicChatComponent } from './chat/dynamicchat.component.';

@Component({
    moduleId: module.id,
    selector: 'convoarea',
    templateUrl: './convoarea.template.html',
    directives: [BotChatComponent, UserChatComponent, DynamicChatComponent]
})

export class ConvoAreaComponent {

    public defaultBotResponse: string = 'Hi! How can I help?';
    public messages: ChatMessage[];
    @Output() latestMessage: ChatMessage;

    constructor(private convoService: ConvoService) {
        this.messages = [];

        convoService.userSpoke$.subscribe(
            message => {
                this.whenSomeoneSpeaks(message);
            });
    }

    private whenSomeoneSpeaks(chatMessage: ChatMessage): void {
        let chatMessageCopy = new ChatMessage();

        chatMessageCopy.content = chatMessage.content;
        chatMessageCopy.isBot = chatMessage.isBot;

        this.messages.push(chatMessageCopy);
        this.latestMessage = chatMessageCopy;
        // console.log(this.messages);
        // console.log('event recieved in convo area component' + this.latestMessage);

        $('html, body').animate({ scrollTop: $(document).height() }, 1000);
    }
}
