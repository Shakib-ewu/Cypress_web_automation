describe('Handling Tables',(()=>
{

     beforeEach('Login',()=>
     {
        cy.visit("https://demo.opencart.com/admin/index.php")
        
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()

        //for selecting customres customre
        cy.get('.btn-close').click()
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()


        
     })


     it('Check numb of rows & columns',()=>
     {
        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','10')
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length','7')

      })

      it('Check particular cell of a rows & columns',()=>
     {
        cy.get(".table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)").contains("rs@yopmail.com")
        

      })
      
      it('Check All tables rows & columns in first page',()=>
     {
        cy.get(".table.table-bordered.table-hover>tbody>tr").each (($row, index , $rows)=>
        {
            cy.wrap($row).within (()=>{
               cy.get("td").each (($col, index, cols)=>{
                  cy.log($col.text())

               })
            })
        }
        

      )
   })


   it.only('Pagination',()=>
     {
      /*let totalPages;
        cy.get(".col-sm-6.text-end").then ((e)=>{

        let mytext=e.text()
        totalPages= mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
        cy.log("total number of pages"+totalPages)

      })  */

     
                

      let totalpages=5;
      for (let p=1;p<=totalpages;p++)
      {
         if(totalpages>1)
         {
            cy.log("Total number of pages"+p)
            cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
            cy.wait(3000)
            cy.get(".table.table-bordered.table-hover>tbody>tr").each (($row, index , $rows)=>
            {
               cy.wrap($row).within (()=>{
                  cy.get("td:nth-child(3)").then((e)=>{
                     cy.log(e.text());
     
                  })
               
            })
         })
            

            
         }

      }
    })
    
   })
)