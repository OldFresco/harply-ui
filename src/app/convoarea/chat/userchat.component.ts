import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'userchat',
    inputs: ['userInput'],
    templateUrl: './userchat.template.html'
})

export class UserChatComponent {

    public userInput: string;

    constructor() {
    }
}
