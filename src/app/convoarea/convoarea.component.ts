import { Component } from '@angular/core';
import { BotChatComponent } from './chat/botchat.component';
import { UserChatComponent } from './chat/userchat.component';
import { ConvoService } from '../services/convo.service';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'convoarea',
    templateUrl: './convoarea.template.html',
    inputs: ['userInput'],
    directives: [BotChatComponent, UserChatComponent]
})

export class ConvoAreaComponent {

    private userHasSpoken: boolean = false;
    public userInputStream: Observable<string>;
    public userInput: string;
    public botResponse: string;

    constructor(private convoService: ConvoService) {
        this.userInput = 'You: ';
        this.botResponse = 'Harply: ' + this.convoService.defaultMessage;

        convoService.userSpoke$.subscribe(
            message => {
                this.whenUserSpeaks(message);
            });
    }

    private whenUserSpeaks(message: string): void {
        this.userInput = 'You: ' + message;
        this.userHasSpoken = true;
        console.log('event recieved');
    }
}
