#Author: shaikh@kencloud.co.in
#Keywords Summary :
#Feature: KENCentral Login Page
#Scenario: Test the Login Page as per the requirement
#Given: URL->http://kencloudecosysadmin.azurewebsites.net

@tag
Feature: KENCentral Login Page
  

  @tag1
  Scenario Outline: Test the Login Page Functionality
    Given User is in the Login page
    When Title of the Login page is Login
    Then User enters the "<Email>" in the Email Address field
    Then User enters the "<Password>" in the Password field
		Then Click on the SignIn Button

    Examples: 
      |           Email               |   Password     |
      |   santanu.j@kencloud.co.in		|  	Test@123	   |
      |   santanu.j@kencloud.co.in		|   Test@1234    |
