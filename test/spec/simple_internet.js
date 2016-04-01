/* global browser */
'use strict';

describe('Run a \'simple internet\' test using Protractor/Selenium.', function() {

    beforeEach(function() {
        // operate on non Angular JS site.
        browser.ignoreSynchronization = true;
    });

    it('Assert access a page on internet by checking the title.', function() {
        // driver is only required when accessing non Angular JS sites.
        browser.get('https://www.google.com');
        var title = browser.getTitle();
        console.log('Title was: ' + title);
        expect(title).toEqual('Google');
    });

});
