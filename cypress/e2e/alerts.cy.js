describe('Alerts',()=>
{

     it.skip('Js alert -ok button',()=>
     {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        //to catch prompt alert we apply this

        cy.on('windows:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
 
       
     })

     it.only('Js alert -Ok button',()=>
     {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        //to catch prompt alert we apply this

        cy.on('windows:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text','You clicked: Ok')
 
       
     })

     it('Js alert -Cancel button',()=>
     {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        //to catch prompt alert we apply this

        cy.on('windows:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm',()=> false); //cypress closes alert window button by using cancel button

        cy.get('#result').should('have.text','You clicked: Cancel')
 
       
     })

     it('Js alert -Prompt',()=>
     {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

              cy.window().then((sakib)=>{
                cy.stub(sakib,'prompt').returns('welcome')

              })

//here cancel is not working will into this later

        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: welcome')

        
        
       
     })

     it('Js authentication -Alert',()=>
     {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:
                                                                             {usernsme:"admin", 
                                                                             password:"admin"}
     })
     cy.get("div[class='example'] p").should('have.contains','congratulations')

    

        
})
})