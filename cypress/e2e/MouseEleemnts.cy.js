import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe('Handling Mouse Elements',()=>
{

     it.skip('Mouseover',()=>
     {
        cy.visit("https://demo.opencart.com/")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('be.visible')
        
 
     })
    })

    it('Right Click',()=>
     {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get('.context-menu-icon-copy > span').rightclick()
        
 
     })

     it('Double Click',()=>
     {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe('#iframeResult').find("p#demo").should('have.text','Hello World')
        
 
     })

     it.only('Drag and Drop',()=>
     {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box7').drag('#box107',{force:true})
        //cy.get('#box5').drag('#box105')
 
     })

     it('Scrolling Up and Down',()=>
     {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(16) > :nth-child(1) > img').should('be.visible')
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView({duration:3000})
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').should('be.visible')
        //to see the footer
        cy.get('#footer').scrollIntoView({duration:2000})
 
     })
    