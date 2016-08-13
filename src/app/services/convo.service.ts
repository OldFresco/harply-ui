import { Injectable, EventEmitter } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { ChatMessage } from '../models/chatmessage';
import { Http, Response } from '@angular/http';
import { Config } from './config.service';


@Injectable()
export class ConvoService {

  private userInputSource = new Subject<ChatMessage>();
  private botInputSource = new Subject<ChatMessage>();
  private botResponseEndpoint: string;
  private errorMessage: string;
  public userSpoke$ = this.userInputSource.asObservable();
  public botSpoke$ = this.botInputSource.asObservable();

  constructor(private http: Http, private config: Config) {
  }

  announceNewUserMessage(message: ChatMessage) {
    this.userInputSource.next(message);

    this.http.get(this.config.getBotResponseEndpoint(message.content))
      .subscribe(
      (response) => {
        this.handleResponse(response);
      },
      (errorMessage) => {
        this.errorMessage = errorMessage;
        console.log(this.errorMessage);
        this.announceNewBotMessage(this.returnErrorBotResponse());
      });
  }

  announceNewBotMessage(message: ChatMessage) {
    this.botInputSource.next(message);
  }

  private handleResponse(response) {
    let responseMessage = this.extractData(response);
    let botResponse = new ChatMessage();
    botResponse.content = this.convertName(responseMessage);
    botResponse.isBot = true;
    this.announceNewBotMessage(botResponse);
  }

  private returnErrorBotResponse(): ChatMessage {
    let botResponse = new ChatMessage();
    botResponse.content = 'Erm... Sorry but didn\'t quite catch that for whatever reason. :(';
    botResponse.isBot = true;

    return botResponse;
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
        let index = words.indexOf(element);
        words[index] = convertedName;
      }
    });

    message = words.join(' ');
    return message;
  }
}
