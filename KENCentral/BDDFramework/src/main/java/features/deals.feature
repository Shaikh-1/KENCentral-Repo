#Author: shaikh@kencloud.co.in
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Deals data creation
  I want to use this template for my feature file

  @tag1
  Scenario: Create a new Deal Scenario
   Given User is already at the Login Page
    When Titles of the Login Page is #1 Free CRM software in the cloud for sales and service
    Then User enters New username and password for Deals page
    | shaikh92 | Test@1234 |
    Then Click on the Login Button1
    Then User is on Home Page1
    Then User moves to New Deal Page
    Then User enters Deal Details 
    | TestDeal| 1000 | 39 | 98 |
    Then Close the Browser1



