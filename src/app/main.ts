import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ConvoService } from './services/convo.service';
import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(AppComponent, [ConvoService]);
