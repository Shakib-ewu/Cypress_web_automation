import Login from "../PageObjects/LoginPage2.js";
describe('POM',()=>
{

     it('Page object model',()=>
     {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.Click()
        ln.verifyLoggin()

        
        
        
     })
    })