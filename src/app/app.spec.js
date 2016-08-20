"use strict";
var testing_1 = require('@angular/core/testing');
var app_component_1 = require('./app.component');
describe('toBeTruthy', function () {
    it('passes if subject is true', function () {
        expect(true).toBeTruthy();
        expect(false).not.toBeTruthy();
    });
});
it('should make our app Component', testing_1.async(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
    return tcb
        .createAsync(app_component_1.AppComponent)
        .then(function (fixture) {
        fixture.AppName = '';
    });
})));
//# sourceMappingURL=app.spec.js.map