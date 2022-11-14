describe('Radiobuttons&checkboxes',()=>
{

     it('radio buttons',()=>
     {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
 
        //selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be','checked')

        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be','checked')
     })

     it('Checkboxes',()=>
     {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        cy.get('#monday').check().should('be.checked')
        cy.get('#monday').uncheck().should('not.be','checked')

        cy.get('#tuesday').check().should('be.checked')
        cy.get('#tuesday').uncheck().should('not.be','checked')

        //Selecting all checkboxes

        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //selecting specific checkbox
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
     })
    })