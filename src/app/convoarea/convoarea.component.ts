import { Component, Output } from '@angular/core';
import { ConvoService } from '../services/convo.service';
import { Harply } from '../bot-brain/harply';
import { ChatMessage } from '../models/chatmessage';
import { Observable } from 'rxjs/Observable';
import { BotChatComponent } from './chat/botchat.component';
import { UserChatComponent } from './chat/userchat.component';
import { DynamicChatComponent } from './chat/dynamicchat.component';
import { Http, Response } from '@angular/http';

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

    constructor(private convoService: ConvoService, private harply: Harply) {
        this.messages = [];

        convoService.userSpoke$.subscribe(
            message => {
                this.whenSomeoneSpeaks(message);
            });

        convoService.botSpoke$.subscribe(
            message => {
                this.whenSomeoneSpeaks(message);
            });
    }

    private whenSomeoneSpeaks(chatMessage: ChatMessage): void {
        let chatMessageCopy = new ChatMessage();

        chatMessageCopy.content = chatMessage.content;
        chatMessageCopy.isBot = chatMessage.isBot;
        chatMessageCopy.hasImg = chatMessage.hasImg;
        chatMessageCopy.imgLink = chatMessage.imgLink;

        this.messages.push(chatMessageCopy);
        this.latestMessage = chatMessageCopy;

        $('html, body').animate({ scrollTop: $(document).height() }, 1000);
    }
}
