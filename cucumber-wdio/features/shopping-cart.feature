Feature: Shopping-cart
  As a user I want to be able to add products to
  the shopping cart, change the quantity of added products
  and remove products, so that I can decide what to buy.

  Scenario: login, Clicking a buy button and checkout
    Given that I can see the product list after I loggin
    When I click on the buy button for "Juice - Orange, Concentrate"
    Then 1 item of "Juice - Orange, Concentrate" should be added to the cart
    Then I click on the checkout to send the order and start from null again
    

  