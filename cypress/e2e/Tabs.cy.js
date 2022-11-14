describe('Parent child control',()=>
{

     it('Tabs control',()=>
     {
        cy.visit("https://the-internet.herokuapp.com/windows")
        // here we use invoke to remove tager="_blank" if we can't remove it then cypress can't control other tab options

        cy.get('.example > a').invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        //for going back to actual tab
        cy.go('back')
        
       
     })
    })