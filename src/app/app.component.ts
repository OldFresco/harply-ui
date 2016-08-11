import { Component, ViewEncapsulation } from '@angular/core';
import { ConvoInputComponent } from './convoinput/convoinput.component';
import { ConvoAreaComponent } from './convoarea/convoarea.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  template: `<convo-input class="convoinput"></convo-input>
  <convoarea class="convoarea"></convoarea>`,
  directives: [ConvoInputComponent, ConvoAreaComponent]
})

export class AppComponent {

  constructor() {
    window.onscroll = () => {
      console.log('fp');
      $("convo-input").fadeTo(0.01, 0.5, function () {
      });;
    }

    window.onkeydown = () => {
      console.log('fp');
      $("convo-input").fadeTo(0.1, 1.0, function () {
      });;
    }
  }
}
