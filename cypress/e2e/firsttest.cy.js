describe('First Test Case',()=>
{

     it('postive testcase',()=>
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
     })
     
     it('negative testcase',()=>
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','orangeHRM2333')
     })
})