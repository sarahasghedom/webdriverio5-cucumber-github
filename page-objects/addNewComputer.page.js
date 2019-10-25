const findElement = require('../helpers/findElement.js');

const elements = {
    computerName: '#name',
    introduced: '#introduced',
    discontinued: '#discontinued',
    company: '#company'
};

class Computers {
    get computerName(){
        return findElement(elements.computerName);
    }

    get introducedDate(){
        return findElement(elements.introduced);
    }

    get discontinuedDate(){
        return findElement(elements.discontinued);
    }

    get selectCompany(){
        return findElement(elements.company);
    }

    //This functions randomly selects a number between 1 and 43
    //It then uses the randomly selected number to select an option in the dropdown
    selectRandomCompany(){
        let index = Math.floor(Math.random() * 43);
        this.selectCompany.selectByIndex(index);
    }
}
module.exports = new Computers();
