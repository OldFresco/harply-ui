import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../models/chatmessage';

@Component({
    moduleId: module.id,
    selector: 'userchat',
    templateUrl: './userchat.template.html'
})

export class UserChatComponent {

    @Input() message: ChatMessage;
    public isBot: boolean = false; 

    constructor() {
    }

    
}
