import { RouterConfig, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './errors/nocontent.component';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: '**', component: NoContentComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];