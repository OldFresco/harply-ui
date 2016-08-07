import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ConvoService {

    private userInputSource = new Subject<string>();
    public userSpoke$ = this.userInputSource.asObservable();
    public defaultMessage: string

    constructor() {
        this.defaultMessage = "Hi! How can I help?";
    }

    announceUserSpoke(message: string) {
    this.userInputSource.next(message);
  }
}
