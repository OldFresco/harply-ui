import { Component, Output, EventEmitter } from '@angular/core';
import { ConvoService } from '../services/convo.service';
import { ChatMessage } from '../models/chatmessage';

@Component({
  moduleId: module.id,
  selector: 'convo-input',
  templateUrl: './convoinput.template.html',
})

export class ConvoInputComponent {

  public message: ChatMessage;

  constructor(private convoService: ConvoService) {
    let message = new ChatMessage();
    message.content = '';
    message.isBot = false;

    this.message = message;
  }

  userSays(maininput: HTMLInputElement) {
    this.message.content = maininput.value;
    this.convoService.announceNewUserMessage(this.message);
    //console.log('Start: '+ this.message.content);
    maininput.value = null;
  }
}
