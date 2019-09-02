module.exports.config = {
    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    cucumberOpts: {
        require: ['testing/steps/*.steps.js'],
        strict: true
    },
    specs: ['testing/*.feature'],
    capabilities: {
        browserName: 'chrome',
    }
};