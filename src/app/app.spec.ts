import {
    async,
    inject,
    TestComponentBuilder,
    addProviders
} from '@angular/core/testing';

import {
    provide
} from '@angular/core';

import { AppComponent } from './app.component';

describe('toBeTruthy', function () {
    it('passes if subject is true', function () {
        expect(true).toBeTruthy();
        expect(false).not.toBeTruthy();
    });
})

it('should make our app Component',
    async(inject([TestComponentBuilder], (tcb) => {
        return tcb
            .createAsync(AppComponent)
            .then((fixture) => {
                fixture.AppName = '';
            });
    })));