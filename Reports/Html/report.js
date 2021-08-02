$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Adactin/fulltesting.feature");
formatter.feature({
  "name": "Validate the adactin website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.step({
  "name": "Login with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Validate search hotel page \"\u003clocation\u003e\" , \"\u003chotels\u003e\", \"\u003croomtype\u003e\", \"\u003croomnos\u003e\", \"\u003ccheckin\u003e\", \"\u003ccheckout\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.step({
  "name": "Book the hotel \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003caddress\u003e\", \"\u003ccreditcard\u003e\", \"\u003ccredittype\u003e\", \"\u003cexpmonth\u003e\", \"\u003cexpyear\u003e\", \"\u003cccv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "roomnos",
        "checkin",
        "checkout",
        "firstname",
        "lastname",
        "address",
        "creditcard",
        "credittype",
        "expmonth",
        "expyear",
        "ccv"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    },
    {
      "cells": [
        "anishdmathew",
        "Mashiah@1",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1",
        "30-06-2021",
        "02-07-2021",
        "Konda",
        "Dinesh",
        "India",
        "1234567890123450",
        "AMEX",
        "2",
        "2022",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate all pages of adactin",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition1.launch_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login with \"anishdmathew\" and \"Mashiah@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition1.login_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate search hotel page \"Sydney\" , \"Hotel Creek\", \"Standard\", \"1\", \"30-06-2021\", \"02-07-2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.validate_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.hotel_confirmation_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Book the hotel \"Konda\", \"Dinesh\", \"India\", \"1234567890123450\", \"AMEX\", \"2\", \"2022\", \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition1.book_the_hotel(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition1.print_the_booking_order()"
});
formatter.result({
  "status": "passed"
});
});