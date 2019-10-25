const { When } = require('cucumber');
const chai = require('chai');
const expect = chai.expect;
const homepage = require('../page-objects/homepage.page');


When(/^I click on the button "([^"]*)?"$/, buttonName => {
    homepage.findButton(buttonName);
});

When(/^I click on the button to add a new computer$/, () => {
    homepage.addNewComputerButton.click();
});