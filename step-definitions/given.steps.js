const { Given } = require('cucumber');

Given(/^I navigate to the homepage$/, () => {
    browser.url('/computers');
});