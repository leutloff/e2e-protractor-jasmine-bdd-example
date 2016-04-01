/* global browser */
'use strict';

describe('Run a \'simple test\' using Protractor/Selenium.', function() {
    
    beforeEach(function() {
        // operate on non Angular JS site.
        browser.ignoreSynchronization = true;
    });

    it('Getting the home page', function() {
        //browser.get('http://localhost:3000');
        browser.get('/'); // baseUrl 'http://localhost:3000' is pretended
        var title = browser.getTitle();
        //console.log('Title was: ' + title);
        expect(title).toEqual('Library');
    });

});
