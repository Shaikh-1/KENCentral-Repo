$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shaikh@kencloud.co.in"
    },
    {
      "line": 2,
      "value": "#Keywords Summary : Test The Contact Page"
    },
    {
      "line": 3,
      "value": "#Feature: Contact Page Create Contact"
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Contact Page Feature",
  "description": "I want to use this template for my feature file",
  "id": "contact-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Contact Page Operations",
  "description": "",
  "id": "contact-page-feature;contact-page-operations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Title of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" for contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on the Login Button3",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User is on Home Page3",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User moves to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enters Contact Details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the Browser3",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "contact-page-feature;contact-page-operations;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 36,
      "id": "contact-page-feature;contact-page-operations;;1"
    },
    {
      "cells": [
        "shaikh92",
        "Test@1234",
        "Asit",
        "Nayak",
        "Test Lead"
      ],
      "line": 37,
      "id": "contact-page-feature;contact-page-operations;;2"
    },
    {
      "cells": [
        "shaikh92",
        "Test@1234",
        "Jyoti",
        "Prava",
        "Test Architect"
      ],
      "line": 38,
      "id": "contact-page-feature;contact-page-operations;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Contact Page Operations",
  "description": "",
  "id": "contact-page-feature;contact-page-operations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Title of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"shaikh92\" and \"Test@1234\" for contact page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on the Login Button3",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User is on Home Page3",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User moves to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enters Contact Details \"Asit\" and \"Nayak\" and \"Test Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the Browser3",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinations.userInLoginPage()"
});
formatter.result({
  "duration": 16794282239,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.title_of_login_page()"
});
formatter.result({
  "duration": 9100578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shaikh92",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 28
    }
  ],
  "location": "ContactsStepDefinations.gets_Login(String,String)"
});
formatter.result({
  "duration": 152981161,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.click_loginButton()"
});
formatter.result({
  "duration": 10517824876,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.user_in_HomePage()"
});
formatter.result({
  "duration": 7248108,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2622398409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asit",
      "offset": 29
    },
    {
      "val": "Nayak",
      "offset": 40
    },
    {
      "val": "Test Lead",
      "offset": 52
    }
  ],
  "location": "ContactsStepDefinations.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 2586121482,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.close_Browser()"
});
formatter.result({
  "duration": 132930940,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Contact Page Operations",
  "description": "",
  "id": "contact-page-feature;contact-page-operations;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is already on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Title of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"shaikh92\" and \"Test@1234\" for contact page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click on the Login Button3",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User is on Home Page3",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User moves to New Contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enters Contact Details \"Jyoti\" and \"Prava\" and \"Test Architect\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the Browser3",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsStepDefinations.userInLoginPage()"
});
formatter.result({
  "duration": 15400440593,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.title_of_login_page()"
});
formatter.result({
  "duration": 83695368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shaikh92",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 28
    }
  ],
  "location": "ContactsStepDefinations.gets_Login(String,String)"
});
formatter.result({
  "duration": 180554338,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.click_loginButton()"
});
formatter.result({
  "duration": 10964639229,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.user_in_HomePage()"
});
formatter.result({
  "duration": 10384506,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1835598814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jyoti",
      "offset": 29
    },
    {
      "val": "Prava",
      "offset": 41
    },
    {
      "val": "Test Architect",
      "offset": 53
    }
  ],
  "location": "ContactsStepDefinations.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 2519452494,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinations.close_Browser()"
});
formatter.result({
  "duration": 2312725653,
  "status": "passed"
});
formatter.uri("deals.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: shaikh@kencloud.co.in"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Deals data creation",
  "description": "I want to use this template for my feature file",
  "id": "deals-data-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Create a new Deal Scenario",
  "description": "",
  "id": "deals-data-creation;create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is already at the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Titles of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enters New username and password for Deals page",
  "rows": [
    {
      "cells": [
        "shaikh92",
        "Test@1234"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on the Login Button1",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User is on Home Page1",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User moves to New Deal Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "User enters Deal Details",
  "rows": [
    {
      "cells": [
        "TestDeal",
        "1000",
        "39",
        "98"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Close the Browser1",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinations.user_already_on_login_page()"
});
formatter.result({
  "duration": 11177956117,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinations.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 6719094,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinations.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 120279077,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinations.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7018580968,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinations.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 4806682,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinations.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2011675240,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinations.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 218242670,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinations.close_the_browser()"
});
formatter.result({
  "duration": 991901698,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Dolna Test Feature",
  "description": "I want to use this template for my feature file",
  "id": "dolna-test-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#@tag1"
    },
    {
      "line": 24,
      "value": "#Scenario: Login Scenario"
    },
    {
      "line": 25,
      "value": "#Given User is already on the Login Page"
    },
    {
      "line": 26,
      "value": "#When Title of the Login Page is #1 Free CRM software in the cloud for sales and service"
    },
    {
      "line": 27,
      "value": "#Then user enters \"shaikh92\" and \"Test@1234\""
    },
    {
      "line": 28,
      "value": "#Then Click on the Login Button"
    },
    {
      "line": 29,
      "value": "#Then User is on Home Page"
    }
  ],
  "line": 33,
  "name": "Login Scenario",
  "description": "",
  "id": "dolna-test-feature;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already in the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Title\u0027s of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" for login page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on the Login Button2",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page2",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Close the Browser2",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "dolna-test-feature;login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 42,
      "id": "dolna-test-feature;login-scenario;;1"
    },
    {
      "cells": [
        "shaikh92",
        "Test@1234"
      ],
      "line": 43,
      "id": "dolna-test-feature;login-scenario;;2"
    },
    {
      "cells": [
        "Gollie",
        "Test%67"
      ],
      "line": 44,
      "id": "dolna-test-feature;login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Login Scenario",
  "description": "",
  "id": "dolna-test-feature;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 32,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already in the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Title\u0027s of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"shaikh92\" and \"Test@1234\" for login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on the Login Button2",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page2",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Close the Browser2",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.userInLoginPage()"
});
formatter.result({
  "duration": 17336838898,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 10408849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shaikh92",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 28
    }
  ],
  "location": "LoginStepDefination.gets_Login(String,String)"
});
formatter.result({
  "duration": 361759671,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_loginButton()"
});
formatter.result({
  "duration": 10680981397,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_in_HomePage()"
});
formatter.result({
  "duration": 12456067,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "duration": 122652185,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Login Scenario",
  "description": "",
  "id": "dolna-test-feature;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 32,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User is already in the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Title\u0027s of the Login Page is #1 Free CRM software in the cloud for sales and service",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enters \"Gollie\" and \"Test%67\" for login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on the Login Button2",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page2",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Close the Browser2",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.userInLoginPage()"
});
formatter.result({
  "duration": 15705634652,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 11387567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gollie",
      "offset": 13
    },
    {
      "val": "Test%67",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.gets_Login(String,String)"
});
formatter.result({
  "duration": 375297587,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_loginButton()"
});
formatter.result({
  "duration": 1727706700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_in_HomePage()"
});
formatter.result({
  "duration": 12382512,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinations.LoginStepDefination.user_in_HomePage(LoginStepDefination.java:55)\r\n\tat ✽.Then User is on Home Page2(login.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefination.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});