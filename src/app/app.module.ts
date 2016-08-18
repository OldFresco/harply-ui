import { FormsModule, REACTIVE_FORM_DIRECTIVES, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './errors/nocontent.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { Config } from '../app/services/config.service';
import { ConvoService } from './services/convo.service';
import {
  PlatformLocation,
  Location,
  LocationStrategy,
  HashLocationStrategy,
  PathLocationStrategy,
  APP_BASE_HREF}
from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent
  ],
  providers: [
    Config,
    ConvoService,
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }