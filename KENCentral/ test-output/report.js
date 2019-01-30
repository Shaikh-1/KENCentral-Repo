$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
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
      "value": "#Feature: KENCentral Login Page"
    },
    {
      "line": 4,
      "value": "#Scenario: Test the Login Page as per the requirement"
    },
    {
      "line": 5,
      "value": "#Given: URL-\u003ehttp://kencloudecosysadmin.azurewebsites.net"
    }
  ],
  "line": 8,
  "name": "KENCentral Login Page",
  "description": "",
  "id": "kencentral-login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 7,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Test the Login Page Functionality",
  "description": "",
  "id": "kencentral-login-page;test-the-login-page-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is in the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the Login page is Login",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters the \"\u003cEmail\u003e\" in the Email Address field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters the \"\u003cPassword\u003e\" in the Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on the SignIn Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "kencentral-login-page;test-the-login-page-functionality;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 20,
      "id": "kencentral-login-page;test-the-login-page-functionality;;1"
    },
    {
      "cells": [
        "santanu.j@kencloud.co.in",
        "Test@123"
      ],
      "line": 21,
      "id": "kencentral-login-page;test-the-login-page-functionality;;2"
    },
    {
      "cells": [
        "santanu.j@kencloud.co.in",
        "Test@1234"
      ],
      "line": 22,
      "id": "kencentral-login-page;test-the-login-page-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Test the Login Page Functionality",
  "description": "",
  "id": "kencentral-login-page;test-the-login-page-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tag"
    },
    {
      "line": 11,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is in the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the Login page is Login",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters the \"santanu.j@kencloud.co.in\" in the Email Address field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters the \"Test@123\" in the Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on the SignIn Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_in_the_Login_page()"
});
formatter.result({
  "duration": 10329486264,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_Login_page_is_Login()"
});
formatter.result({
  "duration": 18595868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santanu.j@kencloud.co.in",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.enterUserIdField(String)"
});
formatter.result({
  "duration": 149768959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.userEntersPassword(String)"
});
formatter.result({
  "duration": 115317051,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.userClicksSignInButton()"
});
formatter.result({
  "duration": 52702253,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Test the Login Page Functionality",
  "description": "",
  "id": "kencentral-login-page;test-the-login-page-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tag"
    },
    {
      "line": 11,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is in the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Title of the Login page is Login",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters the \"santanu.j@kencloud.co.in\" in the Email Address field",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters the \"Test@1234\" in the Password field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Click on the SignIn Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_in_the_Login_page()"
});
formatter.result({
  "duration": 6378465261,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_the_Login_page_is_Login()"
});
formatter.result({
  "duration": 14498035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "santanu.j@kencloud.co.in",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.enterUserIdField(String)"
});
formatter.result({
  "duration": 102911255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@1234",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.userEntersPassword(String)"
});
formatter.result({
  "duration": 64952827,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.userClicksSignInButton()"
});
formatter.result({
  "duration": 62951943,
  "status": "passed"
});
});