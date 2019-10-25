Feature: Add new computers to the database
  As a user
  I want to add new computers to the database

  Background: Navigate to homepage
    Given I navigate to the homepage

  Scenario: Add new computer to the database
    When I click on the button to add a new computer
    And I enter the computer name "Test computer"
    And I enter the introduce date "2019-10-19"
    And I enter the discontinued date "2020-10-19"
    And I select a random company
    When I click on the button "Create this computer"
    Then The computer is added to the database