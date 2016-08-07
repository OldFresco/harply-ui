import { Component, Output, EventEmitter } from '@angular/core';
import { ConvoService } from '../services/convo.service';

@Component({
  moduleId: module.id,
  selector: 'convo-input',
  templateUrl: './convoinput.template.html',
})

export class ConvoInputComponent {

  constructor(private convoService: ConvoService) {
  }

  userSays(maininput: HTMLInputElement) {
    this.convoService.announceUserSpoke(maininput.value);
    maininput.value = null;
  }
}
