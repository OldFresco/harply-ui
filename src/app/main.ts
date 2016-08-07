import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ConvoService } from './services/convo.service';


bootstrap(AppComponent, [ConvoService]);
