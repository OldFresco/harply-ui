import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ConvoService } from './services/convo.service';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { Config } from '../app/services/config.service';
import { AppModule } from './app.module';
import {
    PlatformLocation,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy,
    APP_BASE_HREF}
from '@angular/common';

enableProdMode();
bootstrap(AppComponent, [ConvoService, Config, APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, { provide: LocationStrategy, useClass: HashLocationStrategy }]);
