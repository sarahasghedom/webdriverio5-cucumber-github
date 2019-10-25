Example project on how to setup webdriverio 5 with cucumber.

**Clone this project**
- git clone git@gitlab.com:sarahasghedom/webdriverio5-cucumber.git
- run npm install

_OR_ If you want to start from scratch

**Installing webdrivio & cucumber**
- Create a new folder and create a package.json file
  - mkdir webdriverio-test && cd webdriverio-test
  - npm init -y
  
- Install webdriverio
  - npm i --save-dev @wdio/cli
  
- Run the config file
  - run './node_modules/.bin/wdio config'
    - Where should your tests be launched? `local`
    - Where is your automation backend located? `On my local machine`
    - Which framework do you want to use? `cucumber`
    - Do you want to run WebdriverIO commands synchronous or asynchronous? `async`
    - Where are your feature files located? `./features/**/*.feature`
    - Where are your step definitions located? `./step-definitions/**/*.steps.js`
    - Which reporter do you want to use? `spec`
    - Do you want to add a service to your test setup? `selenium-standalone`
    - What is the base url? `http://computer-database.herokuapp.com/computers`