const findElement = require('../helpers/findElement.js');
const findElements = require('../helpers/findElements.js');

const elements = {
    button: '[type=submit]',
    searchBox: '#searchbox',
    addNewComputerButton: '#add',
    alertMessage: '.alert-message.warning',
    searchResultsText: 'section#main > h1',
    recordsReturned: 'tbody > tr'
};

class Homepage {
    get buttons(){
        return findElements(elements.button);
    }

    get addNewComputerButton(){
        return findElement(elements.addNewComputerButton);
    }

    get searchBox(){
        return findElement(elements.searchBox);
    }

    get alertMessage(){
        return findElement(elements.alertMessage);
    }

    get searchResultsText(){
        return findElement(elements.searchResultsText);
    }

    get allRecordsReturned() {
        return findElements(elements.recordsReturned);
    }

    findButton(buttonName){
        for(let i = 0; i < this.buttons.length; i++){
            if(this.buttons[i].getAttribute('value') === buttonName){
                this.buttons[i].click();
            }
        }
    }
}
module.exports = new Homepage();
