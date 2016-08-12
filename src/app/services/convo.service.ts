import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { ChatMessage } from '../models/chatmessage';
import { Http, Response } from '@angular/http';


@Injectable()
export class ConvoService {

  private userInputSource = new Subject<ChatMessage>();
  private botInputSource = new Subject<ChatMessage>();
  public userSpoke$ = this.userInputSource.asObservable();
  public botSpoke$ = this.botInputSource.asObservable();
  private apiKey = 'apiKey=h9xVOTFuIPU8B8iw';
  private botID = '&chatBotID=63906';
  private externalID = '&externalID=harplyApp';
  private botApiBaseUrl = 'http://www.personalityforge.com/api/chat/?';
  private sessionID: number;

  constructor(private http: Http) {
    this.sessionID = Math.round((Math.random() * 1000) * 100);
  }

  announceNewUserMessage(message: ChatMessage) {
    this.userInputSource.next(message);
    this.http.get(this.botApiBaseUrl + this.apiKey + this.botID + '&message=' + message.content + this.externalID + this.sessionID)
      .subscribe(response => {
        let responseMessage = this.extractData(response);
        let botResponse = new ChatMessage();
        botResponse.content = this.convertName(responseMessage);
        botResponse.isBot = true;
        this.announceNewBotMessage(botResponse);
      }
      );
  }

  announceNewBotMessage(message: ChatMessage) {
    this.botInputSource.next(message);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.message.message || { 'message': 'Sorry... say that again?' };
  }

  private convertName(message: string) {
    let convertedName = 'Harply';

    let words = message.split(' ');

    words.forEach((element) => {
      if (element === 'CyberTy' || element === 'CyberTy.' || element === 'CyberTy?') {
        var index = words.indexOf(element);
        words[index] = convertedName;
      }
    })

    message = words.join(' ');
    console.log(message);
    return message;
  }
}
