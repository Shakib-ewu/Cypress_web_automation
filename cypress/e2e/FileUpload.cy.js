import 'cypress-file-upload';
describe('File Upload',()=>
{

     it('Single File Upload',()=>
     {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test case.txt')
        cy.wait(3000)
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
 
     })

     it('File Upload -Rename',()=>
     {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test case.txt', fileName:'Sakib.txt'})
        cy.wait(3000)
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
 
     })

     it('File Upload - Drag and Drop',()=>
     {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test case.txt',{subjectType:'drag-n-drop'})
        cy.wait(3000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test case.txt')
 
     })
     
     it.only('Multiple File Upload',()=>
     {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test case.txt','list.txt'])
        cy.wait(3000)
        cy.get(':nth-child(6) > strong').contains('Files You Selected:')

 
     })
     it('Multiple File Upload',()=>
     {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('list.txt')
        cy.wait(3000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('list.txt')

 
     })
    })