#Author: your.email@your.domain.com
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
Feature: Dolna Test Feature
  I want to use this template for my feature file

  #@tag1
  #Scenario: Login Scenario
    #Given User is already on the Login Page
    #When Title of the Login Page is #1 Free CRM software in the cloud for sales and service
    #Then user enters "shaikh92" and "Test@1234"
    #Then Click on the Login Button
    #Then User is on Home Page
    

 @tag1
  Scenario Outline: Login Scenario
    Given User is already in the Login Page
    When Title's of the Login Page is #1 Free CRM software in the cloud for sales and service
    Then user enters "<username>" and "<password>" for login page
    Then Click on the Login Button2
   Then User is on Home Page2
    Then Close the Browser2
    
    Examples:
    | username | password |
    | shaikh92 | Test@1234|
    | Gollie   | Test%67  |
        


 
