
exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    
    // port 4444 for local - will be selected automatically
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // port 4445 for remote
    //seleniumAddress: 'http://localhost:4445/wd/hub',
    
    specs: ['test/spec/*.js'],
    
     // multiCapabilities: [{
        // browserName: 'firefox',
        // 'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'unknown-jobnumber',
        // 'build': process.env.TRAVIS_BUILD_NUMBER || 'unknown-build'
     // }, {
        // browserName: 'chrome',
        // 'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'unknown-jobnumber',
        // 'build': process.env.TRAVIS_BUILD_NUMBER || 'unknown-build'
     // }],
     capabilities: {
        browserName: (process.env._BROWSER || process.env.BROWSER || 'chrome').replace(/_/g,' '),
        //browserName: (process.env._BROWSER || process.env.BROWSER || 'firefox').replace(/_/g,' '),
        version: process.env._VERSION || process.env.VERSION || '*',
        platform: (process.env._PLATFORM || process.env.PLATFORM || 'Linux').replace(/_/g,' '),
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'unknown-jobnumber',
        'build': process.env.TRAVIS_BUILD_NUMBER || 'unknown-build'
     },
     
    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://localhost:3000',
     
    // testing framework, jasmine is the default
    framework: 'jasmine',
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }

};