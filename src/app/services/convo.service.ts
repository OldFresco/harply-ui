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

  constructor(private http: Http) {
  }

  announceNewUserMessage(message: ChatMessage) {
    this.userInputSource.next(message);
    // console.log('user spoke event from service' + message.content);
    this.http.get(this.botApiBaseUrl + this.apiKey + this.botID + '&message=' + message.content + this.externalID)
      .subscribe(response => {
        let responseMessage = this.extractData(response);
        let botResponse = new ChatMessage();
        botResponse.content = responseMessage;
        botResponse.isBot = true;
        this.announceNewBotMessage(botResponse);
      }
      );
    console.log('this happened');
  }

  announceNewBotMessage(message: ChatMessage) {
    this.botInputSource.next(message);
    // console.log('bot spoke event from service ' + message.content);
  }

  private extractData(response: Response) {
    console.log(response);
    let body = response.json();
    // console.log('Message from bot: ' + body.message.message);
    return body.message.message || { 'message': 'Sorry... say that again?' };
  }
}
