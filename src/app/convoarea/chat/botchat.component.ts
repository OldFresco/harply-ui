import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botchat',
    inputs: ['botResponse'],
    templateUrl: './botchat.template.html'
})

export class BotChatComponent {

    public botResponse: string;

    constructor() {
    }
}
