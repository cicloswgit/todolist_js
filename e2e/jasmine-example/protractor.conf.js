'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
module.exports.config = {
  directConnect: true,
  multiCapabilities: [
    {'browserName': 'chrome'},
    {'browserName': 'firefox'},
  ],
  framework: 'jasmine',
  specs: ['specs/*.spec.js'],
  baseUrl: 'https://angularjs.org',
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};