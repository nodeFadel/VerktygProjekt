const { Given, When, Then } = require('@wdio/cucumber-framework');
const pauseTime = 3000;

// browser.url - navigate to a page/url
// browser.pause - pause execution for a number of ms
// $ - grab an element
// element: click, setValue


Given('that I can see the product list', async () => {
  await browser.url('/');
  await browser.pause(pauseTime)
});

When(/^I can grab the login box$/, async () => {
  let loginWindow = await $('.login');
  await loginWindow.click();
  await browser.pause(pauseTime);
});

Then(/^I can see login box$/, async () => {
  let loginBox = await $('.loginModal');
  await loginBox.waitForDisplayed(2000);
  await browser.pause(pauseTime);
})

When(/^I enter email "(.*)" and password "(.*)"$/, async (email, password) => {
  let emailField = await $('form[name="login"] input[name ="email"]');
  let passwordField = await $('form[name="login"] input[name ="password"]');
  await emailField.setValue(email);
  // await emailField.waitForDisplayed(pauseTime);
  await passwordField.setValue(password);
  // await passwordField.waitForDisplayed(pauseTime);
  await browser.pause(pauseTime);
});

Then(/^I can tryck the login knapp$/, async () => {
  let loginKnapp = await $('form[name="login"] button[type="submit"]');
  //await loginKnapp.waitForDisplay(pauseTime)
  await loginKnapp.click();
  await browser.pause(pauseTime);
  await browser.url('/');
});

Then(/^I can see that I am logging in$/, async () => {
  let logoutButton = await $('.navButtons .logout');
  await logoutButton.waitForDisplayed(pauseTime);
  // await browser.pause(pauseTime);
  await browser.url('/');
});


/*
Given('that I can see the product list after I loggin', async () => {
  await browser.url('/');
});

When(/^I click on the buy button for "(.*)"$/, async (productName) => {
  // grab all divs that have the class productInList
  let products = await $$('.productInList');
  // create an empty variable called foundProduct
  let foundProduct;
  // loop through all products divs
  for (let product of products) {
    // if we find the text in the divs includes the product name
    if ((await product.getText()).includes(productName)) {
      // then save the productDiv in foundProduct
      foundProduct = product;
    }
  }
  // check that we found a product
  expect(foundProduct).toBeTruthy();
  // grab the buyButton
  let buyButton = await foundProduct.$('.buyButton');
  // scroll the buyButton into view
  await buyButton.scrollIntoView();
  // click the buyButton
  await buyButton.click();
});

Then(/^(\d*) item of "(.*)" should be added to the cart$/, async (quantity, productName) => {
  // get all the table cells in the first row of the table
  // that is the shoppingList/cart
  let tds = await $$('.shoppingCart tr:first-child td');
  // check that we have the expected content in the cart
  await expect(tds[0]).toHaveText(quantity);
  await expect(tds[1]).toHaveText(productName);
  // mostly for humans - scroll to the shopping cart
  await tds[0].scrollIntoView();
  // pause before ending the step
  await browser.pause(pauseTime);
});



Then(/^I click on the checkout to send the order and start from null again$/, async () => {
  let checkoutButton = await $('.checkout');
  await checkoutButton.click();
  await browser.pause(pauseTime);
});*/



