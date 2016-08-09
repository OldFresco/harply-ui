import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../../models/chatmessage';

@Component({
    moduleId: module.id,
    selector: 'dynamicchat',
    templateUrl: './dynamicchat.template.html'
})

export class DynamicChatComponent implements OnInit {

    @Input('message')
    public message = new ChatMessage();
    public isBot: boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.isBot = this.message.isBot;
        // console.log(this.isBot);
    }
}
