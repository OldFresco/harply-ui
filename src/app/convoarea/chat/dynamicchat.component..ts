import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../models/chatmessage';

@Component({
    moduleId: module.id,
    selector: 'dynamicchat',
    templateUrl: './dynamicchat.template.html'
})

export class DynamicChatComponent {

    @Input('message')
    public message = new ChatMessage();
    public isBot: boolean = false; 

    constructor() {
        this.isBot = this.message.isBot;
        console.log(this.isBot);
    }   
}
