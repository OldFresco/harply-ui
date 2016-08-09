import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ConvoService } from './services/convo.service';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

enableProdMode();
bootstrap(AppComponent, [ConvoService, HTTP_PROVIDERS]);
