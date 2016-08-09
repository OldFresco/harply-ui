import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
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
