import { Component, Output, EventEmitter } from '@angular/core';
import { ConvoService } from '../services/convo.service';

@Component({
  moduleId: module.id,
  selector: 'convo-input',
  templateUrl: './convoinput.template.html',
  outputs: ['userSpokeEvent'],
  providers: [ConvoService]
})

export class ConvoInputComponent {

  public userMessage: string;
  public userSpokeEvent = new EventEmitter();

  constructor(private convoService: ConvoService) {
    this.convoService.userInput = "How can I help?";
  }

  userSays(maininput: HTMLInputElement) {
    this.userMessage = maininput.value;
    this.userSpokeEvent.emit({ value: this.userMessage });
    this.convoService.userInput = this.userSpokeEvent.subscribe((data) => this.userMessage = this.convoService.userInput);
    console.log(maininput.value);
    console.log(this.convoService.userInput);
    maininput.value = null;
  }
}
