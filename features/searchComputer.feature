Feature: Add new computers to the database
  As a user
  I want to search through the computers database

  Background: Navigate to homepage
    Given I navigate to the homepage

  Scenario: Search through the computer database
    When I enter the search term "ace"
    And I click on the button "Filter by name"
    Then The search results containing "ace" are displayed