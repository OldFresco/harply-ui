import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ConvoService } from './services/convo.service';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';

enableProdMode();
bootstrap(AppComponent, [ConvoService, APP_ROUTER_PROVIDERS, HTTP_PROVIDERS]);
