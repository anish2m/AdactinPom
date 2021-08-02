Feature: Validate the adactin website
Scenario Outline: Validate all pages of adactin
Given Launch the website
When Login with "<username>" and "<password>"
And Validate search hotel page "<location>" , "<hotels>", "<roomtype>", "<roomnos>", "<checkin>", "<checkout>"
And Hotel confirmation page
And Book the hotel "<firstname>", "<lastname>", "<address>", "<creditcard>", "<credittype>", "<expmonth>", "<expyear>", "<ccv>"
Then print the booking order  

Examples: 
       |username    |password|location|hotels     |roomtype|roomnos|checkin    |checkout  |firstname|lastname|address|creditcard      |credittype|expmonth|expyear|ccv |
       |anishdmathew|Mashiah@1|Sydney |Hotel Creek|Standard|1      |30-06-2021 |02-07-2021|Konda  |Dinesh    |India  |1234567890123450|AMEX      |2       |2022   |1234|
       