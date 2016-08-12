import { Component, ViewEncapsulation } from '@angular/core';
import { ConvoInputComponent } from './convoinput/convoinput.component';
import { ConvoAreaComponent } from './convoarea/convoarea.component';
import { NoContentComponent } from './errors/nocontent.component';
import { HomeComponent } from './home/home.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  template: `<div><router-outlet></router-outlet></div>`,
  directives: [ConvoInputComponent, ConvoAreaComponent, ROUTER_DIRECTIVES],
  precompile: [HomeComponent, NoContentComponent]
})

export class AppComponent {

  constructor() {
    window.onscroll = () => {
      $('convo-input').fadeTo(0.01, 0.5, function () {
      });;
    }

    window.onkeydown = () => {
      $('convo-input').fadeTo(0.1, 1.0, function () {
      });;
    }
  }
}
