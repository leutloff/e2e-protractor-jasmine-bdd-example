/* global browser */
'use strict';

describe('Run web app \'page test\' using Protractor/Selenium.', function() {
    var backButton = element(by.id('back'));
    
    
    beforeEach(function() {
        // operate on non Angular JS site.
        browser.ignoreSynchronization = true;
        browser.get('/'); // baseUrl 'http://localhost:3000' is pretended
    });


    it('checks the title only', function() {
        var title = browser.getTitle();
        //console.log('Title was: ' + title);
        expect(title).toEqual('Library');
    });
    
    it('should be able to navigate between the pages', function() {
        var title = browser.getTitle();
        //console.log('Title was: ' + title);
        expect(title).toEqual('Library');

        browser.findElement(by.id('authors')).click();//.click('#authors').waitForExist('#back', 10000);
        title = browser.getTitle();
        //console.log('Title was: ' + title);
        expect(title).toEqual('Authors');
        var author = browser.findElement(by.id('author1')).getText();//'#author1');
        console.log('#author1: ' + author);
        expect(author).toMatch('Patrick Rothfuss'); //, 'assert that the author is Patrick');

        backButton.click(); //.waitForExist('#books', 1000);
        title = browser.getTitle();
        expect(title).toEqual('Library');

        browser.findElement(by.id('books')).click();// browser.click('#books').waitForExist('#back', 1000);
        title = browser.getTitle();
        //console.log('Title was: ' + title);
        expect(title).toEqual('Books');
        var book = browser.findElement(by.id('book1')).getText();//.getText('#book1');
        //console.log('#book1: ' + book);
        expect(book).toEqual( 'Wise Man\'s Fear');

        backButton.click();//'#back').waitForExist('#authors', 1000);
        title = browser.getTitle();
        //console.log('Title was: ' + title);
        expect(title).toEqual('Library');
    });

});
