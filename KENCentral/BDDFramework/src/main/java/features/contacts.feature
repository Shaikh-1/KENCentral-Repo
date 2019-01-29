#Author: shaikh@kencloud.co.in
#Keywords Summary : Test The Contact Page
#Feature: Contact Page Create Contact
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
Feature: Contact Page Feature
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Contact Page Operations
    Given User is already on the Login Page
    When Title of the Login Page is #1 Free CRM software in the cloud for sales and service
    Then user enters "<username>" and "<password>" for contact page
    Then Click on the Login Button3
    Then User is on Home Page3
    Then User moves to New Contact Page
    Then User enters Contact Details "<firstname>" and "<lastname>" and "<position>"
    Then Close the Browser3


    Examples: 
    |  username | password | firstname	 | lastname  | position          |
    |  shaikh92 | Test@1234| Asit        | Nayak     | Test Lead         |
    |  shaikh92 | Test@1234| Jyoti       | Prava     | Test Architect    |
