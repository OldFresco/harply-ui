import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { ChatMessage } from '../models/chatmessage';

@Injectable()
export class ConvoService {

    private userInputSource = new Subject<ChatMessage>();
    public userSpoke$ = this.userInputSource.asObservable();

    constructor() {
    }

    announceNewMessage(message: ChatMessage) {
    this.userInputSource.next(message);
    //console.log('user spoke event from service' + message.content);
  }
}
