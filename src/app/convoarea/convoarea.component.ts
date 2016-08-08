import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
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
    public userInputs: string[];
    public botResponse: string;

    constructor(private convoService: ConvoService) {
        this.botResponse = 'Harply: ' + this.convoService.defaultMessage;
        this.userInputs = [];

        convoService.userSpoke$.subscribe(
            message => {
                this.whenUserSpeaks(message);
            });
    }

    private whenUserSpeaks(message: string): void {
        this.userInputs.push('You: ' + message);
        this.userHasSpoken = true;
        console.log('event recieved');

        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }
}
