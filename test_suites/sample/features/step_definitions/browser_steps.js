// features/step_definitions/browser_steps.js
const puppeteer = require('puppeteer');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {
    Given('I am on the Cucumber.js GitHub repository', function (callback) {
        const page = this.browser.newPage();
        return page.goto('https://github.com/cucumber/cucumber-js/tree/master');
    });

    When('I click on {string}', function (string, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('I should see {string}', function (string, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
});