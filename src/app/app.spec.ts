import {
    async,
    inject,
    TestComponentBuilder,
    addProviders
} from '@angular/core/testing';

import {
    provide
} from '@angular/core';

describe('toBeTruthy', function() {
    it('passes if subject is true', function() {
        expect(true).toBeTruthy();
        expect(false).not.toBeTruthy();
    });
})