describe('Assertions',()=>
{

     it('Implicit Assertions',()=>
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','opensource-demo')


        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','opensource-demo')

        //cy.url().should('include','orangehrmlive.com')
        //.and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.and('contain','opensource-demo')

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist')

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should('have.value','Admin')

        
     })




     it('Exlicit Assertions',()=>
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()


        //using of explicit wait
        let expName="Paul Collings";

        cy.get(".oxd-userdropdown-name").then((x)=>{


         let actName=x.text()
         expect(expName).to.equal(actName)
        })
        })
      })