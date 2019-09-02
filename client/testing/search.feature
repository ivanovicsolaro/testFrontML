Feature: Search
Scenario: should navigate to the main page
   When I navigate to "http://localhost:4000/"
   Then the title should be "Mercado Libre Test"
   When I click the search button
   When I complete to "MLA798736714" the search input
   When I delete text to the search input
   When I click the search button
   When I complete to "Iphone 6 plus" the search input
   When I delete text to the search input
   When I complete to "Iphone 6 plus 16gb usado" the search input
   When I click the search button

Scenario: should navigate to the result page
   When I delete text to the search input
   When I click the search button
   When I complete to "Samsung A10 32gb" the search input
   When I click the search button
   When I click the fist item of list
   When I complete to "Iphone 6 plus" the search input
   When I delete text to the search input
   When I complete to "MLA798736719" the search input
   When I click the search button
   When I delete text to the search input
   When I complete to "MLA798736714" the search input
   When I click the search button
   

 
