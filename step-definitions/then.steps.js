const { Then } = require('cucumber');
const chai = require('chai');
const expect = chai.expect;
const homepage = require('../page-objects/homepage.page');
const computer = require('../page-objects/addNewComputer.page');

    Then(/^I enter the search term "([^"]*)?"$/, search => {
        homepage.searchBox.setValue(search);
    });

    Then(/^I enter the computer name "([^"]*)?"$/, name => {
        computer.computerName.setValue(name);
    });

    Then(/^I enter the introduce date "([^"]*)?"$/, date => {
        computer.introducedDate.setValue(date);
    });

    Then(/^I enter the discontinued date "([^"]*)?"$/, date => {
        computer.discontinuedDate.setValue(date);
    });

    Then(/^I select a random company$/, () => {
        computer.selectRandomCompany();
    });

    Then(/^The computer is added to the database$/, () => {
        expect(homepage.alertMessage.isDisplayed()).to.be.true;
    });

    Then(/^The search results containing "([^"]*)?" are displayed$/, results => {
        let numberOfComputers = homepage.allRecordsReturned.length;

        for(let i = 0; i < numberOfComputers; i++){
            expect(homepage.allRecordsReturned[i].getText().toLowerCase()).to.contains(results);
        }

        expect(homepage.searchResultsText.isDisplayed()).to.be.true;
        expect(homepage.searchResultsText.getText()).to.contains(numberOfComputers);
    });



