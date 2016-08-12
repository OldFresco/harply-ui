import { Component, ViewEncapsulation } from '@angular/core';
import { ConvoInputComponent } from '../convoinput/convoinput.component';
import { ConvoAreaComponent } from '../convoarea/convoarea.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'home',
  template: `<convo-input class="convoinput"></convo-input>
  <convoarea class="convoarea"></convoarea>`,
  directives: [ConvoInputComponent, ConvoAreaComponent, ROUTER_DIRECTIVES]
})

export class HomeComponent {

  constructor() {
    window.onscroll = () => {
      $("convo-input").fadeTo(0.01, 0.5, function () {
      });;
    }

    window.onkeydown = () => {
      $("convo-input").fadeTo(0.1, 1.0, function () {
      });;
    }
  }
}
