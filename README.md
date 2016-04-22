# Example for End-To-End tests with BDD approach using Protractor
[![Build Status](https://travis-ci.org/leutloff/e2e-protractor-jasmine-bdd-example.png?branch=master)](https://travis-ci.org/leutloff/e2e-protractor-jasmine-bdd-example)
[![Dependency Status](https://gemnasium.com/badges/github.com/leutloff/e2e-protractor-jasmine-bdd-example.svg)](https://gemnasium.com/github.com/leutloff/e2e-protractor-jasmine-bdd-example)

Example to perfom an End-To-End test with BDD approach using Protractor, Selenium, and Jasmine.

This project provides three complete simple examples written in JavaScript ([node.js](http://nodejs.org/)) 
using the Web Application Test Framework [Selenium](http://docs.seleniumhq.org/projects/webdriver/). 

The used test runner is [Protractor](https://angular.github.io/protractor/). 

When running the tests locally the prerequisites are node/npm and protractor:

    curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo npm install protractor -g

Then start the app, the webdriver and finally the real tests:

    npm start &
    npm run start-webdriver &
    npm test
