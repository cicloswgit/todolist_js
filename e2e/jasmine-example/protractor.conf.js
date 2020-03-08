'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
module.exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
  },
  specs: ['specs/*.spec.js'],
  baseUrl: 'https://angularjs.org',
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }
};