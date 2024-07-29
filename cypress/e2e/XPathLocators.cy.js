describe('XPath Locators', () => {

    it('xpath locators test', () => {
      cy.visit("https://www.saucedemo.com/")
      cy.xpath('//input[@id="user-name"]').type("standard_user")
      cy.xpath('//input[@id="password"]').type("secret_sauce")
      cy.xpath('//input[@id="login-button"]').click()
      cy.xpath('//div[@class="app_logo"]').contains("Swag Labs") //Assertion
      
    })
  
  })