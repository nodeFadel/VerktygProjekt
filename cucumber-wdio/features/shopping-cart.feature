Feature: Shopping-cart
  As a user I want to be able to add products to
  the shopping cart, change the quantity of added products
  and remove products, so that I can decide what to buy and place a order.


  Scenario: login with new account
    Given that I can see the product list 
    When I can write my private information in order to register new account
    

  Scenario: Clicking a buy button and checkout button
    Given that I can see the product list after I login
    When I click on the buy button for "Juice - Orange, Concentrate"
    Then 1 item of "Juice - Orange, Concentrate" should be added to the cart
    Then I click on the checkout button to send the order to the database and start from null again
    

  