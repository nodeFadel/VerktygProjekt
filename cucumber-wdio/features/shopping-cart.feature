Feature: Shopping-cart
  As a user I want to be able to add products to
  the shopping cart, change the quantity of added products
  and remove products, so that I can decide what to buy.


  Scenario: loggin with account
    Given that I can see the product list 
    When I can grab the login box
    Then I can see login box
    When I enter email "adam@gmail.com" and password "12345678"
    Then I can tryck the login knapp
    Then I can see that I am logging in

    

  # Scenario: Clicking a buy button and checkout
  #   Given that I can see the product list after I loggin
  #   When I click on the buy button for "Ocean Spray - Ruby Red"
  #   Then 1 item of "Ocean Spray - Ruby Red" should be added to the cart
  #   Then I click on the checkout to send the order and start from null again
    

  