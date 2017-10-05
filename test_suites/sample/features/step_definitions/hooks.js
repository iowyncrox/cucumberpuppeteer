// features/step_definitions/hooks.js
const puppeteer = require('puppeteer');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After}) {
  After(function() {
    return this.browser.close();
  });
});