import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  template: `
    <div class="text-center text-generic">
      <h1><u>404</u></h1> 
      <h3> Not sure how we ended up here... Go back to <a href="/"><mark class="chat-prefix-bot">harply?</mark></a></h3>
      <img src="assets/favicon.ico"> 
    </div>
  `
})
export class NoContentComponent {

}
