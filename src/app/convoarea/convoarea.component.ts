import { Component } from '@angular/core';
import { BotChatComponent } from './chat/botchat.component';
import { UserChatComponent } from './chat/userchat.component';

@Component({
    moduleId: module.id,
    selector: 'convoarea',
    templateUrl: './convoarea.template.html',
    inputs: ['userInput'],
    directives: [BotChatComponent, UserChatComponent]
})

export class ConvoAreaComponent {

    public userInput: string;
    public botResponse: string;

    constructor() {
        this.userInput = "You: ";
        this.botResponse = "Harply: ";
    }
}
