describe('Capture Screenshots',()=>
{

     it('Screenshots',()=>
     {
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("HomePage")
        cy.wait(4000)
        cy.get("img[title='Your Store']").screenshot("Logo")
        
     })

     it.only('Screenshots and videos',()=>
     {
        cy.visit("https://demo.opencart.com/")
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").should('have.text','Sakib')
        
     })
    
})