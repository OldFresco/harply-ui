describe('toBeTruthy', function () {
    it('passes if subject is true', function () {
        expect(true).toBeTruthy();
        expect(false).not.toBeTruthy();
    });
})