import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'userchat',
    inputs: ['message'],
    templateUrl: './userchat.template.html'
})

export class UserChatComponent {

    public message: string;

    constructor() {
    }
}
