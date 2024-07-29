
describe('Assertions', () => {  

  // should and and - implicit assertions
  it('implicit assertions', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orange')
    .and('include','orange')
    .and('not.contain','apple')

    cy.title().should('include','Orange')
    .and('eq', 'OrangeHRM')
    .and('contain', 'HRM')

    // check if logo exist
    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist')

    cy.xpath("//a").should('have.length','5') // check no of links

    cy.get("input[placeholder='Username']").type("Admin") //input value

    cy.get("input[placeholder='Username']").should('have.value','Admin')
  })

  it('explicit assertions', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()

    let expName = 'Amanda Diaz'
    cy.get(".oxd-userdropdown-name").then( (x) => {

        // BDD style
        let actName = x.text()
        expect(actName).to.equal(expName)

        // TDD style
        assert.equal(actName,expName)
    }
    )
    
  })

})