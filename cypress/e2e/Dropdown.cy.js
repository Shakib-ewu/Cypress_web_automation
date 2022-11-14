describe('Dropdowns',()=>
{

     it.skip('Dropdown with select',()=>
     {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
        .select('Canada')
        .should('have.value','Canada')
 
       
     })
     it.skip('Dropdown without select',()=>
     {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Iran').type('{enter}')
        
        cy.get('#select2-billing_country-container').should('have.text','Iran')
 
       
     })

     it.skip('Auto suggested dropdown',()=>
     {
        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')
        
        cy.get('.suggestion-title').contains('Delhi University').click()
        
        
       
     })

     it('Auto suggested dynamic dropdown',()=>
     {
        cy.visit("https://www.google.com/")

        cy.get('.gLFyf').type("automation step by step")

        cy.wait(3000)


        cy.get('.wM6W7d>span').each (($el,index,$list)=>{
          if($el.text()=="automation step by step")
          {
            cy.wrap($el).click()
          }

        })
        
        cy.get('input.gLFyf').should('have.value','automation step by step')
        
    })
   })