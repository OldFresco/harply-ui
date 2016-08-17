import { FormsModule, REACTIVE_FORM_DIRECTIVES, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { ConvoInputComponent } from './convoinput/convoinput.component';
import { ConvoAreaComponent } from './convoarea/convoarea.component';
import { NoContentComponent } from './errors/nocontent.component';
import { HomeComponent } from './home/home.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      todoRouting
    ],
    declarations: [
      App,
      TodoCmp,
    ],
    providers: [
      TodoService,
    ],
    bootstrap: [
      App,
    ],
})
export class AppModule {}