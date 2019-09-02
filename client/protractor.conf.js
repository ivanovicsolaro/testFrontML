module.exports.config = {
    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    cucumberOpts: {
        require: ['pruebas-funcionales/steps/*.steps.js'],
        strict: true
    },
    specs: ['pruebas-funcionales/*.feature'],
    capabilities: {
        browserName: 'chrome',
    }
};