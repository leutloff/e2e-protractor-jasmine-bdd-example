
exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    specs: ['test/spec/*.js'],
    
     multiCapabilities: [{
        browserName: 'firefox',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'unknown-jobnumber',
        'build': process.env.TRAVIS_BUILD_NUMBER || 'unknown-build'
     }, {
        browserName: 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'unknown-jobnumber',
        'build': process.env.TRAVIS_BUILD_NUMBER || 'unknown-build'
     }],
    
    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://localhost:3000',
     
    // testing framework, jasmine is the default
    framework: 'jasmine',
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }

};