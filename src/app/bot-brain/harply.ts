import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chatmessage';

@Injectable()
export class Harply {

    public thinkBasedOn(inputMessage: string) {

        if (inputMessage === 'meme-me') {
            let thought = this.getMeme();
            return thought;
        }
        return null;
    }

    private getMeme(): ChatMessage {
        let botResponse = new ChatMessage();

        botResponse.isBot = true;
        botResponse.hasImg = true;
        botResponse.content = 'meme:';
        botResponse.imgLink = 'mockimg.jpg';

        return botResponse;
    }
}