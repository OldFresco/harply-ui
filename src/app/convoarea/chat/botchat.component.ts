import { Component } from '@angular/core';

@Component({
    selector: 'botchat',
    inputs: ['message'],
    templateUrl: './botchat.template.html'
})

export class BotChatComponent {

    public message: string;
    public isBot: boolean = true;

    constructor() {
    }
}
