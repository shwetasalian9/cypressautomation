describe('CSS Locators', () => {

    it('css locators test', () => {
      cy.visit("https://www.saucedemo.com/")
      cy.get("#user-name").type("standard_user")
      cy.get("#password").type("secret_sauce")
      cy.get("#login-button").click()
      cy.get(".app_logo").contains("Swag Labs") //Assertion
      
    })
  
  })